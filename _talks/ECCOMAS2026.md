---
title: "Active Learning and Multifidelity Machine Learning for Molecular Simulations."
collection: talks
type: "Talk"
permalink: /talks/ECCOMAS_2026
venue: "17th World Congress on Computational Mechanics (WCCM) 10th European Congress on Computational Methods in Applied Sciences and Engineering (ECCOMAS)"
date: 2025-07-22
location: "Messe München GmbH, Messegelände, 81823 Munich, Germany"
---

See more at [the official webpage](https://wccm-eccomas2026.org/).

Although development in machine learning (ML) for quantum chemistry (QC) has accelerated discovery, the overhead cost of generating high-fidelity training data has only recently come under consideration. Multifidelity methods can address this issue by combining training data from different levels of accuracy, or fidelities to reduce the number of high-fidelity training samples. At the same time, the use of active learning (AL) schemes promises a reduction in training data set sizes by selecting optimal unlabeled data preventing redundant computations. Both these methods have seen widespread usage in the field of QC including molecular simulations.

In this talk, we present two novel multifidelity methods, namely, Multifidelity Machine Learning (MFML), and Gamma-curve MFML as cost-effective methods in the prediction of excitation energies of molecular trajectories at high fidelity without compromising on ML model accuracy. We show that large-scale simulation of 640k geometries of the 90-atom porphyrin structures can be performed with a cost saving of roughly 850x compared to conventional computational methods. It will be shown that the use of model-variance based AL schemes fails to reduce training data requirements and performs worse than simple random sampling in the chemical configuration space. To remedy this, we present a novel bias-based AL scheme: Low Fidelity as Bias (LFaB). The method utilizes the QC property at a cheap-to-compute fidelity to guide sample selection and is shown to be effective for a range of QC properties including excitation energies and highly accurate ab initio potential energy surfaces at the coupled cluster level of theory, reducing the number of training samples needed by an order of magnitude. 
