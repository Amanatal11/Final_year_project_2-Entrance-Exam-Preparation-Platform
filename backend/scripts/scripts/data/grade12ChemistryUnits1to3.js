/**
 * Grade 12 Chemistry curriculum — Units 1–3 (Natural stream, MoE Ethiopia–style outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Atomic structure, periodicity, and chemical bonding',
    chapterDescription:
      'Electron configurations and trends; ionic, covalent, and metallic models; shapes and intermolecular forces linked to properties.',
    topics: [
      {
        topicName: 'Electron configuration and quantum description (survey)',
        topicDescription: 'Orbitals, Aufbau, Hund’s rule, Pauli principle; valence electrons.',
        topicObjectives: [
          'Write configurations for representative elements using subshell notation.',
          'Relate valence electrons to group number for main-group elements.',
        ],
      },
      {
        topicName: 'Periodic trends',
        topicDescription: 'Atomic radius, ionization energy, electronegativity; shielding and effective nuclear charge (introductory).',
        topicObjectives: [
          'Predict trend direction across a period and down a group for main patterns.',
          'Explain anomalies such as ionization energy at group 13–15 at survey level.',
        ],
      },
      {
        topicName: 'Ionic bonding and lattice energy (introductory)',
        topicDescription: 'Electron transfer; lattice structure; melting point and conductivity patterns.',
        topicObjectives: [
          'Contrast formation of cations and anions in simple binary salts.',
          'Relate strong ionic lattice to high melting points in typical oxides/salts.',
        ],
      },
      {
        topicName: 'Covalent bonding and molecular geometry',
        topicDescription: 'Lewis structures; VSEPR; bond polarity and dipole moments (introductory).',
        topicObjectives: [
          'Draw Lewis diagrams for second-period molecules and common oxoacids at syllabus depth.',
          'Predict approximate shapes for ABₙ types taught in class.',
        ],
      },
      {
        topicName: 'Metallic bonding and intermolecular forces',
        topicDescription: 'Electron-sea model; London, dipole–dipole, hydrogen bonding; effects on bp/mp and solubility.',
        topicObjectives: [
          'Rank relative strength of IMFs for small molecules (e.g. H₂O vs CH₄).',
          'Link hydrogen bonding to water properties relevant to life and industry.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Aufbau', 'In the ground-state Aufbau filling order, 4s typically fills before:', ['3d in transition series introduction', '1s', '7p in all atoms always false early', 'Nucleus'], 0, 'Medium'),
      ex(0, 'Val', 'Group 17 atoms gain one electron readily partly because:', ['Pseudo-noble-gas octet for halide anions common teaching', 'They are all metals false', 'They lack p orbitals false', 'They shrink to zero radius'], 0, 'Easy'),
      ex(1, 'Radius', 'Across period 3 (Na→Ar), atomic radius generally:', ['Decreases with increasing effective nuclear charge trend', 'Increases indefinitely', 'Stays exactly constant', 'Follows random order'], 0, 'Easy'),
      ex(1, 'IE', 'First ionization energy often increases across a period partly because:', ['Electrons added in same shell while nuclear charge rises (effective Z arguments)', 'Atoms get larger without limit false', 'Shielding dominates always false trends vary', 'Electron removed from inner 1s always false valence context'], 0, 'Medium'),
      ex(2, 'Ionic', 'Solid NaCl does not conduct electricity well because:', ['Ions are fixed in the lattice until molten or aqueous', 'Sodium is covalent false', 'Chlorine atoms remain neutral gas inside lattice false', 'Electrons flow through sea like metal false salt ionic'], 0, 'Easy'),
      ex(2, 'Melt', 'High lattice energy ionic solids often have:', ['High melting points among trends not absolute compare MgO vs NaCl story caution exam intro', 'Negative melting always false', 'No coulomb attractions false', 'Only van der Waals forces false dominant ionic'], 0, 'Medium'),
      ex(3, 'VSEPR', 'Four electron domains around a central atom with no lone pairs most commonly yields:', ['Tetrahedral geometry teaching AB4 type', 'Linear geometry', 'Square planar always', 'Trigonal bipyramidal five domains different'], 0, 'Easy'),
      ex(3, 'Polar', 'A polar covalent bond arises when:', ['Electronegativity difference is nonzero but often electronegativity scale not ionic cutoff simplistic continuum', 'Electronegativity difference is always infinite false', 'Electrons always shared equally false identical atoms', 'Only ionic compounds exist false'], 0, 'Medium'),
      ex(4, 'H-bond', 'Hydrogen bonding is strongest among typical IMFs when H is bonded to:', ['N, O, or F (intro textbook rule)', 'Cl always same strength as F false trend weaker', 'Na metal false ionic', 'He noble gas false'], 0, 'Easy'),
      ex(4, 'Metal', 'Metals conduct electricity in solid partly because:', ['Delocalized electrons can move under field sea model introductory', 'Cations move through lattice carrying current primarily migration electrochemistry different molten salts nuance', 'All insulators false', 'Only covalent network solids false diamond insulator'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Electron configuration',
        problems: [
          P('The Pauli exclusion principle limits:', ['Two electrons in one orbital to opposite spins in simplified teaching', 'Unlimited electrons per orbital false', 'Only s orbitals occupancy false all orbitals obey', 'Electron mass'], 'A', ''),
          P('Hund’s rule favors:', ['Maximize unpaired electrons in degenerate orbitals before pairing in many ground states', 'Pairing immediately in every case false exceptions excited states exist', 'Remove electrons from nucleus false', 'Stop periodic table organization false'], 'A', ''),
          P('Valence electrons most influence:', ['Bonding and chemical reactivity patterns introductory', 'Nuclear fusion rates', 'Gravity between atoms', 'Sound speed in vacuum'], 'A', ''),
          P('Transition metals filling d orbitals causes:', ['Recallable anomalies in first ionization trends near Cr Cu teaching memorization facts caveats', 'identical radii across period false', 'no color compounds false many colored complexes', 'loss of periodic law false still periodic overall'], 'A', ''),
          P('Core versus valence distinction matters for:', ['Lewis dot emphasis on outer shell in main-group introductory curricula', 'defining atomic mass numerators only not solely purpose', 'nuclear decay always false chemical reactions usually valence electrons primarily', 'earthquake prediction'], 'A', ''),
          P('Isoelectronic species have:', ['Same number of electrons though different nuclear charges thus different sizes teaching Na+ Ne F-', 'same protons always false isotopes different definition', 'identical chemistry always false reactivity differs', 'same mass number always false'], 'A', ''),
          P('s–p–d notation for 3d transition elements often places (n-1)d after ns because:', ['relative energy ordering and historical electron counting conventions teaching Aufbau exceptions exist spectroscopy advanced skip exam awareness', 'energy ordering never changes false subtle exceptions chromium copper', 'd orbitals lower than s always false mostly but special cases', 'naming conventions of groups 1–2 only false'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — Trends',
        problems: [
          P('Atomic radius increases down a group mainly because:', ['Additional electron shells with greater average distance outer electron probability', 'nuclear charge decreases false actually increases down group but shielding dominates explanation students', 'ionic size always larger false cations smaller than atoms generally', 'gravity pulls electrons closer false'], 'A', ''),
          P('Electronegativity generally decreases down a group because:', ['Valence electron farther from nucleus binding weaker even though Z rises', 'ionic radius irrelevant sometimes electronegativity defined for atoms in molecules not isolated ions confusion skip', 'metals become less metallic false metals low EN down trend mixed but pattern exists for representative teaching', 'period length shrinks false'], 'A', ''),
          P('Across period left to right metallic character:', ['Decreases for main groups overall trend', 'Increases always false opposite', 'Constant', 'Undefined'], 'A', ''),
          P('Ionization energy measures energy to remove:', ['An electron from gaseous atom forming gaseous cation first IE definition level', 'electron from solid crystal lattice bulk different thermodynamic cycles born haber style complex skip', 'all electrons at once false', 'neutron from nucleus nuclear physics different'], 'A', ''),
          P('Electron affinity is most exothermic for many nonmetals because:', ['Adding electron stabilizes valence shell approaching noble gas configuration halogens exemplify trend exceptions Nobel gas EA endothermic effectively cautious', 'metals love extra electrons always false generally cations lose electrons easier', 'noble gases attract electron strongly false positive EA small or endothermic', 'photon absorption only false'], 'A', ''),
          P('Diagonal relationships (Li–Mg) exist because of:', ['Combined size and polarity effects crude similarity periodicity exceptions teaching only not universal law', 'identical mass', 'exactly same electron configuration false', 'random'], 'A', ''),
          P('Periodic law states properties are periodic function of:', ['Atomic number modern definition key discovery', 'Atomic mass historical Mendeleev arranged before proton discovery mostly close coincidence nuance story exam pointer awareness', 'Crystal color', 'Moon phase'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — Ionic bonding',
        problems: [
          P('Formation of Na+ and Cl− from atoms involves:', ['Electron transfer energy balanced by lattice formation in Born-Haber cycle awareness intro not full exam computation usually', 'sharing one pair only covalent contrast', 'nuclear fusion', 'hydrogen bond formation false'], 'A', ''),
          P('Lattice energy magnitude increases with:', ['Higher charges and smaller ionic distances (qualitative trends)', 'larger ions only always lowers lattice energy careful', 'weaker attractions nonsensical', 'covalent character removed always false percent ionic character concept exists'], 'A', ''),
          P('Molten ionic compounds conduct because:', ['Ions are mobile charge carriers', 'electrons flow like copper metal false ion migration', 'covalent bonds break only false dissociation ionic', 'photons carry current false'], 'A', ''),
          P('Dissolved ionic salts in water conduct because:', ['Ions separate and move under field electrolytes', 'water lacks dipole false polar solvent stabilizes ions hydration shells', 'covalent molecules never dissolve false many polar covalent dissolve without ions acetic acid weak electrolyte nuanced', 'air pressure'], 'A', ''),
          P('Formula units vs molecules distinction matters because:', ['Ionic solids are extended lattices not discrete gas-phase molecules though gas-phase ion pairs exist rarely nuanced exam pointer', 'NaCl bottle contains NaCl molecules always false lattice', 'only covalent compounds have formulas false both have empirical formulas', 'atoms lack mass false'], 'A', ''),
          P('Sublime lattice energy does not mean soft crystals always because:', ['Defects directionality polarization covalent character direction dependent properties brittleness cleavage teaching overlays empirical', 'lattice energy is the only property false hardness fracture too', 'ionic means always ductile false brittle often', 'no thermal expansion false'], 'A', ''),
          P('Polyatomic ions like SO4^2− feature:', ['Covalent bonding within ion with overall charge ionic crystal with counterions introductory', 'only single atoms false', 'no resonance structures sometimes multiple resonance teaching sulfate intro', 'cannot dissolve false many soluble'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — Covalent bonding',
        problems: [
          P('A triple bond contains:', ['One σ and two π bonds in textbook diatomic nitrogen etc.', 'three σ always false', 'six free electrons unrelated', 'metallic electrons'], 'A', ''),
          P('Resonance hybrids differ from single Lewis pictures because:', ['electron density is delocalized averaged across contributing structures not flipping between forms physically intro representation not oscillation misconception', 'double bonds alternate every femtosecond literally false resonance energy lowering static mixture metaphor', 'equivalent energy always false can be unequal contributors', 'only benzene exhibits false ozone carbonate etc many'], 'A', ''),
          P('Formal charge helps choose:', ['More plausible Lewis structures among alternatives not nature of physics absolutely', 'experimental bond lengths always alone false spectroscopy', 'oxidation state identical always false different bookkeeping', 'ionic percent exactly'], 'A', ''),
          P('Bond order in diatomic molecules from MO theory (intro mention) can rationalize:', ['paramagnetic O2 though Lewis fails exotic diatomic oxygen story optional exam may stick Lewis VSEPR mainly depending syllabus depth teachers decide', 'noble gas stability always false He2 unstable bonding antibonding cancel approx', 'only ionic bonds false MO covalent domain primarily homonuclear diatomics intro', 'DNA replication'], 'A', ''),
          P('Coordinate covalent bond means:', ['Both electrons came from one atom originally donor lone pair to acceptor empty orbital classification bookkeeping still covalent afterwards same bond', 'ionic always false', 'hydrogen bond confusion different interaction weaker', 'only metals form false coordinate complexes extensively transition metals'], 'A', ''),
          P('Bond polarity vector adds to molecular polarity if:', ['Geometry does not cancel bond dipoles CO2 linear nonpolar despite polar C=O contrast water bent polar', 'always adds always false symmetric molecules cancel', 'only ionic compounds have dipoles false polar covalent molecules dipole moment measurable', 'noble gases polar false'], 'A', ''),
          P('Expanded octet possibility for third period and beyond arises partly because:', ['Available d orbitals participation debated modern hypervalent models vary older VSEPR curricula still teach expansion intro exam awareness teachers choose depth', 'electrons ignore coulomb repulsion false', 'only hydrogen participates false hypervalent bigger atoms', 'quantum tunneling macroscopic'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — IMFs and metals',
        problems: [
          P('London dispersion forces exist between:', ['All atoms and molecules transient dipoles fluctuating', 'Only polar molecules false nonpolar molecules still attract via london', 'Only ions false', 'Only charged plates false'], 'A', ''),
          P('Boiling point of H2O is anomalously high versus H2S largely because:', ['hydrogen bonding network extensive', 'larger molar mass of H2O always false H2S heavier yet lower bp controversy resolved by H-bond dominance', 'ionic lattice water false molecular', 'covalent network like diamond false ice molecular solid'], 'A', ''),
          P('Solubility “like dissolves like” means:', ['Polar solvents favor polar or ionic solutes often nonpolar solvents favor nonpolar empirical rule entropic enthalpic nuances skip exam level', 'water cannot dissolve gases false some gas dissolution Henry', 'ionic compounds never dissolve in polar false often high solubility', 'entropy irrelevant false usually drives mixing spontaneous many cases'], 'A', ''),
          P('Surface tension in liquids relates to:', ['cohesive intermolecular attractions reducing surface area droplet formation capillary action partly', 'gravity exclusively false', 'ionic strength only sometimes surfactants lower surface tension dramatically', 'radio waves'], 'A', ''),
          P('Ductility in metals arises partly because:', ['layers of cations can slip while electron sea maintains cohesion overview simplified', 'ionic crystals slip equally easy often brittle shatter contrast', 'covalent network diamond slips freely false hardest mineral', 'only gases ductile false'], 'A', ''),
          P('Alloying can alter metal properties because:', ['distort regular lattice and hinder dislocation motion strength hardness tradeoffs brass steel intro vocabulary', 'remove electrons entirely false alloy still metallic bonding overall typically', 'create purely ionic bonding typically false metallic mixture', 'eliminate conduction always false conductivity may drop but not always zero'], 'A', ''),
          P('Graphite conducts along planes because:', ['π electrons delocalized within sheets sliding between layers weak interlayer attractions contrast diamond insulator network', 'only ionic impurities false intrinsic band picture advanced skip A level bridging', 'same structure diamond false allotropes differ', 'water intercalation only false'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Saturated and unsaturated hydrocarbons',
    chapterDescription:
      'Alkanes, alkenes, alkynes: nomenclature, isomerism, preparation, and characteristic reactions (MoE-aligned survey).',
    topics: [
      {
        topicName: 'Alkanes: nomenclature and isomerism',
        topicDescription: 'IUPAC rules for chains; constitutional isomers; conformational ideas at introductory level.',
        topicObjectives: [
          'Name branched alkanes up to classroom-specified chain lengths.',
          'Count constitutional isomers for small formulas when asked.',
        ],
      },
      {
        topicName: 'Alkanes: physical properties and reactions',
        topicDescription: 'Combustion; halogenation (free-radical outline); stability trends.',
        topicObjectives: [
          'Write a balanced equation for complete combustion of given alkane.',
          'Identify substitution vs combustion scenarios.',
        ],
      },
      {
        topicName: 'Alkenes: structure and isomerism',
        topicDescription: 'Double bond, π bond rigidity; cis–trans (E/Z survey) when substituents differ.',
        topicObjectives: [
          'Explain why rotation about C=C is restricted.',
          'Recognize Markovnikov pattern in addition of HX to unsymmetrical alkenes (introductory).',
        ],
      },
      {
        topicName: 'Alkenes: addition reactions',
        topicDescription: 'H2, halogens, HX, hydration (survey); polymerization intro (polyethylene).',
        topicObjectives: [
          'Draw products for simple electrophilic addition examples taught in syllabus.',
          'Relate addition to breaking π bond.',
        ],
      },
      {
        topicName: 'Alkynes (survey) and petroleum fractions',
        topicDescription: 'Ethyne in synthesis context; fractional distillation of petroleum and uses.',
        topicObjectives: [
          'Contrast sp, sp2, sp3 hybridization in bonding picture at high-school depth.',
          'Link fractions to boiling ranges and main uses (fuel, feedstock).',
        ],
      },
    ],
    exercises: [
      ex(0, 'Pent', 'The common name “pentane” backbone is:', ['Five carbon longest chain in unbranched isomer among meanings', 'Six carbons always', 'Ring only', 'Ethene'], 0, 'Easy'),
      ex(0, 'Iso', '2-methylpropane is a constitutional isomer of:', ['Butane n-butane C4H10 family', 'Pentane C5 false different formula unless rearranged', 'Benzene C6H6 false', 'Water'], 0, 'Medium'),
      ex(1, 'Comb', 'Complete combustion of hydrocarbon produces mainly:', ['CO2 and H2O when oxygen sufficient', 'C and H2 only incomplete', 'CO always even complete false stoichiometric excess O2 drives CO2', 'NaCl'], 0, 'Easy'),
      ex(1, 'Rad', 'Methane chlorination is initiated by:', ['Homolytic cleavage of Cl2 by UV or heat generating radicals chain mechanism survey', 'heterolytic acid catalysis only false different mechanism', 'water hydrolysis', 'nuclear fission'], 0, 'Hard'),
      ex(2, 'Pi', 'The π bond in alkenes arises from:', ['Sideways p orbital overlap creating electron density above and below plane', 'head-on s-s overlap only sigma style', 'ionic attraction', 'metallic sea'], 0, 'Easy'),
      ex(2, 'Mark', 'For CH3CH=CH2 + HBr major product often follows:', ['Markovnikov pattern adding H to carbon with more hydrogens forming more stable carbocation pathway teaching not absolute rearrangements exist', 'anti-Markovnikov always peroxide false special case', 'equal mixture always false', 'no reaction'], 0, 'Medium'),
      ex(3, 'Poly', 'Addition polymerization of ethene forms:', ['Polyethylene repeating unit —CH2— high polymer intro', 'Polyester condensation different', 'Water only', 'Diamond'], 0, 'Easy'),
      ex(3, 'Hydr', 'Acid-catalyzed hydration of ethene yields:', ['Ethanol overall survey mechanism not always exam depth', 'Ethanoic acid oxidation different step', 'Ethyne', 'Methane'], 0, 'Medium'),
      ex(4, 'sp', 'A triple bond uses:', ['One sp hybrid orbital set describing linear geometry around carbons ethyne model teaching', 'sp3 only false tetrahedral methane ethane sp3', 'pure p only false', 'd2sp3 octahedral coordination complexes different context'], 0, 'Medium'),
      ex(4, 'Frac', 'Lower boiling fractions from crude oil often contain:', ['More smaller hydrocarbon molecules among statistical mixture refining cut points vary refinery', 'only polymers false large molecules in residue', 'only acids false', 'pure diamond'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Alkane names',
        problems: [
          P('IUPAC parent chain selection chooses:', ['Longest continuous carbon chain in standard algorithm sometimes tricky branched appearance', 'shortest chain always false', 'most branches heuristic not official rule careful', 'alphabetical only'], 'A', ''),
          P('Substituents are listed alphabetically ignoring multiplicative prefixes like di tri in older vs newer IUPAC subtle exam may use simple style teachers specify', ['ethyl before methyl alphabetically example illustration not universal rule examination boards vary awareness', 'random order', 'by mass only', 'by color'], 'A', ''),
          P('Numbering gives lowest set of locants:', ['first point of difference rule compare 2,2,3 vs 2,3,3 choose 2,2,3 example textbook', 'highest sum always false', 'left to right arbitrary', 'random dice'], 'A', ''),
          P('Constitutional isomers differ in:', ['Connectivity while molecular formula may match same MF different bonding arrangement', 'conformational rotation only same connectivity false', 'isotopic labels only not constitutional isomer definition normal isotope mixtures counted same element connectivity same', 'color'], 'A', ''),
          P('Neopentane common name corresponds to highly branched:', ['2,2-dimethylpropane C5H12 isomer', 'hexane linear', 'benzene', 'ethene'], 'A', ''),
          P('Cycloalkanes differ because:', ['ring strain influences stability cyclopropane vs cyclohexane chair teaching survey not full strain energy calculations exam unless specified', 'they lack hydrocarbon composition false still hydrocarbons CH2 units general formula cycloalkanes CnH2n not alkanes CnH2n+2 careful ring one degree unsaturation', 'cannot isomerize false', 'only solids false many liquids bp dependent'], 'A', ''),
          P('Determining degree of unsaturation index of hydrogen deficiency formula assists:', ['inferring rings or π bonds from MF in organic puzzles introductory', 'exact structure uniquely always false isomers remain', 'predicting nuclear charge false', 'atomic mass alone'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — Alkane reactions',
        problems: [
          P('Complete combustion of propane C3H8 in excess O2 ideally yields:', ['CO2 and H2O stoichiometrically balanced practice exercise', 'only CO incomplete combustion reality conditions rich mixture engines', 'C soot only always incomplete scenario', 'H2 only'], 'A', ''),
          P('Substitution halogenation selectivity trend for higher alkanes favors:', ['secondary or tertiary hydrogens if radicals form faster abstraction lower bond dissociation energies teaching trends partial halogenation mixture products lab reality more complex', 'primary always false slower unless steric accessibility contexts', 'aromatic ring without catalyst false different mechanism later', 'water solvent always nonpolar alkane insoluble phase reaction typically no aqueous'], 'A', ''),
          P('Radical chain steps include:', ['initiation propagation termination overview', 'SN1 only ionic two-step mechanism different chapter', 'electrophilic aromatic substitution aren’t yet', 'acid-base only'], 'A', ''),
          P('Cracking converts longer alkanes to:', ['shorter fragments alkenes alkanes for fuels and feedstocks catalytic cracking refinery introduction', 'diamond', 'only oxygen gas', 'ionic salts'], 'A', ''),
          P('Octane rating relates to:', ['autoignition resistance of gasoline blends branched isooctane reference scale not pure chemistry of alkanes exclusively but applied context relevance Ethiopia fuel economy awareness general exam pointer', 'molecular mass only false', 'only diesel engines false concept gasoline focused', 'ionic conductivity'], 'A', ''),
          P('Primary hydrogen on terminal methyl groups in straight chains are:', ['more abundant statistically but individually less reactive in radical abstraction trends nuanced exam may compare positions', 'always most reactive individually false tertiary fastest generally', 'immune to halogenation false just slower', 'only removed by acids false radical pathway'], 'A', ''),
          P('Carbon monoxide formation in incomplete combustion is hazardous because:', ['binds hemoglobin stronger than O2 poisoning human respiratory context chemistry applied safety story Ethiopia household ventilation fuel stove awareness not partisan details exam generic', 'greenhouse warmer than CO2 per molecule debate not exam main acute toxicity CO', 'inert gas completely false toxic', 'beneficial nutrient false'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — Alkenes structure',
        problems: [
          P('Cis–trans isomerism requires:', ['each double-bonded carbon to have two different substituents simple alkene cis trans language modern E/Z advanced if asymmetry complex introductory cis trans still okay if both sides distinct', 'any alkene always false ethene no cis trans two hydrogens each side', 'triple bonds mainly trans false linear alkyne no cis trans', 'ionic crystal'], 'A', ''),
          P('A π bond is:', ['weaker than σ individually yet together double bond stronger than single overall conceptually additive bond energies exam may compare bond strengths qualitatively', 'stronger than sigma always alone false sigma single bond shorter stronger individually typical', 'nonexistent in ethene false', 'ionic'], 'A', ''),
          P('Electrophilic addition begins with:', ['π electrons attacking electrophile forming carbocation intermediate simple HX mechanism overview rearrangements possible advanced', 'hydride shift always first false depends', 'free radical always false peroxides change mechanism anti-Markovnikov special case', 'hydrogen bonding to alkene false'], 'A', ''),
          P('Polyunsaturated fats contain:', ['multiple carbon-carbon double bonds in fatty acid chains nutrition linkage health lesson interdisciplinary not exam organic synthesis depth', 'no hydrogens false unsaturation refers to double bonds possible still hydrogens present cis fats kinks affect packing membranes teaching pointer', 'only aromatic rings false', 'three-minute intermission joke false'], 'A', ''),
          P('Testing for unsaturation can use:', ['bromine water decolorization qualitative alkene test bromination addition contrast alkanes saturate color persist if not substituted benzenes slower with Br2 need catalyst exam may avoid aromatic complications depending syllabus', 'silver nitrate only halide test organic layer insoluble protocols vary', 'litmus unchanged only', 'none qualitative tests exist false many'], 'A', ''),
          P('Hybridization at alkene carbons is:', ['sp2 trigonal planar geometry 120 degree approximately', 'sp3 tetrahedral false that is alkane saturated carbon', 'sp linear false alkyne', 'dsp2 square planar complexes transition metals different'], 'A', ''),
          P('E/Z system replaces cis-trans labels when:', ['priorities by atomic number differ and swapping would invert high group priority each carbon Cahn-Ingold-Prelog style advanced may appear upper secondary briefly teachers decide exam minimal or zero if not taught', 'only ionic compounds false', 'always mandatory even when substituents identical ethylene false no stereoisomers', 'never official IUPAC recommends E Z widely though'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Addition reactions',
        problems: [
          P('Catalytic hydrogenation adds H2 across double bond using:', ['metal catalyst surface Pt Ni Pd typical heterogeneous catalysis lowers activation energy syn stereochemistry often predominant surface delivery but careful product stereochemistry exam may simplify', 'acid catalyst without metal typically hydration false different pathway', 'UV only radical addition different peroxide HBr anti-Markovnikov radical addition distinction teachers emphasize', 'electric eel'], 'A', ''),
          P('Bromine adds to alkenes forming:', ['dibromide vicinal anti addition bromonium ion mechanism advanced optional intro may show 1,2-dibromo product', 'alkyne always false unless diene chemistry complications skip', 'toluene methyl benzene early confusion avoid', 'water only false unless halohydrin conditions'], 'A', ''),
          P('Markovnikov orientation rationalizes:', ['more stable carbocation intermediate pathway for HX addition though rearrangements occur sometimes hydride methyl shifts awareness caution oversimplified rule not law of nature', 'electrophilic aromatic substitution false different chapter', 'anti addition always false Br2 anti stereochemistry not Markovnikov regioselectivity', 'entropy only'], 'A', ''),
          P('Peroxide effect on HBr addition yields anti-Markovnikov because:', ['radical chain mechanism abstracts H first then Br adds to less substituted carbon textbook peroxide initiates radicals selective statement exam if taught', 'polar mechanism still false different pathway', 'photon absorption only incomplete description', 'catalyst platinum'], 'A', ''),
          P('Polymer from propene monomer is:', ['polypropylene repeating unit derived from propene addition chain growth Ziegler-Natta catalyst awareness historically Nobel prize context story optional', 'polystyrene styrene monomer different', 'PVC vinyl chloride different', 'nylon condensation 6,6 diamine adipoyl chloride different'], 'A', ''),
          P('Ozonolysis cleaves alkenes to:', ['carbonyl fragments depending workup reductive oxidative classic advanced lab but awareness existence organic analysis structure elucidation historically exam pointer if syllabus mentions', 'restore saturated alkane only false', 'produce only CO2 always false partial oxidation controlled ozonide intermediate', 'diamond'], 'A', ''),
          P('Kharasch addition refers historically to:', ['additions influenced by peroxides radical pathway anti-Markovnikov context naming optional trivia if teachers mention', 'acid catalyzed hydration', 'Friedel-Crafts alkylation aromatic', 'acid base neutralization'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Alkynes & petroleum',
        problems: [
          P('Ethyne linear geometry results from:', ['sp hybridization sigma bonds colinear', 'sp2 trigonal false alkene-like but alkynes two pi bonds one sigma between carbons linear overall', 'sp3 tetrahedral false', 'pure d orbitals false transition metal complexes different'], 'A', ''),
          P('Weak acidity of terminal alkynes relative to alkanes allows:', ['deprotonation by strong bases forming acetylide ions nucleophiles in syntheses NH2- example not exam mechanism depth always', 'donating protons to water like strong acids false pKa still relatively high roughly 25 acetylene example still far weaker than water autoionization context basicity amide ion in ammonia solvent teaching', 'forming salts with NaCl directly false need strong base', 'spontaneous combustion in water false'], 'A', ''),
          P('Fractional distillation separates crude oil by:', ['boiling point differences volatility smaller molecules lower bp fractions condense at different column heights temperatures process engineering introduction', 'density only sorting manually false though some separation uses', 'color spectrum false spectroscopy not refinery distillation column primary separation', 'magnetism'], 'A', ''),
          P('/bitumen or residue fraction often used for:', ['roads roofing heavy fuels depending upgrading hydrocracking cracking refinery complexity exam generic low volatile long chain molecules', 'jet fuel only false kerosene middle distillate range different', 'gaseous fuel only methane natural gas different source sometimes associated petroleum but distinct often', 'drinking water purification false'], 'A', ''),
          P('LPG typically is mixture of:', ['propane butane liquefied pressurized domestic fuel cylinders safety odorants added mercaptans context Ethiopia urban fuel exam generic household energy not policy', 'methane pipeline gas high pressure not same as bottled LPG usually', 'only octane gasoline vapor', 'pure ethanol'], 'A', ''),
          P('Catalytic reforming in refineries:', ['converts straight chain alkanes to branched and aromatic compounds improving octane aromatic ring formation chemistry advanced overview awareness industrial chemistry unit foreshadow', 'only removes sulfur hydrodesulfurization different unit operation', 'produces only hydrogen exclusively false coproduct', 'cracks to single carbon always false'], 'A', ''),
          P('Environmental concern from burning fossil fractions includes:', ['SOx NOx particulates greenhouse gases acid rain smog depending composition and combustion conditions ethics citizenship discussion exam aligns later environmental unit but tie-in valid interdisciplinary awareness intro', 'oxygen enrichment of atmosphere drastically false combustion consumes O2 minor global fraction though catalytic helps', 'eliminates water vapor false produces H2O vapor actually greenhouse contributor though smaller than CO2 long-lived radiative forcing complexity skip except mention exhaust includes water', 'pure oxygen generation'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 3: Aromatic compounds and oxygen-containing organics',
    chapterDescription:
      'Benzene and aromaticity introduction; alcohols, carbonyls, acids, and esters linked to everyday and industrial contexts.',
    topics: [
      {
        topicName: 'Benzene and aromaticity (introductory)',
        topicDescription: 'Resonance; delocalized π system; substitution vs addition tendency.',
        topicObjectives: [
          'Explain why benzene is unusually stable compared with hypothetical cyclohexatriene.',
          'Recognize common electrophilic aromatic substitution classes at name recognition level.',
        ],
      },
      {
        topicName: 'Alcohols and phenols (survey)',
        topicDescription: 'Nomenclature, hydrogen bonding, oxidation to carbonyls.',
        topicObjectives: [
          'Identify primary, secondary, and tertiary alcohol structures.',
          'Describe dehydration to alkene under acid catalysis (introductory).',
        ],
      },
      {
        topicName: 'Aldehydes and ketones',
        topicDescription: 'Carbonyl polarity; nucleophilic addition outline; Tollens/Fehling as qualitative context.',
        topicObjectives: [
          'Distinguish aldehyde versus ketone reactivity with common qualitative tests where taught.',
          'Draw hemiacetal formation in water (introductory).',
        ],
      },
      {
        topicName: 'Carboxylic acids and derivatives',
        topicDescription: 'Acidity of RCOOH; ester formation (Fischer esterification sketch); saponification idea.',
        topicObjectives: [
          'Explain why carboxylic acids are more acidic than alcohols.',
          'Link esters to fats, oils, and fragrance contexts.',
        ],
      },
      {
        topicName: 'Synthetic polymers and macromolecules (survey)',
        topicDescription: 'Addition vs condensation polymers; proteins and nucleic acids as natural polymers (conceptual).',
        topicObjectives: [
          'Contrast polyethylene with nylon or polyester at block-diagram level.',
          'State that polymer properties depend on chain interactions and morphology.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Stable', 'Benzene’s extra stability is called:', ['Aromatic resonance energy delocalization teaching', 'Hydrophobic collapse', 'Lattice energy', 'Entropy of mixing only'], 0, 'Medium'),
      ex(0, 'Sub', 'Nitration of benzene is an example of:', ['Electrophilic aromatic substitution generating nitrobenzene overview', 'Nucleophilic addition to carbonyl', 'Free radical chain halogenation of alkane', 'Hydration of ethene'], 0, 'Easy'),
      ex(1, 'Ox', 'PCC oxidizes primary alcohol to:', ['Aldehyde in non-aqueous conditions introductory reagent awareness not every exam board teaches same reagent but pattern primary to aldehyde stop versus strong oxidant to acid dichromate aqueous example distinction teachers emphasize', 'Carboxylic acid always false sometimes', 'Alkene', 'Methane'], 0, 'Hard'),
      ex(1, 'Phen', 'Phenol is more acidic than ethanol partly because:', ['Conjugate base phenoxide resonance stabilized ortho para delocalization negative charge oxygen ring overlap awareness intro', 'larger molecular mass false', 'more hydrogens false', 'ionic salt always'], 0, 'Medium'),
      ex(2, 'Nuc', 'Nucleophiles attack carbonyl carbon because:', ['Partial positive charge on carbonyl carbon polarity dipole arrow pushing introductory mechanism', 'oxygen always bears positive charge full false formal charges resonance', 'no movement electrons false', 'only in gas phase false'], 0, 'Easy'),
      ex(2, 'Toll', 'Tollens’ reagent oxidizes:', ['Aldehydes to carboxylic acid with silver mirror Ag precipitates qualitative test typical exam recognition level not balanced redox memorization unless required board', 'Ketones generally negative simple ketone unless alpha hydroxy complications skip', 'Alkanes', 'Benzene'], 0, 'Medium'),
      ex(3, 'pKa', 'Typical carboxylic acid pKa is:', ['Near 4–5 much lower weaker acid than mineral strong not as weak as alcohols ~16 pKa ethanol rough', 'Above 15 like alcohols false', 'negative like HCl aqueous context strong acid different', 'exactly 7 neutral'], 0, 'Medium'),
      ex(3, 'Ester', 'Esterification between acid and alcohol is often catalyzed by:', ['Strong acid to activate carbonyl Fischer esterification reversible water removal drives equilibrium Le Chatelier applied organic intro', 'strong base only saponification reverse ester base hydrolysis different pathway', 'metal catalyst hydrogenation different', 'sunlight alone'], 0, 'Medium'),
      ex(4, 'Cond', 'Nylon-6,6 forms by:', ['Condensation polymerization between diamine and diacid releasing water repeater unit diamine adipoyl chloride lab demo variants exam pointer if syllabus expects one monomer naming style boards vary', 'Addition of ethylene only', 'Cracking crude oil', 'Ion exchange zeolites'], 0, 'Medium'),
      ex(4, 'Protein', 'Proteins are polymers of:', ['Amino acids peptide amide bonds polypeptide chains levels of structure primary secondary tertiary quaternary conceptual intro exam not full biochemistry depth unless syllabus extends', 'glucose only polysaccharide starch glycogen cellulose different biopolymers', 'nucleotides DNA RNA different biopolymer class', 'ethylene monomers'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Aromaticity',
        problems: [
          P('Hückel 4n+2 π electrons rule identifies many aromatic rings because:', ['delocalized cyclic π system lower energy aromatic stabilization introductory organic qualitative', 'linear molecules', 'only heterocycles false pyridine furan examples also if taught', 'ionic count false'], 'A', ''),
          P('Benzene resists addition compared with alkenes because:', ['loss of aromatic stabilization cost outweighs addition product pathway preference electrophilic substitution preserve aromatic sextet', 'steric blocking always false addition at least initially could be imagined but thermodynamics kinetics favor substitution classic teaching', 'lack of pi electrons false benzene has pi electrons delocalized', 'water insolubility only false kinetics not solubility primary explanation'], 'A', ''),
          P('A nitronium ion NO2+ electrophile forms in nitration mixture from:', ['reaction of nitric acid with sulfuric acid generating stronger acid system dehydrating nitric to nitronium introduction exam often qualitative not mechanism depth every step', 'pure water', 'NaCl crystals', 'methane only'], 'A', ''),
          P('Friedel-Crafts alkylation can suffer:', ['rearrangements of carbocation electrophiles polyalkylation overview limitations teach why acylation sometimes preferred introductory pointer', 'no side reactions false reality messy', 'impossible with benzene false works with many aromatics some deactivated nitro strongly deactivated maybe fails exam nuance', 'only happens in gas state false Lewis acid catalyst AlCl3 etc'], 'A', ''),
          P('Ortho para directors on benzene rings often:', ['activate ring toward further substitution except halogens deactivating but ortho para directors nuanced resonance donation lone pair overlap exceptions exam board dependent depth', 'always meta directors false', 'stop all reaction completely false though deactivate strongly meta directors often nitro sulfonic acids examples', 'only inorganic substituents false many organic groups'], 'A', ''),
          P('Anti-aromaticity concept 4n electrons warns:', ['planar cyclic conjugated systems can be destabilizing cyclobutadiene textbook example instability not same stability aromatic teaching contrast if mentioned', 'benzene unstable false', 'all rings aromatic false many aliphatic cycloalkanes non-aromatic', 'only linear molecules stable false'], 'A', ''),
          P('Substituted benzene naming uses locants:', ['1,2 ortho 1,3 meta 1,4 para traditional language alongside numbers modern IUPAC numeric preferred systematic communication exam may accept common language still', 'random numerology', 'mass percent only', 'only Greek letters alpha beta rarely aromatic'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Alcohols',
        problems: [
          P('Hydrogen bonding in alcohols elevates boiling points compared with analogous alkanes because:', ['stronger IMFs require more energy to vaporize teaching', 'covalent bonds break at boiling false not covalent bond breaking vaporization mostly IMF overcoming simplistic phrasing though hydrogen bonds partially covalent character debate skip', 'ionic lattice energy false molecular liquids', 'metal conduction electrons'], 'A', ''),
          P('Oxidation of secondary alcohol typically gives:', ['ketone unless overoxidation pathways break C-C advanced cases skip simple exam usually stops ketone', 'aldehyde false primary oxidation distinct', 'carboxylic acid directly false two step often primary through aldehyde depending conditions', 'alkane deoxygenation false'], 'A', ''),
          P('Lucas test differentiation speed ZnCl2 HCl relates to:', ['carbocation stability of substitution tertiary fastest cloudiness earliest teaching demonstration not universally used modern labs cautious safety but concept SN1 trend', 'boiling point only', 'optical activity alone without chirality context', 'aromatic substitution'], 'A', ''),
          P('Phenol acidity stems partly from:', ['resonance stabilization of phenoxide ion negative charge delocalized into ring teaching qualitative', 'hydrogen bonding in pure phenol solid that is intermolecular not acidity itself careful distinction intramolecular H-bond ortho nitrophenol advanced skip', 'larger molar mass false', 'being gas at RTP false'], 'A', ''),
          P('Ethanol from fermentation ties to:', ['sugar metabolism yeast anaerobic chemistry applied Ethiopian agriculture awareness not ethanol fuel policy nuance exam generic reversible product CO2 also', 'photosynthesis oxygen only', 'crude oil only synthetic ethanol also exists hydration ethene industrial alternate route', 'ionic solid dissolution'], 'A', ''),
          P('Dehydration mechanism acid catalyzed often goes through:', ['carbocation intermediate E1 style elimination competition substitution side products Zaitsev regioselectivity more substituted alkene favor heated concentrated acid awareness intro', 'concerted E2 only exclusively false can be E2 if strong base present different conditions', 'SN2 only primary alcohol may SN2 but elimination heated acidic typically E1 pathway', 'free radical only false'], 'A', ''),
          P('GEM diol formation from ketone in water relates to:', ['nucleophilic addition equilibrium carbonyl hydrate reversible mostly favorable for formaldehyde smaller ketones vs hindered academic pointer', 'aromatic substitution false', 'ester hydrolysis false', 'polymerization only'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Carbonyls',
        problems: [
          P('Aldehyde more oxidized than alcohol on same chain because:', ['C-O double bond more oxidized carbon higher oxidation state counts bookkeeping organic oxidation level definitions introductory compare ketone also level carboxylic acid highest chain example progression', 'it contains fewer hydrogens always false formaldehyde methanol comparison nuanced higher H count paradox careful oxidation state versus functional group classification exam simplified sometimes', 'always positive charge false resonance polar not full charge', 'no difference false'], 'A', ''),
          P('NaBH4 reduces many aldehydes and ketones to alcohols because:', ['hydride donor attacks carbonyl mildly compared with LiAlH4 stronger broader reactivity profiles safety teaching choose mild reagent water tolerant sometimes NaBH4', 'oxidizes alcohols false opposite', 'cleaves double bonds alkenes typically not unless conjugation special cases advanced skip', 'polymerizes ethylene'], 'A', ''),
          P('Hydrate of carbonyl exists more for:', ['small electrophilic carbonyl formaldehyde chloral hydrate historic example exam pointer stability electronic effects steric hindrance disfavors gem diol for bulky ketones intro mention', 'bulky t-butyl ketones generally less hydrated equilibrium leftward', 'benzene ring itself false non carbonyl', 'alkanes'], 'A', ''),
          P('Imine formation from carbonyl and primary amine involves:', ['condensation eliminating water Schiff base linkage biochem PLP cofactor connections optional awareness not exam depth mechanisms unless honors path', 'addition of H2 catalytic only false imine distinct from amine to alcohol reductive amination multistep teaching sometimes', 'esterification', 'Friedel crafts'], 'A', ''),
          P('Acetal protecting group strategy uses:', ['reversible formation from carbonyl and alcohol under acid catalysis protection deprotection steps synthesis planning awareness intro if mentioned', 'irreversible always false mild acid regenerates carbonyl', 'only bases catalyze false acid catalyzed formation hydrolysis also acid water addition reverse', 'only aromatic aldehydes false'], 'A', ''),
          P('Iodoform reaction identifies methyl ketones producing yellow CHI3 precipitate:', ['haloform reaction basic iodine and methyl ketone chemistry lab qualitative historically analytical', 'aldehydes ethanol also positive test exception ethanol methyl group oxidized in situ advanced pointer exam may note iodofrm includes ethanol as false positive context prohibition era chemistry story fun but optional', 'benzene rings false', 'alkanes saturated'], 'A', ''),
          P('Wolff-Kishner reduction extreme conditions converts carbonyl to:', ['methylene CH2 group overall removes oxygen harsh hydrazine strong base heat advanced named reaction optional trivia if syllabus covers reductions summary chart', 'alcohol hydride donor milder different', 'carboxylic acid oxidation opposite', 'alkene dehydration different dehydration of alcohol earlier'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — Acids & esters',
        problems: [
          P('Carboxylic acid resonance between carbonyl and hydroxyl delocalization:', ['stabilizes anion after deprotonation raising acidity compared alcohol analogs', 'makes neutral acid unstable false actually stabilizes acid too but thermodynamic acidity dominated by conjugate base stability comparisons pKa measurements', 'prevents hydrogen bonding false acids hydrogen bond dimers often solid gas phase many structures', 'only in aromatic acids false all RCOOH benefit partly'], 'A', ''),
          P('Amide bond in proteins is also:', ['peptide bond resonance planar partial double bond character restricted rotation cis trans rare except proline complications structural biology intro if biology cross link not essential chemistry exam may still mention planar amide', 'ester bond false different heteroatom nitrogen versus oxygen single bond resonance patterns differ amide stronger resonance', 'pure single bond no resonance false significant resonance', 'ionic salt bridge side groups sometimes ionizable but peptide bond covalent'], 'A', ''),
          P('Basic hydrolysis of ester saponification produces:', ['carboxylate salt and alcohol from triglyceride soap and glycerol practical making awareness historical societal chemistry context Ethiopia rural soap making general exam pointer story optional', 'only alkene elimination false', 'diamond', 'chlorine gas'], 'A', ''),
          P('Acid anhydrides react with alcohols to form:', ['esters and carboxylic acids mixed products case dependent stoichiometry symmetric anhydride simpler teaching lab synthesis conversion pathways if taught instead of Fischer direct sometimes faster kinetically activated carboxyl group', 'only water forever false other products', 'alkane only reductive', 'no reaction false reactive'], 'A', ''),
          P('Fatty acid saturated vs unsaturated affects:', ['melting point stacking van der waals cis double bonds kinks lower mp oils liquid room temperature nutrition link interdisciplinary heart health messaging careful not medical exam organic property reasoning primary', 'only smell false', 'ionic character false molecular covalent', 'atomic number of carbon changes false same elements'], 'A', ''),
          P('Hell-Volhard-Zelinsky brominates alpha carbon of carboxylic acids:', ['enolizable activation alpha halo acid further reactions advanced optional pointer named reaction if syllabus enumerates', 'benzene ring directly false aromatic substitution different', 'ester carbonyl only different reactivity', 'alkane interior only'], 'A', ''),
          P('Detergents vs soaps in hard water differences partly because:', ['soap forms insoluble calcium/magnesium salts scum detergents sulfonate head groups remain soluble synthetic surfactants modern laundry environment link hard water geology Ethiopia groundwater mineral content awareness softening chelating EDTA in formulations engineering detail optional exam conceptual difference hydrophilic head hydrophobic tail amphiphilic micelle formation cleansing action general', 'soaps always better false soft water okay', 'no difference false', 'only temperature matters false composition matters'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — Polymers',
        problems: [
          P('Addition polymerization contrasts condensation by:', ['no small molecule byproduct typically though termination steps and initiators nuanced chain growth monomer adds repetitively contrast condensation releases water HCl etc step growth polyurethane sometimes overlap categories tricky advanced skip bifurcation exam usually simple PE from ethylene vs nylon water release classic distinction', 'always requiring water release false opposite condensation often does', 'only ionic monomers false covalent monomers typically', 'cannot create plastics false produces many plastics'], 'A', ''),
          P('Thermoplastics can be:', ['reheated reshaped polymer chains flow entanglements reversible physical behavior recycling implication polyethylene bottle melting remolded vs thermoset crosslinked irreversible decomposition first network epoxide resins compare exam societal plastics pollution awareness tie science ethics citizenship cross curricular', 'never remelted false thermosets cannot reshape easily', 'always elastomers rubber different crosslinks physical entanglements reversible sometimes viscoelastic complicated skip', 'only metals false'], 'A', ''),
          P('Crosslinking natural rubber with sulfur vulcanization:', ['introduces sulfur bridges limiting chain slippage elasticity resilience tires exam context industrial chemistry optional', 'liquefies rubber false higher dimensional network', 'removes double bonds entirely false some remain unless saturated not typical vulcanization chemistry subtle', 'makes glass false rubbery elastomer'], 'A', ''),
          P('Teflon polytetrafluoroethylene PTFE benefits from:', ['strong C-F bonds low surface energy nonstick chemical resistance cookware safety controversy heated above degradation temperatures toxic fumes awareness consumer education interdisciplinary health nuance exam pointer caution without fearmongering factual stability high', 'ionic lattice brittle false polymer molecular', 'water solubility false extremely hydrophobic', 'metal conductivity false insulator'], 'A', ''),
          P('Biodegradable polymer research seeks:', ['to reduce persistent plastic waste via microbial enzymatic breakdown PLA polylactic acid example ester link hydrolysis awareness green chemistry sustainable development goals link interdisciplinary', 'stronger forever plastics only opposite direction also exists high performance materials but sustainability pushes biodegradability', 'eliminate all polymer use unrealistic many essentials medical devices food preservation exam critical thinking balance', 'convert plastics to metals impossible'], 'A', ''),
          P('Polymer tacticity describes:', ['relative stereochemistry of chiral centers along chain isotactic syndiotactic atactic polypropylene example physical properties crystallinity introductory if mentioned', 'molecular mass exclusively Mn Mw distributions GPC advanced characterization skip typical exam', 'only crosslink density different parameter', 'color only pigmentation additives'], 'A', ''),
          P('Natural rubber cis-polyisoprene differs from gutta-percha trans stereochemistry affects:', ['crystallinity elasticity glass transition physical properties materials science intersection if taught stereospecific polymerization Ziegler Natta historical Nobel context', 'molecular formula false same empirical repeat unit arrangement different stereochemistry only connectivity identical constitutional', 'acidicity false hydrocarbon mostly', 'water solubility both hydrophobic mostly'], 'A', ''),
        ],
      },
    ],
  },
];
