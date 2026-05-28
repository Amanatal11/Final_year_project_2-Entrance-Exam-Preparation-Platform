/**
 * Grade 12 Physics — study notes, YouTube URLs, MCQ padding (curriculum + stock).
 * Five units × five topics (25 topics).
 */

const CHAPTER_TAGS = ['application', 'motion2d', 'fluid', 'em', 'electronics'];

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
  '0-0': 'Example: Spectroscopy in chemistry uses physics of light and energy levels to identify elements in stars and lab samples.',
  '0-1': 'Example: Civil engineers apply static equilibrium and material stress when designing bridges that carry traffic safely.',
  '0-2': 'Example: X-ray imaging uses high-energy photons that pass through soft tissue but are absorbed differently by bone (survey).',
  '0-3': 'Example: Radar systems use reflected electromagnetic waves to detect aircraft position and speed (introductory).',
  '0-4': 'Example: Fibre-optic cables transmit information using total internal reflection of light pulses (survey).',
  '1-0': 'Example: A ball launched at 15 m/s at 40° has horizontal component 15 cos 40° and vertical component 15 sin 40° (intro).',
  '1-1': 'Example: A wheel rotating at 120 rev/min converts to angular speed ω = 4π rad/s (intro).',
  '1-2': 'Example: A 0.5 m wrench with 20 N force perpendicular gives torque τ = 10 N·m (intro).',
  '1-3': 'Example: Kepler third law relates orbital period squared to orbital radius cubed for planets (qualitative).',
  '1-4': 'Example: Gravitational force between two masses decreases with distance squared: F = Gm₁m₂/r² (intro).',
  '2-0': 'Example: Pressure at depth h in a liquid of density ρ is approximately P = ρgh (intro).',
  '2-1': 'Example: Hydraulic lift multiplies force because pressure applied to confined fluid transmits equally (Pascal idea).',
  '2-2': 'Example: A block displacing 0.002 m³ of water experiences buoyant force about 20 N if ρ_water = 1000 kg/m³.',
  '2-3': 'Example: Continuity A₁v₁ = A₂v₂ for incompressible flow in a narrowing pipe (intro).',
  '2-4': 'Example: Pressure vessels require safety valves and inspection to prevent rupture from over-pressurization.',
  '3-0': 'Example: A current-carrying wire in a magnetic field can experience a force given by F = BIL sin θ (intro).',
  '3-1': 'Example: Moving a magnet into a coil induces an emf—changing magnetic flux links to Faraday law (qualitative).',
  '3-2': 'Example: A step-up transformer increases voltage while decreasing current for efficient long-distance transmission (ideal intro).',
  '3-3': 'Example: Household AC at 220 V RMS delivers alternating current that reverses direction many times per second (survey).',
  '3-4': 'Example: Radio antennas emit and receive electromagnetic waves carrying modulated information (intro).',
  '4-0': 'Example: Doping silicon with group V atoms adds conduction electrons—n-type semiconductor (intro survey).',
  '4-1': 'Example: A diode allows current mainly in one direction, enabling half-wave rectification of AC (intro).',
  '4-2': 'Example: A transistor in common-emitter layout can amplify a small base current to a larger collector current (survey).',
  '4-3': 'Example: A NAND gate output is low only when both inputs are high—building block of digital logic (intro).',
  '4-4': 'Example: Smartphones integrate microprocessors, sensors, and wireless modules built from semiconductor devices.',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Interdisciplinary physics; engineering and technology; medical imaging; defense and sensing; communication and information systems.';
    case 1:
      return 'Projectile components; angular displacement and ω; torque τ = rF sin θ; Kepler laws (intro); F = Gm₁m₂/r²; centripetal acceleration a = v²/r.';
    case 2:
      return 'Pressure P = F/A; P = ρgh; Pascal principle; buoyant force; continuity equation; Bernoulli idea (survey); safety with pressurized systems.';
    case 3:
      return 'Magnetic force on charges and wires; magnetic flux; Faraday induction; generators; transformers Vp/Vs = Np/Ns (ideal); AC and RMS (intro); EM waves in communication.';
    case 4:
      return 'Semiconductors and doping; diode and rectifier; transistor switch/amplifier (intro); logic gates; integrated circuits and device applications.';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['application'], title: 'Interdisciplinary', question: 'Physics supports chemistry partly through:', options: ['Spectroscopy and energy levels introductory', 'Only grammar rules', 'Only plant names', 'Only map drawing'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['application'], title: 'Engineering', question: 'Bridge design uses physics concepts such as:', options: ['Forces and equilibrium introductory', 'Only poetry rhythm', 'Only spelling', 'Only ancient dates'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['motion2d'], title: 'Projectile', question: 'Projectile horizontal motion has acceleration:', options: ['Zero neglecting air introductory', 'Always 9.8 m/s² horizontal false', 'Infinite', 'Undefined always'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['motion2d'], title: 'Rotation', question: 'Angular velocity ω relates to period T by:', options: ['ω = 2π/T introductory', 'ω = T/2π inverted trap', 'ω = mr always false', 'ω = F/m false'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['motion2d'], title: 'Gravitation', question: 'Universal gravitation force varies with distance as:', options: ['1/r² introductory', '1/r only false', 'r² false', 'Constant always false'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['fluid'], title: 'Pressure', question: 'Pressure in a fluid increases with:', options: ['Depth introductory', 'Height above surface false opposite', 'Zero density always false', 'Only color false'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['fluid'], title: 'Buoyancy', question: 'Archimedes principle states buoyant force equals:', options: ['Weight of displaced fluid introductory', 'Weight of object always false', 'Zero in all cases false', 'Mass times velocity false'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['fluid'], title: 'Continuity', question: 'Continuity equation for incompressible flow links:', options: ['Area and speed introductory A v', 'Only temperature', 'Only charge', 'Only frequency'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['em'], title: 'Magnetism', question: 'Moving charge in magnetic field can experience:', options: ['Magnetic force introductory', 'Only gravitational force always false', 'No forces ever false', 'Only heat false'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['em'], title: 'Induction', question: 'Electromagnetic induction requires:', options: ['Changing magnetic flux introductory', 'Constant flux always zero emf false', 'Zero conductors false', 'Only static charges false'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['em'], title: 'Transformer', question: 'Ideal transformer step-up increases:', options: ['Secondary voltage introductory', 'Power without limit false ideal conserves', 'Primary turns always false ratio', 'Mass false'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['electronics'], title: 'Semiconductor', question: 'Doping changes:', options: ['Charge carrier concentration introductory', 'Speed of light false', 'Gravitational constant false', 'Planck constant false'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['electronics'], title: 'Diode', question: 'A diode mainly conducts when:', options: ['Forward biased introductory', 'Reverse biased always false normally blocks', 'Unbiased always large current false', 'Temperature zero false'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['electronics'], title: 'Logic', question: 'A NAND gate is universal because:', options: ['Other gates can be built from NAND introductory survey', 'It has no output false', 'It only adds numbers false', 'It stores water false'], correctAnswer: 0, difficulty: 'Hard' },
  { tags: ['application'], title: 'Medical', question: 'MRI uses strong magnetic fields to affect:', options: ['Nuclear spins introductory survey', 'Only visible light false', 'Only sound in vacuum false', 'Earth orbit false'], correctAnswer: 0, difficulty: 'Medium' },
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
  const tag = CHAPTER_TAGS[chapterIndex] || 'application';
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
    `Example: State one key definition from this topic and connect it to a simple numerical illustration used in class.`;

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
    ? ['Key ideas and vocabulary for this unit (Grade 12 Physics).', formulasBlock].join('\n\n')
    : '';

  const pWorked = ['Worked example (this topic only).', sanitizePlain(worked)].join('\n\n');

  return {
    title: `Topic notes — ${topicLabel}`,
    content: [pTopic, pFormulas, pWorked].filter(Boolean).join('\n\n'),
  };
}

/** One oEmbed-verified video ID per topic (25 unique). */
const TOPIC_YOUTUBE_VIDEO_IDS = {
  '0-0': 'uIojjqSm0m4',
  '0-1': 'IBZlQ1UCKeI',
  '0-2': 'KWAsz59F8gA',
  '0-3': 'tdEE5uvFhOM',
  '0-4': '508ZsmsIlno',
  '1-0': 'MsbEDfgOfeU',
  '1-1': 'mzatvUid9Pw',
  '1-2': 'nWx5zCJSOU8',
  '1-3': 'HpcTJW4ur54',
  '1-4': 'rjkQcfw5fkM',
  '2-0': 'tuSC0ObB-qY',
  '2-1': 'ABsVP41-EeY',
  '2-2': 'IO9tT186mZw',
  '2-3': 'BL2MtP7j-xk',
  '2-4': 'VRWRmIEHr3A',
  '3-0': 'SCnGfE7qxHc',
  '3-1': 's94suB5uLWw',
  '3-2': 'bHIhgxav9LY',
  '3-3': '-w-VTw0tQlE',
  '3-4': '7tsWsovuq1U',
  '4-0': 'TFlVWf8JX4A',
  '4-1': 'HXOok3mfMLM',
  '4-2': 'g-wjP1otQWI',
  '4-3': 'ZrMltpK6iAw',
  '4-4': 'hisHAgQ5JKw',
};

const FALLBACK_PHYS_VIDEO_IDS = [
  'uIojjqSm0m4',
  'MsbEDfgOfeU',
  'tuSC0ObB-qY',
  'SCnGfE7qxHc',
  'TFlVWf8JX4A',
];

function pickRandomTopicVideo({ chapterIndex, topicIndex, topicName, gradeLevel }) {
  const key = `${chapterIndex}-${topicIndex}`;
  let id = TOPIC_YOUTUBE_VIDEO_IDS[key];
  if (!id) {
    id = FALLBACK_PHYS_VIDEO_IDS[hashPair(chapterIndex, topicIndex) % FALLBACK_PHYS_VIDEO_IDS.length];
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
