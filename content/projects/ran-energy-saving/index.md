---
title: "RAN Energy Saving: Evaluating Sustainability Strategies in Production Networks"
short_title: "RAN Energy Saving"
date: 2025-05-01
---

*Dynamic cell sleep strategies: Energy consumption across antenna carriers under different frequency-based power management policies. Analysis from production network deployment.*

{{< img class="teaser-image" src="/img/ran-energy-teaser.png" alt="Temporal diagram of cell sleep dynamics and energy savings policy" >}}

*Example of energy saving strategy. During the policy deployment time window (purple intervals on the x-axis), a PRB utilization (on the y-axis) dropping below the Policy ON threshold puts the cell in sleep mode. A PRB utilization rising above the Policy OFF threshold wakes the cell from sleep mode. The strategy is disabled outside the policy deployment time window.*

## Motivation

The Radio Access Network (RAN) is responsible for more than **70% of the total energy costs** incurred by mobile network operators. Reducing energy consumption at the RAN has major environmental and economic implications for the telecommunications industry.

Lowering energy costs is possible by switching off underutilized carriers at off-peak locations and times. While the scientific community has proposed complex automation solutions, production networks primarily rely on **threshold-based strategies** that run at individual equipment and are typically enabled only overnight.

**The critical gap:** There are no real-world evaluations of the effectiveness of carrier switch-off approaches in reducing actual energy consumption, nor comprehensive assessments of their impact on end users. This is what we address.

## What We Did

We deployed and evaluated **five fixed threshold-based cell sleep policies** in a production network serving large geographical regions in Europe. This is the first comprehensive, large-scale empirical evaluation of RAN sustainability in industry-grade networks.

The study measures:
- **Actual energy savings** achieved under different policies
- **Impact on Quality of Experience** (throughput, availability, user perception)
- **Trade-offs** between energy reduction and service degradation

## Key Findings

Our unprecedented insights from production networks reveal:

1. **Energy-QoE Trade-off**: Threshold-based policies hit a **clear barrier** if zero user degradation is required. Policies that save significant energy inevitably reduce some users' service quality.

2. **Threshold Sensitivity**: Energy savings are highly sensitive to policy thresholds. Higher thresholds enable more carrier switch-offs but degrade user experience proportionally.

3. **Time-of-Day Patterns**: Current approaches (overnight-only activation) underutilize energy-saving potential. Dynamic policies could save significantly more energy by responding to real-time demand patterns.

4. **Industry Gap**: The complexity gap between scientific proposals and practical deployment suggests the need for **more flexible, adaptive approaches** to RAN energy management rather than simple fixed thresholds.

## Resources

- **Paper**: [An Evaluation of RAN Sustainability Strategies in Production Networks](https://doi.org/10.1109/INFOCOM55648.2025.11044549) — IEEE INFOCOM 2025, London, May 2025
- **Data & Methodology**: Real production network data from European MNO
- **Authors**: Orlando E. Martínez-Durive (IMDEA Networks & UC3M), José Suárez-Varela (Telefónica Research), Jesús Omaña Iglesias (Telefónica Research), Andra Lutu (Telefónica Research), Marco Fiore (IMDEA Networks)
