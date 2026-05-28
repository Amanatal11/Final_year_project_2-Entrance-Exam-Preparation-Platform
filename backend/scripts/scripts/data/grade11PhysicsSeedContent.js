/**
 * Grade 11 Physics — study notes, YouTube URLs, MCQ padding (curriculum + stock).
 * Seven units × five topics (35 topics).
 */

const CHAPTER_TAGS = ['society', 'vector', 'motion', 'dynamics', 'heat', 'electric', 'nuclear'];

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
  '0-0': 'Example: GPS navigation relies on precise timing of satellite signals—physics principles underpin the technology millions use daily.',
  '0-1': 'Example: A research physicist publishes findings; peer review by other scientists helps verify results before they enter textbooks.',
  '0-2': 'Example: Galileo dropped objects to test whether heavier bodies fall faster—a hypothesis refuted by careful measurement.',
  '0-3': 'Example: Medical physicists calibrate radiation equipment in hospitals—a career path linking school physics to health care.',
  '0-4': 'Example: Renewable energy research applies thermodynamics and electromagnetism to improve solar panel efficiency.',
  '1-0': 'Example: Displacement 40 m at 30° north of east is a vector; speed 40 m/s along a path is a scalar.',
  '1-1': 'Example: A 50 N force at 37° has components about 40 N horizontal and 30 N vertical using sin and cos.',
  '1-2': 'Example: If A = 6 m east and B = 8 m north, |A + B| = 10 m by Pythagoras.',
  '1-3': 'Example: Resultant of two equal and opposite forces is zero; unequal forces give a non-zero resultant.',
  '1-4': 'Example: Work W = F·d cos θ links the dot product to energy transfer along a displacement.',
  '2-0': 'Example: From rest with a = 3 m/s² for 4 s, v = 12 m/s and s = ½at² = 24 m.',
  '2-1': 'Example: Slope of a v–t graph gives acceleration; area under v–t gives displacement.',
  '2-2': 'Example: A ball launched at 20 m/s at 45° has horizontal and vertical motion analyzed separately (intro).',
  '2-3': 'Example: An object dropped from rest falls about 4.9 m in the first second near Earth surface (g ≈ 9.8 m/s²).',
  '2-4': 'Example: A point moving at constant speed in a circle has changing velocity direction—centripetal acceleration (intro).',
  '3-0': 'Example: A 2 kg block pushed with 10 N net force accelerates at a = F/m = 5 m/s² (Newton second law).',
  '3-1': 'Example: Static friction can match an applied force up to a maximum value before sliding begins.',
  '3-2': 'Example: Lifting a 5 kg mass 2 m vertically requires about 98 J of work against gravity (mgh).',
  '3-3': 'Example: A pendulum exchanges KE and PE; ignoring friction, total mechanical energy stays constant (intro).',
  '3-4': 'Example: Two carts colliding on a track conserve total momentum if external horizontal forces are negligible.',
  '4-0': 'Example: Heat flows from hot coffee to a cooler spoon by conduction through the metal handle.',
  '4-1': 'Example: Q = mcΔT: heating 1 kg of water (c ≈ 4200 J/kg·K) by 10 K requires about 42 kJ.',
  '4-2': 'Example: A steel bridge includes expansion joints so ΔL = αL₀ΔT does not buckle the structure in summer.',
  '4-3': 'Example: Ice at 0 °C absorbs latent heat of fusion while melting without changing temperature.',
  '4-4': 'Example: Mixing hot and cold water in a calorimeter uses energy conservation: Q lost = Q gained (intro).',
  '5-0': 'Example: Two like point charges repel; Coulomb force decreases with distance squared (intro).',
  '5-1': 'Example: Moving a positive test charge against an electric field increases electric potential energy (intro).',
  '5-2': 'Example: A 12 V battery across 4 Ω gives I = V/R = 3 A by Ohm law.',
  '5-3': 'Example: Two 6 Ω resistors in parallel give equivalent resistance 3 Ω; power P = IV for each branch.',
  '5-4': 'Example: A household circuit uses fuses or breakers to limit current and reduce fire risk from overload.',
  '6-0': 'Example: A carbon-12 nucleus has 6 protons and 6 neutrons; mass number A = 12 (intro notation).',
  '6-1': 'Example: Alpha decay reduces mass number by 4 and atomic number by 2; beta decay changes a neutron to a proton (survey).',
  '6-2': 'Example: Nuclear fission splits a heavy nucleus; fusion combines light nuclei—both release energy (intro).',
  '6-3': 'Example: E = mc² shows a small mass defect in a nucleus corresponds to large binding energy (qualitative).',
  '6-4': 'Example: Radiation workers use shielding and distance to limit dose; medical imaging balances benefit and risk.',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Physics in technology and society; scientific community; models, theories, and laws; STEM careers; emerging fields (energy, space, materials).';
    case 1:
      return 'Scalars vs vectors; unit vectors; resolution A_x = A cos θ, A_y = A sin θ; tip-to-tail and component addition; dot product W = F·d cos θ; cross product direction (intro).';
    case 2:
      return '1D UAM: v = u + at, s = ut + ½at², v² = u² + 2as; motion graphs; projectile components; free fall; uniform circular motion v = 2πr/T, a_c = v²/r (intro).';
    case 3:
      return 'Newton laws; friction static/kinetic; W = Fd cos θ; KE = ½mv²; PE = mgh; conservation of mechanical energy; impulse J = FΔt; momentum p = mv; collisions (elastic/inelastic intro).';
    case 4:
      return 'Heat vs temperature; Q = mcΔT; linear expansion ΔL = αL₀ΔT; latent heat Q = mL; calorimetry; conduction (intro).';
    case 5:
      return 'Coulomb law (intro); electric field and potential; capacitance (intro); Ohm law V = IR; series/parallel resistors; electrical power P = IV; household safety.';
    case 6:
      return 'Nucleons and isotopes; alpha, beta, gamma decay (survey); fission and fusion; mass defect and binding energy; applications and radiation safety.';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['society'], title: 'Physics role', question: 'Physics helps explain:', options: ['Natural phenomena and technology', 'Only grammar rules', 'Only ancient myths', 'Only sports scores'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['society'], title: 'Method', question: 'Physics knowledge grows through:', options: ['Evidence and peer review', 'Guessing only', 'Ignoring data', 'Avoiding experiments'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['vector'], title: 'Vector', question: 'A vector quantity has:', options: ['Magnitude and direction', 'Only magnitude', 'No units', 'Only color'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['vector'], title: 'Components', question: 'Resolving a vector splits it into:', options: ['Perpendicular components', 'Only scalars', 'Only heat values', 'Only charge'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['motion'], title: 'Accel', question: 'Uniform acceleration means:', options: ['Constant acceleration', 'Constant speed always', 'Zero displacement', 'No time'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['motion'], title: 'Graph', question: 'Slope of v–t graph gives:', options: ['Acceleration', 'Displacement directly', 'Mass', 'Charge'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['motion'], title: 'Projectile', question: 'Projectile motion has:', options: ['Independent horizontal and vertical components', 'Only vertical motion', 'No gravity', 'Constant velocity in all directions'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['dynamics'], title: 'Newton 2', question: 'Newton second law states F equals:', options: ['ma (net force)', 'mv always', 'mg only', 'Zero always'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['dynamics'], title: 'Friction', question: 'Kinetic friction acts:', options: ['Opposite to sliding direction', 'Same as motion always aiding', 'Only vertically', 'Only in vacuum'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['dynamics'], title: 'Momentum', question: 'Linear momentum equals:', options: ['Mass times velocity', 'Mass divided by velocity', 'Force times distance', 'Energy only'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['heat'], title: 'Heat', question: 'Heat is:', options: ['Energy transfer due to temperature difference', 'Same as temperature always', 'Only a substance', 'Only coldness'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['heat'], title: 'Specific heat', question: 'Q = mcΔT uses:', options: ['Specific heat capacity c', 'Only latent heat', 'Only pressure', 'Only voltage'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['heat'], title: 'Latent', question: 'During melting at constant temperature:', options: ['Latent heat is absorbed', 'No energy transfer', 'Temperature rises quickly', 'Mass disappears'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['electric'], title: 'Ohm', question: 'Ohm law relates:', options: ['V, I, and R', 'Only mass and weight', 'Only heat and temp', 'Only frequency'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['electric'], title: 'Power', question: 'Electrical power P equals:', options: ['IV', 'IR only always', 'V/R only', 'I/R'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['electric'], title: 'Safety', question: 'Wet hands increase shock risk because:', options: ['Body resistance decreases', 'Voltage increases', 'Current stops', 'Resistance increases'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['nuclear'], title: 'Nucleus', question: 'Nucleons are:', options: ['Protons and neutrons', 'Only electrons', 'Only photons', 'Only quarks free in room'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['nuclear'], title: 'Decay', question: 'Radioactive decay is:', options: ['Random for individual nuclei (intro)', 'Predictable for one atom always', 'Impossible', 'Only chemical'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['nuclear'], title: 'E=mc2', question: 'E = mc² shows:', options: ['Mass and energy are related', 'Mass cannot change', 'Energy has no units', 'Only chemical bonds matter'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['dynamics'], title: 'Energy', question: 'Mechanical energy conservation applies when:', options: ['Non-conservative work is negligible (intro)', 'Friction is always large', 'Gravity is zero always', 'Mass is zero'], correctAnswer: 0, difficulty: 'Hard' },
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
    ? ['Key ideas and vocabulary for this unit (Grade 11 Physics).', formulasBlock].join('\n\n')
    : '';

  const pWorked = ['Worked example (this topic only).', sanitizePlain(worked)].join('\n\n');

  return {
    title: `Topic notes — ${topicLabel}`,
    content: [pTopic, pFormulas, pWorked].filter(Boolean).join('\n\n'),
  };
}

/** One oEmbed-verified video ID per topic (35 unique). */
const TOPIC_YOUTUBE_VIDEO_IDS = {
  '0-0': 'giP5YGe7tjI',
  '0-1': 'IBZlQ1UCKeI',
  '0-2': 'uIojjqSm0m4',
  '0-3': 'tdEE5uvFhOM',
  '0-4': 'HpcTJW4ur54',
  '1-0': 'ihNZlp7iUHE',
  '1-1': 'EGqpLug-sDk',
  '1-2': 'JGO_zDWmkvk',
  '1-3': '92Adbb6geHE',
  '1-4': 'Umk7qQOo4qM',
  '2-0': 'ZM8ECpBuQYE',
  '2-1': 'JSPwCtIPfQw',
  '2-2': 'MsbEDfgOfeU',
  '2-3': 'vQCkYm3v3aA',
  '2-4': 'mzatvUid9Pw',
  '3-0': 'rjkQcfw5fkM',
  '3-1': 'fo_pmp5rtzo',
  '3-2': 'w4QFJb9a8vo',
  '3-3': 'A-QgGXbDyR0',
  '3-4': 'GnQrbW4HYtU',
  '4-0': 'tuSC0ObB-qY',
  '4-1': '6BHbJ_gBOk0',
  '4-2': 'ABsVP41-EeY',
  '4-3': 'SV7U4yAXL5I',
  '4-4': 'JuWtBR-rDQk',
  '5-0': 'TFlVWf8JX4A',
  '5-1': 'ZrMltpK6iAw',
  '5-2': 'HXOok3mfMLM',
  '5-3': 'g-wjP1otQWI',
  '5-4': '-w-VTw0tQlE',
  '6-0': 'yBrp8uvNAhI',
  '6-1': 'KWAsz59F8gA',
  '6-2': 'FU6y1XIADdg',
  '6-3': 'lUhJL7o6_cA',
  '6-4': 'VRWRmIEHr3A',
};

const FALLBACK_PHYS_VIDEO_IDS = [
  'ihNZlp7iUHE',
  'ZM8ECpBuQYE',
  'TFlVWf8JX4A',
  'tuSC0ObB-qY',
  'KWAsz59F8gA',
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
