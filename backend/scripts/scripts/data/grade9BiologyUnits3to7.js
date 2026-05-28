/**
 * Grade 9 Biology curriculum — Units 3–7 (Natural stream).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 3: Cell physiology — transport, enzymes, and metabolism',
    chapterDescription:
      'Movement of materials across membranes, enzyme action, overview of respiration and photosynthesis.',
    topics: [
      {
        topicName: 'Diffusion, osmosis, and tonicity',
        topicDescription: 'Concentration gradients, passive movement of water and solutes.',
        topicObjectives: [
          'Predict direction of water movement given simple tonicities.',
          'Relate plant turgor to vacuole water uptake or loss.',
        ],
      },
      {
        topicName: 'Enzymes and factors affecting enzyme activity',
        topicDescription: 'Active site, substrate specificity, temperature and pH effects.',
        topicObjectives: [
          'Explain competitive vs non-competitive inhibition at an introductory level.',
          'Sketch how temperature affects rate up to a denaturing point.',
        ],
      },
      {
        topicName: 'Overview of cellular respiration',
        topicDescription: 'Why cells oxidize fuels; glycolysis → mitochondria in aerobes; ATP as energy currency.',
        topicObjectives: [
          'Compare aerobic vs anaerobic outcomes in eukaryotic cells at a conceptual level.',
          'Identify where most ATP arises in aerobic pathways.',
        ],
      },
      {
        topicName: 'Overview of photosynthesis',
        topicDescription: 'Chloroplast roles; light vs Calvin cycle; oxygen release in oxygenic photosynthesis.',
        topicObjectives: [
          'State overall inputs and outputs of oxygenic photosynthesis.',
          'Contrast photoautotrophs with heterotrophs for carbon sources.',
        ],
      },
      {
        topicName: 'Energy flow between photosynthesis and respiration',
        topicDescription: 'How ecosystems link producers and consumers through carbon compounds and oxygen/carbon dioxide exchange.',
        topicObjectives: [
          'Trace carbon from CO₂ fixation to sugar to respiration in a plant cell.',
          'Link atmospheric gas exchange to these pathways.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Osmosis', 'Water moves toward the solution with:', ['Lower solute concentration', 'Higher total solute concentration (hypertonic side pulls water)', 'No gradient', 'Only positive ions'], 1, 'Medium'),
      ex(0, 'Diffusion', 'Net diffusion of a solute occurs:', ['Against its concentration gradient without help', 'Down its concentration gradient', 'Only at 0 K', 'Only through nuclear pores'], 1, 'Easy'),
      ex(1, 'Enzyme', 'An enzyme speeds a reaction by:', ['Being consumed equally with substrate stoichiometrically', 'Lowering activation energy', 'Raising activation energy', 'Removing all substrates permanently'], 1, 'Easy'),
      ex(1, 'pH', 'Most human enzymes work near physiological pH; strong acid often:', ['Increases activity without limit', 'Denatures many enzymes', 'Doubles DNA content', 'Adds cellulose'], 1, 'Medium'),
      ex(2, 'ATP', 'In many aerobes, most ATP from glucose comes from:', ['Glycolysis in cytosol only', 'Oxidative phosphorylation in mitochondria', 'Calvin cycle', 'Photosystem I only'], 1, 'Medium'),
      ex(2, 'O₂', 'In aerobic cellular respiration, oxygen acts as:', ['The substrate for glycolysis', 'Final electron acceptor in electron transport', 'Carbon source for Calvin cycle', 'Light-capturing pigment'], 1, 'Medium'),
      ex(3, 'Chloroplast', 'The Calvin cycle fixes carbon in the:', ['Nucleus', 'Stroma of chloroplast', 'Mitochondrial matrix', 'Lysosome'], 1, 'Easy'),
      ex(3, 'Light', 'Light reactions in chloroplasts occur on/in:', ['Mitochondrial cristae', 'Thylakoid membranes', 'Golgi stacks', 'Ribosomal subunits'], 1, 'Easy'),
      ex(4, 'Cycle', 'A plant’s chloroplasts make sugars that can later be oxidized in its:', ['Ribosomes', 'Mitochondria', 'Nucleolus', 'Cell wall only'], 1, 'Medium'),
      ex(4, 'Gas', 'Photosynthesis generally consumes ______ and releases ______ in oxygenic pathways.', ['CO₂; O₂', 'O₂; CO₂', 'N₂; H₂', 'CH₄; SO₂'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Diffusion & osmosis',
        problems: [
          P('Osmosis specifically refers to water moving:', ['Only in gases', 'Across a selectively permeable barrier', 'Only downhill in altitude', 'Without selective membranes'], 'B', ''),
          P('Crenation describes red blood cells that:', ['Swell in hypotonic medium', 'Shrink in hypertonic medium', 'Divide by mitosis in blood', 'Photosynthesize'], 'B', ''),
          P('Plasmolysis in plant cells happens when:', ['Pure water surrounds cells always', 'Cells lose water to hypertonic surroundings', 'Chloroplasts double', 'Guard cells always open'], 'B', ''),
          P('Facilitated diffusion uses membrane proteins and:', ['Consumes ATP always', 'Moves solute along favorable gradients typically', 'Only moves DNA', 'Works without lipids present'], 'B', ''),
          P('A selectively permeable membrane might:', ['Let water pass more freely than large polar solutes without carriers', 'Allow all molecules equally easily always', 'Block water entirely', 'Stop DNA from existing'], 'A', ''),
          P('Equilibrium for a solute across a membrane often means:', ['No molecules move', 'No net movement even with microscopic exchange', 'Only active transport remains', 'Vacuole disappears'], 'B', ''),
          P('Aquaporins mainly increase permeability to:', ['Starch', 'Water', 'Ribosomal RNA', 'Cellulose'], 'B', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Enzymes',
        problems: [
          P('Lock-and-key emphasizes:', ['Random folding irrelevant', 'Complementary fit of substrate to active site', 'Enzyme consumed each reaction stoichiometrically', 'One active site for all substrates'], 'B', ''),
          P('Increasing temperature to a point often increases rate because:', ['More molecular collisions with sufficient energy', 'DNA replicates faster in enzyme pocket', 'Osmosis reverses', 'Membrane becomes steel'], 'A', ''),
          P('Very high temperature may:', ['Always increase enzyme activity', 'Denature enzymes losing 3D active site shape', 'Freeze substrates', 'Turn starch into DNA'], 'B', ''),
          P('Competitive inhibitors often:', ['Bind regulatory DNA in nucleus', 'Resemble substrate at active site region', 'Digest membranes with lipase always', 'Add phospholipids only'], 'B', ''),
          P('Enzymes are catalysts meaning:', ['Consumed in overall stoichiometric reaction with substrate', 'Unchanged after a catalytic cycle', 'Raise activation energy for everything', 'Only work at absolute zero'], 'B', ''),
          P('Cofactors may be:', ['Only sunlight', 'Metal ions or coenzyme helpers', 'Only starch', 'Only introns'], 'B', ''),
          P('Feedback inhibition may reduce first enzyme in pathway when:', ['Product accumulates', 'Substrate disappears', 'DNA vanishes', 'Vacuole shrinks always'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Respiration',
        problems: [
          P('Glycolysis nets a small amount of ATP in the:', ['Mitochondrial matrix', 'Cytoplasm', 'Thylakoid lumen', 'Nucleolus'], 'B', ''),
          P('Pyruvate enters mitochondria for further oxidation in aerobes:', ['Never', 'Typically as mitochondrial reactions follow', 'Only in viruses', 'Only in photosynthesis'], 'B', ''),
          P('Anaerobic fermentation in human muscle can yield:', ['CO₂ and ethanol always', 'Lactate under rapid glycolytic demand', 'O₂', 'Sugar from light'], 'B', ''),
          P('NADH carries electrons toward:', ['Photosystem II', 'Electron transport chain in inner mitochondrial membrane', 'Vacuolar membrane pigment', 'Nuclear lamina'], 'B', ''),
          P('Substrate-level phosphorylation occurs in:', ['Parts of glycolysis and Krebs cycle', 'Only light reactions', 'Only translation termination', 'Only stomatal opening'], 'A', ''),
          P('Chemiosmosis couples H⁺ gradient to:', ['ATP synthase rotation making ATP', 'Calvin cycle fixation', 'DNA polymerase only', 'Stomatal opening'], 'A', ''),
          P('Why breathe O₂ in aerobes at whole-organism level?', ['It fuels light reactions directly', 'Electron transport chains need final electron acceptor O₂ forming water', 'It is the carbon source for sugars', 'It splits CO₂'], 'B', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — Photosynthesis',
        problems: [
          P('Primary producers in many ecosystems are:', ['Chemosynthetic only', 'Photoautotrophs like plants and algae', 'Only fungi', 'Only animals'], 'B', ''),
          P('Chlorophyll absorbs mainly:', ['Gamma rays', 'Visible light', 'Radio waves', 'X-rays in thylakoid'], 'B', ''),
          P('ATP and NADPH from light reactions are used in Calvin cycle to:', ['Make CO₂ from sugar', 'Fix carbon into sugars', 'Pump blood', 'Digest proteins in lysosome'], 'B', ''),
          P('Rubisco catalyzes:', ['Oxygenic splitting of pure N₂', 'Carboxylation step in Calvin cycle', 'DNA replication only', 'Spindle microtubule polymer'], 'B', ''),
          P('Oxygen produced in oxygenic photosynthesis originates largely from:', ['CO₂ splitting', 'H₂O photolysis', 'Nitrogen fixation', 'Fermentation'], 'B', ''),
          P('C₃ versus C₄ distinctions relate partly to:', ['Minimizing photorespiration in warm dry conditions for some lineages', 'Animal vs plant', 'Viruses', 'Moon phase'], 'A', ''),
          P('Stacks of thylakoids are:', ['Stomata', 'Grana', 'Peroxisomes', 'Centrioles'], 'B', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — Energy flow',
        problems: [
          P('Herbivores ultimately depend on:', ['CO₂ from mitochondria they lack', 'Organic carbon fixed by producers', 'Pure minerals only without carbon', 'X-ray photons as food'], 'B', ''),
          P('Decomposers recycle nutrients by:', ['Blocking respiration', 'Breaking detritus releasing minerals', 'Only photosynthesizing rocks', 'Denying ATP to cells'], 'B', ''),
          P('Plants both photosynthesize and respire because:', ['They never respire', 'All living cells need ATP maintenance even when green tissues fix carbon', 'They lack mitochondria', 'Chloroplasts replace mitochondria entirely'], 'B', ''),
          P('Energy through ecosystems flows roughly as:', ['Recycled infinitely without loss as heat in each transfer', 'One-way as usable energy with heat dissipation at each trophic transfer primarily', 'Random circles with no trophic structure', 'Only sunlight stored forever unchanged'], 'B', ''),
          P('Carbon in a sugar might later become:', ['Part of CO₂ respired by consumers or decomposers', 'Permanently stuck element that never cycles', 'Neon atom', 'Only rock mineral'], 'A', ''),
          P('Net primary production refers to energy stored in:', ['Producer biomass after plant respiration subtracted', 'Carnivore heat only', 'Volcanoes', 'Rivers only'], 'A', ''),
          P('Greenhouse gas CO₂ rises when:', ['Fossil fuel oxidation exceeds uptake temporarily in global budgets', 'Photosynthesis removes all CO₂ instantly always', 'Oceans cannot dissolve gases', 'Plants stop respiration'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 4: Cell division, reproduction, and variation',
    chapterDescription:
      'Mitosis and meiosis, sources of variation, introductory links to health and inheritance.',
    topics: [
      {
        topicName: 'The cell cycle and mitosis',
        topicDescription: 'Interphase, mitotic phases, cytokinesis; growth and repair.',
        topicObjectives: [
          'Order mitotic stages and key events in each.',
          'Explain why mitosis preserves chromosome number for typical somatic division.',
        ],
      },
      {
        topicName: 'Meiosis and gamete formation',
        topicDescription: 'Two divisions, reduction in chromosome number, synapsis and crossing over overview.',
        topicObjectives: [
          'Contrast products of mitosis vs meiosis in animals.',
          'Identify when homologs pair and when sister chromatids separate.',
        ],
      },
      {
        topicName: 'Fertilization and genetic variation',
        topicDescription: 'Restoration of diploidy; random fertilization and independent assortment overview.',
        topicObjectives: [
          'Explain why offspring are genetically different from parents in sexual reproduction.',
          'Connect crossing over to new allele combinations on chromosomes.',
        ],
      },
      {
        topicName: 'Chromosomes, DNA packaging, and intro to Mendelian patterns',
        topicDescription: 'Genes on chromosomes; simple dominant/recessive vocabulary.',
        topicObjectives: [
          'Define allele, genotype, and phenotype at introductory level.',
          'Use Punnett squares for monohybrid crosses with complete dominance.',
        ],
      },
      {
        topicName: 'Cell division and health',
        topicDescription: 'Cancer as misregulated cycles; nondisjunction concepts at introductory level.',
        topicObjectives: [
          'Describe checkpoints as error-reducing mechanisms.',
          'State why trisomy might arise from meiotic segregation errors.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Stages', 'During which phase do sister chromatids align at the metaphase plate in mitosis?', ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'], 1, 'Easy'),
      ex(0, 'PMAT', 'Cytokinesis follows:', ['S phase', 'M phase mitosis stages', 'G1', 'G0 senescence'], 1, 'Easy'),
      ex(1, 'Meiosis', 'Crossing over between homologs most directly occurs during:', ['Mitotic metaphase', 'Prophase I of meiosis', 'Cytokinesis', 'Binary fission'], 1, 'Medium'),
      ex(1, 'Haploid', 'Typical human sperm are:', ['Diploid', 'Haploid', 'Triploid', 'Polyploid always'], 1, 'Easy'),
      ex(2, 'Variety', 'Independent assortment affects:', ['Sister chromatid identity', 'Which maternal/paternal homologs face poles at metaphase I', 'Photosynthetic rate only', 'Stomata size'], 1, 'Medium'),
      ex(2, 'Fusion', 'A zygote forms when:', ['Two haploid gametes fuse', 'Mitosis ends in root only', 'Photosynthesis ends', 'Meiosis II completes in skin cell'], 0, 'Easy'),
      ex(3, 'Genotype', 'HH and Hh in complete dominance show:', ['Same genotype', 'Different genotype possibly same phenotype if H dominant', 'Cannot interbreed', 'No alleles'], 1, 'Medium'),
      ex(3, 'Allele', 'Alternative forms of a gene are:', ['Chromosomes', 'Alleles', 'Vacuoles', 'Organelles'], 1, 'Easy'),
      ex(4, 'Checkpoint', 'p53-related pathways can delay division if:', ['DNA is badly damaged', 'Sugar is high', 'Stomata open', 'Flowers bloom'], 0, 'Medium'),
      ex(4, 'Trisomy', 'Trisomy 21 can occur if:', ['Chromosomes segregate perfectly always', 'Nondisjunction yields extra chromosome 21 in a gamete', 'Mitosis in liver only fails', 'Photosynthesis adds chromosomes'], 1, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — Mitosis',
        problems: [
          P('Chromosomes become visible during:', ['Prophase condensation', 'Cytokinesis only', 'G2 without replication', 'Photosynthesis'], 'A', ''),
          P('Sister chromatids separate in mitotic:', ['Metaphase', 'Anaphase', 'Telophase before nuclear envelope reforms fully', 'G1'], 'B', ''),
          P('Cytokinesis differs plant vs animal:', ['Both use cleavage furrow identical', 'Plant often forms cell plate', 'Animal forms cell plate', 'Neither changes cytoplasm'], 'B', ''),
          P('Mitosis in somatic cells maintains for humans:', ['Haploid number', 'Diploid number in daughter cells', 'Random ploidy', 'Zero chromosomes'], 'B', ''),
          P('DNA replication occurs in:', ['Mitotic metaphase', 'Interphase S phase', 'Anaphase', 'Cytokinesis'], 'B', ''),
          P('Spindle microtubules attach to kinetochores from:', ['Lysosomes', 'Centrosomes organizing poles in animal cells', 'Chloroplasts', 'Vacuole membrane'], 'B', ''),
          P('Telophase includes:', ['Nuclear envelopes reforming around separated chromatids', 'Crossing over', 'DNA replication beginning', 'Synapsis of homologs'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Meiosis',
        problems: [
          P('Homologous chromosomes pair during:', ['Prophase I', 'Anaphase II', 'Mitotic anaphase', 'Cytokinesis only'], 'A', ''),
          P('Meiosis I separates:', ['Sister chromatids', 'Homologous chromosomes', 'DNA bases individually', 'Ribosomal subunits'], 'B', ''),
          P('Meiosis II resembles mitosis in that:', ['Sister chromatids separate', 'Homologs pair again', 'DNA replicates between divisions fully second time in normal meiosis', 'Four diploid cells form'], 'A', ''),
          P('Crossing over between non-sister chromatids increases:', ['Identical gametes only', 'Recombinant chromosome diversity', 'Mitochondrial count in gametes always', 'Plant cell wall thickness'], 'B', ''),
          P('Four functional sperm from one primary spermatocyte in humans typical scheme contrasts with egg production how?', ['One ovum plus polar bodies pattern in oogenesis typically', 'Four identical eggs', 'Infinite polar bodies always', 'No reduction'], 'A', ''),
          P('Tetrads are visible during:', ['Prophase I pairing', 'Metaphase plate of mitosis always', 'Telophase II only', 'G1'], 'A', ''),
          P('Synapsis means:', ['Sister separation', 'Homolog pairing closely', 'CO₂ fixation', 'Binary fission'], 'B', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Variation & fertilization',
        problems: [
          P('Random fertilization mixes:', ['Only mitochondrial genomes identically', 'Which sperm fertilizes which egg', 'Ribosomal RNA genes only', 'Minerals in soil'], 'B', ''),
          P('Crossing over creates chromosomes with:', ['Always identical sisters only', 'New allele combinations along chromosome', 'No DNA', 'Binary fission errors'], 'B', ''),
          P('Independent assortment shuffles maternal and paternal:', ['Sister chromatids at metaphase II', 'Homolog pairs at metaphase I orientation', 'Ribosomal proteins only', 'Vacuole positions'], 'B', ''),
          P('Zygote is typically:', ['Haploid in humans', 'Diploid after fertilization', 'Triploid always', 'No nucleus'], 'B', ''),
          P('Genetic drift changes allele frequencies by:', ['Deterministic infinite population always', 'Chance especially in small populations', 'Photosynthetic yield only', 'Perfect meiosis always'], 'B', ''),
          P('Outcrossing in many animal species tends to:', ['Eliminate all variation', 'Increase heterozygosity vs extreme inbreeding scenarios', 'Stop gene flow', 'Fix all alleles'], 'B', ''),
          P('Environment interacts with genotype to produce:', ['Phenotype', 'Only genotype visible always', 'Mutations every generation always', 'No traits'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — Mendelian intro',
        problems: [
          P('If T is dominant tall and t recessive short, Tt × Tt yields short offspring probability:', ['0%', '25%', '50%', '75%'], 'B', ''),
          P('Test cross often uses:', ['Homozygous recessive to reveal unknown dominant genotype if offspring split', 'Selfing only bacteria', 'Viruses', 'Moon phase'], 'A', ''),
          P('Homozygous dominant genotype example:', ['TT for a gene', 'Tt', 'tt', 'No alleles'], 'A', ''),
          P('Phenotype means:', ['DNA sequence only', 'Observable traits', 'Chromosome count only', 'Mitochondrial number only'], 'B', ''),
          P('Law of segregation reflects:', ['Allele pairs separate in gamete formation in diploids during meiosis', 'Mitochondria segregate randomly always alone', 'All traits blend perfectly', 'No variation'], 'A', ''),
          P('Incomplete dominance would show:', ['Only two phenotypes strict', 'Intermediate phenotype in heterozygote for some traits like flower color examples', 'No heredity', 'Astral alignment'], 'B', ''),
          P('Monohybrid cross tracks:', ['One gene with two alleles pairs typically', 'Many genes at once', 'Only populations never individuals', 'Mitochondria only'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Division & health',
        problems: [
          P('Proto-oncogenes can become oncogenic if:', ['Activated aberrantly leading to excessive growth signals', 'Removed from genome cleanly always', 'Duplicated in plants only', 'Converted to starch'], 'A', ''),
          P('Tumor suppressors often function in:', ['Blocking apoptosis always', 'Supporting checkpoints or DNA repair', 'Synthesizing chlorophyll', 'Fixing atmospheric nitrogen'], 'B', ''),
          P('Metastasis means cancer cells:', ['Stay local always', 'Spread to distant sites', 'Differentiate perfectly', 'Undergo apoptosis always'], 'B', ''),
          P('Nondisjunction can yield gametes:', ['Always perfect diploid count', 'Extra or missing chromosomes', 'Only normal fertilization', 'No meiosis'], 'B', ''),
          P('Chemotherapy often targets:', ['Rapidly dividing cells preferentially though side effects', 'Only neurons', 'Only prokaryotes', 'Only viruses outside host'], 'A', ''),
          P('Benign tumor generally:', ['Respects tissue boundaries more than invasive malignancy typically implied', 'Always identical to metastatic', 'Is never removed', 'Is always virus'], 'A', ''),
          P('Angiogenesis inhibitors aim to:', ['Starve tumors by limiting blood vessel growth', 'Increase bleeding everywhere', 'Photosynthesize tumors', 'Grow bones inside tumors'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 5: Biological classification and diversity',
    chapterDescription:
      'Taxonomic hierarchy, major groups of life, tools for identification, and roles of microbes and fungi.',
    topics: [
      {
        topicName: 'Classification goals and binomial nomenclature',
        topicDescription: 'Why classify; Linnaean ranks; writing scientific names.',
        topicObjectives: [
          'List major ranks from domain to species.',
          'Correctly format a binomial in writing.',
        ],
      },
      {
        topicName: 'Domains and kingdom-level overview',
        topicDescription: 'Bacteria, Archaea, Eukarya; contrasts in cell structure and nutrition modes.',
        topicObjectives: [
          'State one major difference between typical Bacteria and Archaea.',
          'Place plants, animals, fungi in broad eukaryotic groups.',
        ],
      },
      {
        topicName: 'Using keys and field characters',
        topicDescription: 'Dichotomous keys; observable traits vs molecular data Intro.',
        topicObjectives: [
          'Follow a simple dichotomous key to a plausible identification.',
          'Explain why single traits can mislead classification.',
        ],
      },
      {
        topicName: 'Protists and microscopic eukaryotes',
        topicDescription: 'Diversity of mostly unicellular eukaryotes; algae vs protozoa colloquially.',
        topicObjectives: [
          'Name two habitats where protists are ecologically important.',
          'Differentiate phototrophy from phagotrophy in protists generally.',
        ],
      },
      {
        topicName: 'Kingdom Fungi and lichens',
        topicDescription: 'Absorptive nutrition; hyphae and spores; symbiosis with photosynthetic partners.',
        topicObjectives: [
          'Explain why fungi are not classified as plants.',
          'Describe a lichen as partnership between fungus and photosynthetic cells.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Rank', 'Which rank is directly broader than genus?', ['Species', 'Family', 'Variety only', 'Individual'], 1, 'Easy'),
      ex(0, 'Write', 'The species epithet in binomial nomenclature is:', ['Always capitalized', 'Lowercase typically', 'A family name', 'The kingdom'], 1, 'Easy'),
      ex(1, 'Domains', 'How many domains are commonly taught in many curricula?', ['One', 'Two', 'Three', 'Five'], 2, 'Easy'),
      ex(1, 'Wall', 'Bacterial cell walls often contain:', ['Cellulose', 'Peptidoglycan', 'Chitin only always', 'Silica frustules only'], 1, 'Medium'),
      ex(2, 'Key', 'A dichotomous key uses:', ['One vague description', 'Paired contrasting statements', 'DNA only always in field', 'Color charts unrelated'], 1, 'Easy'),
      ex(2, 'Trait', 'Convergent evolution produces traits that are:', ['Always homologous', 'Analogous similar function independent lineage', 'Identical DNA always', 'Only embryonic'], 1, 'Medium'),
      ex(3, 'Protist', 'Many photosynthetic protists contain:', ['Mitochondria never', 'Chloroplasts', 'Peptidoglycan walls like bacteria', 'No membranes'], 1, 'Easy'),
      ex(3, 'Habitat', 'Planktonic protists are important in:', ['Only deserts exclusively forever', 'Aquatic food webs', 'Pure rock mantle', 'Stratosphere ozone catalysis only'], 1, 'Easy'),
      ex(4, 'Fungi', 'Fungi are heterotrophs that feed by:', ['Photosynthesis in chloroplasts', 'Absorption after external digestion', 'Ingestion through mouth like all animals always same', 'Chemosynthesis from pure iron ore'], 1, 'Easy'),
      ex(4, 'Lichens', 'The fungal partner in many lichens provides:', ['All photosynthetic sugars alone', 'Structure, water retention, and mineral uptake help', 'Nitrogen fixation in every lichen', 'Oxygenic photosynthesis'], 1, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Classification',
        problems: [
          P('The scientific name includes:', ['Genus and specific epithet', 'English name only', 'Author birthdate only', 'Only rank Family'], 'A', ''),
          P('Latinized forms reduce:', ['Need for any communication', 'Ambiguity across languages somewhat', 'DNA existence', 'Cell membrane presence'], 'B', ''),
          P('Type specimens help:', ['Anchor names to a physical reference historically', 'Melt DNA', 'Map galaxies', 'Tune radios'], 'A', ''),
          P('Synonymy occurs when:', ['Only one name ever exists', 'Same species described under multiple names historically', 'No taxonomy', 'Viruses have cells'], 'B', ''),
          P('Subspecies rank may appear as:', ['Third Latin name sometimes trinomial', 'Always two words only forever', 'Only English', 'No intraspecific variation allowed'], 'A', ''),
          P('Cladistics emphasizes:', ['Shared derived characters for monophyletic groups', 'Overall similarity ignoring ancestry', 'Rock density only', 'Geographic proximity only'], 'A', ''),
          P('Why update classifications?', ['Science never changes', 'New molecular and trait evidence refines relationships', 'Latin banned', 'Species disappear'], 'B', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — Domains & kingdoms',
        problems: [
          P('Archaea are prokaryotic yet differ from Bacteria in:', ['They always lack DNA', 'Some molecular and membrane features', 'They are all photosynthetic like plants', 'They have nucleus'], 'B', ''),
          P('Eukaryotic organisms have:', ['No cytoskeleton', 'Nucleus and typically many organelles', 'Peptidoglycan walls always', 'No mitochondria ever'], 'B', ''),
          P('Animals ingest food; fungi:', ['Photosynthesize with chloroplasts', 'Absorb nutrients after extracellular digestion', 'Fix N₂ in root nodules always', 'Are chemosynthetic lithotrophs always'], 'B', ''),
          P('Plants’ cells often contain:', ['Chloroplasts in photosynthetic tissues', 'Centrioles always identical mandatory', 'No vacuole ever', 'Peptidoglycan instead of cellulose'], 'A', ''),
          P('Extremophilic archaea illustrate:', ['Life only at room temperature', 'Tolerance of harsh chem/physical niches', 'Cannot have membranes', 'Always infect humans'], 'B', ''),
          P('Horizontal gene transfer complicates:', ['Only eukaryote trees', 'Some prokaryotic phylogeny inference', 'Moon distance', 'Photosynthesis existence'], 'B', ''),
          P('Which is a prokaryote?', ['Amoeba', 'Escherichia', 'Yeast', 'Euglena with chloroplasts'], 'B', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Keys',
        problems: [
          P('Analogous traits arise from:', ['Always same embryonic origin', 'Convergent evolution', 'Only horizontal gene transfer always', 'Mitosis only'], 'B', ''),
          P('Homologous forelimb bones in vertebrates suggest:', ['Different ancestry always', 'Common ancestry with modification', 'Convergence always', 'No bones'], 'B', ''),
          P('A field guide relies heavily on:', ['Observable characters sometimes seasonal', 'Only full genomic sequencing in pocket', 'Astrology', 'Mineral hardness only'], 'A', ''),
          P('Single trait classification can fail because:', ['Homoplasy misleads if only one character', 'DNA never varies', 'Cells lack membranes', 'Species never change'], 'A', ''),
          P('Digital repositories like barcode databases help:', ['Compare sequences for identification support', 'Eliminate Latin names', 'Replace microscopes entirely', 'Disprove evolution'], 'A', ''),
          P('Phenetic clustering groups by:', ['Only ancestry inference explicitly always', 'Overall similarity sometimes not only homology distinction rigorous historically', 'Music genres', 'Hair color alone law'], 'B', ''),
          P('Molecular clocks are:', ['Perfectly precise always', 'Stochastic models of roughly constant substitution rates infer times cautiously', 'Only for viruses outside host', 'Banned'], 'B', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — Protists',
        problems: [
          P('Many pathogenic protists are associated with:', ['Only polar ice exclusively forever', 'Water or vector-mediated transmission', 'Stratosphere only', 'Pure granite'], 'B', ''),
          P('Mixotrophic protists might:', ['Use both photosynthesis and phagotrophy sometimes', 'Never eat', 'Lack membranes', 'Are viruses'], 'A', ''),
          P('Algae contribute to global:', ['O₂ production from aquatic photosynthesis major contributor with plants', 'Only iron smelting', 'Moon tidal names only', 'No carbon cycling'], 'A', ''),
          P('Apicomplexan parasites include:', ['Malaria-causing Plasmodium species among them', 'Only plants', 'Only mammals', 'Diatoms only always'], 'A', ''),
          P('Ciliates use cilia for:', ['Movement and feeding currents', 'Photosynthesis', 'Cell wall synthesis', 'Mitochondrial replication only'], 'A', ''),
          P('Dinoflagellate blooms may cause:', ['Harmful red tides occasionally', 'Increase O₂ only never harm', 'Eliminate all oceans', 'Freeze Earth'], 'A', ''),
          P('Endosymbiosis theory relates to origin of some organelles like:', ['Mitochondria and chloroplasts descended from engulfed bacteria lineages in broad outline', 'Nucleolus from viruses', 'Vacuole from meteorites', 'Cell wall from plastic'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Fungi & lichens',
        problems: [
          P('Chitin in fungal walls differs from cellulose of plants:', ['Same polymer always', 'Different sugar polymer type', 'No difference chemically', 'Fungi lack walls'], 'B', ''),
          P('Yeasts are often:', ['Multicellular hyphae only always', 'Unicellular fungi forms', 'Photosynthetic', 'Bacterial'], 'B', ''),
          P('Spore dispersal aids fungal:', ['Genetic spread and colonization', 'Photosynthesis', 'Internal bone growth', 'Blood pumping'], 'A', ''),
          P('Mycorrhizae are symbioses between fungi and:', ['Plant roots often nutrient exchange oriented', 'Coral polyps only always', 'Humans lungs', 'Sponges oscula'], 'A', ''),
          P('Lichens may indicate:', ['Air sensitivity pollutants sometimes as bioindicators', 'Radio stations', 'Gold deposits always', 'Ocean depth alone'], 'A', ''),
          P('Fungal pathogens can affect:', ['Crops and humans among other hosts', 'Steel bridges primarily', 'Only prokaryotes', 'Only viruses'], 'A', ''),
          P('Fruiting bodies like mushrooms are:', ['Spore dispersal structures on hyphal networks', 'Photosynthetic leaves', 'Fish gills', 'Blood vessels'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 6: Plant structure, transport, and responses',
    chapterDescription:
      'Root–stem–leaf organization; xylem and phloem; transpiration; basic plant hormones and tropisms.',
    topics: [
      {
        topicName: 'Root and shoot structure',
        topicDescription: 'Meristems, primary tissues, root hair zone, stem nodes.',
        topicObjectives: [
          'Identify zones of a young root on a diagram.',
          'Relate node and internode to leaf attachment patterns.',
        ],
      },
      {
        topicName: 'Water and mineral transport in xylem',
        topicDescription: 'Cohesion–tension idea; role of roots and leaves.',
        topicObjectives: [
          'Outline steps linking transpiration to water uptake.',
          'Name cell types in xylem at introductory level.',
        ],
      },
      {
        topicName: 'Transpiration and stomatal regulation',
        topicDescription: 'Stomata, guard cells, environmental effects on water loss.',
        topicObjectives: [
          'Explain trade-off between CO₂ uptake and water loss.',
          'Predict partial stomatal closure under drought signals like ABA.',
        ],
      },
      {
        topicName: 'Leaf anatomy and primary production',
        topicDescription: 'Epidermis, mesophyll layers, bundle sheath contexts intro.',
        topicObjectives: [
          'Relate palisade and spongy layers to light and gas paths.',
          'Compare upper vs lower epidermis stomatal densities generally.',
        ],
      },
      {
        topicName: 'Plant hormones and growth responses',
        topicDescription: 'Auxin, gibberellins, ethylene examples; phototropism and gravitropism.',
        topicObjectives: [
          'Describe phototropism using differential auxin distribution picture.',
          'State one agricultural use of ethylene or gibberellins.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Meristem', 'Primary growth lengthwise in stems arises at:', ['Lateral cambium only in primary plant', 'Apical meristem', 'Root hair', 'Stomata'], 1, 'Easy'),
      ex(0, 'Root hair', 'Root hairs arise from:', ['Root cap cells', 'Epidermal extension near absorption zone', 'Xylem vessels dead', 'Phloem'], 1, 'Easy'),
      ex(1, 'Xylem', 'Tracheids and vessel elements are:', ['Living at maturity typically conducting water dead at functional maturity commonly', 'Sugar conduits', 'Photosynthetic', 'Mitochondrial membranes'], 0, 'Medium'),
      ex(1, 'Pull', 'Transpiration through stomata contributes to:', ['Water ascent tension in xylem', 'Phloem root pressure only', 'Binary fission', 'Nitrogen triple bond break'], 0, 'Medium'),
      ex(2, 'Stomata', 'Guard cells control:', ['Xylem diameter permanently fixed', 'Stomatal aperture size', 'Phloem sugar loading only', 'DNA replication'], 1, 'Easy'),
      ex(2, 'Wilting', 'Wilting under drought often involves:', ['Excessive turgor only', 'Loss of turgor from water deficit', 'More photosynthesis only', 'Stomata forced fully open always'], 1, 'Easy'),
      ex(3, 'Mesophyll', 'Palisade layer is adapted to:', ['Absorb minimal light', 'Capture light efficiently', 'Store starch only in roots', 'Pump blood'], 1, 'Easy'),
      ex(3, 'Gas', 'Spongy mesophyll air spaces help:', ['Calcify bone', 'Internal gas circulation toward stomata', 'Synthesize hemoglobin', 'Digest insects'], 1, 'Easy'),
      ex(4, 'Auxin', 'Phototropism toward light involves uneven:', ['CO₂ levels in soil', 'Auxin distribution causing cell elongation differences', 'Ethylene in roots only always inhibiting light', 'Gravity sensors in mitochondria'], 1, 'Medium'),
      ex(4, 'Ethylene', 'Ethylene is commonly associated with:', ['Primary stem elongation only', 'Ripening of many climacteric fruits', 'Palisade cell division', 'Root hair initiation'], 1, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 6 Quiz 1 — Plant structure',
        problems: [
          P('Apical dominance involves auxin from:', ['Root hairs', 'Shoot apical meristem suppressing lateral buds often', 'Mature xylem only', 'Stomata only'], 'B', ''),
          P('Nodes on stems are:', ['Regions where leaves attach', 'Only underground', 'Random cracks', 'Flowerless always'], 'A', ''),
          P('Root cap protects:', ['Apical meristem as root pushes through soil', 'Flowers', 'Chloroplasts in leaves', 'Phloem only'], 'A', ''),
          P('Endodermis with Casparian strip regulates:', ['Entry to vascular stele mineral passage', 'Bee path', 'Bird song', 'Volcano'], 'A', ''),
          P('Lateral roots arise from:', ['Pericycle often', 'Stomata epidermis', 'Pollen tube', 'Fruit mesocarp only'], 'A', ''),
          P('Pith in young dicot stems may store:', ['Carbohydrates', 'Chlorophyll primary function', 'Spores of animals', 'Hemoglobin'], 'A', ''),
          P('Adventitious roots may form from:', ['Cut stems in some species during propagation', 'Only zygotes', 'Only primary root tip forever alone', 'Mammal embryos only'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 6 Quiz 2 — Xylem transport',
        problems: [
          P('Cohesion refers to:', ['Sugar viscosity', 'Water molecules hydrogen-bond chain in xylem conduits', 'Only phloem sap', 'DNA bases'], 'B', ''),
          P('Adhesion to conduit walls helps:', ['Counter gravitational pull partially', 'Photosynthesize directly', 'Make ATP in leaves only', 'Replicate chromosomes'], 'A', ''),
          P('Root pressure can cause guttation when:', ['Transpiration is low soil moisture high night sometimes', 'Stomata wide midday desert always', 'Snow only', 'Vacuole absent'], 'A', ''),
          P('Lignin in xylem walls provides:', ['Sugar transport only', 'Strength and waterproofing for conduits under negative pressure', 'Photosynthetic pigment', 'Soft fruit texture'], 'B', ''),
          P('Capillary rise alone cannot explain:', ['Tallest trees water lift needing transpiration pull too', 'Small tube demo only partial', 'Phloem bulk flow', 'Stomata opening'], 'A', ''),
          P('Minerals enter xylem after passing endodermis control:', ['Sometimes', 'Never cross roots', 'Only through fruits', 'Only bark of stems exclusively'], 'A', ''),
          P('Ring porous wood shows:', ['Seasonal vessel diameter differences in ring-porous temperate trees', 'No growth rings', 'Only monocots always', 'No xylem'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 6 Quiz 3 — Transpiration',
        problems: [
          P('Stomatal conductance increases:', ['CO₂ diffusion into leaf when open', 'Root hair length instantly always', 'Phloem DNA', 'Mitochondrial ribosomes only'], 'A', ''),
          P('High humidity reduces transpiration because:', ['Lower water-vapor gradient from leaf to air', 'Stomata double forced open always', 'Photosynthesis halts fully always', 'Xylem reverses'], 'A', ''),
          P('Wind can increase transpiration by:', ['Removing humid boundary layer at leaf surface', 'Closing stomata always', 'Cooling Earth core', 'Increasing soil pH only'], 'A', ''),
          P('Water ascending from roots to leaves primarily travels in:', ['Xylem', 'Phloem only downward', 'Stomatal cavities only', 'Cork cambium only'], 'A', ''),
          P('ABA hormone signaling often promotes:', ['Stomatal closure under water stress contexts', 'Fruit softening always alone ethylene overlaps', 'Binary fission', 'Bone growth'], 'A', ''),
          P('C₄ plants sometimes reduce photorespiration by:', ['Concentrating CO₂ near Rubisco via bundle sheath strategy', 'Removing mitochondria', 'Closing stomata forever', 'Eliminating chlorophyll'], 'A', ''),
          P('Cuticle waxes reduce:', ['Non-stomatal water loss from epidermis', 'Photosynthetic genes', 'DNA replication', 'Root growth always'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 6 Quiz 4 — Leaf anatomy',
        problems: [
          P('Upper cuticle is often relatively transparent to:', ['Allow light reach palisade', 'Block all light', 'Absorb O₂ only', 'Prevent gas exchange entirely'], 'A', ''),
          P('Bundle sheath cells in C₃ plants surround:', ['Vascular bundles', 'Stomata only', 'Roots hairs only', 'Fruit seeds only'], 'A', ''),
          P('Stomata are often denser on lower epidermis in many dicots to:', ['Reduce irradiance load somewhat while exchanging gases', 'Stop CO₂ entry', 'Grow roots on leaves', 'Synthesize cellulase'], 'A', ''),
          P('Hydathodes can exude:', ['Guttation fluid from vein endings sometimes', 'Phloem sap only always', 'Latex always', 'Nectar always'], 'A', ''),
          P('Leaf area index affects:', ['Light interception by canopy', 'Earth orbit', 'Moon mass', 'Ocean salinity only'], 'A', ''),
          P('Midrib contains:', ['Vascular tissue extending into blade', 'Only stomata', 'Only upper epidermis', 'No cells'], 'A', ''),
          P('Sunken stomata in xerophytic leaves help:', ['Reduce transpiration exposure', 'Increase water loss always', 'Photosynthesize in roots', 'Grow faster always'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 6 Quiz 5 — Hormones & tropisms',
        problems: [
          P('Gravitropism roots down relates to:', ['Auxin distributions and statolith perception in root cap among mechanisms', 'Photoreceptors only in leaves for downward', 'Metal magnets', 'Osmosis unrelated'], 'A', ''),
          P('Gibberellins can promote:', ['Stem elongation in many contexts', 'Stomatal closure always primary', 'Ethylene destruction only', 'Root hair death'], 'A', ''),
          P('Cytokinins often stimulate:', ['Cell division in tissue culture among roles', 'Only apoptosis everywhere', 'Fossilization', 'Volcanic eruption'], 'A', ''),
          P('Abscission layer in leaf drop involves:', ['Hormonal balance ethylene/auxin among signals timing', 'Only mineral salts', 'Binary fission', 'Solar flares'], 'A', ''),
          P('Strigolactones relate partly to:', ['Shoot branching inhibition in some pathways discovered historically', 'Bone density', 'Bird migration', 'Coral bleaching only'], 'A', ''),
          P('Nastic movements differ from tropic because:', ['Not directional to stimulus vector always—more reversible turgor changes', 'Identical to phototropism always', 'Require growth only irreversible', 'Never use hormones'], 'A', ''),
          P('Farmers apply gibberellin sometimes to:', ['Break seed dormancy or increase fruit bunch spacing examples', 'Kill all insects', 'Remove O₂', 'Freeze crops'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 7: Animal diversity and basic organ systems',
    chapterDescription:
      'Major invertebrate and vertebrate groups; trends in support, movement, and gas exchange; birds and mammals overview.',
    topics: [
      {
        topicName: 'Animal body plans and invertebrate phyla',
        topicDescription: 'Symmetry, tissues, coelom, segmentation; sponge–cnidarian–worm–arthropod snapshots.',
        topicObjectives: [
          'Match phylum names to one hallmark structure or behavior.',
          'Contrast radial vs bilateral symmetry with examples.',
        ],
      },
      {
        topicName: 'Arthropods and jointed exoskeletons',
        topicDescription: 'Insecta, Crustacea, Chelicerata basics; molting and gas exchange variety.',
        topicObjectives: [
          'Explain why arthropods must molt to grow.',
          'Give one example of open vs closed circulatory contrast.',
        ],
      },
      {
        topicName: 'Vertebrate skeleton and movement',
        topicDescription: 'Bone, cartilage, muscle attachment; fish vs land trends.',
        topicObjectives: [
          'Describe cartilage vs bone roles in typical long bones.',
          'State one adaptation for terrestrial weight bearing.',
        ],
      },
      {
        topicName: 'Gas exchange in aquatic and terrestrial vertebrates',
        topicDescription: 'Gills, lungs, skin, air sacs in birds; countercurrent exchange ideas.',
        topicObjectives: [
          'Explain why gills work in water but lungs in air for most vertebrates.',
          'Identify unidirectional airflow advantage in birds briefly.',
        ],
      },
      {
        topicName: 'Birds and mammals — thermoregulation and reproduction',
        topicDescription: 'Endothermy, feathers/hair; placental vs monotreme vs marsupial contrasts.',
        topicObjectives: [
          'Contrast ectothermy vs endothermy using metabolism and stable core.',
          'Name one reproductive difference among mammal lineages.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Sponge', 'Choanocytes in sponges resemble:', ['Plant palisade', 'Collar flagellated cells feeding', 'Neuron axons', 'Bird feathers'], 1, 'Medium'),
      ex(0, 'Symmetry', 'Adult sea star often shows:', ['Bilateral symmetry', 'Radial symmetry', 'Asymmetry only', 'Bilateral exclusive'], 1, 'Easy'),
      ex(1, 'Molting', 'Arthropods grow by:', ['Continuous bone expansion', 'Shedding exoskeleton after molting', 'Adding cellulose', 'Photosynthesis'], 1, 'Easy'),
      ex(1, 'Open', 'Many arthropods have:', ['Closed circulatory system always', 'Open hemolymph circulation', 'No heart ever', 'Four-chamber hearts like mammals always'], 1, 'Medium'),
      ex(2, 'Cartilage', 'Growth plates in long bones contain:', ['Keratin scales', 'Hyaline cartilage for lengthening before closure', 'Chloroplasts', 'Silica'], 1, 'Medium'),
      ex(2, 'Bone', 'Osteoclasts activity relates to:', ['Building bone matrix only always without exception', 'Bone resorption remodeling', 'Making chlorophyll', 'Digesting starch in mouth'], 1, 'Hard'),
      ex(3, 'Gill', 'Countercurrent flow in fish gills maximizes:', ['O₂ diffusion efficiency along lamellae', 'CO₂ storage in swim bladder', 'Water freezing point', 'DNA melting point'], 0, 'Medium'),
      ex(3, 'Bird lung', 'Bird lungs paired with air sacs allow:', ['Unidirectional airflow improving gas exchange efficiency', 'Underwater breathing without gills', 'Lack of respiration', 'Bone digestion'], 0, 'Medium'),
      ex(4, 'Endo', 'Endotherms burn fuel to:', ['Maintain relatively stable core temperature', 'Match environment exactly always without metabolism', 'Eliminate ATP', 'Stop breathing'], 0, 'Easy'),
      ex(4, 'Monotreme', 'Platypus egg-laying reflects:', ['Reptilian class instead of mammal', 'Monotreme mammal lineage retaining egg laying', 'Avian taxonomy', 'Fish gills in adult only'], 1, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 7 Quiz 1 — Animal plans',
        problems: [
          P('Sponges are sessile filter feeders lacking:', ['Cells', 'True tissues organized like higher phyla historically considered', 'DNA', 'Water environment'], 'B', ''),
          P('Cnidocytes help cnidarians:', ['Digest internally like fungi only', 'Capture prey with stinging threads', 'Photosynthesize', 'Fly'], 'B', ''),
          P('Flatworms acoelomate often show:', ['Segmented coelom', 'Central nervous concentration head region trend', 'Book lungs', 'Closed four-chamber hearts'], 'B', ''),
          P('Segmentation in annelids correlates with:', ['Hydraulic coelom and repeated organ units', 'Jointed exoskeleton without coelom always', 'Radial symmetry only', 'No organs'], 'A', ''),
          P('Echinoderms adult radial larval bilateral reflects:', ['Change of symmetry during development', 'No development', 'Purely radial embryos always', 'Single tissue only'], 'A', ''),
          P('Mollusca includes:', ['Snails and clams among diversity', 'Only insects', 'Only birds', 'Only mammals'], 'A', ''),
          P('Nematodes typically possess:', ['A body cavity often described as pseudocoelomate', 'No epidermis', 'Radial symmetry as adults', 'Photosynthetic skin'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 7 Quiz 2 — Arthropods',
        problems: [
          P('Hexapoda adult insects usually have:', ['Two pairs of wings always', 'Six legs', 'Eight legs', 'Two body segments only always'], 'B', ''),
          P('Crustaceans often show:', ['Two-part tagma variation and antenna specialization marine many', 'Zero segmentation', 'No exoskeleton', 'Feathers'], 'A', ''),
          P('Chelicerates such as spiders typically lack:', ['Pedipalps', 'Antennae', 'Venom in some groups', 'Four pairs of walking legs'], 'B', ''),
          P('Tracheal systems in insects deliver air:', ['Near cells without separate blood gas carrier in many small species', 'Only through gills in terrestrial adults', 'Through alveoli like mammals', 'Via photosynthesis'], 'A', ''),
          P('Molting hormone ecdysone triggers:', ['Exoskeleton shedding cascade', 'Bone elongation endochondral', 'Photosynthesis', 'Pregnancy'], 'A', ''),
          P('Myriapods include:', ['Centipedes and millipedes among many-legged taxa', 'Spiders only', 'Lobsters only', 'Barnacles only'], 'A', ''),
          P('Open circulation in large crustaceans may need:', ['More muscular pumps assisting hemolymph', 'No heart ever', 'Four human-like chambers always', 'Stomata'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 7 Quiz 3 — Skeleton',
        problems: [
          P('Cartilage template in development occurs in:', ['Many long bones before ossification', 'Teeth enamel mostly mineral hydroxyapatite not cartilage template same way', 'Adult articular surfaces retain cartilage cushioning', 'Bird lungs'], 'A', ''),
          P('Osteoblasts primarily deposit:', ['Organic bone matrix before mineralization', 'Chitin', 'Plant cellulose', 'Feather keratin'], 'A', ''),
          P('Compact vs spongy bone differs in:', ['Density and trabeculae vs dense cortical shafts typical', 'Identical properties', 'No minerals', 'Only plants have spongy'], 'A', ''),
          P('Joints with synovial fluid allow:', ['Smooth movement articulating bones', 'Fusion fully always', 'Photosynthesis', 'Feather growth'], 'A', ''),
          P('Vertebral column protects:', ['Spinal cord among functions', 'Lungs exclusively', 'Gills mainly', 'Seeds'], 'A', ''),
          P('Antlers regrow in deer using:', ['Cartilage transition bone annual shedding males among Cervidae patterns', 'Exoskeleton molt', 'Silica shells', 'Wood xylem'], 'A', ''),
          P('Tendons connect:', ['Muscle to bone', 'Bone to bone ligament confused—tendon muscle-bone', 'Muscle to muscle', 'Blood to leaf'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 7 Quiz 4 — Gas exchange',
        problems: [
          P('Gill lamellae increase:', ['Surface area for gas diffusion', 'Bone marrow space', 'Chloroplast area', 'Vacuole'], 'A', ''),
          P('Amphibian skin respiration supplements:', ['Lung respiration in some species aquatic adults', 'Photosynthesis', 'Nitrogen fixation', 'Feather growth'], 'A', ''),
          P('Mammalian alveoli thin walls suit:', ['Rapid diffusion of O₂ and CO₂', 'Thick secretions stopping gases', 'Filtering food only', 'Digesting starch'], 'A', ''),
          P('Boyle law in breathing mechanics changes:', ['Thoracic volume affecting lung pressure inhale exhale', 'Blood pH permanently to 1', 'Gills in humans', 'Stomata'], 'A', ''),
          P('Hemoglobin affinity shifts with:', ['pH Bohr effect among other factors', 'Moon phase primary factor', 'Leaf color only', 'Latitude only'], 'A', ''),
          P('CO₂ transport as bicarbonate occurs partly in:', ['Red blood cells carbonic anhydrase helps HCO₃⁻ transport', 'Vacuole sap', 'Xylem only upward', 'Stomatal guard only'], 'A', ''),
          P('Emphysema reduces:', ['Effective gas exchange surface in alveoli damage', 'Bone density unrelated', 'Plant transpiration', 'Fish countercurrent'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 7 Quiz 5 — Birds & mammals',
        problems: [
          P('Placental mammals nourish embryos mainly through:', ['The placenta linking maternal and fetal bloodstreams', 'Yolk sac like birds only', 'Gills in the uterus', 'Leaf photosynthesis'], 'A', ''),
          P('Monotremes differ from most mammals by:', ['Laying eggs yet feeding young with milk', 'Having feathers like birds', 'Lacking four-chamber hearts', 'Being fully ectothermic'], 'A', ''),
          P('Compared with placental mammals, marsupials often:', ['Complete less development in the uterus and nurse in a pouch', 'Have identical placenta duration to humans', 'Lack mammary glands', 'Lay shelled eggs'], 'A', ''),
          P('Feathers aid birds in:', ['Insulation and flight among functions', 'Gills underwater land birds', 'Bone marrow only', 'Exoskeleton like insects'], 'A', ''),
          P('Hair traps air for insulation in mammals:', ['Reducing conductive heat loss', 'Stopping respiration', 'Photosynthesis', 'Transpiration'], 'A', ''),
          P('Endothermy costs:', ['More fuel consumption to maintain temperature stable metabolic', 'Zero oxygen use', 'Cold body always', 'No heart rate change'], 'A', ''),
          P('The mammalian diaphragm primarily assists:', ['Changing thoracic volume during inhalation', 'Filtering digested food in the stomach', 'Photosynthesis in leaves', 'Feather molting'], 'A', ''),
        ],
      },
    ],
  },
];
