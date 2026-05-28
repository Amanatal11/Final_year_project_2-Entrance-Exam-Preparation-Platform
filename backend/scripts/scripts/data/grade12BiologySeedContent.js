/**
 * Grade 12 Biology — study notes, YouTube URLs, MCQ padding (curriculum + stock).
 * Six units × five topics (30 topics).
 */

const CHAPTER_TAGS = ['evolution', 'popcomm', 'ecosystem', 'plants', 'micro', 'sustain'];

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
    'Example: Comparing Lamarck’s “inheritance of acquired characters” with Darwin/Wallace selection on heritable variation clarifies what modern genetics supports (and what it does not).',
  '0-1':
    'Example: Industrial melanism–style stories illustrate directional selection when a visual predator makes one phenotype disproportionately survive.',
  '0-2':
    'Example: Two finch populations on different islands can diverge when song or timing prevents mating even if hybrids could be viable — prezygotic isolation.',
  '0-3':
    'Example: Forelimb bone homology across tetrapods supports common ancestry even when wings, hooves, or hands serve different lifestyles.',
  '0-4':
    'Example: Mass extinctions remove whole guilds of species, freeing niches that survivors and later radiations can fill in new ways.',
  '1-0':
    'Example: A wide-based age pyramid signals many young individuals; future growth momentum depends on survival and fertility pathways, not the shape alone.',
  '1-1':
    'Example: Logistic growth with carrying capacity K explains why exponential “doubling” rhetoric fails once density-dependent regulation bites.',
  '1-2':
    'Example: Many salmon are semelparous while humans are iteroparous — life-history “strategies” are trade-offs, not moral ranks.',
  '1-3':
    'Example: Müllerian mimicry differs from Batesian mimicry because both models are unprofitable to predators rather than one palatable copycat.',
  '1-4':
    'Example: After farmland abandonment, secondary succession can proceed faster than on fresh lava because soil and propagules often remain.',
  '2-0':
    'Example: Only ~10% rule-of-thumb energy transfer explains short food chains: lots of respiration and uneaten biomass at each link.',
  '2-1':
    'Example: NDVI “greenness” from space tracks vegetation vigor but converting that to field NPP still needs ground calibration.',
  '2-2':
    'Example: Legume + rhizobia symbiosis brings biologically fixed nitrogen into the soil nitrogen cycle alongside industrial Haber–Bosch fertilizer contexts.',
  '2-3':
    'Example: Ethiopian montane mosaic along elevational gradients packs many endemic species into narrow climatic bands — useful for conservation planning.',
  '2-4':
    'Example: Fertilizer runoff → algal bloom → bacterial respiration depleting oxygen links agriculture to lake fisheries in one watershed story.',
  '3-0':
    'Example: Casparian strip forcing selective uptake helps roots exclude toxins and regulate mineral loading delivered to the shoot.',
  '3-1':
    'Example: Mycorrhizae extend hyphae into soil pores, trading plant sugars for phosphorus uptake assistance — especially helpful in P-limited soils.',
  '3-2':
    'Example: On hot dry days C3 photosynthesis can favor photorespiration unless CO2 is concentrated (C4/CAM evolution shows repeated solutions).',
  '3-3':
    'Example: Double fertilization delivers one sperm genome to the egg and another to form the nutritive endosperm in many seeds.',
  '3-4':
    'Example: Ethylene-driven fruit ripening is exploited commercially — timing matters for shelf life and smallholder market access.',
  '4-0':
    'Example: Plasmid-borne resistance spreads horizontally in hospitals faster than vertical mutation alone would predict — stewardship matters.',
  '4-1':
    'Example: Antibiotics target bacterial machinery; viruses use host ribosomes — so the same drug rarely cures both.',
  '4-2':
    'Example: Plasmodium gametocytes taken by Anopheles continue the sexual phase — blocking the vector breaks the cycle (alongside treatment and surveillance).',
  '4-3':
    'Example: A rising epidemic curve triggers investigation of reservoirs, routes, and delays (reporting vs infection) before policy choices.',
  '4-4':
    'Example: Completing antibiotic courses (when clinically appropriate) reduces selection for partially resistant subpopulations — public messaging must be accurate.',
  '5-0':
    'Example: PCR exponentially enriches a targeted locus from trace DNA — contamination controls stay crucial in teaching labs and court-grade workflows.',
  '5-1':
    'Example: GWAS finds associations, not automatic diagnoses; penetrance, environment, and ancestry shape outcomes.',
  '5-2':
    'Example: Dual-use pathogen research and gene synthesis orders are regulated because capability and intent both matter for biosecurity.',
  '5-3':
    'Example: Wildlife corridors align ecological science with land tenure — design fails if communities lack equitable alternatives.',
  '5-4':
    'Example: Climate-smart agroforestry can couple food security with steep-slope erosion control when species and spacing match local rainfall.',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Evolution basics: variation, heritability, selection, drift, gene flow; speciation barriers; homology vs analogy; phylogenies as hypotheses.';
    case 1:
      return 'Population ecology: exponential vs logistic; r vs K as teaching stereotypes; interactions (competition, predation, symbiosis); succession frameworks.';
    case 2:
      return 'Ecosystems: energy flow and trophic levels; productivity (GPP/NPP); water, C, N, P cycles (survey); biomes; human alteration + eutrophication hooks.';
    case 3:
      return 'Plants: tissues/meristems; xylem/phloem; water & mineral uptake; photosynthesis vs photorespiration (C3/C4/CAM survey); reproduction and hormones.';
    case 4:
      return 'Microbes & health: prokaryote toolkit; viruses vs antibiotics; malaria/trypanosomiasis cycles (headlines); epidemiology vocabulary; AMR + vaccination + WASH.';
    case 5:
      return 'Applications & futures: PCR/CRISPR/omics at survey; ethics, equity, biosecurity; conservation strategies; SDGs + restoration + youth engagement.';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['evolution'], title: 'Fitness', question: 'In evolution by natural selection, “fitness” most nearly means:', options: ['Physical strength only', 'Relative reproductive success in an environment', 'Longevity without offspring', 'Highest mutation rate'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['evolution'], title: 'Homology', question: 'Homologous structures suggest:', options: ['Convergent evolution always', 'Shared ancestry with modification', 'Identical DNA sequences always', 'No selective pressure'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['popcomm'], title: 'K', question: 'Carrying capacity (K) in the logistic model is:', options: ['Always identical in every habitat', 'An environment-dependent ceiling on population growth (teaching simplification)', 'The birth rate only', 'Zero when r is positive'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['popcomm'], title: 'Allee', question: 'Allee effects can hurt small populations because:', options: ['Mate finding or cooperation breaks down at low density', 'Carrying capacity becomes infinite', 'Mutation stops entirely', 'Photosynthesis halts'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['ecosystem'], title: '10%', question: 'Roughly ~10% energy transfer between trophic levels implies:', options: ['Short food chains are common energetically', 'Energy is created at each level', 'No heat is lost in respiration', 'Producers are rare'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['ecosystem'], title: 'N fix', question: 'Biological nitrogen fixation converts N₂ toward forms such as:', options: ['Ozone in leaves', 'Ammonia / reduced nitrogen usable by life (pathway context)', 'Pure diamond in roots', 'Oxygen in RuBP'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['plants'], title: 'Xylem', question: 'Xylem vessels primarily transport:', options: ['Sucrose from leaves to roots only', 'Water and dissolved minerals upward (with cohesion–tension model)', 'Pollen to stigma', 'mRNA from nucleus'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['plants'], title: 'Guard', question: 'Stomatal guard cells adjust:', options: ['Opening to regulate CO₂ gain vs water loss', 'Chromosome number in mitosis', 'Translation in ribosomes of animals', 'Earthquake magnitude'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['micro'], title: 'VirusRx', question: 'Why don’t classical bacterial antibiotics cure influenza?', options: ['Viruses lack peptidoglycan targets typical of many antibiotics', 'Influenza is a bacterium', 'Viruses have mitochondria', 'Antibiotics increase viral mutation always'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['micro'], title: 'R0', question: 'R0 > 1 in a naive population often implies:', options: ['The infection always dies out immediately', 'An epidemic can grow if susceptibles remain (simple models)', 'Prevalence is defined identically to incidence', 'Herd immunity is impossible'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['sustain'], title: 'PCR', question: 'PCR amplification needs primers to:', options: ['Define the region flanked for copying', 'Join two restriction fragments without ligase magically', 'Synthesize proteins directly', 'Prevent any polymerase activity'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['sustain'], title: 'Ethics', question: 'Informed consent in research primarily protects:', options: ['Only the researcher’s reputation exclusively', 'Autonomy and understanding of risks and benefits (frameworks vary)', 'Patent applications only', 'Animal phylogeny only'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['evolution'], title: 'Drift', question: 'Genetic drift is most pronounced when:', options: ['Population size is very large', 'Population size is small (sampling error)', 'Gene flow is unlimited', 'Selection is infinitely strong always'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['popcomm'], title: 'Succ', question: 'Secondary succession differs from primary because:', options: ['Soil/seed banks often remain after disturbance', 'It only occurs on fresh lava always', 'It never includes plants', 'It bypasses sunlight'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['ecosystem'], title: 'Euro', question: 'Nutrient enrichment → algal bloom can lead to:', options: ['Oxygen sag as microbes decompose organic matter', 'Instant pristine water forever', 'Elimination of all bacteria', 'Higher stratospheric ozone'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['plants'], title: 'ABA', question: 'Abscisic acid often promotes:', options: ['Stomatal closure under drought stress among roles', 'Primary phototropism bending alone', 'Nitrogenase activity in leaves', 'Capsid assembly in viruses'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['micro'], title: 'Gram', question: 'Gram staining differentiates largely among bacteria with:', options: ['Peptidoglycan-rich walls vs alternative architectures (survey)', 'Whether they are eukaryotes always', 'Presence of capsids always', 'Ability to photosynthesize always'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['sustain'], title: 'Red', question: 'The IUCN Red List categorizes chiefly:', options: ['Extinction risk, not stock prices', 'Corporate profits', 'Student quiz percentiles only', 'Weather on Mars'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['evolution'], title: 'Spec', question: 'Allopatric speciation is often initiated by:', options: ['Geographic isolation reducing gene flow', 'Instant sympatry without barriers always', 'Lamarckian lifting exercises alone', 'Removing meiosis from eukaryotes'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['ecosystem'], title: 'BlueC', question: 'Mangroves often contribute to:', options: ['Storm buffering and sediment trapping among coastal services', 'Infinite global CO2 removal instantly', 'Eliminating fisheries', 'Ozone-hole repair primarily'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['sustain'], title: 'OneHl', question: 'One Health links:', options: ['Human, animal, and ecosystem interfaces for disease and food safety (survey)', 'Only stock markets', 'Only star lifecycles', 'Phonetic alphabets'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['plants'], title: 'Calvin', question: 'The Calvin cycle fixes carbon mainly in:', options: ['Chloroplast stroma (survey)', 'Thylakoid lumen only', 'Mitochondrial matrix only', 'Golgi lumen'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['micro'], title: 'Vacc', question: 'Vaccination trains the immune system using:', options: ['Antigens without causing full disease (platform-dependent)', 'Antibiotics against viruses routinely', 'Passive smoking', 'RNA only in all vaccines historically (oversimplified)'], correctAnswer: 0, difficulty: 'Medium' },
  { tags: ['popcomm'], title: 'Pred', question: 'A predator–prey oscillation can arise because:', options: ['Consumer and resource abundances feed back on each other (simple models)', 'Predators never eat prey (false)', 'Prey photosynthesize with Rubisco in animals (false)', 'K is always infinite'], correctAnswer: 0, difficulty: 'Medium' },
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
  const tag = CHAPTER_TAGS[chapterIndex] || 'sustain';
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
    `Example: Tie this topic to one concrete Ethiopian or local example (health, agriculture, watershed, or biodiversity) and state an evidence-based explanation.`;

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
    ? ['Key ideas and vocabulary for this unit (Grade 12 Biology).', formulasBlock].join('\n\n')
    : '';

  const pWorked = ['Worked example (this topic only).', sanitizePlain(worked)].join('\n\n');

  return {
    title: `Topic notes — ${topicLabel}`,
    content: [pTopic, pFormulas, pWorked].filter(Boolean).join('\n\n'),
  };
}

const TOPIC_YOUTUBE_VIDEO_IDS = {
  '0-0': 'FStKwAugUb8',
  '0-1': '4BX5I3YwMz4',
  '0-2': '3ryID_SzmUQ',
  '0-3': 'gp9j4WtSVUo',
  '0-4': 'i6IRfq1PQ6Q',
  '1-0': 'E1Y4Hokv8ZI',
  '1-1': 'xTnNv7YplSo',
  '1-2': 'gM6VgQ15xIE',
  '1-3': 'Kaeyr5-O2eU',
  '1-4': 'yR7t6K7X7x0',
  '2-0': '3Y-FPZ92yO4',
  '2-1': 'AxaWXWd2pw4',
  '2-2': 'leHy-Y_8nRs',
  '2-3': '8m6hHRlKwxY',
  '2-4': 'AIGza1dB3W8',
  '3-0': 'vTJgIxmur9M',
  '3-1': '8IlzKri08kk',
  '3-2': 'tCGUsiXIYhw',
  '3-3': 'zrKdz93WlVk',
  '3-4': 'pj1oFx42d48',
  '4-0': 'bWPQvxElpLY',
  '4-1': 'HjA-SvvL2BQ',
  '4-2': 'L0k-enzoeOM',
  '4-3': 'ro6t9efXESo',
  '4-4': 'mDUycOFFZYk',
  '5-0': 'd9hffYCwfEA',
  '5-1': 'QVCjdNxJreE',
  '5-2': '8PbFui8fvvQ',
  '5-3': 'W_y9A5sy3Gc',
  '5-4': 'o0DafWp4rzQ',
};

const FALLBACK_BIO_VIDEO_IDS = ['FStKwAugUb8', 'tCGUsiXIYhw', 'E1Y4Hokv8ZI', 'vTJgIxmur9M', 'HjA-SvvL2BQ'];

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
