// =====================================================
// 03 - ANNUAL MEAN NDVI (Landsat 8/9) - FCT Pilot
// =====================================================

var FCT = lga.filter(ee.Filter.eq('ADM1NAME', 'FCT, Abuja'));

var landsat = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
  .merge(ee.ImageCollection('LANDSAT/LC09/C02/T1_L2'))
  .filterBounds(FCT)
  .filterDate('2024-01-01', '2025-01-01')
  .filter(ee.Filter.lt('CLOUD_COVER', 20));

function scaleLandsat(image) {
  var optical = image.select('SR_B.*')
    .multiply(0.0000275)
    .add(-0.2);
  return image.addBands(optical, null, true);
}

function calculateNDVI(image) {
  return image.normalizedDifference(['SR_B5', 'SR_B4'])
    .rename('NDVI')
    .copyProperties(image, ['system:time_start']);
}

var annualNDVI = landsat
  .map(scaleLandsat)
  .map(calculateNDVI)
  .mean()
  .clip(FCT);

// Visualization
Map.centerObject(FCT, 9);
Map.addLayer(annualNDVI, {
  min: 0.15, max: 0.55,
  palette: ['#8c510a', '#d8b365', '#f6e8c3', '#c7eae5', '#5ab4ac', '#01665e']
}, 'Annual Mean NDVI 2024');

// Optional Export
Export.image.toDrive({
  image: annualNDVI,
  description: 'FCT_Annual_NDVI_2024',
  folder: 'NIGERIA_DHS_H3_ENVIRONMENTAL',
  fileNamePrefix: 'FCT_Annual_NDVI_2024',
  region: FCT.geometry(),
  scale: 30,
  crs: 'EPSG:4326',
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});
