/**
 * Grade 9 Chemistry curriculum — Units 1–3 (Natural stream, MoE Ethiopia outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Structure of the atom',
    chapterDescription:
      'Atomic theory, subatomic particles, isotopes, atomic models, and introductory electron configuration.',
    topics: [
      {
        topicName: 'Atomic theory',
        topicDescription: 'Dalton’s postulates, modern revisions, and the idea of indivisible particles.',
        topicObjectives: [
          'State key ideas of Dalton’s atomic theory and how experiments modified them.',
          'Distinguish elements, compounds, and mixtures at a particle level.',
        ],
      },
      {
        topicName: 'Subatomic particles and the nucleus',
        topicDescription: 'Electron, proton, neutron; cathode rays; Rutherford scattering; nuclear model.',
        topicObjectives: [
          'Relate charge and mass of proton, neutron, and electron.',
          'Describe evidence for a small, dense, positively charged nucleus.',
        ],
      },
      {
        topicName: 'Composition of the atom and isotopes',
        topicDescription: 'Atomic number, mass number, isotopes, and relative atomic mass.',
        topicObjectives: [
          'Calculate protons, neutrons, and electrons for neutral atoms and common ions.',
          'Compute relative atomic mass from isotopic abundances (introductory).',
        ],
      },
      {
        topicName: 'Atomic models',
        topicDescription: 'Thomson, Rutherford, Bohr, and quantum-mechanical model (survey).',
        topicObjectives: [
          'Compare strengths and limitations of historical atomic models.',
          'Link energy levels to emission spectra at an introductory level.',
        ],
      },
      {
        topicName: 'Electron configuration and valence electrons',
        topicDescription: 'Subshell notation, valence electrons, and diagrammatic representations.',
        topicObjectives: [
          'Write ground-state configurations for representative elements (survey).',
          'Identify valence electrons and relate them to group behavior.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Dalton', 'Dalton proposed atoms of an element are:', ['Identical in mass and properties', 'Always divisible in reactions', 'Shared by all compounds', 'Only in gases'], 0, 'Easy'),
      ex(1, 'Charge', 'A proton has charge:', ['+1', '−1', '0', '+2 always'], 0, 'Easy'),
      ex(1, 'Rutherford', 'Rutherford’s experiment showed the nucleus is:', ['Large and diffuse', 'Small and dense with positive charge', 'Absent', 'Made of electrons only'], 1, 'Medium'),
      ex(2, 'Isotope', 'Isotopes of an element differ in:', ['Number of protons', 'Number of neutrons', 'Chemical symbol letter', 'Charge of nucleus'], 1, 'Easy'),
      ex(2, 'Mass', 'Mass number equals:', ['Protons only', 'Protons + neutrons', 'Electrons + protons', 'Neutrons only'], 1, 'Easy'),
      ex(3, 'Bohr', 'Bohr’s model explained mainly:', ['Nuclear fission', 'Line spectra of hydrogen (intro)', 'DNA structure', 'Ionic lattice energy'], 1, 'Medium'),
      ex(4, 'Valence', 'Valence electrons are found in:', ['The outermost occupied shell (survey)', 'The nucleus', 'Only inner shells always', 'Neutron-rich core'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Atomic theory',
        problems: [
          P('Compounds form when atoms combine in:', ['Random ratios', 'Fixed whole-number ratios (Dalton)', 'Only pairs of noble gases', 'No predictable pattern'], 'B'),
          P('Modern atomic theory accepts that atoms:', ['Cannot be split in any way', 'Contain subatomic particles', 'Have no mass', 'Are identical for all elements'], 'B'),
          P('A pure element sample contains:', ['Only one type of atom', 'Always two types of atom', 'Only ions in solid form always', 'No protons'], 'A'),
          P('Law of conservation of mass supports:', ['Atoms rearrange in reactions', 'Atoms disappear in combustion', 'Mass is created from nothing', 'Energy has no role'], 'A'),
          P('Mixtures differ from compounds because:', ['Components keep identity and can often be separated physically', 'Components always share electrons in fixed ratios', 'Mixtures have one formula unit only', 'Mixtures are always ionic'], 'A'),
          P('Chemical symbols represent:', ['Elements or atoms of elements in equations', 'Only mixtures', 'Only temperatures', 'Only catalysts'], 'A'),
          P('Dalton’s theory was revised after discovery of:', ['Subatomic particles', 'Only gravity', 'Only sound waves', 'Planets'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — Subatomic particles',
        problems: [
          P('Electrons were discovered in part through:', ['Cathode ray experiments', 'Photosynthesis', 'Fractional distillation', 'Titration'], 'A'),
          P('Neutrons are found in the:', ['Nucleus', 'First ionization shell only', 'Bonding π orbitals only', 'Crystal lattice holes only'], 'A'),
          P('An atom is electrically neutral when:', ['Protons equal electrons', 'Neutrons equal electrons', 'Protons equal neutrons always', 'No charged particles exist'], 'A'),
          P('Most of an atom’s volume is:', ['Empty space with electrons far from nucleus', 'Solid nucleus filling the atom', 'Only neutrons', 'Only photons'], 'A'),
          P('Alpha particles in Rutherford’s experiment were:', ['Helium nuclei (2+ charge)', 'Electrons', 'Neutrons only', 'Photons only'], 'A'),
          P('Nuclear charge is due mainly to:', ['Protons', 'Electrons', 'Neutrons', 'Positrons in all atoms'], 'A'),
          P('The electron’s mass is approximately:', ['Much less than proton or neutron', 'Equal to proton mass', 'Equal to neutron mass', 'Larger than nucleus'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — Isotopes',
        problems: [
          P('Isotopes have the same:', ['Atomic number', 'Mass number always', 'Neutron number always', 'Number of electrons in ions always different element'], 'A'),
          P('Mass number 23 and atomic number 11 implies neutrons ≈', ['12', '11', '23', '0'], 'A'),
          P('Relative atomic mass is a weighted average of:', ['Isotope masses by abundance', 'Only the lightest isotope', 'Only protons', 'Only electrons'], 'A'),
          P('Carbon-12 is used as a reference because:', ['It defines the atomic mass scale (survey)', 'It has no neutrons', 'It is the only isotope', 'It is a noble gas'], 'A'),
          P('An ion X²⁺ with 10 electrons likely came from an atom with:', ['12 electrons originally (neutral)', '8 protons only without context false', '20 protons false', 'No protons'], 'A'),
          P('Isotopes of hydrogen include:', ['Protium, deuterium, tritium (names survey)', 'Only iron', 'Only uranium', 'Only neon'], 'A'),
          P('Chemical properties of isotopes of one element are:', ['Nearly identical for most reactions (survey)', 'Completely unrelated', 'Determined only by neutrons in all cases false', 'Always different colors'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — Atomic models',
        problems: [
          P('Thomson’s “plum pudding” model pictured:', ['Electrons embedded in positive sphere', 'Empty nucleus', 'Only neutrons', 'Planetary nuclei only'], 'A'),
          P('Rutherford’s model placed electrons:', ['Outside a small nucleus', 'Inside the nucleus', 'Only in bonds', 'Only in metals'], 'A'),
          P('Bohr postulated electrons in:', ['Quantized energy levels', 'Continuous spirals only', 'The nucleus', 'Fixed paths like planets exactly without quantization false'], 'A'),
          P('Quantum model describes electrons with:', ['Orbitals and probability distributions (survey)', 'Exact orbits like planets always', 'No wave character', 'Only classical paths'], 'A'),
          P('Emission spectra suggest atoms:', ['Emit photons when electrons drop levels (intro)', 'Absorb no energy ever', 'Have no electrons', 'Only vibrate mechanically'], 'A'),
          P('A model’s limitation is often shown when:', ['New evidence requires revision', 'It predicts everything forever', 'It uses mathematics', 'It names elements'], 'A'),
          P('The nuclear model replaced the idea that atoms are:', ['Uniformly filled positive matter without a nucleus', 'Always gases', 'Always ions', 'Always metals'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — Electron configuration',
        problems: [
          P('Aufbau filling builds from:', ['Lower energy orbitals upward (survey)', 'Highest energy always first', 'Random order', 'Only d orbitals first for all atoms'], 'A'),
          P('Group 1 elements typically have valence configuration:', ['ns¹', 'ns²np⁶', 'ns²np⁵', '1s² only for all false hydrogen exception'], 'A'),
          P('Noble gases often have outer shell:', ['Filled valence octet (He exception 2)', 'One electron', 'Seven electrons always', 'No electrons'], 'A'),
          P('Hund’s rule favors:', ['Maximum unpaired electrons in degenerate orbitals before pairing', 'Immediate pairing always', 'Removing electrons', 'Filling 1s last'], 'A'),
          P('Valence electrons help predict:', ['Common ion charges and bonding patterns (survey)', 'Nuclear stability only', 'Gravity', 'Sound speed'], 'A'),
          P('Electron-dot diagrams show:', ['Valence electrons as dots around symbol', 'All core electrons always', 'Only neutrons', 'Only isotopes'], 'A'),
          P('Sodium (Z=11) neutral atom has electron count:', ['11', '10', '12', '23'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Periodic classification of the elements',
    chapterDescription:
      'Modern periodic law, table organization, periodic trends, and uses of classification.',
    topics: [
      {
        topicName: 'Introduction to periodic classification',
        topicDescription: 'Why classify elements; early attempts; periodicity concept.',
        topicObjectives: [
          'Explain why chemists group elements by patterns.',
          'Relate repeating properties to electron structure (introductory).',
        ],
      },
      {
        topicName: 'The modern periodic table',
        topicDescription: 'Periods, groups, blocks; atomic number as organizing principle.',
        topicObjectives: [
          'Locate elements by atomic number and group/period.',
          'State the modern periodic law in terms of atomic number.',
        ],
      },
      {
        topicName: 'Periodic properties in the periodic table',
        topicDescription: 'Atomic radius, ionization energy, electronegativity trends (survey).',
        topicObjectives: [
          'Predict trend direction across a period and down a group.',
          'Connect trends to effective nuclear charge and shielding (intro).',
        ],
      },
      {
        topicName: 'Periodic properties within periods and groups',
        topicDescription: 'Metallic character, ion size, and common anomalies (survey).',
        topicObjectives: [
          'Compare metals, nonmetals, and metalloids on the table.',
          'Relate group number to valence electrons for main-group elements.',
        ],
      },
      {
        topicName: 'Advantages of periodic classification',
        topicDescription: 'Predicting formulas, properties, and reactivity from position.',
        topicObjectives: [
          'Use the table to predict likely ion charges of main-group elements.',
          'Give examples where classification guides industrial or health applications.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Why', 'Classification helps chemists:', ['Memorize random facts only', 'Predict properties from patterns', 'Eliminate experiments', 'Ignore atomic number'], 1, 'Easy'),
      ex(1, 'Law', 'Modern periodic law uses:', ['Atomic number', 'Only color', 'Only density of liquids', 'Alphabetical names'], 0, 'Easy'),
      ex(1, 'Period', 'Elements in the same period have:', ['Same number of occupied shells (survey)', 'Same group number always', 'Same mass number', 'Same number of neutrons'], 0, 'Medium'),
      ex(2, 'Radius', 'Atomic radius generally decreases across period 3 because:', ['Effective nuclear charge increases', 'Electrons are removed', 'Neutrons disappear', 'Atoms become gases'], 0, 'Medium'),
      ex(2, 'IE', 'First ionization energy often increases across a period because:', ['Electrons are held more tightly (trend story)', 'Atoms get much larger', 'Nuclear charge vanishes', 'Shielding becomes infinite'], 0, 'Medium'),
      ex(3, 'Metal', 'Metallic character generally decreases:', ['Across a period left to right', 'Down a group always increases metals false mixed', 'In all noble gases', 'Only in liquids'], 0, 'Easy'),
      ex(4, 'Predict', 'Group 17 elements often form ions with charge:', ['−1', '+1', '+2', '0'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Classification intro',
        problems: [
          P('Periodic patterns repeat because:', ['Electron arrangements recur with atomic number', 'Elements are random', 'Only metals exist', 'Mass number is always 12'], 'A'),
          P('Mendeleev left gaps for:', ['Undiscovered elements with predicted properties', 'Mixtures only', 'Compounds only', 'Isotopes only'], 'A'),
          P('Classification is similar to organizing:', ['Library books by subject', 'Only coins by year without categories', 'Only gases', 'Only solutions'], 'A'),
          P('Atomic number equals:', ['Protons in nucleus', 'Neutrons only', 'Electrons in ions always', 'Mass number'], 'A'),
          P('Isotopes appear in the same cell because:', ['Same atomic number', 'Same mass number always', 'Different elements', 'Different periods always'], 'A'),
          P('A period is a horizontal row showing:', ['Filling of outer shells trend (survey)', 'Identical properties only', 'Only metals', 'Only gases'], 'A'),
          P('Groups are vertical columns sharing:', ['Similar valence electron counts (main-group survey)', 'Identical mass', 'Same period number', 'No trends'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — Modern table',
        problems: [
          P('Moseley’s work showed periodicity depends on:', ['Atomic number', 'Only alphabetical order', 'Only neutron count alone', 'Color'], 'A'),
          P('Alkali metals are in group:', ['1', '18', '17', '0 only noble'], 'A'),
          P('Noble gases are largely unreactive because:', ['Filled valence shells (survey)', 'No electrons', 'No protons', 'Only metallic bonding'], 'A'),
          P('Transition metals occupy the:', ['d-block (survey)', 'Only s-block', 'Only f-block only lanthanides separate', 'Only group 1'], 'A'),
          P('Lanthanides are often placed:', ['Below main table f-block', 'Only in period 1', 'Only as gases', 'Outside the table always false'], 'A'),
          P('Atomic mass on the table is usually:', ['Weighted average of isotopes', 'Mass of one isotope only always', 'Number of neutrons only', 'Number of electrons in ions'], 'A'),
          P('Elements in group 2 are called:', ['Alkaline earth metals', 'Halogens', 'Noble gases', 'Chalcogens'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — Periodic trends',
        problems: [
          P('Atomic radius increases down a group mainly because:', ['Additional electron shells', 'Protons disappear', 'Electrons are deleted', 'Only ionic radius matters always false'], 'A'),
          P('Electronegativity generally increases toward:', ['Upper right (excluding noble gases in many plots)', 'Lower left always', 'Only group 1', 'Only period 1'], 'A'),
          P('Ionization energy is energy to remove:', ['An electron from gaseous atom', 'A proton', 'A neutron', 'A molecule from liquid only'], 'A'),
          P('Electron affinity describes:', ['Energy change when atom gains electron (survey)', 'Mass of nucleus', 'Boiling point only', 'Color only'], 'A'),
          P('Shielding by inner electrons:', ['Reduces effective nuclear pull on valence electrons', 'Increases effective nuclear charge always false', 'Only in ions', 'Only in metals'], 'A'),
          P('Across period 3, metallic character generally:', ['Decreases', 'Increases without limit', 'Stays constant', 'Vanishes for all'], 'A'),
          P('Trends are explained using:', ['Nuclear charge and electron arrangement', 'Only gravity', 'Only temperature', 'Random luck'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Groups and periods',
        problems: [
          P('Cations are smaller than parent atoms because:', ['Fewer electrons; same nuclear charge pulls tighter (survey)', 'More electrons always', 'More neutrons in nucleus change size slightly not main story', 'Loss of protons'], 'A'),
          P('Anions are larger than parent atoms because:', ['More electrons increase repulsion (survey)', 'Fewer electrons', 'More protons removed', 'No change ever'], 'A'),
          P('Group 1 metals react with water to form:', ['Hydroxide and hydrogen (typical lab story)', 'Only oxygen gas always', 'Only salts without water', 'Diamond'], 'A'),
          P('Halogens are diatomic molecules like:', ['Cl₂, Br₂ (survey)', 'Na₂ only', 'He₂ stable false', 'Fe₂ gas false'], 'A'),
          P('Metalloids such as silicon often show:', ['Intermediate properties', 'Only noble gas behavior', 'Only liquid metal behavior', 'No semiconducting uses false'], 'A'),
          P('Diagonal relationships (Li–Mg) are:', ['Exceptions to simple trends (awareness)', 'Universal laws', 'Only for noble gases', 'Impossible'], 'A'),
          P('Valence of carbon in many compounds is:', ['4', '1 only', '0 only', '8 always'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Uses of classification',
        problems: [
          P('Knowing group number helps predict:', ['Common ion charges and bonding', 'Exact boiling point without data always', 'Nuclear half-life always', 'Planet orbits'], 'A'),
          P('Semiconductors in electronics use elements like:', ['Si and Ge (survey)', 'Only noble gases', 'Only alkali metals pure', 'Only halogens liquid'], 'A'),
          P('Alkali metals must be stored under oil because:', ['They react vigorously with air/moisture', 'They are noble', 'They are gases', 'They are inert'], 'A'),
          P('The table helps choose materials for:', ['Catalysts, alloys, and fertilizers (examples)', 'Only astrology', 'Only music', 'Only optics without chemistry false many optics materials chemistry linked skip simple'], 'A'),
          P('Periodic law improves communication by:', ['Standard symbols and predictable patterns', 'Eliminating all safety rules', 'Banning experiments', 'Random naming'], 'A'),
          P('Transition metals often form:', ['Colored compounds and variable oxidation states (survey)', 'Only single oxidation state always', 'Only gases', 'Only insulators always'], 'A'),
          P('Classification supports Ethiopia’s development when used in:', ['Industry, agriculture, and health chemistry contexts (survey)', 'Ignoring environmental safety', 'Avoiding measurement', 'Discarding evidence'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 3: Chemical bonding and intermolecular forces',
    chapterDescription:
      'Ionic, covalent, and metallic bonding; polarity; intermolecular forces and properties.',
    topics: [
      {
        topicName: 'Introduction to chemical bonding',
        topicDescription: 'Why atoms bond; octet/rule-of-eight idea; energy lowering.',
        topicObjectives: [
          'Explain bonding as interaction lowering system energy.',
          'Distinguish ionic, covalent, and metallic bonding scenarios.',
        ],
      },
      {
        topicName: 'Ionic bonding',
        topicDescription: 'Electron transfer, lattice, properties of ionic compounds.',
        topicObjectives: [
          'Predict ion formation for main-group elements (survey).',
          'Relate ionic lattice to melting point and conductivity patterns.',
        ],
      },
      {
        topicName: 'Covalent bonding',
        topicDescription: 'Shared electrons, Lewis structures, single/double/triple bonds.',
        topicObjectives: [
          'Draw Lewis structures for simple molecules taught in class.',
          'Distinguish bond order and bond length trends (introductory).',
        ],
      },
      {
        topicName: 'Metallic bonding',
        topicDescription: 'Electron-sea model; conductivity, malleability, alloys.',
        topicObjectives: [
          'Explain electrical conductivity of metals using delocalized electrons.',
          'Give examples of how alloying changes properties.',
        ],
      },
      {
        topicName: 'Intermolecular forces',
        topicDescription: 'London dispersion, dipole–dipole, hydrogen bonding; effects on bp/mp.',
        topicObjectives: [
          'Rank relative IMF strength for small molecules (survey).',
          'Relate hydrogen bonding to properties of water.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Why bond', 'Atoms bond to attain:', ['Lower energy more stable arrangements', 'Higher energy always', 'No electron changes ever', 'Only radioactive stability'], 0, 'Easy'),
      ex(1, 'Ionic', 'NaCl forms by:', ['Electron transfer forming Na⁺ and Cl⁻', 'Sharing only', 'Metallic sea only', 'No attraction'], 0, 'Easy'),
      ex(2, 'Lewis', 'A single bond shares:', ['One electron pair', 'Three electron pairs', 'No electrons', 'Only ions'], 0, 'Easy'),
      ex(2, 'Octet', 'Many main-group atoms tend toward:', ['Eight valence electrons (octet/rule-of-eight survey)', 'Zero electrons', 'Twenty electrons always', 'Only one electron'], 0, 'Easy'),
      ex(3, 'Metal', 'Metals conduct electricity because:', ['Delocalized electrons move', 'Ions are fixed and move', 'No charged particles', 'Only covalent networks'], 0, 'Easy'),
      ex(4, 'H-bond', 'Hydrogen bonding is strongest when H is bonded to:', ['N, O, or F (typical list)', 'Any metal', 'Helium', 'Carbon only always'], 0, 'Easy'),
      ex(4, 'Water', 'Water’s high boiling point is partly due to:', ['Hydrogen bonding', 'Only ionic lattice', 'Only metallic bonding', 'No IMFs'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Bonding intro',
        problems: [
          P('Chemical bonds form when:', ['Attractions outweigh repulsions in stable arrangement', 'Energy always increases', 'Electrons are destroyed', 'Nuclei merge'], 'A'),
          P('Ionic bonding commonly occurs between:', ['Metal and nonmetal with large electronegativity difference (survey)', 'Two identical noble gases', 'Only two metals', 'Only two nonmetals always false many nonmetal-nonmetal covalent'], 'A'),
          P('Covalent bonding involves:', ['Shared electron pairs', 'Complete transfer always', 'Only protons shared', 'Only neutrons'], 'A'),
          P('Bond energy is:', ['Energy required to break bonds (intro)', 'Always zero', 'Only kinetic energy of gas', 'Nuclear binding energy'], 'A'),
          P('A diatomic molecule H₂ has:', ['Covalent bond', 'Ionic lattice', 'Metallic sea', 'No bond'], 'A'),
          P('Noble gases rarely bond because:', ['Stable valence configuration (survey)', 'No electrons', 'Too many protons always', 'Only metallic'], 'A'),
          P('Lewis symbols show:', ['Valence electrons', 'All isotopes', 'Only neutrons', 'Nuclear reactions'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Ionic bonding',
        problems: [
          P('Ionic compounds in solid state often:', ['Do not conduct electricity well', 'Conduct like metals', 'Are always gases', 'Have no ions'], 'A'),
          P('Molten ionic compounds conduct because:', ['Ions are mobile', 'Electrons only in metal', 'Covalent bonds break', 'Photons carry charge'], 'A'),
          P('Lattice energy relates to:', ['Attraction between ions in crystal (qualitative)', 'Only covalent bond order', 'Only color', 'Sound in air'], 'A'),
          P('Formula unit for NaCl indicates:', ['Empirical ratio in ionic solid', 'Discrete gas molecules only false', 'Only covalent molecules', 'Mixture'], 'A'),
          P('Polyatomic ions like NO₃⁻ contain:', ['Covalent bonds within ion', 'Only metallic bonds', 'No electrons', 'Only noble gases'], 'A'),
          P('Dissolving many ionic salts in water:', ['Produces electrolyte solution', 'Always forms covalent network', 'Removes all ions false', 'Only works for oils'], 'A'),
          P('Calcium chloride CaCl₂ has ratio:', ['1:2 calcium to chloride in formula', '1:1 only', '2:1 reversed', 'No ions'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Covalent bonding',
        problems: [
          P('A double bond contains:', ['One σ and one π bond (intro)', 'Three σ bonds', 'Only ionic attraction', 'No shared electrons'], 'A'),
          P('Bond length generally:', ['Decreases as bond order increases (trend)', 'Increases with double bonds false opposite', 'Is unrelated to order', 'Is infinite'], 'A'),
          P('Nonpolar covalent bond occurs when:', ['Electronegativities are equal or very similar', 'Large electronegativity difference', 'Only in ions', 'Only in metals'], 'A'),
          P('Water is polar because:', ['Bond dipoles do not cancel in bent geometry', 'It is linear nonpolar', 'It has no O–H bonds', 'It is ionic only'], 'A'),
          P('Resonance structures represent:', ['Delocalized electron density (representation)', 'Physical oscillation of atoms back and forth literally false', 'Ionic transfer', 'Nuclear decay'], 'A'),
          P('Coordinate bond means:', ['Both electrons originally from one atom (survey)', 'Only ionic', 'Only metallic', 'No sharing'], 'A'),
          P('Carbon dioxide CO₂ is:', ['Linear and nonpolar overall (ideal model)', 'Always bent polar', 'Ionic only', 'A metal'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — Metallic bonding',
        problems: [
          P('Metallic bonding model includes:', ['Cations in electron sea', 'Only shared pairs between two atoms only', 'Only ionic transfer to halogens', 'No electrons'], 'A'),
          P('Ductility in metals arises partly because:', ['Layers can slide while sea maintains cohesion (survey)', 'Ionic brittleness', 'Only gases', 'Hydrogen bonds'], 'A'),
          P('Alloys are:', ['Mixtures of metals (often) with modified properties', 'Pure elements only', 'Only ionic solids', 'Only gases'], 'A'),
          P('Graphite conducts along sheets because:', ['π electrons delocalized in layers (survey)', 'It is ionic salt', 'It has no carbon', 'Only hydrogen bonds'], 'A'),
          P('Compared to ionic salts, metals often:', ['Conduct as solids', 'Never conduct', 'Are always gases', 'Have no electrons'], 'A'),
          P('Brass is an alloy of copper and:', ['Zinc (typical textbook example)', 'Sodium only', 'Chlorine gas', 'Helium'], 'A'),
          P('Metallic luster relates to:', ['Interaction of light with delocalized electrons (survey)', 'Only nuclear glow false', 'Only IMF', 'Only covalent polymers'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — IMFs',
        problems: [
          P('London dispersion forces exist in:', ['All molecules (instantaneous dipoles)', 'Only ions', 'Only metals', 'Only noble gases isolated false still LDF between atoms'], 'A'),
          P('Dipole–dipole forces require:', ['Polar molecules', 'Only ions in vacuum', 'Only metals', 'Only single atoms He false LDF not dipole-dipole'], 'A'),
          P('Hydrogen bonding affects:', ['Boiling point of H₂O strongly', 'Only NaCl lattice', 'Only iron metal', 'Only helium'], 'A'),
          P('“Like dissolves like” means:', ['Similar polarity solvents dissolve similar solutes often', 'Water never dissolves ions false', 'Only oil dissolves salts', 'Entropy irrelevant false often drives mixing'], 'A'),
          P('Surface tension arises from:', ['Cohesive IMFs at liquid surface', 'Only ionic bonds inside salt crystal', 'Nuclear force', 'Gravity only'], 'A'),
          P('Boiling breaks:', ['Intermolecular attractions (not always covalent bonds)', 'All covalent bonds always false', 'Nuclei apart', 'Only ionic lattice in molecular liquid'], 'A'),
          P('IMFs are generally weaker than:', ['Intramolecular covalent bonds', 'Nuclear strong force in all comparisons false different domain', 'Covalent bonds within molecules', 'Nothing ever false'], 'A'),
        ],
      },
    ],
  },
];
