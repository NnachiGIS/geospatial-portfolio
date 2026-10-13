# 🛰️ Nigeria DHS–H3 Integration Project
### Federal Capital Territory (FCT) Pilot

<p align="center">
  <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Location-FCT%2C%20Nigeria-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Year-2024-orange?style=for-the-badge" />
</p>

<p align="center">
  <b>Environmental Exposure • Built-Environment Morphology • Demographic & Health Survey Integration</b>
</p>

---

## 🌍 Project Overview

This pilot demonstrates a complete and reproducible workflow that links three critical families of information at a consistent spatial scale:

- 🌿 **Environmental Exposure** → Rainfall (CHIRPS), Land Surface Temperature (MODIS), NDVI (Landsat) & Elevation (Copernicus DEM)  
- 🏙️ **Built-Environment Morphology** → Building counts, footprint area & road length using H3 hexagonal cells  
- 👨‍👩‍👧‍👦 **DHS Survey Indicators** → Household size, wealth, electricity access & sample sizes (HR, IR, KR, MR, PR modules)

**Key Question:**  
Can environmental and built-environment measures be transparently and reproducibly attached to official DHS clusters?

**Answer:** Yes — and the same workflow is designed to scale from FCT to a national product.

---

## 📊 Key Results at a Glance

| Indicator                              | Value       |
|----------------------------------------|-------------|
| ⬡ H3 Cells Processed                   | **5,634**   |
| 📍 DHS Clusters in FCT                 | **37**      |
| 🌧️ Clusters with Rainfall & LST        | **37 / 37** |
| 🌱 Clusters with NDVI & Elevation      | **35 / 37** |
| 🗂️ Analytical Units                    | H3 Resolution 8 & 9 |

---

## 🗺️ Interactive Map

The main visual deliverable is a fully interactive HTML map.

**📦 [Download Interactive Map (ZIP)](./outputs/FCT_Pilot_Full_Integration_Map_FINAL.zip)**

> **How to view the map:**  
> 1. Download the ZIP file  
> 2. Extract it  
> 3. Open the HTML file in Chrome, Firefox, or Edge  

**Map Features:**
- Switch between NDVI, Rainfall, LST, Elevation, Building Count & Road Length
- Click any red DHS cluster to view full environmental + socioeconomic profile
- Multiple basemaps (OpenStreetMap, Satellite, Topographic)

---

## 📁 Project Deliverables

| Deliverable                        | Description                                      | Link |
|------------------------------------|--------------------------------------------------|------|
| 🗺️ Interactive Map                 | Full integration map with cluster pop-ups        | [Download ZIP](./outputs/FCT_Pilot_Full_Integration_Map_FINAL.zip) |
| 📊 Excel Attribute Table           | 37 DHS clusters with all indicators              | [Download Excel](./outputs/FCT_DHS_Clusters_Full_Integrated.xlsx) |
| 📄 Client Technical Report         | Full methodology & interpretation guide          | [View Report](./doc/FCT_Pilot_Client_Report.pdf) |

---

## 🛠️ Methodology Summary

1. Created H3 hexagonal tessellation (Resolution 8 & 9) covering FCT  
2. Calculated building and road morphology per H3 cell  
3. Assigned 37 DHS clusters to their corresponding H3 cells  
4. Prepared environmental rasters in **Google Earth Engine**  
5. Extracted environmental values using point sampling + zonal statistics  
6. Aggregated DHS modules (HR – IR – KR – MR – PR) to cluster level  
7. Integrated all layers and generated the interactive map + analysis-ready tables

---

## 🧰 Tools & Technologies

<p>
  <img src="https://img.shields.io/badge/Google%20Earth%20Engine-4285F4?style=flat-square&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Google%20Colab-F9AB00?style=flat-square&logo=googlecolab&logoColor=black" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/GeoPandas-139C5A?style=flat-square" />
  <img src="https://img.shields.io/badge/Folium-77B829?style=flat-square" />
  <img src="https://img.shields.io/badge/H3-FF6B00?style=flat-square" />
</p>

---

## ⚠️ Important Notes

- DHS cluster coordinates are **intentionally displaced** (standard DHS protocol). Values represent the surrounding H3 neighbourhood, not exact household locations.
- Environmental layers represent **calendar year 2024**.
- This is an **FCT Pilot** designed for future national scale-up.

---

## 👤 Author

**Nnachi Ikwuo Nnachi**  
GIS Specialist • Remote Sensing Analyst • Earth Observation Scientist

<p>
  <a href="https://www.linkedin.com/in/nnachi-nnachi-016390114/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://scholar.google.com/citations?user=aV0_MHkAAAAJ&hl=en">
    <img src="https://img.shields.io/badge/Google%20Scholar-4285F4?style=flat-square&logo=googlescholar&logoColor=white" />
  </a>
  <a href="https://orcid.org/0000-0002-3455-3450">
    <img src="https://img.shields.io/badge/ORCID-A6CE39?style=flat-square&logo=orcid&logoColor=white" />
  </a>
</p>

---

<p align="center">
  <i>Transforming Earth Observation into actionable environmental intelligence.</i>
</p>
