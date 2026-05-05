---
title: "∆-Machine Learning for LC-DFT-level Excitation Energies of Bacteriochlorophyll Molecules in a LH2 Complex"
collection: publications
category: preprint
permalink: /publications/smaity_deltabcl
excerpt: '∆-ML model enables DFT accuracy simulation of LH2 complex of purple bacteria.'
date: 2025-08-21
venue: 'chemrxiv'
paperurl: 'https://doi.org/10.26434/chemrxiv.15002714/v1'
citation: 'chemrxiv.15002714/v1'
---

<img src="/assets/media/2022/LH2.png" alt="LH2 complex in purple bacteria consists of 2 rings of bacteriochlorophyll." style="width:500px;"/>

Bacteriochlorophyll (BChl) molecules are the key pigments in the light-harvesting complex 2 (LH2) of purple bacteria, driving solar energy conversion. During this process, fluctuations in excitation energies of the pigments at ultrafast timescales, modulated by the surrounding protein environment, govern the excitation dynamics within the complex. Because of the relatively large size of these molecules with 85 atoms and their complex electronic structure, these energy fluctuations have so far been estimated using semi-empirical methods or low-level time-dependent density functional theory (TD-DFT). In this work, we introduce a ∆-machine learning protocol to predict excitation energies at the computationally demanding long-range-corrected (LC) TD-DFT level within a quantum mechanics/molecular mechanics (QM/MM) framework, using a semi-empirical tight-binding analogue (TD-LC-DFTB) as a low-cost reference. Excitation energies for 7.2 million BChl geometries from trajectories of the LH2 complex of Rs. molischianum have been determined at the TD-LC-DFT level, both with and without taking the protein environment into account. Unexpectedly, environmental descriptors did not improve performance, so the final model relies solely on molecular descriptors. The resulting LC-DFT and machine-learned excitation energy fluctuations yield reorganization energies closer to experiment than those based on LC-DFTB. The transferability across BChl binding pockets within the protein is, however, limited.

