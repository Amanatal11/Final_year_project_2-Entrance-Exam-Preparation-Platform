/**
 * Grade 10 Physics — study notes, YouTube URLs, MCQ padding (curriculum + stock).
 * Six units × five topics (30 topics).
 */

const CHAPTER_TAGS = ['vector', 'motion', 'elastic', 'electric', 'magnet', 'optics'];

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
  '0-0': 'Example: Displacement 5 m east is a vector; distance walked along a curved path may be 8 m—a scalar.',
  '0-1': 'Example: A force arrow 4 cm long at 30° above +x can represent 20 N at that direction on a scaled diagram.',
  '0-2': 'Example: If A = 3 m east and B = 4 m north, resultant magnitude |A + B| = 5 m by Pythagoras.',
  '0-3': 'Example: Tip-to-tail construction of two forces on paper gives the resultant direction visually.',
  '0-4': 'Example: A 10 N force at 37° above horizontal has components about 8 N horizontal and 6 N vertical (intro trig).',
  '1-0': 'Example: Moving from x = +4 m to x = −1 m gives displacement Δx = −5 m on a chosen axis.',
  '1-1': 'Example: Average velocity = Δx/Δt; if Δx = 60 m in 12 s, v_avg = 5 m/s along the axis.',
  '1-2': 'Example: A car changes velocity from 10 m/s to 22 m/s in 4 s has a = (22 − 10)/4 = 3 m/s².',
  '1-3': 'Example: From rest with a = 2 m/s² for 5 s, v = at = 10 m/s and s = ½at² = 25 m.',
  '1-4': 'Example: Area under a v–t graph from 0 to 4 s gives displacement; slope of v–t gives acceleration.',
  '2-0': 'Example: A spring stretched within its elastic limit returns to original length when the load is removed.',
  '2-1': 'Example: An object with mass 200 g and volume 250 cm³ has density ρ = m/V = 0.8 g/cm³.',
  '2-2': 'Example: Stress σ = F/A; doubling force on the same area doubles stress (intro).',
  '2-3': 'Example: Steel has a larger Young modulus than rubber—less strain for the same stress in the elastic region.',
  '2-4': 'Example: A balanced meter rule on a pivot has Στ = 0; clockwise and anticlockwise torques cancel.',
  '3-0': 'Example: Rubbing a comb on hair can transfer charge so the comb attracts small paper bits (static).',
  '3-1': 'Example: Two like point charges repel; Coulomb force decreases with distance squared (intro).',
  '3-2': 'Example: In a simple circuit, I = V/R; a 12 V battery across 4 Ω gives I = 3 A (Ohm law).',
  '3-3': 'Example: Two 6 Ω resistors in parallel give equivalent resistance 3 Ω (intro formula).',
  '3-4': 'Example: Never touch live wires with wet hands—water lowers body resistance and increases shock risk.',
  '4-0': 'Example: Like magnetic poles repel; unlike poles attract when brought near each other.',
  '4-1': 'Example: A compass needle aligns roughly north–south because it responds to Earth magnetic field.',
  '4-2': 'Example: A straight wire carrying current produces a magnetic field circling the wire (right-hand rule intro).',
  '4-3': 'Example: Parallel current-carrying wires can attract or repel depending on current directions.',
  '4-4': 'Example: Electric motors use magnetic forces on current in coils to produce rotation (survey).',
  '5-0': 'Example: Radio waves, microwaves, visible light, and X-rays are all electromagnetic waves at different frequencies.',
  '5-1': 'Example: Light reflecting from a smooth mirror follows angle of incidence equals angle of reflection.',
  '5-2': 'Example: A converging lens can form a real inverted image when the object is beyond the focal length.',
  '5-3': 'Example: The eye lens adjusts focus so a clear image forms on the retina for objects at different distances.',
  '5-4': 'Example: Red + green + blue light added can produce white in additive color mixing (intro).',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Scalars vs vectors; component form; vector addition/subtraction; tip-to-tail and parallelogram methods; resolution using sin and cos.';
    case 1:
      return 'Displacement; average and instantaneous velocity; acceleration; v = u + at, s = ut + ½at², v² = u² + 2as; v–t and x–t graphs; relative velocity (1D).';
    case 2:
      return 'Elastic vs plastic deformation; ρ = m/V; stress = F/A; strain = ΔL/L; Young modulus Y = stress/strain; ΣF = 0 and Στ = 0 for equilibrium.';
    case 3:
      return 'Charge and charging; Coulomb law (intro); electric field; current, voltage, resistance; Ohm law V = IR; series and parallel resistors; electrical safety.';
    case 4:
      return 'Magnetic poles and fields; Earth field and compass; field of current; force on charges and wires; applications (motors, speakers survey).';
    case 5:
      return 'EM spectrum; reflection and refraction; mirrors and lenses; eye and instruments; additive and subtractive color (intro).';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['vector'], title: 'Scalar', question: 'Which is a scalar?', options: ['Speed', 'Velocity', 'Force', 'Displacement'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['vector'], title: 'Vector', question: 'A vector has:', options: ['Magnitude and direction', 'Only magnitude', 'No units', 'Only color'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['motion'], title: 'Accel', question: 'Uniform acceleration means:', options: ['Constant a', 'Constant speed always', 'Zero displacement', 'No time'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['motion'], title: 'Graph', question: 'Slope of v–t graph gives:', options: ['Acceleration', 'Displacement directly', 'Mass', 'Charge'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['elastic'], title: 'Density', question: 'Density equals:', options: ['Mass per volume', 'Volume per mass', 'Force per area', 'Work per time'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['elastic'], title: 'Stress', question: 'Stress has units like:', options: ['Pa (N/m²)', 'm/s', 'kg only', 'J only'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['electric'], title: 'Charge', question: 'Like charges:', options: ['Repel', 'Attract always', 'Have no force', 'Cancel mass'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['electric'], title: 'Ohm', question: 'Ohm law relates:', options: ['V, I, and R', 'Only mass and weight', 'Only heat and temp', 'Only frequency'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['magnet'], title: 'Poles', question: 'Magnetic field lines leave:', options: ['North pole (convention)', 'South pole only always', 'Only iron', 'Only vacuum'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['magnet'], title: 'Compass', question: 'A compass responds to:', options: ['Earth magnetic field', 'Only gravity', 'Only sound', 'Only heat'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['optics'], title: 'EM', question: 'Visible light is part of:', options: ['Electromagnetic spectrum', 'Only sound spectrum', 'Only heat only', 'Only gravity'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['optics'], title: 'Reflect', question: 'Law of reflection:', options: ['Angle i = angle r', 'Angle i = 2 angle r always', 'No angles', 'Only refraction'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['motion'], title: 'Suvat', question: 'From rest, s = ½at² applies when:', options: ['a is constant and u = 0', 'a changes randomly', 'No displacement', 'Only circular motion'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['electric'], title: 'Series', question: 'In series, current is:', options: ['Same through each resistor (intro)', 'Always zero', 'Different in each always', 'Only in parallel'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['optics'], title: 'Lens', question: 'A converging lens can:', options: ['Focus parallel rays (intro)', 'Create mass', 'Stop reflection', 'Remove refraction'], correctAnswer: 0, difficulty: 'Medium' },
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
  const tag = CHAPTER_TAGS[chapterIndex] || 'vector';
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
    ? ['Key ideas and vocabulary for this unit (Grade 10 Physics).', formulasBlock].join('\n\n')
    : '';

  const pWorked = ['Worked example (this topic only).', sanitizePlain(worked)].join('\n\n');

  return {
    title: `Topic notes — ${topicLabel}`,
    content: [pTopic, pFormulas, pWorked].filter(Boolean).join('\n\n'),
  };
}

/**
 * One video ID per topic. Mix: Khan Academy, Crash Course Physics, FuseSchool, TED-Ed, FreeSchool.
 * Each id verified with youtube.com/oembed (embeddable).
 */
const TOPIC_YOUTUBE_VIDEO_IDS = {
  // Unit 1 — vector quantities
  '0-0': 'ihNZlp7iUHE', // Khan Academy — vectors and scalars
  '0-1': 'uIojjqSm0m4', // Khan Academy — introduction to physics (representations)
  '0-2': 'JGO_zDWmkvk', // TED-Ed — Newton laws and vector forces (bicycle)
  '0-3': 'giP5YGe7tjI', // Math and Science — force, motion, and waves survey
  '0-4': 'EGqpLug-sDk', // FuseSchool — speed, distance, time (component ideas)

  // Unit 2 — uniformly accelerated motion
  '1-0': 'vQCkYm3v3aA', // Khan Academy — distance and displacement
  '1-1': 'vOipqtdR23s', // Khan Academy — position, velocity, and speed
  '1-2': 'JSPwCtIPfQw', // Khan Academy — acceleration
  '1-3': 'ZM8ECpBuQYE', // Crash Course Physics #1 — motion in a straight line
  '1-4': 'MsbEDfgOfeU', // Free Animated Education — physics of motion (graphs)

  // Unit 3 — elasticity and static equilibrium
  '2-0': 'jxstE6A_CYQ', // Crash Course Physics #16 — simple harmonic motion (spring elasticity)
  '2-1': 'w4QFJb9a8vo', // Crash Course Physics #9 — work, energy, and power (density energy link)
  '2-2': 'bCucggordMM', // TED — science of friction (stress and materials intro)
  '2-3': 'nWx5zCJSOU8', // FuseSchool — gears and levers (stiffness and materials)
  '2-4': 'JnYVz1TSmBQ', // How levers, pulleys and gears work (equilibrium)

  // Unit 4 — static and current electricity
  '3-0': 'TFlVWf8JX4A', // Crash Course Physics #25 — electric charge
  '3-1': 'mdulzEfQXDE', // Crash Course Physics #26 — electric fields
  '3-2': 'HXOok3mfMLM', // Crash Course Physics #28 — electric current and Ohm law
  '3-3': 'g-wjP1otQWI', // Crash Course Physics #29 — DC resistors and batteries
  '3-4': 'VRWRmIEHr3A', // Crash Course Chemistry #21 — lab techniques and safety

  // Unit 5 — magnetism
  '4-0': 'SCnGfE7qxHc', // FuseSchool — magnets and magnetic fields
  '4-1': 's94suB5uLWw', // Crash Course Physics #32 — magnetism and Earth field
  '4-2': 'bHIhgxav9LY', // Veritasium — electricity and magnetism connection
  '4-3': 'hisHAgQ5JKw', // Bill Nye — static electricity and charges in motion
  '4-4': 'IBZlQ1UCKeI', // Science Trek — forces and motion in technology

  // Unit 6 — EM waves and geometrical optics
  '5-0': '508ZsmsIlno', // FuseSchool — electromagnetic waves
  '5-1': '7tsWsovuq1U', // Exploring light energy — reflection and refraction
  '5-2': 'Oh4m8Ees-3Q', // Crash Course Physics #38 — geometric optics
  '5-3': 'EVQxyBCDKAw', // Light reflection and refraction (Grade 10 optics)
  '5-4': '9Vsl0Iom3S0', // FreeSchool — light, color, and electromagnetic spectrum
};

const FALLBACK_PHYS_VIDEO_IDS = [
  'ihNZlp7iUHE',
  'ZM8ECpBuQYE',
  'TFlVWf8JX4A',
  's94suB5uLWw',
  'Oh4m8Ees-3Q',
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
