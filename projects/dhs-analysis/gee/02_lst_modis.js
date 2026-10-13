// =====================================================
// 02 - ANNUAL MEAN LST (MODIS) - FCT Pilot
// =====================================================

var FCT = lga.filter(ee.Filter.eq('ADM1NAME', 'FCT, Abuja'));

var lst = ee.ImageCollection('MODIS/061/MOD11A2')
  .filterBounds(FCT)
  .filterDate('2024-01-01', '2025-01-01')
  .select('LST_Day_1km');

var annualLST = lst.mean()
  .multiply(0.02)
  .subtract(273.15)   // Convert to Celsius
  .clip(FCT);

// Visualization
Map.centerObject(FCT, 9);
Map.addLayer(annualLST, {
  min: 30, max: 36,
  palette: ['#313695', '#74add1', '#fed976', '#fd8d3c', '#e31a1c']
}, 'Annual Mean LST 2024 (°C)');

// Optional Export
Export.image.toDrive({
  image: annualLST,
  description: 'FCT_Annual_LST_2024',
  folder: 'NIGERIA_DHS_H3_ENVIRONMENTAL',
  fileNamePrefix: 'FCT_Annual_LST_2024',
  region: FCT.geometry(),
  scale: 1000,
  crs: 'EPSG:4326',
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});
