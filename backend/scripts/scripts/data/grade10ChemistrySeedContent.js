/**
 * Grade 10 Chemistry — study notes, YouTube URLs, MCQ padding (curriculum + stock).
 * Six units × five topics (30 topics).
 */

const CHAPTER_TAGS = ['stoich', 'solution', 'inorganic', 'electro', 'metals', 'hydrocarbon'];

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
  '0-0': 'Example: Ripening fruit forms new substances with different properties—chemical change; melting ice remains H₂O—physical change.',
  '0-1': 'Example: CH₄ + 2O₂ → CO₂ + 2H₂O balances atoms: 1 C, 4 H, 4 O on each side when coefficients are applied.',
  '0-2': 'Example: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq) is a double-replacement pattern forming a precipitate.',
  '0-3': 'Example: In Zn + Cu²⁺ → Zn²⁺ + Cu, zinc is oxidized (oxidation number rises from 0 to +2).',
  '0-4': 'Example: From 2H₂ + O₂ → 2H₂O, 4.0 g H₂ (2 mol) requires 32 g O₂ (1 mol) for complete reaction.',
  '1-0': 'Example: Oil and water form a heterogeneous mixture; salt water is homogeneous at the particle scale after dissolving.',
  '1-1': 'Example: Dissolving NaCl in water involves ion–dipole interactions overcoming lattice energy (qualitative).',
  '1-2': 'Example: A saturated solution at a given temperature has dissolved solute in equilibrium with undissolved solid (survey).',
  '1-3': 'Example: 1.0 M NaCl means 1 mol solute per liter of solution (introductory molarity definition).',
  '1-4': 'Example: Titration of acid with base uses a balanced mole ratio from the neutralization equation.',
  '2-0': 'Example: CO₂ reacts with water to form acidic solution; CaO reacts with water to form Ca(OH)₂ (basic oxide survey).',
  '2-1': 'Example: Acidic oxides of nonmetals often form acids with water; basic oxides of metals form hydroxides.',
  '2-2': 'Example: HCl(aq) ionizes to H⁺(aq) and Cl⁻(aq); turns blue litmus red (classroom test).',
  '2-3': 'Example: NaOH(aq) provides OH⁻(aq); neutralizes acid: H⁺ + OH⁻ → H₂O.',
  '2-4': 'Example: NaCl(s) is a salt from strong acid–strong base neutralization; dissolves to give Na⁺ and Cl⁻.',
  '3-0': 'Example: Exothermic combustion releases heat; endothermic photosynthesis store energy in bonds (survey comparison).',
  '3-1': 'Example: ΔH for a reaction can be estimated using Hess cycles with formation enthalpies (intro sketch).',
  '3-2': 'Example: In a Zn–Cu voltaic cell, zinc is the anode (oxidation) and copper ions reduce at the cathode.',
  '3-3': 'Example: Electrolysis of molten NaCl produces Na(l) and Cl₂(g) at electrodes (industrial context).',
  '3-4': 'Example: Iron rusting is oxidation of Fe in the presence of O₂ and moisture (corrosion survey).',
  '4-0': 'Example: Copper conducts electricity and can be drawn into wire; sulfur is a brittle nonmetal (contrast).',
  '4-1': 'Example: Metals have metallic luster, malleability, and generally conduct heat and electricity.',
  '4-2': 'Example: Iron is extracted from ores using blast furnace chemistry (survey of reduction).',
  '4-3': 'Example: Chlorine is a diatomic nonmetal gas used in water treatment (survey application).',
  '4-4': 'Example: Nitrogen is fixed industrially via the Haber process for ammonia fertilizer (link).',
  '5-0': 'Example: Hydrocarbons contain only C and H; methane CH₄ is the simplest alkane.',
  '5-1': 'Example: Name CH₃CH₂CH₃ as propane; longest chain has three carbons.',
  '5-2': 'Example: Ethene CH₂=CH₂ undergoes addition reactions breaking the π bond (intro).',
  '5-3': 'Example: Benzene C₆H₆ has special stability (aromaticity survey) compared with hypothetical cyclohexatriene.',
  '5-4': 'Example: Fractional distillation separates crude oil into fractions by boiling range.',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Chemical vs physical change; balanced equations; reaction types; redox (oxidation numbers); mole, molar mass, limiting reactant, percent yield.';
    case 1:
      return 'Mixtures; solvation; solubility rules (survey); molarity, molality, percent; dilution; titration stoichiometry.';
    case 2:
      return 'Oxides (acidic, basic, amphoteric survey); acids and bases; neutralization; salts and uses.';
    case 3:
      return 'Enthalpy; Hess law (intro); galvanic cells; electrolysis; corrosion and prevention.';
    case 4:
      return 'Metal properties; extraction/refining survey; nonmetals O₂, N₂, Cl₂, S; industrial links.';
    case 5:
      return 'Alkanes, alkenes, alkynes; benzene (survey); petroleum fractions; natural gas.';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['stoich'], title: 'Mole', question: 'Avogadro’s number links:', options: ['Moles and particles', 'Only mass and volume', 'Only color', 'Only pressure'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['stoich'], title: 'Balance', question: 'Coefficients in equations represent:', options: ['Mole ratios', 'Only grams', 'Only colors', 'Temperature'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['solution'], title: 'Molarity', question: 'Molarity M =', options: ['mol solute / L solution', 'mol / kg solvent only', 'g / L only', 'pH'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['solution'], title: 'Sat', question: 'Saturated solution:', options: ['Equilibrium with excess solute possible', 'Never contains ions', 'Always dilute', 'Only gases'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['inorganic'], title: 'Acid', question: 'Arrhenius acid provides:', options: ['H⁺ in water', 'OH⁻ only', 'Only electrons', 'Only neutrons'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['inorganic'], title: 'Base', question: 'Arrhenius base provides:', options: ['OH⁻ in water', 'H⁺ only', 'Only Cl₂', 'Only metals'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['electro'], title: 'Anode', question: 'In electrolysis, anode is where:', options: ['Oxidation occurs', 'Reduction occurs', 'Mass is always gained', 'No current flows'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['electro'], title: 'Cell', question: 'Voltaic cell converts:', options: ['Chemical energy to electrical', 'Electrical to chemical only', 'Mass to light only', 'Heat to nucleus'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['metals'], title: 'Conduct', question: 'Metals conduct because of:', options: ['Delocalized electrons', 'Fixed ions only', 'Only IMF', 'Only water'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['metals'], title: 'Ore', question: 'An ore is:', options: ['Mineral source of metal', 'Pure metal always', 'Only gas', 'Only salt solution'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['hydrocarbon'], title: 'Alkane', question: 'General formula CₙH₂ₙ₊₂ fits:', options: ['Alkanes', 'Alkenes', 'Alkynes', 'Benzene'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['hydrocarbon'], title: 'Pi', question: 'Alkenes contain:', options: ['C=C π bond', 'Only single bonds', 'Only ionic bonds', 'Only metals'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['stoich'], title: 'Limit', question: 'Limiting reactant:', options: ['Runs out first', 'Is always in excess', 'Is catalyst', 'Is product'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['solution'], title: 'Polar', question: 'Polar solvent often dissolves:', options: ['Polar/ionic solutes', 'Only oils always', 'Only noble gases', 'Only metals'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['inorganic'], title: 'Salt', question: 'Neutralization forms:', options: ['Salt and water often', 'Only oxygen', 'Only metals', 'Only alkanes'], correctAnswer: 0, difficulty: 'Easy' },
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
  const tag = CHAPTER_TAGS[chapterIndex] || 'stoich';
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

    const start = hashPair(chapterIndex, topicIndex) + out.length * 31 + (tierPref ? tierPref.length : 0);
    for (const seq of sequences) {
      if (!seq.length) continue;
      for (let step = 0; step < seq.length; step += 1) {
        const m = seq[(start + step) % seq.length];
        if (usedQuestions.has(m.question)) continue;
        const stripped = stripStockForExercise(m);
        stripped.difficulty = normalizeDifficulty(stripped.difficulty);
        usedQuestions.add(stripped.question);
        stripped.title = `${topicShort} — ${stripped.title}`;
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
    `Example: Connect this Grade 10 Chemistry topic to one balanced equation or measurable quantity used in class.`;

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
    ? ['Key ideas and vocabulary for this unit (Grade 10 Chemistry).', formulasBlock].join('\n\n')
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
  // Unit 1 — reactions & stoichiometry
  '0-0': 'SV7U4yAXL5I', // Khan Academy — physical vs chemical change / reaction energy
  '0-1': 'JuWtBR-rDQk', // Khan Academy — chemical equations & enthalpy
  '0-2': '7qOFtL3VEBc', // Khan Academy — types of reactions / collision theory
  '0-3': 'lQ6FBA1HM3s', // Khan Academy — redox
  '0-4': 'tCGUsiXIYhw', // The Organic Chemistry Tutor — stoichiometry

  // Unit 2 — solutions
  '1-0': 'PVL24HAesnc', // Khan Academy — mixtures & intermolecular forces in solutions
  '1-1': 'oIlMsYOKEsc', // Khan Academy — solutions / solvation context
  '1-2': 'g5wNg_dKsYY', // Khan Academy — solubility & equilibrium
  '1-3': 'ANi709MYnWg', // Khan Academy — molarity & titration
  '1-4': 'g5wNg_dKsYY', // Khan Academy — solution equilibrium & stoichiometry

  // Unit 3 — inorganic compounds
  '2-0': 'LS67vS10O5Y', // Khan Academy — acids & bases intro
  '2-1': 'aLuSi_6Ol8M', // Crash Course — oxides / carbon cycle survey
  '2-2': 'LS67vS10O5Y', // Khan Academy — acids
  '2-3': 'oIlMsYOKEsc', // Khan Academy — bases
  '2-4': 'z8h7QgevqjM', // Khan Academy — salts

  // Unit 4 — energy & electrochemistry
  '3-0': 'd9hffYCwfEA', // The Organic Chemistry Tutor — energy in reactions
  '3-1': 'JuWtBR-rDQk', // Khan Academy — enthalpy
  '3-2': 'IV4IUsholjg', // Khan Academy — galvanic cells
  '3-3': 'DdR7Y34haoA', // Khan Academy — electrolysis
  '3-4': 'lQ6FBA1HM3s', // Khan Academy — redox applications / corrosion

  // Unit 5 — metals & nonmetals
  '4-0': 'leHy-Y_8nRs', // Crash Course — metals & nonmetals (N/P groups survey)
  '4-1': 'QXT4OVM4vXI', // Khan Academy — metallic & ionic bonding
  '4-2': 'tdEE5uvFhOM', // Khan Academy — industrial metal processes
  '4-3': 'KWAsz59F8gA', // Khan Academy — nuclear / nonmetal isotopes context
  '4-4': 'GIPrsWuSkQc', // Khan Academy — industrial nitrogen (Haber)

  // Unit 6 — hydrocarbons
  '5-0': 'NRFPvLp3r3g', // Khan Academy — hydrocarbon intro
  '5-1': 'BqQJPCdmIp8', // Khan Academy — alkanes
  '5-2': 'KWv5PaoHwPA', // Khan Academy — alkenes
  '5-3': 'kFpLDQfEg1E', // Khan Academy — alcohols / organic survey (benzene context)
  '5-4': 'TLRZAFU_9Kg', // Khan Academy — petroleum fractions
};

const FALLBACK_CHEM_VIDEO_IDS = ['tCGUsiXIYhw', '0RRVV4Diomg', 'LS67vS10O5Y', 'IV4IUsholjg', 'NRFPvLp3r3g'];

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
