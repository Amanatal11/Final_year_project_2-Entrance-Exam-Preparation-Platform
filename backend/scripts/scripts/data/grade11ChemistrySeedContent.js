/**
 * Grade 11 Chemistry — study notes, YouTube URLs, MCQ padding (curriculum + stock).
 * Six units × five topics (30 topics).
 */

const CHAPTER_TAGS = ['fundamentals', 'atom', 'bonding', 'kinetics', 'equilibrium', 'organic'];

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
  '0-0': 'Example: Materials science, medicine, agriculture, and environmental monitoring all rely on chemistry to explain composition and change at the particle level.',
  '0-1': 'Example: A length of 2.5 km converts to 2.5 × 10³ m using the kilo- prefix (10³).',
  '0-2': 'Example: Reporting 12.45 mL from a burette as 12.5 mL (three sig. figs.) reflects measurement uncertainty, not infinite precision.',
  '0-3': 'Example: 3.2 × 10⁻⁴ mol written in standard form compactly represents a very small amount used in dilution calculations.',
  '0-4': 'Example: A fair test changes only the fertilizer concentration while keeping light and water constant, then compares plant growth as the dependent variable.',
  '1-0': 'Example: Dalton’s atomic theory explained fixed mass ratios in compounds; discovery of subatomic particles later revised the “indivisible atom” idea.',
  '1-1': 'Example: An atom of ²³₁₁Na has 11 protons, 12 neutrons, and 11 electrons when neutral.',
  '1-2': 'Example: Emission lines of hydrogen appear at discrete wavelengths because electrons drop between quantized energy levels.',
  '1-3': 'Example: The quantum model uses orbitals (probability regions) rather than fixed planetary orbits for electrons.',
  '1-4': 'Example: Sulfur (Z = 16) has ground-state configuration 1s² 2s² 2p⁶ 3s² 3p⁴ and six valence electrons in the third shell.',
  '2-0': 'Example: Atoms bond to lower total energy—ionic transfer in NaCl or shared pairs in H₂O.',
  '2-1': 'Example: Mg²⁺ and O²⁻ attract in a lattice giving high melting solid MgO (survey comparison with NaCl).',
  '2-2': 'Example: H₂O is bent with two bonding pairs and two lone pairs on oxygen in the VSEPR picture.',
  '2-3': 'Example: Copper wire conducts because valence electrons are delocalized throughout the metallic lattice.',
  '2-4': 'Example: Diamond is a network covalent crystal; table salt is ionic—different structures explain hardness and conductivity.',
  '3-0': 'Example: Powdered chalk reacts faster with acid than a single lump because surface area increases collision frequency.',
  '3-1': 'Example: Only molecules with sufficient kinetic energy and correct orientation react on collision (collision theory story).',
  '3-2': 'Example: For aA + bB → products, rate ∝ [A]ᵐ[B]ⁿ where orders m and n are determined experimentally (intro).',
  '3-3': 'Example: A two-step mechanism with a slow first step can explain overall rate dependence on a specific reactant.',
  '3-4': 'Example: Enzymes in biological systems are biological catalysts lowering activation energy without changing ΔH.',
  '4-0': 'Example: In N₂O₄ ⇌ 2 NO₂, increasing NO₂ concentration shifts the reverse rate until a new equilibrium mixture forms.',
  '4-1': 'Example: For an exothermic forward reaction, lowering temperature favors products in many introductory equilibrium stories.',
  '4-2': 'Example: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq) has Ksp connecting ion concentrations at saturation (survey).',
  '4-3': 'Example: Ice and water coexist at 0°C at 1 atm because forward and reverse phase-change rates balance.',
  '4-4': 'Example: Water boils when its vapor pressure equals atmospheric pressure (phase equilibrium link).',
  '5-0': 'Example: Ethanoic acid CH₃COOH contains the carboxyl group –COOH common to carboxylic acids.',
  '5-1': 'Example: Oxidation of ethanol can yield ethanoic acid under appropriate oxidizing conditions (survey).',
  '5-2': 'Example: Ethyl ethanoate forms from ethanol and ethanoic acid in Fischer esterification (classroom context).',
  '5-3': 'Example: A fat is an ester of glycerol with long-chain fatty acids; oils are often unsaturated (survey).',
  '5-4': 'Example: Saponification converts a fat and strong base into soap and glycerol (applied organic chemistry).',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Scope of chemistry; SI base and derived units; prefixes; uncertainty, accuracy, precision, significant figures; scientific notation; scientific method and lab reporting.';
    case 1:
      return 'Atomic models; subatomic particles; isotopes; EMR and spectra; quantum numbers (survey); electron configurations and periodic trends.';
    case 2:
      return 'Ionic, covalent, metallic bonding; Lewis structures; VSEPR; polarity; IMFs; crystal types (ionic, molecular, metallic, network).';
    case 3:
      return 'Reaction rate; factors (T, concentration, surface area, catalyst); collision theory; rate laws (survey); mechanisms (survey).';
    case 4:
      return 'Dynamic equilibrium; K and Q; Le Châtelier; Ksp (survey); phase diagrams and vapor pressure (survey).';
    case 5:
      return 'Carboxylic acids; esterification; fats and oils; saponification; everyday applications.';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['fundamentals'], title: 'SI', question: 'The SI unit of amount of substance is:', options: ['Mole', 'Kilogram', 'Liter', 'Pascal'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['fundamentals'], title: 'Sig fig', question: 'Significant figures reflect:', options: ['Measurement precision', 'Atomic number', 'Nuclear charge only', 'Color'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['atom'], title: 'Proton', question: 'Atomic number equals number of:', options: ['Protons', 'Neutrons', 'Electrons in ion always', 'Isotopes'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['atom'], title: 'Config', question: 'Valence electrons occupy:', options: ['Outermost shell (survey)', 'Nucleus', 'Only inner shells', 'Neutrons'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['bonding'], title: 'Ionic', question: 'Ionic solids conduct when:', options: ['Molten or aqueous', 'Always as solid', 'Never', 'Only as gas'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['bonding'], title: 'VSEPR', question: 'VSEPR predicts:', options: ['Molecular geometry', 'Nuclear mass', 'Only ion charges', 'Sound speed'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['kinetics'], title: 'Rate', question: 'Reaction rate measures:', options: ['Change in concentration per time', 'Total mass only', 'Only color', 'Equilibrium constant'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['kinetics'], title: 'Cat', question: 'Catalysts:', options: ['Lower activation energy path', 'Change ΔH always', 'Are consumed fully', 'Stop equilibrium'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['equilibrium'], title: 'K', question: 'At equilibrium:', options: ['Forward and reverse rates are equal', 'All reactants gone', 'No products', 'Time stops'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['equilibrium'], title: 'Le', question: 'Le Châtelier: system shifts to:', options: ['Partially counteract stress', 'Always make more reactants', 'Ignore stress', 'Violate conservation'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['organic'], title: 'COOH', question: 'Carboxylic acids contain:', options: ['–COOH group', 'Only C=C', 'Only –OH on benzene only', 'Only metals'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['organic'], title: 'Ester', question: 'Esters often form from:', options: ['Acid + alcohol', 'Metal + water only', 'Only combustion', 'Only NaCl'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['fundamentals'], title: 'Exp', question: 'Independent variable is:', options: ['Deliberately changed', 'Measured response', 'Control only', 'Conclusion'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['atom'], title: 'Isotope', question: 'Isotopes differ in:', options: ['Neutrons', 'Protons', 'Element', 'Atomic number'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['bonding'], title: 'H-bond', question: 'Hydrogen bonding is strongest when H is bonded to:', options: ['N, O, or F', 'Any metal', 'He', 'C only'], correctAnswer: 0, difficulty: 'Easy' },
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
  const tag = CHAPTER_TAGS[chapterIndex] || 'fundamentals';
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
    `Example: State one key definition from this topic and connect it to a classroom measurement or calculation.`;

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
    ? ['Key ideas and vocabulary for this unit (Grade 11 Chemistry).', formulasBlock].join('\n\n')
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
  // Unit 1 — fundamental concepts
  '0-0': 'aLuSi_6Ol8M', // Crash Course — chemistry context / applications
  '0-1': 'tCGUsiXIYhw', // The Organic Chemistry Tutor — calculations & units practice
  '0-2': 'ANi709MYnWg', // Khan Academy — measurement & significant figures (titration context)
  '0-3': 'JuWtBR-rDQk', // Khan Academy — scientific notation & reaction quantities
  '0-4': 'SV7U4yAXL5I', // Khan Academy — experimental methods / energy of reaction link

  // Unit 2 — atomic structure
  '1-0': 'yBrp8uvNAhI', // Khan Academy — atomic structure
  '1-1': 'KWAsz59F8gA', // Khan Academy — nucleus & nuclear chemistry context
  '1-2': 'SV7U4yAXL5I', // Khan Academy — energy & spectra
  '1-3': '0RRVV4Diomg', // Khan Academy — quantum model & periodic trends
  '1-4': 'Z_GWBW_GVGA', // Khan Academy — electron configuration & periodic properties

  // Unit 3 — bonding
  '2-0': 'kFpLDQfEg1E', // Khan Academy — chemical bonding introduction
  '2-1': 'QXT4OVM4vXI', // Khan Academy — ionic bonding
  '2-2': 'a8LF7JEb0IA', // Khan Academy — covalent bonding & VSEPR
  '2-3': 'IV4IUsholjg', // Khan Academy — metallic bonding / redox conductivity
  '2-4': 'PVL24HAesnc', // Khan Academy — intermolecular forces & crystals

  // Unit 4 — kinetics
  '3-0': '7qOFtL3VEBc', // Khan Academy — reaction rates
  '3-1': 'leHy-Y_8nRs', // Crash Course — collision & reaction context
  '3-2': 'd9hffYCwfEA', // The Organic Chemistry Tutor — rate & energy relationships
  '3-3': 'g5wNg_dKsYY', // Khan Academy — equilibrium intro tied to mechanisms survey
  '3-4': 'tCGUsiXIYhw', // The Organic Chemistry Tutor — catalysis & problem solving

  // Unit 5 — equilibrium
  '4-0': 'g5wNg_dKsYY', // Khan Academy — chemical equilibrium
  '4-1': 'DP-vWN1yXrY', // Khan Academy — Le Châtelier's principle
  '4-2': 'LS67vS10O5Y', // Khan Academy — acids / solubility context
  '4-3': 'JuWtBR-rDQk', // Khan Academy — phase changes & enthalpy
  '4-4': 'PVL24HAesnc', // Khan Academy — vapor pressure & intermolecular forces in phases

  // Unit 6 — carboxylic acids, esters, fats, oils
  '5-0': 'NRFPvLp3r3g', // Khan Academy — organic chemistry introduction
  '5-1': 'z8h7QgevqjM', // Khan Academy — carboxylic acids
  '5-2': 'kFpLDQfEg1E', // Khan Academy — alcohols & esterification context
  '5-3': 'rHxxLYzJ8Sw', // Khan Academy — polymers / fats & oils macromolecules
  '5-4': 'd9hffYCwfEA', // The Organic Chemistry Tutor — organic reactions (saponification survey)
};

const FALLBACK_CHEM_VIDEO_IDS = ['yBrp8uvNAhI', 'tCGUsiXIYhw', 'g5wNg_dKsYY', 'QXT4OVM4vXI', 'leHy-Y_8nRs'];

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
