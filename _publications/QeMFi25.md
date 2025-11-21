---
title: "QeMFi: A Multifidelity Dataset of Quantum Chemical Properties of Diverse Molecules"
collection: publications
category: manuscript
permalink: /publications/Vinod_QeMFi2025
excerpt: 'Data descriptor for the QeMFi dataset.'
date: 2025-02-03
venue: 'Springer Nature Scientific Data'
paperurl: 'https://www.nature.com/articles/s41597-024-04247-3'
bibtexurl: 'https://academicpages.github.io/files/Vinod_QeMFi2025.bib'
citation: 'Vinod, V., Zaspel, P. QeMFi: A Multifidelity Dataset of Quantum Chemical Properties of Diverse Molecules. Sci Data 12, 202 (2025). https://doi.org/10.1038/s41597-024-04247-3'
---

![](/assets/media/2025/QeMFi_workflow.png "QeMFi Workflow")

Progress in both Machine Learning (ML) and Quantum Chemistry (QC) methods have resulted in high accuracy ML models for QC properties. Datasets such as MD17 and WS22 have been used to benchmark these models at a given level of QC method, or fidelity, which refers to the accuracy of the chosen QC method. Multifidelity ML (MFML) methods, where models are trained on data from more than one fidelity, have shown to be effective over single fidelity methods. Much research is progressing in this direction for diverse applications ranging from energy band gaps to excitation energies. One hurdle for effective research here is the lack of a diverse multifidelity dataset for benchmarking. We provide the Quantum chemistry MultiFidelity (QeMFi) dataset consisting of five fidelities calculated with the TD-DFT formalism. The fidelities differ in their basis set choice: STO-3G, 3-21G, 6-31G, def2-SVP, and def2-TZVP. QeMFi offers to the community a variety of QC properties such as vertical excitation properties and molecular dipole moments. Further QeMFi offers QC computation times allowing for a time benefit benchmark of multifidelity models for ML-QC.
