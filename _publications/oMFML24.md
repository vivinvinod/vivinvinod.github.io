---
title: "Optimized multifidelity machine learning for quantum chemistry"
collection: publications
category: manuscript
permalink: /publication/Vinod_oMFML2024
excerpt: 'Data-adapted optimal combination of multifidelity models to achieve better accuracy in prediction.'
date: 2024-03-25
venue: 'Machine Learning: Science and Technology'
paperurl: 'https://iopscience.iop.org/article/10.1088/2632-2153/ad2cef/meta'
bibtexurl: 'https://academicpages.github.io/files/Vinod_oMFML2024.bib'
citation: 'Vivin Vinod et al 2024 Mach. Learn.: Sci. Technol. 5 015054'
---

In this work we implement a data-adapted optimization procedure to combine multifidelity models in a flexible scheme resulting in optimized MFML (o-MFML) that provides superior prediction capabilities. This work benchmarks the o-MFML method in predicting the atomization energies on the QM7b dataset, and again in the prediction of excitation energies for three molecules of growing size. 

![](/assets/media/2024/oMFML_TOC.png "Optimized Multifidelity Machine Learning")

Machine learning (ML) provides access to fast and accurate quantum chemistry (QC) calculations for various properties of interest such as excitation energies. It is often the case that high accuracy in prediction using a ML model, demands a large and costly training set. Various solutions and procedures have been presented to reduce this cost. These include methods such as Δ-ML, hierarchical-ML, and multifidelity machine learning (MFML). MFML combines various Δ-ML like sub-models for various fidelities according to a fixed scheme derived from the sparse grid combination technique. In this work we implement an optimization procedure to combine multifidelity models in a flexible scheme resulting in optimized MFML (o-MFML) that provides superior prediction capabilities. This hyperparameter optimization is carried out on a holdout validation set of the property of interest. This work benchmarks the o-MFML method in predicting the atomization energies on the QM7b dataset, and again in the prediction of excitation energies for three molecules of growing size. The results indicate that o-MFML is a strong methodological improvement over MFML and provides lower error of prediction. Even in cases of poor data distributions and lack of clear hierarchies among the fidelities, which were previously identified as issues for multifidelity methods, the o-MFML is advantageous for the prediction of quantum chemical properties
