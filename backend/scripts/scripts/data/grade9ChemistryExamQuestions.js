/**
 * Five entrance-exam-style MCQs per Grade 9 Chemistry topic (Natural stream).
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  const key = `${c}-${t}`;
  const banks = {
    '0-0': [
      Q('Dalton’s theory helped explain:', ['Fixed composition of compounds', 'Nuclear fission', 'Only mixtures', 'Only gases'], 'A'),
      Q('Atoms of one element are identical in:', ['Dalton’s original postulate (later revised for isotopes)', 'Mass number always', 'Neutron count always', 'Color only'], 'A'),
      Q('A compound differs from a mixture because:', ['Elements combine in definite ratios', 'Components keep separate formulas always', 'No chemical bonds form ever', 'Only metals are involved'], 'A'),
      Q('Chemical symbols on the periodic table represent:', ['Elements', 'Only ions', 'Only compounds', 'Only temperatures'], 'A'),
      Q('Grade 9 atomic theory connects to Ethiopia’s science learning by:', ['Building evidence-based models of matter', 'Rejecting measurement', 'Ignoring conservation laws', 'Avoiding symbols'], 'A'),
    ],
    '0-1': [
      Q('The electron was inferred from:', ['Cathode ray experiments', 'Only photosynthesis', 'Fractional distillation', 'Titration only'], 'A'),
      Q('Rutherford’s gold foil experiment showed:', ['A small dense nucleus', 'Electrons inside nucleus', 'No empty space', 'Uniform positive sphere only'], 'A'),
      Q('Neutrons contribute mainly to:', ['Mass number', 'Positive charge', 'Chemical bonding directly', 'Emission spectra only'], 'A'),
      Q('Nuclear charge equals number of:', ['Protons', 'Neutrons', 'Electrons in ion always', 'Isotopes'], 'A'),
      Q('Most atom volume is:', ['Empty space with electrons far from nucleus', 'Solid nucleus filling atom', 'Only neutrons', 'Only photons'], 'A'),
    ],
    '0-2': [
      Q('Isotopes differ in:', ['Neutron number', 'Proton number', 'Element identity', 'Atomic number'], 'A'),
      Q('Mass number A equals:', ['Protons + neutrons', 'Protons only', 'Electrons only', 'Neutrons only'], 'A'),
      Q('Relative atomic mass is:', ['Weighted average of isotopes', 'Always an integer', 'Only protons', 'Only electrons'], 'A'),
      Q('Carbon-12 reference scale defines:', ['Atomic mass unit (survey)', 'Only molar volume', 'Only pH', 'Only gas pressure'], 'A'),
      Q('Chemical properties of isotopes are usually:', ['Nearly identical', 'Completely different always', 'Unrelated to electrons', 'Only nuclear'], 'A'),
    ],
    '0-3': [
      Q('Bohr model introduced:', ['Quantized energy levels', 'Continuous orbits only', 'No nucleus', 'Only IMFs'], 'A'),
      Q('Line spectra suggest:', ['Discrete electron transitions (intro)', 'Continuous energy only', 'No photons', 'Only nuclear decay'], 'A'),
      Q('Thomson model pictured:', ['Electrons in positive sphere', 'Nuclear model', 'Empty atom', 'Only neutrons'], 'A'),
      Q('Quantum model uses:', ['Orbitals and probability', 'Exact planetary paths always', 'No waves', 'Only classical physics'], 'A'),
      Q('Models change when:', ['New experimental evidence appears', 'Never', 'Only by vote', 'Only for metals'], 'A'),
    ],
    '0-4': [
      Q('Valence electrons are in:', ['Outermost occupied shell (survey)', 'Nucleus', 'Only inner shells', 'Only neutrons'], 'A'),
      Q('Aufbau principle fills:', ['Lower energy orbitals first', 'Random orbitals', 'Only d first always', 'Only f first for all'], 'A'),
      Q('Group 18 elements often have:', ['Filled valence shell', 'One valence electron', 'Seven valence electrons', 'No electrons'], 'A'),
      Q('Hund’s rule favors:', ['Maximum unpaired electrons in degenerate orbitals', 'Immediate pairing always', 'No orbitals', 'Only 1s'], 'A'),
      Q('Electron configuration helps predict:', ['Common ions and bonding', 'Planet motion', 'Sound speed in vacuum', 'Only density of gold'], 'A'),
    ],
    '1-0': [
      Q('Periodic classification helps:', ['Predict patterns in properties', 'Eliminate experiments', 'Ignore atomic number', 'Only name mixtures'], 'A'),
      Q('Repeating properties relate to:', ['Electron arrangements', 'Only color', 'Only taste', 'Only magnetism of Earth'], 'A'),
      Q('Mendeleev predicted:', ['Unknown elements', 'Only noble gases existed always', 'No gaps', 'Only liquids'], 'A'),
      Q('Atomic number orders elements by:', ['Increasing protons', 'Only neutron count alone', 'Alphabet only', 'Density only'], 'A'),
      Q('Classification supports communication using:', ['Standard symbols and table position', 'Only pictures', 'Only oral tradition', 'Random names'], 'A'),
    ],
    '1-1': [
      Q('Modern periodic law is based on:', ['Atomic number', 'Only atomic mass historically final', 'Only color', 'Only crystal shape'], 'A'),
      Q('Periods are:', ['Horizontal rows', 'Vertical columns', 'Only metals', 'Only gases'], 'A'),
      Q('Groups are:', ['Vertical columns', 'Horizontal rows only', 'Only ions', 'Only isotopes'], 'A'),
      Q('Alkali metals are in group:', ['1', '18', '17', '0 only noble'], 'A'),
      Q('Noble gases are largely unreactive due to:', ['Filled valence shells', 'No electrons', 'No protons', 'Only metallic bonding'], 'A'),
    ],
    '1-2': [
      Q('Atomic radius across a period generally:', ['Decreases', 'Increases without limit', 'Is constant', 'Vanishes'], 'A'),
      Q('Ionization energy trend across period often:', ['Increases', 'Decreases always', 'Is zero', 'Is unrelated to nuclear charge'], 'A'),
      Q('Electronegativity increases toward:', ['Upper right (survey plot)', 'Lower left always', 'Only group 1', 'Only period 1'], 'A'),
      Q('Shielding effect:', ['Reduces effective nuclear pull on valence e⁻', 'Increases Zeff always false', 'Only in solids', 'Only for gases'], 'A'),
      Q('Trends are explained using:', ['Nuclear charge and electron structure', 'Only gravity', 'Only humidity', 'Randomness'], 'A'),
    ],
    '1-3': [
      Q('Cations are often smaller than atoms because:', ['Fewer electrons; same nuclear charge', 'More electrons', 'More neutrons only main story', 'Loss of protons'], 'A'),
      Q('Halogens often form ions with charge:', ['−1', '+1', '+2', '0'], 'A'),
      Q('Metallic character across period 3 generally:', ['Decreases left to right', 'Increases without limit', 'Is constant', 'Only in liquids'], 'A'),
      Q('Metalloids include:', ['Silicon (example)', 'Only sodium', 'Only chlorine gas', 'Only iron metal only'], 'A'),
      Q('Valence electrons for group 2:', ['2', '7', '8', '0 only'], 'A'),
    ],
    '1-4': [
      Q('Table position helps predict:', ['Ion charges and reactivity patterns', 'Exact boiling point without data always', 'Nuclear half-life always', 'Earthquake time'], 'A'),
      Q('Semiconductors use elements like:', ['Si', 'Only He', 'Only Ar', 'Only Kr'], 'A'),
      Q('Alkali metals stored under oil because:', ['High reactivity with air/water', 'They are noble', 'They are gases', 'No reason'], 'A'),
      Q('Transition metals often show:', ['Variable oxidation states', 'Only +1 always', 'No color compounds', 'Only gases'], 'A'),
      Q('Periodic table is essential in:', ['Industry, health, and agriculture chemistry', 'Only art', 'Only music', 'Only sports'], 'A'),
    ],
    '2-0': [
      Q('Atoms bond to reach:', ['Lower energy arrangements', 'Higher energy always', 'No electron changes', 'Only plasma'], 'A'),
      Q('Ionic bonding involves:', ['Electron transfer', 'Only shared pairs always', 'Only metallic sea', 'No attraction'], 'A'),
      Q('Covalent bonding involves:', ['Shared electrons', 'Only transfer', 'Only neutrons', 'Only photons'], 'A'),
      Q('Bond formation releases energy when:', ['Stable product is lower energy', 'Always absorbs energy', 'Never changes energy', 'Only in gases'], 'A'),
      Q('Octet/rule-of-eight idea applies to many:', ['Main-group atoms (survey)', 'Only noble gases in reactions', 'Only metals', 'Only mixtures'], 'A'),
    ],
    '2-1': [
      Q('NaCl is formed by:', ['Na⁺ and Cl⁻', 'Only shared pairs', 'Only metals', 'Only water'], 'A'),
      Q('Ionic solids conduct when:', ['Molten or aqueous ions mobile', 'Always as solid', 'Never', 'Only as gas'], 'A'),
      Q('Lattice energy relates to:', ['Ion attractions in crystal', 'Only covalent order', 'Only color', 'Sound only'], 'A'),
      Q('Formula unit indicates:', ['Ratio in ionic solid', 'Gas molecule only', 'Only covalent', 'Mixture only'], 'A'),
      Q('Dissolved ionic salts often:', ['Conduct electricity', 'Never dissolve', 'Are always oils', 'Have no ions'], 'A'),
    ],
    '2-2': [
      Q('A single covalent bond shares:', ['One electron pair', 'Three pairs', 'No electrons', 'Only ions'], 'A'),
      Q('Lewis structure shows:', ['Valence electrons', 'Only core', 'Only neutrons', 'Nuclear reactions'], 'A'),
      Q('CO₂ is:', ['Linear nonpolar overall (model)', 'Always bent polar', 'Ionic only', 'Metallic'], 'A'),
      Q('Bond order 2 means:', ['Double bond', 'Single only', 'Triple only', 'No bond'], 'A'),
      Q('Polar bond has:', ['Unequal sharing', 'Always equal sharing', 'No electrons', 'Only metals'], 'A'),
    ],
    '2-3': [
      Q('Metals conduct due to:', ['Delocalized electrons', 'Fixed ions moving primarily', 'Only IMF', 'Only water'], 'A'),
      Q('Ductility means:', ['Can be drawn into wire', 'Shatters easily always', 'Only gases', 'Only ionic'], 'A'),
      Q('Alloys are:', ['Metal mixtures with tuned properties', 'Only pure elements', 'Only salts', 'Only gases'], 'A'),
      Q('Graphite conducts along layers due to:', ['Delocalized π electrons', 'Ionic lattice', 'Only H-bonds', 'Only He'], 'A'),
      Q('Brass contains copper and:', ['Zinc', 'Sodium', 'Chlorine', 'Neon'], 'A'),
    ],
    '2-4': [
      Q('Hydrogen bonding is strongest when H bonded to:', ['N, O, or F', 'Any metal', 'He', 'C only always'], 'A'),
      Q('London forces exist in:', ['All molecules', 'Only ions', 'Only metals', 'Nothing'], 'A'),
      Q('Water high boiling point partly due to:', ['Hydrogen bonding', 'Only ionic lattice', 'Only metallic', 'No IMFs'], 'A'),
      Q('Boiling breaks:', ['IMFs in molecular liquids', 'All covalent bonds always', 'Nuclei', 'Only ionic lattice in water liquid'], 'A'),
      Q('Like dissolves like refers to:', ['Similar polarity', 'Only acids', 'Only bases', 'Only metals'], 'A'),
    ],
    '3-0': [
      Q('Conservation of mass means:', ['Total mass conserved in closed system', 'Mass created', 'Atoms destroyed', 'Only energy conserved only false related'], 'A'),
      Q('Law of definite proportions:', ['Fixed element ratios in compound', 'Random ratios', 'Only mixtures', 'Only gases'], 'A'),
      Q('Chemical change produces:', ['New substances', 'Only phase change always', 'No energy change', 'Only sorting'], 'A'),
      Q('Physical change example:', ['Melting ice', 'Rusting', 'Burning', 'Neutralization'], 'A'),
      Q('Closed system experiments support:', ['Mass conservation', 'Mass loss always', 'Creation of matter', 'Only ions'], 'A'),
    ],
    '3-1': [
      Q('Balanced equation has:', ['Equal atoms each side', 'Different atoms', 'No coefficients', 'Only words'], 'A'),
      Q('Coefficient 2 in 2H₂ means:', ['Two moles H₂', 'Two atoms only always false context moles', 'Two grams always', 'Nothing'], 'A'),
      Q('State (g) means:', ['Gas', 'Solid', 'Liquid', 'Aqueous'], 'A'),
      Q('Combustion of methane produces:', ['CO₂ and H₂O (complete)', 'Only CO always', 'Only C', 'Only O₂'], 'A'),
      Q('Subscripts show:', ['Atoms per molecule', 'Moles', 'Temperature', 'Color'], 'A'),
    ],
    '3-2': [
      Q('Exothermic reaction:', ['Releases net energy to surroundings', 'Absorbs only', 'No energy', 'Only nuclear'], 'A'),
      Q('Synthesis pattern:', ['A + B → AB', 'AB → A + B', 'Only replacement', 'Only combustion'], 'A'),
      Q('Decomposition pattern:', ['AB → A + B', 'A + B → AB only', 'Only double replacement', 'Only plating'], 'A'),
      Q('Activation energy is:', ['Barrier to start reaction', 'Total ΔH', 'Only for solids', 'Zero always'], 'A'),
      Q('Combustion needs:', ['Oxidant often O₂', 'Only N₂', 'Only catalyst always', 'Zero fuel'], 'A'),
    ],
    '3-3': [
      Q('One mole is:', ['6.02×10²³ particles', 'One atom only', '100 g always', '1 L always'], 'A'),
      Q('Molar mass links:', ['Mass and moles', 'Only color', 'Only pressure', 'Only volume without T'], 'A'),
      Q('From N₂ + 3H₂ → 2NH₃, 3 mol H₂ needs:', ['1 mol N₂', '3 mol N₂', '0 mol N₂', '2 mol N₂'], 'A'),
      Q('Limiting reactant:', ['Runs out first', 'Always in excess', 'Is catalyst', 'Is product'], 'A'),
      Q('Percent yield uses:', ['Actual/theoretical', 'Volume only', 'Color only', 'pH only'], 'A'),
    ],
    '3-4': [
      Q('Oxidation is often:', ['Loss of electrons', 'Gain of electrons', 'No change', 'Only proton loss'], 'A'),
      Q('Oxidizing agent is:', ['Reduced', 'Oxidized', 'Catalyst only', 'Inert always'], 'A'),
      Q('Oxidation number of O in most compounds:', ['−2', '+2', '0', '+1'], 'A'),
      Q('Catalyst:', ['Lowers activation energy', 'Changes K at fixed T', 'Consumed fully', 'Stops reaction'], 'A'),
      Q('Equilibrium is:', ['Dynamic balance of rates', 'All reactants gone', 'No products', 'Frozen forever macro false'], 'A'),
    ],
    '4-0': [
      Q('Gas pressure from:', ['Particle-wall collisions', 'Only gravity', 'Only light', 'Only magnetism'], 'A'),
      Q('Higher temperature means particles:', ['Move faster on average', 'Stop', 'Lose mass', 'Become ions always'], 'A'),
      Q('Kelvin = °C +', ['273 (approx)', '100', '0', '459 only F'], 'A'),
      Q('Ideal gas assumptions include:', ['Negligible volume and no IMF', 'Strong H-bonds', 'Ionic lattice', 'Only liquids'], 'A'),
      Q('Diffusion shows:', ['Random particle motion', 'No motion', 'Only solids', 'Only ions fixed'], 'A'),
    ],
    '4-1': [
      Q('Boyle: P and V at fixed T are:', ['Inversely related', 'Direct always', 'Unrelated', 'Equal always'], 'A'),
      Q('Charles: V and T at fixed P are:', ['Directly related', 'Inverse always', 'Unrelated', 'Zero'], 'A'),
      Q('Avogadro links:', ['Volume and moles of gas', 'Only solids', 'Only color', 'Only metals'], 'A'),
      Q('STP molar volume about:', ['22.4 L/mol (intro)', '1 L/mol', '0', '224 L/mol'], 'A'),
      Q('Heating gas in rigid container raises:', ['Pressure', 'Only mass', 'Only color', 'Nothing'], 'A'),
    ],
    '4-2': [
      Q('Evaporation occurs at:', ['Surface below boiling possible', 'Only at boiling', 'Only in solid', 'Only plasma'], 'A'),
      Q('Boiling when:', ['Vapor pressure equals external P', 'IMFs vanish', 'T is 0 K', 'No energy'], 'A'),
      Q('Surface tension from:', ['Cohesive IMFs', 'Ionic lattice only', 'Nuclear force', 'Gravity only'], 'A'),
      Q('Viscosity is:', ['Resistance to flow', 'Color', 'pH', 'Ox number'], 'A'),
      Q('Vapor pressure increases with:', ['Temperature', 'Always decreases', 'Only pressure', 'Only mass'], 'A'),
    ],
    '4-3': [
      Q('Crystalline solid has:', ['Regular lattice', 'Random only', 'No atoms', 'Only gas'], 'A'),
      Q('Ionic solid melting point often:', ['High', 'Very low always', 'Zero', 'Undefined'], 'A'),
      Q('Diamond is:', ['Network covalent', 'Molecular IMF only', 'Ionic NaCl', 'Metallic Cu'], 'A'),
      Q('Allotropes are:', ['Same element different form', 'Different elements', 'Only ions', 'Only mixtures'], 'A'),
      Q('Metallic solid conducts because:', ['Delocalized electrons', 'Only ions move in solid', 'No charges', 'Only water'], 'A'),
    ],
    '4-4': [
      Q('Melting is:', ['Solid → liquid', 'Gas → solid', 'Liquid → gas', 'Liquid → solid'], 'A'),
      Q('q = mcΔT uses:', ['mass, specific heat, ΔT', 'Only moles', 'Only P', 'Only V'], 'A'),
      Q('Plateau on heating curve:', ['Phase change', 'Rapid T rise only', 'No energy input', 'Chemical rxn always'], 'A'),
      Q('Sublimation:', ['Solid → gas', 'Gas → liquid', 'Liquid → solid', 'Only plasma'], 'A'),
      Q('Phase diagram shows:', ['Phase stability vs conditions', 'Only organic rxns', 'Only redox', 'Only orbitals'], 'A'),
    ],
  };

  if (banks[key]) return banks[key];
  return [
    Q(`Which statement best matches Grade 9 Chemistry topic ${key}?`, ['Uses syllabus definitions and examples', 'Ignores conservation laws', 'Only memorizes colors', 'Avoids equations'], 'A'),
    Q('In MCQs, prefer answers that:', ['Match classroom definitions', 'Contradict balanced equations', 'Ignore units', 'Use “always/never” without evidence'], 'A'),
    Q('Stoichiometry checks often fail distractors when:', ['Mole ratios disagree with balanced equation', 'Words are long', 'Ethiopia is mentioned', 'Letter is B'], 'A'),
    Q('Safety in school labs includes:', ['Goggles and careful handling of acids/bases', 'Tasting chemicals', 'Pouring wastes anywhere', 'Ignoring labels'], 'A'),
    Q('Chemistry supports development through:', ['Materials, agriculture, and health applications', 'Only astrology', 'Only sports scores', 'Ignoring environment'], 'A'),
  ];
}

function buildExamQuestionsForTopic({ chapterIndex, topicIndex, topicName }) {
  const raw = pack(chapterIndex, topicIndex);
  return EC_YEARS.map((_, i) => {
    const q = raw[i];
    return {
      questionText: q.questionText,
      choices: q.choices,
      correctAnswer: q.correctAnswer,
      answerExplanation:
        q.answerExplanation ||
        `Entrance-exam style item (Grade 9 Chemistry), aligned to “${topicName}”.`,
    };
  });
}

module.exports = {
  buildExamQuestionsForTopic,
  EC_YEARS,
};
