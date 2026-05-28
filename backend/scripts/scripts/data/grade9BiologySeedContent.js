/**
 * Grade 9 Biology — study notes (→ Concept), per-topic YouTube URLs, MCQ padding (curriculum + stock).
 * Chapters supply curated exercises[] with topicIndex; pads to 7 per topic.
 */

const CHAPTER_TAGS = ['intro', 'cell', 'transport', 'division', 'taxonomy', 'plants', 'animals'];

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
    'Example: Biology is the study of life; a testable question compares measurable outcomes (e.g. germination time) under controlled conditions.',
  '0-1':
    'Example: To test a fertilizer, keep light and water fixed, vary only the fertilizer level, and repeat trials to reduce chance effects.',
  '0-2':
    'Example: Start at low magnification to locate tissue, then increase magnification; total magnification ≈ ocular × objective.',
  '0-3':
    'Example: Growth, reproduction, response to stimuli, and homeostasis are common hallmarks used to recognize living organisms.',
  '0-4':
    'Example: Cells form tissues; tissues form organs; organs form organ systems; many systems form an organism — and populations form communities and ecosystems.',
  '1-0':
    'Example: Cells arise from existing cells; bacteria are prokaryotes without a nucleus; eukaryotes possess a nucleus and compartmentalized organelles.',
  '1-1':
    'Example: Plant cells commonly have a cell wall, chloroplasts, and a large vacuole; animal cells lack those specialized plant structures.',
  '1-2':
    'Example: The plasma membrane controls entry and exit; small hydrophobic molecules cross the lipid core more easily than many naked ions.',
  '1-3':
    'Example: Mitochondria release useful energy from nutrients; ribosomes synthesize proteins; the Golgi processes and ships many proteins.',
  '1-4':
    'Example: Chromatin in the nucleus carries hereditary instructions; transcription produces RNA that guides protein synthesis in the cytoplasm.',
  '2-0':
    'Example: Dyes spread by diffusion from high to low concentration until a dynamic balance is approached without using ATP.',
  '2-1':
    'Example: If cytoplasm is hypotonic to surroundings, water tends to enter cells; plant cells become turgid when vacuoles gain water.',
  '2-2':
    'Example: Enzymes speed reactions by lowering activation energy; altering pH can denature an enzyme so the active site no longer fits.',
  '2-3':
    'Example: Cellular respiration oxidizes fuel like glucose with oxygen to CO₂ and water, capturing energy in ATP.',
  '2-4':
    'Example: Chloroplasts use light to fix carbon from CO₂ into sugars; mitochondria later release that stored chemical energy for cell work.',
  '3-0':
    'Example: After S-phase replication, mitosis partitions sister chromatids so two daughter nuclei inherit identical chromosomes in typical somatic division.',
  '3-1':
    'Example: Metaphase aligns duplicated chromosomes; anaphase pulls sister chromatids apart toward opposite poles.',
  '3-2':
    'Example: Two meiotic divisions halve chromosome number; fertilization restores diploidy when haploid gametes fuse.',
  '3-3':
    'Example: Crossing over swaps segments between homologs; independent assortment shuffles maternal and paternal chromosomes into gametes.',
  '3-4':
    'Example: Loss of checkpoint control can yield repeated mitosis without full differentiation; nondisjunction alters gamete chromosome counts.',
  '4-0':
    'Example: The binomial “Panthera leo” places the organism in genus Panthera with species epithet leo, avoiding ambiguous common names.',
  '4-1':
    'Example: Domain, kingdom, phylum, class, order, family, genus, species nest groups from broad to narrow — each species belongs to one lineage name.',
  '4-2':
    'Example: A key step “leaves parallel-veined vs net-veined” steers identification toward monocot or dicot plant groups.',
  '4-3':
    'Example: Bacterial cells are prokaryotic with peptidoglycan walls; protists are mostly unicellular eukaryotes with varied nutrition modes.',
  '4-4':
    'Example: Fungi secrete enzymes then absorb products; a mushroom is a spore-bearing fruiting body of underground hyphae.',
  '5-0':
    'Example: Root hairs extend surface area near the root tip for water and ion uptake into the xylem pathway.',
  '5-1':
    'Example: Cohesion and tension in xylem conduits help lift water against gravity when stomata allow transpiration pull.',
  '5-2':
    'Example: Guard cells inflate with K⁺ uptake to open stomata for CO₂; open stomata also increase water vapor diffusion outward.',
  '5-3':
    'Example: Palisade tissue packs chloroplasts per area under the upper epidermis; spongy air spaces link to stomata for gas routing.',
  '5-4':
    'Example: Cutting a shoot tip often releases lateral buds from auxin suppression, altering branching patterns used in horticulture.',
  '6-0':
    'Example: Sponges are filter feeders; cnidarians sting prey with nematocysts; flatworms show beginnings of cephalization.',
  '6-1':
    'Example: Annelid segments repeat organs; arthropods add jointed legs and a hardened cuticle that must be shed to grow.',
  '6-2':
    'Example: Long bones lengthen at cartilage plates; compact bone surrounds medullary marrow where blood cells form.',
  '6-3':
    'Example: Fish pass water over gill filaments for gas exchange; adult frogs supplement lungs with cutaneous respiration in many species.',
  '6-4':
    'Example: Birds and mammals are endothermic with high metabolic rates; hair or feathers and circulatory refinements support sustained activity.',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Experimental design: isolate one independent variable, measure the dependent variable, control others, replicate trials. Metric prefixes: kilo-, centi-, milli-.';
    case 1:
      return 'Cell theory; prokaryote vs eukaryote; roles of membrane, nucleus, ribosomes, ER, Golgi, mitochondria, chloroplasts (plants), vacuole, cytoskeleton.';
    case 2:
      return 'Passive vs active transport; osmosis and tonicity; enzyme–substrate specificity; overview of photosynthesis vs aerobic respiration.';
    case 3:
      return 'Mitosis PMAT + cytokinesis; meiosis I separates homologs; meiosis II separates sister chromatids; sources of genetic variation.';
    case 4:
      return 'Linnaean ranks; binomial nomenclature; domains Bacteria, Archaea, Eukarya; major kingdom-level contrasts.';
    case 5:
      return 'Plant organ structure; xylem vs phloem; stomatal regulation; leaf cross-section; major plant hormones and growth regions.';
    case 6:
      return 'Body plans: symmetry, tissues, coelom segmentation; vertebrate vs invertebrate contrasts; chordate hallmarks.';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['intro'], title: 'Lab safety', question: 'Broken glass in the lab should be:', options: ['Left on the bench', 'Handled with a brush and proper disposal', 'Thrown in regular trash', 'Ignored'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['intro'], title: 'Hypothesis', question: 'A scientific hypothesis should be:', options: ['Vague', 'Testable with evidence', 'Proven before testing', 'Untestable'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['intro'], title: 'Control', question: 'A control in an experiment:', options: ['Is unnecessary', 'Provides a baseline for comparison', 'Must fail', 'Changes every variable'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['intro'], title: 'Theory', question: 'A scientific theory is:', options: ['A casual guess', 'A broad, evidence-based explanation', 'Impossible to revise', 'Only statistics'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['intro'], title: 'Measure', question: '1 liter equals:', options: ['100 mL', '1000 mL', '10 mL', '0.01 mL'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['cell'], title: 'Small cells', question: 'Cells stay small partly because:', options: ['Big cells have more DNA', 'Surface-area-to-volume ratio favors exchange', 'Mitosis forbids growth', 'Nucleus size is fixed'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['cell'], title: 'Prokaryote', question: 'Prokaryotes lack a:', options: ['Plasma membrane', 'Membrane-bound nucleus', 'Cytoplasm', 'Ribosome'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['cell'], title: 'Powerhouse', question: 'Mitochondria are best known for:', options: ['Photosynthesis', 'Aerobic respiration', 'Protein import only', 'Cell wall synthesis'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['cell'], title: 'Plant cell', question: 'Typical plant cells often contain:', options: ['Centrioles for photosynthesis', 'Chloroplasts', 'No vacuole', 'No nucleus'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['cell'], title: 'Lipid bilayer', question: 'The core of the plasma membrane is:', options: ['Mostly proteins', 'Hydrophobic fatty acid tails', 'DNA', 'Cellulose'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['transport'], title: 'Gradient', question: 'Simple diffusion moves substances:', options: ['Uphill only', 'Down their concentration gradient', 'Only with ATP', 'Only through plasmodesmata'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['transport'], title: 'Osmosis def', question: 'Osmosis is diffusion of:', options: ['Sucrose only', 'Water across a selectively permeable barrier', 'Heat', 'ATP'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['transport'], title: 'Enzyme', question: 'Most enzymes are:', options: ['DNA', 'Catalytic proteins', 'Lipid bilayers', 'Disaccharides'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['transport'], title: 'ATP', question: 'Cells often use ATP for:', options: ['Storing hereditary code', 'Energy-requiring work', 'Structural cell walls', 'Passive diffusion'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['transport'], title: 'O₂ role', question: 'In many animal cells O₂ is mainly used during:', options: ['Photosynthesis', 'Aerobic respiration', 'Binary fission', 'Translation only'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['division'], title: 'Mitosis goal', question: 'Mitosis typically produces:', options: ['Haploid gametes', 'Genetically identical daughter cells (somatic)', 'Four haploid spores always', 'Crossing over'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['division'], title: 'Meiosis outcome', question: 'In animals, meiosis directly yields:', options: ['Always skin cells', 'Gametes', 'Identical twins per division', 'Root tips only'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['division'], title: 'S phase', question: 'DNA is replicated during:', options: ['Anaphase', 'Interphase (S)', 'Telophase only', 'Cytokinesis'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['division'], title: 'Sisters split', question: 'Sister chromatids separate in:', options: ['Prophase I', 'Anaphase II / mitotic anaphase', 'Metaphase I only', 'Interphase'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['division'], title: 'Variation', question: 'New allele combinations in gametes arise partly from:', options: ['Mitosis only', 'Crossing over and assortment', 'Photosynthesis', 'Osmosis'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['taxonomy'], title: 'Species epithet', question: 'In Homo sapiens, “sapiens” is the:', options: ['Genus', 'Specific epithet', 'Family', 'Order'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['taxonomy'], title: 'Inclusive rank', question: 'Which rank includes more species than a genus?', options: ['Species', 'Family', 'Individual', 'Cultivar only'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['taxonomy'], title: 'Bacteria', question: 'Bacterial cells:', options: ['Have a nucleus', 'Are prokaryotic', 'Are all identical', 'Lack DNA'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['taxonomy'], title: 'Fungi', question: 'Most fungi obtain food by:', options: ['Photosynthesis', 'Absorption after external digestion', 'Phagocytosis like amoebas', 'Filtering water only'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['taxonomy'], title: 'Viruses', question: 'Viruses outside a host:', options: ['Grow by mitosis', 'Are inert particles without metabolism', 'Have mitochondria', 'Replicate independently always'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['plants'], title: 'Root hairs', question: 'Root hairs function mainly in:', options: ['Photosynthesis', 'Absorption', 'Pollination', 'Transpiration pull formation'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['plants'], title: 'Xylem', question: 'Xylem sap is mainly:', options: ['Sucrose solution only', 'Water with dissolved minerals', 'Pure sugar', 'Sperm'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['plants'], title: 'Stomata', question: 'Guard cells control opening of:', options: ['Phloem tubes', 'Stomatal pores', 'Lenticels only', 'Flower ovaries'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['plants'], title: 'Leaf', question: 'Most chloroplasts in a leaf often occur in:', options: ['Upper epidermis only', 'Palisade mesophyll', 'Root cortex', 'Endodermis'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['plants'], title: 'Auxin', question: 'Auxin is synthesized strongly in:', options: ['Root hair tips only', 'Apical meristems (shoot tips)', 'Mature xylem only', 'Stomatal pores'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['animals'], title: 'Symmetry', question: 'Butterfly adults show:', options: ['Radial symmetry', 'Bilateral symmetry', 'No symmetry', 'Asymmetry only'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['animals'], title: 'Earthworm', question: 'Earthworms belong to phylum:', options: ['Mollusca', 'Annelida', 'Arthropoda', 'Platyhelminthes'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['animals'], title: 'Chordates', question: 'A notochord appears in all chordates:', options: ['Only as embryos', 'At some developmental stage', 'Never', 'Only in fish eggs'], correctAnswer: 1, difficulty: 'Hard' },
  { tags: ['animals'], title: 'Fish', question: 'Most bony fish respire using:', options: ['Lungs only', 'Skin only', 'Gills', 'Tracheae'], correctAnswer: 2, difficulty: 'Easy' },
  { tags: ['animals'], title: 'Mammals', question: 'Which trait is typical of mammals?', options: ['Feathers', 'Hair and mammary glands', 'Cartilaginous skeleton only', 'Ectothermy only'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['intro'], title: 'Dependent', question: 'The measured response in an experiment is the:', options: ['Independent variable', 'Dependent variable', 'Control group only', 'Theory'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['cell'], title: 'Golgi', question: 'The Golgi apparatus often:', options: ['Photosynthesizes', 'Modifies, sorts, packages molecules', 'Replicates DNA', 'Synthesizes glucose'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['transport'], title: 'Active', question: 'Active transport:', options: ['Never needs ATP', 'Can move ions against gradients', 'Is always osmosis', 'Only in dead xylem'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['division'], title: 'Plant cytokinesis', question: 'Plant cells often divide using:', options: ['Cleavage furrow', 'A cell plate', 'Binary fission', 'Budding'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['taxonomy'], title: 'Key', question: 'Identification keys typically use:', options: ['One step', 'Couplets of contrasting traits', 'Only color photos', 'DNA always'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['plants'], title: 'Phloem', question: 'Phloem sap often carries:', options: ['Only water', 'Sugars and other organics', 'Only O₂', 'Only DNA'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['animals'], title: 'Exoskeleton', question: 'Insects are grouped with arthropods because they have:', options: ['Endoskeleton', 'Jointed appendages and exoskeleton', 'Radial symmetry', 'No cuticle'], correctAnswer: 1, difficulty: 'Easy' },
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
  const tag = CHAPTER_TAGS[chapterIndex] || 'intro';
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
    `Example: Identify one structure or process from this topic, connect it to a measurable change, and state a cause–effect in one sentence.`;

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
    ? ['Key ideas and vocabulary for this unit (Grade 9 Biology).', formulasBlock].join('\n\n')
    : '';

  const pWorked = ['Worked example (this topic only).', sanitizePlain(worked)].join('\n\n');

  return {
    title: `Topic notes — ${topicLabel}`,
    content: [pTopic, pFormulas, pWorked].filter(Boolean).join('\n\n'),
  };
}

/** One video ID per topic (chapters 0–6 × topics 0–4). Mix: Khan Academy, Amoeba Sisters, Crash Course, The Organic Chemistry Tutor. */
const TOPIC_YOUTUBE_VIDEO_IDS = {
  // Unit 1 — introduction
  '0-0': 'HjA-SvvL2BQ', // Khan Academy — welcome / scope of high school biology
  '0-1': '3nAETHZTObk', // Amoeba Sisters — science practices / nature of science
  '0-2': 'tVcEEw6qbBQ', // Amoeba Sisters — microscopes
  '0-3': 'tMfaKTBH6d8', // Khan Academy — characteristics of living things
  '0-4': 'EtWknf1gzKo', // Amoeba Sisters — levels of biological organization

  // Unit 2 — cell structure and membranes
  '1-0': '8IlzKri08kk', // Amoeba Sisters — cell tour / cell theory context
  '1-1': 'HjC-eMiMDfo', // Khan Academy — plant vs animal cells
  '1-2': 'Ptmlvtei8hw', // Amoeba Sisters — cell membrane transport
  '1-3': 'bWPQvxElpLY', // Khan Academy — organelles in eukaryotic cells
  '1-4': '8m6hHRlKwxY', // Amoeba Sisters — DNA, chromosomes, genes, traits (genetic information flow)

  // Unit 3 — transport, enzymes, metabolism
  '2-0': 'wRfFNuVXye4', // Khan Academy — diffusion and osmosis
  '2-1': 'tCGUsiXIYhw', // The Organic Chemistry Tutor — enzymes
  '2-2': 'd9hffYCwfEA', // The Organic Chemistry Tutor — cellular respiration overview
  '2-3': '-rsYk4eCKnA', // Khan Academy — photosynthesis (overview)
  '2-4': 'D2Y_eEaxrYo', // The Organic Chemistry Tutor — light reactions & Calvin cycle survey

  // Unit 4 — mitosis, meiosis, variation
  '3-0': 'L0k-enzoeOM', // Crash Course — mitosis
  '3-1': 'LfDevNvjCXE', // Khan Academy — phases of mitosis
  '3-2': 'pj1oFx42d48', // Crash Course — meiosis
  '3-3': 'zrKdz93WlVk', // Amoeba Sisters — mitosis vs. meiosis side by side
  '3-4': 'QVCjdNxJreE', // Amoeba Sisters — cell cycle regulation & cancer link (division & health)

  // Unit 5 — classification and diversity
  '4-0': '3ryID_SzmUQ', // Khan Academy — taxonomy and species names
  '4-1': 'FStKwAugUb8', // Khan Academy — evolutionary tree / diversity survey
  '4-2': '_p3RyGSv6zI', // Khan Academy — classification and keys
  '4-3': 'cN5jQ7sQMn0', // Khan Academy — archaea, protista, bacteria overview (protist diversity)
  '4-4': 'tIfQipkkOqs', // Amoeba Sisters — fungi

  // Unit 6 — plants
  '5-0': 'pRWGcIXJ9Bk', // Amoeba Sisters — plant structure (roots & shoots)
  '5-1': 'jtuX7yV9e0k', // Khan Academy — xylem and transpiration (plant transport)
  '5-2': 'h3LSvyO8S9Q', // Khan Academy — stomata and leaf gas exchange
  '5-3': 'A_DF246uVlU', // Amoeba Sisters — plant structure & adaptations (leaf and tissue context)
  '5-4': 'dV9QcGs58l0', // Khan Academy — major plant hormones (survey)

  // Unit 7 — animals
  '6-0': 'vTJgIxmur9M', // Khan Academy — animal phyla survey / body plans
  '6-1': 'AIGza1dB3W8', // Khan Academy — arthropods
  '6-2': 'z5GCpPYYv9I', // Khan Academy — skeletal system (vertebrate context)
  '6-3': 'W_y9A5sy3Gc', // Khan Academy — fish gills and gas exchange
  '6-4': 'HfXqyPS5bRo', // Khan Academy — thermoregulation (warm-blooded context)
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
