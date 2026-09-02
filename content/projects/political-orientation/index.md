---
title: "Political Orientation and Mobile App Consumption: A Large-Scale Network Data Study"
short_title: "Political Orientation & Digital Consumption"
date: 2024-12-01
---

{{< img class="teaser-image" src="/img/political-orientation-teaser.png" alt="Political Alignment and Mobile Service Consumption" >}}

*Predicted electoral support in the 2019 and 2024 European Parliamentary elections across the Grand Paris region. Maps show (left to right) actual vote shares and model predictions using different data sources: all mobile services, social media only, and socioeconomic indicators.*

## Motivation

How do people's political beliefs relate to their digital platform consumption? While this is a crucial question for understanding contemporary democracies, **large-scale observational evidence across multiple platforms and election cycles remains scarce**.

Traditional approaches rely on surveys (small, biased samples) or social media (self-selected platforms). We take a different approach: analyzing **passive mobile network metadata** to understand how political alignment correlates with digital service usage.

## What We Did

We analyzed passive mobile network data from a major French Mobile Network Operator (MNO) covering approximately **31% of the market** across urban and suburban metropolitan France during two European Parliament elections:

- **2019 European Parliament elections**
- **2024 European Parliament elections**

The dataset captures demands for **tens of mobile services**, including:
- Social media (Facebook, TikTok, Instagram, Twitter)
- News and information platforms
- Messaging services
- Streaming services

We integrated this with socioeconomic indicators and used **Dirichlet regression** to model vote shares as a function of digital consumption patterns.

## Key Findings

**Digital consumption provides independent political signals:**

1. **Party-Specific Patterns**:
   - **Right-wing support** → Associated with higher Facebook and TikTok consumption
   - **Centrist & progressive voters** → Higher online news, Twitter, and Instagram use

2. **Complementary to Traditional Indicators**: Digital consumption provides signals that, for several parties, **match or exceed traditional socioeconomic indicators**. Combining both increases explanatory ability by **up to 28.23%**.

3. **Cross-Election Consistency**: These associations are consistent across 2019 and 2024, providing a **population-scale view** of how mobile platform use relates to political alignment.

4. **Platform Heterogeneity**: Different platforms show distinct political correlations, suggesting platform design and algorithmic curation may influence user bases.

## Impact

This work demonstrates that:
- Network data provides a novel, privacy-respecting window into social behavior
- Platform consumption patterns are surprisingly predictive of political alignment
- Understanding these relationships is essential for digital society research and policy

## Resources

**Paper**: [Digital Consumption and Political Alignment: Evidence from Mobile Data Across Two European Elections in France](https://doi.org/10.1145/3777912.3839827) — ACM Internet Measurement Conference 2026 (IMC '26), Karlsruhe, Germany

**Data & Methods:**
- Passive mobile network metadata from major French MNO (~31% market share)
- Dirichlet regression with socioeconomic feature integration
- Service-level traffic analysis (10+ platforms per user)
- Scope: 2019 & 2024 European Parliamentary elections across metropolitan France
