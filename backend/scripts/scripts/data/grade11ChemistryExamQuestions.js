/**
 * Five entrance-exam-style MCQs per Grade 11 Chemistry topic (Natural stream).
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  const key = `${c}-${t}`;
  const banks = {
    '0-0': [
      Q('Chemistry helps explain:', ['Composition and change of matter', 'Only planet motion', 'Only sound', 'Only history'], 'A'),
      Q('Applied chemistry appears in:', ['Medicine, agriculture, industry', 'Only sports scores', 'Only music', 'Only art'], 'A'),
      Q('Matter is studied at scales from:', ['Subatomic to macroscopic', 'Only galaxies', 'Only oceans', 'Only weather'], 'A'),
      Q('A compound has:', ['Fixed composition by element', 'Random ratios always', 'Only one atom', 'No elements'], 'A'),
      Q('Laboratory safety is part of:', ['Responsible experimental chemistry', 'Optional decoration', 'Ignoring labels', 'Avoiding measurement'], 'A'),
    ],
    '0-1': [
      Q('SI base unit of mass is:', ['Kilogram', 'Liter', 'Mole', 'Newton'], 'A'),
      Q('Prefix kilo means:', ['10³', '10⁻³', '10⁶', '10⁻⁶'], 'A'),
      Q('Derived unit N equals:', ['kg·m/s²', 'kg·m', 'mol/L', 'J only'], 'A'),
      Q('Volume SI unit is:', ['Cubic metre', 'Gram', 'Mole', 'Pascal'], 'A'),
      Q('Consistent units prevent:', ['Calculation errors', 'Better precision automatically', 'Need for experiments', 'Chemical reactions'], 'A'),
    ],
    '0-2': [
      Q('Accuracy is:', ['Closeness to true value', 'Repeatability only', 'Same as precision always', 'Number of digits only'], 'A'),
      Q('Precision is:', ['Reproducibility of measurements', 'Always exact truth', 'Only for gases', 'Only for metals'], 'A'),
      Q('Significant figures express:', ['Measurement uncertainty', 'Infinite precision', 'Atomic number', 'Color'], 'A'),
      Q('Trailing zeros after decimal are:', ['Often significant', 'Never significant', 'Always insignificant', 'Only in words'], 'A'),
      Q('Reporting excess digits implies:', ['False precision', 'Better science always', 'No uncertainty', 'Only for moles'], 'A'),
    ],
    '0-3': [
      Q('Scientific notation uses powers of:', ['10', '2 only', '100 only', 'π'], 'A'),
      Q('3.0 × 10⁴ equals:', ['30000', '0.00030', '3.0', '10⁴ only'], 'A'),
      Q('Very small numbers are written compactly as:', ['Negative exponents of ten', 'Only fractions without powers', 'Only Roman numerals', 'Only pH'], 'A'),
      Q('Unit analysis (dimensional analysis) checks:', ['Consistency of units', 'Only color', 'Only taste', 'Nuclear spin'], 'A'),
      Q('Calculators do not remove need for:', ['Thinking about units and reasonableness', 'Lab notebooks', 'Safety', 'Chemical symbols'], 'A'),
    ],
    '0-4': [
      Q('Scientific method includes:', ['Hypothesis testing with evidence', 'Guessing without data', 'Ignoring anomalies', 'Only authority'], 'A'),
      Q('Independent variable is:', ['Deliberately changed', 'Measured response', 'Control only', 'Graph axis always y'], 'A'),
      Q('A control group:', ['Provides comparison baseline', 'Is unnecessary always', 'Must fail', 'Changes every variable'], 'A'),
      Q('Lab reports document:', ['Procedure, data, conclusions', 'Only opinions', 'Only drawings', 'Only names'], 'A'),
      Q('Replication strengthens:', ['Reliability of conclusions', 'Random error only', 'Bias intentionally', 'Law breaking'], 'A'),
    ],
    '1-0': [
      Q('Dalton proposed atoms are:', ['Indivisible in original theory later revised', 'Always divisible easily', 'Only in gases', 'Only light'], 'A'),
      Q('Modern atomic theory accepts:', ['Subatomic particles', 'No electrons', 'No nucleus', 'Only mixtures'], 'A'),
      Q('Compounds combine in:', ['Fixed whole-number ratios', 'Any ratio always', 'Only volumes', 'Only colors'], 'A'),
      Q('Law of multiple proportions supports:', ['Atomic theory of elements', 'Only gravity', 'Only heat', 'Only sound'], 'A'),
      Q('Atomic theory evolved with:', ['New experimental evidence', 'No experiments', 'Only poetry', 'Only astrology'], 'A'),
    ],
    '1-1': [
      Q('Proton charge is:', ['+1', '−1', '0', '+2 in all atoms'], 'A'),
      Q('Neutron is in:', ['Nucleus', 'Electron cloud only', 'Only ions', 'Only bonds'], 'A'),
      Q('Mass number is:', ['Protons + neutrons', 'Protons only', 'Electrons only', 'Neutrons only'], 'A'),
      Q('Isotopes have same:', ['Atomic number', 'Mass number always', 'Neutron number always', 'No protons'], 'A'),
      Q('Rutherford model has:', ['Small dense nucleus', 'Uniform positive sphere only', 'No nucleus', 'Only neutrons in shell'], 'A'),
    ],
    '1-2': [
      Q('EMR includes:', ['Visible light and other wavelengths', 'Only sound', 'Only water waves', 'Only wind'], 'A'),
      Q('Line spectra suggest:', ['Quantized electron energies', 'Continuous orbits only', 'No photons', 'Only nuclear fusion in atoms always'], 'A'),
      Q('Frequency and wavelength are:', ['Inversely related in vacuum (c = λν)', 'Always equal numerically', 'Unrelated', 'Only for solids'], 'A'),
      Q('Photoelectric effect supports:', ['Particle nature of light (intro)', 'Only waves never particles', 'No energy transfer', 'Only gravity'], 'A'),
      Q('Hydrogen spectrum is:', ['Important evidence for Bohr model historically', 'Only for metals', 'Only infrared always', 'Random colors without pattern'], 'A'),
    ],
    '1-3': [
      Q('Orbitals describe:', ['Probability regions for electrons', 'Exact paths always', 'Nuclear positions', 'Only protons'], 'A'),
      Q('Quantum numbers specify:', ['Electron state in atom (survey)', 'Only mass of atom', 'Only color', 'Only temperature'], 'A'),
      Q('Heisenberg uncertainty relates to:', ['Limits on simultaneous knowledge (survey)', 'Exact orbits', 'No electrons', 'Only ions'], 'A'),
      Q('s orbital shape is:', ['Spherical (survey)', 'Always dumbbell', 'Linear always', 'Square only'], 'A'),
      Q('Compared to Bohr model, quantum model:', ['Uses orbitals not fixed orbits', 'Removes all energy levels', 'Denies electrons', 'Only for molecules'], 'A'),
    ],
    '1-4': [
      Q('Aufbau fills:', ['Lower energy subshells first (survey)', 'Random order', 'd before s always for all', 'Only p orbitals'], 'A'),
      Q('Group 18 valence shell is often:', ['Filled (octet rule survey)', 'Empty', 'One electron', 'Seven always'], 'A'),
      Q('Period number relates to:', ['Highest occupied shell for main group (survey)', 'Mass only', 'Color only', 'Only neutrons'], 'A'),
      Q('Transition metals fill:', ['d subshell (survey)', 'Only s always last', 'No electrons', 'Only f in period 2'], 'A'),
      Q('Electron configuration helps predict:', ['Bonding and common ions', 'Planet orbits', 'Only density of wood', 'Sound in vacuum'], 'A'),
    ],
    '2-0': [
      Q('Bonding lowers energy when:', ['Stable attractive interactions form', 'Atoms always repel only', 'No electrons involved', 'Only heat removed from universe always false'], 'A'),
      Q('Ionic bonding has:', ['Electrostatic attraction of ions', 'Only shared pairs', 'Only metallic sea', 'No charges'], 'A'),
      Q('Covalent bonding shares:', ['Electrons between atoms', 'Only protons', 'Only neutrons', 'Only photons'], 'A'),
      Q('Bond type influences:', ['Melting point and conductivity', 'Only color of sky', 'Only gravity', 'Atomic number'], 'A'),
      Q('Lewis diagrams show:', ['Valence electrons', 'Nucleons only', 'Only inner shells always required', 'Only isotopes'], 'A'),
    ],
    '2-1': [
      Q('NaCl lattice has:', ['Alternating Na⁺ and Cl⁻', 'Shared pairs only', 'Metallic sea', 'No ions'], 'A'),
      Q('Ionic compounds often:', ['Dissolve in polar solvents', 'Never dissolve', 'Are always gases', 'Conduct as solids easily'], 'A'),
      Q('Lattice energy increases with:', ['Higher charges and smaller ions (qualitative)', 'Weaker attraction always', 'Only covalent bonds', 'Only London forces in salt'], 'A'),
      Q('Cation size vs atom:', ['Often smaller', 'Always larger', 'Same always', 'Zero'], 'A'),
      Q('Polyatomic ions like NO₃⁻ have:', ['Covalent bonds within ion', 'Only metallic bonds', 'No electrons', 'Only noble gas cores always false'], 'A'),
    ],
    '2-2': [
      Q('VSEPR uses:', ['Electron domain repulsions', 'Only atomic mass', 'Only neutron count', 'Gravity'], 'A'),
      Q('Tetrahedral angle ≈', ['109.5°', '180°', '90° only always', '0°'], 'A'),
      Q('Polar bond has:', ['Unequal sharing', 'Always equal sharing', 'No electrons', 'Only ions'], 'A'),
      Q('Lone pairs on central atom:', ['Reduce bond angles vs ideal (survey)', 'Always increase angles', 'Have no effect', 'Only in metals'], 'A'),
      Q('Resonance represents:', ['Delocalized electron density', 'Physical oscillation of atoms back and forth literally false', 'Ionic transfer only', 'Nuclear decay'], 'A'),
    ],
    '2-3': [
      Q('Metallic bonding explains:', ['Conductivity and malleability', 'Only brittleness', 'Only gases', 'Only ionic brittleness'], 'A'),
      Q('Alloys modify properties by:', ['Distorting metal lattice', 'Removing all electrons', 'Only ionic bonding', 'Only hydrogen bonds'], 'A'),
      Q('Graphite conducts due to:', ['Delocalized π electrons in layers', 'Ionic mobility in solid', 'Only water', 'Only IMF'], 'A'),
      Q('Compared to ionic solids, metals:', ['Conduct as solids', 'Never conduct', 'Are always gases', 'Have no electrons'], 'A'),
      Q('Sea of electrons model is:', ['Simplified teaching picture', 'Exact quantum calculation always', 'Only for NaCl', 'Only for water'], 'A'),
    ],
    '2-4': [
      Q('Ionic crystals are often:', ['Hard and brittle', 'Soft always', 'Gases', 'Only liquids'], 'A'),
      Q('Molecular crystals like ice have:', ['IMFs between molecules', 'Only ionic lattice', 'Only metallic bonds inside H₂O molecules false covalent inside', 'No H-bonds'], 'A'),
      Q('Network covalent solids like diamond:', ['Very high melting points', 'Melt easily', 'Conduct as metals', 'Are gases'], 'A'),
      Q('Metallic crystals conduct because:', ['Mobile electrons', 'Ion migration in solid primarily false', 'Only color', 'Only magnetism always'], 'A'),
      Q('Crystal type affects:', ['Physical properties', 'Only name', 'Only atomic number', 'Only group number'], 'A'),
    ],
    '3-0': [
      Q('Rate increases with temperature partly because:', ['More collisions exceed Ea', 'Fewer collisions', 'No activation energy', 'Only catalysts'], 'A'),
      Q('Higher concentration usually:', ['Increases collision frequency', 'Decreases rate always', 'Stops reaction', 'Only for solids'], 'A'),
      Q('Surface area increase speeds:', ['Heterogeneous reactions', 'Only nuclear', 'Only phase of moon', 'Only distillation'], 'A'),
      Q('Rate units may be:', ['mol/L·s', 'Only grams', 'Only liters', 'Only pH'], 'A'),
      Q('Measuring rate requires tracking:', ['Concentration or mass change over time', 'Only color once', 'Only volume of flask empty', 'Only names'], 'A'),
    ],
    '3-1': [
      Q('Collision theory needs:', ['Sufficient energy and orientation', 'Only low temperature', 'Only catalyst always', 'No movement'], 'A'),
      Q('Activation energy is:', ['Minimum energy to react', 'Total ΔH', 'Only for products', 'Zero always'], 'A'),
      Q('Not every collision reacts because:', ['Many lack Ea or orientation', 'All collisions always react', 'No particles move', 'Only ions forbidden'], 'A'),
      Q('Increasing T shifts distribution toward:', ['Higher kinetic energies', 'Zero energy only', 'Only solids', 'Only catalysts destroyed'], 'A'),
      Q('Gas-phase reactions are often faster when:', ['More frequent collisions (survey)', 'No collisions occur', 'Only in vacuum', 'Only at 0 K'], 'A'),
    ],
    '3-2': [
      Q('Rate law is determined by:', ['Experiment', 'Theory only without data', 'Balanced equation coefficients always false orders', 'Color'], 'A'),
      Q('Order with respect to A means:', ['Exponent on [A] in rate law (survey)', 'Coefficient in equation', 'Mass of A only', 'Charge only'], 'A'),
      Q('Overall order is:', ['Sum of individual orders (survey)', 'Always 1', 'Always 0', 'Mass number'], 'A'),
      Q('Units of rate constant depend on:', ['Overall order', 'Only color', 'Only temperature symbol', 'Atomic mass'], 'A'),
      Q('Zero order means rate:', ['Independent of that reactant concentration (survey)', 'Doubles always with concentration', 'Impossible', 'Only for catalyst'], 'A'),
    ],
    '3-3': [
      Q('Mechanism is:', ['Stepwise molecular pathway (survey)', 'Only balanced equation', 'Only ΔH', 'Only K'], 'A'),
      Q('Slow step often:', ['Controls overall rate', 'Never matters', 'Is always first', 'Is always last without evidence'], 'A'),
      Q('Intermediate is:', ['Formed then consumed', 'Final product', 'Catalyst only always', 'Only solid'], 'A'),
      Q('Mechanism must agree with:', ['Stoichiometry and rate law (survey)', 'Only color', 'Only taste', 'Astrology'], 'A'),
      Q('Elementary step molecularity is:', ['Particles in collision step (survey)', 'Always three', 'Always zero', 'Only for ions'], 'A'),
    ],
    '3-4': [
      Q('Catalyst:', ['Speeds reaction without being consumed overall', 'Changes equilibrium constant at fixed T', 'Increases ΔH', 'Stops reaction'], 'A'),
      Q('Enzymes are:', ['Biological catalysts', 'Only acids', 'Only metals', 'Only gases'], 'A'),
      Q('Catalyst provides:', ['Alternative pathway lower Ea', 'More products always thermodynamically false', 'Removes reactants', 'Only heat'], 'A'),
      Q('Poisoned catalyst:', ['Loses activity', 'Works better', 'Is product', 'Is always enzyme'], 'A'),
      Q('Industrial catalysts save:', ['Energy and time', 'Nothing', 'Only water color', 'Only sound'], 'A'),
    ],
    '4-0': [
      Q('Equilibrium is:', ['Dynamic balance of rates', 'All reactants gone', 'No products', 'Static no motion microscopically false still dynamic'], 'A'),
      Q('Closed system needed for:', ['Gas equilibrium examples often', 'All reactions always open beakers too sometimes approximate', 'Only nuclear', 'Only solids'], 'A'),
      Q('Forward and reverse rates at equilibrium:', ['Are equal', 'Zero', 'Only forward exists', 'Only reverse exists'], 'A'),
      Q('Macroscopic properties at equilibrium:', ['Constant (no net change)', 'Change forever', 'Always zero', 'Random'], 'A'),
      Q('Catalyst at equilibrium:', ['Speeds attainment not K', 'Changes K', 'Removes equilibrium', 'Only for solids'], 'A'),
    ],
    '4-1': [
      Q('K expression uses:', ['Products over reactants with powers (survey)', 'Only solids always included incorrectly intro rules', 'Only water always', 'Only catalyst'], 'A'),
      Q('Q compared to K tells:', ['Direction of net shift (survey)', 'Exact time', 'Only color', 'Only mass of flask'], 'A'),
      Q('Increasing pressure on gas equilibrium:', ['Shifts toward fewer gas moles (survey)', 'Never shifts', 'Always to more moles', 'Only for liquids'], 'A'),
      Q('Exothermic forward reaction cooled favors:', ['Products often (survey)', 'Reactants always without exception check Le Chatelier', 'Nothing', 'Only catalyst'], 'A'),
      Q('Adding inert gas at constant V:', ['Often no shift in moles (survey)', 'Always large shift', 'Stops reaction', 'Only for solids'], 'A'),
    ],
    '4-2': [
      Q('Ksp applies to:', ['Slightly soluble salts', 'All strong acids', 'Only gases', 'Only metals'], 'A'),
      Q('Common ion effect:', ['Decreases solubility', 'Increases always', 'Only for gases', 'Only for catalysts'], 'A'),
      Q('Precipitate forms when:', ['Q > Ksp', 'Q < Ksp always dissolves more false', 'No ions', 'Only heating'], 'A'),
      Q('Solubility may increase with T for:', ['Some solids', 'All gases in water always increase false often decrease', 'Only metals', 'Only noble gases'], 'A'),
      Q('Ksp units depend on:', ['Stoichiometry of dissolution', 'Only color', 'Only pH', 'Only volume flask'], 'A'),
    ],
    '4-3': [
      Q('Phase equilibrium involves:', ['Rates of phase change equal', 'Only chemical bonds breaking', 'Only nuclear', 'Only redox'], 'A'),
      Q('Melting equilibrium at normal mp:', ['Solid ⇌ liquid', 'Only gas', 'Only plasma', 'Only ions'], 'A'),
      Q('Heat at plateau during melting goes to:', ['Breaking IMFs not raising T', 'Kinetic energy only always false', 'Nuclear fusion', 'Only electrons in nucleus'], 'A'),
      Q('Sublimation is:', ['Solid to gas', 'Gas to liquid', 'Liquid to solid', 'Only plasma'], 'A'),
      Q('Phase diagrams show:', ['Stable phases vs T and P', 'Only organic reactions', 'Only atomic orbitals', 'Only titration'], 'A'),
    ],
    '4-4': [
      Q('Vapor pressure increases with:', ['Temperature', 'Always decreases', 'Only for metals', 'Only for ions'], 'A'),
      Q('Boiling when vapor pressure equals:', ['External pressure', 'Zero always', 'Only ionic', 'Only IMF zero'], 'A'),
      Q('Volatile liquids have:', ['High vapor pressure at room T often', 'No evaporation', 'Only ionic bonds', 'Only network solids'], 'A'),
      Q('Clausius-Clapeyron relates:', ['Vapor pressure and T (awareness)', 'Only pH', 'Only redox', 'Only lattice energy'], 'A'),
      Q('Phase equilibrium in closed flask:', ['Vapor condenses as fast as evaporates at equilibrium', 'Stops all molecules', 'Only for metals', 'Only for salts'], 'A'),
    ],
    '5-0': [
      Q('Carboxyl group is:', ['–COOH', '–OH only on benzene', '–NH₂', '–CH₃ only'], 'A'),
      Q('Organic compounds contain:', ['Carbon backbone typically', 'Only metals', 'Only noble gases', 'Only ions always'], 'A'),
      Q('Functional group determines:', ['Characteristic reactions', 'Only color of metal', 'Atomic number', 'Only neutron count'], 'A'),
      Q('Ethanoic acid is:', ['Carboxylic acid', 'Ester', 'Alkane only', 'Salt only'], 'A'),
      Q('Oxygen-containing organics include:', ['Acids, alcohols, esters (survey)', 'Only alkanes', 'Only metals', 'Only halogens free'], 'A'),
    ],
    '5-1': [
      Q('Carboxylic acids are:', ['Weak acids in water often', 'Strong bases', 'Noble gases', 'Only ionic lattices'], 'A'),
      Q('They can form:', ['Hydrogen bonds', 'Only metallic bonds', 'Only ionic with themselves only false', 'No dipoles'], 'A'),
      Q('Oxidation of primary alcohol may give:', ['Carboxylic acid (survey)', 'Only alkane', 'Only CO₂ always', 'Only NaCl'], 'A'),
      Q('IUPAC suffix for acid is:', ['-oic acid', '-ane only', '-ene only', '-yne only'], 'A'),
      Q('Vinegar contains:', ['Acetic/ethanoic acid (dilute)', 'Only NaOH', 'Only benzene', 'Only methane'], 'A'),
    ],
    '5-2': [
      Q('Esterification uses:', ['Acid + alcohol', 'Only metal + water', 'Only combustion', 'Only NaCl'], 'A'),
      Q('Ester functional group contains:', ['–COO– linkage', 'Only C=C', 'Only –OH on benzene only', 'Only metal'], 'A'),
      Q('Esters often smell:', ['Fruity (many)', 'Always like HCl', 'Like metals', 'Like helium'], 'A'),
      Q('Acid catalyst role:', ['Protonates carbonyl oxygen (survey)', 'Provides electrons only', 'Is product', 'Is always base'], 'A'),
      Q('Naming ethyl ethanoate indicates:', ['Ester from ethanol and ethanoic acid parts', 'Only alkane', 'Only salt', 'Only benzene'], 'A'),
    ],
    '5-3': [
      Q('Fats are:', ['Esters of glycerol', 'Only alkanes', 'Only ionic', 'Only gases'], 'A'),
      Q('Unsaturated fats have:', ['C=C bonds in chains often', 'Only single bonds always', 'No oxygen', 'Only metals'], 'A'),
      Q('Oils vs fats at room T:', ['Oils often liquid due to more unsaturation (survey)', 'Always identical', 'Only gases', 'Only ionic'], 'A'),
      Q('Hydrogenation reduces:', ['C=C in oils (survey)', 'All oxygen in acid', 'Atomic number', 'Only IMF in water'], 'A'),
      Q('Lipids store:', ['Energy in organisms', 'Only electrons in wire', 'Only sound', 'Only heat in vacuum only false'], 'A'),
    ],
    '5-4': [
      Q('Saponification uses:', ['Strong base + fat', 'Only acid catalyst', 'Only distillation of crude', 'Only Na metal alone'], 'A'),
      Q('Soap is:', ['Salt of fatty acid (survey)', 'Only hydrocarbon gas', 'Only benzene', 'Only protein always false'], 'A'),
      Q('Glycerol is:', ['By-product in saponification', 'Only catalyst', 'Only metal', 'Only noble gas'], 'A'),
      Q('Detergents may work in:', ['Hard water better than soap sometimes (survey)', 'Only vacuum', 'Only acids without water', 'Only solids'], 'A'),
      Q('Organic applications support:', ['Daily hygiene and industry', 'Only astrology', 'Only sports', 'Ignoring safety'], 'A'),
    ],
  };

  if (banks[key]) return banks[key];
  return [
    Q(`Grade 11 Chemistry topic ${key} requires:`, ['Syllabus-aligned reasoning', 'Ignoring units', 'Only colors', 'Random guesses'], 'A'),
    Q('Prefer answers that:', ['Match classroom definitions', 'Contradict conservation', 'Ignore data', 'Use always/never carelessly'], 'A'),
    Q('Dimensional analysis helps avoid:', ['Unit mistakes', 'Better handwriting only', 'Chemical change', 'Lab safety'], 'A'),
    Q('Ethiopian industry links chemistry to:', ['Fertilizer, health, materials', 'Only music', 'Only sports', 'Avoiding experiments'], 'A'),
    Q('Entrance items test:', ['Conceptual understanding', 'Only memorizing letters', 'Only spelling', 'Only dates'], 'A'),
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
        `Entrance-exam style item (Grade 11 Chemistry), aligned to “${topicName}”.`,
    };
  });
}

module.exports = {
  buildExamQuestionsForTopic,
  EC_YEARS,
};
