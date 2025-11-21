---
title: "Investigating Data Hierarchies in Multifidelity Machine Learning for Excitation Energies"
collection: publications
category: manuscript
permalink: /publications/Vinod_monomers_2025
excerpt: 'Develops the novel Γ-curve method and assesses different data scaling hierarchies in multifidelity schemes.'
date: 2025-03-25
venue: 'Journal of Chemical Theory and Computation'
paperurl: 'https://pubs.acs.org/doi/full/10.1021/acs.jctc.4c01491'
bibtexurl: 'https://academicpages.github.io/files/vinod_gamma_2025.bib'
citation: 'Vivin Vinod and Peter Zaspel. Journal of Chemical Theory and Computation 2025 21 (6), 3077-3091. DOI: 10.1021/acs.jctc.4c01491 '
---

![](/assets/media/2025/Gammacurve_TOC.png "Conceptual graphic of this publication.")


Recent progress in machine learning (ML) has made high-accuracy quantum chemistry (QC) calculations more accessible. Of particular interest are multifidelity machine learning (MFML) methods, where training data from differing accuracies or fidelities are used. These methods usually employ a fixed scaling factor, γ, to relate the number of training samples across different fidelities, which reflects the cost and assumed sparsity of the data. This study investigates the impact of modifying γ on model efficiency and accuracy for the prediction of vertical excitation energies using the QeMFi benchmark data set. Further, this work introduces QC compute time-informed scaling factors, denoted as θ, that vary based on QC compute times at different fidelities. A novel error metric, error contours of MFML, is proposed to provide a comprehensive view of model error contributions from each fidelity. The results indicate that high model accuracy can be achieved with just 2 training samples at the target fidelity when a larger number of samples from lower fidelities are used. This is further illustrated through a novel concept, the Γ-curve, which compares model error against the time-cost of generatin
