---
layout: archive
title: "Active Areas of Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

Please take a look at the [Publications](https://vivinvinod.github.io/publications/) section for peer-reviewed and published research.


## Machine Learning Method Development
Developing novel kernel-based regression methods for diverse applications, specifically focusing on Gaussian Process Regression (GPR) enhancements to address key challenges. Construction of neural network architectures specifically tailored for predicting electronic structure properties (e.g., forces, energy) with a focus on enforcing physical symmetries and equivariance.

### Multifidelity Methods

![](/assets/media/MFML.png "Multifidelity machine learning for training data computed at varying accuracy.")


Multifidelity methods combine data from different degrees of accuracy. The central aim with these methods is to produce low-sot high-accuracy machine learning models that provide robust and fast predictions at a fraction of the cost of conventional methods. Analysing the hierarchical approach is the core of Vivin's current research. 

### Active Learning and Uncertainty Quantification
![](/assets/media/AL_concept.png "Active learning for training data distillation")
Active learning schemes enable the reduction in redundancy, and thereby cost, of generating training data. Novel sampling schemes for pool-based active learning ([see this work](/publications/LoUQ_2025)) enable minimizing labelling costs for low-data regimes such as quantum chemical simulations. This allows to refine machine learning models and establish uncertainty bounds for predictions. Several acquisition metrics the developed methods target regions of high epistemic uncertainty while reducing overaall empirical error.

## Applications
Development of methods is only effective if the methods are useful for hands-on applications. The second general area of research is identifying areas of implementation for the diverse methods developed, spanning from atomic scales to macro-economic systems.

### Quantum Chemistry with Machine Learning
![](/assets/media/MLQC_pipeline.png "Machine Learning for Quantum Chemistry")
The primary focus of developed methods is their use in predicting quantum chemical properties ranging from high accuracy *ab initio* potential energy surfaces to excited state energies of complex photochemical molecules and light harvesting complexes. Research involves mapping the high-dimensional nuclear coordinate space to electronic observables, facilitating long-time scale molecular dynamics simulations that would otherwise be computationally prohibitive. Special emphasis is placed on capturing non-adiabatic transitions and the subtle electronic effects in transition metal complexes.


### Economics and Finance
![](/assets/media/CDS.png "Credit default swap transaction")
The use of Machine Learning techniques to price derivatives and options is an excitign field of research. Vivin has previous expertise on the use of deep-UNET models for the volatile [pricing of catastrophe swaps](/files/Masters_Thesis_VINOD.pdf). His work also extends to modelling the general credit risk as a Martingale process quantifying risk using machine learning models. This involves the application of stochastic calculus within a supervised learning framework to ensure that model predictions remain consistent with no-arbitrage conditions and fundamental financial theorems.



