---
title: "What Happens When You Overshare? A Look into the BGP Maximum-Prefix Limit"
short_title: "BGP Max Prefix Analysis"
date: 2026-01-15
conference: "ACM IMC 2026"
authors: "Orlando E. Martínez-Durive"
weight: 1
link: ""
---

## Background

Every BGP session has a safety mechanism: the maximum-prefix limit. It's a circuit breaker. Announce more routes than allowed, and the session tears down. It sounds straightforward—but operators don't always configure it accurately, and nobody had looked at scale to see what actually happens.

## What We Did

We analyzed 12 months of BGP announcements from RIPE RIS combined with PeeringDB metadata and CAIDA AS rankings. We wanted to answer three questions: How well do configured limits match reality? How often are they exceeded? What happens to connectivity when they are?

## What We Found

The picture was messier than expected. About 21–27% of ASes declare no limit at all. Among those with declared limits, we found that 14.55% (IPv4) and 11.24% (IPv6) exceed their limits intermittently, and around 2% do so in every snapshot we observed.

The surprising part: when limits trigger, they hit disproportionately. Tier-1 and major peers represent roughly 0.1% of all ASes, but they account for 18.4% of IPv4 session losses. A small network losing connectivity to a major transit provider is not a small problem.

Most exceedances come from organic growth—new address space, deaggregation for better traffic engineering. But the mechanism can't tell the difference between deliberate growth and a route leak. That symmetry is dangerous.

## Takeaway

BGP maximum-prefix limits are doing their job, but they're configured with outdated numbers and information. We recommended dynamic negotiation so limits can evolve with the network, and better monitoring so operators see when they're at risk. The wild needs less guessing and more certainty.
