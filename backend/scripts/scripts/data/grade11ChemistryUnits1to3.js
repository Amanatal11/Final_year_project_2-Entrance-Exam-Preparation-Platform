/**
 * Grade 11 Chemistry curriculum — Units 1–3 (Ethiopia MoE outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Fundamental concepts in chemistry',
    chapterDescription:
      'Scope of chemistry as a discipline; SI units and prefixes; uncertainty, precision, accuracy, and significant figures; scientific notation; observation, measurement, safety, and the experimental nature of chemistry.',
    topics: [
      {
        topicName: 'Scope of chemistry',
        topicDescription:
          'What chemists study (matter and change); chemistry in agriculture, health, sanitation, textiles, metallurgy, energy, pharmaceuticals, Ethiopian industry (survey level).',
        topicObjectives: [
          'Describe chemistry as the study of matter and its transformations.',
          'Give examples linking chemistry with everyday materials, fertilizers, fuels, medicines, dyes, alloys.',
          'Place chemistry beside other STEM fields as an empirical and quantitative discipline.',
        ],
      },
      {
        topicName: 'SI units and prefixes',
        topicDescription:
          'Base SI quantities for chemistry labs: mass, length, time, temperature, amount, volume; common prefixes milli–mega; coherent use of mole, mol L⁻¹, joule, kelvin linkage to °C scales.',
        topicObjectives: [
          'Choose appropriate SI-derived units used in mole and laboratory procedures.',
          'Convert measurements using milli-, micro-, kilo-, and mega- prefixes systematically.',
        ],
      },
      {
        topicName: 'Uncertainty, precision, accuracy and significant figures',
        topicDescription:
          'Accuracy vs precision; random vs systematic error; rulers, balances, volumetric ware; averaging; rules for addition and multiplication/significant-digit reporting.',
        topicObjectives: [
          'Distinguish precision (scatter) from accuracy (offset from accepted value).',
          'Identify common laboratory sources of systematic and random uncertainty.',
          'Apply textbook significant-figure rules to sums/products and averages.',
        ],
      },
      {
        topicName: 'Scientific notation and calculations',
        topicDescription:
          'Normalized exponential form for large and tiny numbers; order-of-magnitude checks; calculators and exponent laws; chaining stoichiometric steps without sloppy unit slips.',
        topicObjectives: [
          'Convert ordinary decimals to normalized scientific notation and vice versa.',
          'Estimate answers by rounding to nearest power of ten.',
          'Carry mole and concentration computations with disciplined unit tracking.',
        ],
      },
      {
        topicName: 'Chemistry as an experimental science',
        topicDescription:
          'Laboratory ethos: reproducibility, calibrated instruments, notebooks, SDS pictograms, PPE basics, distinguishing qualitative cues from quantitative data.',
        topicObjectives: [
          'Describe the investigation loop from question → experiment → evidence → refinement (survey).',
          'State why accurate labelling of reagents matters for safety.',
          'Relate repeatable procedures plus calibration to credible measurements.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Focus', 'Chemistry principally concerns:', ['Only star names', 'Matter composition and rearrangement introductory', 'Only map contours', 'Only grammar'], 1, 'Easy'),
      ex(1, 'Prefix', 'The prefix micro (μ) on metre means multiplier:', ['10⁻⁶', '10⁹', '10³', '10⁻³'], 0, 'Easy'),
      ex(1, 'Mol', 'One mole contains Avogadro-specified countable entities (~6 × 10²³) linking to:', ['Mass in grams wrongly alone false', 'Molar conversions introductory', 'Only temperature', 'Only length'], 1, 'Easy'),
      ex(2, 'Multiplication SF', '2.55 × 1.10 → often report introductory rule:', ['About 2.805', 'Near 2.81', 'Exactly 280.5 × 10⁻² odd', '0.28'], 1, 'Medium'),
      ex(2, 'Dartboard', 'Tight grouping far from bulls-eye intuitively stresses:', ['High precision low accuracy introductory cartoon', 'High accuracy automatically', 'No errors possible', 'Only systematic-free'], 0, 'Medium'),
      ex(3, 'Tiny number', '0.0000860 retains trailing zero idea; scientific form near:', ['8.60 × 10⁻⁵ if keeping SF lesson-dependent', '8.6 × 10³', '86 × 10²', '0.86 × 10⁶'], 0, 'Medium'),
      ex(3, 'Orders', '(3 × 10⁸)(2 × 10⁻²)/(1 × 10⁵) is order-of-magnitude about:', ['6 × 10¹ introductory rough', '6 × 10¹⁶', '6 × 10⁻¹¹', '3 × 10⁰'], 0, 'Medium'),
      ex(4, 'Whiff rule', 'To smell cautiously laboratories teach:', ['Deep sniff plunging nose', 'Waft vapour with hand introductory', 'Taste spatula edge', 'Unlabeled trust'], 1, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Scope of chemistry',
        problems: [
          P('Chemists systematically explore:', ['Matter changes and formulations introductory', 'Only folk dance', 'Only politics alone', 'Only telescope mirrors'], 'A'),
          P('PVC pipes example ties to:', ['Industrial polymer formulation introductory survey', 'Only mountain names', 'Only musical beats', 'No chemistry false simplistic'], 'A'),
          P('Soil acidity liming engages:', ['Neutralization/material balance introductory agriculture survey', 'Only drawing maps', 'Only star brightness', 'No measurement'], 'A'),
          P('Water purification plants lean on:', ['Filtration/coagulation disinfection chemistry survey intro', 'Only poetry quotas', 'Only GPS hiking', 'No reactions false'], 'A'),
          P('Battery manufacturing involves:', ['Redox electrolyte engineered materials introductory light', 'Only carpentry unrelated false absolute', 'Only sky colour', 'No ions false'], 'A'),
          P('Vitamin fortification labeling reflects:', ['Analytical nutrient chemistry introductory', 'Only font serif choice', 'Only clothing fashion', 'No measurement'], 'A'),
          P('Textile dyes historically involve:', ['Synthetic or natural chromophore molecules introductory survey', 'Only weaving patterns without chemistry false naive', 'Only GPS tracking', 'Only sand castles'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — SI units and prefixes',
        problems: [
          P('Kelvin anchors absolute scale where zero implies:', ['No thermal motion idealized introductory conceptual', 'Freezing distilled water falsely', 'Room comfort only', 'Boiling ammonia'], 'A'),
          P('Mega on watt gives:', ['10⁶ watts introductory prefix', '10⁻⁶ watts', '10³ watts exactly always false', '1 watt'], 'A'),
          P('Centi prefix means:', ['10⁻² introductory', '10² hecto flipped false', '10⁻³ milli confused', '10⁹ mega confused'], 'A'),
          P('Molality symbolically depends on:', ['Moles per kilogram solvent introductory definition', 'Moles per litre solution always confusion point false for molality itself', 'Kilograms per mole reversed', 'Pascal seconds'], 'A'),
          P('dm³ litre link classroom:', ['Roughly identical introductory practical glassware context', '1 dm³ equals 1 mm³ nonsense', 'dm³ unrelated to liquids false', 'Replaces mole'], 'A'),
          P('SI amount base unit uniquely:', ['Mole distinguishing counting chemical entities introductory', 'Kilogram for amount false common mistake', 'Second', 'Kelvin hue'], 'A'),
          P('Nano on gram denotes:', ['10⁻⁹ g introductory', '10⁹ tonnes false', '1 g exactly', '10⁻³ g milli confused opposite'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — Uncertainty and significant figures',
        problems: [
          P('Systematic ruler zero error tends to:', ['Shift all readings similarly introductory', 'Cancel by averaging blindly always false misconception', 'Only random scatter', 'Delete glassware'], 'A'),
          P('Poor balance calibration may cause:', ['Consistent bias offset introductory', 'Impossible duplication false', 'Only aesthetic errors', 'Nuclear fallout unlikely lab'], 'A'),
          P('When multiplying, reported SF often limited by:', ['Factor carrying fewest significant figures introductory simplistic rule lesson', 'Longest decimal string blindly false', 'Mentor mood', 'Graph colour'], 'A'),
          P('Meniscus reading at awkward angle biases volume:', ['Systematic volume error introductory parallax wording', 'Only random teleportation nonsense', 'Improves accuracy always false', 'Removes titre'], 'A'),
          P('Uncertainty bars on graphs convey:', ['Plausible variability envelope introductory qualitative', 'Exact truth certitude false', 'Decorative polka dots irrelevant', 'Nuclear masses always'], 'A'),
          P('Leading zeros placeholders like 0.0045:', ['Typically not counted as SF introductory wording', 'Count as infinitely many SF false joke', 'Make number larger magnitude false', 'Delete element identity'], 'A'),
          P('Electronic balance last digit flicker suggests:', ['Resolution/limit readability introductory talk', 'Exact rational number certainty false', 'Useless datum always false nuanced', 'Nuclear instability'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — Scientific notation',
        problems: [
          P('7.8 × 10⁻³ equals ordinary decimal:', ['0.0078 introductory', '780', '−780', '7800'], 'A'),
          P('Coefficient should usually satisfy normalized style:', ['Between 1 and 10 multiplied by integer power introductory textbook norm', 'Arbitrary gigantic coefficients without adjustment lesson expects tidy', 'Only negative decimals awkward', 'No coefficient'], 'A'),
          P('Subtracting nearly equal masses risks:', ['Catastrophic loss of significant digits cancellation introductory caution', 'Gain infinite digits falsely', 'No math needed', 'Improved precision always false simplistic'], 'A'),
          P('Order-of-magnitude estimate of moles linking to ~10²⁴ particles might read:', ['Tens-of-moles ballpark introductory heuristic not exact quiz', 'Exactly one mole always forced false', 'Zero moles nonsense', 'Moles unrelated false'], 'A'),
          P('Dividing 9 × 10⁶ by 3 × 10² yields cleanly:', ['About 3 × 10⁴ introductory mental', '3 × 10⁻⁴ falsely subtract exponents wrong way', '3 × 10⁸ falsely add numerator exponents blindly', '0.333'], 'A'),
          P('Very large national debt style joke aside chemistry uses notation for:', ['Avogadro-scale counts introductory seriousness', 'Only shoe sizes irrelevant', 'Only sports scores mundane', 'No reason'], 'A'),
          P('Rounding 6.0749 to three SF gives:', ['6.07 introductory truncation rule', '6.07490 longer false', '6', '607'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — Experimental chemistry',
        problems: [
          P('Controlled experiment idea isolates:', ['One manipulated variable responsibly introductory simplistic', 'All variables drifting randomly unethical messy', 'No recording', 'Only marketing KPI'], 'A'),
          P('Replicates across groups help:', ['Assess variability introductory statistics light', 'Guarantee theory truth absolute false philosophical', 'Remove ethical review false unrelated', 'Delete waste rules false opposite'], 'A'),
          P('Waste segregation in lab commonly:', ['Separates incompatible hazards introductory survey', 'Encourages dumping acids on metals randomly false irresponsible', 'Replaces goggles', 'Obstructs learning false opposite'], 'A'),
          P('Bunsen burner air hole adjusts:', ['Oxidant mixing affecting flame completeness introductory qualitative', 'Nuclear neutron flux false absurd', 'Molar masses', 'SDS typography'], 'A'),
          P('Lab notebook disciplined entries support:', ['Traceability reproducibility introductory', 'TikTok choreography', 'Random erasing evidence unethical', 'Only doodles'], 'A'),
          P('Breaking glassware chemically should trigger:', ['Report/cleanup containment introductory safety culture', 'Ignore shards false dangerous', 'Hide incident unethical', 'Speedrun barefoot false joke reject'], 'A'),
          P('Graduated cylinders vs volumetric flasks differ mainly:', ['Rough vs fixed calibration final volume introductory', 'Identical precision generally false nuanced', 'Only colour aesthetic', 'No volume meaning'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Atomic structure and periodic table',
    chapterDescription:
      'Historical and modern atomic models; nucleus and subatomic particles; electromagnetic radiation and line spectra introductory ideas; quantized electronic structure; orbital filling and periodic recurrence.',
    topics: [
      {
        topicName:
          'Historical development of atomic theory — Dalton’s atomic theory and modern atomic theory',
        topicDescription:
          'Dalton’s postulates, Law of definite/multiple proportions; Thomson’s cathode rays; Rutherford back-scattering nucleus; neutron discovery bridging isotopes; limitations of Dalton’s indivisibility.',
        topicObjectives: [
          'State Dalton’s qualitative rules and cite evidence that demanded revision.',
          'Sequence landmark experiments illustrating subatomic particles and nuclear discovery.',
          'Contrast early hard-sphere imagery with quantized modern electronic structure.',
        ],
      },
      {
        topicName: 'Subatomic particles and the nucleus',
        topicDescription:
          'Electron proton neutron charges and relative masses (survey); Z and A symbols; ions; isotopes; average atomic mass qualitative link to percentages.',
        topicObjectives: [
          'Associate atomic number Z with element identity.',
          'Compare neutral atoms with cations and anions in terms of electron count.',
          'Define isotope and cite uses (tracers, reactors survey level).',
        ],
      },
      {
        topicName: 'Electromagnetic radiation and atomic spectra',
        topicDescription:
          'Wave terminology linking speed frequency wavelength; continuum vs spectral lines absorption/emission; Bohr bridging idea quantized transitions without full QM math.',
        topicObjectives: [
          'Use the qualitative relation tying higher frequency/shorter wavelength to energetic photons (survey wording).',
          'Interpret line spectra as element fingerprints introductory.',
          'Relate spectral lines loosely to allowable electronic energies.',
        ],
      },
      {
        topicName: 'Quantum-mechanical atomic model',
        topicDescription:
          'Principal shells, subshell notation s–f for survey, orbital probability clouds, Pauli exclusion idea at textbook level pairing intro, penetration/shield survey optional.',
        topicObjectives: [
          'Recognize orbital sets as labelled probability distributions not classical paths.',
          'State Aufbau mnemonic trend for introductory filling sequences referenced by curriculum.',
          'Connect orbital blocks to periodic table columns qualitatively.',
        ],
      },
      {
        topicName: 'Electron configurations and periodic table',
        topicDescription:
          'Writing configurations noble-gas shorthand; valence electrons; periodicity of metallic character ionization energy electronegativity boiling points survey correlations.',
        topicObjectives: [
          'Write configurations for representative elements prescribed by syllabus depth.',
          'Identify valence count for main groups predicting simple ion formulas.',
          'Interpret trends across periods and groups using outer electron similarity.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Dalton revise', 'Gold-foil work mainly contradicted uniformly spread positive “pudding” model favoring:', ['No nucleus misconception', 'Nucleus concentrates mass/charge introductory', 'Electrons anchored spokes false classical cartoon', 'Atoms imaginary'], 1, 'Easy'),
      ex(1, 'Ion', 'Neutral sodium losing one electron yields:', ['Anion falsely', 'Na⁺ introductory', 'Noble sodium false nonsense', 'Proton-loss false'], 1, 'Easy'),
      ex(1, 'Isotope', 'Isotopes share:', ['Different element identity falsely', 'Same Z different neutron tally introductory wording', 'Same mass number necessarily false confusing isobar intentionally avoided', 'No nucleus nonsense'], 1, 'Easy'),
      ex(2, 'Photon trend', 'Higher-frequency EM photon carries loosely:', ['Lower energy misconception', 'More energy per photon introductory qualitative', 'No energy packet false', 'Only mass grams'], 1, 'Easy'),
      ex(3, 'Pauli gist', 'Two electrons occupying same orbital at ground intro requires:', ['Identical spins parallel breaking rule', 'Paired opposing spins introductory survey', 'No charge consideration false', 'Infinite energy'], 1, 'Medium'),
      ex(4, 'Valence Mg', 'Magnesium outer pattern group 2 often:', ['2 valence electrons introductory', '7 valence ', 'Full octet lone atom gas-phase neutral still needs ionization false nuanced exam skip', '0 valence false'], 0, 'Easy'),
      ex(4, 'Noble shorthand', '[Ne] 3s¹ labels:', ['Neutral sodium introductory shorthand check', 'Chloride false', 'Argon falsely', 'Neon falsely'], 0, 'Medium'),
      ex(2, 'Bright lines', 'Emission spectra appear as discrete lines partly because transitions involve:', ['Definite quantized energy jumps introductory wording', 'Random continuum always false gas low pressure', 'Nuclear rotations primarily false', 'Only solvent colour'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Atomic theory development',
        problems: [
          P('Dalton envisaged atoms of one element:', ['Chemically alike introductory simplifying isotopes later', 'Arbitrarily infinitely massive randomly false', 'Without mass number concept fine historically', 'As pure energy fields false'], 'A'),
          P('Law of definite proportions supports discrete:', ['Combining-unit integer patterns introductory qualitative', 'Continuous slurry misconception', 'Infinite decimal stoichiometries false', 'Nuclear reactors'], 'A'),
          P('Cathode rays bend in fields suggesting:', ['Charged electron-like particles introductory', 'Massless gravitational waves nonsense', 'Only sound echoes false', 'No interaction'], 'A'),
          P('Discovery of neutron clarified isotope:', ['Different mass same element introductory', 'Different element same mass falsely confuses errors', 'No nuclear structure false antiquated', 'Deletes periodic table falsely'], 'A'),
          P('Dalton lacked knowledge of:', ['Subatomic divisible structure introductory revision need', 'Moles concept oddly existed later synergy false timeline nuance trivia skip', 'Greek alphabet letters themselves false joke', 'Only glass tubing'], 'A'),
          P('Millikan oil-drop famously bounded:', ['Elementary charge magnitude introductory survey mention', 'Proton radius exactly falsely early', 'Avogadro zero false', 'Nuclear binding energy curves'], 'A'),
          P('Modern quantized model abandons deterministic:', ['Orbiting planet paths for electrons introductory caricature correction', 'Nuclear existence false opposite retains', 'Conservation laws false retains', 'Element identity false retains'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — Subatomic particles',
        problems: [
          P('Electron charge sign:', ['Negative introductory', 'Positive false proton confused', 'Zero false neutral confused', 'Variable continuous falsely macro'], 'A'),
          P('Atomic mass concentrated mostly in:', ['Nucleons introductory wording', 'Electron cloud mostly false mass share', 'Empty void totally false caricature sloppy', 'Only neutrino sea unlikely intro'], 'A'),
          P('Increasing neutrons keeping Z constant:', ['Produces different isotope introductory wording', 'Changes element falsely', 'Removes proton magically false spontaneous wording lab false', 'Destroys nucleus always false naive'], 'A'),
          P('Noble gases rarely form ions introductory generalization stresses:', ['Valence stabilization octet shorthand survey', 'No electrons absurd', 'Mandatory +3 charge false blanket', 'Nuclear reactors only'], 'A'),
          P('Alpha particle historically contains:', ['2p+2n helium nucleus introductory throwback', 'Sole electron', 'Photon only false', 'Hydroxide ion false'], 'A'),
          P('Mass number sums:', ['Protons plus neutrons introductory definition', 'Only electrons falsely', 'Only protons falsely ignoring neutrons nuanced exam', 'Chemical reactions change mass number easily false conserved intro'], 'A'),
          P('Anion arises from electron:', ['Gain net negative introductory simplistic', 'Loss false cation wording', 'Neutron hopping charge silly false introductory humour reject', 'Nuclear splitting casual false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — EMR and spectra',
        problems: [
          P('Photon energy ties qualitatively to frequency as:', ['Higher ν → higher E per photon introductory proportionality mention', 'Inverse unlimited false careless', 'Unrelated misconception', 'Only wavelength metres squared falsely'], 'A'),
          P('Visible colours correspond loosely to differing:', ['Visible wavelength band introductory qualitative', 'Nuclear masses', 'Molality solvent always false off-topic', 'Sound frequency'], 'A'),
          P('Absorption spectra dark lines indicate:', ['Missing wavelengths absorbed by species introductory fingerprint idea', 'Every wavelength equally bright misconception', 'Nuclear scattering lines mostly false simplistic', 'No transitions false'], 'A'),
          P('Emission line lamp lab gas low pressure contrasts continuous:', ['Thermal blackbody continuum broader introductory heuristic', 'Absolutely identical always false nuanced exam', 'No photons nonsense', 'Only gamma lasers kitchen false nonsense'], 'A'),
          P('Higher shell principal quantum number loosely correlates:', ['Higher average electron energy introductory cartoon', 'Smaller orbital always false nuanced later', 'No difference false', 'Nuclear vibration'], 'A'),
          P('Rainbow prism white light dispersion shows continuum mainly because:', ['Many transitions superposed thermal source introductory qualitative', 'Only one element always false simplistic', 'Nuclear emission lines dominate false unrealistic kitchen', 'No refraction misconception'], 'A'),
          P('Bohr model historically bridged quantized transitions but failed for:', ['Fine multi-electron intricacies introductory caveat', 'Simple hydrogen usefulness completely false contradictory nuance softened', 'Nuclear masses', 'Periodic table arrangement'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Quantum model',
        problems: [
          P('Subsidiary orbital letters s,p,d denote:', ['Electron distribution shapes/symmetry introductory caricature acceptable', 'Nuclear shells only false', 'Metric prefixes false confused', 'Acid strengths'], 'A'),
          P('Heisenberg qualitative classroom idea stresses:', ['No simultaneous perfect path+momentum trivia introductory oversimplified motivational', 'Classical certainty always false modern', 'Nuclear reactors', 'Titration equivalence'], 'A'),
          P('Electron cloud drawings illustrate:', ['Probability density introductory wording', 'Exact trajectory lines false outdated cartoon mis-label if drawn paths', 'Nuclear lattice only false', 'Visible light paths'], 'A'),
          P('Orbital occupancy limit per orbital introductory:', ['Max two electrons paired spins opposing survey', 'Unbounded electrons false pauli violation caricature', 'Exactly one always false helium counter', 'Depends on colour'], 'A'),
          P('Aufbau chart guides approximate:', ['Increasing energy subshell occupancy introductory mnemonic', 'Nuclear fusion order false absurd', 'Stock market tickers unrelated', 'Viscosity liquids'], 'A'),
          P('Periodic block columns correlate with:', ['Valence orbital family introductory s/p/d shorthand', 'Neutron drip lines false exotic', 'Only alphabet position', 'Alkane chain length falsely organic derail'], 'A'),
          P('4s often fills before 3d introductory anomaly highlights:', ['Subshell ordering not naive shell-only counting introductory caveat', 'Orbitals worthless false pedagogical backlash humor reject', 'Nuclear parity', 'Photon mass'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Electron configs & periodic trends',
        problems: [
          P('Across period atomic radius trend generally introductory:', ['Shrinks owing effective nuclear attraction survey wording simple', 'Expands unconditionally false misconception', 'Unrelated to Z false', 'Driven solely by neutron count false simplistic'], 'A'),
          P('First ionization energy trend across period loosely:', ['Increases left→right introductory generality anomalies later', 'Decreases monotonic false simplistic opposite', 'Zero always false', 'Equals electron affinity always false nuanced'], 'A'),
          P('Halogen atoms need _____ electron(s) loosely to imitate nearest noble:', ['One electron gain forming anion introductory cartoon', 'Three always false sweeping', 'Zero false', 'Remove all electrons absurd'], 'A'),
          P('Alkaline-earth lose loosely:', ['Two electrons forming +2 ions introductory Mg Ca pattern generality simplistic', 'One electron falsely group1 confusion', 'Three electrons falsely Al-group confusion misplaced', 'No electrons false'], 'A'),
          P('Noble shorthand [Ar] represents core filling through:', ['Argon introductory definition', 'Arsenic falsely letter confusion', 'Astatine falsely heavier halogen trivia derail', 'Americium falsely actinide trivia'], 'A'),
          P('Electronegativity helps predict:', ['Unequal bonding electron tug introductory qualitative', 'Nuclear masses', 'Optical lattice phonons overstated chemistry11 false', 'Stoichiometric gas volumes directly always false nuanced'], 'A'),
          P('Metallic character broadly rises:', ['Descending group introductory survey generality anomalies later', 'Ascending group false opposite mnemonic', 'Only left side of periodic table helium false helium counterexample helium nonmetal caveat humor okay', 'With ionization ascending always simplistic false converse'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 3: Chemical bonding and structure',
    chapterDescription:
      'Why atoms bond energetic pictures survey; ionic lattice and properties; Lewis structures VS shapes polarity; metallic delocalized electrons conductivity malleability; crystal families and contrasting bonding models survey.',
    topics: [
      {
        topicName: 'Introduction',
        topicDescription:
          'Potential energy sketches; electronegativity difference heuristic; distinguishing ionic molecular metallic network covalent; relating bonding to observable properties hardness conductivity melting introductory.',
        topicObjectives: [
          'State that bonding lowers mutual potential energy forming stable aggregates (survey wording).',
          'Classify bonded aggregations broadly as metallic ionic molecular covalent network introductory.',
          'Infer simple property correlations from bonding type cartoons.',
        ],
      },
      {
        topicName: 'Ionic bonding',
        topicDescription:
          'Electron transfer charges lattice energy survey; Coulomb stabilization; formulae predicting charges main groups representative; dissolution energetics survey.',
        topicObjectives: [
          'Identify electron-transfer patterns forming cations/anions introductory.',
          'Relate alternating ion arrangement to brittle/conduct melts vs solids contrast.',
          'Discuss lattice stabilization qualitatively with charge density ideas survey.',
        ],
      },
      {
        topicName: 'Covalent bonding and molecular geometry',
        topicDescription:
          'Shared pairs octet heuristic; polarity dipole electronegativity deltas; Lewis vs VSEPR cartoons shapes linear bent tetrahedral etc.; resonance survey optional.',
        topicObjectives: [
          'Sketch Lewis structures for syllabus-level small molecules ions.',
          'Predict approximate shapes via electron-group repulsion heuristic.',
          'Relate asymmetric charge distribution to dipole polarity.',
        ],
      },
      {
        topicName: 'Metallic bonding',
        topicDescription:
          'Delocalised electron sea model conductivity malleability luster heats; alloys survey; contrasting ionic brittle vs metal ductility introductory qualitative.',
        topicObjectives: [
          'Explain electrical/thermal conductivity of metals qualitatively with mobile electron sea.',
          'Relate ductility/luster loosely to nondirectional bonding caricature.',
          'Interpret substitutional alloys as metallic lattice perturbations introductory.',
        ],
      },
      {
        topicName: 'Crystal types and bonding theories (survey)',
        topicDescription:
          'Molecular covalent network ionic metallic crystal contrast; graphite vs diamond vs NaCl illustrative; VB vs MO bridging statements without deep MO math.',
        topicObjectives: [
          'Match crystal type diagrams to predominant bonding caricatures introductory.',
          'Contrast diamond vs graphite carbon allotropes structurally/functionally qualitative.',
          'State that VB/MO deepen covalency beyond Lewis pictures survey.',
        ],
      },
    ],
    exercises: [
      ex(0, 'ΔEN', 'Large electronegativity difference favors:', ['Polar covalent always only false nuanced', 'Ionic character tendency introductory heuristic', 'No bond', 'Noble condensation'], 1, 'Easy'),
      ex(1, 'NaCl motif', 'Rock salt lattice features:', ['Neutral atoms only false', 'Alternating ions 3-D introductory sketch idea', 'Metallic electrons only false', 'Isolated molecules NaCl lattice gas false caricature sloppy'], 1, 'Easy'),
      ex(2, 'Tetrahedron', 'Methane VSEPR sketch is loosely:', ['Bent falsely water confused', 'Tetrahedral introductory', 'Square planar falsely XeF4 trivia derail intentionally avoided', 'Linear falsely CO2 misplaced'], 1, 'Easy'),
      ex(2, 'Polar', 'Unequal sharing owing EN difference yields:', ['Dipolar bond introductory qualitative', 'No partial charges false misconception', 'Ionic lattice always falsely small molecules', 'Metallic electrons'], 0, 'Easy'),
      ex(3, 'Wire', 'Metals deform without shattering partly because bonding is:', ['Directional brittle ionic caricature falsely', 'Nondelocalisation false wording reject', 'Delocalised sea slips layers introductory caricature qualitative', 'Only hydrogen bonds falsely'], 2, 'Medium'),
      ex(4, 'Diamond', 'Diamond is primarily:', ['Layer slip conductor false graphite confusion', '3-D giant covalent lattice introductory distinguishing', 'Ionic salts', 'Discrete CO2 molecules false absurd'], 1, 'Easy'),
      ex(4, 'Graphite', 'Graphite conducts along planes partly due to:', ['Delocalised π electrons introductory heuristic', 'Ionic melts only false', 'No electrons absurd', 'Only noble gas pockets false'], 0, 'Medium'),
      ex(1, 'Brittle ionic hit', 'Ionic solids often cleave cleanly partly because stacking faults propagate:', ['Shear disrupting electrostatic stacking introductory qualitative', 'Metallic slipping freely false opposite property', 'Covalent network endless barriers false nuanced', 'No electrostatic nonsense'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Bonding overview',
        problems: [
          P('Noble gases resist bonding casually because:', ['Valence saturation introductory octet shorthand', 'They lack electrons false helium still full', 'Huge nuclear charge anomaly false helium counter', 'Prefer triple bonds falsely'], 'A'),
          P('Covalent bonding involves primarily:', ['Shared valence electrons introductory', 'Transferred electron bookkeeping ionic caricature falsely question wants covalent', 'Neither interaction false nonsense', 'Nuclear merging'], 'A'),
          P('Metallic aggregates often show conductivity because:', ['Delocalised electron mobility introductory', 'All electrons trapped ionic picture false misplaced', 'No charge carriers misconception', 'Only proton flow ridiculous'], 'A'),
          P('Molecular iodine lattice is termed:', ['Molecular crystal introductory dispersion forces survey', 'Giant ionic falsely', 'Metallic falsely', 'Quartz network falsely'], 'A'),
          P('Quartz SiO₂ network tends high melting partly due:', ['Repeated strong directional covalent linkages introductory survey', 'Only weak dispersion falsely', 'Sodium chloride confusion false unrelated formula', 'Metallic slips'], 'A'),
          P('Van der Waals term umbrella includes:', ['Dispersion instantaneous dipoles introductory wording light', 'Nuclear pairing false', 'Coulomb proton transfer shorthand ionic misconception', 'Gravitational molecular bonds ludicrous'], 'A'),
          P('Hydration lattice energy interplay dissolving salts involves:', ['Competition solvation versus crystal stabilization introductory wording', 'No energy consideration false misconceptions', 'Only entropy never enthalpy false nuanced exam advanced skip', 'Nuclear reactors'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Ionic bonding',
        problems: [
          P('Electron transfer Mg→O pattern forms ions:', ['Mg²⁺ and O²⁻ introductory rock salt prelude', 'Mg⁺ O⁻ falsely naive single charge always', 'Mg O neutral atoms condensed false', 'Only protons hopping false'], 'A'),
          P('Solid NaCl conductivity test:', ['Ions mobilized melt/dissolve conduct introductory dichotomy', 'Always conducts cold crystal ion migration blocked simplistic intro', 'Never conducts melts false converse', 'Only electrons never ions false nuanced melt'], 'A'),
          P('Higher ionic charges often strengthen lattice tending toward:', ['Higher melting introductory qualitative heuristic caveats anomalies later', 'Lower melting blindly false simplistic opposite', 'No effect false', 'Vapour metallization exotic'], 'A'),
          P('Smaller ion sizes at same charge tighten lattice partially because:', ['Closer electrostatic approach introductory caricature Coulomb wording', 'Weaker attraction false converse', 'No packing geometry false', 'Nuclear reactors'], 'A'),
          P('Hydrated ions aqueous dissolution involves:', ['Water orientation stabilizing ions introductory hydration survey', 'No energy change falsely skipping lattice vs hydration interplay', 'Proton neutron swaps false ludicrous', 'Metallic conductivity solid water false'], 'A'),
          P('Crystal lattice minimal repeating motif called:', ['Unit cell introductory surveying phrase', 'Mole pathway false thermodynamic', 'Coefficient only stoichiometric unbalanced misconception', 'Spectrum line'], 'A'),
          P('Polyatomic ammonium sulfate example highlights:', ['Ionic ammonium sulfate lattice with molecular polyatomic ions introductory survey wording', 'Only diatomic salts false nuanced', 'Covalent network giant ammonium misconception hilariously rejected', 'No charges'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Covalent bonding & geometry',
        problems: [
          P('Double bond shares loosely:', ['Two bonding pairs introductory simplistic', 'Two electrons total misconception', 'No electrons misconception', 'Nuclear pairs false'], 'A'),
          P('Bent water shape partly due:', ['Two lone pairs repelling bonded pairs introductory VSEPR cartoon', 'No lone pairs misconception', 'Linear geometry always false contradictory', 'Metallic layering false'], 'A'),
          P('Formal charge ideas help:', ['Judge preferred Lewis resonance contributors introductory heuristic', 'Measure nuclear masses', 'Determine Avogadro constant directly false', 'Replace periodic table falsely'], 'A'),
          P('Molecule nonpolar despite polar bonds conceivable via:', ['Symmetry cancelling vectors introductory CO₂ example hinted', 'Impossible always false caveat', 'Only ionic means false misplaced', 'Random orientation'], 'A'),
          P('Hybridization label sp³ often accompanies introductory:', ['Four σ domains tetrahedral electron geometry introductory shorthand', 'Linear diatomic falsely', 'Octahedral Xenon falsely specialized skip intentional', 'Ionic melts'], 'A'),
          P('Coordinate covalent label stresses:', ['Both electrons initially from one donor introductory survey bridging idea', 'No sharing ever false converse label confusion', 'Nuclear merger', 'Metallic conductivity'], 'A'),
          P('Resonance averaging stabilizes depiction when:', ['Multiple valid Lewis skeletal placements introductory qualitative', 'No valid structures falsely', 'Nuclear spins align false', 'Titrations only unrelated'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — Metallic bonding',
        problems: [
          P('Electrical conductivity solids metals primarily via:', ['Mobile electron drift introductory kinetic picture survey', 'Whole atom translation current falsely macro', 'Ionic conductivity dry crystal false misconception', 'Neutron flow ludicrous'], 'A'),
          P('Thermal conduction linkage partly:', ['Electronic plus lattice vibrations coupling introductory heuristic', 'No mechanism false', 'Only radiative cosmic exclusively false unrealistic kitchen', 'Proton conductivity'], 'A'),
          P('Malleability cartoon explains hammering reshapes:', ['Layers slip retained bonding sea introductory qualitative', 'Ionic lattice shatters always false converse property caricature contrasts', 'Covalent network always flows false converse diamond counter', 'Eliminates electrons false absurd'], 'A'),
          P('Metal luster loosely ties to:', ['Light interaction with itinerant electrons introductory heuristic', 'Ionic transparency false converse', 'Nuclear fluorescence overshoot false', 'Only UV invisible always false'], 'A'),
          P('Steel carbon interstitial concept survey:', ['Small atoms perturb metallic lattice introductory materials angle', 'Removes conductivity always false nuanced', 'Turns graphite instantly false joking', 'Converts stoichiometric ionic CsCl false misplaced'], 'A'),
          P('Alloy brass idea:', ['Substitution Cu/Zn metallic introductory survey example', 'Ionic chloride lattice false misconception', 'Molecular iodine falsely', 'Quartz falsely'], 'A'),
          P('Superconductivity notes beyond syllabus still wrong distractors humorous reject choose realistic:', ['Ordinary metallic resistivity nonzero due scattering introductory truthful baseline mention', 'All metals infinite resistance falsely', 'Ion migration primary solid Cu wire false misconception', 'Nuclear chain reaction household wire false nonsense'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — Crystals & theory survey',
        problems: [
          P('Diamond vs graphite both carbon yet properties differ radically due:', ['Bonding/connectivity distinctions introductory gigantic idea', 'Identical bonding always false misconception', 'Different elements falsely same Z contradictory', 'Isotope neutron count primary false oversimplified misconception'], 'A'),
          P('NaCl vs dry ice contrasts primarily:', ['Ion vs molecular motifs introductory distinguishing exam favourite', 'Identical conductivity always false misconception', 'Same interparticle forces blindly false converse', 'No crystal order false liquids confused'], 'A'),
          P('Molecular theory beyond Lewis briefly:', ['Hybridization/MOT deepen bonding pictures introductory survey teaser', 'Delete orbitals falsely', 'Only stoichiometric balancing unrelated', 'Nuclear reactors'], 'A'),
          P('ZnS-type structures illustrate introductory survey:', ['Varied ion coordination arrangements comparing rock salt CsCl introductory trivia light', 'Metallic graphene confusion false misplaced', 'Only organic benzene falsely', 'Plasma arcs'], 'A'),
          P('Hydrogen bonding categorized as:', ['Strong intermolecular subtype not full covalent bond introductory caveat', 'Ionic lattice bond primary false misconception', 'Nuclear pairing false absurd', 'Metallic subtype false misplaced'], 'A'),
          P('Quartz melts high partly contrast to CO₂:', ['Directional bridging oxygens network vs discrete molecules introductory juxtaposition heuristic', 'Identical dispersion only false converse', 'No difference false misconceptions', 'Quartz molecular weak false'], 'A'),
          P('Salt brittle vs copper malleability compare:', ['Ion stacking sharp disruption vs metallic slip caricature contrasting labs introductory', 'No difference false misconception', 'Both equally ductile misconception', 'Metals never conduct heat false converse'], 'A'),
        ],
      },
    ],
  },
];
