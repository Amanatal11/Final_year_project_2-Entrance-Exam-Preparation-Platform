/**
 * Grade 9 Chemistry curriculum — Units 4–5 (Natural stream, MoE Ethiopia outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 4: Chemical reaction and stoichiometry',
    chapterDescription:
      'Laws of reactions, equations, energy changes, reaction types, stoichiometry, redox, and rates/equilibrium (survey).',
    topics: [
      {
        topicName: 'Fundamental laws of chemical reactions',
        topicDescription: 'Conservation of mass; definite and multiple proportions (introductory).',
        topicObjectives: [
          'State the law of conservation of mass in reactions.',
          'Use simple ratio reasoning for combining masses (intro).',
        ],
      },
      {
        topicName: 'Chemical equations',
        topicDescription: 'Word and formula equations; balancing; states of matter symbols.',
        topicObjectives: [
          'Write balanced equations for reactions taught in class.',
          'Interpret coefficients as mole ratios (introductory).',
        ],
      },
      {
        topicName: 'Energy changes and types of chemical reactions',
        topicDescription: 'Exothermic/endothermic; synthesis, decomposition, single/double replacement, combustion.',
        topicObjectives: [
          'Classify reactions by pattern and energy flow (survey).',
          'Identify reactants and products in balanced equations.',
        ],
      },
      {
        topicName: 'Stoichiometry',
        topicDescription: 'Mole concept; mole–mole and mass–mass calculations from equations.',
        topicObjectives: [
          'Convert between moles, mass, and particle count (intro).',
          'Solve simple stoichiometry problems using balanced equations.',
        ],
      },
      {
        topicName: 'Oxidation–reduction, rate, and equilibrium',
        topicDescription: 'Oxidation numbers; redox in daily life; factors affecting rate; equilibrium idea (survey).',
        topicObjectives: [
          'Assign oxidation numbers in simple compounds and ions.',
          'Describe how concentration, temperature, and catalysts affect rate (survey).',
        ],
      },
    ],
    exercises: [
      ex(0, 'Mass', 'In a closed system, total mass of reactants and products:', ['Is conserved', 'Always decreases', 'Doubles', 'Becomes zero'], 0, 'Easy'),
      ex(1, 'Balance', 'Balanced equations have:', ['Equal atoms of each element on both sides', 'Only one product', 'No coefficients', 'Only ions'], 0, 'Easy'),
      ex(2, 'Exo', 'Combustion of fuel is often:', ['Exothermic', 'Endothermic only', 'Without energy change', 'Nuclear only'], 0, 'Easy'),
      ex(3, 'Mole', 'One mole contains approximately:', ['6.02×10²³ particles', '1 atom only', '100 grams always', '1 liter always'], 0, 'Easy'),
      ex(3, 'Ratio', 'Coefficient 2 in 2H₂ + O₂ → 2H₂O means:', ['2 mol H₂ reacts per balanced equation', '2 grams total only false', '2 atoms oxygen only false', 'No ratio information'], 0, 'Medium'),
      ex(4, 'Ox', 'Oxidation involves (many schemes):', ['Loss of electrons / increase in oxidation number', 'Gain of electrons', 'No change', 'Only proton loss'], 0, 'Medium'),
      ex(4, 'Rate', 'Increasing temperature usually:', ['Increases reaction rate', 'Stops all reactions', 'Removes activation energy completely false', 'Eliminates collisions'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — Reaction laws',
        problems: [
          P('Law of definite proportions states a compound’s elements are in:', ['Fixed mass ratio', 'Random ratios', 'Only gases', 'Only metals'], 'A'),
          P('Law of multiple proportions applies when:', ['Two elements form more than one compound with different ratios', 'Only one compound exists', 'Mass is not conserved', 'Only solutions react'], 'A'),
          P('Closed flask experiments support:', ['Conservation of mass', 'Creation of matter', 'Loss of all atoms', 'Only physical changes'], 'A'),
          P('A chemical change produces:', ['New substances with new properties', 'Only phase change always', 'No energy change ever', 'Only mixtures always'], 'A'),
          P('Physical change example:', ['Melting ice', 'Rusting iron', 'Burning methane', 'Neutralizing acid'], 'A'),
          P('Coefficients in equations represent:', ['Relative mole amounts', 'Only colors', 'Only temperature', 'Only volume of solids false'], 'A'),
          P('Evidence for chemical reaction may include:', ['Gas formation, color change, precipitate, energy change', 'Only magnetism of iron unchanged', 'Only size change of rock', 'Only reflection'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Equations',
        problems: [
          P('To balance H₂ + O₂ → H₂O, a correct coefficient set is:', ['2,1,2 for H₂,O₂,H₂O', '1,1,1 only', '3,1,1', '2,2,1'], 'A'),
          P('State symbol (s) means:', ['Solid', 'Solution always false aq', 'Gas', 'Liquid'], 'A'),
          P('Aqueous (aq) indicates:', ['Dissolved in water', 'Solid crystal', 'Gas only', 'Plasma'], 'A'),
          P('Word equation: methane + oxygen → carbon dioxide + water is:', ['Combustion pattern', 'Only synthesis', 'Only decomposition', 'Only single replacement'], 'A'),
          P('Balancing ensures:', ['Same number of each atom type on both sides', 'Same total mass of coefficients false misleading', 'Only products exist', 'Only reactants exist'], 'A'),
          P('Subscripts in H₂O indicate:', ['Two H atoms per molecule', 'Two moles always false coefficient separate', 'Charge', 'Temperature'], 'A'),
          P('Incomplete combustion may produce:', ['CO as well as CO₂ (conditions)', 'Only diamond', 'Only helium', 'Only water always'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Energy and reaction types',
        problems: [
          P('Exothermic reactions release:', ['Net energy to surroundings (survey)', 'Only cold', 'Only light without heat false sometimes both', 'No energy'], 'A'),
          P('Endothermic reactions absorb:', ['Energy from surroundings', 'Only electrons from nucleus', 'Only catalysts', 'Only pressure'], 'A'),
          P('Synthesis reaction pattern:', ['A + B → AB', 'AB → A + B', 'A + BC → AC + B only', 'Always combustion'], 'A'),
          P('Decomposition example:', ['2H₂O₂ → 2H₂O + O₂ (catalyzed lab)', 'Na + Cl₂ → NaCl', 'AgNO₃ + NaCl → AgCl + NaNO₃', 'Only rusting'], 'A'),
          P('Double replacement forms:', ['Precipitate or water sometimes', 'Only metals', 'Only gases always', 'Only polymers'], 'A'),
          P('Combustion needs:', ['Oxidant (often O₂) and fuel', 'Only nitrogen', 'Only catalyst always false', 'Zero energy'], 'A'),
          P('Activation energy is:', ['Minimum energy to start reaction', 'Total ΔH always', 'Only for endothermic', 'Zero for all'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — Stoichiometry',
        problems: [
          P('Molar mass of CO₂ is approximately:', ['44 g/mol', '12 g/mol only', '32 g/mol', '18 g/mol'], 'A'),
          P('0.5 mol of H₂O contains about:', ['3.01×10²³ molecules', '1 atom', '0 moles O', 'Avogadro number of H only false'], 'A'),
          P('From N₂ + 3H₂ → 2NH₃, 3 mol H₂ needs:', ['1 mol N₂', '3 mol N₂', '0 mol N₂', '2 mol N₂'], 'A'),
          P('Mass–mass problems use:', ['Mole bridge via molar mass', 'Only density of gas always', 'Only color', 'Only volume of solids without data'], 'A'),
          P('Limiting reactant is:', ['Consumed first, limiting product amount', 'Always in excess', 'Always catalyst', 'Always product'], 'A'),
          P('Percent yield compares:', ['Actual to theoretical yield', 'Mass to volume only', 'Reactants to catalyst', 'Only gases'], 'A'),
          P('Empirical formula gives:', ['Simplest whole-number ratio of atoms', 'Exact molecular mass only', 'Only structural isomers', 'Only ion charges'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Redox and rates',
        problems: [
          P('In Zn + Cu²⁺ → Zn²⁺ + Cu, zinc is:', ['Oxidized', 'Reduced', 'Catalyst only', 'Unchanged'], 'A'),
          P('Oxidizing agent causes:', ['Oxidation of another species (it is reduced)', 'Reduction of another only false', 'No electron transfer', 'Only proton transfer'], 'A'),
          P('Oxidation number of O in most compounds is:', ['−2', '+2 always', '0 always', '+1'], 'A'),
          P('A catalyst:', ['Lowers activation energy', 'Changes equilibrium constant at fixed T false', 'Is consumed completely', 'Stops reaction'], 'A'),
          P('Higher concentration usually:', ['Increases collision frequency and rate', 'Decreases rate always', 'Has no effect', 'Removes products'], 'A'),
          P('Equilibrium means:', ['Forward and reverse rates equal (dynamic)', 'All reactants gone', 'Reaction stops forever macroscopically false still dynamic', 'No products'], 'A'),
          P('Le Châtelier idea: system shifts to:', ['Partially counteract imposed change (survey)', 'Always make more reactants', 'Ignore stress', 'Violate conservation'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 5: Physical states of matter',
    chapterDescription:
      'Kinetic theory; properties and behavior of gases, liquids, and solids; phase changes.',
    topics: [
      {
        topicName: 'Kinetic theory and properties of matter',
        topicDescription: 'Particles in motion; temperature as average kinetic energy (intro).',
        topicObjectives: [
          'Explain pressure of gases using particle collisions.',
          'Distinguish intensive vs extensive properties (survey).',
        ],
      },
      {
        topicName: 'The gaseous state',
        topicDescription: 'Gas laws qualitative; volume, temperature, pressure relationships (intro).',
        topicObjectives: [
          'Use Boyle’s and Charles’s laws in simple calculations when taught.',
          'Relate gas behavior to particle model.',
        ],
      },
      {
        topicName: 'The liquid state',
        topicDescription: 'Vapor pressure, boiling, viscosity, surface tension.',
        topicObjectives: [
          'Explain evaporation vs boiling using IMF ideas.',
          'Describe how IMFs affect viscosity (survey).',
        ],
      },
      {
        topicName: 'The solid state',
        topicDescription: 'Crystalline vs amorphous; types of solids (ionic, molecular, metallic, network).',
        topicObjectives: [
          'Classify solids by bonding type and properties.',
          'Relate melting point to attractive forces (qualitative).',
        ],
      },
      {
        topicName: 'Phase changes and heating curves',
        topicDescription: 'Melting, freezing, vaporization, condensation, sublimation; heating/cooling curves.',
        topicObjectives: [
          'Interpret heating curve plateaus as phase changes.',
          'Calculate heat for temperature change using q=mcΔT (when taught).',
        ],
      },
    ],
    exercises: [
      ex(0, 'Kinetic', 'Gas pressure arises from:', ['Particle collisions with walls', 'Only gravity', 'Only magnetism', 'Only light'], 0, 'Easy'),
      ex(1, 'Boyle', 'Boyle’s law: at fixed T, P and V are:', ['Inversely related', 'Directly proportional always', 'Unrelated', 'Always equal'], 0, 'Medium'),
      ex(2, 'Boil', 'Boiling occurs when:', ['Vapor pressure equals external pressure', 'All liquid disappears instantly', 'IMFs vanish', 'Temperature is zero'], 0, 'Easy'),
      ex(3, 'Solid', 'Ionic solids often:', ['Have high melting points', 'Are always gases', 'Never form crystals', 'Conduct as solids easily'], 0, 'Easy'),
      ex(4, 'Plateau', 'On a heating curve, a plateau means:', ['Phase change at constant temperature', 'Rapid temperature rise', 'No energy input', 'Chemical reaction always'], 0, 'Medium'),
      ex(4, 'Heat', 'q = mcΔT uses:', ['Mass, specific heat, temperature change', 'Only moles', 'Only pressure', 'Only volume'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Kinetic theory',
        problems: [
          P('Higher temperature means particles:', ['Move faster on average', 'Stop moving', 'Lose mass', 'Become ions always'], 'A'),
          P('Diffusion in gases shows:', ['Random motion of particles', 'Only ionic bonds', 'Only solids', 'No collisions'], 'A'),
          P('Absolute zero is:', ['Theoretical minimum temperature with minimal motion', 'Room temperature', 'Boiling point of water', '100°C'], 'A'),
          P('Gas compressibility is high because:', ['Large empty space between particles', 'Particles are large rigid spheres only false', 'No motion', 'Only metallic bonding'], 'A'),
          P('Pressure units may include:', ['Pascal, atm, mmHg (survey)', 'Only moles', 'Only grams', 'Only liters only'], 'A'),
          P('An ideal gas model assumes:', ['Negligible particle volume and no IMF (survey)', 'Strong hydrogen bonds always', 'Ionic lattice', 'Only liquids'], 'A'),
          P('Kelvin scale conversion: K =', ['°C + 273 (approx intro)', '°C − 273 always wrong sign', '°F only', 'Only rankine in all countries false'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — Gases',
        problems: [
          P('Charles’s law: volume and absolute temperature at fixed P are:', ['Directly proportional', 'Inversely proportional', 'Unrelated', 'Always constant product'], 'A'),
          P('Avogadro’s hypothesis links:', ['Volume and moles of gas at same T,P', 'Only solids', 'Only colors', 'Only metals'], 'A'),
          P('Increasing gas temperature at fixed V increases:', ['Pressure', 'Only mass', 'Only density of solid', 'Nothing'], 'A'),
          P('Dalton’s law of partial pressures:', ['Total P is sum of partial pressures (ideal mix)', 'Only for liquids', 'Only one gas allowed', 'Violates conservation'], 'A'),
          P('Collecting gas over water requires:', ['Subtracting water vapor pressure correction', 'Ignoring humidity', 'Only ionic reactions', 'Only solids'], 'A'),
          P('Molar volume of ideal gas at STP (old intro) is about:', ['22.4 L/mol', '1 L/mol', '0 L/mol', '2240 L/mol'], 'A'),
          P('Gay-Lussac’s law relates:', ['Pressure and temperature at fixed volume (survey)', 'Only mass and color', 'Only solids melting', 'Only solutions'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Liquids',
        problems: [
          P('Evaporation occurs at:', ['Surface at temperatures below boiling point possible', 'Only at boiling point', 'Only in solids', 'Only in plasma'], 'A'),
          P('Vapor pressure increases when:', ['Temperature increases', 'IMFs strengthen greatly sometimes lower vp careful generally T up vp up', 'Temperature decreases always false', 'Volume of solid increases false'], 'A'),
          P('Surface tension is due to:', ['IMFs pulling surface molecules inward', 'Only ionic bonds in NaCl crystal', 'Gravity only', 'Nuclear force'], 'A'),
          P('Viscosity measures:', ['Resistance to flow', 'Color', 'pH', 'Oxidation number'], 'A'),
          P('Meniscus in glass tubes forms because:', ['Adhesion/cohesion balance (survey)', 'Only magnetism', 'Only nuclear decay', 'Only pressure'], 'A'),
          P('Boiling point elevation when solute added:', ['Occurs for nonvolatile solute (intro colligative awareness)', 'Never happens', 'Only for gases dissolved', 'Only metals'], 'A'),
          P('Liquid density is typically:', ['Between gas and solid for same substance often', 'Less than gas always false', 'Equal to gas', 'Zero'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — Solids',
        problems: [
          P('Crystalline solids have:', ['Regular repeating lattice', 'Random arrangement only amorphous', 'No atoms', 'Only gases'], 'A'),
          P('Amorphous example:', ['Glass (survey)', 'NaCl crystal', 'Diamond single crystal', 'Iron lattice perfect'], 'A'),
          P('Molecular solids like ice are held by:', ['IMFs (and covalent molecules inside)', 'Only metallic bonds', 'Only ionic lattice of NaCl type inside water false', 'Nothing'], 'A'),
          P('Network covalent solids like diamond:', ['Have very high melting points', 'Melt easily', 'Conduct as metals always false insulator', 'Are gases'], 'A'),
          P('Metallic solids conduct because:', ['Delocalized electrons', 'Fixed ions only moving', 'Only IMF', 'Only water'], 'A'),
          P('Allotropes are:', ['Different forms of same element', 'Different elements', 'Only ions', 'Only mixtures'], 'A'),
          P('Defects in crystals can:', ['Change properties slightly (awareness)', 'Destroy all chemistry', 'Only occur in gases', 'Only in liquids'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Phase changes',
        problems: [
          P('Melting is:', ['Solid to liquid', 'Liquid to gas', 'Gas to solid', 'Liquid to solid'], 'A'),
          P('Heat of fusion is energy for:', ['Melting at constant temperature', 'Raising gas temperature only', 'Breaking covalent bonds in all cases false', 'Nuclear fusion'], 'A'),
          P('Sublimation is:', ['Solid to gas directly', 'Gas to liquid', 'Liquid to solid', 'Only plasma'], 'A'),
          P('During condensation, energy is:', ['Released', 'Always absorbed', 'Zero always', 'Only kinetic'], 'A'),
          P('Specific heat capacity c is:', ['Heat per gram per degree (intro)', 'Only for gases', 'Moles only', 'Pressure'], 'A'),
          P('Plateau on cooling curve at 0°C for water indicates:', ['Freezing', 'Only heating', 'Only sublimation of CO₂ false context water', 'Chemical decomposition'], 'A'),
          P('Phase diagram shows:', ['Conditions for phases and changes (survey)', 'Only organic reactions', 'Only redox', 'Only atomic orbitals'], 'A'),
        ],
      },
    ],
  },
];
