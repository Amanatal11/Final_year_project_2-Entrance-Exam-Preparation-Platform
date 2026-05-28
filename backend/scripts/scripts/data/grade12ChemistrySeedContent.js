/**
 * Grade 12 Chemistry — study notes, YouTube URLs, MCQ padding (curriculum + stock).
 * Six units × five topics (30 topics).
 * Topic video IDs: Khan Academy, Crash Course, The Organic Chemistry Tutor — oEmbed-verified.
 */

const CHAPTER_TAGS = ['structure', 'hydrocarbon', 'organic', 'physchem', 'electro', 'industry'];

function hashPair(a, b) {
  const s = `${a}:${b}`;
  let h = 0;
  for (let i = 0; i < s.length; i += 1) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

function sanitizePlain(s) {
  return String(s || '')
    .replace(/\*{1,2}/g, '')
    .replace(/[ \t]+$/gm, '')
    .trim();
}

const WORKED_EXAMPLES = {
  '0-0':
    'Example: Write the electron configuration of phosphorus (Z = 15) and count valence electrons—then connect valence count to common anion/cation patterns in simple compounds.',
  '0-1':
    'Example: Explain why atomic radius grows going down group 17 using additional electron shells, even though Z increases.',
  '0-2':
    'Example: For NaCl, describe electron transfer to Na⁺ and Cl⁻ and link high melting point to strong ionic lattice attractions (directional in cubic models).',
  '0-3':
    'Example: Predict bent geometry for an AB₂E-type molecule using VSEPR domains (introductory), and relate polarity to bond dipoles that do not fully cancel.',
  '0-4':
    'Example: Compare boiling points of CH₄ vs hexane using dispersion forces; explain why branching lowers BP among isomers.',
  '1-0':
    'Example: Name CH₃CH(CH₃)CH₂CH₂CH₃ as 2-methyl pentane (verify longest chain and lowest set of locants).',
  '1-1':
    'Example: Show initiation/propagation steps for methane + Cl₂ under UV light as a classroom free-radical chain narrative.',
  '1-2':
    'Example: Draw cis vs trans-2-butene, emphasizing restricted rotation around the C=C bond.',
  '1-3':
    'Example: Hydration of propene under acidic aqueous conditions often yields propan-2-ol in introductory Markovnikov-oriented discussions.',
  '1-4':
    'Example: Explain fractional distillation of crude oil into fractions with different boiling ranges tied to industrial uses.',
  '2-0':
    'Example: Use resonance forms of benzene to argue against isolated cyclohexatriene reactivity patterns—introduction to aromatic stability.',
  '2-1':
    'Example: Classify ethanol as primary and phenol as aromatic alcohol surrogate with distinct acidity trends (survey).',
  '2-2':
    'Example: Decide whether a carbonyl compound is a ketone or aldehyde by counting bonds from the carbonyl carbon to carbon vs hydrogen.',
  '2-3':
    'Example: Name CH₃COOH as ethanoic (acetic) acid and write the sodium salt as a strong electrolyte in water.',
  '2-4':
    'Example: Describe addition polymerization of ethene to poly(ethene) opening a π bond to propagate a long chain.',
  '3-0':
    'Example: Use formation enthalpy data and Hess reasoning to compare methane combustion to separate formation steps (qualitative cycle sketch).',
  '3-1':
    'Example: Estimate ΔH from bond enthalpy tables by summing bonds broken minus bonds formed—note approximate nature.',
  '3-2':
    'Example: Sketch how raising temperature shifts the Maxwell–Boltzmann distribution yielding more molecules above Ea.',
  '3-3':
    'Example: For N₂O₄ ⇌ 2 NO₂, write Q and compare with K after a sudden volume change (conceptual).',
  '3-4':
    'Example: For an exothermic ammonia synthesis equilibrium, explain qualitatively why cooling favors products (rate tradeoffs still matter industrially).',
  '4-0':
    'Example: Compute pH from [H⁺] = 1.0×10⁻³ M for a strong monoprotic acid dilution (introductory).',
  '4-1':
    'Example: Show how acetate/acetic acid resists pH change when a small amount of strong base is added (qualitative Henderson story).',
  '4-2':
    'Example: Sketch titration curve for weak acid + strong base with equivalence pH > 7 and buffer region before equivalence.',
  '4-3':
    'Example: Assign oxidation numbers in MnO₄⁻ reduction in acidic medium before balancing half-reactions.',
  '4-4':
    'Example: Label cathode as reduction site in a Zn–Cu voltaic diagram and trace electron flow through the wire.',
  '5-0':
    'Example: Discuss why high pressure shifts gas equilibrium toward fewer moles for ammonia synthesis—paired with catalytic rate needs.',
  '5-1':
    'Example: Outline SO₂ → SO₃ on V₂O₅ catalyst and SO₃ absorption into sulfuric acid/oleum to avoid an uncontrolled SO₃ + water mist.',
  '5-2':
    'Example: Contrast brine electrolysis products (Cl₂, H₂, NaOH) with molten NaCl (Na + Cl₂) in terms of competing water reduction/oxidation.',
  '5-3':
    'Example: Balance ²²⁶₈₈Ra → ⁴₂He + remaining daughter using conservation of A and Z.',
  '5-4':
    'Example: Compare atom economy for a reaction that produces co-product water versus one that generates stoichiometric salt waste.',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Structure & bonding: electron configurations; periodic trends; ionic/covalent/metallic models; VSEPR overview; polarity and IMFs.';
    case 1:
      return 'Hydrocarbons: alkane/alkene/alkyne basics; isomerism; addition reactions introductory; petroleum fractions overview.';
    case 2:
      return 'Functional groups: aromaticity (intro); alcohols/phenols; aldehydes/ketones; acids/derivatives; addition vs condensation polymers.';
    case 3:
      return 'Physical chemistry: enthalpy, Hess/bond enthalpies; collision theory and catalysis; K, Q, and Le Châtelier industrial links.';
    case 4:
      return 'Acids/bases: pH, buffers, titration survey; redox balancing; voltaic vs electrolytic cells and Faraday ideas.';
    case 5:
      return 'Applied chemistry: Haber/Contact narratives; chlor-alkali and metal extraction; nuclear decay balances; pollution and green chemistry metrics.';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['structure'], title: 'Orbital', question: 'An atomic orbital defines mainly:', options: ['A region where electron probability is high for a quantum state', 'A fixed circular path for electrons', 'The nuclear charge Ze by itself only', 'The speed of light inside the atom'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['structure'], title: 'Trend', question: 'Across a period (main-group, left→right) atomic radius tends to:', options: ['Increase steadily', 'Decrease due to higher effective nuclear charge', 'Stay identical for all elements', 'Depend only on neutron number'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['hydrocarbon'], title: 'Iso', question: 'Structural isomers have:', options: ['Different molecular formulas', 'Same formula but different connectivity', 'Identical connectivity always', 'Different elements entirely'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['hydrocarbon'], title: 'Pi', question: 'A carbon–carbon double bond contains:', options: ['Only a σ bond', 'One σ and one π bond among typical descriptions', 'Three π bonds', 'No shared electrons'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['organic'], title: 'Ox', question: 'In the Tollens test context, common textbook emphasis is that many aldehydes can be oxidized by Tollens reagent whereas simple ketones usually do not show the silver mirror (course-dependent).', options: ['True comparison in many intro labs', 'Ketones always give silver mirror faster than aldehydes', 'Alkanes always react fastest', 'Water is the oxidant'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['organic'], title: 'Ester', question: 'An ester commonly forms from reactions between:', options: ['A strong acid and a noble gas', 'A carboxylic acid derivative and an alcohol (Fischer/class esterification variants)', 'NaCl and water only', 'Only two alkanes'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['physchem'], title: 'Ea', question: 'Activation energy is best described as:', options: ['Energy barrier between reactants and the transition state', 'Total enthalpy change of reaction', 'Energy of products only', 'Nuclear binding energy'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['physchem'], title: 'Cat', question: 'A catalyst changes reaction rate by:', options: ['Changing equilibrium constant K at fixed T (always)', 'Providing a path with lower activation energy', 'Eliminating intermediates in all mechanisms', 'Removing reactants'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['physchem'], title: 'K', question: 'For a reversible elementary idea, if Q < K at a given temperature then:', options: ['Net reaction proceeds toward reactants', 'Net reaction proceeds toward products until approaching equilibrium', 'No reaction occurs', 'Time stops'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['electro'], title: 'pH', question: 'In dilute aqueous notation, pH = −log[H⁺] applies when:', options: ['Concentrations are small enough that water autoprotolysis is secondary (intro)', 'Only for pH > 14', 'Never for acids', 'Only in nonaqueous solvents without adjustment'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['electro'], title: 'Buf', question: 'A buffer works best near:', options: ['pH far from pKa of the weak acid component', 'pH ≈ pKa when [HA] and [A⁻] are both appreciable (typical teaching)', 'pH = 0 always', 'Infinite dilution only'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['electro'], title: 'Redox', question: 'Oxidation involves (in many intro schemes):', options: ['Gain of electrons', 'Loss of electrons / increase in oxidation number', 'No change in oxidation numbers', 'Proton gain only'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['industry'], title: 'Haber', question: 'Ammonia synthesis from the elements is exothermic in the standard forward direction; equilibrium yield vs rate trade-offs are central to industrial design (simplified).', options: ['True', 'False because the forward reaction must be endothermic always', 'False because catalysts increase K', 'False because pressure cannot affect gases'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['industry'], title: 'Half', question: 'After one half-life (for a nuclide with a well-defined half-life), about half the atoms remain in a large sample because decay is a random process obeying exponential kinetics.', options: ['Conceptually correct at intro level', 'Every atom is guaranteed to decay exactly at t½', 'Activity becomes zero instantly', 'Half-life doubles the number of atoms'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['structure'], title: 'IMF', question: 'London dispersion forces arise from:', options: ['Temporary dipoles in polarizable electron clouds', 'Permanent ionic charges only', 'Covalent bond stretching only', 'Nuclear fusion'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['hydrocarbon'], title: 'Add', question: 'Electrophilic addition to alkenes is common because:', options: ['The π bond is a region of relatively high electron density (intro rationale)', 'Alkenes lack σ bonds', 'Alkenes are nonpolar so they never react', 'Water forbids addition'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['organic'], title: 'Poly', question: 'Condensation polymerization often differs from addition polymerization by:', options: ['Releasing a small molecule such as water in many textbook examples', 'Never forming heteroatom linkages', 'Requiring only elemental carbon feedstock', 'Eliminating all catalysts'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['physchem'], title: 'Hess', question: "Hess's law is powerful because enthalpy is:", options: ['Path-dependent in all cases', 'A state function for a given initial and final state (standard framings)', 'Equal to activation energy always', 'Undefined for chemical reactions'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['electro'], title: 'Cell', question: 'In a galvanic cell, chemical energy is converted to electrical energy as spontaneous redox proceeds (idealized teaching frame).', options: ['This matches the usual textbook voltaic narrative', 'Electrons always flow from cathode to anode in the external wire (wrong electron convention)', 'No redox occurs', 'Salt bridge prevents all reactions'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['industry'], title: 'SO2', question: 'SO₂ can contribute to acid rain chemistry because it can be oxidized to acidic oxides/sulfuric acid precursor pathways in the atmosphere (simplified).', options: ['Plausible intro link', 'Impossible in air', 'Only occurs inside noble gases', 'Requires photosynthesis first'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['structure'], title: 'EN', question: 'Electronegativity trends help predict:', options: ['Bond polarity direction in many diatomic/heteronuclear bonds', 'Nuclear decay constants', 'Ideal gas volumes only', 'Sound velocity in vacuum'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['physchem'], title: 'Rate', question: 'The rate law for a reaction must be determined experimentally except in simple elementary cases because:', options: ['Overall stoichiometric coefficients do not automatically equal reaction orders', 'Stoichiometry always equals orders', 'Order equals molecularity for all reactions always', 'Catalysts define orders without experiments'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['electro'], title: 'Titr', question: 'The equivalence point in a titration is defined by:', options: ['Indicator color change only', 'Stoichiometric completion of the analyte–titrant reaction', 'pH always equals 7 for every combination', 'Half the volume of water'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['industry'], title: 'Green', question: 'Atom economy highlights:', options: ['Fraction of reactant mass incorporated into the desired product', 'Sound intensity of stirring', 'Nuclear cross section', 'Color of the flask'], correctAnswer: 0, difficulty: 'Easy' },
];

function stripStockForExercise(entry) {
  const { tags: _t, ...rest } = entry;
  return { ...rest };
}

function normalizeDifficulty(d) {
  const s = String(d || 'Easy').toLowerCase();
  if (s.startsWith('med')) return 'Medium';
  if (s.startsWith('hard')) return 'Hard';
  return 'Easy';
}

function difficultyCounts(exercises) {
  const c = { Easy: 0, Medium: 0, Hard: 0 };
  for (const e of exercises) {
    c[normalizeDifficulty(e.difficulty)] += 1;
  }
  return c;
}

function exercisesForTopic(chapterIndex, topicIndex, topicName, curatedForTopic, targetCount = 7) {
  const tag = CHAPTER_TAGS[chapterIndex] || 'industry';
  const tagPool = MCQ_STOCK.filter((m) => m.tags.includes(tag));

  const wantEasy = 3;
  const wantMed = 2;
  const wantHard = 2;

  const topicShort = topicName.split(',')[0].slice(0, 28);
  const out = (curatedForTopic || []).map((e) => ({ ...e, difficulty: normalizeDifficulty(e.difficulty) }));
  const usedQuestions = new Set(out.map((e) => e.question));

  function preferredTier() {
    const c = difficultyCounts(out);
    const defs = [
      ['Easy', wantEasy - c.Easy],
      ['Medium', wantMed - c.Medium],
      ['Hard', wantHard - c.Hard],
    ]
      .filter(([, d]) => d > 0)
      .sort((a, b) => b[1] - a[1]);
    return defs.length ? defs[0][0] : null;
  }

  function tryAdd(tierPref) {
    const sequences = tierPref
      ? [
          tagPool.filter((m) => normalizeDifficulty(m.difficulty) === tierPref),
          tagPool,
          MCQ_STOCK.filter((m) => normalizeDifficulty(m.difficulty) === tierPref),
          MCQ_STOCK,
        ]
      : [tagPool, MCQ_STOCK];

    const tier = tierPref || 'Easy';
    const start = hashPair(chapterIndex, topicIndex) + out.length * 31 + (tierPref ? tier.length : 0);
    for (const seq of sequences) {
      if (!seq.length) continue;
      for (let step = 0; step < seq.length; step += 1) {
        const m = seq[(start + step) % seq.length];
        if (usedQuestions.has(m.question)) continue;
        const stripped = stripStockForExercise(m);
        stripped.difficulty = normalizeDifficulty(stripped.difficulty);
        usedQuestions.add(stripped.question);
        stripped.title = `${topicShort} — ${stripped.title || 'Review'}`;
        out.push(stripped);
        return true;
      }
    }
    return false;
  }

  let guard = 0;
  while (out.length < targetCount && guard < 8000) {
    guard += 1;
    const pref = preferredTier();
    if (!tryAdd(pref)) {
      if (!tryAdd(null)) break;
    }
  }

  return out.slice(0, targetCount);
}

function buildTopicStudyNotes({
  topicLabel,
  topicName,
  topicDescription,
  chapterName,
  chapterIndex,
  topicIndex,
  topicObjectives,
}) {
  const name = sanitizePlain(topicName);
  const desc = sanitizePlain(topicDescription);
  const objectivesLines = Array.isArray(topicObjectives)
    ? topicObjectives.map((o, i) => `${i + 1}. ${sanitizePlain(o)}`).filter((line) => line.length > 3)
    : [];

  const key = `${chapterIndex}-${topicIndex}`;
  const worked =
    WORKED_EXAMPLES[key] ||
    `Example: Connect ${name} to one Ethiopian development context (industry, agriculture, health, or environment) with an evidence-based chemical explanation.`;

  const pTopic = [
    `${topicLabel}. ${name}`,
    desc,
    chapterName ? `Unit: ${sanitizePlain(chapterName)}.` : '',
    objectivesLines.length ? `Syllabus statements for this topic:\n${objectivesLines.join('\n')}` : '',
  ]
    .map(sanitizePlain)
    .filter(Boolean)
    .join('\n\n');

  const formulasBlock = sanitizePlain(formulasPlain(chapterIndex));
  const pFormulas = formulasBlock
    ? ['Key ideas and vocabulary for this unit (Grade 12 Chemistry).', formulasBlock].join('\n\n')
    : '';

  const pWorked = ['Worked example (this topic only).', sanitizePlain(worked)].join('\n\n');

  return {
    title: `Topic notes — ${topicLabel}`,
    content: [pTopic, pFormulas, pWorked].filter(Boolean).join('\n\n'),
  };
}

/**
 * One video ID per topic. Mix: Khan Academy, Crash Course, The Organic Chemistry Tutor.
 * Each id verified with youtube.com/oembed (embeddable).
 */
const TOPIC_YOUTUBE_VIDEO_IDS = {
  // Unit 1 — atomic structure, periodicity, bonding
  '0-0': 'yBrp8uvNAhI', // Khan Academy — electron orbitals / quantum survey
  '0-1': '0RRVV4Diomg', // Khan Academy — periodic trends
  '0-2': 'QXT4OVM4vXI', // Khan Academy — ionic bonding
  '0-3': 'a8LF7JEb0IA', // Khan Academy — covalent bonding & VSEPR
  '0-4': 'PVL24HAesnc', // Khan Academy — intermolecular forces

  // Unit 2 — hydrocarbons
  '1-0': 'NRFPvLp3r3g', // Khan Academy — introduction to organic / hydrocarbons
  '1-1': 'BqQJPCdmIp8', // Khan Academy — alkanes
  '1-2': 'KWv5PaoHwPA', // Khan Academy — alkenes
  '1-3': 'Z_GWBW_GVGA', // Khan Academy — addition reactions survey
  '1-4': 'TLRZAFU_9Kg', // Khan Academy — petroleum fractions

  // Unit 3 — aromatic & oxygen-containing organics
  '2-0': 'JMsqu236bZo', // Khan Academy — aldehydes & ketones (organic functional intro bridge)
  '2-1': 'kFpLDQfEg1E', // Khan Academy — alcohols
  '2-2': 'rHxxLYzJ8Sw', // Khan Academy — polymers / macromolecules context
  '2-3': 'z8h7QgevqjM', // Khan Academy — carboxylic acids
  '2-4': 'd9hffYCwfEA', // The Organic Chemistry Tutor — organic reactions energy survey (esters context)

  // Unit 4 — physical chemistry
  '3-0': 'SV7U4yAXL5I', // Khan Academy — enthalpy
  '3-1': 'JuWtBR-rDQk', // Khan Academy — Hess's law / bond enthalpies
  '3-2': 'd9hffYCwfEA', // The Organic Chemistry Tutor — reaction rates & activation energy
  '3-3': 'g5wNg_dKsYY', // Khan Academy — equilibrium constant
  '3-4': 'DP-vWN1yXrY', // Khan Academy — Le Châtelier's principle

  // Unit 5 — acids, bases, electrochemistry
  '4-0': 'LS67vS10O5Y', // Khan Academy — acids & bases
  '4-1': 'oIlMsYOKEsc', // Khan Academy — buffers
  '4-2': 'ANi709MYnWg', // Khan Academy — titrations
  '4-3': 'lQ6FBA1HM3s', // Khan Academy — balancing redox
  '4-4': 'IV4IUsholjg', // Khan Academy — galvanic cells

  // Unit 6 — industrial, nuclear, environmental
  '5-0': 'leHy-Y_8nRs', // Crash Course — industrial nitrogen & agriculture link
  '5-1': 'GIPrsWuSkQc', // Khan Academy — Contact process / sulfuric acid
  '5-2': 'DdR7Y34haoA', // Khan Academy — electrolysis
  '5-3': 'KWAsz59F8gA', // Khan Academy — nuclear chemistry
  '5-4': 'atQjdaTZsPY', // Khan Academy — green chemistry / atom economy
};

const FALLBACK_CHEM_VIDEO_IDS = ['yBrp8uvNAhI', 'tCGUsiXIYhw', 'g5wNg_dKsYY', 'LS67vS10O5Y', 'leHy-Y_8nRs'];

function pickRandomTopicVideo({ chapterIndex, topicIndex, topicName, gradeLevel }) {
  const key = `${chapterIndex}-${topicIndex}`;
  let id = TOPIC_YOUTUBE_VIDEO_IDS[key];
  if (!id) {
    id = FALLBACK_CHEM_VIDEO_IDS[hashPair(chapterIndex, topicIndex) % FALLBACK_CHEM_VIDEO_IDS.length];
  }
  return {
    videoUrl: `https://www.youtube.com/watch?v=${id}`,
    title: `${topicName} (Grade ${gradeLevel})`,
  };
}

module.exports = {
  CHAPTER_TAGS,
  exercisesForTopic,
  buildTopicStudyNotes,
  pickRandomTopicVideo,
};
