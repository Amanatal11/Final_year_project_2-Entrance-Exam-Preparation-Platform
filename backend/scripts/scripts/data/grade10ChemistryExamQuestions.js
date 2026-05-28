/**
 * Five entrance-exam-style MCQs per Grade 10 Chemistry topic (Natural stream).
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  const key = `${c}-${t}`;
  const banks = {
    '0-0': [
      Q('Chemical change produces:', ['New substances', 'Only phase change', 'No energy change', 'Only sorting'], 'A'),
      Q('Burning wood is:', ['Chemical change', 'Physical change only', 'Mixture separation', 'Only melting'], 'A'),
      Q('Evidence of reaction may include:', ['Gas, color change, precipitate', 'Only magnetism unchanged', 'Only size of rock', 'Only reflection'], 'A'),
      Q('Fermentation of injera involves:', ['New chemical products', 'Only physical mixing', 'Only freezing', 'Only distillation'], 'A'),
      Q('Reversible changes are more typical of:', ['Some physical changes', 'All combustion', 'All neutralization', 'Nuclear decay'], 'A'),
    ],
    '0-1': [
      Q('Balanced equation obeys:', ['Conservation of atoms', 'Creation of atoms', 'Random coefficients', 'Only volume law'], 'A'),
      Q('State symbol (aq) means:', ['Aqueous', 'Solid', 'Gas', 'Liquid only'], 'A'),
      Q('Coefficient 3 in 3H₂ means:', ['Three moles H₂', 'Three atoms only always', 'Three grams', 'Nothing'], 'A'),
      Q('Combustion of hydrocarbon in O₂ gives mainly:', ['CO₂ and H₂O', 'Only CO always', 'Only H₂', 'Only C'], 'A'),
      Q('Subscripts in H₂SO₄ count:', ['Atoms in formula unit', 'Moles', 'Temperature', 'Charge only'], 'A'),
    ],
    '0-2': [
      Q('Synthesis pattern:', ['A + B → AB', 'AB → A + B only', 'Always combustion', 'Only plating'], 'A'),
      Q('Double replacement often forms:', ['Precipitate or water', 'Only metals', 'Only gases always', 'Only polymers'], 'A'),
      Q('Decomposition example:', ['2H₂O₂ → 2H₂O + O₂', 'Na + Cl₂ → NaCl', 'Only rusting', 'Only dissolving'], 'A'),
      Q('Combustion requires:', ['Oxidant often O₂', 'Only N₂', 'Zero energy', 'Only catalyst'], 'A'),
      Q('Single replacement involves:', ['One element replaces another in compound', 'Only ions in water', 'Only polymers', 'Only sublimation'], 'A'),
    ],
    '0-3': [
      Q('Oxidation involves often:', ['Loss of electrons', 'Gain of electrons', 'No change', 'Only proton loss'], 'A'),
      Q('Reducing agent is:', ['Oxidized', 'Reduced', 'Catalyst only', 'Inert'], 'A'),
      Q('Oxidation number of O in H₂O is:', ['−2', '+2', '0', '+1'], 'A'),
      Q('In Zn + Cu²⁺ → Zn²⁺ + Cu, Cu²⁺ is:', ['Reduced', 'Oxidized', 'Catalyst', 'Spectator only'], 'A'),
      Q('Redox reactions include:', ['Combustion and many single replacement', 'Only physical changes', 'Only dissolving NaCl', 'Only sublimation'], 'A'),
    ],
    '0-4': [
      Q('One mole equals:', ['6.02×10²³ particles', 'One atom only', '22.4 g', '1 L always'], 'A'),
      Q('Molar mass of CO₂ ≈', ['44 g/mol', '12 g/mol', '18 g/mol', '32 g/mol only O'], 'A'),
      Q('Limiting reactant:', ['Runs out first', 'Always excess', 'Is product', 'Is catalyst'], 'A'),
      Q('Percent yield =', ['actual/theoretical × 100%', 'theoretical/actual', 'mass/volume only', 'pH'], 'A'),
      Q('From N₂ + 3H₂ → 2NH₃, 6 mol H₂ needs:', ['2 mol N₂', '6 mol N₂', '1 mol N₂', '0 mol N₂'], 'A'),
    ],
    '1-0': [
      Q('Homogeneous mixture:', ['Uniform composition at particle scale', 'Visible layers always', 'Only metals', 'Only rocks'], 'A'),
      Q('Heterogeneous example:', ['Oil and water', 'Salt water dissolved', 'Air uniform gas mix false still homogeneous', 'Sugar in tea after stir homogeneous'], 'A'),
      Q('Solution is:', ['Homogeneous mixture', 'Always solid', 'Always gas', 'Only compound'], 'A'),
      Q('Colloid shows:', ['Tyndall effect sometimes', 'Always settles instantly', 'No particles', 'Only ions'], 'A'),
      Q('Filtration separates:', ['Insoluble solid from liquid', 'Dissolved ions always', 'Only gases', 'Only metals'], 'A'),
    ],
    '1-1': [
      Q('Dissolving NaCl in water involves:', ['Ion–dipole interactions', 'Only covalent network breaking', 'Only metallic bonding', 'No energy change ever'], 'A'),
      Q('Like dissolves like means:', ['Similar polarity often', 'Only acids', 'Only metals', 'Only gases'], 'A'),
      Q('Hydration shells surround:', ['Ions in water', 'Only electrons in metal', 'Only benzene', 'Only He'], 'A'),
      Q('Endothermic dissolution means:', ['Energy absorbed to dissolve', 'Always releases heat', 'No entropy change', 'Only for gases'], 'A'),
      Q('Water is good solvent for many ions because:', ['Polar molecule', 'Nonpolar only', 'No dipole', 'Only metallic'], 'A'),
    ],
    '1-2': [
      Q('Saturated solution:', ['Equilibrium with undissolved solute possible', 'Never contains ions', 'Always dilute', 'Only gas'], 'A'),
      Q('Increasing temperature often increases solubility of:', ['Many solid solutes', 'All gases in water always increase false gases decrease often', 'Only metals', 'Only oils always'], 'A'),
      Q('Solubility product Ksp applies to:', ['Slightly soluble ionic solids (intro)', 'All strong acids', 'Only gases', 'Only metals'], 'A'),
      Q('Common ion effect:', ['Decreases solubility of sparingly soluble salt', 'Always increases solubility', 'Only for gases', 'Only for metals'], 'A'),
      Q('Supersaturated solution is:', ['Unstable with more solute than saturated at that T', 'Always stable forever', 'Only gas', 'Only metal alloy'], 'A'),
    ],
    '1-3': [
      Q('Molarity M =', ['mol/L solution', 'mol/kg solvent', 'g/L only', 'pH'], 'A'),
      Q('Molality m =', ['mol/kg solvent', 'mol/L', 'g/mol', 'atm'], 'A'),
      Q('Percent by mass =', ['mass solute/mass solution × 100%', 'volume only', 'moles only', 'pH'], 'A'),
      Q('Dilution C₁V₁ = C₂V₂ applies when:', ['Moles solute conserved', 'Always endothermic', 'Only for gases', 'Only for metals'], 'A'),
      Q('1.0 M NaCl has:', ['1 mol NaCl per liter solution', '1 mol per kg water only', '1 gram per L', 'No ions'], 'A'),
    ],
    '1-4': [
      Q('Titration determines:', ['Unknown concentration using known', 'Only color of metal', 'Only density of gas', 'Nuclear mass'], 'A'),
      Q('Equivalence point in strong acid–strong base titration has pH:', ['About 7', 'Always 0', 'Always 14', 'Always 1'], 'A'),
      Q('Indicator changes color near:', ['End point near equivalence', 'Always pH 0', 'Only in metals', 'Only in gases'], 'A'),
      Q('Solution stoichiometry uses:', ['Mole ratio from balanced equation', 'Only density', 'Only color', 'Only pressure without T'], 'A'),
      Q('Preparing 1 L of 0.1 M solution needs:', ['0.1 mol solute in 1 L solution', '0.1 g always', '1 mol always', 'No calculation'], 'A'),
    ],
    '2-0': [
      Q('Important inorganic compounds include:', ['Oxides, acids, bases, salts', 'Only hydrocarbons', 'Only polymers', 'Only noble gases'], 'A'),
      Q('CO₂ is example of:', ['Oxide', 'Salt only', 'Alkane', 'Metal'], 'A'),
      Q('Inorganic chemistry supports:', ['Industry, agriculture, health', 'Only art', 'Only sports', 'Only music'], 'A'),
      Q('Acids and bases are inorganic when:', ['Typical mineral acids/bases context', 'Only in DNA', 'Only in proteins only organic', 'Never in water'], 'A'),
      Q('Salts form from:', ['Acid–base reactions often', 'Only combustion', 'Only sublimation', 'Only distillation of crude only'], 'A'),
    ],
    '2-1': [
      Q('Basic oxide example:', ['CaO', 'CO₂ only acidic', 'SO₃ acidic', 'N₂O₅ only'], 'A'),
      Q('Acidic oxide dissolves in water to form:', ['Acid often', 'Base always', 'Only salt directly', 'Only metal'], 'A'),
      Q('Amphoteric oxide example (survey):', ['Al₂O₃', 'Na₂O only basic', 'CO₂ only', 'Only Cl₂'], 'A'),
      Q('Metal oxide + water often gives:', ['Hydroxide', 'Only acid', 'Only gas H₂ always', 'Only salt without water'], 'A'),
      Q('Nonmetal oxide + water may give:', ['Oxoacid', 'Only metal hydroxide', 'Only ammonia always', 'Only alkane'], 'A'),
    ],
    '2-2': [
      Q('Strong acid in water:', ['Ionizes essentially completely (intro)', 'Never ionizes', 'Only forms covalent molecules', 'Only in gas phase'], 'A'),
      Q('HCl(aq) is:', ['Acid', 'Base', 'Salt', 'Metal'], 'A'),
      Q('pH < 7 means:', ['Acidic', 'Basic', 'Neutral always', 'No H⁺'], 'A'),
      Q('Litmus in acid turns:', ['Red', 'Blue', 'Green always', 'No change'], 'A'),
      Q('Acid + metal carbonate gives:', ['CO₂ gas often', 'Only O₂', 'Only H₂ always from all metals false', 'Only NaCl always'], 'A'),
    ],
    '2-3': [
      Q('Arrhenius base provides:', ['OH⁻ in water', 'H⁺ only', 'Only Cl₂', 'Only electrons in wire'], 'A'),
      Q('NaOH is:', ['Strong base', 'Weak acid', 'Salt only', 'Noble gas'], 'A'),
      Q('Neutralization:', ['H⁺ + OH⁻ → H₂O', 'Only redox', 'Only polymerization', 'Only cracking'], 'A'),
      Q('Bases feel slippery due to:', ['Reaction with skin oils (lab safety story)', 'Only IMF', 'Only metals', 'Only gases'], 'A'),
      Q('pH > 7 indicates:', ['Basic solution', 'Acidic', 'Always neutral', 'No ions'], 'A'),
    ],
    '2-4': [
      Q('Salt example:', ['NaCl', 'HCl only acid', 'NaOH only base', 'CH₄'], 'A'),
      Q('Precipitation forms:', ['Insoluble salt from solution', 'Only gases', 'Only metals', 'Only alloys'], 'A'),
      Q('Fertilizers may contain salts like:', ['Ammonium nitrate (survey)', 'Only gold', 'Only helium', 'Only diamond'], 'A'),
      Q('Electrolytes in sports drinks are:', ['Ions in solution', 'Only covalent oils', 'Only noble gases', 'Only metals solid'], 'A'),
      Q('Flame test colors relate to:', ['Metal ions in salts', 'Only covalent molecules always', 'Only polymers', 'Only alkanes'], 'A'),
    ],
    '3-0': [
      Q('Exothermic reaction:', ['Releases net energy', 'Absorbs only', 'No energy', 'Only nuclear'], 'A'),
      Q('Endothermic reaction:', ['Absorbs energy', 'Releases only', 'No change', 'Only physical always'], 'A'),
      Q('Enthalpy change ΔH < 0 means:', ['Exothermic', 'Endothermic', 'No reaction', 'Only gas'], 'A'),
      Q('Calorimetry measures:', ['Heat changes', 'Only mass', 'Only color', 'Only pressure without T'], 'A'),
      Q('Bond breaking is:', ['Endothermic step', 'Always exothermic', 'No energy', 'Only for metals'], 'A'),
    ],
    '3-1': [
      Q('Hess’s law says:', ['Enthalpy change depends on initial and final states', 'Only on path details always false', 'Only for gases', 'Only for metals'], 'A'),
      Q('Formation enthalpy is for:', ['Forming 1 mol compound from elements', 'Breaking all bonds only', 'Only ions', 'Only photons'], 'A'),
      Q('Combustion enthalpy is:', ['Exothermic for fuels typically', 'Always endothermic', 'Zero', 'Only for solids'], 'A'),
      Q('Activation energy is:', ['Barrier to start reaction', 'Total ΔH', 'Only for catalyst', 'Zero always'], 'A'),
      Q('Catalyst lowers:', ['Activation energy', 'ΔH', 'Equilibrium K', 'Mass'], 'A'),
    ],
    '3-2': [
      Q('Galvanic cell converts:', ['Chemical to electrical energy', 'Electrical to chemical only', 'Mass to light only', 'Heat to nucleus'], 'A'),
      Q('Anode in galvanic cell:', ['Oxidation site', 'Reduction only', 'No reaction', 'Only salt bridge'], 'A'),
      Q('Cathode in galvanic cell:', ['Reduction site', 'Oxidation only', 'Only anode', 'Only wire'], 'A'),
      Q('Salt bridge maintains:', ['Charge neutrality', 'Only temperature', 'Only volume', 'Only color'], 'A'),
      Q('Standard cell notation lists:', ['Anode | cathode convention (survey)', 'Only products', 'Only gases', 'Only metals liquid'], 'A'),
    ],
    '3-3': [
      Q('Electrolysis uses:', ['External electrical energy', 'Only spontaneous cell', 'Only heat', 'Only light'], 'A'),
      Q('Electrolysis of brine produces:', ['Cl₂, H₂, NaOH (survey)', 'Only Na metal always', 'Only O₂ from water only', 'Only salt solid'], 'A'),
      Q('At cathode in electrolysis:', ['Reduction occurs', 'Oxidation only', 'No reaction', 'Only anode'], 'A'),
      Q('Electroplating deposits metal by:', ['Reduction at cathode', 'Oxidation at anode only always', 'Only physical coating', 'Only distillation'], 'A'),
      Q('Molten NaCl electrolysis gives:', ['Na and Cl₂', 'Only H₂', 'Only O₂', 'Only water'], 'A'),
    ],
    '3-4': [
      Q('Rusting is:', ['Oxidation of iron', 'Reduction of iron', 'Only physical', 'Only acid-base'], 'A'),
      Q('Galvanizing protects iron with:', ['Zinc coating', 'Only paint only sometimes', 'Only gold', 'Only helium'], 'A'),
      Q('Sacrificial anode uses:', ['More reactive metal', 'Less reactive metal', 'Only carbon', 'Only oil'], 'A'),
      Q('Batteries are:', ['Electrochemical cells', 'Only capacitors always', 'Only resistors', 'Only transformers'], 'A'),
      Q('Corrosion prevention includes:', ['Coating, alloying, cathodic protection', 'Only heating', 'Only dissolving', 'Only combustion'], 'A'),
    ],
    '4-0': [
      Q('Metals generally:', ['Conduct electricity', 'Are brittle insulators', 'Are all gases', 'Never react'], 'A'),
      Q('Nonmetals may be:', ['Gases, liquids, or brittle solids', 'Only liquids metals', 'Only shiny conductors', 'Only in group 1'], 'A'),
      Q('Metalloids include:', ['Silicon', 'Only sodium', 'Only chlorine', 'Only iron'], 'A'),
      Q('Alloys are:', ['Metal mixtures', 'Only ionic salts', 'Only gases', 'Only hydrocarbons'], 'A'),
      Q('Ore is:', ['Mineral source of metal', 'Pure metal always', 'Only gas', 'Only acid'], 'A'),
    ],
    '4-1': [
      Q('Metallic bonding has:', ['Delocalized electrons', 'Only shared pairs between two atoms only', 'Only ionic transfer only', 'No electrons'], 'A'),
      Q('Malleability means:', ['Can be hammered into sheets', 'Shatters always', 'Only gases', 'Only ionic'], 'A'),
      Q('Good thermal conductor metals have:', ['Mobile electrons', 'Fixed ions only moving', 'Only water', 'Only oil'], 'A'),
      Q('Transition metals often show:', ['Variable oxidation states', 'Only +1 always', 'No color', 'Only gases'], 'A'),
      Q('Copper is used in wires because:', ['High electrical conductivity', 'Low density only reason false also ductile', 'Only magnetic', 'Only insulator'], 'A'),
    ],
    '4-2': [
      Q('Blast furnace reduces:', ['Iron ore with CO (survey)', 'Only NaCl', 'Only water', 'Only benzene'], 'A'),
      Q('Electrolysis extracts:', ['Very reactive metals like Na', 'Only gold from sand always', 'Only noble gases', 'Only oil'], 'A'),
      Q('Aluminum production uses:', ['Electrolysis of molten/alumina process (survey)', 'Only distillation', 'Only combustion', 'Only titration'], 'A'),
      Q('Recycling metals saves:', ['Energy and resources', 'Nothing', 'Only water color', 'Only sound'], 'A'),
      Q('Refining improves:', ['Purity of metal', 'Only color of gas', 'Only pH', 'Only boiling point of water'], 'A'),
    ],
    '4-3': [
      Q('Chlorine is:', ['Diatomic nonmetal gas', 'Alkali metal', 'Noble gas', 'Alkane'], 'A'),
      Q('Sulfur allotropes include:', ['Rhombic and monoclinic (survey)', 'Only diamond', 'Only NaCl', 'Only water'], 'A'),
      Q('Nonmetals often gain electrons to form:', ['Anions', 'Cations always', 'Only metals', 'Only alloys'], 'A'),
      Q('Phosphorus used in:', ['Fertilizers (survey)', 'Only steel wires', 'Only coins only', 'Only helium balloons'], 'A'),
      Q('Halogens are:', ['Group 17 elements', 'Group 1 metals', 'Noble gases', 'Only lanthanides'], 'A'),
    ],
    '4-4': [
      Q('Haber process makes:', ['Ammonia', 'Sulfuric acid only', 'Only NaCl', 'Only gasoline'], 'A'),
      Q('Contact process relates to:', ['Sulfuric acid production', 'Only ammonia', 'Only Na metal', 'Only methane'], 'A'),
      Q('Chlorine from brine electrolysis used in:', ['Water treatment (survey)', 'Only food flavor only false many uses', 'Only steel only', 'Only rubber only'], 'A'),
      Q('Nitrogen fixation converts:', ['N₂ to usable nitrogen compounds', 'Only CO₂', 'Only O₂', 'Only He'], 'A'),
      Q('Industrial chemistry supports Ethiopia via:', ['Fertilizer, materials, and health products', 'Only astrology', 'Ignoring safety', 'Avoiding measurement'], 'A'),
    ],
    '5-0': [
      Q('Hydrocarbons contain only:', ['C and H', 'O only', 'N only', 'Metals'], 'A'),
      Q('Methane formula:', ['CH₄', 'C₂H₆', 'C₆H₆', 'NaCl'], 'A'),
      Q('Fossil fuels are mainly:', ['Hydrocarbon mixtures', 'Only ionic salts', 'Only metals', 'Only noble gases'], 'A'),
      Q('Saturated hydrocarbons have:', ['Only single C–C bonds', 'Triple bonds only', 'Only ionic bonds', 'Only metals'], 'A'),
      Q('Organic chemistry studies:', ['Carbon compounds', 'Only rocks', 'Only metals', 'Only gases He'], 'A'),
    ],
    '5-1': [
      Q('Propane has:', ['3 carbons in chain', '2 carbons', '4 carbons', '6 carbons always benzene'], 'A'),
      Q('Alkane general formula:', ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙHₙ'], 'A'),
      Q('Complete combustion of alkane gives:', ['CO₂ and H₂O', 'Only CO always', 'Only C', 'Only H₂'], 'A'),
      Q('Branched alkane naming uses:', ['Longest chain and locants', 'Shortest chain always', 'Only color', 'Only mass'], 'A'),
      Q('Alkanes are relatively unreactive because:', ['Strong C–H and C–C σ bonds', 'Have π bonds', 'Are ionic', 'Are metals'], 'A'),
    ],
    '5-2': [
      Q('Ethene contains:', ['C=C double bond', 'Only single bonds', 'Triple bond only', 'Ionic lattice'], 'A'),
      Q('Addition reaction breaks:', ['π bond of alkene (intro)', 'Only σ in alkane easily', 'Nucleus', 'Only IMF in metal'], 'A'),
      Q('Markovnikov rule applies to:', ['HX addition to unsymmetrical alkenes (if taught)', 'All reactions', 'Only metals', 'Only salts'], 'A'),
      Q('Bromine water test with alkene:', ['Decolorizes', 'No change always', 'Only with metals', 'Only with salts'], 'A'),
      Q('Ethyne is:', ['Alkyne', 'Alkane', 'Alcohol', 'Salt'], 'A'),
    ],
    '5-3': [
      Q('Benzene is:', ['Aromatic hydrocarbon', 'Alkane only', 'Only ionic', 'Only metal'], 'A'),
      Q('Aromatic stability relates to:', ['Delocalized π electrons (survey)', 'Only σ bonds', 'Only ionic', 'Only IMF'], 'A'),
      Q('Compared to alkenes, benzene often:', ['Less reactive toward addition (resonance story)', 'More reactive always', 'Is ionic', 'Is metal'], 'A'),
      Q('C₆H₆ empirical formula:', ['CH', 'C₆H₆', 'CH₂', 'CH₄'], 'A'),
      Q('Arenes are:', ['Aromatic hydrocarbons', 'Only alkanes', 'Only alcohols', 'Only acids'], 'A'),
    ],
    '5-4': [
      Q('Fractional distillation separates crude oil by:', ['Boiling range', 'Color only', 'Magnetism', 'pH'], 'A'),
      Q('LPG contains mainly:', ['Propane/butane', 'Only methane pipeline always', 'Only benzene', 'Only NaCl'], 'A'),
      Q('Natural gas is mostly:', ['Methane', 'Only CO₂', 'Only O₂', 'Only N₂ only'], 'A'),
      Q('Cracking produces:', ['Shorter alkanes/alkenes', 'Only diamond', 'Only water', 'Only salt'], 'A'),
      Q('Petroleum fractions used for:', ['Fuels and chemical feedstocks', 'Only food', 'Only medicine only false many', 'Only soil'], 'A'),
    ],
  };

  if (banks[key]) return banks[key];
  return [
    Q(`Grade 10 Chemistry topic ${key} requires:`, ['Syllabus-aligned reasoning', 'Ignoring equations', 'Only memorizing colors', 'Avoiding moles'], 'A'),
    Q('Prefer answers that:', ['Match definitions taught', 'Contradict conservation', 'Ignore units', 'Use always/never without care'], 'A'),
    Q('Stoichiometry distractors fail when:', ['Mole ratios wrong', 'Words long', 'Ethiopia mentioned', 'Letter B'], 'A'),
    Q('Lab safety includes:', ['Goggles and labeled waste', 'Tasting reagents', 'Random disposal', 'No ventilation'], 'A'),
    Q('Chemistry supports development through:', ['Industry, agriculture, health', 'Only sports scores', 'Only music', 'Ignoring environment'], 'A'),
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
        `Entrance-exam style item (Grade 10 Chemistry), aligned to “${topicName}”.`,
    };
  });
}

module.exports = {
  buildExamQuestionsForTopic,
  EC_YEARS,
};
