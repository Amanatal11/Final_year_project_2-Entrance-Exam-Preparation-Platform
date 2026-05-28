/**
 * Grade 10 Biology — study notes, YouTube URLs, MCQ padding (curriculum + stock).
 */

const CHAPTER_TAGS = ['plantnut', 'digest', 'resp', 'excrete', 'nerve', 'repro', 'eco'];

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
  '0-0': 'Example: Nitrogen is taken up as nitrate or ammonium by roots; severe shortage often shows as yellowing older leaves in many species because N is mobile and remobilized.',
  '0-1': 'Example: Bacteria in legume nodules fix N₂ into ammonia that plants can assimilate — part of the nitrogen cycle linking air, soil, and organisms.',
  '0-2': 'Example: Interveinal chlorosis can suggest magnesium shortage for chlorophyll; local soil tests and leaf symptoms guide correction.',
  '0-3': 'Example: Root epidermis and hairs absorb ions actively; endodermis controls entry to xylem via Casparian strip pathways.',
  '0-4': 'Example: Over-fertilizing can pollute water via runoff (eutrophication risks); matching application to crop need protects ecosystems.',
  '1-0': 'Example: Chewing breaks food mechanically while salivary amylase begins starch digestion before acid in the stomach stops amylase activity.',
  '1-1': 'Example: Pepsin in acidic gastric juice digests proteins; mucus protects gastric mucosa from acid autodigestion partly.',
  '1-2': 'Example: Villi and microvilli expand small-intestine surface for amino acid and monosaccharide absorption into capillaries or lacteals.',
  '1-3': 'Example: A balanced diet supplies vitamins as coenzyme helpers; deficiency diseases illustrate essential nutrient roles.',
  '1-4': 'Example: Ruminants host cellulose-digesting microbes in fermentation chambers; monogastric animals rely more on simple-stomach enzymatic digestion.',
  '2-0': 'Example: Air moves down a pressure gradient from mouth/nose toward alveoli during inhalation when thoracic volume increases.',
  '2-1': 'Example: Thin alveolar–capillary barriers and large surface area speed O₂ diffusion into blood and CO₂ out.',
  '2-2': 'Example: Hemoglobin cooperatively binds O₂ in lung capillaries and releases it where partial pressure is lower in tissues.',
  '2-3': 'Example: Most CO₂ travels as bicarbonate after carbonic anhydrase reaction in red blood cells; chloride shift balances charge.',
  '2-4': 'Example: Smoking damages cilia and alveolar walls, increasing bronchitis and emphysema risks among other pathologies.',
  '3-0': 'Example: Each kidney contains many nephrons filtering plasma at the glomerulus while retaining cells and most proteins.',
  '3-1': 'Example: Proximal tubule reabsorbs most glucose, amino acids, and ions; loop of Henle establishes medullary osmotic gradient for concentrating urine.',
  '3-2': 'Example: Filtration depends on blood pressure and permeability of filtration slits; reabsorption is selective and energy-intensive in places.',
  '3-3': 'Example: ADH increases collecting duct water permeability via aquaporins, producing more concentrated urine when dehydrated.',
  '3-4': 'Example: Hemodialysis substitutes for failed filtration using semipermeable membranes and dialysate gradients.',
  '4-0': 'Example: Action potentials are all-or-nothing depolarizations traveling along axons opened by voltage-gated Na⁺ channels sequentially.',
  '4-1': 'Example: Chemical synapses release neurotransmitters binding receptors on the postsynaptic cell, exciting or inhibiting it.',
  '4-2': 'Example: A knee-jerk reflex arcs through sensory neuron → spinal interneuron → motor neuron without conscious choice for speed.',
  '4-3': 'Example: Insulin lowers blood glucose by promoting uptake and storage; glucagon raises it partly through liver glycogenolysis.',
  '4-4': 'Example: Pituitary hormones coordinate growth, reproduction, and stress axes with hypothalamic signals.',
  '5-0': 'Example: Ovaries produce eggs and sex hormones; testes produce sperm and testosterone in typical human development.',
  '5-1': 'Example: Ovulation mid-cycle releases a secondary oocyte; corpus luteum secretes progesterone supporting the uterine lining.',
  '5-2': 'Example: Pollination brings pollen to stigma; double fertilization in angiosperms yields embryo and triploid endosperm nutrition.',
  '5-3': 'Example: Barrier methods and understanding transmission reduce STI spread; vaccines exist for some viral STIs (e.g. HPV).',
  '5-4': 'Example: Cleavage divisions subdivide the zygote without growth at first; implantation in the uterine wall begins placental development in humans.',
  '6-0': 'Example: Exponential growth occurs when resources are abundant; logistic growth levels off near carrying capacity K.',
  '6-1': 'Example: Predation can regulate prey cycles; keystone predators may maintain diversity by preventing competitive dominance.',
  '6-2': 'Example: Carbon cycles through photosynthesis, respiration, fossil fuel combustion, and ocean uptake; human emissions shift atmospheric CO₂.',
  '6-3': 'Example: Habitat fragmentation reduces gene flow and edge effects increase; protected corridors can mitigate isolation.',
  '6-4': 'Example: Natural selection requires variation, inheritance, and differential survival/reproduction; antibiotic misuse selects resistant bacteria.',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Macronutrients N, P, K roles; micronutrients Fe, Mg, Zn, etc. Nitrogen cycle stages: fixation, nitrification, assimilation, denitrification overview.';
    case 1:
      return 'Digestive enzymes: amylase, proteases, lipases; bile emulsifies lipids; villi increase absorption surface; portal vein carries absorbed nutrients to liver.';
    case 2:
      return 'Ventilation mechanics (diaphragm, intercostals); alveolar gas equation concepts; Hb–O₂ dissociation; Bohr effect; bicarbonate transport.';
    case 3:
      return 'Nephron: filtration (Bowman’s), reabsorption (proximal, loop, distal), secretion, collecting duct; ADH; aldosterone roles introductory.';
    case 4:
      return 'Neuron resting potential, action potential, synapse; CNS vs PNS; major endocrine glands; feedback loops in glucose regulation.';
    case 5:
      return 'Human gametogenesis overview; menstrual cycle hormones; plant flower structure; fertilization and early development stages introductory.';
    case 6:
      return 'Population growth models; community interactions; biogeochemical cycles; biodiversity; selection mechanisms; conservation strategies.';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['plantnut'], title: 'N source', question: 'Most plants absorb nitrogen mainly as:', options: ['N₂ gas directly always', 'Ions like NO₃⁻ or NH₄⁺', 'Pure N₂O', 'Diamond'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['plantnut'], title: 'NPK', question: 'Which is a primary macronutrient fertilizer label letter?', options: ['Fe', 'P (phosphorus)', 'Zn', 'Cu'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['digest'], title: 'Stomach pH', question: 'Human gastric pH is typically:', options: ['Neutral 7', 'Strongly acidic ~1–2', 'Basic 10', 'Pure water 0'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['digest'], title: 'Bile', question: 'Bile stored in gallbladder helps emulsify:', options: ['Carbohydrates only', 'Lipids', 'Nucleic acids only', 'Cellulose in humans primarily'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['resp'], title: 'Alveoli', question: 'Gas exchange occurs mainly in:', options: ['Trachea rings', 'Alveoli', 'Pharynx only', 'Nasal vestibule only'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['resp'], title: 'Hb', question: 'Most O₂ in arterial blood is carried:', options: ['Dissolved plasma only', 'Bound to hemoglobin', 'As bicarbonate only', 'Inside platelets'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['excrete'], title: 'Nephron', question: 'Filtration occurs at:', options: ['Collecting duct', 'Glomerulus / Bowman’s capsule', 'Urethra', 'Bladder wall'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['excrete'], title: 'Urine conc', question: 'ADH acts mainly on:', options: ['Proximal tubule only always', 'Collecting duct water permeability', 'Glomerulus pores size only', 'Ureter peristalsis'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['nerve'], title: 'Resting potential', question: 'Resting neuron cytosol is relatively:', options: ['Positive to outside always', 'Negative inside compared to outside', 'Zero always', 'Equal to +100 mV inside'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['nerve'], title: 'Synapse', question: 'Neurotransmitters cross the:', options: ['Myelin wrapping', 'Synaptic cleft', 'Nuclear envelope', 'Thylakoid'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['repro'], question: 'Fertilization in humans normally occurs in:', options: ['Ovary', 'Uterus lumen bulk', 'Fallopian tube', 'Vagina'], correctAnswer: 2, difficulty: 'Easy', title: 'Site' },
  { tags: ['repro'], title: 'Pollen', question: 'Pollen is produced in angiosperms in:', options: ['Stigma', 'Anther', 'Ovary', 'Sepal'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['eco'], title: 'Producer', question: 'Primary producers in many food webs are:', options: ['Fungi primarily always', 'Photoautotrophs', 'Carnivores', 'Detritivores only'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['eco'], title: 'Keystone', question: 'A keystone species:', options: ['Has huge biomass always', 'Disproportionately affects community structure if removed', 'Cannot be a predator', 'Is always microbial'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['plantnut'], title: 'Legume', question: 'Rhizobia in nodules mainly benefit plants by:', options: ['Producing chlorophyll', 'Fixing nitrogen', 'Breaking rock only', 'Creating soil from air N₂ only without plant help wrong'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['digest'], title: 'Absorption', question: 'Most nutrient absorption occurs in:', options: ['Esophagus', 'Large intestine water mostly', 'Small intestine', 'Mouth'], correctAnswer: 2, difficulty: 'Easy' },
  { tags: ['resp'], title: 'CO₂ trans', question: 'Bicarbonate formation speeds CO₂ transport as:', options: ['O₂ gas only', 'Dissolved CO₂ converted in RBCs', 'Pure carbon dust', 'Fe₃O₄'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['excrete'], title: 'Aldosterone', question: 'Aldosterone primarily increases reabsorption of:', options: ['Glucose always unlimited', 'Na⁺ / water retention aiding', 'Urea always blocked', 'Creatinine zero'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['nerve'], title: 'CNS', question: 'Brain and spinal cord belong to:', options: ['PNS only', 'CNS', 'Autonomic only', 'Enteric only'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['repro'], title: 'Meiosis gamete', question: 'Human sperm are produced by:', options: ['Mitosis only in testes', 'Meiosis in seminiferous tubules context', 'Oogenesis same timing always female only', 'Binary fission'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['eco'], title: 'Carrying', question: 'Carrying capacity (K) relates to:', options: ['Infinite growth always', 'Maximum sustainable population for an environment', 'Extinction rate only zero', 'Only predators'], correctAnswer: 1, difficulty: 'Easy' },
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
  const tag = CHAPTER_TAGS[chapterIndex] || 'eco';
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
    `Example: Connect this topic to one organ, pathway, or population process and state one measurable variable that changes when conditions change.`;

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
    ? ['Key ideas and vocabulary for this unit (Grade 10 Biology).', formulasBlock].join('\n\n')
    : '';

  const pWorked = ['Worked example (this topic only).', sanitizePlain(worked)].join('\n\n');

  return {
    title: `Topic notes — ${topicLabel}`,
    content: [pTopic, pFormulas, pWorked].filter(Boolean).join('\n\n'),
  };
}

/** One video ID per topic (chapters 0–6). Mix: Khan Academy, Amoeba Sisters, Crash Course, The Organic Chemistry Tutor. */
const TOPIC_YOUTUBE_VIDEO_IDS = {
  // Unit 1 — plant nutrition & soil
  '0-0': 'LEHJF5oLjuo', // Khan Academy — plant nitrogen / nutrition context
  '0-1': '5zn7vYe9n6I', // Khan Academy — soil–plant nutrient availability (survey)
  '0-2': 'leHy-Y_8nRs', // Crash Course — nitrogen & phosphorus cycles
  '0-3': 'iJ0cO5VwBXg', // Before the Bell Biology — diagnosing deficiencies (survey)
  '0-4': 'AxaWXWd2pw4', // Khan Academy — eutrophication & runoff

  // Unit 2 — animal nutrition & digestion
  '1-0': '1UvuBYUbFk0', // Amoeba Sisters — digestive system overview
  '1-1': 'tCGUsiXIYhw', // The Organic Chemistry Tutor — enzymes (catalysis tied to digestion)
  '1-2': 'BSc2tU2vKzI', // Khan Academy — small intestine absorption
  '1-3': 'z6YaOw8tt5Q', // Khan Academy — balanced diet / micronutrients (survey)
  '1-4': 'ZYPnhsZjp4Q', // Khan Academy — cow digestion / rumen (comparative)

  // Unit 3 — respiration
  '2-0': 'hpOIl6Hn6dQ', // Khan Academy — ventilation mechanics
  '2-1': '8PbFui8fvvQ', // Khan Academy — alveolar gas exchange
  '2-2': 'mDUycOFFZYk', // Khan Academy — hemoglobin & O₂
  '2-3': 'CRJOxqWmTlg', // Khan Academy — CO₂ transport & pH
  '2-4': 'Y18Vz51Nkos', // TED-Ed — how cigarettes affect the body (respiratory & systemic harms)

  // Unit 4 — excretion / kidney
  '3-0': 'aDOIHzhRiq0', // Khan Academy — kidney & nephron anatomy
  '3-1': 'ccy6ssjJp8E', // Khan Academy — renal physiology clip (filtration emphasis in playlist)
  '3-2': 'czY5nyvZ7cU', // Khan Academy — reabsorption in the nephron
  '3-3': 'FUl3sXncnYw', // Khan Academy — ADH / water balance
  '3-4': 'ro6t9efXESo', // Tutorials by Kristeen Barker — dialysis modalities, diffusion vs convection (replacement therapy survey)

  // Unit 5 — neural & endocrine
  '4-0': 'Heynq5wkZZ4', // Khan Academy — neuron membrane / action potential
  '4-1': 'o0DafWp4rzQ', // Khan Academy — synaptic transmission
  '4-2': 'FStKwAugUb8', // Khan Academy — reflex / integration (HS survey clip)
  '4-3': '2qLsPHOpX4I', // Khan Academy — endocrine system overview
  '4-4': 'W_y9A5sy3Gc', // Khan Academy — glucose regulation (insulin / glucagon survey)

  // Unit 6 — reproduction & development
  '5-0': '3Y-FPZ92yO4', // Khan Academy — human reproductive anatomy / gametes
  '5-1': 'a9kT7C9YnJs', // Khan Academy — menstrual / ovarian cycle
  '5-2': '3ryID_SzmUQ', // Khan Academy — angiosperm reproduction / double fertilization context
  '5-3': 'gXqc7kzy9Aw', // TED-Ed — STIs, testing, stigma (health literacy)
  '5-4': 'iKL3goUeVrk', // Khan Academy — pregnancy & early embryonic development

  // Unit 7 — ecology & evolution
  '6-0': 'E1Y4Hokv8ZI', // Khan Academy — population growth models
  '6-1': 'gM6VgQ15xIE', // Khan Academy — communities & interactions
  '6-2': 'aLuSi_6Ol8M', // Crash Course Chemistry — global carbon cycle (biogeochemical)
  '6-3': 'Kaeyr5-O2eU', // Crash Course — conservation & biodiversity threats (survey)
  '6-4': 'yR7t6K7X7x0', // Khan Academy — natural selection intro
};

const FALLBACK_BIO_VIDEO_IDS = ['8Il7NJBHX7k', 'qClQXzqH9Bo', 'W_y9A5sy3Gc', 'CRJOxqWmTlg', 'mDUycOFFZYk'];

function pickRandomTopicVideo({ chapterIndex, topicIndex, topicName, gradeLevel }) {
  const key = `${chapterIndex}-${topicIndex}`;
  let id = TOPIC_YOUTUBE_VIDEO_IDS[key];
  if (!id) {
    id = FALLBACK_BIO_VIDEO_IDS[hashPair(chapterIndex, topicIndex) % FALLBACK_BIO_VIDEO_IDS.length];
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
