---
title: "Multifidelity machine learning for molecular excitation energies"
collection: publications
category: manuscript
permalink: /publications/Vinod_MFML2023
excerpt: 'A multifidelity method for excitation energies is developed and tested.'
date: 2023-10-20
venue: 'Journal of Chemical Theory and Computation'
paperurl: 'https://pubs.acs.org/doi/full/10.1021/acs.jctc.3c00882'
bibtexurl: 'https://academicpages.github.io/files/Vinod_MFML2023.bib'
citation: 'Vivin Vinod, Sayan Maity, Peter Zaspel, and Ulrich Kleinekathöfer Journal of Chemical Theory and Computation 2023 19 (21), 7658-7670. DOI: 10.1021/acs.jctc.3c00882 '
---
This work proposes the use of multifidelity machine learning where very little training data from high accuracies is combined with cheaper and less accurate data to achieve the accuracy of the costlier level. The approach is employed to predict vertical excitation energies to the first excited state for three molecules of increasing size.

![](/assets/media/2023/MFMLarenes_TOC.png "Multifidelity Machine Learning for Excitation Energies of Arenes")

The accurate but fast calculation of molecular excited states is still a very challenging topic. For many applications, detailed knowledge of the energy funnel in larger molecular aggregates is of key importance, requiring highly accurate excitation energies. To this end, machine learning techniques can be a very useful tool, though the cost of generating highly accurate training data sets still remains a severe challenge. To overcome this hurdle, this work proposes the use of multifidelity machine learning where very little training data from high accuracies is combined with cheaper and less accurate data to achieve the accuracy of the costlier level. In the present study, the approach is employed to predict vertical excitation energies to the first excited state for three molecules of increasing size, namely, benzene, naphthalene, and anthracene. The energies are trained and tested for conformations stemming from classical molecular dynamics and density functional based tight-binding simulations. It can be shown that the multifidelity machine learning model can achieve the same accuracy as a machine learning model built only on high-cost training data while expending a much lower computational effort to generate the data. The numerical gain observed in these benchmark test calculations was over a factor of 30 but certainly can be much higher for high-accuracy data.
