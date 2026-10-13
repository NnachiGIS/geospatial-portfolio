// =====================================================
// 01 - ANNUAL RAINFALL (CHIRPS) - FCT Pilot
// =====================================================

// Load FCT boundary (make sure the LGA asset is available)
var FCT = lga.filter(ee.Filter.eq('ADM1NAME', 'FCT, Abuja'));

// Annual Rainfall 2024
var chirps = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY')
  .filterBounds(FCT)
  .filterDate('2024-01-01', '2025-01-01')
  .select('precipitation');

var annualRainfall = chirps.sum().clip(FCT);

// Visualization
Map.centerObject(FCT, 9);
Map.addLayer(annualRainfall, {
  min: 1000, max: 1600,
  palette: ['#ffffcc', '#a1dab4', '#41b6c4', '#2c7fb8', '#253494']
}, 'Annual Rainfall 2024 (mm)');

// Optional Export
Export.image.toDrive({
  image: annualRainfall,
  description: 'FCT_Annual_Rainfall_2024',
  folder: 'NIGERIA_DHS_H3_ENVIRONMENTAL',
  fileNamePrefix: 'FCT_Annual_Rainfall_2024',
  region: FCT.geometry(),
  scale: 5566,
  crs: 'EPSG:4326',
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});
