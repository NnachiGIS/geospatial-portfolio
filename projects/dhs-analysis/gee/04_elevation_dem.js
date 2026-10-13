// =====================================================
// 04 - ELEVATION (Copernicus DEM GLO-30) - FCT Pilot
// =====================================================

var FCT = lga.filter(ee.Filter.eq('ADM1NAME', 'FCT, Abuja'));

var dem = ee.ImageCollection('COPERNICUS/DEM/GLO30')
  .select('DEM')
  .mosaic()
  .clip(FCT);

// Visualization
Map.centerObject(FCT, 9);
Map.addLayer(dem, {
  min: 100, max: 700,
  palette: ['#f7fcb9', '#addd8e', '#41ab5d', '#006837']
}, 'Elevation (m)');

// Optional Export
Export.image.toDrive({
  image: dem,
  description: 'FCT_Elevation_DEM',
  folder: 'NIGERIA_DHS_H3_ENVIRONMENTAL',
  fileNamePrefix: 'FCT_Elevation_DEM',
  region: FCT.geometry(),
  scale: 30,
  crs: 'EPSG:4326',
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});
