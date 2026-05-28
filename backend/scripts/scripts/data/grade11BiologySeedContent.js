/**
 * Grade 11 Biology — study notes, YouTube URLs, MCQ padding (curriculum + stock).
 * Six units × five topics (30 topics). Videos: mix Khan Academy, Amoeba Sisters, Crash Course, The Organic Chemistry Tutor.
 */

const CHAPTER_TAGS = ['biotech', 'animals', 'enzymes', 'genetics', 'human', 'popres'];

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
    'Example: Satellite imagery and field sensors can map vegetation stress to target extension advice — linking data tools to biological interpretation.',
  '0-1':
    'Example: Vaccines present antigens so lymphocytes learn to respond faster on real exposure, illustrating immune memory as a biotechnology outcome.',
  '0-2':
    'Example: Tissue-cultured plantlets can multiply elite crop lines, but varietal identity and pathogen indexing must be managed to avoid losses.',
  '0-3':
    'Example: Negative controls in an assay reveal contamination if they become positive; a clear bench protocol records who did what and when.',
  '0-4':
    'Example: BLAST similarity does not prove identical function — experiments still test whether a predicted enzyme actually catalyzes the reaction.',
  '1-0':
    'Example: Clades are ancestor + all descendants; fish and dolphins are streamlined by convergence, not because dolphins are fish.',
  '1-1':
    'Example: Coelomic fluid can act as a hydrostatic skeleton in annelids while compartmentalizing organs compared with acoelomate flatworms.',
  '1-2':
    'Example: Countercurrent flow at fish gills maintains diffusion gradients that improve oxygen uptake versus a single-pass design.',
  '1-3':
    'Example: Jointed appendages and a segmented body plan underpin much insect diversity within Arthropoda.',
  '1-4':
    'Example: Chordates exhibit a notochord at some stage, pharyngeal slits, and dorsal hollow nerve cord — birds still show these in embryonic form.',
  '2-0':
    'Example: Apoenzyme + cofactor may yield a holoenzyme; without the cofactor the active site may fail to achieve catalytic geometry.',
  '2-1':
    'Example: Enzymes stabilize transition states lowering activation energy; they do not change overall ΔG of the reaction.',
  '2-2':
    'Example: Past optimum temperature, unfolding outpaces faster molecular motion, so rate drops after a peak.',
  '2-3':
    'Example: Competitive inhibitors raise apparent Km because more substrate is needed to outcompete at the active site in simple models.',
  '2-4':
    'Example: Immobilized enzymes in biosensors or industry can be reused; stability versus activity remains an engineering trade-off.',
  '3-0':
    'Example: A testcross of A–? dominant phenotype with aa reveals carriers if any aa offspring appear.',
  '3-1':
    'Example: Linkage changes dihybrid ratios from 9:3:3:1 toward parental-heavy combinations unless recombination separates alleles.',
  '3-2':
    'Example: Semiconservative replication means each daughter duplex retains one parental strand as a template for fidelity checking.',
  '3-3':
    'Example: A nonsense codon can truncate a protein upstream of essential domains, often producing unstable or non-functional products.',
  '3-4':
    'Example: CRISPR targets DNA using a guide RNA–Cas complex; off-target binding remains a key biosafety consideration in genome editing.',
  '4-0':
    'Example: Failing kidneys raise blood urea and disrupt acid–base balance, forcing lungs and buffers to compensate only partially.',
  '4-1':
    'Example: Myelinated axons propagate action potentials saltatorially, saving energy compared with exciting every micrometer of membrane.',
  '4-2':
    'Example: Negative feedback on the HPA axis reduces CRH/ACTH when cortisol returns to sufficient levels.',
  '4-3':
    'Example: MHC class I presents endogenous peptides to CD8+ T cells, important for monitoring infected or stressed cells.',
  '4-4':
    'Example: Filtration at capillaries drives fluid outward while oncotic pressure draws fluid back — edema rises when the balance fails.',
  '5-0':
    'Example: A wide pyramid base means many young people; momentum can persist even after fertility declines because cohorts enter reproduction.',
  '5-1':
    'Example: Urban growth concentrates service demand; without water and sanitation investment, enteric disease burden can rise.',
  '5-2':
    'Example: Terraces and vegetation strips slow runoff, protecting topsoil on Ethiopian highland slopes where rains are intense.',
  '5-3':
    'Example: In-situ conservation protects ecosystems and co-evolved interactions; ex-situ collections back up genetic diversity.',
  '5-4':
    'Example: Mitigation lowers greenhouse-gas sources or enhances sinks; adaptation copes with warming already “locked in” for decades.',
};

