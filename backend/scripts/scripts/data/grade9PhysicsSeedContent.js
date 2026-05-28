/**
 * Grade 9 Physics — study notes, YouTube URLs, MCQ padding (curriculum + stock).
 * Seven units × five topics (35 topics).
 */

const CHAPTER_TAGS = ['society', 'measure', 'motion', 'forces', 'machines', 'waves', 'thermal'];

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
  '0-0': 'Example: A falling apple and a planet orbiting the Sun are both described using the same gravitational ideas—physics links everyday events to universal laws.',
  '0-1': 'Example: A loudspeaker problem may involve acoustics (sound) and electromagnetism (coil and magnet) together, showing how branches connect.',
  '0-2': 'Example: MRI scanners use strong magnetic fields and radio waves—physics principles applied in modern medicine.',
  '0-3': 'Example: Galileo’s inclined-plane experiments supported the idea that motion can be studied mathematically rather than only philosophically.',
  '0-4': 'Example: A hypothesis such as “heavier objects fall faster” can be tested by timing drops and comparing results fairly.',
  '1-0': 'Example: Displacement is a vector (5 m east) while distance traveled along a curved path may be 8 m—both have units of meters but different meanings.',
  '1-1': 'Example: Speed 72 km/h converts to 20 m/s using 1000 m per km and 3600 s per hour.',
  '1-2': 'Example: Measuring 2.45 cm with a ruler implies three significant figures; reporting 2.450 cm would falsely suggest extra precision.',
  '1-3': 'Example: If v = 10 m/s and t = 4 s, displacement for constant velocity is Δx = vt = 40 m (introductory use).',
  '1-4': 'Example: Read a meniscus at eye level and wear goggles when heating liquids—standard lab practice tied to accurate, safe measurement.',
  '2-0': 'Example: Walking 3 m east then 4 m north gives displacement magnitude 5 m (Pythagoras), though path length is 7 m.',
  '2-1': 'Example: A car’s speedometer shows speed (scalar); “60 km/h north” describes velocity (vector).',
  '2-2': 'Example: A bike speeding up from 2 m/s to 6 m/s in 2 s has average acceleration a = Δv/Δt = 2 m/s².',
  '2-3': 'Example: On a velocity–time graph, a horizontal line means constant velocity; a sloped line means acceleration.',
  '2-4': 'Example: From rest with a = 2 m/s² for 3 s, v = at = 6 m/s and s = ½at² = 9 m (suvat intro).',
  '3-0': 'Example: A book on a table stays at rest because the normal force balances weight—net force zero (intro).',
  '3-1': 'Example: A passenger lurches forward when a bus brakes because the body tends to keep moving (inertia).',
  '3-2': 'Example: A 2 kg object with net force 6 N accelerates at a = F/m = 3 m/s² (Newton’s second law).',
  '3-3': 'Example: Earth pulls you down and you pull Earth up with equal magnitude forces (Newton’s third law pair).',
  '3-4': 'Example: Lifting a 10 N book 2 m vertically does work W = Fd = 20 J (intro, force parallel to displacement).',
  '4-0': 'Example: A lever multiplies force: pushing down 1 m on the long arm can lift a load a smaller distance with greater force.',
  '4-1': 'Example: A single fixed pulley changes direction but ideal mechanical advantage is 1; a block and tackle can give MA > 1.',
  '4-2': 'Example: A screw is an inclined plane wrapped around a cylinder—small input force over a long distance can produce large squeezing force.',
  '4-3': 'Example: If MA = 4, an 800 N load can be lifted with about 200 N ideal input force (ignoring friction).',
  '4-4': 'Example: Efficiency = (useful output work / input work) × 100%; friction lowers efficiency below 100%.',
  '5-0': 'Example: A wave with frequency 2 Hz and wavelength 3 m travels at v = fλ = 6 m/s in the medium.',
  '5-1': 'Example: A mass on a spring oscillates between maximum kinetic energy at the center and maximum elastic PE at the ends.',
  '5-2': 'Example: A simple pendulum’s period depends mainly on length and g at introductory level (small-angle approximation).',
  '5-3': 'Example: Sound needs a medium; in vacuum you cannot hear an explosion because air is absent to carry compression waves.',
  '5-4': 'Example: Ultrasound echoes locate boundaries inside the body—reflection of high-frequency sound pulses.',
  '6-0': 'Example: Heat flows from hot tea to cooler air until temperatures equalize; heat is energy transfer, not “stored heat” as a substance.',
  '6-1': 'Example: Water freezes at 0°C and boils at 100°C at standard pressure—Celsius scale tied to phase changes.',
  '6-2': 'Example: A liquid-in-glass thermometer expands with temperature; calibration marks convert column height to °C.',
  '6-3': 'Example: A steel bridge expansion joint prevents buckling when summer heat increases rail or beam length slightly.',
  '6-4': 'Example: Weather forecasting uses temperature sensors; industry monitors furnaces and refrigerators for safe, efficient operation.',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Physics scope; branches (mechanics, waves, thermodynamics, E&M, optics survey); technology links; scientific method; careers.';
    case 1:
      return 'Physical quantities; SI base units and prefixes; accuracy, precision, significant figures; unit conversion; lab safety.';
    case 2:
      return 'Distance vs displacement; speed vs velocity; acceleration; motion graphs; uniform acceleration: v = u + at, s = ut + ½at² (intro).';
    case 3:
      return 'Force (N); Newton’s laws; friction; work W = Fd cos θ; kinetic and potential energy; power P = W/t.';
    case 4:
      return 'Simple machines; lever, pulley, inclined plane, wedge, screw; MA and VR; efficiency η = useful output / input.';
    case 5:
      return 'Wave terms: amplitude, period, frequency, wavelength; SHM; v = fλ; sound properties and applications.';
    case 6:
      return 'Temperature vs heat; Celsius and Kelvin; thermometers; linear expansion ΔL = αL₀ΔT (intro); applications.';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['society'], title: 'Physics', question: 'Physics studies:', options: ['Matter, energy, and their interactions', 'Only living cells', 'Only ancient languages', 'Only map drawing'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['society'], title: 'Experiment', question: 'A good experiment should be:', options: ['Testable and repeatable', 'Based only on opinion', 'Avoid measurement', 'Ignore safety'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['measure'], title: 'SI', question: 'The SI unit of length is:', options: ['Meter', 'Kilogram', 'Second', 'Newton'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['measure'], title: 'Vector', question: 'Which quantity is a vector?', options: ['Velocity', 'Speed', 'Mass', 'Temperature'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['motion'], title: 'Acceleration', question: 'Acceleration is the rate of change of:', options: ['Velocity', 'Mass', 'Distance only', 'Temperature'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['motion'], title: 'Displacement', question: 'Displacement has:', options: ['Magnitude and direction', 'Only magnitude', 'No units', 'Only color'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['forces'], title: 'Newton 1', question: 'Newton’s first law is also called the law of:', options: ['Inertia', 'Gravitation only', 'Conservation of charge', 'Reflection'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['forces'], title: 'Newton 2', question: 'Newton’s second law states F equals:', options: ['ma', 'mv only always', 'm/a', 'Zero always'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['machines'], title: 'MA', question: 'Mechanical advantage compares:', options: ['Output force to input force (ideal)', 'Mass to time', 'Heat to work only', 'Speed to color'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['machines'], title: 'Lever', question: 'A lever helps by:', options: ['Trading distance for force (ideal model)', 'Creating energy from nothing', 'Eliminating friction always', 'Changing mass'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['waves'], title: 'Medium', question: 'Sound typically needs:', options: ['A material medium', 'Only vacuum', 'Only light', 'No particles'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['waves'], title: 'Frequency', question: 'Higher frequency sound is perceived as:', options: ['Higher pitch', 'Lower pitch', 'Louder always', 'Slower speed in all media'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['thermal'], title: 'Heat', question: 'Heat is:', options: ['Energy transfer due to temperature difference', 'The same as temperature', 'A type of matter', 'Always zero in solids'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['thermal'], title: 'Celsius', question: 'At standard pressure water boils at:', options: ['100°C', '0°C', '273°C', '−100°C'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['forces'], title: 'Work', question: 'Work is done when:', options: ['Force has a component along displacement', 'Force is perpendicular to motion only', 'Object has no mass', 'Time is zero'], correctAnswer: 0, difficulty: 'Medium' },
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
  const tag = CHAPTER_TAGS[chapterIndex] || 'society';
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
    ? ['Key ideas and vocabulary for this unit (Grade 9 Physics).', formulasBlock].join('\n\n')
    : '';

  const pWorked = ['Worked example (this topic only).', sanitizePlain(worked)].join('\n\n');

  return {
    title: `Topic notes — ${topicLabel}`,
    content: [pTopic, pFormulas, pWorked].filter(Boolean).join('\n\n'),
  };
}

/**
 * One video ID per topic. Mix: Khan Academy, Crash Course Physics, FuseSchool, FreeSchool, TED-Ed, Veritasium.
 * Each id verified with youtube.com/oembed (embeddable).
 */
const TOPIC_YOUTUBE_VIDEO_IDS = {
  // Unit 1 — physics and human society
  '0-0': 'uIojjqSm0m4', // Khan Academy — introduction to physics
  '0-1': 'giP5YGe7tjI', // Math and Science — energy, force, motion and waves survey
  '0-2': 'bHIhgxav9LY', // Veritasium — electricity and technology context
  '0-3': '8yis7GzlXNM', // Epic Rap Battles — Newton (historical figure awareness)
  '0-4': 'A-QgGXbDyR0', // TED-Ed — perpetual motion and scientific inquiry

  // Unit 2 — physical quantities
  '1-0': 'ihNZlp7iUHE', // Khan Academy — vectors and scalars
  '1-1': 'EGqpLug-sDk', // FuseSchool — speed, distance, time and units
  '1-2': 'Umk7qQOo4qM', // Significant figures and error analysis
  '1-3': 'ZM8ECpBuQYE', // Crash Course Physics #1 — motion in a straight line
  '1-4': 'VRWRmIEHr3A', // Crash Course Chemistry #21 — lab techniques and safety

  // Unit 3 — motion in a straight line
  '2-0': 'vQCkYm3v3aA', // Khan Academy — distance and displacement
  '2-1': 'vOipqtdR23s', // Khan Academy — position, velocity, and speed
  '2-2': 'JSPwCtIPfQw', // Khan Academy — acceleration
  '2-3': 'MsbEDfgOfeU', // Free Animated Education — physics of motion
  '2-4': 'qBjmO8w-QqU', // FuseSchool — inertia and uniform motion intro

  // Unit 4 — force, work, energy, and power
  '3-0': 'rjkQcfw5fkM', // Khan Academy — Newton's first law (and force concept)
  '3-1': '0efXaBr_JcU', // FuseSchool — Newton's second law
  '3-2': 'JGO_zDWmkvk', // TED-Ed — Newton's three laws (bicycle)
  '3-3': 'fo_pmp5rtzo', // Crash Course Physics #6 — friction
  '3-4': 'v2_qI9S6oIQ', // Khan Academy — work and power

  // Unit 5 — simple machines
  '4-0': 'fvOmaf2GfCY', // FreeSchool — simple machines
  '4-1': 'r3Ru1zZjvug', // Simple Machines: The Pulley
  '4-2': 'JnYVz1TSmBQ', // How levers, pulleys and gears work
  '4-3': 'nWx5zCJSOU8', // FuseSchool — gears and levers
  '4-4': 'w4QFJb9a8vo', // Crash Course Physics #9 — work, energy, and power

  // Unit 6 — mechanical oscillation and sound
  '5-0': 'tJW_a6JeXD8', // Khan Academy — amplitude, period, frequency, wavelength
  '5-1': 'jxstE6A_CYQ', // Crash Course Physics #16 — simple harmonic motion
  '5-2': 'mzatvUid9Pw', // Khan Academy — period of a pendulum
  '5-3': '9u1PjsBfrmg', // Khan Academy — sound waves
  '5-4': 'IBZlQ1UCKeI', // Science Trek — forces and motion in society

  // Unit 7 — temperature and thermometer
  '6-0': 'tuSC0ObB-qY', // Crash Course Physics #22 — heat
  '6-1': '6BHbJ_gBOk0', // Crash Course Physics #20 — temperature
  '6-2': 'ABsVP41-EeY', // Hot air balloons — temperature and buoyancy applications
  '6-3': 'IO9tT186mZw', // FreeSchool — water cycle and phase changes
  '6-4': '9Vsl0Iom3S0', // FreeSchool — light and electromagnetic spectrum applications
};

const FALLBACK_PHYS_VIDEO_IDS = [
  'uIojjqSm0m4',
  'vQCkYm3v3aA',
  'rjkQcfw5fkM',
  'jxstE6A_CYQ',
  '6BHbJ_gBOk0',
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
