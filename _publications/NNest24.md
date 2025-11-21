---
title: "Assessing non-nested configurations of multifidelity machine learning for quantum-chemical properties"
collection: publications
category: manuscript
permalink: /publications/Vinod_Nonnested2024
excerpt: 'How does the heterogeneity of training data structure affect multifidelity methods? Read to find out.'
date: 2024-10-07
venue: 'Machine Learning: Science and Technology'
paperurl: 'https://iopscience.iop.org/article/10.1088/2632-2153/ad7f25/meta'
bibtexurl: 'https://academicpages.github.io/files/Vinod_Nonnested2024.bib'
citation: 'Vivin Vinod and Peter Zaspel 2024 Mach. Learn.: Sci. Technol. 5 045005'
---

![](/assets/media/2024/nonested_results.jpg "Assessing non-nested configurations of multifidelity machine learning for quantum-chemical properties")

Multifidelity machine learning (MFML) for quantum chemical properties has seen strong development in the recent years. The method has been shown to reduce the cost of generating training data for high-accuracy low-cost ML models. In such a set-up, the ML models are trained on molecular geometries and some property of interest computed at various computational chemistry accuracies, or fidelities. These are then combined in training the MFML models. In some multifidelity models, the training data is required to be nested, that is the same molecular geometries are included to calculate the property across all the fidelities. In these multifidelity models, the requirement of a nested configuration restricts the kind of sampling that can be performed while selection training samples at different fidelities. This work assesses the use of non-nested training data for two of these multifidelity methods, namely MFML and optimized MFML (o-MFML). The assessment is carried out for the prediction of ground state energies and first vertical excitation energies of a diverse collection of molecules of the CheMFi dataset. Results indicate that the MFML method still requires a nested structure of training data across the fidelities. However, the o-MFML method shows promising results for non-nested multifidelity training data with model errors comparable to the nested configurations.
