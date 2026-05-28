/**
 * Grade 11 Biology curriculum — Units 4–6 (Natural stream, MoE Ethiopia–style outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 4: Genetics',
    chapterDescription:
      'From Mendelian ratios to molecules: chromosomes, DNA, gene expression, and applications of genetic technology.',
    topics: [
      {
        topicName: 'Mendelian inheritance and probability',
        topicDescription: 'Monohybrid and dihybrid crosses; dominance; test crosses; pedigrees introductory.',
        topicObjectives: [
          'Predict genotypes and phenotypes for single-gene traits with complete dominance.',
          'Use Punnett squares and simple probability rules.',
        ],
      },
      {
        topicName: 'Beyond simple Mendelism',
        topicDescription: 'Incomplete dominance, codominance, multiple alleles, linkage, sex-linked traits — survey.',
        topicObjectives: [
          'Contrast autosomal and sex-linked inheritance patterns.',
          'Explain why recombination breaks linkage between loci.',
        ],
      },
      {
        topicName: 'Molecular basis of heredity',
        topicDescription: 'DNA structure, replication semiconservative overview; chromosomes and genes.',
        topicObjectives: [
          'Describe complementary base pairing.',
          'Relate gene locus to phenotype through proteins generally.',
        ],
      },
      {
        topicName: 'Gene expression and mutation',
        topicDescription: 'Central dogma; mutations as source of variation; regulation at introductory level.',
        topicObjectives: [
          'Differentiate silent, missense, and nonsense effects conceptually.',
          'State roles of RNA types in protein synthesis survey.',
        ],
      },
      {
        topicName: 'Genetic engineering and applications',
        topicDescription: 'Restriction, ligation, cloning, GMOs, gene therapy headlines; biosafety.',
        topicObjectives: [
          'Outline a basic recombinant DNA workflow at block-diagram level.',
          'Discuss ethical and safety trade-offs responsibly.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Mono', 'In Aa × Aa with complete dominance for A, dominant phenotype frequency is:', ['25%', '75%', '100%', '50% always homozygous false'], 1, 'Medium'),
      ex(0, 'Seg', 'Mendel’s segregation reflects:', ['Pulling apart of homologs in meiosis I among explanations', 'Mitosis only', 'Binary fission bacteria same as meiosis false', 'Photosynthesis'], 0, 'Medium'),
      ex(1, 'XO', 'Red–green color blindness is often:', ['Autosomal dominant', 'X-linked recessive in many pedigrees', 'Mitochondrial always false often maternal inheritance different diseases', 'Y-linked always for all traits false'], 1, 'Medium'),
      ex(1, 'Codom', 'AB blood type illustrates:', ['Codominance of IA and IB alleles', 'Incomplete dominance blending O', 'Polygenic only', 'Epistasis always'], 0, 'Easy'),
      ex(2, 'Pairing', 'In DNA, adenine pairs with:', ['Thymine', 'Guanine', 'Cytosine alone always false triplet reading wrong question base pair', 'Uracil'], 0, 'Easy'),
      ex(2, 'Semi', 'Semiconservative replication means each daughter duplex contains:', ['One parental strand and one new strand in textbook model', 'Two new strands always conservative wrong model', 'Random old new mixed dispersive wrong model historically', 'RNA primers only final'], 0, 'Medium'),
      ex(3, 'Silent', 'A silent mutation may not change phenotype because:', ['Redundancy of genetic code for some codon changes same amino acid often', 'It always stops translation nonsense false different', 'It duplicates entire chromosome false', 'It removes introns always false'], 0, 'Medium'),
      ex(3, 'Splice', 'Alternative splicing can:', ['Generate multiple mRNA isoforms from one gene among eukaryotic mechanisms', 'Synthesize DNA without polymerase false', 'Remove all exons always false', 'Occur in prokaryotes typically rare introns mostly absent'], 0, 'Hard'),
      ex(4, 'Plasmid', 'Bacterial plasmids are common vectors because they:', ['Replicate independently and accept inserted DNA in cloning workflows', 'Cannot carry genes false', 'Are always chromosomal', 'Destroy restriction enzymes'], 0, 'Medium'),
      ex(4, 'CRISPR', 'CRISPR–Cas9 edits genomes by:', ['Guide RNA directing cuts near complementary DNA regions overview', 'Random shearing without guidance false library prep different', 'Only bacteria never eukaryotes false used in euk labs cautiously', 'Preventing transcription always false'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — Mendelian probability',
        problems: [
          P('If both parents are heterozygous carriers Aa for a recessive disorder, probability child is aa is:', ['25% independent assortment gamete pairing Punnett', '0%', '100%', '75%'], 'A', ''),
          P('Independent assortment applies to genes on:', ['different chromosomes or far apart on same chromosome often recombination breaks linkage', 'always same centromere tightly linked loci exceptions unless recombination', 'mitochondrial DNA only', 'plastid DNA in animals false'], 'A', ''),
          P('Test cross unknown dominant phenotype with homozygous recessive helps determine:', ['whether unknown is homozygous dominant or heterozygous', 'blood type of plant', 'ocean depth', 'lung volume only'], 'A', ''),
          P('Rule of multiplication in probability chains refers to:', ['joint probability of independent events', 'adding exclusive outcomes wrong addition rule different', 'squaring population size', 'Mendel’s birthdate'], 'A', ''),
          P('A monohybrid cross tracks:', ['one gene with two alleles classic teaching', 'two genes always dihybrid different', 'three traits always false', 'entire genome'], 'A', ''),
          P('Law of segregation is explained by:', ['separation of homologous chromosomes in meiosis I for alleles on different homologs', 'random alignment at metaphase I contributes to gamete diversity assortment law different', 'DNA replication in G2 false for allele segregation story meiosis', 'photosynthetic splitting water false'], 'A', ''),
          P('Complete dominance means heterozygote phenotype:', ['matches dominant homozygote for that trait definition level', 'always intermediate false incomplete dominance different', 'matches recessive', 'is lethal always false'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Beyond Mendel',
        problems: [
          P('Incomplete dominance often yields:', ['intermediate heterozygote phenotype as in snapdragon color classic example', 'only parental phenotypes strictly false codominance also yields distinct', 'always lethal', 'no phenotype'], 'A', ''),
          P('Which blood-genotype pattern shows codominance for A and B alleles?', ['IAIB', 'IAIA', 'IBIB', 'ii'], 'A', ''),
          P('Epistasis can mask phenotypes because:', ['one gene’s product affects expression of another gene’s trait pathway relationships', 'genes never interact false', 'dominance disappears always false', 'meiosis stops'], 'A', ''),
          P('Sex-linked recessive traits appear more in XY individuals when:', ['a single recessive X allele can express without second X masking if no dominant allele on other X contexts for X-linked recessive', 'two X copies always mask always false for rare allele female can express if homozygous', 'autosomal dominant actually', 'mitochondrial inheritance'], 'A', ''),
          P('Linkage maps infer relative distances using:', ['recombination frequencies among other data', 'species geographical distribution only', 'stomata density', 'leaf mass only'], 'A', ''),
          P('Polygenic traits like human height show:', ['continuous variation with many loci and environment', 'only two discrete phenotypes always false', 'no heritability false', 'Mendelian 3:1 always'], 'A', ''),
          P('Gene pleiotropy means:', ['one allele affects multiple traits sometimes', 'many genes must code one peptide always false', 'only plants', 'only Y chromosome genes'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Molecular heredity',
        problems: [
          P('Antiparallel strands means 5′ to 3′ polarity:', ['runs opposite on complementary strands', 'runs same direction both strands false DNA chemistry wrong', 'means amino end on proteins confused context DNA term', 'only RNA property false DNA too'], 'A', ''),
          P('Telomerase involvement highlights:', ['end replication challenges and telomere maintenance in many eukaryotes complex cancer aging contexts intro', 'central dogma reverse without exception always false complexity', 'only bacteria', 'photosystem repair'], 'A', ''),
          P('Okazaki fragments arise on:', ['lagging strand during DNA replication discontinuous synthesis', 'leading strand continuous synthesis different', 'RNA genome cells only false', 'thylakoid'], 'A', ''),
          P('Histone acetylation often correlates with:', ['more accessible chromatin for transcription in many contexts', 'complete silencing always false sometimes opposite modifications interplay', 'DNA replication only never false', 'mitochondrial division'], 'A', ''),
          P('Crossing over in prophase I increases:', ['recombinant gamete diversity among homolog pairs', 'mitotic sister chromatid exchange different mechanism', 'ploidy instantly always false later', 'chromosome elimination'], 'A', ''),
          P('Centromere holds:', ['sister chromatids together until anaphase of appropriate division', 'homologs fused forever false they separate meiosis I', 'ribosomes only false', 'mRNA only'], 'A', ''),
          P('Nondisjunction can cause:', ['aneuploid gametes or zygotes like trisomy contexts', 'perfect segregation always false', 'increased crossing over necessarily false', 'loss of DNA entirely always false'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — Expression and mutation',
        problems: [
          P('Transcription produces:', ['RNA using DNA template generally in cells central dogma survey', 'Protein directly ribosome produces peptide', 'DNA duplicates always replicase different process', 'lipid membranes'], 'A', ''),
          P('mRNA splicing removes:', ['introns generally in eukaryote pre-mRNA', 'exons always false keep exons join', 'tRNA genes only false', 'promoters'], 'A', ''),
          P('Silent substitution may preserve amino acid because:', ['multiple codons specify same amino acid genetic code redundancy', 'ribosome ignores mutations always false', 'mutation not in DNA false', 'translation reads 2 bases only false'], 'A', ''),
          P('Nonsense mutation introduces:', ['premature stop codon often truncating protein', 'extra start always elongated false different', 'silent effect always false', 'duplicate chromosome'], 'A', ''),
          P('Frameshift from indels alters:', ['downstream reading frame catastrophically often', 'only introns usually false reading frame coding exon worst', 'nothing if in UTR depends context', 'only tRNA wobble positions wrongly confused'], 'A', ''),
          P('Operon concept in bacteria coordinates:', ['genes in polycistronic transcription under shared promoter lac classic', 'eukaryotic mosaic genes introns exons different', 'mitosis timing', 'photosynthetic Calvin cycle enzymes plant chloroplast not bacterial operon'], 'A', ''),
          P('miRNAs can regulate by:', ['interfering with mRNA stability or translation in RNA interference overview', 'creating DNA mutations directly always false', 'translating proteins alone', 'synthesizing glucose'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Genetic engineering',
        problems: [
          P('Sticky ends from staggered restriction cuts facilitate:', ['base-pairing ligation in cloning workflows', 'blunt ligation impossible false ligase can blunt too but sticky easier often', 'RNA-only genomes', 'random chromosome loss'], 'A', ''),
          P('Selectable markers on plasmids often:', ['confer antibiotic resistance to identify transformed bacteria overview lab safety concerns teaching', 'kill all cells always false', 'encode human insulin always false sometimes but not marker purpose only', 'prevent translation'], 'A', ''),
          P('cDNA libraries use reverse transcriptase starting from:', ['mRNA avoiding introns for expression constructs eukaryotic genes in bacteria contexts', 'genomic DNA exclusively intron heavy bacterial expression problems', 'tRNA primarily false', 'rRNA only false'], 'A', ''),
          P('GMO risk assessment may consider:', ['allergenicity gene flow biodiversity and nutrition among factors regulators weigh', 'zero science always false', 'only cost never safety false', 'ban research outright always false balanced'], 'A', ''),
          P('Gene drive ethics debates include:', ['ecological permanence difficulty of recall and consent across communities philosophical regulatory', 'whether mitosis exists false settled', 'denying inheritance false', 'replacing oxygen'], 'A', ''),
          P('RNA vaccines deliver:', ['instructions for antigen production transiently often liposomal or LNP contexts COVID era awareness', 'live replicating virus always classical attenuated vaccines different modality', 'permanent genome integration always false usually not integrating RNA vaccines', 'only plant viruses always false'], 'A', ''),
          P('Cas9 nickase variants can:', ['reduce off-target by requiring paired nicks in some designs overview advanced', 'increase random double strand breaks always false engineering intent often opposite', 'remove CRISPR need for gRNA false still need guide', 'edit lipids not DNA false'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 5: The human body systems',
    chapterDescription:
      'Integrated survey of coordination, defense, and transport maintaining homeostasis in humans.',
    topics: [
      {
        topicName: 'Homeostasis and physiological integration',
        topicDescription: 'Set points, negative feedback, role of nervous + endocrine cooperation.',
        topicObjectives: [
          'Give two examples of negative feedback loops in humans.',
          'Explain why failure of one system stresses others.',
        ],
      },
      {
        topicName: 'Nervous and sensory systems',
        topicDescription: 'CNS/PNS; reflexes; special senses survey; autonomic balance intro.',
        topicObjectives: [
          'Trace a stimulus–response pathway from receptor to effector.',
          'Contrast sympathetic and parasympathetic targets at survey level.',
        ],
      },
      {
        topicName: 'Endocrine coordination',
        topicDescription: 'Major glands; hormones; feedback axes—thyroid, adrenal, gonadal overview.',
        topicObjectives: [
          'Match hormone to primary target organ for selected examples.',
          'Explain why hormone balance requires trophic hierarchies in some axes.',
        ],
      },
      {
        topicName: 'Immune system',
        topicDescription: 'Barriers, innate cells, adaptive lymphocytes, memory, vaccination concept.',
        topicObjectives: [
          'Differentiate innate from adaptive responses and timing.',
          'Describe clonal selection at introductory level.',
        ],
      },
      {
        topicName: 'Circulatory and lymphatic integration',
        topicDescription: 'Heart–vessel–blood roles; lymph drainage; linking nutrient and immune delivery.',
        topicObjectives: [
          'Outline double circulation advantages.',
          'Relate capillary exchange to tissue needs.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Neg fb', 'Negative feedback tends to:', ['Reduce deviation from a set point', 'Amplify deviation always positive feedback different', 'Stop all hormones', 'Eliminate nerves'], 0, 'Easy'),
      ex(0, 'Fever', 'Fever set-point change involves:', ['Hypothalamic regulation among mechanisms', 'Renal glomerulus exclusively false', 'Plant auxin', 'Stomatal conductance only'], 0, 'Medium'),
      ex(1, 'Syn', 'Chemical synapses use:', ['Neurotransmitters', 'Only gap junction electrical always false electrical synapses exist different', 'Hormones only endocrine confusion bloodstream', 'Light only'], 0, 'Easy'),
      ex(1, 'ANS', 'Sympathetic activation often increases:', ['Heart rate among responses', 'Salivation always parasympathetic contrast generally', 'Digestive motility always false often decreases sympathetic stress', 'Pupil constriction miosis parasympathetic generally'], 0, 'Medium'),
      ex(2, 'TRH', 'TRH from hypothalamus targets:', ['Anterior pituitary to release TSH among axes', 'Thyroid directly always false mostly pituitary intermediary', 'Adrenal medulla false', 'Pancreas beta cells false'], 0, 'Medium'),
      ex(2, 'Cortisol', 'Cortisol from zona fasciculata helps:', ['Metabolic and stress responses broadly inflammatory modulation contexts', 'Aldosterone sodium identical same hormone false different zone product', 'PTH calcium primary parathyroid different', 'Oxytocin labor only'], 0, 'Medium'),
      ex(3, 'APC', 'Antigen presentation to T cells often involves:', ['MHC molecules on cell surfaces introductory', 'Only antibodies soluble never cell-bound false complex', 'Chlorophyll', 'Keratin in hair only'], 0, 'Hard'),
      ex(3, 'Clone', 'Clonal expansion means selected lymphocytes:', ['Proliferate after activation to mount effective response', 'Self-replicate without antigen always false danger autoimmunity context nuance', 'Die immediately always false some apoptosis later memory persists', 'Produce enamel'], 0, 'Medium'),
      ex(4, 'Heart', 'Systemic circuit carries oxygenated blood from left ventricle to:', ['Body then returns deoxygenated to right atrium big picture', 'Lungs false pulmonary circuit other path', 'same ventricle without change false circulation path matter', 'kidney only'], 0, 'Easy'),
      ex(4, 'Lymph', 'Lymphatic vessels return excess interstitial fluid to avoid:', ['Edema while also transporting immune cells survey', 'Breathing altogether false', 'DNA replication muscle false', 'bone growth'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Homeostasis',
        problems: [
          P('Set point refers to:', ['regulated internal target value in feedback models teaching', 'peak athletic speed always', 'latitude lines', 'atomic mass carbon'], 'A', ''),
          P('Positive feedback examples include:', ['childbirth oxytocin contractions in some stages not all feedback negative overall complex', 'thermoregulation daily narrow core temp range primarily negative feedback mostly', 'glucose around 90 mg/dL insulin glucagon negative mostly', 'blood pCO2 control respiratory centers negative'], 'A', ''),
          P('Acclimatization differs from adaptation because:', ['acclimatization reversible physiological shifts within lifetime adaptation evolutionary allele change across generations overview', 'identical terms', 'only plants acclimatize false', 'never measurable false'], 'A', ''),
          P('Allostasis emphasizes:', ['dynamic stability through change rather than rigid constancy framing stress literature', 'no regulation', 'only DNA methylation only false broader concept', 'static set point only'], 'A', ''),
          P('Failure of kidney excretion increases workload on:', ['lungs and buffer systems as pH and waste handling compensated partially though cannot fully replace kidney', 'plant roots false', 'hair growth primarily false', 'vitamin D skin synthesis only'], 'A', ''),
          P('Exercise integrates:', ['cardiovascular respiratory and metabolic systems among shifts', 'only one tissue', 'no neural input false motor control', 'hibernation in humans always false'], 'A', ''),
          P('Baroreceptors sense:', ['blood pressure related stretch signaling neural reflex arcs', 'light color only eyes different modality', 'oxygen in mitochondria direct false', 'glucose in brain interstitial fluid specific sensors exist but baroreceptor distinct'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — Nervous system',
        problems: [
          P('Resting membrane potential near -70 mV depends chiefly on:', ['K+ leak and Na+/K+ ATPase maintaining ion gradients among factors', 'chloroplast thylakoids', 'cell wall pectin', 'hemoglobin in neurons false'], 'A', ''),
          P('Saltatory conduction occurs because:', ['myelinated axons jump action potentials node to node speeding propagation', 'myelin eliminates action potentials false', 'dendrites myelinated typically not main site conduction axon', 'muscle spindles only'], 'A', ''),
          P('Upper motor neurons originate chiefly in:', ['cortex and brainstem motor centers overview gross neuroanatomy survey', 'dorsal root ganglia sensory pseudounipolar cell bodies there', 'sympathetic chain exclusively false', 'kidney pelvis false'], 'A', ''),
          P('Cerebrospinal fluid cushions within:', ['meningeal spaces ventricular system overview', 'bone marrow erythrocyte production confusion false', 'synaptic vesicles only', 'glomerular capsule false'], 'A', ''),
          P('Phototransduction in rods uses:', ['rhodopsin G-protein cascade membrane hyperpolarization specialization vertebrate retina survey', 'opsins in skin suntan melanopsin different contexts', 'chlorophyll', 'hemoglobin oxygen only'], 'A', ''),
          P('Basilar membrane tonotopy maps:', ['sound frequency along cochlear length place principle overview', 'color vision exclusively retina false different sense', 'blood glucose', 'muscle spindle length only'], 'A', ''),
          P('Neuromuscular junction uses acetylcholine to:', ['depolarize skeletal muscle motor end plate nicotinic receptors mainly', 'inhibit contraction always false timing cessation different mechanisms', 'digest proteins in blood false', 'calcify bone directly false'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Endocrine',
        problems: [
          P('Peptide hormones often bind receptors on membrane to trigger:', ['second messenger cascades cannot cross membrane freely large hydrophilic', 'nuclear receptors always steroid pattern commonly different modality', 'direct DNA replication', 'rubisco activity'], 'A', ''),
          P('Steroid hormones often affect transcription because they:', ['can diffuse membrane and bind intracellular receptors in many cases', 'cannot enter cells false generalization', 'always act in seconds only peptide and catecholamine fast sometimes steroids slower', 'only thyroid hormone actually thyroid amino-derivative not classic steroid but analogy nuance skip'], 'A', ''),
          P('Growth hormone from anterior pituitary acts broadly via:', ['IGF-1 induction among mechanisms growth plates long bones contexts', 'directly calcifying cartilage without cells false', 'insulin antagonism always only partial story nuanced', 'TSH secretion false different hormone'], 'A', ''),
          P('Diabetes mellitus type I involves:', ['autoimmune beta cell destruction insulin deficiency classic teaching', 'insulin resistance primarily type II false distinction simplified exam level', 'excess glucagon only', 'overactive thyroid universally false'], 'A', ''),
          P('Oxytocin differs from ADH though both neurohypophyseal:', ['different target tissues and receptor biology uterus mammary versus kidney collecting duct contexts', 'identical roles always false', 'synthesized in posterior pituitary false made hypothalamus released posterior', 'only act on bones false'], 'A', ''),
          P('Calcitonin from thyroid C cells lowers blood Ca partly by:', ['inhibiting osteoclast-mediated bone resorption among actions survey versus PTH opposition', 'raising PTH always false opposite', 'activating vitamin D kidney primarily different organ hormone', 'absorbing dietary silicon false'], 'A', ''),
          P('HPA axis stress response involves:', ['CRH–ACTH–cortisol cascade among sequential releases overview', 'TRH–TSH–T4 thyroid axis different', 'renin–angiotensin–aldosterone axis related stress volume intersect but distinct primary HPA definition', 'only pancreas'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — Immunity',
        problems: [
          P('Physical barriers include:', ['skin and mucous membranes lining tracts', 'lymph nodes primarily secondary lymphoid not barrier surface', 'antibodies in serum memory humoral not first barrier', 'thymic selection'], 'A', ''),
          P('Phagocytes like neutrophils exemplify:', ['innate rapid response', 'long-lived memory cells primarily lymphocytes adaptive', 'antibody secretion plasma cells adaptive', 'negative selection central tolerance thymocyte'], 'A', ''),
          P('MHC class I presents primarily to:', ['CD8+ T cells endogenous pathway classical teaching', 'CD4+ T cells class II usually exogenous professional APCs more nuanced cross-presentation advanced skip', 'B cells without T help always false T dependent antigens many', 'mast cells only'], 'A', ''),
          P('Affinity maturation occurs in:', ['germinal centers with somatic hypermutation B cells introductory', 'bone marrow only initial VDJ not affinity maturation same niche distinction', 'thymus negative selection different process', 'skin epidermis false'], 'A', ''),
          P('Immune tolerance failure can produce:', ['autoimmunity in some diseases', 'perfect self nonself discrimination always false breaks', 'extra bones in adults routinely false', 'Photosynthetic immunity false'], 'A', ''),
          P('Passive immunity from maternal IgG crosses placenta giving:', ['temporary neonatal protection wanes as infant synthesizes own immunoglobulins', 'permanent protection always false', 'T cell memory transferred routinely false cells mostly not crossing like IgG antibody example', 'allergy cure'], 'A', ''),
          P('Vaccination aims to:', ['prime adaptive memory without causing full disease using varied platform strategies', 'replace innate immunity entirely false', 'remove thymus', 'stop inflammation always false local inflammation often part response'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Circulation',
        problems: [
          P('Stroke volume times heart rate equals:', ['cardiac output', 'peripheral resistance', 'mean arterial pressure directly only one factor MAP CO times SVR interaction false simplification', 'glomerular filtration rate'], 'A', ''),
          P('Capillary fluid shift balances:', ['hydrostatic and oncotic pressures Starling forces survey', 'photosynthesis and respiration plant context wrong organ', 'DNA replication timing', 'nerve conduction velocity only'], 'A', ''),
          P('Red blood cells lack nuclei in mammals allowing:', ['more hemoglobin packing tradeoff no repair divisions contexts', 'infinite lifespan false ~120 days spleen clearance', 'antibody production false plasma cells', 'phagocytosis primarily neutrophils'], 'A', ''),
          P('Iron deficiency anemia reduces:', ['oxygen carrying capacity primarily hemoglobin synthesis limitation among causes', 'ventilation rate necessarily always false compensation attempts vary', 'DNA content per cell false', 'nerve myelination primarily false B12 different'], 'A', ''),
          P('Lymph nodes filter:', ['lymph for antigens and house lymphocyte activation secondary lymphoid tissue overview', 'blood directly from ventricles arterial false high pressure different', 'cerebrospinal fluid primarily different circulation', 'bile from liver false'], 'A', ''),
          P('Platelets aggregate during hemostasis via:', ['von Willebrand factor collagen binding activation cascade introductory', 'photosynthesis', 'rubisco carboxylation', 'tubulin assembly mitosis only'], 'A', ''),
          P('Frank–Starling mechanism links stretch of cardiac muscle to:', ['stronger contraction with greater end-diastolic volume within physiological range', 'always weaker beat false pathological dilation failure later different story', 'insulin secretion pancreas different organ', 'glomerular filtration primarily different system'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 6: Population and natural resources',
    chapterDescription:
      'Human population trends, resource use, and sustainable stewardship linked to Ethiopian ecosystems and development.',
    topics: [
      {
        topicName: 'Population characteristics and growth',
        topicDescription: 'Birth, death, migration, age structure, TFR, population momentum.',
        topicObjectives: [
          'Read a simple age pyramid and infer growth momentum.',
          'Contrast exponential vs logistic growth frameworks.',
        ],
      },
      {
        topicName: 'Human population and development',
        topicDescription: 'Demographic transition overview; urbanization; health and education linkages.',
        topicObjectives: [
          'Name at least two drivers of fertility decline in demographic transition stories.',
          'Discuss youth bulge opportunities and service needs.',
        ],
      },
      {
        topicName: 'Natural resources and sustainable use',
        topicDescription: 'Soil, water, forests, fisheries; renewable vs nonrenewable framing with Ethiopia examples.',
        topicObjectives: [
          'Explain soil erosion and watershed protection at community scale survey.',
          'Connect fuelwood demand to deforestation pressures.',
        ],
      },
      {
        topicName: 'Biodiversity and conservation',
        topicDescription: 'Genetic, species, ecosystem diversity; hotspots; protected areas; corridors.',
        topicObjectives: [
          'Link in-situ vs ex-situ conservation examples.',
          'State value of biodiversity (services, resilience, culture).',
        ],
      },
      {
        topicName: 'Environmental challenges and responsible action',
        topicDescription: 'Climate variability, land degradation, pollution; policies, local participation.',
        topicObjectives: [
          'Identify one mitigation and one adaptation example relevant to Ethiopia.',
          'Propose evidence-based community actions reducing resource waste.',
        ],
      },
    ],
    exercises: [
      ex(0, 'TFR', 'Total fertility rate measures:', ['Average children per woman over lifetime in demographic models', 'Births per year only crude rate different metric', 'Death rate', 'Net migration only'], 0, 'Medium'),
      ex(0, 'Log', 'Carrying capacity K in logistic models is:', ['Environment-limited sustainable population upper bound teaching simplification', 'Always identical worldwide false', 'Zero', 'Infinite always'], 0, 'Easy'),
      ex(1, 'Urban', 'Urbanization can increase demand for:', ['Infrastructure services water sanitation transport among pressures', 'Perimeter subsistence farming intensity only rural false context shifts', 'Ocean iron', 'Moon minerals'], 0, 'Easy'),
      ex(1, 'Demo', 'Lower child death rates via public health can:', ['Contribute to fertility decline as preferences shift in transition narratives not guaranteed instant everywhere', 'Always increase fertility always false often opposite lag complex', 'Remove education entirely false', 'Eliminate migration false'], 0, 'Hard'),
      ex(2, 'Soil', 'Terracing reduces:', ['Slope erosion velocity water energy dissipation terraces', 'Rainfall amount false', 'Gravity constant false', 'Crop DNA diversity necessarily false'], 0, 'Medium'),
      ex(2, 'Water', 'Watershed forests help:', ['Regulate runoff and recharge groundwater services among hydrology overview', 'Eliminate all rivers false', 'Desalinate ocean bulk locally false', 'Create petroleum'], 0, 'Medium'),
      ex(3, 'Red list', 'IUCN Red List communicates:', ['Extinction risk categories for assessed species science communication tool', 'Stock market tickers', 'Hospital codes', 'Exam scores only'], 0, 'Easy'),
      ex(3, 'Seed bank', 'Seed banks exemplify:', ['Ex situ conservation of genetic diversity security backup', 'In situ protected area exclusively false opposite category', 'Fossil fuel storage false', 'Aquaculture exclusive false'], 0, 'Medium'),
      ex(4, 'Climate', 'Ethiopian highlands agriculture faces climate challenges including:', ['Rainfall variability and soil erosion linked interactions context dependent', 'Permanent tropical rainforest canopy nationwide false agroecology varied', 'no seasons false', 'constant sea level flooding highlands false elevation'], 0, 'Medium'),
      ex(4, 'SLM', 'Sustainable land management may combine:', ['Agroforestry soil bunds and community bylaws among packages tailored site', 'only herbicides forever false IPM integrated', 'removing all trees always false often opposite', 'ignoring women’s knowledge in planning ethically bad participation matters'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 6 Quiz 1 — Population growth',
        problems: [
          P('Net population change rate per capita simplified equals:', ['birth rate minus death rate ignoring migration term for closed model', 'birth plus death always false', 'zero always', 'migration always dominant false depends'], 'A', ''),
          P('Doubling time under exponential approximates:', ['70 divided by r percent rule of thumb 69.3 exact ln2', 'K divided by r confusion false', 'always 10 years', 'square root of population'], 'A', ''),
          P('Youth-heavy pyramids suggest:', ['future momentum even if fertility drops many young enter reproductive years', 'immediate collapse always false context', 'post-industrial low fertility always false could be high fertility youth bulge', 'no schools needed false opposite often strain education'], 'A', ''),
          P('Emigration reduces:', ['source country population unless balanced by births deaths context', 'destination country always false receiving increases unless offset leavers', 'global population usually small effect local major', 'gravity'], 'A', ''),
          P('Population density is:', ['individuals per area', 'births per woman TFR different metric', 'age in years', 'carrying capacity always false different concept'], 'A', ''),
          P('Survivorship curves type I reflect:', ['low juvenile mortality many die old humans elephants examples', 'mass seedling death plants type III different', 'constant chance all ages type II different lizards some species approx', 'zero deaths unrealistic'], 'A', ''),
          P('r selection emphasizes:', ['high fecundity early reproduction in unpredictable environments teaching stereotype', 'few offspring heavy parental care K selection stereotype opposite ends continuum', 'large body size always', 'infinite lifespan'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 6 Quiz 2 — Human development',
        problems: [
          P('Female education correlates with:', ['lower fertility in many longitudinal associations contexts not sole cause always', 'higher fertility always false many studies opposite association', 'random noise always false strong social science signal careful causal language', 'zero employment false often increases opportunities'], 'A', ''),
          P('Urban informal settlements may lack:', ['formal sanitation increasing disease burden unless services improve upgrading programs', 'culture always false rich culture exists', 'oxygen false', 'children false families live there'], 'A', ''),
          P('Demographic dividend emerges when:', ['working-age share grows relative to dependents if jobs and skills match macroeconomic conditions not automatic', 'everyone is elderly always aged dependency high instead', 'no health care improvements false needed to realize dividend partly', 'birth rate infinite'], 'A', ''),
          P('Life expectancy integrates:', ['mortality improvements across ages caveat infant mortality huge leverage statistic interpretation', 'only weather', 'GDP exclusively economics correlates but not same as LE', 'crop yield one season only'], 'A', ''),
          P('Brain drain emigration of health professionals stresses:', ['source country service delivery ethical recruitment policies debated', 'destination patients negatively always false they gain skills careful balance', 'ocean salinity', 'tectonic plates'], 'A', ''),
          P('MDGs SDGs frameworks connect:', ['development targets including health poverty environment multi-indicator tracking not biology trivia', 'only military spending false', 'music charts false', 'Mendelian ratios only'], 'A', ''),
          P('Gini coefficient measures:', ['income or wealth inequality among households not biology per se but social determinant of health link survey', 'species richness false ecology different gini term confusion', 'blood pH', 'enzyme Vmax'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 6 Quiz 3 — Resources',
        problems: [
          P('Groundwater overdraft can cause:', ['well failure land subsidence and stream interception problems context hydrogeology', 'more rainfall underground instantly false complex climate decoupled somewhat', 'infinite aquifers false recharge limits', 'eliminate salt in ocean false'], 'A', ''),
          P('Deforestation on slopes worsens:', ['erosion sediment loading rivers reservoirs siltation reservoir capacity loss fisheries heat stress muddy water contexts', 'photosynthesis globally to zero false Amazon not Ethiopia local story though telecoupling exists systemic', 'earthquake frequency false', 'lunar eclipse'], 'A', ''),
          P('Sustainable yield in fisheries sets harvest near:', ['replacement recruitment long term MSY models contentious modern ecosystem based fisheries science evolution teaching simplified', 'maximum instantaneous catch always collapse risk historically', 'zero catch always false conservation not absence necessarily', 'random guess'], 'A', ''),
          P('Integrated water resources management coordinates:', ['agriculture industry household ecosystem needs participatory governance ideals', 'only dam engineers top down always false participatory emphasis', 'single metric gallons only false multidimensional quality quantity timing', 'ignoring downstream nations transboundary ethics complex Nile example regionally relevant Ethiopia discussion geography awareness without politics exam depth'], 'A', ''),
          P('Soil organic matter benefits include:', ['water retention aggregation microbial habitat nutrient cycling', 'instant toxic metals always false unless contaminated context', 'eliminates need for minerals false plants need mineral nutrients still', 'increases albedo only ambiguous'], 'A', ''),
          P('Payment for ecosystem services can:', ['align incentives to conserve upstream forests hydrology services contexts schemes exist critiques too fairness monitoring', 'always solve corruption automatically false governance issues', 'replace laws entirely false', 'pay people to degrade land false scheme design matters'], 'A', ''),
          P('Nonrenewable minerals deplete unless:', ['recycled substituted or used far more efficiently circular economy framing', 'plants regrow them false geological timescales million years', 'ignored economically until infinite technology faith argument debated', 'population stops measuring false'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 6 Quiz 4 — Biodiversity',
        problems: [
          P('Ecosystem services include:', ['pollination water purification climate regulation cultural values among Millennium Ecosystem Assessment categories teaching', 'stock prices directly false unless metaphorically', 'only tangible products timber fish missing regulating supporting services false narrow definition wrong', 'nothing of value to humans false anthropocentric ethical debate intrinsic value also philosophical'], 'A', ''),
          P('Endemism means species restricted to:', ['localized geographic region vulnerable if habitat loss Ethiopian highlands examples awareness', 'every continent always cosmopolitan opposite', 'laboratories only false though some extinct in wild examples', 'upper atmosphere false'], 'A', ''),
          P('Ex situ conservation examples include:', ['zoos seed banks captive breeding programs', 'national parks in situ opposite primarily', 'ocean currents', 'markets exclusively false though sustainable trade tools conventions CITES exam hint illegal wildlife trade harms'], 'A', ''),
          P('Edge effects in fragmented forests can:', ['alter microclimate and species composition increasing some generalists decreasing interior specialists', 'always increase diversity unambiguously false often decreases core species', 'have zero effect false', 'eliminate seasons'], 'A', ''),
          P('Bioprospecting refers to:', ['searching for useful biochemicals from biodiversity with benefit sharing debates Nagoya protocol awareness intro', 'random logging only destructive false unsustainable harvesting bad distinct', 'photographing only false', 'mining asteroids'], 'A', ''),
          P('Alpha vs beta diversity distinction:', ['alpha local richness beta turnover between sites introductory partitioning not exam heavy detail', 'same term false', 'temperature and pH only false chemistry confusion joke', 'gene versus species always false allelic alpha sometimes different concept'], 'A', ''),
          P('Rewilding proposals debate:', ['tradeoffs with human livelihoods apex predator trophic cascades feasibility not only science but governance trust', 'instant worldwide wolf introduction universally false context dependent', 'no ecological theory false', 'only aesthetic concerns false also risk services'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 6 Quiz 5 — Action',
        problems: [
          P('Adaptation to climate change can include:', ['drought-tolerant crop varieties improved early warning irrigation efficiency community water harvesting contexts Ethiopian adaptation plans highlight many options', 'denying temperature measurements false contrarian not adaptation', 'stopping all emissions personally insufficient alone systemic issue yet mitigation overlaps false question adaptation distinct coping already committed warming', 'moving to Mars mass false joke'], 'A', ''),
          P('Mitigation reduces:', ['GHG sources or enhances sinks relative to baseline trajectory emissions pathways IPCC framing intro', 'sunspots', 'biodiversity always false often aims conserve carbon stocks overlap', 'education budgets false green economy sometimes invests education'], 'A', ''),
          P('Community nurseries for native plants support:', ['restoration ecology employment soil stabilization reforestation with right species not monoculture invasives caution', 'only exotic ornamentals sometimes harmful invasives false caution', 'asphalt production false', 'hydrochloric acid synthesis industrial scale false'], 'A', ''),
          P('Citizen science can improve monitoring by:', ['scaling observations with quality protocols verified subsets iNaturalist examples', 'replacing peer review entirely false quality control issues remain', 'eliminating statistics false', 'reading only blogs'], 'A', ''),
          P('Polluter pays principle implies:', ['cost internalization to reduce externalities regulatory economics', 'free dumping always false opposite', 'government pays always false debate fairness sometimes subsidies transitions', 'only local taxes false global commons tricky'], 'A', ''),
          P('Environmental justice concerns include:', ['disparate exposure to hazards by race class globally documented pollution burdens often marginalized communities introductory ethics bridge exam relevant', 'equal exposure always empirically false often injustice documented', 'science denial required false contrary uses science to show disparities', 'only aesthetics'], 'A', ''),
          P('Leaving dead wood in some forests can:', ['support detritivores cavity nesters nutrient cycling heterogeneity habitat complexity silviculture some timber intensification removes excessively harming biodiversity forest management tradeoffs exam nuance', 'always increase wildfire risk false context thinning prescribed burns complexity', 'eliminate tourism false often enhances wildlife watching sometimes', 'prevent carbon storage false dead wood still carbon though decomposition releases CO2 net dynamics complex lifecycle analysis not exam'], 'A', ''),
        ],
      },
    ],
  },
];
