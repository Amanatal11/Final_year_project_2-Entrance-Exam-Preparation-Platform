/**
 * Grade 10 Chemistry curriculum — Units 4–6 (Ethiopia MoE outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 4: Energy changes and electrochemistry',
    chapterDescription:
      'Thermochemical ideas, voltaic vs electrolytic cells, electrolysis, corrosion and everyday electrochemistry (survey).',
    topics: [
      {
        topicName: 'Introduction: energy changes in chemistry',
        topicDescription:
          'Potential vs kinetic framing; storing energy in bonds; qualitative enthalpy language.',
        topicObjectives: [
          'Distinguish energy stored from energy transferred during a process.',
          'Use exothermic/endothermic language for classroom observations.',
          'Interpret simple reaction energy diagrams from the textbook.',
        ],
      },
      {
        topicName: 'Energy changes during chemical reactions',
        topicDescription: 'Bond breaking/forming; activation energy and catalysis (survey).',
        topicObjectives: [
          'Relate evolution/absorption of heat to bond rearrangement at a qualitative level.',
          'Explain that catalysts change pathway but not overall enthalpy (introductory).',
        ],
      },
      {
        topicName: 'Electrochemical cells',
        topicDescription:
          'Voltaic cell parts—electrodes, electrolyte, salt bridge; spontaneous cell reactions (survey).',
        topicObjectives: [
          'Identify anode and cathode in simple voltaic cells.',
          'Link electron flow to oxidation/reduction half-reactions.',
          'Contrast voltaic cells with electrolysis that needs electrical input.',
        ],
      },
      {
        topicName: 'Electrolysis',
        topicDescription:
          'Electrical energy drives redox at electrodes; electrolysis of brine/water as examples.',
        topicObjectives: [
          'Describe oxidation at one electrode and reduction at the other in electrolytic setups.',
          'Give textbook examples tied to Ethiopian lab demonstrations.',
          'Name major industrial electrolysis contexts at survey level.',
        ],
      },
      {
        topicName: 'Applications and corrosion',
        topicDescription:
          'Batteries, electroplating, cathodic protection, rust mechanisms, and safe disposal.',
        topicObjectives: [
          'Give examples where electrochemistry is used daily (batteries, plating).',
          'Explain rust on iron qualitatively as an electrochemical process.',
          'Note safety/environment concerns for spills and wastes (introductory).',
        ],
      },
    ],
    exercises: [
      ex(0, 'Fuels', 'Fuels carry chemical energy largely in:', ['Random heat only', 'Chemical bonding arrangements', 'Nuclear masses only', 'Sound waves'], 1, 'Easy'),
      ex(1, 'Exothermic', 'Many combustion reactions feel hot because:', ['Net energy flows out to surroundings', 'Atoms disappear', 'No bonds rearrange', 'Mass becomes zero'], 0, 'Easy'),
      ex(2, 'Anode', 'In a voltaic cell, oxidation is assigned to the:', ['Anode', 'Cathode', 'Salt crystal alone', 'Voltmeter case'], 0, 'Medium'),
      ex(2, 'Cathode', 'Reduction gains electrons typically at:', ['Anode everywhere', 'Cathode', 'Only the air', 'The balance'], 1, 'Easy'),
      ex(3, 'Drive', 'Electrolysis is driven by:', ['Electrical supply', 'Spontaneous heat alone', 'Gravity alone', 'Diffusion alone'], 0, 'Easy'),
      ex(3, 'Brine', 'Electrolysis of concentrated brine is an industrial route to:', ['Only helium', 'Chlorine and alkali products (survey)', 'Diamond', 'Nitrogen only'], 1, 'Medium'),
      ex(4, 'Rust', 'Rust on iron needs mainly:', ['Helium atmosphere', 'Oxygen/moisture contact (survey)', 'Pure nitrogen only', 'No electrons'], 1, 'Easy'),
      ex(4, 'Galvanizing', 'A zinc coating can protect iron partly because zinc:', ['Melts instantly', 'Oxidizes more readily than iron (survey)', 'Is nonmetal', 'Stops gravity'], 1, 'Medium'),
      ex(1, 'Catalyst', 'A catalyst mainly lowers:', ['Activation energy path', 'Nuclear fusion barrier', 'Molar mass of products', 'All enthalpies to zero'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — Energy introduction',
        problems: [
          P('Chemists study energy changes to explain:', ['Only colour', 'Why reactions release/absorb heat and need conditions', 'Planet orbits only', 'Sound speed'], 'B'),
          P('Heat flowing into the reacting mixture suggests:', ['Often endothermic (intro)', 'No energy change', 'Nuclear splitting', 'Only freezing'], 'A'),
          P('Breaking chemical bonds typically:', ['Costs energy input', 'Always releases heat', 'Ignores Coulomb attraction', 'Only happens at 0 K'], 'A'),
          P('Forming bonds in products often:', ['Stores unlimited heat', 'Can release heat to surroundings (intro)', 'Breaks nucleus', 'Destroys atoms'], 'B'),
          P('Coffee-cup experiments estimate:', ['Ionization energy precisely', 'Heat exchange roughly (survey)', 'Nuclear masses', 'Only volume'], 'B'),
          P('Chemical potential energy sketches show:', ['Kinetic speeds only', 'Relative energy of reactants vs products (survey)', 'Planetary motion', 'Only sound'], 'B'),
          P('Enthalpy notation is:', ['Chosen convention to compare reactions', 'Only cooking units', 'Unrelated symbols', 'Only for gases'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Reaction energies',
        problems: [
          P('A cold dissolution that chills your hand tends to be:', ['Endothermic (intro)', 'Exothermic', 'No ΔH', 'Nuclear fusion'], 'A'),
          P('Activation energy is:', ['Reaction heat only', 'Energy barrier before rearrangement (intro)', 'Bond length', 'Voltage only'], 'B'),
          P('An energy diagram can show:', ['ΔH qualitative sign (intro)', 'Exact nuclear charge', 'Only colour', 'Only density'], 'A'),
          P('Catalysts speed reactions by:', ['Providing a faster pathway without changing overall ΔH (intro)', 'Consuming reactants stoichiometrically', 'Increasing atom count', 'Removing periodic table trends'], 'A'),
          P('Complete combustion liberates usable energy partly as:', ['X-rays only', 'Heat/light (survey)', 'Gravitational waves', 'Only pressure'], 'B'),
          P('Hess’s law viewpoint (survey): Enthalpy is a:', ['Random number', 'State function—path-independent sum (intro)', 'Speed only', 'Volume only'], 'B'),
          P('Exothermic at constant pressure often means ΔH:', ['Positive', 'Negative (intro wording)', 'Always zero', 'Undefined'], 'B'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Electrochemical cells',
        problems: [
          P('A voltaic (galvanic) cell converts:', ['Chemical → electrical energy (intro)', 'Electrical → only heat', 'Nuclear binding only', 'Only sound'], 'A'),
          P('Electrons traditionally leave oxidation at:', ['Cathode', 'Anode (intro)', 'Electrolyte only', 'Periodic table blocks'], 'B'),
          P('Salt bridge helps by:', ['Carrying electrons in metal', 'Allowing ions to maintain charge balance (survey)', 'Heating electrodes', 'Blocking all ions'], 'B'),
          P('Standard potentials compare:', ['Driving tendency for reduction half-reactions (survey)', 'Taste intensity', 'Nuclear masses', 'Only colour'], 'A'),
          P('In many Zn–Cu demos Cu strip is:', ['Anode oxidation', 'Cathode reduction (survey story)', 'Inert spectator always', 'Insulator'], 'B'),
          P('A fuel cell is conceptually:', ['Electrochemical energy conversion device (survey)', 'Only piston engine', 'Nuclear reactor', 'Only mechanical spring'], 'A'),
          P('Poor connections cause:', ['Lower internal resistance falsely', 'Wasted joules/heating joints (survey)', 'No current ever', 'Nuclear neutron flux'], 'B'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — Electrolysis',
        problems: [
          P('Electrolytic processes need:', ['External voltage source', 'No power ever', 'Only sunlight always', 'Catalyst replaces energy'], 'A'),
          P('Molten NaCl electrolysis famously yields:', ['Sodium metal and chlorine (survey)', 'Only water vapour', 'Iron metal', 'Nitrogen only'], 'A'),
          P('Industrial electrorefining of copper illustrates:', ['Using electrolysis to purify metals (survey)', 'Only roasting sulfides alone', 'Sublimation dyes', 'Nuclear bombardment décor'], 'A'),
          P('Overpotential means real cells:', ['Often need extra voltage versus ideal tables (survey)', 'Need zero volts always', 'Ignore kinetics entirely', 'Use only neutron flow'], 'A'),
          P('Electroplating chromium onto steel uses:', ['Electrolytic reduction of chromium ions onto surface', 'Only hammer plating', 'Nuclear reactors', 'Spontaneous rust'], 'A'),
          P('Inert graphite anodes resist:', ['Conducting electrons', 'Rapid dissolution in many aqueous setups (survey)', 'All voltage', 'Ion motion'], 'B'),
          P('Chlor-alkali industry links brine electrolysis to:', ['Chlorine/NaOH products (survey names)', 'Helium refining', 'Only bread baking', 'Steel blast furnace molten silica only'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Applications/corrosion',
        problems: [
          P('Sacrificial Mg/Zn blocks protect steel partly by corroding:', ['Preferentially (survey wording)', 'Never', 'After steel is plated with gold falsely', 'Only in vacuum'], 'A'),
          P('Cars lead-acid battery chemistry is:', ['Molten carbonate only', 'Sulfuric acid with lead oxide plates (survey)', 'Pure lithium dendrites necessarily', 'Helium coolant'], 'B'),
          P('Corrosion motivates:', ['Ignoring maintenance safely', 'Coatings alloys cathodic protections (survey)', 'Deleting textbooks', 'Only paint colour'], 'B'),
          P('Thin Cr₂O₃ on stainless idea is:', ['Thick bubbly acid heals everything', 'Passivation slowing further attack (survey)', 'Organic sugar glaze', 'Ionic helium'], 'B'),
          P('Magnesium combustion demos emphasize:', ['Eye protection/intense light (survey)', 'Tasting products', 'No oxygen involvement', 'No reaction'], 'A'),
          P('Lab waste mantra includes:', ['Dump acids randomly', 'Neutralize/recycle per school rules (survey)', 'Ignore gloves rules', 'No regulations anywhere'], 'B'),
          P('Painting iron delays rust mainly by:', ['Blocking O₂/H₂O access partly (survey)', 'Removing electrons magically', 'Heating endlessly', 'Nuclear shields'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 5: Metals and nonmetals',
    chapterDescription:
      'Contrast properties, metallurgy vignettes (carbon reduction, electrolysis extremes), extraction of important non-metals.',
    topics: [
      {
        topicName: 'Introduction: metals and nonmetals',
        topicDescription: 'Periodic location; metallic vs non-metallic character (survey).',
        topicObjectives: [
          'Locate metals and non-metals on a standard periodic sketch.',
          'Relate conductivity, luster, malleability to typical metals.',
          'Compare brittleness/insulating behaviour for many non-metals.',
        ],
      },
      {
        topicName: 'General properties of metals',
        topicDescription:
          'Electrical and thermal conductors; metallic luster; malleability/ductility; alloys.',
        topicObjectives: [
          'Identify everyday examples of conductivity and shaping of metals.',
          'Use electron-sea model language for conductivity briefly.',
          'Explain alloys as tuned properties versus pure metals (introductory).',
        ],
      },
      {
        topicName: 'Production (extraction and refining of metals)',
        topicDescription:
          'Ores roasting/reduction blast furnace vignette electrolysis for very reactive metals refining survey.',
        topicObjectives: [
          'Name reduction of metal oxides with carbon/CO typical of iron metallurgy.',
          'Recognize alkali/aluminium extremes often route through electrolysis.',
          'Discuss dust/energy/environment notes qualitatively.',
        ],
      },
      {
        topicName: 'General properties of nonmetals',
        topicDescription:
          'Insulators brittle molecular solids caveat graphite conducting layers halogens toxicity.',
        topicObjectives: [
          'Contrast allotropes like diamond vs graphite (conductivity caveat).',
          'Compare melting points tendency molecular vs metallic crystals qualitatively.',
          'Observe halogen toxicity and safe handling words from the syllabus.',
        ],
      },
      {
        topicName: 'Production (important non-metals)',
        topicDescription:
          'Industrial gases Cl₂ electrolysis liquefied air distillation ammonia preview survey.',
        topicObjectives: [
          'Identify brine electrolysis as key chlorine pathway (survey).',
          'Identify liquid-air distillation pathway for nitrogen/oxygen gases.',
          'Link hydrogen/chloride routes to ammonia/HCl fertilizers context later.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Conduct', 'Copper wire conducts mainly because:', ['Fixed ions hop', 'Delocalised electrons move (survey)', 'Only neutrons drift', 'No charged species'], 1, 'Easy'),
      ex(1, 'Ductility', 'Gold drawn into thin wire shows:', ['Ionic lattice shattering only', 'Metallic slipping of layers/electron sea cohesion (survey)', 'Sublimation', 'Hydrogen bonding in metal falsely'], 1, 'Medium'),
      ex(2, 'Iron', 'Iron in a blast furnace is reduced partly using:', ['Ozone only', 'Carbon monoxide pathway (survey)', 'Helium gas', 'Only water ice'], 1, 'Medium'),
      ex(3, 'Graphite', 'Graphite conducts in-plane largely due to:', ['Ionic Mg²⁺ flow', 'Delocalised π electrons (survey)', 'Metallic Al sea', 'No electrons'], 1, 'Medium'),
      ex(4, 'Chlorine', 'Industrial chlorine connects to electrolysis of:', ['Only sugar water', 'Brine (survey)', 'Pure nitrogen', 'Diamond feedstock'], 1, 'Easy'),
      ex(4, 'Air', 'Industrial O₂/N₂ gases often stem from:', ['Electrolysing helium', 'Liquefaction + fractional distillation of air', 'Filtering sea water salts only', 'Only photosynthesis reactors'], 1, 'Medium'),
      ex(3, 'Halogens', 'Teacher demos using Cl₂ emphasize:', ['Taste testing jokes', 'Ventilation goggles fume cupboard rules (survey)', 'No hazards ever', 'Open flames blindly'], 1, 'Easy'),
      ex(2, 'Sodium', 'Sodium metal is commercially obtained via:', ['Room-temperature charcoal smelting of NaOH', 'Electrolysis of molten Na⁺ salts (survey)', 'Hand picking ore only', 'Only dissolving marble'], 1, 'Medium'),
      ex(1, 'Alloy', 'Brass adjusts copper behaviour by alloying mainly with:', ['Silver only', 'Zinc typical example', 'Chlorine gas', 'Carbon only'], 1, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Metals vs nonmetals intro',
        problems: [
          P('Metals cluster mostly:', ['Far upper-right noble gases only', 'Left/mid periodic table staircase intro', 'Outside table', 'Only period 10'], 'B'),
          P('Compared with sulfur crystals many metals:', ['Conduct heat/electricity better (general intro)', 'Are always insulating', 'Boil lower always', 'Are always gases'], 'A'),
          P('Metallic character decreases across Period 4 left→right generally:', ['True (survey wording)', 'False', 'Unrelated trend', 'Only for helium'], 'A'),
          P('Non-metals like carbon form:', ['Never bonds', 'Covalent network/molecular allotropes (survey)', 'Only helium compounds', 'Ionic helium'], 'B'),
          P('Graphite caveat teaches:', ['Never conducts', 'Layer π electrons conduct (survey)', 'Only neutron flow', 'Nuclear reactors only'], 'B'),
          P('Semiconductors like Si sit:', ['Clearly metallic block only', 'Between metals/nonmetals chemically (survey)', 'Only radioactive row', 'Off table'], 'B'),
          P('Ionisation energy decreases down Group 1 generally:', ['True (survey intro)', 'False', 'Only for helium', 'Unrelated periodic law'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — Metal properties',
        problems: [
          P('Thermal and electrical conductivity in metals share storyline:', ['Ion drift in molecular ice chiefly', 'Mobile electron sea linkage (survey)', 'Only neutron conduction', 'No particles move'], 'B'),
          P('Steel conceptually contrasts pure iron partly by:', ['Carbon/other controlled additions tuning hardness (survey)', 'Being chemically pure helium', 'Removing all metals', 'Becoming iodine crystals'], 'A'),
          P('Displacement Zn(s) + Cu²⁺(aq):', ['No redox tale', 'Shows more active metals reduce ions (link)', 'Only halogens swapped', 'Nuclear neutron capture'], 'B'),
          P('Molten salts conduct because ions:', ['Are fixed', 'Become mobile carriers (survey)', 'Disappear completely', 'Only spin magnetically unrelated'], 'B'),
          P('Gold karat adjustments change:', ['Nuclear enrichment', 'Purity hardness colour trade-offs (survey intro)', 'Only boiling point helium', 'Helium nucleus charge'], 'B'),
          P('Metallic lustre interacts with:', ['Gamma decay only', 'Delocalised electrons/light (survey)', 'Only neutron glow false', 'IMF in ice only'],
            'B'),
          P('Ductility best matches:', ['Ionic brittle shatter hallmark', 'Drawn wires metals (survey)', 'Only helium balloons', 'Sublimed iodine only'], 'B'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Metal production',
        problems: [
          P('Ore is:', ['Chemically worthless rock always', 'Mineral source workable economically (survey)', 'Pure distilled bar only', 'Nitrogen only'], 'B'),
          P('Roasting sulfide concentrates can:', ['Produce oxides aiding reduction (survey intro)', 'Directly spit pure titanium wire always', 'Create neon only', 'Only dissolve halogens blindly'], 'A'),
          P('Using carbon/CO reduces many metal oxides because:', ['Carbon oxides gases leave shift (survey story)', 'Carbon is noble gas falsely', 'Oxygen hates metals falsely simplistic', 'Nuclear reactors drive it'], 'A'),
          P('Highly reactive aluminium often needs:', ['Blast charcoal only at 25 °C workable', 'Electrolytic reduction pathway (survey)', 'Hand stirring only', 'Only acid pickles'], 'B'),
          P('Environmental notes for mining/smelt:', ['Only pure aesthetic', 'Dust landscapes energy footprints qualitatively (survey)', 'No science-policy link', 'No mitigation ideas'], 'B'),
          P('Recycle metals:', ['Eliminates geology forever falsely', 'Saves refining energy/reduces wastes (survey)', 'Impossible chemically', 'Only increases ore demand always'], 'B'),
          P('Electro-refining vignette:', ['Purifies copper via electrolysis plating story (survey)', 'Only grills food', 'Makes gemstones only', 'Nuclear breeder reactors'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — Nonmetal properties',
        problems: [
          P('Diamond vs graphite both carbon differ by:', ['Identical conductivity always', 'Structure drives hardness conductivity (survey)', 'One is helium', 'Not allotropes'], 'B'),
          P('Yellow/white phosphorus safety awareness:', ['Taste casually', 'Toxic reacts needs careful ventilation storage (survey)', 'Totally benign toys', 'Heavier than uranium nuclei falsely'], 'B'),
          P('Sulfur rings vs sodium metal contrasts:', ['Sulfur often lower mp molecular solid intro', 'Sodium always insulating solid false', 'Sulfur conducts like Cu false', 'Sodium is noble gas falsely'], 'A'),
          P('Halogen vapours textbook pattern:', ['Cl₂ Br₂ I₂ homonuclear diatomics survey', 'He₂ stable diatomic falsely', 'All monatomic helium-like falsely general', 'Metallic conductors'], 'A'),
          P('I₂ sublimes readily showing:', ['Ionic conductivity solid lattice primarily', 'Molecular IMF vs thermal overcome (survey)', 'Metallic forging', 'Nuclear vapour falsely'], 'B'),
          P('Poor molecular solid conductors vs metals generally:', ['Higher free electron density in metals qualitative', 'Same mechanism always falsely', 'No difference', 'Metals fewer carriers falsely'], 'A'),
          P('Graphite electrodes conductive non-metal caveat links to:', ['σ-only framework only', 'π delocal layers (survey)', 'Mg²⁺ sea', 'He nuclei vibrations'], 'B'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Nonmetal production survey',
        problems: [
          P('Industrial oxygen often separates via:', ['Heating helium only', 'Air liquefaction + distillation boiling gaps (survey)', 'Only roasting bread', 'Only dissolving salts blindly'], 'B'),
          P('Hydrogen chloride gas dissolves industrially relevance ties to:', ['HCl aqueous chemistry fertilizer routes later (survey)', 'Only neutron moderators falsely', 'Helium refining', 'Diamond synthesis only'], 'A'),
          P('Methanol leak joke aside—real plants manage toxic gases requiring:', ['Taste testers', 'Engineering vents detectors training (survey)', 'No safeguards', 'Helium coolant domestic'], 'B'),
          P('Industrial CO₂ uses include:', ['Only human breath harvesting exclusively', 'Beverages refrigeration urea subsets (survey examples)', 'Nuclear coolant mainly falsely', 'Metallic plating only falsely'], 'B'),
          P('Responsible transition from some CFC era refrigerants owes to:', ['Stratospheric ozone lessons (survey mention)', 'No environmental science falsely', 'Metallic conductivity focus', 'Taste palettes'], 'A'),
          P('H₂S safety lesson:', ['Treat as poisonous corrosive ventilation training (survey)', 'Non-toxic freshener falsely', 'Noble coolant falsely', 'Edible sulfur vitamin falsely'], 'A'),
          P('Industrial nitrogen fixation awareness connects to fertilizers because plants need usable:', ['Diamond dust', 'Ammonia/nitrates uptake vs N₂ inertia (survey intro)', 'Helium fertilizers falsely', 'Chlorine only leaves'], 'B'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 6: Hydrocarbons and natural sources',
    chapterDescription:
      'Hydrocarbon families fractional distillation of petroleum methane natural gas uses introductory organic vocabulary.',
    topics: [
      {
        topicName: 'Introduction to hydrocarbons',
        topicDescription:
          'Chains rings saturated unsaturated classifications formula patterns survey.',
        topicObjectives: [
          'Identify hydrocarbon as skeleton of fuels solvents plastics preview.',
          'Recall general formulas alkane alkene alkynes taught in textbook.',
          'Relate branching to different properties (introductory).',
        ],
      },
      {
        topicName: 'Alkanes',
        topicDescription:
          'Straight/branched nomenclature simple examples substitution caution combustion stoichiometry.',
        topicObjectives: [
          'Name methane–butane skeletons consistent with Ethiopian textbook depth.',
          'Balance simple alkane combustion equations.',
          'State halogen substitution needs initiation conditions lab safety wording.',
        ],
      },
      {
        topicName: 'Alkenes and alkynes',
        topicDescription:
          'π bonds geometric cis/trans caveat addition reactions hydrogenation hydration survey polymer hook.',
        topicObjectives: [
          'Demonstrate unsaturation with bromine water decolourisation where taught.',
          'Contrast addition vs alkane substitution pattern qualitatively.',
          'Identify ethylene/ethyne uses welding fuel polymer precursors introductory.',
        ],
      },
      {
        topicName: 'Aromatic benzene survey',
        topicDescription:
          'Delocalisation stability caution toxic volatile solvents nomenclature o/m/p teaser optional depth.',
        topicObjectives: [
          'Differentiate benzene ring from saturated cyclohexane conceptually.',
          'Describe resonance shorthand as delocalisation not literal vibration.',
          'Follow lab rules for solvents ventilation flammability introductory.',
        ],
      },
      {
        topicName: 'Petroleum and natural gas',
        topicDescription:
          'Fractionating column fractions uses methane LNG safety plastics pollution stewardship survey.',
        topicObjectives: [
          'Map volatility to fractions gases naphtha kerosene diesel residue survey.',
          'Discuss methane household fuel role with safety tagging mercaptans context optional.',
          'Connect plastics wastes to stewardship reduce reuse recycle wording.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Hydrocarbon', 'Methane is a:', ['Hydrocarbon', 'Ionic lattice', 'Metallic alloy only', 'Pure halogen crystal'], 0, 'Easy'),
      ex(1, 'Formula', 'Straight-chain alkane general formula textbook pattern:', ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙHₙ', 'CnO'], 1, 'Easy'),
      ex(2, 'Unsaturation', 'Alkenes versus alkanes often show:', ['Fewer electrons', 'Carbon–carbon multiple bonds reactive pattern (survey)', 'No bonding difference', 'Ionic conductivity'], 1, 'Medium'),
      ex(3, 'Benzene', 'Benzene is aromatic because:', ['Saturated alkane cyclohexane identical falsely', 'Conjugated ring stability survey vs simple alkene intuition', 'Ionic hydrate', 'Metallic graphene always'], 1, 'Medium'),
      ex(4, 'Fractions', 'Lowest condensation near top vacuum distillation analogy intro fraction column:', ['Highest bp residue first', 'Light gases/low bp cuts first simplified intro', 'Only solids exit top falsely', 'No separation physics'], 1, 'Medium'),
      ex(4, 'Methane', 'Household natural gas is predominantly:', ['Liquid nitrogen cylinders', 'Methane mixture with odorant tagging intro optional', 'Chlorine tank falsely', 'Oxygen medical tank falsely'],
        1, 'Medium'),
      ex(1, 'Incomplete', 'Incomplete combustion risks include:', ['Only extra O₂', 'CO/soot hazardous products (survey)', 'No pollutants ever', 'Helium soot'],
        1,
        'Medium',
      ),
      ex(2, 'Test', 'Bromine water colour loss hints:', ['Substitution only sodium chloride', 'Addition to unsaturated sites (survey intro)', 'Nuclear neutron capture joking', 'precipitating AgCl only'],
        1,
        'Medium',
      ),
      ex(3, 'Drawings', 'Resonance structures show:', ['Electron oscillation physics literally', 'Delocalisation representation (survey)', 'Proton teleportation falsely', 'Ionic helium'],
        1,
        'Medium',
      ),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 6 Quiz 1 — Hydrocarbon intro',
        problems: [
          P('Hydrocarbons contain prominently:', ['Oxygen only metals only', 'Carbon and hydrogen (intro)', 'Helium uranium', 'Nitrogen oxide only'], 'B'),
          P('Aliphatic term contrasts frequently with aromatic in textbooks:', ['No meaning', 'Open-chain/non-aromatic wording (survey)', 'Only polymers', 'Nuclear reactors'], 'B'),
          P('Structural isomer count grows mainly because:', ['Chains can branch reorder same formula (survey intro)', 'No carbon atoms allowed', 'All molecules identical forcibly falsely', 'Nuclear masses differ always'], 'A'),
          P('Petroleum characterization intro:', ['Pure methane always only', 'Complex mixture distillable fractions (survey)', 'Ionic brine exclusively', 'Diamond slurry only'], 'B'),
          P('Hydrocarbon combustions liberate energies used for:', ['Only cooling homes always false general', 'Transport heat electricity contexts (survey)', 'Nuclear binding energy measure only', 'Helium refining only'], 'B'),
          P('Line-angle drawings hide implicit:', ['Hydrogen atoms on carbons skeletal convention (survey)', 'Nuclear neutron counts exact', 'All bond angles perfectly measured', 'Ionic lattice'], 'B'),
          P('Aliphatics include families such as:', ['Only noble gases falsely', 'Alkanes alkenes alkynes etc (survey bundle)', 'Only quartz minerals', 'Metallic alloys'], 'B'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 6 Quiz 2 — Alkanes',
        problems: [
          P('Methane electronic geometry textbook intro approximation:', ['Linear', 'Tetrahedral about carbon (survey)', 'Square planar', 'Octahedral gas'], 'B'),
          P('Ethane rotates about:', ['Carbon–oxygen triple bond falsely', 'C–C single σ linkage (survey intro)', 'Ionic Coulomb hopping', 'Nuclear tunnels'], 'B'),
          P('Complete combustion methane ideal products mainly:', ['Only carbon dust', 'CO₂ + H₂O (survey idealised wording)', 'N₂ fixation products only', 'He gas'], 'B'),
          P('Substitution needs caution because:', ['No hazards ever', 'Radical/light pathways can ignite mixtures (survey intro)', 'It never happens', 'It only makes diamonds'], 'B'),
          P('Boiling rises with alkane chain length partly due to:', ['Stronger London dispersion aggregates (survey intro)', 'Ionic hydration shells mainly', 'Metallic conductivity gains', 'Hydrogen bonding between alkanes falsely'], 'A'),
          P('Cycloalkanes versus open chains differ formula pattern intro reminder:', ['Identical endlessly', 'Ring closure adjusts H-count vs straight chain (survey mention)', 'Add oxygen falsely', 'Auto aromatic'], 'B'),
          P('Butane skeletal isomer example intro:', ['n-butane iso-butane wording (survey)', 'Benzene only', 'Silver chloride lattice', 'He₂ bonding'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 6 Quiz 3 — Alkenes alkynes',
        problems: [
          P('Ethylene common name denotes:', ['Ethyne falsely', 'Ethene (survey)', 'Ethane', 'Propene mismatch'], 'B'),
          P('Double bond simplistic bond picture textbook intro mentions:', ['Only σ', 'σ + π overlap (survey intro)', 'Ionic linkage', 'Metallic bands only'], 'B'),
          P('Hydrogenation saturates:', ['Removes triple/double converting to single framework (survey intro)', 'Creates triple bonds spontaneously falsely', 'Makes helium', 'Splits nucleus'], 'A'),
          P('Ethyne welding fuel story owes partly to:', ['Inert coolant property falsely', 'High heat combustion careful safety (survey intro)', 'Nuclear neutron showers falsely', 'No oxygen oxidant falsely'], 'B'),
          P('cis–trans distinctions require alkene prerequisite intro:', ['Double bond restricted rotation + differing substituents (survey caveat terminal alkenes less stereochemistry)', 'Helium substitutions', 'Ionic Mg lattices', 'No geometry limits falsely'], 'A'),
          P('Polymer precursor hook polyethylene ties to:', ['Ethylene addition polymerization teaser (survey)', 'NaCl crystallization mistakenly', 'Aluminium ore refining falsely', 'Benzene only'], 'A'),
          P('Bromine test colour loss contrasts alkanes because:', ['Alkenes add across π systems (survey intro)', 'Alkanes always precipitate silver chloride falsely simplistic', 'No reaction pathway ever falsely', 'Nuclear neutron capture falsely'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 6 Quiz 4 — Benzene survey',
        problems: [
          P('Delocalisation means:', ['Spread-out π electron density in the ring model (survey)', 'Nuclei physically bounce like springs literally', 'Ionic helium solution', 'Proton ladders only'], 'A'),
          P('Compared to alkene intuition benzene:', ['Adds Br₂ instantly like a simple alkene always', 'Resists careless addition teaching aromatic stability (survey)', 'Matches cyclohexane saturation exactly', 'Has no planar ring falsely'], 'B'),
          P('Proper handling of benzene solvents includes:', ['Taste/smell casually', 'Ventilation minimize inhalation/skin contact (survey)', 'Open sparks encouraged', 'No flammability concern falsely'], 'B'),
          P('Ortho meta para vocabulary maps:', ['MRI physics only confusing pun', 'Relative positions around a benzene ring (survey)', 'Ion charges on alkanes', 'Fuel octane ratings only'], 'B'),
          P('Compared with cyclohexane, benzene is introduced as:', ['Saturated twin', 'π-delocalised aromatic ring (survey)', 'Metal cluster', 'Ionic salt lattice'], 'B'),
          P('Kekulé-style alternating bonds are sketches; modern classes focus on:', ['Delocalisation (survey wording)', 'Literal electron racing', 'Ionic helium', 'No π bonding'], 'A'),
          P('Aromatic solvents require:', ['Snack-friendly aromas falsely', 'Ventilation/fire caution (survey)', 'No goggles ever', 'Taste-testing'], 'B'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 6 Quiz 5 — Petroleum natural gas',
        problems: [
          P('Fractional distillation separates crude fractions mainly by:', ['Boiling tendencies (survey)', 'Electrical colour', 'Nuclear masses', 'Taste salts'], 'A'),
          P('Light gases/low-boiling fractions appear toward column:', ['Hot residue pot only', 'Top region (survey intro map)', 'Only solid bottoms always false simplistic', 'Off-table'], 'B'),
          P('Octane ratings communicate chiefly:', ['Knock tendency vs branched reference fuels (survey intro)', 'Dye pigment only ', 'Diamond hardness scales', 'Soil acidity only'], 'A'),
          P('Methane dominates natural gas as:', ['Inert coolant for PCs generally false intro', 'Common fuel molecule (survey)', 'Chlorine analogue falsely', 'Medical oxygen falsely'], 'B'),
          P('Responsible polymer literacy encourages:', ['Unlimited dumping', 'Reduce reuse recycle awareness (survey)', 'Ignore wastes', 'Helium bans falsely'], 'B'),
          P('Leak safety for fuel gases motivates:', ['Odor tagging lessons optional Ethiopian textbook snippet', 'Taste-sniff detectors joking', 'Ignoring ventilation', 'No training'], 'A'),
          P('Environmental lessons link fossil fuels briefly to:', ['CO₂ footprint awareness succinct survey', 'Healing ozone instantly falsely', 'No combustion products ever falsely', 'Nuclear fusion reactors household falsely'], 'A'),
        ],
      },
    ],
  },
];

