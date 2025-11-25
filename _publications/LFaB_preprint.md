---
title: "LFaB: Low fidelity as Bias for Active Learning in the chemical configuration space"
collection: publications
category: preprint
permalink: /publications/LoUQ_2025
excerpt: 'Proposes a novel low-fidelity guided active learning scheme that reduces the bias of the model.'
date: 2025-08-21
venue: 'arXiv'
paperurl: 'https://arxiv.org/abs/2508.15577'
citation: 'arXiv:2508.15577 [physics.chem-ph]'
---

This work proposes a novel low-fidelity informed uncertainty quantification for active learning with applications in predicting diverse quantum chemical properties such as excitation energies and ab initio potential energy surfaces. Computational experiments are carried out in order to assess the proposed method with results demonstrating that models trained with the novel method outperform alternatives in terms of empirical error and number of iterations required. The effect of the choice of fidelity is also studied to perform a thorough benchmark.

![](/assets/media/2025/LFaB_TOC.png "Low fidelity as bias for active learning in chemical configuration space")

Active learning promises to provide an optimal training sample selection procedure in the construction of machine learning models. It often relies on minimizing the model's variance, which is assumed to decrease the prediction error. Still, it is frequently even less efficient than a pure random sampling. Motivated by the bias-variance decomposition, we propose to minimize the model's bias instead of its variance. By doing so, we are able to almost exactly match the best-case error over all possible greedy sample selection procedures. Our bias approximation is based on using cheap to calculate low-fidelity data as known from Δ-ML or multifidelity machine learning. We exemplify our approach for a wider class of applications in quantum chemistry including predicting excitation energies and ab initio potential energy surfaces. Here, the proposed method reduces training data consumption by up to an order of magnitude compared to standard active learning.
