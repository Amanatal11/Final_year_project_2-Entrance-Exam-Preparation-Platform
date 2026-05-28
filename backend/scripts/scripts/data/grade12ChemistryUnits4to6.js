/**
 * Grade 12 Chemistry curriculum — Units 4–6 (Natural stream, MoE Ethiopia–style outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 4: Energetics, chemical kinetics, and equilibrium',
    chapterDescription:
      'Thermochemistry, reaction rates, and reversible reactions with industrial and environmental links.',
    topics: [
      {
        topicName: 'Enthalpy and thermochemical equations',
        topicDescription: 'Endothermic vs exothermic; state symbols; calorimetry (introductory).',
        topicObjectives: [
          'Interpret the sign of ΔH for forward reactions.',
          'Perform simple enthalpy stoichiometry when given molar enthalpy data.',
        ],
      },
      {
        topicName: "Hess's law and bond enthalpies (introductory)",
        topicDescription: 'Combining steps; bond breaking vs bond forming (survey).',
        topicObjectives: [
          "Use Hess's law to obtain ΔH for a target reaction from known steps.",
          'Relate qualitative bond strength ideas to exothermic bond formation.',
        ],
      },
      {
        topicName: 'Collision theory and factors affecting rate',
        topicDescription: 'Temperature, concentration, surface area, catalysts; activation energy.',
        topicObjectives: [
          'Explain why higher temperature increases collision energy and frequency (introductory).',
          'Distinguish homogeneous and heterogeneous catalysis with one example each.',
        ],
      },
      {
        topicName: 'Chemical equilibrium',
        topicDescription: 'Dynamic equilibrium; Kc for homogeneous systems taught in class; temperature dependence of K.',
        topicObjectives: [
          'Write Kc expressions omitting pure solids/liquids when appropriate.',
          'State that K changes with temperature even though concentration stress affects Q.',
        ],
      },
      {
        topicName: "Le Châtelier's principle and industrial equilibrium",
        topicDescription: 'Shifts from concentration, pressure (gases), temperature; catalyst and rate vs position.',
        topicObjectives: [
          'Predict qualititative shift when a stress is applied.',
          'Explain why a catalyst speeds attainment without changing K.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Exo', 'A negative ΔH (forward) usually means the forward reaction is:', ['Exothermic', 'Endothermic', 'Isothermal only', 'At equilibrium only'], 0, 'Easy'),
      ex(0, 'Sym', 'State symbols in thermochemical equations help because:', ['Enthalpy depends on phase of each species', 'They change atomic mass', 'They show color', 'They replace moles'], 0, 'Easy'),
      ex(1, 'Hess', 'Enthalpy is a state function, so ΔH depends:', ['Only on initial and final states', 'On the detailed pathway always', 'Only on catalyst', 'On pressure alone always'], 0, 'Easy'),
      ex(1, 'Step', 'If a reaction is reversed, ΔH:', ['Changes sign', 'Doubles', 'Halves', 'Becomes zero'], 0, 'Easy'),
      ex(2, 'Cat', 'A catalyst increases rate mainly by:', ['Lowering activation energy (alternative pathway)', 'Changing ΔH of reaction', 'Removing products', 'Increasing temperature automatically'], 0, 'Easy'),
      ex(2, 'T', 'Higher temperature usually increases rate because:', ['More molecular collisions are energetic enough to exceed Ea', 'It lowers activation energy always', 'It removes equilibrium', 'It doubles atomic mass'], 0, 'Medium'),
      ex(3, 'Q', 'If Q < K, the net reaction proceeds:', ['Forward (toward products) until Q reaches K at that T', 'Reverse only', 'Not at all', 'Equally both ways'], 0, 'Medium'),
      ex(3, 'Solid', 'Pure solids are often omitted from Kc because:', ['Their activities are taken as unity in the standard state convention', 'They have zero mass', 'They do not exist at equilibrium', 'They consume all gas'], 0, 'Medium'),
      ex(4, 'LCH', 'For an exothermic forward reaction, adding heat (increasing T) shifts equilibrium:', ['Left (toward reactants) in the classic Le Châtelier story', 'Right always', 'Not at all', 'Only if a catalyst is present'], 0, 'Medium'),
      ex(4, 'Cat2', 'A catalyst in a reversible system:', ['Speeds both forward and reverse; same equilibrium position', 'Increases K always', 'Removes products', 'Stops reverse reaction'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — Enthalpy',
        problems: [
          P('An endothermic reaction absorbs heat and has:', ['Positive ΔH (forward) in common sign convention', 'Negative ΔH always', 'Zero ΔH', 'Undefined ΔH'], 'A', ''),
          P('Standard formation enthalpies are defined with substances in:', ['Specified reference states (elements in standard states)', 'Any random phase', 'Plasma only', 'Absolute zero always'], 'A', ''),
          P('Measuring heat at constant pressure often approximates:', ['ΔH for the reaction system (intro calorimetry)', 'ΔS only', 'Activation energy only', 'Lattice energy directly always'], 'A', ''),
          P('Bond breaking is typically:', ['Endothermic (requires energy input)', 'Exothermic always', 'Zero energy always', 'Only for ionic bonds'], 'A', ''),
          P('Latent heat of fusion refers to energy for:', ['Solid ⇌ liquid transition at melting point', 'Liquid to gas only', 'Solid to gas only', 'Nuclear fusion'], 'A', ''),
          P('Nutritional energy labels relate to:', ['Combustion-like oxidation of foods in metabolism (simplified)', 'Nuclear binding energy', 'Gravitational potential only', 'Electronegativity'], 'A', ''),
          P('Enthalpy of neutralization for strong acid + strong base is often:', ['Roughly similar per mole of water formed (survey-level pattern)', 'Always zero', 'Always negative with huge variation only', 'Positive always'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Hess / bonds',
        problems: [
          P('If ΔH for (A→B) is +50 kJ, then for (B→A) ΔH is:', ['−50 kJ (sign reversal)', '+50 kJ', '0 kJ', '100 kJ'], 'A', ''),
          P('Multiplying a reaction by 2 multiplies ΔH by:', ['2', '4', '1/2', '0'], 'A', ''),
          P('Average bond enthalpy estimates are uncertain because:', ['Exact environment and bond order vary molecule to molecule', 'Bonds never break', 'Only ionic bonds exist', 'All molecules are identical'], 'A', ''),
          P('Hess cycles help find ΔH when:', ['Direct measurement is difficult but related steps are known', 'No data exist at all', 'Temperature is absolute zero', 'Only gases are involved always'], 'A', ''),
          P('Lattice energy in an ionic model reflects:', ['Attraction between ions in the crystal lattice', 'Only covalent bonds', 'Electron affinity of metals only', 'Sound speed'], 'A', ''),
          P('ΔH and ΔU differ partly because of:', ['PV work for gases when volume changes (first law context)', 'Nuclear mass defect only', 'Color of compounds', 'Orbital shapes only'], 'A', ''),
          P('Bond formation from separated atoms is typically:', ['Exothermic (energy released)', 'Endothermic always', 'Zero always', 'Only for nitrogen'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Kinetics',
        problems: [
          P('The rate law must be determined by:', ['Experiment (except known elementary steps)', 'Balanced equation coefficients always', 'Molecular mass', 'Periodic table group'], 'A', ''),
          P('Activation energy is:', ['Energy barrier between reactants and transition state', 'Same as ΔH always', 'Always zero', 'Only for photochemical reactions'], 'A', ''),
          P('A homogeneous catalyst is in:', ['The same phase as reactants (often dissolved)', 'Always a different phase', 'Always a solid surface', 'Outer space only'], 'A', ''),
          P('Increasing surface area of a solid reactant usually:', ['Increases rate (more collisions at the interface)', 'Decreases rate always', 'Stops reaction', 'Changes K only'], 'A', ''),
          P('Half-life for a first-order reaction:', ['Does not depend on initial concentration', 'Depends linearly on initial concentration', 'Is zero always', 'Equals activation energy'], 'A', ''),
          P('Arrhenius behavior implies rate constant k:', ['Increases with temperature (typical)', 'Decreases with temperature always', 'Is constant with temperature', 'Depends only on pressure'], 'A', ''),
          P('Catalysts participate by:', ['Providing a lower-energy pathway; regenerated overall', 'Being consumed completely every time', 'Increasing ΔH', 'Removing equilibrium'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — Equilibrium',
        problems: [
          P('At equilibrium for a reversible reaction:', ['Forward rate equals reverse rate (dynamic)', 'All concentrations are zero', 'Only products exist', 'Q is always 0'], 'A', ''),
          P('Kc depends strongly on:', ['Temperature', 'Initial concentrations only', 'Catalyst choice', 'Container shape'], 'A', ''),
          P('If pure solids are present, their concentrations:', ['Are omitted from K as activities ≈1 in standard convention', 'Must be infinity', 'Equal K always', 'Equal zero'], 'A', ''),
          P('Kp and Kc relate for ideal gases by a factor involving:', ['(RT)^Δn where Δn is change in moles of gas (if taught)', 'Only atomic mass', 'Pressure in atm only always wrong context', 'Avogadro constant only'], 'A', ''),
          P('A very large K means:', ['Products favored at standard-state ratio (qualitative)', 'Reactants favored', 'No reaction', 'Equal moles always'], 'A', ''),
          P('Adding reactant to a gaseous equilibrium at constant V tends to:', ['Shift forward to partially use added reactant (Le Châtelier)', 'Shift reverse only', 'Not change anything', 'Change K instantly'], 'A', ''),
          P('Heterogeneous equilibrium example:', ['CaCO3(s) ⇌ CaO(s) + CO2(g) with K involving CO2 pressure', 'Only all-gas systems', 'Only aqueous ions', 'Nuclear decay'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Le Châtelier & industry',
        problems: [
          P('Removing a gaseous product continuously from a reactor:', ['Drives the net reaction toward more product formation', 'Stops all reaction', 'Raises K', 'Lowers temperature only'], 'A', ''),
          P('Increasing total pressure by decreasing volume (ideal gases) shifts toward:', ['The side with fewer moles of gas (when applicable)', 'Always products', 'Always reactants', 'Never changes equilibrium'], 'A', ''),
          P('A catalyst in Haber-style synthesis:', ['Speeds reaching equilibrium; does not change K at given T', 'Increases equilibrium NH3 fraction at same T always', 'Removes N2', 'Eliminates reverse reaction'], 'A', ''),
          P('For endothermic forward reaction, raising T:', ['Increases K (typically) and favors products enthalpically (van’t Hoff idea)', 'Always decreases K', 'Has no effect on K', 'Violates energy conservation'], 'A', ''),
          P('Inert gas added at constant total volume (ideal gas reaction mixture):', ['Does not change partial pressures of reactants/products (no shift)', 'Always shifts right', 'Halves K', 'Doubles all rates only'], 'A', ''),
          P('Simultaneous equilibria in industry require:', ['Engineering design (recycle, separation), not only textbook K', 'One equation only', 'No kinetics consideration ever', 'Zero energy input'], 'A', ''),
          P('Compromise temperature in ammonia synthesis balances:', ['Rate (higher T) vs equilibrium yield (exothermic favors lower T)', 'Only pressure', 'Only catalyst mass', 'Moon phase'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 5: Acid–base equilibria and electrochemistry',
    chapterDescription:
      'pH, buffers, titration ideas; redox and electrochemical cells linked to practical technologies.',
    topics: [
      {
        topicName: 'Acid–base theories and pH',
        topicDescription: 'Arrhenius and Brønsted–Lowry; Kw; strong vs weak acids.',
        topicObjectives: [
          'Calculate pH for strong acid/base solutions at typical dilutions (as taught).',
          'Recognize conjugate acid–base pairs.',
        ],
      },
      {
        topicName: 'Buffer solutions',
        topicDescription: 'Weak acid + conjugate base; Henderson–Hasselbalch (introductory).',
        topicObjectives: [
          'Explain buffering with small additions of strong acid or base.',
          'State limits when buffer capacity is exceeded.',
        ],
      },
      {
        topicName: 'Acid–base titration (survey)',
        topicDescription: 'Equivalence point; indicators; curve shapes (strong–strong vs weak–strong conceptually).',
        topicObjectives: [
          'Differentiate equivalence point and indicator endpoint.',
          'Relate indicator pKa to steep region of titration curve.',
        ],
      },
      {
        topicName: 'Redox and oxidation numbers',
        topicDescription: 'Rules for oxidation states; balancing redox in acidic medium (as taught).',
        topicObjectives: [
          'Assign oxidation numbers in simple compounds and ions.',
          'Identify what is oxidized and what is reduced.',
        ],
      },
      {
        topicName: 'Galvanic and electrolytic cells (survey)',
        topicDescription: 'Cell notation intro; electrolysis of molten salts; electroplating idea.',
        topicObjectives: [
          'Relate spontaneous reactions to voltaic cells qualitatively.',
          'Describe electrolysis of molten NaCl at overview level.',
        ],
      },
    ],
    exercises: [
      ex(0, 'pH', 'pH = −log[H+] uses [H+] in mol/L for:', ['Dilute aqueous solutions (idealized)', 'Pure ethanol', 'Solid NaCl only', 'Any phase always'], 0, 'Easy'),
      ex(0, 'Kw', 'At 25 °C, Kw ≈ 1.0×10−14 implies neutral water has [H+] about:', ['10−7 M', '1 M', '0 M exactly', '10−14 M always wrong context'], 0, 'Medium'),
      ex(1, 'Buf', 'A buffer contains appreciable amounts of:', ['A weak acid and its conjugate base (or related pair)', 'Only strong acid', 'Only NaCl always', 'Only water'], 0, 'Easy'),
      ex(1, 'HH', 'The Henderson–Hasselbalch equation links pH to:', ['pKa and log([A−]/[HA]) (introductory)', 'Only temperature', 'Only gas pressure', 'Nuclear Q value'], 0, 'Medium'),
      ex(2, 'Eq', 'Equivalence point means:', ['Titrant amount matches stoichiometric requirement for analyte', 'Indicator changes color only', 'pH is always 7', 'Reaction is half done'], 0, 'Easy'),
      ex(3, 'OX', 'In 2Na + Cl2 → 2NaCl, sodium is:', ['Oxidized (loses electrons)', 'Reduced', 'A spectator', 'Neither'], 0, 'Easy'),
      ex(3, 'Nox', 'The oxidation number of elemental Cl2 is:', ['0', '−1', '+1', '+7'], 0, 'Easy'),
      ex(4, 'Voltaic', 'In a galvanic cell, spontaneous chemical reaction produces:', ['Electrical energy (useful work) in idealized link', 'Always heat only', 'Only light', 'No electron flow'], 0, 'Easy'),
      ex(4, 'Ely', 'Electrolysis of molten NaCl yields:', ['Na(l) at cathode and Cl2(g) at anode (survey)', 'NaOH in molten NaCl without water (different process)', 'Hydrogen only', 'Oxygen only'], 0, 'Medium'),
      ex(4, 'Plate', 'Electroplating deposits metal on the:', ['Cathode (reduction of metal ions)', 'Anode always', 'Salt bridge only', 'Air electrode'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Acids & pH',
        problems: [
          P('A Brønsted acid is a:', ['Proton donor', 'Proton acceptor (that is a Brønsted base)', 'Electron pair donor (Lewis base)', 'Neutron source'], 'A', ''),
          P('Strong acids in water dissociate:', ['Almost completely (idealized)', 'Not at all', 'Exactly 50%', 'Only in gas phase'], 'A', ''),
          P('pKa is related to Ka by:', ['pKa = −log Ka', 'pKa = Ka', 'pKa = 1/Ka', 'pKa = log Ka'], 'A', ''),
          P('The conjugate base of a strong acid is:', ['Very weak (poor proton acceptor in water)', 'Very strong always', 'Always OH−', 'H3O+'], 'A', ''),
          P('Adding common-ion conjugate base to a weak acid solution:', ['Lowers dissociation of the weak acid (Le Châtelier)', 'Increases dissociation always', 'Removes all H+', 'Doubles Kw'], 'A', ''),
          P('Polyprotic acids have:', ['Multiple Ka values (Ka1, Ka2, …)', 'Only one Ka always', 'No dissociation', 'Ka equal to Kw always'], 'A', ''),
          P('NH4Cl solution is generally:', ['Acidic, because NH4+ can donate protons', 'Basic always', 'Neutral always', 'pH 14'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — Buffers',
        problems: [
          P('Buffer capacity is highest when:', ['[weak acid] ≈ [conjugate base] (often near pKa)', 'Acid is zero', 'Base is zero', 'Solution is infinitely dilute'], 'A', ''),
          P('Blood bicarbonate system helps stabilize:', ['pH near physiological range (survey)', 'Blood pressure only', 'O2 partial pressure only', 'Glucose only'], 'A', ''),
          P('A buffer fails when:', ['Strong acid/base overwhelms buffering components', 'Temperature is 25 °C', 'Water is present', 'Ions exist'], 'A', ''),
          P('The Henderson–Hasselbalch approximation works best when:', ['Both [HA] and [A−] are reasonably large and not extremely dilute', 'Only strong acid is present', 'Only pure water', 'At the sun’s core'], 'A', ''),
          P('Phosphate species in cells can buffer near:', ['Physiological pH (depending on ratio)', 'pH 1 only', 'pH 14 only', 'Only frozen samples'], 'A', ''),
          P('Tris buffer (if introduced) is used partly because:', ['Its pKa can be near biological pH in many formulations', 'It is a strong acid', 'It precipitates all proteins', 'It has pKa near 0'], 'A', ''),
          P('Ocean acidification is linked to increased:', ['Dissolved CO2 forming carbonic acid (simplified story)', 'O2 partial pressure only', 'NaCl precipitation in air', 'N2 fixation'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Titration',
        problems: [
          P('The equivalence point is defined by:', ['Stoichiometric completion of the acid–base reaction', 'First color change always', 'pH 7 always', 'Halfway volume only'], 'A', ''),
          P('For weak acid + strong base titration, the equivalence pH is:', ['Generally > 7 (conjugate base hydrolyzes)', 'Always 7', 'Always < 7', 'Always 14'], 'A', ''),
          P('An indicator is chosen so its:', ['pKa is near the steep pH change region', 'Color is pink always', 'mass is lowest', 'density matches water'], 'A', ''),
          P('A strong acid–strong base titration equivalence pH at 25 °C is about:', ['7 (neutral salt, NaCl type)', 'Always below 7', 'Always above 7', 'Undefined'], 'A', ''),
          P('Primary standards for acid–base work include:', ['KarHP (KHP) for standardizing bases often', 'NaOH solid as weighed directly always (hygroscopic)', 'Concentrated HCl as weighed primary usually not', 'Tap water'], 'A', ''),
          P('Half-equivalence for weak acid vs strong base often gives:', ['pH ≈ pKa (when [HA]≈[A−])', 'pH = 0', 'pH = 14', 'pH random'], 'A', ''),
          P('Titration curve steepness near equivalence reflects:', ['Rapid pH change per drop when buffering is gone', 'Flat pH always', 'No reaction', 'Solid forming only'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — Redox',
        problems: [
          P('Oxidation involves:', ['Increase in oxidation number (electron loss overall)', 'Decrease in oxidation number always', 'No electron transfer', 'Only protons moving'], 'A', ''),
          P('In MnO4− in acidic medium, Mn is typically reduced; Mn oxidation number changes from:', ['+7 downward (when reduced)', '+7 upward always', '0 only', '+4 only'], 'A', ''),
          P('The oxidizing agent:', ['Is reduced (gains electrons)', 'Is oxidized always', 'Never changes', 'Always Na+'], 'A', ''),
          P('Balancing redox balances:', ['Atoms and charge (electrons) with specified medium method', 'Only mass', 'Only volume', 'Only color'], 'A', ''),
          P('Standard reduction potentials compare:', ['Tendency of half-reactions to gain electrons (at standard conditions)', 'Speed of reaction always', 'pH only', 'Boiling points'], 'A', ''),
          P('In rusting of iron, iron is:', ['Oxidized', 'Reduced', 'Neither', 'Nuclear transmuted'], 'A', ''),
          P('Disproportionation has the same element:', ['Oxidized and reduced in the same process', 'Only oxidized', 'Only reduced', 'Unchanged in two products'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Cells & electrolysis',
        problems: [
          P('In a voltaic cell, electrons in the external wire flow:', ['From anode to cathode (by conventional current confusion note: electrons from anode)', 'From cathode to anode always', 'They do not flow', 'Only inside electrolyte'], 'A', ''),
          P('Electrolysis needs:', ['External voltage to drive nonspontaneous reaction', 'No energy input', 'Only sunlight always', 'Gravity'], 'A', ''),
          P('Cathode in any cell system is where:', ['Reduction occurs (by definition)', 'Oxidation always occurs', 'Salt always crystallizes', 'Pressure is zero'], 'A', ''),
          P('Molten NaCl electrolysis avoids:', ['Competing water electrolysis products from aqueous brine (different products)', 'All chloride oxidation', 'Electron flow', 'Energy use'], 'A', ''),
          P('Mass deposited in electrolysis relates to charge through:', ['Faraday’s laws (stoichiometry of electrons)', 'Ideal gas law only', 'Hess’s law only', 'pH formula'], 'A', ''),
          P('Aluminum metal is produced industrially by:', ['Electrolysis of alumina in molten cryolite (Hall–Héroult)', 'Smelting with coke only like iron', 'Photosynthesis', 'Distillation of bauxite'], 'A', ''),
          P('Sacrificial anode protection uses:', ['A more easily oxidized metal to protect steel', 'Gold plating on steel always', 'Plastic wrap', 'Higher voltage always'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 6: Industrial chemistry, nuclear chemistry, and environmental chemistry',
    chapterDescription:
      'Large-scale processes, nuclear change, pollution, and sustainable chemistry aligned with national development.',
    topics: [
      {
        topicName: 'Ammonia, nitric acid, and fertilizers (survey)',
        topicDescription: 'Haber process trade-offs; Ostwald steps overview; fertilizer use and runoff awareness.',
        topicObjectives: [
          'Explain qualitatively why moderate T and high P are used in ammonia synthesis.',
          'Link nitrate use to productivity and to water-quality risks.',
        ],
      },
      {
        topicName: 'Sulfuric acid and the Contact process (survey)',
        topicDescription: 'SO2 → SO3 over catalyst; absorption to acid; safety and materials.',
        topicObjectives: [
          'Recognize the catalytic oxidation step in sulfuric acid manufacture.',
          'Treat concentrated acids with respect in lab and industry stories.',
        ],
      },
      {
        topicName: 'Chlor-alkali and metal extraction (survey)',
        topicDescription: 'Electrolysis of brine (products overview); electrolytic reduction for reactive metals.',
        topicObjectives: [
          'Name typical products of membrane chlor-alkali plants (conceptual).',
          'Contrast blast-furnace iron with electrolytic aluminum at overview level.',
        ],
      },
      {
        topicName: 'Nuclear chemistry — radioactivity',
        topicDescription: 'α, β, γ; half-life; balancing simple nuclear equations.',
        topicObjectives: [
          'Conserve mass number and charge in nuclear equations.',
          'Interpret half-life as a statistical property of many atoms.',
        ],
      },
      {
        topicName: 'Environmental chemistry and green chemistry (survey)',
        topicDescription: 'Air/water pollutants; greenhouse effect (intro); atom economy and waste reduction.',
        topicObjectives: [
          'Give one industrial and one household example of chemical pollution prevention.',
          'Calculate simple atom economy if given a reaction scheme (as taught).',
        ],
      },
    ],
    exercises: [
      ex(0, 'Haber', 'The Haber process for NH3 uses a catalyst such as:', ['Promoted iron surfaces (classical)', 'Pure gold mesh always', 'Enzymes only', 'Ice'], 0, 'Easy'),
      ex(0, 'Runoff', 'Excess nitrate fertilizer can contribute to:', ['Eutrophication in surface waters', 'Stratospheric ozone formation', 'Diamond synthesis', 'Argon increase in air'], 0, 'Easy'),
      ex(1, 'V2O5', 'In the Contact process, SO2 oxidation often uses:', ['V2O5 catalyst on supports', 'Iron catalyst (haber confusion)', 'Platinum only always', 'No catalyst'], 0, 'Easy'),
      ex(1, 'Oleum', 'Oleum can be described as:', ['SO3 dissolved in sulfuric acid (shipping concentrated systems)', 'Pure water', 'NaCl brine', 'Liquid nitrogen'], 0, 'Medium'),
      ex(2, 'Chlor', 'Membrane chlor-alkali of brine produces among others:', ['Cl2, H2, NaOH (product mix depends on cell design)', 'Only sodium metal', 'Only oxygen', 'Diamond'], 0, 'Medium'),
      ex(2, 'Al', 'Industrial aluminum production relies on:', ['Electrolysis of alumina dissolved in molten cryolite-type bath', 'Blast furnace reduction with coke alone', 'Photosynthesis', 'Filtration of sea water'], 0, 'Easy'),
      ex(3, 'Alpha', 'An alpha particle corresponds to:', ['A 4He nucleus (2p + 2n)', 'An electron', 'A positron only', 'A neutrino only'], 0, 'Easy'),
      ex(3, 'Half', 'After one half-life, a sample of a pure radionuclide has about:', ['Half of the atoms remaining (on average, large sample)', 'All atoms decayed', 'Twice the atoms', 'Zero activity'], 0, 'Easy'),
      ex(4, 'GHG', 'CO2 contributes to the greenhouse effect because it:', ['Absorbs and re-emits infrared radiation', 'Blocks all sunlight', 'Increases O2 fraction', 'Eliminates water vapor'], 0, 'Easy'),
      ex(4, 'AtomE', 'Atom economy = (mass of desired product / mass of all reactants) × 100% for:', ['Assessing waste in a synthesis (green chemistry)', 'Measuring pH', 'Nuclear Q value', 'Cell voltage'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 6 Quiz 1 — Ammonia & fertilizers',
        problems: [
          P('High pressure favors NH3 formation in Haber because:', ['Fewer moles of gas on product side (4 → 2 moles as usually written)', 'Pressure destroys catalyst', 'N2 becomes liquid always', 'Heat is removed by pressure'], 'A', ''),
          P('Moderate temperatures in Haber balance:', ['Rate vs equilibrium yield for the exothermic forward reaction', 'Only rate', 'Only entropy of the universe only', 'Moon phase'], 'A', ''),
          P('Nitric acid manufacture ties to ammonia as a:', ['Feedstock for oxidation steps (Ostwald route, survey)', 'Inert diluent', 'Catalyst for water', 'Fuel in cars only'], 'A', ''),
          P('Urea is a nitrogen fertilizer because:', ['It supplies nitrogen to soil after hydrolysis/microbial action (survey)', 'It is pure carbon', 'It removes phosphate', 'It is insoluble always'], 'A', ''),
          P('Best management to reduce nitrate runoff includes:', ['Matching application to crop need and timing (conceptual)', 'Applying unlimited fertilizer always', 'Ignoring soil tests', 'Removing all crops'], 'A', ''),
          P('Industrial catalyst poisoning can occur from:', ['Sulfur compounds disabling active sites (example class)', 'Pure N2 always', 'Water vapor always harmless false context-dependent', 'Students watching'], 'A', ''),
          P('World food production benefited from ammonia synthesis via:', ['Affordable nitrogen fertilizer increasing yields (with environmental tradeoffs)', 'Removing oxygen from air', 'Making diamonds', 'Eliminating all bacteria'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 6 Quiz 2 — Sulfuric acid',
        problems: [
          P('SO2 → SO3 is exothermic; lowering T improves equilibrium yield but:', ['May slow kinetics; catalyst and multistage converters help in practice', 'Instantly stops all flow', 'Eliminates need for catalyst', 'Raises K to infinity'], 'A', ''),
          P('Concentrated sulfuric acid is dangerous because it is:', ['Strongly dehydrating and corrosive', 'Nonreactive always', 'A weak acid always', 'Radioactive'], 'A', ''),
          P('When diluting concentrated sulfuric acid, add:', ['Acid to water slowly (not the reverse)', 'Water to acid quickly', 'Equal volumes blindly', 'Oil first'], 'A', ''),
          P('Environmental issue tied to SO2 emissions includes:', ['Acid rain precursor chemistry in the atmosphere', 'Ozone layer creation in stratosphere false different chemistry', 'Increasing ocean NaCl', 'Diamond dust'], 'A', ''),
          P('Contact process ultimately makes sulfuric acid by:', ['Absorbing SO3 into sulfuric acid/water systems (engineering details vary)', 'Freezing SO2 only', 'Only burning sulfur in open air with no control', 'Electrolysis of sugar'], 'A', ''),
          P('Vanadium catalyst role is to:', ['Speed the oxidation of SO2 to SO3', 'Remove all O2 from air', 'Make glass', 'Cool the converter'], 'A', ''),
          P('Oleum helps move SO3 as:', ['Forms that are easier to handle/ship in some plants (survey)', 'A gas only always', 'Pure metal', 'Drinking water'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 6 Quiz 3 — Chlor-alkali & metals',
        problems: [
          P('Membrane cells largely replaced mercury cells to reduce:', ['Mercury pollution and occupational risk', 'Electricity use always', 'NaOH purity always false may improve', 'Water need'], 'A', ''),
          P('Electrolysis of aqueous NaCl differs from molten NaCl partly because:', ['Water can be oxidized or reduced, changing product slate', 'Products identical always', 'No voltage needed', 'Only Na forms always'], 'A', ''),
          P('Hall–Héroult process needs large electricity because:', ['Al3+ is very hard to reduce; strong ionic bonding in alumina', 'Aluminum is lighter than feathers always irrelevant', 'Cryolite consumes all energy false facilitates melting', 'It is a photochemical process'], 'A', ''),
          P('Electrorefining copper uses impure copper as:', ['Anode that dissolves; pure copper plates on cathode (survey)', 'Cathode always', 'Electrolyte only', 'Container only'], 'A', ''),
          P('Downs cell (molten NaCl) produces:', ['Sodium metal and chlorine gas (conceptual separation)', 'NaOH directly without water false different process variant', 'H2 and O2 only from water false molten context', 'Iron'], 'A', ''),
          P('Steel galvanization with zinc works partly because:', ['Zn oxidizes preferentially (sacrificial protection)', 'Zn is less active than iron always false Zn more active typically', 'Zn insulates electrically completely false metallic contact', 'Copper always coats first false'], 'A', ''),
          P('Recycling aluminum saves energy largely because:', ['Electrolysis of virgin alumina is very energy intensive', 'Aluminum has no scrap value false', 'Melting recycled Al uses more energy than virgin always false opposite trend', 'Bauxite is renewable daily false geological'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 6 Quiz 4 — Nuclear',
        problems: [
          P('Gamma radiation is:', ['High-energy electromagnetic radiation', 'A helium nucleus', 'A free electron always classified that way false beta', 'A neutron'], 'A', ''),
          P('Beta-minus decay effectively converts:', ['A neutron into a proton (with electron and antineutrino emitted) in nucleus', 'Proton to neutron always in beta minus false often neutron to proton for n-rich nuclides', 'Nucleus into photon only', 'Electron into proton false'], 'A', ''),
          P('Balancing ²²⁶₈₈Ra → ? + ⁴₂He requires daughter with Z = :', ['86 and A = 222 (Rn, if symbols not required exam may test conservation)', '88 and 226', '90 and 230', '84 and 218'], 'A', ''),
          P('Half-life is meaningful for:', ['A large sample where statistics match exponential decay law', 'A single atom deterministically false', 'Infinite time only', 'Only fusion'], 'A', ''),
          P('¹⁴C dating applies to:', ['Carbon-containing archaeological/organic materials on ~10^4 year scale', 'All rocks on billion-year scale primarily U-Pb etc different', 'Pure iron tools usually', 'Salts only'], 'A', ''),
          P('Radioisotopes in medicine require attention to:', ['Dosimetry, half-life, and radioprotection (ALARA)', 'Color of syringe only', 'Taste only', 'Atomic mass only'], 'A', ''),
          P('Nuclear waste challenges include:', ['Long-lived isotopes needing secure storage', 'No radioactive isotopes exist false', 'Instant neutralization with water always', 'Only short gamma exposure'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 6 Quiz 5 — Environment',
        problems: [
          P('Primary air pollutant example:', ['SO2 from burning sulfur-containing fuels', 'N2 in air', 'O2 in air', 'Ar in air'], 'A', ''),
          P('Greenhouse gases include:', ['CO2, CH4, N2O among others (survey)', 'Only helium', 'Only nitrogen when pure', 'Neon only'], 'A', ''),
          P('Eutrophication in lakes can follow:', ['Nutrient overload → algal growth → oxygen depletion when decomposed', 'Pure distilled water addition only', 'Removing all CO2 from water false', 'Increasing altitude'], 'A', ''),
          P('Atom economy highlights:', ['How much of reactant mass becomes desired product', 'Only energy yield', 'Only reaction color', 'Only catalyst mass'], 'A', ''),
          P('Green chemistry aims to:', ['Reduce hazardous substances and waste (prevention first)', 'Increase waste on purpose', 'Ban all syntheses', 'Eliminate all measurements'], 'A', ''),
          P('Heavy metals in water pose risk partly through:', ['Bioaccumulation up food chains', 'Immediate evaporation to space', 'Becoming noble gases', 'Zero toxicity always'], 'A', ''),
          P('Microscale experiments in teaching can:', ['Reduce chemical amounts and risk while illustrating principles', 'Increase waste always', 'Remove all safety rules', 'Replace theoretical learning entirely'], 'A', ''),
        ],
      },
    ],
  },
];
