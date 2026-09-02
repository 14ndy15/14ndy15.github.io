---
title: "RAN Digital Twin: From Energy Saving to rApp Validation"
short_title: "RAN Digital Twin"
date: 2025-06-01
---

## Motivation

Radio Access Networks (RAN) consume significant energy and face growing pressure to reduce carbon footprint while maintaining Quality of Experience (QoE) for users. Network operators need safe, validated ways to deploy energy-saving policies—yet testing remains challenging due to the complexity of handover dynamics, traffic patterns, and performance interdependencies.

Current testing frameworks focus on API compliance but lack behavioral feedback loops. There is no reactive environment where rApp developers can safely test their automation decisions at realistic scale before live deployment.

## Our Approach

We developed a **Digital Twin** that emulates RAN behavior in response to energy-saving policies—providing the "closed-loop" validation missing from today's platforms. The digital twin serves as:

- **Pre-deployment validation tool** for energy-saving rApps
- **Sandbox environment** for O-RAN developers testing Ericsson EIAP rApps
- **Research curriculum** with test problems spanning single-antenna to city-scale deployments

## Technical Components

### Task 1: Synthetic RAN KPI Generation

We developed a **Generative Adversarial Network (GAN)** that synthesizes realistic traffic loads conditioned on territorial and antenna context features. The model:

- Encodes population density, land use, and road infrastructure as context
- Uses spectral components + residuals to capture frequency patterns and temporal fluctuations
- Incorporates statistical profiling to preserve traffic heterogeneity across antenna clusters
- Generates realistic 15-minute KPI time series for any RAN antenna

### Task 2: Handover Modeling

When capacity antennas switch off, users must handover to neighboring antennas. We developed a physics-based handover model:

- Simulates Reference Signal Receiving Power (RSRP) using **Sionna-RT** radio propagation simulator
- Computes antenna-to-antenna transfer probabilities from signal strength maps
- Models 90%+ handovers within same Radio Access Technology
- Validates against real handover measurements from production networks

### Task 3: Energy and QoE Metrics

We model two opposing dimensions of network performance:

**Energy consumption:** Accounts for baseband processing (fixed) and traffic-dependent power amplifier efficiency across antenna types and frequencies.

**Quality of Experience:** Models QoE as an inverted logistic function dependent on antenna load, with randomness captured via normal distributions to reflect real-world variability.

### Task 4: Curriculum of Tests

We implemented four increasingly complex test scenarios using real Orange MNO deployments in Brussels:

1. **Single Carrier** (4 antennas, 50% capacity)
2. **Same-Site** (12 antennas, 41.6% capacity)
3. **Multi-Site** (167 antennas, 49.7% capacity)
4. **Full Deployment** (3,054 antennas, 38% capacity)

## Implementation

**OpenAPI REST Interface** allows external AI/rApp models to:
- Query network state, traffic demand, and performance metrics
- Submit antenna switch on/off decisions
- Receive energy savings and QoE impact

**Graphical User Interface** for simulation control, deployment visualization, and metrics inspection—enabling developers to familiarize themselves with the digital twin before integrating their own AI models.

## Resources

**Papers & Workshop Presentations:**
- [Full Paper](/papers/DigitalTwin_Paper_MobicomWorkshop2026.pdf) — Complete technical paper submitted to MobiCom 2026 Workshop on Digital Twins
- [Demo Paper](/papers/DigitalTwin_Demo_MobicomWorkshop2026.pdf) — Demo paper describing the rApp enabler for Ericsson EIAP
- [Source Code & Details](paper/) — Complete LaTeX sources with figures and datasets

**Deployment:**
- **Public Instance:** https://digitaltwin.netai.tech/ (credentials available upon request)

## Key Findings

Our validation shows that **energy savings and QoE are in tension**: naive policies that maximize switch-offs dramatically degrade user experience. The need for AI-driven optimization is clear—our digital twin provides the safe sandbox for developing and validating such policies.

The digital twin successfully:
- Generates synthetic traffic with distribution matching real-world observations
- Models handover dynamics consistent with operator measurements (~58% same-site transfers)
- Simulates city-scale networks (3,000+ antennas) in 15-minute increments
- Provides feedback loops for rApp validation before O-RAN deployment

