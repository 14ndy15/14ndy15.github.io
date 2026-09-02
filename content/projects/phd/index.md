---
title: "PhD Defense: Understanding Societal Phenomena and Network Operations with Mobile Metadata"
short_title: "PhD Defense (Cum Laude)"
date: 2025-07-01
event: "PhD Defense"
location: "Carlos III University, Madrid"
---

{{< img class="teaser-image" src="/img/phd-defense-teaser.jpg" alt="PhD Defense - IMDEA Networks Madrid" >}}

## Thesis Overview

This PhD thesis explores the use of **mobile network metadata as sensors for understanding human behavior, societal phenomena, and optimizing network operations**. Mobile networks generate vast amounts of data about traffic patterns, user mobility, and service consumption—providing unprecedented insights into urban dynamics and social trends.

## Thesis Abstract

Mobile networks play a fundamental role in modern society while generating vast metadata about human behavior. This thesis explores applications of mobile network metadata to social analyses and network infrastructure sustainability, while addressing key challenges like geolocation accuracy and data accessibility.

**Core contributions:**
- Enhanced geolocation methods improving accuracy by 55%+
- NetMob dataset for democratizing mobile metadata research  
- Novel analysis of political behavior through mobile service consumption
- Tensor decomposition for urban land use understanding
- Empirical evaluation of RAN energy-saving strategies

## Thesis Structure & Chapters

### Chapter 1: Introduction
- Mobile networks as dynamic, evolving infrastructures
- Technological coexistence (2G through 5G) and spectrum transitions
- The role of metadata in network optimization and societal understanding

### Chapter 2: Background
- Mobile network architecture and monitoring infrastructure
- Types of metadata: traffic volumes, handovers, channel statistics, user presence
- Spatial mapping and geolocation approaches
- Applications across human mobility, urban planning, and disease tracking
- Privacy and data protection considerations

### Chapter 3: Geolocation and Spatial Accuracy
- **Problem:** Traditional Voronoi tessellation misrepresents traffic distribution
- **Solutions:** VoronoiBoost and DeepMend (deep learning probabilistic models)
- **Result:** 55%+ accuracy improvement over traditional methods
- **Applications:** Virtual RAN planning, dynamic population estimation

### Chapter 4: NetMob Dataset and Data Democratization
- **Challenge:** Limited access to mobile network datasets restricts research
- **Solution:** NetMob23 dataset with service-level granularity across 20 French cities
- **Impact:** Active research community, reproducible methods, new research lines

### Chapter 5: Political Behavior Analysis
- **Case Study:** 2019 & 2024 French European Parliamentary elections
- **Finding:** Mobile service consumption predicts voting (20-70% variance improvement)
- **Patterns:** Right-wing ↔ Facebook/TikTok; Progressive ↔ Twitter/Instagram
- **Insight:** Digital consumption reveals political alignment across platforms

### Chapter 6: Urban Dynamics and Social Phenomena
- **Methods:** Tensor decomposition for latent pattern discovery
- **Applications:** Land use inference, functional area identification
- **COVID-19 Analysis:** Lockdown impact on digital behavior and mobility
- **Key Finding:** Service-level detail reveals patterns masked by aggregation

### Chapter 7: RAN Energy Sustainability
- **Study:** Five threshold-based energy-saving policies in production network
- **Metrics:** Energy consumption, downtime, user experience trade-offs
- **Result:** Clear energy-QoE barrier—cannot save energy without affecting users
- **Implication:** Need for flexible, AI-driven optimization approaches

### Chapter 8: Conclusions & Future Directions
- Mobile network metadata as powerful sensor for society and operations
- Path forward: Advanced ML, real-time optimization, privacy-preserving methods

## Resources

- **Full Thesis:** [PhD Thesis (PDF) — IMDEA Networks dSpace](https://dspace.networks.imdea.org/bitstream/handle/20.500.12761/1991/PhD_Thesis_Orlando.pdf?sequence=1&isAllowed=y) — Complete dissertation with all chapters, figures, and references
- **Source & Figures:** [LaTeX Sources](phd-defense/) — Complete thesis source code and all figures

## Related Projects

Key research from the thesis is available as individual projects:
- [BGP Maximum-Prefix Limits](/projects/bgp-max-prefix/) — Network stability analysis
- [RAN Energy Saving](/projects/ran-energy-saving/) — Sustainability strategies in production networks
- [Political Orientation & Digital Consumption](/projects/political-orientation/) — Electoral analysis
- [NetMob Dataset](/projects/netmob-dataset/) — Service-level traffic data release
- [RAN Digital Twin](/projects/ran-digital-twin/) — AI-driven network validation

## Publications

The thesis is built on peer-reviewed publications in top venues:
- **IEEE INFOCOM** (×3)
- **IEEE SECON** (×2)
- **ACM IMC**
- **IEEE/IFIP TMA**
- Workshop and conference proceedings
