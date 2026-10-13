# Nigeria DHS–H3 Integration – FCT Pilot

**Environmental Exposure • Built-Environment Morphology • Demographic & Health Survey Integration**

**Author:** Nnachi Ikwuo Nnachi  
**Location:** Federal Capital Territory (FCT), Nigeria  
**Year:** 2024 environmental layers | DHS 2023–24 round  
**Tools:** Google Earth Engine • Google Colab • Python (GeoPandas, Folium)

---

## Project Overview

This pilot demonstrates a complete, reproducible workflow that links three families of information at a consistent spatial scale:

- **Environmental exposure** — Rainfall (CHIRPS), Land Surface Temperature (MODIS), NDVI (Landsat), Elevation (Copernicus DEM)
- **Built-environment morphology** — Building counts, building footprint area, and road length using H3 hexagonal cells
- **DHS survey indicators** — Household size, wealth, electricity access, and sample counts from HR, IR, KR, MR and PR modules

The pilot answers a practical question:  
*Can environmental and built-environment measures be extracted and attached to official DHS clusters in a transparent, reproducible way?*

**Result:** Yes. The same workflow is designed to scale from FCT to other Nigerian states and ultimately to a national product.

---

## Key Results

| Indicator                              | Value          |
|----------------------------------------|----------------|
| H3 cells with environmental attributes | 5,634          |
| DHS clusters in FCT pilot              | 37             |
| Clusters with rainfall & LST           | 37 / 37        |
| Clusters with NDVI & elevation         | 35 / 37        |
| Analytical units                       | H3 resolution 8 + 9 |

---

## Interactive Map

The main visual deliverable is a fully interactive HTML map.

**[Download / View Interactive Map](./outputs/FCT_Pilot_Full_Integration_Map.html)**

> Open the HTML file in any modern browser (Chrome, Firefox, Edge).  
> Use the layer control (top-left) to switch between NDVI, Rainfall, LST, Elevation, Building Count, Road Length and DHS clusters.  
> Click any red DHS cluster point to view the full profile.

---

## Deliverables

| File | Description |
|------|-------------|
| [FCT_Pilot_Full_Integration_Map.html](./outputs/FCT_Pilot_Full_Integration_Map.html) | Interactive summary map |
| [FCT_DHS_Clusters_Full_Integrated.xlsx](./outputs/FCT_DHS_Clusters_Full_Integrated.xlsx) | Cluster-level attribute table |
| [FCT_Pilot_Client_Report.pdf](./docs/FCT_Pilot_Client_Report.pdf) | Full technical client report |

---

## Methodology Summary

1. Create H3 hexagonal tessellation (resolution 8 & 9) for FCT  
2. Calculate building and road morphology per H3 cell  
3. Assign DHS clusters to H3 cells  
4. Prepare environmental rasters in Google Earth Engine  
5. Extract environmental values (point sampling + zonal statistics)  
6. Aggregate DHS household modules (HR–IR–KR–MR–PR) to cluster level  
7. Integrate all layers and generate interactive map + Excel table

---

## Tools Used

- **Google Earth Engine** – Environmental raster preparation
- **Google Colab + Python** – Spatial joins, zonal statistics, survey aggregation, Folium mapping
- **H3** – Discrete global grid system
- **GeoPandas, Rasterio, Folium**

---

## Important Notes

- DHS cluster coordinates are intentionally displaced (standard DHS practice). Values represent the H3 neighbourhood context, not exact household locations.
- Environmental layers represent calendar year 2024.
- This is an FCT pilot. The same pipeline is designed for national scale-up.

---

## Author

**Nnachi Ikwuo Nnachi**  
GIS Specialist | Remote Sensing Analyst | Earth Observation Scientist  

[LinkedIn](https://www.linkedin.com/in/nnachi-nnachi-016390114/) • [Google Scholar](https://scholar.google.com/citations?user=aV0_MHkAAAAJ&hl=en) • [ORCID](https://orcid.org/0000-0002-3455-3450)
