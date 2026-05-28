/**
 * Grade 10 Chemistry curriculum — Units 1–3 (Ethiopia MoE outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Chemical reactions and stoichiometry',
    chapterDescription:
      'Physical vs chemical change, balanced equations, common reaction types, redox vocabulary, mole and stoichiometric calculations.',
    topics: [
      {
        topicName: 'Introduction: physical change and chemical change',
        topicDescription:
          'Signs of chemical change, conservation ideas, reaction vs rearrangement.',
        topicObjectives: [
          'Distinguish physical change from chemical change using classroom examples.',
          'Identify evidence for a new substance forming (colour, gas, heat, precipitate).',
          'State that atoms are conserved in ordinary chemical reactions (introductory).',
        ],
      },
      {
        topicName: 'Chemical equations',
        topicDescription: 'Skeleton equations, coefficients, formulas, balancing by atom inventory.',
        topicObjectives: [
          'Write word equations and symbolic equations for simple reactions.',
          'Balance equations by conserving atoms (no invention of formulas).',
        ],
      },
      {
        topicName: 'Types of chemical reactions',
        topicDescription: 'Combination, decomposition, displacement, double displacement (survey).',
        topicObjectives: [
          'Classify simple reactions using common patterns.',
          'Predict possible products when given typical reactants (introductory patterns).',
        ],
      },
      {
        topicName: 'Oxidation and reduction',
        topicDescription: 'Electron transfer viewpoint; oxidation number rules (survey).',
        topicObjectives: [
          'Identify what is oxidized and what is reduced in simple redox equations.',
          'Assign oxidation numbers to atoms in straightforward compounds.',
        ],
      },
      {
        topicName: 'Mole concept and stoichiometry',
        topicDescription: 'Avogadro constant, molar mass, mole–mass–particle links, limiting idea (survey).',
        topicObjectives: [
          'Convert among moles, mass, and number of particles for elements and compounds.',
          'Use balanced equations to relate mole ratios of reactants and products.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Change', 'Rusting iron is primarily:', ['A physical mixing only', 'A chemical change forming new substances', 'No change', 'Only a phase change'], 1, 'Easy'),
      ex(0, 'Evidence', 'Which often suggests a chemical reaction?', ['Melting wax', 'Crushing chalk', 'Bubbles forming in acid with metal', 'Boiling pure water'], 2, 'Easy'),
      ex(1, 'Balance', 'In a balanced equation, total atoms of each element are:', ['Created or destroyed', 'Conserved', 'Ignored', 'Only counted for gases'], 1, 'Easy'),
      ex(1, 'Coefficients', 'Coefficients in equations tell you:', ['Number of molecules/atoms reacting in ratios', 'Nuclear masses', 'Only temperature', 'Subatomic splits'], 0, 'Medium'),
      ex(2, 'Decomp', '2H₂O → 2H₂ + O₂ is best called:', ['A synthesis', 'A decomposition', 'A single displacement', 'No reaction'], 1, 'Easy'),
      ex(3, 'OIL RIG', 'In “OIL RIG,” reduction is:', ['Gain of electrons', 'Loss of electrons', 'Gain of neutrons always', 'Loss of protons'], 0, 'Easy'),
      ex(4, 'Mole', 'One mole contains about:', ['6.02 × 10²³ specified entities (Avogadro)', '100 atoms always', '1 gram always', '1 molecule only'], 0, 'Easy'),
      ex(4, 'Ratio', 'In N₂ + 3H₂ → 2NH₃, mole ratio H₂:NH₃ is:', ['3:2', '1:2', '2:3', '1:1'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Physical vs chemical change',
        problems: [
          P('Dissolving NaCl in water without reacting is commonly:', ['A chemical combustion', 'A physical change when no new substance forms', 'Nuclear fusion', 'No process'], 'B'),
          P('Burning magnesium ribbon shows chemical change partly because:', ['Mass disappears completely', 'A new compound forms with different properties', 'Only temperature labels change wordplay false', 'Water never involved false'], 'B'),
          P('Breaking a chalk stick mainly involves:', ['Chemical decomposition', 'Physical change—same substances', 'Nuclear splitting', 'Synthesis'], 'B'),
          P('A chemical equation models:', ['Atoms rearranging into new substances', 'Only colour of light unrelated', 'Only expansion of solids without bonds', 'Destruction of atoms'], 'A'),
          P('Evidence of reaction can include:', ['Temperature change alongside new substances', 'Only volume unchanged always', 'No energy transfer ever', 'Only boiling'], 'A'),
          P('In ordinary reactions atoms are:', ['Destroyed', 'Created from nothing', 'Rearranged (conservation of atoms introductory)', 'Split into electrons only'], 'C'),
          P('Melting pure ice into water is:', ['Physical change mainly', 'Chemical oxidation', 'Nuclear decay', 'Synthesis'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — Chemical equations',
        problems: [
          P('A skeleton equation lacks:', ['Balanced coefficients', 'Chemical formulas', 'Any symbols', 'State symbols always required false'], 'A'),
          P('You may not invent subscripts to balance because:', ['Subscripts fix identity of molecule', 'Subscripts equal temperature', 'Subscripts cancel charge', 'Subscripts replace catalysts'], 'A'),
          P('2H₂ + O₂ → 2H₂O conserves:', ['H and O atoms on both sides', 'Only oxygen', 'Only hydrogen nucleus count false', 'No atoms counted'], 'A'),
          P('State (s)/(l)/(g)/(aq) informs:', ['Physical state context (survey)', 'Only nuclear spin', 'Only colour blindly', 'Number of electrons in nucleus'], 'A'),
          P('A catalyst is noted to show:', ['It speeds path but is regenerated (intro)', 'It is consumed stoichiometrically always false often', 'It increases atom count', 'It replaces balancing'], 'A'),
          P('Ionic solids often dissociate in water; net ionic equations focus on:', ['Species that change role (survey)', 'All spectator details always retained false sometimes', 'Only neutrons', 'Only metals in gas phase'], 'A'),
          P('Balancing combustion of hydrocarbon needs:', ['O₂ and careful C/H/O bookkeeping', 'No oxygen ever', 'Only hydrogen gas as oxidizer typically false', 'Nitrogen fusion'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — Reaction types',
        problems: [
          P('Combination has pattern:', ['A + B → AB', 'AB → A + B', 'A + BC → AC + B', 'AB + CD → AD + CB'], 'A'),
          P('Zn + CuSO₄(aq) → ZnSO₄(aq) + Cu is:', ['Single displacement', 'Combination', 'Decomposition always false', 'No redox involvement false'], 'A'),
          P('Thermal decomposition of CaCO₃ is:', ['Substitution', 'Decomposition releasing CO₂ commonly', 'Synthesis only', 'Only physical'], 'B'),
          P('Acid–base forming salt + water fits:', ['Neutralization patterns (survey)', 'Only combustion', 'Nuclear splitting', 'Alloy forming'], 'A'),
          P('Double displacement examples include:', ['Precipitate or gas forming from ion swapping (survey)', 'Only element + element directly', 'Only one product always', 'No ions ever'], 'A'),
          P('A combustion reaction consumes:', ['A fuel with oxidant often O₂ (survey)', 'Only noble gases always', 'Only water', 'No energy change'], 'A'),
          P('Identifying reaction class helps:', ['Predict likely products cautiously intro', 'Remove need for observations', 'Guarantee exact lab yield always false', 'Ignore safety'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — Oxidation and reduction',
        problems: [
          P('Oxidation historically included:', ['Addition of oxygen (older language survey)', 'Only electron gain incorrect modern view', 'Only proton gain false', 'No electron transfer examples'], 'A'),
          P('In 2Na + Cl₂ → 2NaCl, sodium is:', ['Oxidized (loses electrons)', 'Reduced', 'Catalyst always', 'Unchanged oxidation state false'], 'A'),
          P('An oxidizing agent:', ['Often gains electrons/is reduced itself', 'Always loses electrons false', 'Has no oxidation number', 'Is always H₂'], 'A'),
          P('Zero oxidation state is typical for:', ['Pure elements in standard state', 'All ions always', 'Polyatomic ions always', 'Hydrated salts only'], 'A'),
          P('Redox divides into half-reactions concerning:', ['Electron transfer bookkeeping (intro)', 'Only nuclear mass defects', 'Only density', 'Only colour labels'], 'A'),
          P('Increasing oxidation number means:', ['Oxidation', 'Reduction', 'No change guaranteed', 'Only physical mixing'], 'A'),
          P('Some reactions are NOT redox, e.g.:', ['Acid-base proton transfer without oxidation change typical intro cases', 'All reactions always redox false', 'Only explosions', 'Only dissolving sugar false redox ambiguity watch word often physical'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — Mole and stoichiometry',
        problems: [
          P('Molar mass of CO₂ (~44 g mol⁻¹) means:', ['About 44 g per mole of molecules', '44 atoms always total false', '44 mol per gram inverted', '44 electrons only'], 'A'),
          P('Moles = mass divided by:', ['Molar mass (when mass in grams)', 'Avogadro only always false need both pathways', 'Volume only always false context', 'Atomic number alone'], 'A'),
          P('From 2 H₂ + O₂ → 2 H₂O, 2 mol H₂ can make:', ['Up to 2 mol H₂O if enough O₂ (ratio survey)', '1 mol total always ignoring O₂ false', '0 mol impossible', '3 mol violating ratio'], 'A'),
          P('Limiting reactant:', ['Runs out first constraining yield (intro)', 'Is always leftover', 'Is noble gas typically false', 'Has infinite supply'], 'A'),
          P('Percentage yield compares:', ['Actual over theoretical ×100 (intro)', 'Only volume colour', 'Only catalyst mass', 'Nuclear abundance'], 'A'),
          P('Particles to moles divides by:', ['Avogadro constant', 'Periodic table period only', 'Atomic mass only inverted wrong step', 'Zero'], 'A'),
          P('Empirical formula from composition uses:', ['Mole ratios reduced to simplest integers intro', 'Only density of water alone', 'Only charge balance alone always false', 'Random guess'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Solutions',
    chapterDescription:
      'Mixture types, how solutions form, solubility and saturation, concentration units and calculations, stoichiometry in solutions.',
    topics: [
      {
        topicName: 'Heterogeneous and homogeneous mixtures',
        topicDescription: 'Suspensions, colloids, solutions; distinguishing by particle scale.',
        topicObjectives: [
          'Classify mixtures as heterogeneous or homogeneous with examples.',
          'Relate particle size and settling to mixture type.',
        ],
      },
      {
        topicName: 'The solution process',
        topicDescription: 'Solute, solvent; hydration/dissolving; favourable interactions and entropy.',
        topicObjectives: [
          'Define solute/solvent roles and saturated vs unsaturated.',
          'Interpret dissolving microscopically (introductory).',
        ],
      },
      {
        topicName: 'Solubility and equilibrium',
        topicDescription:
          'Factors affecting solubility; saturated solutions; sparingly soluble salts.',
        topicObjectives: [
          'Read solubility data qualitatively and predict saturation.',
          'State how temperature/agitation affect dissolving rates vs equilibrium.',
        ],
      },
      {
        topicName: 'Concentration expressions',
        topicDescription:
          'Mass percent; molarity; molality; dilution calculations (survey).',
        topicObjectives: [
          'Compute concentration from masses and volumes for molarity (introductory).',
          'Use M₁V₁ = M₂V₂ conceptually for dilutions.',
        ],
      },
      {
        topicName: 'Preparation of solutions and solution stoichiometry',
        topicDescription:
          'Lab steps from solid or concentrated stock; titration arithmetic (survey).',
        topicObjectives: [
          'Outline safe steps for preparing a desired molarity solution.',
          'Relate mol L⁻¹ volumes to mole amounts used in stoichiometry.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Brass', 'Brass metals mixed uniformly is:', ['Heterogeneous if uniform false', 'A homogeneous alloy/solid solution (intro)', 'A pure compound', 'A colloid of water'], 1, 'Medium'),
      ex(1, 'Solute', 'In sugar water often:', ['Water is solvent', 'Sugar is solvent', 'Neither is solvent', 'Both solvents always'], 0, 'Easy'),
      ex(2, 'Sat', 'Adding more solute to saturated solution usually:', ['All dissolves more', 'Excess settles or stays undissolved (typical)', 'Evaporates instantly', 'Becomes heterogeneous always false can stay'], 1, 'Easy'),
      ex(3, 'Molarity', 'Molarity units are:', ['mol L⁻¹', 'g only', 'kg mol⁻¹ only', 'no units'], 0, 'Easy'),
      ex(3, 'Dilute', 'Dilution increases volume and:', ['Decreases concentration', 'Increases concentration always', 'Freezes solute atoms', 'Removes solvent mass only'], 0, 'Easy'),
      ex(4, 'Prep', 'To rough desired molarity from solid:', ['Dissolve weighed amount in volumetric flask process intro', 'Only guess volume', 'Only heat blindly', 'Only filter without dissolving'], 0, 'Medium'),
      ex(4, 'Titration', 'Moles acid in titre relate to mole ratio from:', ['Balanced equation (survey)', 'Random colour preference', 'Only density of water', 'Time only'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Mixtures',
        problems: [
          P('Sand in water settles as:', ['A solution only', 'A suspension often', 'A pure element mixture false', 'A single phase always'], 'B'),
          P('Homogeneous means:', ['Uniform composition throughout', 'Visible layers always', 'No molecules', 'Only gases'], 'A'),
          P('Milk complexity can behave like:', ['Colloid/emulsion behaviors (survey)', 'Only distilled water purity', 'Only ionic crystal', 'Only vacuum'], 'A'),
          P('Air is commonly treated as homogeneous because:', ['Gases mixed uniformly macroscopically intro', 'It is layered solid always false', 'It has zero components', 'It is precipitation'], 'A'),
          P('Filtration separates when:', ['Particle size differs from solvent passage (survey)', 'All mixtures equally', 'Solutions always crystallize instantly', 'No separation possible'], 'A'),
          P('A solution differs from coarse suspension partly by:', ['Smaller dispersed units not settling rapidly', 'Larger rocky chunks always', 'No solvent present', 'No solute dissolution'], 'A'),
          P('Brine is:', ['Salt water solution commonly', 'Only pure Na metal', 'Only oxygen gas liquefied', 'Alloy of iron only'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — Solution process',
        problems: [
          P('Hydration surrounds ions with:', ['Water molecular orientation (survey)', 'Only neutron clouds', 'Metallic electrons only', 'No interactions'], 'A'),
          P('“Like dissolves like” suggests polar solvents often dissolve:', ['Ionic/polar substances better introductory rule', 'Only noble gases solids', 'Only oils always false sometimes exceptions', 'Only metals lumps'], 'A'),
          P('Increasing temperature commonly speeds dissolving mostly by:', ['Faster collisions and mixing kinetics introductory', 'Destroying equilibrium always false wording', 'Eliminating solvents', 'Removing solute permanently'], 'A'),
          P('Unsaturated can still accept:', ['More solute at same conditions introductory', 'No solute ever', 'Infinite solute violating solubility', 'Only gas solutes'], 'A'),
          P('Supersaturation describes:', ['Metastable excess beyond usual saturation (survey)', 'No solute dissolved', 'Only boiling point plateau', 'Only precipitate certainty'], 'A'),
          P('Electrolyte solutions:', ['Conduct because mobile ions introductory', 'Never conduct ', 'Conduct only solids', 'Are always nonaqueous'], 'A'),
          P('Non-electrolyte molecular solute like sugar aqueous:', ['Weak conductor compared to salts typically intro', 'Always conducts like Cu metal', 'Only forms plasma', 'Removes water entirely'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — Solubility equilibrium',
        problems: [
          P('Solubility depends on substance and:', ['Temperature/pressure gases context (survey)', 'Only alphabetical name', 'Only container colour', 'Only stirring direction'], 'A'),
          P('Ksp conceptually describes:', ['Ion product equality at saturation sparingly soluble salts survey', 'Only gas speed', 'Nuclear decay rate', 'Molarity definition'], 'A'),
          P('Common ion effect:', ['Usually lowers solubility of sparingly soluble salt qualitative', 'Always increases limitless solubility false', 'Removes solvents', 'Applies only to gases false'], 'A'),
          P('Agitating can speed:', ['Approach to equilibrium not always final solubility value', 'Change intrinsic solubility always false simplistic', 'Nuclear reactions', 'Element creation'], 'A'),
          P('Most solids generally become more soluble in water when:', ['Temperature rises (often, not universally perfect)', 'Temperature drops always universally false textbook nuance simplified often', 'Pressure rises like gases false misapply', 'Time stops'], 'A'),
          P('Gases dissolve more at higher pressure:', ['Henry’s law qualitative', 'Never', 'Always zero solubility false', 'Only noble liquids'], 'A'),
          P('Precipitate visually signals:', ['Ions combining to sparingly soluble solid introductory', 'Only physical freeze', 'No reaction', 'Only UV colour'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Concentration',
        problems: [
          P('Mass percent =', ['mass solute ÷ mass solution ×100', 'moles solvent only', 'volume gas only', 'atomic number ratio'], 'A'),
          P('Molarity needs volume of:', ['Solution not only solvent simplistic intro', 'Solute lattice only false', 'Beaker exterior', 'Laboratory humidity only'], 'A'),
          P('Molality uses:', ['Mol solute/kg solvent introductory definition', 'L solution always same as M false different', 'kg solute/kg solvent reversed', 'pH only'], 'A'),
          P('ppm/ppb used when:', ['Trace amounts communicatively (survey)', 'Only solids macro', 'Never in environment false', 'Only nuclear'], 'A'),
          P('Dilution factor links:', ['Higher volume lower concentration proportional intro', 'Concentration always rises with solvent false', 'No math', 'Only mass doubling without volume'], 'A'),
          P('Neutralization titration calculates unknown using:', ['Moles from concentration×volume stoichiometric intro', 'Only colour blindness', 'Only temperature fashion', 'Only taste'], 'A'),
          P('Volumetric glassware aids:', ['Controlled final volume for concentration lab intro', 'Weighing only always false', 'Nuclear assays', 'Grinding salts only'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Preparation',
        problems: [
          P('From mass and molarity target you first find:', ['Moles desired then mass solute introductory', 'Only colour hue', 'Only pressure of air', 'Only volume without moles wrongly'], 'A'),
          P('Dissolve before fill line to avoid:', ['Volume errors transferring hot solutions intro lab tip', 'Improved accuracy by skipping dissolve false opposite', 'Catalyst explosions generally false', 'No errors ever'], 'A'),
          P('Conc acid dilution safest mental pattern:', ['Add acid slowly to water (lab rule slogan)', 'Add water splash into concentrated acid dangerously', 'Mix blindfold humorous false', 'Ignore heat'], 'A'),
          P('Standard solution means:', ['Reliably known concentration for analysis intro', 'Any coloured liquid', 'Only gas', 'Unmeasured flask guess'], 'A'),
          P('Indicators in titration:', ['Signal endpoint near stoichiometric point intro qualitative', 'Change nuclear mass', 'Replace balanced equation math', 'Only decorative'], 'A'),
          P('Stoichiometry with molarities uses:', ['Moles = M×V aligning units intro', 'Only grams without molar masses always incomplete', 'Only length meters', 'Only time seconds alone'], 'A'),
          P('Cleaning glassware avoids:', ['Cross-contamination yielding wrong mole amounts intro', 'Accurate reading improvements false opposite', 'Labeling intentionally false', 'Wearing goggles'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 3: Important inorganic compounds',
    chapterDescription:
      'Families of oxides, acids, bases, salts, naming patterns, hazards, and Ethiopian industrial/lab familiarity (survey level).',
    topics: [
      {
        topicName: 'Introduction to important inorganic compounds',
        topicDescription:
          'Scope: common laboratory and industrial compounds; nomenclature refresh.',
        topicObjectives: [
          'Group household and industrial substances by chemical family.',
          'Recall basic naming for binary and common acids/bases.',
        ],
      },
      {
        topicName: 'Oxides',
        topicDescription: 'Metal vs non-metal oxides, acidic/basic oxides trend (survey).',
        topicObjectives: [
          'Predict acid/base behavior trends for simple oxides in water introductory.',
          'Give examples CO₂, SO₂, CaO, Na₂O contextual.',
        ],
      },
      {
        topicName: 'Acids',
        topicDescription: 'Strength vs concentration; common acids HCl H₂SO₄ HNO₃ CH₃COOH etc.',
        topicObjectives: [
          'Distinguish Arrhenius acid definition at introductory classroom level.',
          'Explain pH indicators qualitatively for acid solutions.',
        ],
      },
      {
        topicName: 'Bases',
        topicDescription: 'Alkalis, ammonia solution, hydroxides and basic oxides behaviour.',
        topicObjectives: [
          'Relate slippery feel and bitterness cautions solely lab rule not tasting.',
          'Describe neutralisation pattern acid + base.',
        ],
      },
      {
        topicName: 'Salts',
        topicDescription: 'Formation patterns, solubility rules survey, fertilizers simple examples.',
        topicObjectives: [
          'Classify chloride, sulfate, nitrate salts typical examples.',
          'Link ammonium nitrate fertilizers to stoichiometric nitrogen content introductory.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Naming', 'Na₂SO₄ is:', ['Binary acid', 'Salt', 'Noble molecule', 'Element'], 1, 'Easy'),
      ex(1, 'CO₂ water', 'CO₂ dissolves to give:', ['Neutral only always false acidic solution forms', 'Acidic solution weak carbonic introductory', 'Basic always', 'No interaction'], 1, 'Medium'),
      ex(2, 'Proton donor', 'Brønsted–Lowry acids are proton:', ['Acceptors mostly false', 'Donors introductory survey', 'Neutron carriers', 'Only metals'], 1, 'Easy'),
      ex(3, 'Base', 'NaOH aqueous behaves as:', ['Acid destroying water false', 'Strong base typical intro', 'Salt only', 'Gas solute impossible'], 1, 'Easy'),
      ex(4, 'NaCl', 'Table salt dissolution gives ions:', ['Na⁺ Cl⁻ introductory', 'No ions false', 'Only molecules always', 'O₂ gas'], 0, 'Easy'),
      ex(4, 'Fertilizer note', 'Ammonium salts supply plants partly:', ['Nitrogen-containing nutrients survey', 'Only iron metal lumps', 'Only noble gases', 'Radioactive iodine unrelated'], 0, 'Medium'),
      ex(1, 'Oxides', 'SO₂ in the environment can contribute to:', ['Acid rain chemistry (survey)', 'O₃ layer holes directly (mostly other gases)', 'Helium buildup', 'Diamond formation'], 0, 'Medium'),
      ex(3, 'Indicator', 'Red litmus turns blue often in:', ['Acid falsely switched', 'Basic solution introductory pattern', 'Only pure water neutral', 'Only gases'], 1, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Inorganic compounds intro',
        problems: [
          P('School “inorganic” chemistry mainly highlights:', ['Compounds/minerals excluding living carbon chemistry survey', 'Only plastics', 'Only cooking recipes', 'Only nuclear weapons'], 'A'),
          P('Chemical formulae obey:', ['Element symbols and stoichiometric subscripts', 'Random doodles', 'Only colors', 'Taste alone'], 'A'),
          P('Labelling bottles prevents:', ['Accidents misuse intro', 'Learning', 'Measurement entirely false', 'Class discussion'], 'A'),
          P('SDS sheets communicate:', ['Safety handling survey', 'Only marketing', 'Nuclear bombs everyday false absurd', 'Music playlists'], 'A'),
          P('Hydrates include:', ['Water in crystal formula with dot notation intro', 'Only gases inside metals false unless occluded nuanced skip', 'No water ever', 'Only organic oils'], 'A'),
          P('Common lab acid container often shows:', ['Corrosive hazard pictogram qualitative', 'Edible sticker false', 'No warnings ever', 'Recycling plastics only'], 'A'),
          P('Pure compound contrasts mixture because:', ['Fixed composition chemically', 'Variable any ratio always false for compound', 'No formula', 'Only suspensions'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Oxides',
        problems: [
          P('Many metal oxides (e.g., Na₂O, CaO) are classified as:', ['Basic oxides (survey)', 'Acid oxides typically', 'Noble gases', 'Hydrated only'], 'A'),
          P('Sodium oxide Na₂O behaves as:', ['Basic oxide tendency', 'Acid oxide only', 'Inert noble compound', 'Organic polymer'], 'A'),
          P('Non-metal oxides like SO₂ dissolve to tendency:', ['Form acidic aqueous chemistry introductory', 'Form strong base instantly false', 'No reaction usually false', 'Create metals'], 'A'),
          P('CO is often cited as limiting acid/base simplistic intro because:', ['It is awkward to label strong acid/basic oxide simply', 'It is always strongly acidic', 'It is ionic lattice only', 'It is alkali meal'], 'A'),
          P('Rust involves iron reacting with:', ['Oxygen moisture complex intro', 'Helium alone', 'Gold catalyst always false', 'Nitrogen only inert simplistic false'], 'A'),
          P('Quicklime historically CaO from limestone relates to:', ['Construction materials chemistry intro Ethiopia context possible', 'Only diamonds', 'Only plastics extrusion unrelated', 'Nuclear reactors household false'], 'A'),
          P('Acidic oxide + base can yield:', ['Salt + water introductory patterns similar neutralization oxide route survey', 'Only oxygen gas elemental always false', 'No products', 'Only hydrates solids always'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Acids',
        problems: [
          P('Strength refers to:', ['Ionization completeness not bottle label concentration only intro', 'Bottle colour only', 'Volume only', 'Taste subjective dangerous'], 'A'),
          P('Strong acids like HCl dilute vs concentrated differs:', ['Molar concentration not strength classification intro', 'Strong vs weak reversal false', 'No difference ever false', 'Only temperature colour'], 'A'),
          P('Indicator changes relate to:', ['pH/environment colour introductory qualitative', 'Nuclear spins', 'Molar masses only', 'Only density of acid bottle'], 'A'),
          P('Carbonic acid from CO₂ explains:', ['Slightly acidic rain natural intro before pollution emphasis', 'Alkaline seawater simplistic false localized', 'No pH swings ever false', 'Metallic plating'], 'A'),
          P('Sulfuric acid dangerously:', ['Very dehydrating/strong intro lab caution', 'Tastes sweet safe false joke reject', 'Inert toy chemical false', 'Only gas at STP'], 'A'),
          P('Nitric acid participates in:', ['Oxidizing acid reactions survey intro', 'Only reduction of Au always false nuanced', 'No reactions', 'Only fuel without oxygen'], 'A'),
          P('Vinegar contains mainly:', ['Acetic acid aqueous introductory', 'Hydrochloric concentrated false', 'Sodium chloride only', 'Methanol dangerous false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — Bases',
        problems: [
          P('NH₃ aqueous ammonia acts as:', ['Weak base introductory', 'Strong acid always false', 'Salt crystal only', 'Noble solvent'], 'A'),
          P('Alkalis are bases that:', ['Dissolve producing OH⁻ typical intro aqueous alkali wording', 'Always remain solids never ionize false ambiguous', 'Are always ammonia only false', 'Are non-aqueous only false'], 'A'),
          P('Neutralisation produces commonly:', ['Salt + water introductory many cases', 'Only hydrogen gas always false except acid-metal different', 'No products', 'Ozone'], 'A'),
          P('pH scale qualitatively <7 acidic and >7 basic intro means:', ['Comparative not always lab precise without calibration survey', 'Random numbers decorative', 'Only gases', 'Nuclear countdown'], 'A'),
          P('Industrial NaOH cautions:', ['Corrosive burns intro PPE messaging', 'Edible seasoning false', 'Inert benign false', 'Only gas inhalation benign false'], 'A'),
          P('Mg(OH)₂ used sometimes as:', ['Antacid concept weak base neutralizes stomach acid intro oversimplified medicinal', 'Strong acid seasoning false', 'Fuel only false', 'Metallic conductor'], 'A'),
          P('Slaked lime relates to:', ['Calcium hydroxide applications intro Ethiopian agriculture liming acidity maybe survey light', 'Sodium chloride only', 'Benzene only', 'Helium coolant domestic false'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — Salts',
        problems: [
          P('Neutralization often forms ionic salts like:', ['NaCl introductory classic', 'O₂ gas elemental only false', 'Pure diamond', 'H₂ molecule only ionic nonsense'], 'A'),
          P('Insoluble sulfate example textbook survey:', ['BaSO₄ often noted', 'NaCl precipitation usually soluble false opposite', 'KNO₃ insoluble simplistic false soluble', 'NH₄NO₃ insoluble simplistic false soluble'], 'A'),
          P('Nitrates are often:', ['Soluble introductory rule-of-thumb taught', 'All insoluble false generality', 'Gases always', 'Noble alloys'], 'A'),
          P('Chlorides insoluble notable exception pattern intro:', ['AgCl frequently cited', 'NaCl cited as insoluble false', 'All chlorides soluble false nuanced', 'No chlorides exist false'], 'A'),
          P('Hydrated salts like CuSO₄·5H₂O show:', ['Water in lattice colour property intro survey', 'No water ever false', 'Only organic chains', 'Nuclear instability'], 'A'),
          P('Limestone reacts with acids releasing:', ['Carbon dioxide introductory', 'Nitrogen elemental always false typically', 'Chlorine only false context', 'Helium balloons'], 'A'),
          P('NH₄NO₃ caution includes:', ['Oxidiser explosivity awareness intro not detailed engineering', 'Inert dusty powder totally safe false irresponsible', 'Edible seasoning false', 'Only dissolves plastics instantly false nonsense'], 'A'),
        ],
      },
    ],
  },
];