function formulasPlain(chapterIndex) {
  switch (chapterIndex) {
    case 0:
      return 'Biotech vocabulary: vector, selectable marker, sterile technique, assay sensitivity/specificity, responsible conduct, data repositories (e.g. sequence DBs).';
    case 1:
      return 'Animal survey: symmetry, germ layers, coelom; major phyla hallmarks; vertebrate traits; adaptation vs acclimatization; convergent evolution.';
    case 2:
      return 'Enzyme vocabulary: active site, Vmax, Km (intro), competitive vs noncompetitive patterns, allosteric regulation, zymogens, industrial immobilization ideas.';
    case 3:
      return 'Genetics: Mendel laws probability; linkage and recombination; DNA structure/replication; transcription/translation overview; mutations; cloning & editing survey.';
    case 4:
      return 'Human systems integration: feedback loops; action potentials & synapses; endocrine axes; innate vs adaptive immunity; Starling forces; lymphatic return.';
    case 5:
      return 'Population & resources: r vs logistic models; demographic transition (survey); soil erosion controls; renewable vs fossil resources; biodiversity levels; mitigation vs adaptation.';
    default:
      return '';
  }
}

const MCQ_STOCK = [
  { tags: ['biotech'], title: 'Assay', question: 'A negative control in an experiment helps detect:', options: ['Perfect technique always', 'Contamination producing false positives', 'Gravity changes', 'Moon phase'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['biotech'], title: 'Database', question: 'Genetic sequences are commonly stored in public repositories such as:', options: ['Only private USB sticks', 'GenBank-style archives among examples', 'Brick catalogs', 'Train timetables'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['biotech'], title: 'Sterile', question: 'Autoclaving aims to:', options: ['Wet glass without heat', 'Kill microbes on lab tools with steam pressure per protocols', 'Freeze enzymes only', 'Polish metal'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['animals'], title: 'Phylum', question: 'Jointed legs and chitin exoskeleton typify:', options: ['Chordata', 'Arthropoda', 'Mollusca', 'Echinodermata'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['animals'], title: 'Chordate', question: 'A notochord appears in chordates at least during:', options: ['Only adulthood always', 'Some developmental stage', 'Never', 'Only in plants'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['animals'], title: 'Bird', question: 'Feathers in extant birds mainly function in:', options: ['Gills for underwater breathing', 'Flight and insulation among roles', 'Root absorption', 'Silk production'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['enzymes'], title: 'Activ Ea', question: 'Enzymes speed reactions primarily by:', options: ['Raising activation energy always', 'Lowering activation energy pathway', 'Removing substrates permanently', 'Doubling atomic number of carbon'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['enzymes'], title: 'Inhibit', question: 'Many competitive inhibitors:', options: ['Bind distant from active site always', 'Resemble substrates in shape/charge', 'Always raise Vmax with same Km', 'Digest the enzyme'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['enzymes'], title: 'pH', question: 'Most human enzymes work best near:', options: ['pH 1 stomach pepsin context but not all enzymes', 'Physiological ~7.4 cytosol many enzymes though specialized compartments differ', 'pH 14 always', 'Absolute zero K'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['genetics'], title: 'DNA pair', question: 'In DNA, guanine pairs with:', options: ['Thymine', 'Cytosine', 'Uracil', 'Adenine only always'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['genetics'], title: 'Meiosis', question: 'Crossing over during prophase I increases:', options: ['Mitotic sister chromatid swap same mechanism false', 'Recombinant gamete diversity among homologs', 'Ploidy doubling in one division false', 'Photosynthesis rate'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['genetics'], title: 'Mendel', question: 'Aa × Aa with complete dominance yields genotypic ratio:', options: ['1:2:1', '3:1 (phenotypic, not genotypic)', '9:3:3:1 (dihybrid cross)', 'All AA'], correctAnswer: 0, difficulty: 'Easy' },
  { tags: ['human'], title: 'Hb', question: 'Most oxygen in arterial blood binds to:', options: ['Plasma proteins chiefly albumin not O2 main', 'Hemoglobin in erythrocytes', 'Platelets primarily', 'Urea'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['human'], title: 'Insulin', question: 'Insulin generally:', options: ['Raises blood glucose primarily', 'Promotes glucose uptake/storage in many tissues', 'Stimulates glucagon release dominantly', 'Blocks all enzymes globally'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['human'], title: 'MHC-I', question: 'MHC class I presents peptides chiefly from:', options: ['Exogenous phagocytosed bacteria always class II mostly', 'Endogenous proteins in cytosolic processing pathways classical teaching', 'Chloroplast stroma', 'Lunar rocks'], correctAnswer: 1, difficulty: 'Hard' },
  { tags: ['popres'], title: 'K', question: 'Logistic growth levels off near:', options: ['Zero individuals', 'Carrying capacity K environment-dependent', 'Infinite exponential always', 'Only bacteria densities'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['popres'], title: 'Erosion', question: 'Bare soil on steep slopes often increases:', options: ['Root nitrogen fixation', 'Surface runoff and soil loss risk', 'Aquifer recharge always', 'Humus instantly'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['popres'], title: 'Endemic', question: 'Endemic species are especially vulnerable when:', options: ['They live on every continent cosmopolitan safe', 'Their geographic range is small', 'They reproduce explosively always', 'They inhabit deep ocean vents universally'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['biotech'], title: 'GMP', question: 'Good practice in applied biology often demands:', options: ['No records', 'Traceable protocols and quality checks', 'Only anecdote', 'Random labels'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['animals'], title: 'Sym', question: 'Bilateral symmetry with cephalization is common in:', options: ['Adult echinoderms usually pentaradial', 'Many bilaterian animals with heads', 'Sponges mostly asymmetrical though larvae nuances', 'Mature sea stars adult axis'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['enzymes'], title: 'Cofactor', question: 'An organic cofactor sometimes called a coenzyme includes examples such as:', options: ['ATP as universal energy coin not coenzyme for every enzyme confusion', 'NAD⁺/FAD in many redox enzymes among textbook vitamin-derived helpers', 'Hemoglobin gas transport not enzyme cofactor pedantic', 'Cellulose'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['genetics'], title: 'Silent', question: 'A silent mutation may still be detected because:', options: ['It changes amino acid always false often same amino acid', 'Codon redundancy wobble positions may map same amino acid', 'It duplicates chromosomes', 'It removes introns'], correctAnswer: 1, difficulty: 'Medium' },
  { tags: ['human'], title: 'CO', question: 'Stroke volume × heart rate equals:', options: ['Peripheral resistance only', 'Cardiac output', 'MAP directly one factor MAP CO SVR interaction', 'GFR'], correctAnswer: 1, difficulty: 'Easy' },
  { tags: ['popres'], title: 'Mitig', question: 'Mitigating climate forcing differs from adaptation because mitigation mainly:', options: ['Copes with impacts already happening adaptation focus', 'Reduces sources or enhances sinks of greenhouse gases relative to baseline simplified IPCC framing intro', 'Measures rainfall only', 'Builds seawalls only adaptation example'], correctAnswer: 1, difficulty: 'Medium' },
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
  const tag = CHAPTER_TAGS[chapterIndex] || 'popres';
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
    `Example: Tie this topic to one concrete observation (lab measurement, field pattern, or health outcome) and state an evidence-based explanation.`;

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
    ? ['Key ideas and vocabulary for this unit (Grade 11 Biology).', formulasBlock].join('\n\n')
    : '';

  const pWorked = ['Worked example (this topic only).', sanitizePlain(worked)].join('\n\n');

  return {
    title: `Topic notes — ${topicLabel}`,
    content: [pTopic, pFormulas, pWorked].filter(Boolean).join('\n\n'),
  };
}

/** One curated video ID per topic (`chapterIndex-topicIndex`, six chapters × five topics). */
const TOPIC_YOUTUBE_VIDEO_IDS = {
  '0-0': 'HjA-SvvL2BQ', // Khan Academy — high school biology / scope
  '0-1': '2qLsPHOpX4I', // Khan Academy — endocrine / signaling context (biomedicine survey)
  '0-2': 'leHy-Y_8nRs', // Crash Course — nitrogen & phosphorus in living systems / agriculture link
  '0-3': 'tVcEEw6qbBQ', // Amoeba Sisters — microscopy & observation
  '0-4': '8m6hHRlKwxY', // Amoeba Sisters — DNA, chromosomes, genes (data/information angle)

  '1-0': 'vTJgIxmur9M', // Khan Academy — animal phyla / diversity
  '1-1': '8IlzKri08kk', // Amoeba Sisters — cell tour (foundation for tissues/organs)
  '1-2': 'L0k-enzoeOM', // Crash Course — mitosis (development/regrowth context)
  '1-3': 'pj1oFx42d48', // Crash Course — meiosis (genetic diversity in animals)
  '1-4': 'AIGza1dB3W8', // Khan Academy — arthropods

  '2-0': 'tCGUsiXIYhw', // The Organic Chemistry Tutor — enzymes
  '2-1': 'd9hffYCwfEA', // The Organic Chemistry Tutor — respiration pathways / energy (activation energy contrast)
  '2-2': 'wRfFNuVXye4', // Khan Academy — diffusion & concentration effects
  '2-3': 'LfDevNvjCXE', // Khan Academy — mitosis phases (regulation hooks)
  '2-4': 'QVCjdNxJreE', // Amoeba Sisters — cell cycle & regulation (industry stability analogy)

  '3-0': 'xTnNv7YplSo', // Khan Academy — cells & heredity (DNA intro bridge)
  '3-1': 'zrKdz93WlVk', // Amoeba Sisters — mitosis vs meiosis (inheritance patterns)
  '3-2': 'bWPQvxElpLY', // Khan Academy — organelles & DNA context
  '3-3': 'gp9j4WtSVUo', // Khan Academy India — Calvin cycle snippet (gene products in metabolism) / use for central dogma pairing in notes
  '3-4': 'FStKwAugUb8', // Khan Academy — evolutionary tree / change over time (GMO/evolution dialogue in class notes)

  '4-0': 'W_y9A5sy3Gc', // Khan Academy — homeostasis / regulation survey
  '4-1': 'Heynq5wkZZ4', // Khan Academy — neuron action potential
  '4-2': 'o0DafWp4rzQ', // Khan Academy — synaptic transmission
  '4-3': '8PbFui8fvvQ', // Khan Academy — alveoli (gas exchange bridge to immunity oxygen context)
  '4-4': 'mDUycOFFZYk', // Khan Academy — hemoglobin (integrated transport)

  '5-0': 'E1Y4Hokv8ZI', // Khan Academy — population growth
  '5-1': 'gM6VgQ15xIE', // Khan Academy — communities & interactions
  '5-2': 'AxaWXWd2pw4', // Khan Academy — eutrophication / watershed link
  '5-3': 'Kaeyr5-O2eU', // Crash Course — conservation / biodiversity threats
  '5-4': 'yR7t6K7X7x0', // Khan Academy — natural selection (links environment & human choices)
};

const FALLBACK_BIO_VIDEO_IDS = ['HjA-SvvL2BQ', 'tCGUsiXIYhw', 'FStKwAugUb8', 'E1Y4Hokv8ZI', 'vTJgIxmur9M'];

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
