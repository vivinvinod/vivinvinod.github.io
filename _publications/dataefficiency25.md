---
title: "Benchmarking data efficiency in Δ-ML and multifidelity models for quantum chemistry"
collection: publications
category: manuscript
permalink: /publications/Vinod_dataefficiency_2025
excerpt: 'Evaluates cost-efficiency trade-offs in multifidelity methods with applications to excitation energies and molecualr dipole moments.'
date: 2025-07-21
venue: 'The Journal of Chemical Physics'
paperurl: 'https://pubs.aip.org/aip/jcp/article/163/2/024134/3352328'
bibtexurl: 'https://academicpages.github.io/files/vinod_dataeff_2025.bib'
citation: 'Vivin Vinod, Peter Zaspel; Benchmarking data efficiency in Δ-ML and multifidelity models for quantum chemistry. J. Chem. Phys. 21 July 2025; 163 (2): 024134. DOI: 10.1063/5.0272457'
---

This work compares the data costs associated with Δ-ML, multifidelity machine learning (MFML), and optimized MFML in contrast with a newly introduced Multifidelity Δ-Machine Learning (MFΔML) method for the prediction of ground state energies, vertical excitation energies, and the magnitude of the electronic contribution of molecular dipole moments from the multifidelity benchmark dataset QeMFi. This assessment is made on the basis of the training data generation cost associated with each model and is compared with the single fidelity kernel ridge regression case.

![](/assets/media/2025/predicteddeltaML.png "The standard Δ-ML incurs a heavy cost while running predictions as opposed to MFML methods.")

The development of machine learning (ML) methods has made quantum chemistry (QC) calculations more accessible by reducing the computational cost incurred in conventional QC methods. This has since been translated into the overhead cost of generating training data. Increased work in reducing the cost of generating training data resulted in the development of Δ-ML and multifidelity machine learning methods, which use data at more than one QC level of accuracy, or fidelity. This work compares the data costs associated with Δ-ML, multifidelity machine learning (MFML), and optimized MFML in contrast with a newly introduced MultifidelityΔ-Machine Learning (MFΔML) method for the prediction of ground state energies, vertical excitation energies, and the magnitude of the electronic contribution of molecular dipole moments from the multifidelity benchmark dataset QeMFi. This assessment is made on the basis of the training data generation cost associated with each model and is compared with the single fidelity kernel ridge regression case. The results indicate that the use of multifidelity methods surpasses the standard Δ-ML approaches in cases of a large number of predictions. In applications where only a few numbers of predictions/evaluations are to be made using ML models, the herein developed MFΔML method is shown to provide an added advantage over conventional Δ-ML.
