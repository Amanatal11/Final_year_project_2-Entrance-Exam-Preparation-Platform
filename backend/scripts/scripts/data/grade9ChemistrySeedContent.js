/**
 * Grade 9 Chemistry — study notes, YouTube URLs, MCQ padding (curriculum + stock).
 * Five units × five topics (25 topics).
 */

const CHAPTER_TAGS = ['atom', 'periodic', 'bonding', 'reaction', 'states'];

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
  '0-0': 'Example: Dalton’s theory explained fixed composition of compounds such as water always having hydrogen and oxygen in a 1:8 mass ratio by simple whole-number combining atoms.',
  '0-1': 'Example: Rutherford concluded the nucleus is tiny and positive because most α particles passed through gold foil, but a few bounced back sharply.',
  '0-2': 'Example: Chlorine-35 and chlorine-37 are isotopes; average atomic mass ≈ 35.45 amu reflects weighted abundance in nature.',
  '0-3': 'Example: Bohr’s model placed electrons in quantized levels, explaining discrete lines in hydrogen’s emission spectrum at introductory depth.',
  '0-4': 'Example: Sodium (Z = 11) has configuration 1s² 2s² 2p⁶ 3s¹, so it commonly forms Na⁺ by losing one valence electron.',
  '1-0': 'Example: Group 18 noble gases have filled valence shells, which correlates with low chemical reactivity under ordinary conditions.',
  '1-1': 'Example: Modern periodic law orders elements by increasing atomic number, fixing inconsistencies seen in early mass-based tables.',
  '1-2': 'Example: Atomic radius decreases across period 3 partly because increasing nuclear charge pulls valence electrons closer (trend story).',
  '1-3': 'Example: Group 1 metals tend to form +1 ions; group 17 elements tend to form −1 ions in many ionic compounds.',
  '1-4': 'Example: Knowing an element is a halogen helps predict reactivity with alkali metals to form salts such as NaCl.',
  '2-0': 'Example: Atoms bond to reach lower-energy arrangements—ionic transfer for Na and Cl, or shared pairs in H₂O.',
  '2-1': 'Example: Solid NaCl does not conduct electricity, but molten NaCl does because ions are free to move.',
  '2-2': 'Example: A Lewis structure for H₂O shows two bonding pairs and two lone pairs on oxygen in a bent geometry.',
  '2-3': 'Example: Copper wire conducts because delocalized electrons move when a potential difference is applied.',
  '2-4': 'Example: Water boils high for its mass partly because hydrogen bonds must be disrupted during vaporization.',
  '3-0': 'Example: In a closed flask, total mass before and after a precipitation reaction remains the same if no gas escapes.',
  '3-1': 'Example: Balancing CH₄ + 2O₂ → CO₂ + 2H₂O shows 1 mol methane reacts with 2 mol oxygen to give 1 mol CO₂ and 2 mol H₂O.',
  '3-2': 'Example: Combustion of natural gas is exothermic—products (CO₂ and H₂O) are more stable than reactants in the energy story used in class.',
  '3-3': 'Example: From 2H₂ + O₂ → 2H₂O, 4.0 g H₂ (2 mol) needs 32 g O₂ (1 mol) for complete reaction.',
  '3-4': 'Example: In Zn + Cu²⁺ → Zn²⁺ + Cu, zinc’s oxidation number rises from 0 to +2 (oxidation).',
  '4-0': 'Example: Gas pressure in a syringe increases when the plunger compresses the volume because particles hit walls more often.',
  '4-1': 'Example: At constant temperature, doubling gas volume halves pressure (Boyle’s law qualitative).',
  '4-2': 'Example: Evaporation cools the skin because higher-energy molecules leave the liquid surface, lowering average kinetic energy.',
  '4-3': 'Example: Diamond and graphite are allotropes of carbon with different bonding and hardness.',
  '4-4': 'Example: On a heating curve, ice at 0°C absorbs heat at constant temperature while melting to water.',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Atomic number Z; mass number A; isotopes; electron configuration (Aufbau, Pauli, Hund survey); models: Thomson, Rutherford, Bohr, quantum overview.';
    case 1:
      return 'Periodic law; groups and periods; trends: radius, ionization energy, electronegativity; metals, nonmetals, metalloids.';
    case 2:
      return 'Ionic, covalent, metallic bonding; Lewis structures; polarity; London forces, dipole–dipole, hydrogen bonding.';
    case 3:
      return 'Conservation of mass; balanced equations; reaction types; mole concept; stoichiometry; oxidation numbers; rate and equilibrium (survey).';
    case 4:
      return 'Kinetic theory; gas laws (Boyle, Charles, Avogadro intro); liquids (vapor pressure, surface tension); solids; phase changes and q = mcΔT.';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['atom'], title: 'Proton', question: 'Protons determine:', options: ['Atomic number', 'Only mass number alone', 'Only neutron count', 'Only color'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['atom'], title: 'Neutral', question: 'A neutral atom has:', options: ['Equal protons and electrons', 'No neutrons ever', 'More protons than electrons always', 'No nucleus'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['periodic'], title: 'Group', question: 'Elements in the same group often share:', options: ['Similar valence electron count (main-group survey)', 'Same mass number', 'Same number of shells always', 'No chemical similarity'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['periodic'], title: 'Period', question: 'Across a period, atomic number:', options: ['Increases by 1 per element', 'Decreases', 'Stays constant', 'Doubles each step'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['bonding'], title: 'Ionic', question: 'Ionic compounds are often formed between:', options: ['Metal and nonmetal', 'Two noble gases only', 'Only two metals', 'Only hydrogen'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['bonding'], title: 'Covalent', question: 'A covalent bond involves:', options: ['Shared electrons', 'Transferred electrons only', 'Sea of electrons in metal', 'No electrons'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['reaction'], title: 'Balance', question: 'Balancing equations obeys:', options: ['Conservation of atoms', 'Creation of atoms', 'Random coefficients', 'Only volume conservation'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['reaction'], title: 'Mole', question: 'The mole links:', options: ['Mass and particle count', 'Only color and light', 'Only pressure and volume without T', 'Only ions'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['states'], title: 'Gas', question: 'Gases are highly compressible because:', options: ['Large space between particles', 'Particles are large rigid spheres only false', 'No particle motion', 'Only ionic bonding'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['states'], title: 'Phase', question: 'Melting is a change from:', options: ['Solid to liquid', 'Gas to solid', 'Liquid to gas', 'Plasma to gas'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['atom'], title: 'Mass', question: 'Mass number is:', options: ['Protons + neutrons', 'Protons only', 'Electrons only', 'Neutrons only'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['periodic'], title: 'Metal', question: 'Metals often:', options: ['Conduct electricity and are malleable', 'Are gases at room temperature always', 'Form only covalent networks only', 'Never react'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['bonding'], title: 'Polar', question: 'Polar molecules have:', options: ['Uneven electron distribution', 'No bonds', 'Only ionic bonds inside', 'Zero mass'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['reaction'], title: 'Combustion', question: 'Complete combustion of hydrocarbons in O₂ gives mainly:', options: ['CO₂ and H₂O', 'Only CO always', 'Only C soot always', 'Only H₂'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['states'], title: 'Boyle', question: 'Boyle’s law relates:', options: ['Pressure and volume at constant T', 'Mass and moles only', 'Color and pH', 'Oxidation numbers'], correctAnswer: 0, difficulty: 'Medium' },
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
  const tag = CHAPTER_TAGS[chapterIndex] || 'atom';
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
    `Example: State one key definition from this topic and connect it to a simple numerical or symbolic illustration used in class.`;

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
    ? ['Key ideas and vocabulary for this unit (Grade 9 Chemistry).', formulasBlock].join('\n\n')
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
  // Unit 1 — structure of the atom
  '0-0': 'yBrp8uvNAhI', // Khan Academy — orbitals / atomic structure
  '0-1': 'KWAsz59F8gA', // Khan Academy — nuclear chemistry / subatomic context
  '0-2': '0RRVV4Diomg', // Khan Academy — periodic table (isotope & Z context)
  '0-3': 'SV7U4yAXL5I', // Khan Academy — enthalpy / energy levels survey
  '0-4': 'a8LF7JEb0IA', // Khan Academy — covalent bonding & valence electrons

  // Unit 2 — periodic classification
  '1-0': 'leHy-Y_8nRs', // Crash Course — periodic table & nitrogen group context
  '1-1': '0RRVV4Diomg', // Khan Academy — modern periodic table
  '1-2': 'Z_GWBW_GVGA', // Khan Academy — periodic trends (electronegativity)
  '1-3': 'lQ6FBA1HM3s', // Khan Academy — redox & periodic property links
  '1-4': 'aLuSi_6Ol8M', // Crash Course — carbon cycle / classification applications

  // Unit 3 — bonding
  '2-0': 'kFpLDQfEg1E', // Khan Academy — chemical bonding introduction
  '2-1': 'QXT4OVM4vXI', // Khan Academy — ionic bonding
  '2-2': 'a8LF7JEb0IA', // Khan Academy — covalent bonding
  '2-3': 'IV4IUsholjg', // Khan Academy — metallic / redox conductivity context
  '2-4': 'PVL24HAesnc', // Khan Academy — intermolecular forces

  // Unit 4 — reactions & stoichiometry
  '3-0': 'SV7U4yAXL5I', // Khan Academy — chemical reactions & energy
  '3-1': 'JuWtBR-rDQk', // Khan Academy — enthalpy of reaction / equations
  '3-2': '7qOFtL3VEBc', // Khan Academy — reaction rates
  '3-3': 'tCGUsiXIYhw', // The Organic Chemistry Tutor — stoichiometry
  '3-4': 'lQ6FBA1HM3s', // Khan Academy — oxidation–reduction

  // Unit 5 — states of matter
  '4-0': '7qOFtL3VEBc', // Khan Academy — kinetic model / collision theory
  '4-1': 'DP-vWN1yXrY', // Khan Academy — gas laws & equilibrium (pressure–volume)
  '4-2': 'PVL24HAesnc', // Khan Academy — liquids & intermolecular forces
  '4-3': 'a8LF7JEb0IA', // Khan Academy — molecular structure in solids (survey)
  '4-4': 'JuWtBR-rDQk', // Khan Academy — phase changes & enthalpy
};

const FALLBACK_CHEM_VIDEO_IDS = ['yBrp8uvNAhI', 'QXT4OVM4vXI', 'tCGUsiXIYhw', '0RRVV4Diomg', 'leHy-Y_8nRs'];

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
