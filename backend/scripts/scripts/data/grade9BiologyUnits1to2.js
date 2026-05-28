/**
 * Grade 9 Biology curriculum — Units 1–2 (Natural stream).
 * Five topics per unit; curated exercises by topicIndex; one quiz per topic (7 MCQs each).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Introduction to biology and scientific inquiry',
    chapterDescription:
      'Scope of biology, scientific method, observation and measurement, characteristics of life, and levels of organization.',
    topics: [
      {
        topicName: 'Nature and scope of biology',
        topicDescription: 'What biologists study; branches of biology and careers linked to health and environment.',
        topicObjectives: [
          'Outline major areas of biological science and why they matter.',
          'Give examples of questions biology helps answer in everyday life.',
        ],
      },
      {
        topicName: 'Scientific methods and investigations',
        topicDescription: 'Questions, hypotheses, fair tests, controls, repetition, and evidence-based reasoning.',
        topicObjectives: [
          'Identify independent, dependent, and control variables in a simple experiment.',
          'Explain why replication and clear procedures strengthen conclusions.',
        ],
      },
      {
        topicName: 'Microscopy and biological observation',
        topicDescription: 'Light microscope use, magnification and resolution, preparing simple specimens.',
        topicObjectives: [
          'Relate eyepiece and objective magnification to total magnification.',
          'Describe safe, careful focusing to protect slides and objectives.',
        ],
      },
      {
        topicName: 'Characteristics of living organisms',
        topicDescription: 'Nutrition, respiration, excretion, growth, reproduction, movement, sensitivity, adaptation.',
        topicObjectives: [
          'List hallmarks used to distinguish living organisms from non-living matter.',
          'Connect homeostasis and response to stimuli with survival.',
        ],
      },
      {
        topicName: 'Levels of biological organization',
        topicDescription: 'From organelles to cells, tissues, organs, systems, organism, population, community, ecosystem.',
        topicObjectives: [
          'Order hierarchical levels from smallest to largest relevant set.',
          'Give one example linking two adjacent levels in a named organism.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Scope', 'Which best states what biology primarily studies?', ['Rocks and minerals', 'Life and living things', 'Stellar evolution only', 'Engine design'], 1, 'Easy'),
      ex(0, 'Branches', 'Which is a sub-discipline of biology?', ['Plate tectonics', 'Genetics', 'Quantum chromodynamics', 'Petroleum refining'], 1, 'Easy'),
      ex(1, 'Hypothesis', 'A testable prediction in an experiment is called a:', ['Theory only', 'Hypothesis', 'Law of nature finalized', 'Random opinion'], 1, 'Easy'),
      ex(1, 'Variable', 'The variable a student deliberately changes is the:', ['Dependent variable', 'Independent variable', 'Control only', 'Conclusion'], 1, 'Medium'),
      ex(2, 'Magnification', 'If eyepiece is 10× and objective is 40×, total magnification is:', ['400×', '4×', '50×', '4000×'], 0, 'Easy'),
      ex(2, 'Resolution', 'Resolution in microscopy refers mainly to:', ['Lamp brightness', 'Ability to tell nearby details apart', 'Slide thickness only', 'Color of stain'], 1, 'Medium'),
      ex(3, 'Life', 'Which is a widely cited feature of living systems?', ['Permanent random motion without chemistry', 'Growth and reproduction', 'Zero energy use', 'Lack of organization'], 1, 'Easy'),
      ex(3, 'Homeostasis', 'Maintaining stable internal conditions is called:', ['Evaporation', 'Homeostasis', 'Sublimation', 'Deposition'], 1, 'Easy'),
      ex(4, 'Heart example', 'A heart is best described as:', ['A cell', 'An organ', 'A tissue', 'An ecosystem'], 1, 'Easy'),
      ex(4, 'Levels', 'Several interacting populations form a:', ['Cell', 'Tissue', 'Community', 'Organelle'], 2, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Scope of biology',
        problems: [
          P('Biology contributes knowledge to fields such as:', ['Only astronomy', 'Medicine, agriculture, and conservation', 'Only chemistry of metals', 'Geological plate motion only'], 'B', ''),
          P('Which question is most biological?', ['Composition of the Earth’s inner core', 'How antibiotic resistance spreads in bacteria', 'Orbital period of Neptune', 'Density of gasoline'], 'B', ''),
          P('Applied biology in farming relies on understanding:', ['Only planetary orbit', 'Genetics, pests, and soil life', 'Black hole formation', 'Volcano lighting'], 'B', ''),
          P('Why study microscopic organisms?', ['They are irrelevant to health', 'They include pathogens and ecosystem players', 'They are invisible so pointless', 'They lack DNA'], 'B', ''),
          P('Marine biology emphasizes organisms:', ['Only in deserts', 'In ocean habitats', 'Only underground', 'Only cities'], 'B', ''),
          P('Ethical biology includes concerns about:', ['Speed of light in vacuum only', 'Consent in research on organisms', 'Metal conductivity only', 'Moon phases only'], 'B', ''),
          P('Biotechnology can involve:', ['Using living cells or products to make materials or therapies', 'Only melting glass', 'Only bridge engineering unrelated to life', 'Studying dead universes only'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — Scientific method',
        problems: [
          P('A useful hypothesis must be:', ['Proven already', 'Falsifiable by evidence', 'Purely aesthetic', 'Unrelated to measurements'], 'B', ''),
          P('Controls in an experiment help:', ['Remove the need for data', 'Compare treated vs baseline conditions', 'Always prove a guess right', 'Avoid lab notebooks'], 'B', ''),
          P('Random error is reduced by:', ['Single unmeasured trial', 'Replication', 'Ignoring outliers regardless', 'Guessing'], 'B', ''),
          P('The dependent variable is:', ['What the investigator measures as outcome', 'What must stay unchanged only', 'Equipment brand', 'Lab coat color'], 'A', ''),
          P('Blinding procedures in human studies can reduce:', ['Gravity', 'Bias in interpretation', 'Number of atoms', 'Moon tides'], 'B', ''),
          P('Models in biology:', ['Are useless', 'Simplify systems to predict or explain', 'Replace reality entirely without testing', 'Exclude mathematics'], 'B', ''),
          P('Peer review of research aims to:', ['Hide mistakes', 'Check reasoning and evidence before wider acceptance', 'Speed without scrutiny', 'Ban new ideas'], 'B', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — Microscopy',
        problems: [
          P('Working distance decreases when you:', ['Use lower magnification', 'Move to higher magnification objectives', 'Turn off light only', 'Use coarse focus away from slide'], 'B', ''),
          P('Immersion oil is sometimes used to:', ['Increase effective numerical aperture on some systems', 'Wash stains only', 'Freeze specimens', 'Replace coverslips'], 'A', ''),
          P('Start with low power mainly to:', ['Locate the field quickly and avoid collisions', 'Maximize resolution before locating', 'Destroy slide faster', 'Avoid using diaphragm'], 'A', ''),
          P('Stains such as iodine may help:', ['Increase contrast of thin specimens', 'Eliminate all water', 'Break microscope lens', 'Remove DNA'], 'A', ''),
          P('Field of view on higher power is typically:', ['Larger than low power', 'Smaller than low power', 'Infinite', 'Always identical'], 'B', ''),
          P('Resolution is limited by:', ['Wavelength of imaging radiation and optics', 'Student’s shoe size', 'Room wallpaper', 'Notebook margins'], 'A', ''),
          P('Care after use includes:', ['Rotating to low power and cleaning lenses properly', 'Leaving high-dry objective near slide', 'Oiling 4× objective routinely', 'Scratching lens to remove dust'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — Characteristics of life',
        problems: [
          P('Growth in multicellular organisms often involves:', ['Only increase in water without cell division', 'Cell division and specialization', 'Loss of DNA', 'Permanent mitosis everywhere'], 'B', ''),
          P('Sensitivity means:', ['Ignoring all stimuli', 'Detecting and responding to stimuli', 'Only hearing sound in animals', 'Random heat only'], 'B', ''),
          P('Metabolism broadly includes:', ['Anabolism and catabolism', 'Only photosynthesis', 'Watching TV', 'Rock erosion'], 'A', ''),
          P('Adaptation over generations connects to:', ['Lamarck’s lifting weights meme only', 'Variation, inheritance, and environmental filtering', 'Instant plastic change in one life always', 'No genetics'], 'B', ''),
          P('Viruses outside hosts are often considered non-living partly because they:', ['Have DNA', 'Lack independent metabolism and reproduction', 'Are too large', 'Have ribosomes'], 'B', ''),
          P('Excretion removes:', ['Harmful metabolic by-products', 'All water always fatally', 'Only oxygen', 'Nothing from animals'], 'A', ''),
          P('Reproduction at population level:', ['Ignores genes', 'Perpetuates species across generations', 'Stops evolution', 'Requires photosynthesis'], 'B', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — Levels of organization',
        problems: [
          P('A group of similar cells is a:', ['Organ', 'Tissue', 'System', 'Population'], 'B', ''),
          P('Several organs cooperating form:', ['A molecule', 'A system', 'A tissue', 'An atom'], 'B', ''),
          P('All organisms of one species in an area are a:', ['Biome only', 'Population', 'Organ', 'Atom'], 'B', ''),
          P('Communities differ from ecosystems because ecosystems also emphasize:', ['Only genes', 'Abiotic components interacting with communities', 'Only mitochondria', 'Only cytoplasm'], 'B', ''),
          P('The biosphere includes:', ['Only oceans', 'All regions of Earth where life exists', 'Only one mine', 'Only plants'], 'B', ''),
          P('Emergent properties appear when:', ['Combining parts yields new system-level behaviors', 'Atoms disappear', 'Math stops working', 'Cells lack membranes'], 'A', ''),
          P('Which is smallest?', ['Cell', 'Mitochondrion', 'Tissue', 'Organ system'], 'B', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Cell structure and function',
    chapterDescription:
      'Cell theory, comparison of cell types, membrane and organelle roles, nucleus and gene expression overview.',
    topics: [
      {
        topicName: 'Cell theory and major cell types',
        topicDescription: 'Unity and diversity of cells; prokaryotes vs eukaryotes; scale and microscopy.',
        topicObjectives: [
          'State cell theory and relate it to modern genetics.',
          'Contrast prokaryotic and typical eukaryotic organization.',
        ],
      },
      {
        topicName: 'Plant and animal cell comparison',
        topicDescription: 'Wall, chloroplasts, vacuole vs centrioles and flexible shape in many animal cells.',
        topicObjectives: [
          'List structures commonly present in plant cells but not animal cells.',
          'Explain how form relates to function for two contrasting structures.',
        ],
      },
      {
        topicName: 'Plasma membrane and membrane transport',
        topicDescription: 'Fluid mosaic model; passive vs active processes at introductory level.',
        topicObjectives: [
          'Describe selective permeability using lipid and protein components.',
          'Distinguish diffusion, facilitated diffusion, and active transport conceptually.',
        ],
      },
      {
        topicName: 'Cytoplasm, cytoskeleton, and organelles',
        topicDescription: 'Endomembrane system, mitochondria, plastids in plants, lysosomes, vacuoles.',
        topicObjectives: [
          'Match organelles to major functions in a eukaryotic cell.',
          'Trace a secretory protein from ribosome through ER and Golgi.',
        ],
      },
      {
        topicName: 'Nucleus and flow of genetic information',
        topicDescription: 'Chromatin, nucleolus, transcription vs translation overview.',
        topicObjectives: [
          'Explain the roles of nucleus and ribosomes in protein synthesis overview.',
          'Differentiate DNA, mRNA, and protein location in a typical cell.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Theory', 'The cell theory includes that new cells come from:', ['Spontaneous generation', 'Pre-existing cells', 'Only plant seeds', 'Viruses alone'], 1, 'Easy'),
      ex(0, 'Types', 'Which group lacks a membrane-bound nucleus?', ['Protists', 'Bacteria', 'Fungi', 'Plants'], 1, 'Easy'),
      ex(1, 'Plants', 'Which organelle carries out photosynthesis in plant cells?', ['Mitochondrion', 'Chloroplast', 'Lysosome', 'Centriole'], 1, 'Easy'),
      ex(1, 'Vacuole', 'A large central vacuole is most typical in:', ['Mature plant cells', 'Mature human erythrocytes', 'Bacterial cells', 'Viruses'], 0, 'Medium'),
      ex(2, 'Selective', 'The cell membrane allows some substances through more readily than others; this is:', ['Impermeability', 'Selective permeability', 'Osmosis only', 'Binary fission'], 1, 'Easy'),
      ex(2, 'Proteins', 'Integral membrane proteins can act as:', ['Starch storage', 'Channels or carriers', 'Ribosomal RNA genes', 'Thylakoid stacks'], 1, 'Medium'),
      ex(3, 'Powerhouse', 'ATP from nutrient oxidation in eukaryotes depends heavily on:', ['Chloroplast grana only', 'Mitochondria', 'Cell walls', 'Tonoplast of bacteria'], 1, 'Easy'),
      ex(3, 'Shipping', 'Proteins destined for secretion are processed notably in:', ['Mitochondrial matrix only', 'ER and Golgi', 'Ribosome only without movement', 'Vacuole of prokaryotes'], 1, 'Medium'),
      ex(4, 'DNA location', 'Nuclear DNA is transcribed to RNA which later reaches:', ['Only vacuole', 'Cytoplasm for translation on ribosomes', 'Mitochondria only always', 'Cell wall'], 1, 'Easy'),
      ex(4, 'Nucleolus', 'The nucleolus is most associated with:', ['Photosystem II', 'Ribosome subunit assembly', 'Glycolysis', 'Cellulose synthesis'], 1, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Cell theory',
        problems: [
          P('According to cell theory, the basic unit of life is the:', ['Tissue', 'Cell', 'Organ system', 'Ecosystem'], 'B', ''),
          P('All living cells today are thought to share common ancestry because:', ['DNA replication is unrelated', 'Universal genetic code and conserved machinery are widely shared', 'Cells lack cytoplasm', 'Viruses disprove genetics'], 'B', ''),
          P('Which pair is generally correct about cell size?', ['Typical prokaryotic cells are often smaller than many eukaryotic cells', 'Viruses are larger than bacteria', 'Human liver cells are smaller than typical bacteria', 'Plant cells lack vacuoles'], 'A', ''),
          P('Prokaryotes have cytoplasm and DNA but lack:', ['Ribosomes', 'Membrane-bound nucleus', 'Plasma membrane', 'Genes'], 'B', ''),
          P('Which is not evidence for endosymbiotic origin of mitochondria in many models?', ['Double membrane and own DNA in cells', 'Ability to photosynthesize in all mitochondria', 'Similar size to bacteria', 'Ribosomes resembling prokaryotic type'], 'B', ''),
          P('Unicellular eukaryotes include some:', ['Yeasts and many protists', 'Only mammals', 'Only birds', 'Only viruses'], 'A', ''),
          P('Cell specialization in multicellular organisms produces:', ['Identical cells only always', 'Distinct cell types with different gene expression patterns', 'No communication between cells', 'Random ploidy changes always'], 'B', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — Plant vs animal',
        problems: [
          P('Cellulose in plant cell walls provides:', ['Photosynthetic pigments', 'Structural support', 'ATP synthase', 'DNA duplication'], 'B', ''),
          P('Many mature plant cells have a large vacuole that:', ['Stores water and solutes affecting turgor', 'Splits homologs', 'Captures light like thylakoid', 'Codes for ribosomal RNA alone'], 'A', ''),
          P('Animal cells often have centrioles involved with:', ['Photosynthesis', 'Microtubule organization in division contexts', 'Cell wall synthesis', 'Calvin cycle'], 'B', ''),
          P('Plasmodesmata in plants connect:', ['Nuclear DNA between unrelated species', 'Cytoplasm between adjacent cells through cell walls', 'Stomata to roots only', 'Xylem to fossils'], 'B', ''),
          P('Chloroplasts contain:', ['Thylakoid membranes for light reactions', 'Cristae for light reactions', 'Ribosomal DNA within nucleolus in animals', 'Peptidoglycan'], 'A', ''),
          P('Which statement is generally true?', ['All animal cells are spherical', 'Animal cell shape can be flexible due to lack of rigid wall', 'Plant cells lack a membrane', 'Bacteria have chloroplasts'], 'B', ''),
          P('Tonoplast refers to membrane around:', ['Mitochondrion', 'Central vacuole', 'Nucleus', 'Golgi'], 'B', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — Membrane transport',
        problems: [
          P('Simple diffusion of O₂ across membrane relies mainly on:', ['ATP pumps', 'Concentration gradient and lipid solubility', 'DNA copying', 'Photosynthesis'], 'B', ''),
          P('Sodium–potassium pump is an example of:', ['Passive diffusion', 'Active transport using ATP', 'Osmosis only', 'Binary fission'], 'B', ''),
          P('Aquaporins speed:', ['Glucose polymerization', 'Water movement through membrane', 'DNA replication forks', 'Spindle attachment'], 'B', ''),
          P('Hypertonic external solution relative to cytoplasm tends to cause animal cells to:', ['Swell', 'Shrink', 'Photosynthesize', 'Divide meiosis I'], 'B', ''),
          P('Endocytosis brings materials in via:', ['Only diffusion', 'Vesicle formation using membrane', 'Stomatal opening', 'Binary fission'], 'B', ''),
          P('Which process does not directly use ATP for moving solute across the membrane?', ['Simple diffusion of nonpolar molecules down their gradient', 'Sodium–potassium pump', 'Primary active transport of Ca²⁺', 'Endocytosis'], 'A', ''),
          P('Selective permeability arises from:', ['Uniform steel sheet', 'Lipid bilayer plus proteins forming barriers and pathways', 'Vacuole lacking tonoplast', 'Nuclear fusion'], 'B', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Organelles',
        problems: [
          P('Rough ER is studded with ribosomes making proteins that often:', ['Stay in cytosol always', 'Enter secretion pathway or membrane insertion', 'Replicate chloroplast DNA always', 'Form spindle fibers only in nucleus'], 'B', ''),
          P('Smooth ER may be abundant in cells that:', ['Synthesize steroids or detoxify compounds', 'Carry out binary fission', 'Have large plastoglobuli in mitochondria', 'Lack DNA'], 'A', ''),
          P('Lysosomes digest macromolecules using:', ['Digestive enzymes at acidic pH', 'Photosynthetic pigments', 'Ribosomal RNA genes only', 'Cellulose'], 'A', ''),
          P('Mitochondrial cristae increase:', ['Light absorption', 'Surface area for electron transport chains', 'Vacuolar storage only', 'Stomatal density'], 'B', ''),
          P('Peroxisomes often handle:', ['Fatty acid oxidation and some detox steps', 'Calvin cycle', 'Chromosome segregation', 'Water splitting at PSII'], 'A', ''),
          P('Plant plastids include:', ['Chloroplasts and chromoplasts among others', 'Only mitochondria', 'Only lysosomes identical to animals always', 'Virions'], 'A', ''),
          P('Cytoskeleton contributes to:', ['Cell shape and intracellular transport along tracks', 'Photosynthetic pigment synthesis in thylakoids only', 'DNA in cell wall', 'Gas exchange in gills of plants'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Nucleus and information flow',
        problems: [
          P('RNA polymerase in nucleus synthesizes primarily:', ['Proteins directly', 'RNA from DNA templates', 'ATP from light', 'Cell wall polymers'], 'B', ''),
          P('mRNA carries codons that are read by tRNA at the:', ['Lysosome', 'Ribosome', 'Golgi apparatus', 'Vacuole'], 'B', ''),
          P('tRNA role in translation includes:', ['Carrying amino acids matching anticodon', 'Replicating leading strand', 'Splitting water in chloroplasts', 'Polymerizing cellulose'], 'A', ''),
          P('Chromatin condenses into visible chromosomes at start of:', ['G1', 'Mitotic prophase', 'Telophase of meiosis II for DNA replication—no', 'Replication'], 'B', ''),
          P('Nuclear pores allow passage of:', ['mRNA export and protein import regulated', 'Unlimited DNA leakage always intact chromosomes', 'Only water never proteins', 'Starch'], 'A', ''),
          P('Mutation in nuclear DNA can affect:', ['Protein sequence if coding region changes', 'Only lipid color', 'Moon orbit', 'Non-heritable traits only always'], 'A', ''),
          P('Ribosomal subunits assemble partly in:', ['Nucleolus', 'Vacuolar sap', 'Stroma without DNA', 'Lysosome only'], 'A', ''),
        ],
      },
    ],
  },
];
