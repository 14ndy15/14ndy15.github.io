---
title: "BGP Maximum-Prefix Limits: The Circuit Breaker That Cried Wolf"
short_title: "BGP Max Prefix"
date: 2026-01-15
---

## Motivation

Every BGP session has a safety mechanism: the maximum-prefix limit. It's a circuit breaker designed to prevent route leaks and unexpected behavior. Yet despite its operational significance, little was known empirically about how accurately these limits reflect reality, how often they're exceeded, or what connectivity impact results from their exceedance.

## What We Found

We conducted the first large-scale measurement study of BGP maximum-prefix limits using 12 months of RIPE RIS snapshots combined with PeeringDB metadata and CAIDA AS rankings. Our analysis revealed:

- 21–27% of ASes declare no limit at all
- 14.55% (IPv4) and 11.24% (IPv6) exceed their limits intermittently
- 2.15% (IPv4) and 2.32% (IPv6) do so in every observed snapshot
- Tier-1 and major peers account for 18.4% of IPv4 session losses despite representing only 0.1% of all ASes

{{< img class="teaser-image" src="/img/bgp-belcloud-case.png" alt="BelCloud case study" >}}

*Example showing how BelCloud's prefix announcements exceeded their configured limit.*

## Resources

- **Paper**: [The Circuit Breaker That Cried Wolf: Measuring BGP Maximum-Prefix Exceedance and Connectivity Impact](https://doi.org/10.1145/...) — ACM IMC 2026
- **Talk**: [SEE 14: BGP Maximum-Prefix Limits](/talks/see-14/) (Belgrade, April 2026) and [RIPE 91 Routing Working Group](/talks/ripe-91/) (Bucharest, October 2025)
- **Authors**: Orlando E. Martínez-Durive

## Key Takeaway

BGP maximum-prefix limits are doing their job, but they're configured with outdated numbers and information. We recommended dynamic negotiation so limits can evolve with the network, and better monitoring so operators see when they're at risk.
