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

- 🌿 **Environmental Exposure** → Rainfall, Land Surface Temperature, NDVI & Elevation  
- 🏙️ **Built-Environment Morphology** → Building counts, footprint area & road length (H3 hexagons)  
- 👨‍👩‍👧‍👦 **DHS Survey Indicators** → Household size, wealth, electricity access & sample sizes (HR, IR, KR, MR, PR)

**Key Question Answered:**  
Can environmental and built-environment measures be transparently attached to official DHS clusters?

**Answer:** Yes — and the same workflow is ready to scale nationally.

---

## 📊 Key Results at a Glance

| Indicator                              | Value       |
|----------------------------------------|-------------|
| ⬡ H3 Cells Processed                   | **5,634**   |
| 📍 DHS Clusters in FCT                 | **37**      |
| 🌧️ Clusters with Rainfall & LST        | **37 / 37** |
| 🌱 Clusters with NDVI & Elevation      | **35 / 37** |
| 🗂️ Analytical Units                    | H3 Res 8 & 9 |

---

## 🗺️ Interactive Map

> The main visual deliverable of this project.

**🔗 [Click here to open the Interactive Map](./outputs/FCT_Pilot_Full_Integration_Map.html)**  
*(Replace this link after uploading the HTML file)*

**How to use the map:**
- Use the **layer control** (top-left) to switch themes
- Click any **red DHS cluster** to view the full profile
- Toggle between NDVI, Rainfall, LST, Elevation, Buildings & Roads

---

## 📁 Project Deliverables

| Deliverable                        | Description                              | Link |
|------------------------------------|------------------------------------------|------|
| 🗺️ Interactive HTML Map            | Full integration map with pop-ups        | [View Map](./outputs/FCT_Pilot_Full_Integration_Map.html) |
| 📊 Excel Attribute Table           | 37 DHS clusters with all indicators      | [Download Excel](./outputs/FCT_DHS_Clusters_Full_Integrated.xlsx) |
| 📄 Client Technical Report         | Full methodology & interpretation guide  | [View Report](./docs/FCT_Pilot_Client_Report.pdf) |

> ⚠️ **Note:** Replace the links above with the correct paths after you upload the files.

---

## 🛠️ Methodology Summary

1. **H3 Tessellation** → Created hexagonal grid (Resolution 8 & 9) for FCT  
2. **Morphology Analysis** → Calculated buildings and road length per H3 cell  
3. **DHS Cluster Assignment** → Linked 37 clusters to H3 cells  
4. **Environmental Extraction** → CHIRPS, MODIS LST, Landsat NDVI & Copernicus DEM via Google Earth Engine  
5. **Survey Aggregation** → Combined HR, IR, KR, MR & PR modules  
6. **Final Integration** → Produced interactive map + analysis-ready tables

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
