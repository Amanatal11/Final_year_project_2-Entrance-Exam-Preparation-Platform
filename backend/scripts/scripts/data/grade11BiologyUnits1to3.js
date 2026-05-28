/**
 * Grade 11 Biology curriculum — Units 1–3 (Natural stream, MoE Ethiopia–style outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Biology and technology',
    chapterDescription:
      'How biological knowledge and modern tools intersect with medicine, agriculture, environment, and society.',
    topics: [
      {
        topicName: 'Relationship between biology and technology',
        topicDescription: 'Branches of biology; how instruments and methods extend human observation and measurement.',
        topicObjectives: [
          'Name major biological disciplines linked to Ethiopian development goals.',
          'Give examples where technology enables biological discovery or application.',
        ],
      },
      {
        topicName: 'Biotechnology in medicine and public health',
        topicDescription: 'Vaccines, diagnostics, biopharmaceuticals — introductory survey.',
        topicObjectives: [
          'Describe one medical application of modern biotechnology at survey level.',
          'Relate quality control and regulation to safety.',
        ],
      },
      {
        topicName: 'Biotechnology in agriculture and food security',
        topicDescription: 'Crop improvement, tissue culture, biofertilizers — survey.',
        topicObjectives: [
          'Contrast traditional selection with biotechnological tools conceptually.',
          'Mention biosafety stewardship for new varieties.',
        ],
      },
      {
        topicName: 'Laboratory methods and responsible conduct',
        topicDescription: 'Microscopy, sterile technique, recording data, ethics of research involving life.',
        topicObjectives: [
          'State why replication and honest reporting matter.',
          'List basic biosafety precautions in school or college labs.',
        ],
      },
      {
        topicName: 'Bioinformatics and biological data',
        topicDescription: 'DNA sequences, databases, simple interpretation of phylogenetic or barcoding ideas.',
        topicObjectives: [
          'Explain that biological information can be stored digitally.',
          'Identify one use of genetic databases (taxonomy, conservation, health).',
        ],
      },
    ],
    exercises: [
      ex(0, 'Scope', 'Modern cell biology often depends on:', ['Only telescopes', 'Microscopy and molecular tools', 'Astrology charts', 'Metal smelting only'], 1, 'Easy'),
      ex(0, 'Careers', 'Agricultural biotechnology can support:', ['Famine only', 'Improved crops or pest management among strategies', 'Mining coal', 'Bridge engineering'], 1, 'Easy'),
      ex(1, 'Vaccine', 'Vaccines train the immune system using:', ['Boiling water only', 'Antigens or antigen-encoding approaches without necessarily causing disease', 'Antibiotics automatically', 'Radiation only'], 1, 'Medium'),
      ex(1, 'mAb', 'Monoclonal antibodies in medicine may:', ['Target specific molecules in diagnostics or therapy contexts', 'Replace all vaccines universally always false', 'Digest cellulose in human stomach primarily false', 'Photosynthesize'], 0, 'Hard'),
      ex(2, 'Tissue culture', 'Plant tissue culture can help:', ['Rapid clonal propagation of desirable genotypes among uses', 'Turn metals into proteins', 'Eliminate all bacteria on Earth', 'Freeze sunlight'], 0, 'Medium'),
      ex(2, 'Biofert', 'Rhizobia in biofertilizer context mainly enhance:', ['N₂ fixation in legume symbiosis', 'Silicon nutrition in mammals falsely', 'Ozone layer thickness', 'Gravity'], 0, 'Easy'),
      ex(3, 'Sterile', 'Sterile technique aims to:', ['Keep cultures free of unwanted microbes', 'Guarantee zero ethics review false', 'Stop all DNA in lab false', 'Eliminate fire risk only'], 0, 'Easy'),
      ex(3, 'Ethics', 'Institutional ethics review often evaluates:', ['Risk to participants or communities in research', 'Stock market timing', 'Weather prediction', 'Bridge design only'], 0, 'Medium'),
      ex(4, 'BLAST', 'Sequence similarity searching can support:', ['Inferring evolutionary relationships when interpreted carefully', 'Cooking recipes exclusively', 'Car engine tuning', 'Building skyscrapers only'], 0, 'Medium'),
      ex(4, 'Barcode', 'DNA barcoding uses short standardized sequences mainly to:', ['Help identify species in surveys among applications', 'Replace field ecology entirely false', 'Measure blood pressure', 'Predict earthquakes'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Biology and technology',
        problems: [
          P('Technology in biology mainly refers to tools and methods that:', ['Replace scientific reasoning entirely', 'Extend observation, measurement, and intervention', 'Eliminate all mathematics false', 'Ban microscopy'], 'B', ''),
          P('Molecular diagnostics can detect:', ['Pathogen nucleic acid signatures in appropriate assays among examples', 'Future lottery numbers', 'Dark matter', 'Tidal locking of moons only'], 'A', ''),
          P('Remote sensing linked to ecology can estimate:', ['Vegetation cover or land-use change in some applications', 'Electron mass in mitochondria directly with GPS false', 'Hair color genes in one SNP always', 'Ocean depth everywhere without calibration false'], 'A', ''),
          P('Imaging advances (e.g. fluorescence) help biologists:', ['Visualize molecules or structures not visible with plain light alone in many cases', 'Prove astrology', 'Remove statistics', 'Turn proteins into lipids'], 'A', ''),
          P('Open science practices may include:', ['Sharing protocols and data when ethical to improve reproducibility', 'Hiding raw data always required false context', 'Publishing without peer review always mandatory false', 'Banning collaboration'], 'A', ''),
          P('Interdisciplinary teams in biotech often combine:', ['Biology with engineering, data science, or chemistry depending project', 'Only poetry and dance exclusively false', 'Only finance unrelated', 'Only geology alone always'], 'A', ''),
          P('Appropriate technology in rural extension means:', ['Matching solutions to local skills, resources, and environment', 'Importing only the most expensive equipment always', 'Rejecting measurement', 'Ending education'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — Medicine and public health',
        problems: [
          P('Recombinant insulin production in microbes illustrates:', ['Using cells as factories for human-relevant proteins', 'Photosynthetic hospitals', 'Bone marrow in bacteria false', 'Virus-free universe guarantee'], 'A', ''),
          P('Gene therapy attempts (survey) target:', ['Correcting or supplying genetic information in specific diseased contexts with many technical hurdles', 'Growing wings in adults routinely false fiction', 'Universal immortality', 'Instant vaccine against all diseases always false'], 'A', ''),
          P('Clinical trials randomization reduces:', ['Systematic bias in treatment assignment', 'Gravity', 'DNA amount in nucleus', 'Stomach acid pH always to 7'], 'A', ''),
          P('Point-of-care rapid tests trade off:', ['Speed versus sensitivity/specificity limits depending assay design', 'Infinite accuracy always', 'Zero need for training always false', 'They always replace laboratories for every disease false'], 'A', ''),
          P('Antibiotic resistance is a challenge because:', ['misuse selects resistant strains reducing drug effectiveness evolutionary context', 'bacteria consciously choose resistance teleology false', 'DNA disappears', 'immune system deletes vaccines'], 'A', ''),
          P('Stem cell research controversies partly involve:', ['source of cells and consent frameworks depending jurisdiction and era', 'whether Earth is flat false', 'denying mitosis exists false', 'surfactant in ears only'], 'A', ''),
          P('One health approaches recognize links between:', ['Human, animal, and ecosystem health in emerging disease contexts survey', 'Only hospital billing codes', 'Only plant stomata counts', 'planetary orbits only'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — Agriculture and food security',
        problems: [
          P('Marker-assisted selection can speed breeding by:', ['Using DNA markers linked to traits to guide crosses', 'Ignoring phenotypes entirely always false', 'doubling sun output', 'eliminating meiosis'], 'A', ''),
          P('Bt crops involve genes encoding:', ['proteins toxic to certain insect pests when expressed appropriately among GMO examples', 'insulin for maize photosynthesis false weird', 'human hemoglobin in rice universally false experimental stories aside', 'luminosity for nightlife false'], 'A', ''),
          P('Biopesticides may reduce:', ['Synthetic chemical loads depending cropping system contexts not guaranteed universally', 'All insects beneficial and pests alike always false care', 'Soil bacteria count to zero false', 'Rainfall'], 'A', ''),
          P('Quarantine and certification of planting material aims to:', ['Limit spread of pathogens or invasive lines', 'Increase famine intentionally false', 'Stop DNA replication in plants false', 'Eliminate fertilizer science'], 'A', ''),
          P('Food security includes dimensions such as:', ['availability, access, utilization, stability among frameworks survey', 'only calories count ignoring micronutrients nuanced but simplification false single metric', 'only imports matter', 'ignoring culture'], 'A', ''),
          P('Precision agriculture may use:', ['sensors and maps to vary inputs reducing waste in feasible systems', 'random guessing crop rates', 'only lunar planting calendars exclusive', 'eliminating soil tests always'], 'A', ''),
          P('Biosafety for GMO field trials includes:', ['Containment routes monitoring and isolation distances depending regulations', 'releasing untested seeds everywhere always unethical illegal contexts', 'ignoring pollen flow false good practice considers', 'assuming zero genes move false biology recombination exists'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — Laboratory conduct',
        problems: [
          P('A lab notebook should record:', ['Protocols, observations, and raw data for traceability', 'Only final polished stories without times', 'Gossip unrelated', 'Forgotten entries'], 'A', ''),
          P('Personal protective equipment for splashes often includes:', ['gloves and goggles in standard biosafety teaching', 'open sandals in acid handling false hazardous', 'cotton candy hats false', 'no ventilation ever false sometimes fume hood needed'], 'A', ''),
          P('Waste streams with sharps belong in:', ['puncture-resistant labeled containers not regular bags', 'recycling paper bin', 'sink disposal always false needles', 'open bench'], 'A', ''),
          P('Plagiarism in reporting data is unethical because:', ['It misrepresents intellectual contribution and undermines trust', 'Teachers enjoy it false', 'Journals encourage it false', 'DNA requires it false'], 'A', ''),
          P('Accidental culture spill may require:', ['Notify supervisor and follow spill SOP including disinfectant and timing', 'Ignore and hope false', 'Taste test false joke never', 'Immediate social media only false'], 'A', ''),
          P('Negative controls in an assay help:', ['Detect contamination or false positives background', 'Guarantee positives always false', 'Replace statistics fully false', 'Eliminate replicates'], 'A', ''),
          P('Biosafety levels adjust to:', ['Agent risk and procedure aerosol potential overview', 'Fashion color schemes', 'Student shoe sizes only', 'Moon phase only'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — Bioinformatics',
        problems: [
          P('A phylogenetic tree from aligned sequences depicts:', ['hypothesized evolutionary relationships with model assumptions', 'Exact historical eyewitness events', 'future company stock prices', 'metal melting points'], 'A', ''),
          P('GenBank-like repositories store:', ['sequences and annotations submitted by researchers worldwide among databases', 'only secret government alien files false joke', 'cat videos exclusively false', 'brick dimensions'], 'A', ''),
          P('Quality scores in sequencing reads reflect:', ['confidence in base calls depending platform', 'musical tastes of instrument', 'petri dish diameter only', 'sunspot cycles'], 'A', ''),
          P('An E-value in BLAST relates to:', ['expected chance similarity given database size heuristic not p-value confusion simplified teaching', 'exact mass of protein in daltons always', 'cell length in meters always', 'number of teeth in frogs only'], 'A', ''),
          P('Population genomics can inform conservation by revealing:', ['inbreeding depression risks or effective population size estimates contexts', 'perfect weather forever false', 'building code violations false', 'metal ore prices'], 'A', ''),
          P('Protein 3D structure prediction tools use:', ['physical and evolutionary information depending method AlphaFold-era awareness', 'only coin flips false', 'only astrology', 'smell of reagents only'], 'A', ''),
          P('Metadata in omics studies should include:', ['how samples were taken and processed for reproducibility', 'researcher favorite colors only', 'unrelated poetry', 'blank entries always'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Characteristics of animals',
    chapterDescription:
      'Diversity of animal life; structural and functional patterns linking form to environment and phylogeny.',
    topics: [
      {
        topicName: 'Animal diversity and classification',
        topicDescription: 'Domains to phyla survey; synapomorphies introductory.',
        topicObjectives: [
          'Use binomial nomenclature correctly in examples.',
          'Contrast invertebrate richness with vertebrate subgroups.',
        ],
      },
      {
        topicName: 'Body plans and tissue organization',
        topicDescription: 'Symmetry, germ layers, coelom, segmentation; cephalization.',
        topicObjectives: [
          'Identify symmetry types with examples.',
          'Relate tissue layers to organ complexity.',
        ],
      },
      {
        topicName: 'Adaptation to habitat',
        topicDescription: 'Structural and physiological conformity to aquatic, terrestrial, aerial niches.',
        topicObjectives: [
          'Explain convergent evolution with one pair of examples.',
          'Link surface area/volume tradeoffs to thermal and gas exchange challenges.',
        ],
      },
      {
        topicName: 'Invertebrate phyla — survey',
        topicDescription: 'Sponges to arthropods and mollusks: diagnostic characters and roles in ecosystems.',
        topicObjectives: [
          'Match phylum to one hallmark structure or trait.',
          'State ecological services of pollinators or decomposers.',
        ],
      },
      {
        topicName: 'Vertebrate groups — survey',
        topicDescription: 'Fish, amphibians, reptiles, birds, mammals; chordate features.',
        topicObjectives: [
          'List chordate hallmarks appearing at some life stage.',
          'Contrast ectothermy and endothermy with examples.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Phylum', 'Jointed appendages and chitin exoskeleton characterize:', ['Chordata', 'Arthropoda', 'Porifera', 'Annelida incorrectly alone without jointed legs emphasis'], 1, 'Easy'),
      ex(0, 'Species', 'The second name in Homo sapiens indicates:', ['Genus', 'Specific epithet', 'Family', 'Order'], 1, 'Easy'),
      ex(1, 'Coelom', 'A true coelom is:', ['Always absent in bilateral animals false', 'A body cavity lined by mesoderm in triploblastic groups with coeloms', 'Only in plants', 'The gut lumen'], 1, 'Medium'),
      ex(1, '.symm', 'Adult sea stars often show:', ['Bilateral symmetry only always false adults typically pentaradial', 'Pentaradial symmetry in many adults', 'Asymmetry only', 'No symmetry'], 1, 'Medium'),
      ex(2, 'Gills', 'Many fish exchange gases using:', ['Gills with countercurrent flow enhancements in textbook models', 'Lungs as primary same as mammals always false', 'Roots', 'Stomata'], 0, 'Easy'),
      ex(2, 'Endo', 'Birds are typically:', ['Ectothermic like lizards always false', 'Endothermic with high metabolic rates', 'Anaerobic only', 'Without circulatory systems false'], 1, 'Easy'),
      ex(3, 'Mollusk', 'A radula is associated with many:', ['Mollusca feeding', 'Chordata hearts', 'Cnidaria nematocyst manufacture same structure false', 'Echinoderm tube feet same false'], 0, 'Medium'),
      ex(3, 'Insect', 'Insect pollination supports:', ['Plant reproduction and food webs', 'Only fish spawning', 'Silicon cycle primarily false', 'Nuclear fusion'], 0, 'Easy'),
      ex(4, 'Noto', 'A notochord at some stage is a hallmark of:', ['Chordata', 'Arthropoda', 'Mollusca', 'Porifera'], 0, 'Easy'),
      ex(4, 'Mammal', 'Hair and mammary glands typify:', ['Aves', 'Mammalia', 'Reptilia without exceptions false some hair-like structures rare exceptions debated monotreme egg-laying still mammals', 'Amphibia'], 1, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Animal diversity',
        problems: [
          P('Binomial nomenclature reduces confusion by:', ['giving each species a unique two-part name', 'using only common names locally ambiguous', 'renaming weekly', 'banning Latin'], 'A', ''),
          P('A clade in modern systematics is:', ['an ancestor and all descendants monophyletic group', 'any grade convenience paraphyletic acceptable false in strict cladistics', 'random species list', 'only bacteria'], 'A', ''),
          P('Porifera lack true tissues mostly and are:', ['filter feeders with choanocyte-like cells', 'active predators with jaws always false', 'flying vertebrates', 'photosynthetic'], 'A', ''),
          P('Cnidarians possess:', ['nematocysts among stinging cell structures', 'jointed legs always false', 'closed circulatory systems in all species false', 'four-chamber hearts'], 'A', ''),
          P('Annélida segmentation allows:', ['repeated organ modules in earthworms among examples', 'photosynthesis in segments', 'absence of coelom always false many have coelom', 'flight feathers'], 'A', ''),
          P('Echinoderms as adults often show:', ['pentaradial symmetry', 'bilateral adult symmetry typically for chordates always false contrast', 'no water vascular system false they have', 'chitinous exoskeleton like insects false calcified endoskeleton plates'], 'A', ''),
          P('Biodiversity estimates remain:', ['uncertain and revised as sampling and DNA discovery continue', 'final since Aristotle false', 'only counting mammals', 'irrelevant to conservation false'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — Body plans',
        problems: [
          P('Diploblastic animals have primarily:', ['ectoderm and endoderm', 'three germ layers always false triploblastic', 'four germ layers mammal', 'no germ layers sponge context nuanced'], 'A', ''),
          P('Triploblastic organisms possess:', ['ectoderm mesoderm endoderm', 'one layer only', 'two layers only always false many triploblastic exist', 'five layers standard false'], 'A', ''),
          P('Acoelomates lack:', ['a fluid-filled body cavity between gut and outer wall in classic definitions', 'brains always false flatworms cephalization beginnings', 'mesoderm always false acoelomates can have mesoderm tissue acoelomate cavity mostly absent careful'], 'A', ''),
          P('Pseudocoelomate body cavity is:', ['not fully lined by mesoderm in classical teaching contrasts', 'identical to true coelom always false', 'only in vertebrates false', 'synonymous with gut lumen'], 'A', ''),
          P('Cephalization concentrates:', ['sensory and neural structures anteriorly', 'gills in posterior leaves plants false', 'chloroplasts', 'spores only'], 'A', ''),
          P('Segmentation in annelids supports:', ['locomotion setae parapodia-like structures hydrostatic skeleton contexts', 'photosynthesis', 'nitrogen fixation', 'seed dispersal'], 'A', ''),
          P('Molting in arthropods allows:', ['growth despite rigid exoskeleton with energy tradeoffs', 'unlimited growth without shedding false', 'flight without wings false', 'endothermy automatically false'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — Adaptation',
        problems: [
          P('Countercurrent heat exchange in extremities can reduce:', ['heat loss in cold-adapted endotherms among examples', 'oxygen use to zero false', 'water need to zero false', 'gene flow'], 'A', ''),
          P('Streamlined bodies in fast swimmers illustrate:', ['convergent evolution in fish and dolphins taxonomically distant', 'identical ancestry always false', 'rejection of natural selection false', 'Lamarckian stretching in one generation false'], 'A', ''),
          P('Small endothermic bodies face challenges because:', ['surface-area-to-volume ratio favors heat loss relative to heat production in cold contexts simplified', 'they cannot maintain homeostasis ever false some can shiver brown fat etc', 'they lack mitochondria false', 'they are always aquatic false'], 'A', ''),
          P('Xerophyte-like adaptations in some animals include:', ['water conservation behaviors or concentrated urine contexts depending species—not plant xerophyte exactly analogous careful', 'chlorophyll in skin false', 'growing taller instantly false', 'anaerobic soil breathing false'], 'A', ''),
          P('Migration can be a behavioral adaptation to:', ['seasonal resource availability', 'magnetic poetry only false', 'avoid learning false', 'eliminate reproduction always false'], 'A', ''),
          P('Cryptic coloration reduces:', ['detection by predators or prey in appropriate backgrounds', 'population size necessarily always false', 'mutation rates', 'atmospheric oxygen'], 'A', ''),
          P('Trade-offs mean adaptations often:', ['improve one function at cost to another depending environment', 'optimize everything simultaneously perfectly false', 'occur overnight always false', 'ignore physics'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Invertebrate survey',
        problems: [
          P('Sponges filter feed with flagellated cells called:', ['choanocytes in many textbooks', 'nephrons', 'osteocytes', 'trichomes'], 'A', ''),
          P('Flatworms often show:', ['acoelomate triploblastic organization with simpler organ systems', 'open circulation with hemolymph always insects false different phylum', 'six legs insects false', 'feathers'], 'A', ''),
          P('Mollusca typically possess:', ['mantle often secreting shell in many groups', 'jointed exoskeleton insects confusion false', 'segmented jointed legs arthropod trait false', 'notochord'], 'A', ''),
          P('Arthropoda dominate animal species richness partly because:', ['versatile segmented body plan with exoskeleton allowing terrestrial colonization among factors', 'they photosynthesize', 'they lack development', 'they lack DNA false'], 'A', ''),
          P('Echinoderms belong to deuterostome development sharing patterns with:', ['chordates among comparisons', 'mollusks protostome typically false', 'arthropods protostome typically false though exceptions debated overall pattern teaching', 'sponges paraphyletic grouping early animals'], 'A', ''),
          P('Coral polyps are cnidarians forming:', ['reefs with ecological and economic importance', 'insect colonies false', 'bird nests false', 'fern sporangia false'], 'A', ''),
          P('Many insects undergo metamorphosis allowing:', ['larval and adult niches to differ reducing competition', 'identical niche always false often', 'no energy use false', 'instant adult emergence always false duration'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Vertebrate survey',
        problems: [
          P('Cartilaginous fish differ from typical bony fish in:', ['skeleton composition among contrasts', 'gill arch count identical always false varied', 'always freshwater false', 'lack of heart false they have'], 'A', ''),
          P('Amphibians often require moisture partly because:', ['skin gas exchange supplemental in many species membranes permeable', 'they have seed dispersal false', 'calcareous eggs in all always false many gel membranes', 'no heart false'], 'A', ''),
          P('Amniotic egg is key innovation for:', ['reproduction away from standing water in lineages with amniotes', 'fish spawning always false', 'external fertilization always false many amniotes internal', 'spore formation'], 'A', ''),
          P('Feathers in birds provide:', ['insulation and aerodynamic surfaces among roles', 'gill respiration false', 'root absorption false', 'chlorophyll capture false'], 'A', ''),
          P('Monotreme mammals:', ['lay eggs among exceptional mammalian stories', 'lack mammary glands false have modified', 'are reptiles taxonomically false synapsid mammals', 'lack jaws false'], 'A', ''),
          P('Placental mammals nurture embryos via:', ['placenta exchanging gases nutrients wastes', 'gills exclusively false', 'spores', 'lichen symbiosis false'], 'A', ''),
          P('Tetrapod limb homology is evidence for:', ['common ancestry modified for diverse locomotion', 'special creation identical forms only false', 'no bones in fish false sarcopterygii context', 'instant human appearance false'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 3: Enzymes',
    chapterDescription:
      'Biological catalysts: structure–function relationships, kinetics factors, inhibition, and applied contexts.',
    topics: [
      {
        topicName: 'Nature and nomenclature of enzymes',
        topicDescription: 'Mostly proteins; cofactors/co enzymes; active sites.',
        topicObjectives: [
          'Contrast holoenzyme and apoenzyme vocabulary.',
          'Explain why enzymes are substrate-specific.',
        ],
      },
      {
        topicName: 'How enzymes catalyse reactions',
        topicDescription: 'Activation energy, transition state, induced fit overview.',
        topicObjectives: [
          'Draw a qualitative energy diagram with and without enzyme.',
          'Relate binding energy to specificity.',
        ],
      },
      {
        topicName: 'Factors affecting enzyme activity',
        topicDescription: 'Temperature, pH, substrate concentration, enzyme concentration.',
        topicObjectives: [
          'Predict denaturation versus optimal activity.',
          'Interpret Michaelis–Menten saturation at introductory level.',
        ],
      },
      {
        topicName: 'Enzyme inhibition and cellular regulation',
        topicDescription: 'Competitive vs non-competitive; feedback inhibition; allosteric ideas.',
        topicObjectives: [
          'Predict effects of inhibitor types on Km/Vmax qualitatively.',
          'Give one pathway-level regulation example.',
        ],
      },
      {
        topicName: 'Applications of enzymes',
        topicDescription: 'Industry, detergents, diagnostics; immobilized enzymes survey.',
        topicObjectives: [
          'Name one industrial enzyme use and its substrate.',
          'Discuss stability engineering briefly.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Protein', 'Most enzymes are:', ['DNA', 'Proteins as catalysts', 'Saturated fats only', 'Cellulose'], 1, 'Easy'),
      ex(0, 'Cofactor', 'Metal ions acting as cofactors may:', ['Stabilize active site geometry', 'Encode genetic information primarily false', 'Replace membrane lipids wholesale false', 'Create sunlight'], 0, 'Medium'),
      ex(1, 'Ea', 'Enzymes lower:', ['Activation energy barrier', 'Product energy always below reactants thermodynamics wrong direction false', 'Temperature of universe', 'pH always to 1'], 0, 'Easy'),
      ex(1, 'Lock', 'Induced fit means:', ['Active site adjusts somewhat upon substrate binding models', 'Substrate never contacts enzyme false', 'Enzyme consumed 1:1', 'Lock never changes classic obsolete sometimes taught contrast'], 0, 'Medium'),
      ex(2, 'Temp', 'High fever can denature enzymes partly because:', ['Thermal disruption of noncovalent structure', 'It adds substrates', 'It removes water from Earth', 'It increases genome size'], 0, 'Medium'),
      ex(2, 'Vmax', 'At saturating substrate, reaction rate is limited chiefly by:', ['Enzyme concentration and catalytic turnover among factors', 'Infinite diffusion from moon false', 'Zero ATP', 'DNA chain length'], 0, 'Hard'),
      ex(3, 'Competitive', 'Competitive inhibitors often:', ['Increase apparent Km while Vmax unchanged in simple models', 'Decrease Vmax always noncompetitive pattern different', 'Never resemble substrate false often resemble', 'Bind irreversibly always false can vary'], 0, 'Medium'),
      ex(3, 'Feedback', 'End-product inhibition of pathway first enzyme can:', ['Prevent overaccumulation when product abundant', 'Speed runaway synthesis always false', 'Destroy genes', 'Eliminate ATP'], 0, 'Medium'),
      ex(4, 'Wash', 'Proteases in biological detergents help remove:', ['Proteinaceous stains', 'Only oil ignore protein stains false opposite enzymes both sometimes lipase too', 'Steel', 'Glass formation'], 0, 'Easy'),
      ex(4, 'Immobilized', 'Immobilized enzyme reactors can improve:', ['Stability and reuse in continuous processes depending support', 'Random unfolding always', 'Eliminating all substrates', 'Nuclear fusion'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Enzyme basics',
        problems: [
          P('Enzyme classification (EC) groups enzymes by:', ['reaction catalyzed', 'color of lab coat', 'scientist nationality', 'random lottery'], 'A', ''),
          P('Prosthetic groups differ from cosubstrates partly because:', ['remain tightly associated versus diffusing in/out per cycle in many cases', 'are always metal ions only false organic cofactors exist hemoglobin heme context different', 'never participate false', 'duplicate DNA'], 'A', ''),
          P('Apoenzyme + cofactor can form:', ['holoenzyme with catalytic competence when reassembled', 'DNA helix alone false', 'ATP without adenine false chemistry joke', 'cell wall peptidoglycan bacteria not enzyme'], 'A', ''),
          P('Enzyme specificity arises from:', ['3D active site complementarity and orientation effects', 'enzyme reading DNA sequence directly as substrate always false generally', 'uniform flat pocket for all molecules false', 'enzymes lack structure'], 'A', ''),
          P('Turnover number k_cat conceptually reflects:', ['catalytic events per enzyme per unit time at saturating substrate idealized', 'body mass', 'ocean salinity', 'number of toes'], 'A', ''),
          P('Ribozymes are:', ['RNA catalysts reminding proteins are not only catalysts survey', 'only theoretical never found false natural ribozymes exist', 'lipid membranes', 'photosystem pigments only'], 'A', ''),
          P('Some digestive zymogens protect tissue by:', ['secreting inactive precursors activated in lumen contexts', 'digesting pancreas immediately always prevented by mechanisms', 'avoiding water false', 'secreting only in winter false'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Catalytic mechanism',
        problems: [
          P('Transition state stabilization lowers:', ['activation energy enhancing rate', 'ΔG of reaction always false enzymes change pathway not overall thermodynamics', 'molecular weight of products', 'gravity'], 'A', ''),
          P('Covalent catalysis can involve:', ['transient enzyme–substrate covalent intermediates in some mechanisms', 'permanent fusion of enzyme to nucleus false', 'chlorophyll splitting only', 'oxygen from nitrogen'], 'A', ''),
          P('Acid-base catalysis in active sites uses:', ['ionizable residues transferring protons', 'only NaCl crystals', 'peptide bonds of customers false', 'magnetic monopoles false'], 'A', ''),
          P('Binding energy pays for:', ['entropy reduction and desolvation costs in forming ES complex net effect depends', 'nothing always', 'nuclear fusion', 'eliminating DNA'], 'A', ''),
          P('Substrate strain models propose enzymes:', ['destabilize substrate ground state relative to transition state in some theories', 'only stabilize substrates always false', 'ignore transition states false', 'double atomic number'], 'A', ''),
          P('Proximity effect means:', ['effective concentration rises when substrates oriented in active site', 'enzymes increase distance always false', 'eliminate collisions', 'ban diffusion'], 'A', ''),
          P('ΔG‡ relates to:', ['activation barrier kinetics transition state free energy conceptual linkage', 'ATP count in cell constant false', 'hemoglobin affinity only', 'egg size only'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Activity factors',
        problems: [
          P('Bell-shaped pH profiles often reflect:', ['ionization of active site residues and sometimes substrate', 'cosmic microwave background directly false joke', 'stomatal aperture only', 'moon phase'], 'A', ''),
          P('Arrhenius-like rising rate with temperature hits a peak then falls due to:', ['denaturation overwhelming kinetic boosting', 'substrate freezing always false', 'increased covalent bonds in enzyme always false break noncovalent', 'photosynthesis interfering false'], 'A', ''),
          P('Doubling enzyme concentration at subsaturating substrate often:', ['increases initial rate proportionally first-order in E simple models', 'halves rate false', 'has no effect false saturating might change story', 'squares temperature'], 'A', ''),
          P('Km approximates substrate concentration at half Vmax under Michaelis–Menten assumptions meaningful when:', ['comparing enzyme forms or inhibitors', 'predicting weather', 'measuring atomic mass of carbon always', 'counting insect legs'], 'A', ''),
          P('Lineweaver–Burk plots transform:', ['Michaelis–Menten into linear form for parameter estimation teaching tradeoff amplifies errors at low v', 'DNA sequences into music only false jokes', 'cell cycles into triangles false', 'heart sounds only'], 'A', ''),
          P('Salt concentration extremes can:', ['affect protein solubility and charge shielding influencing structure', 'never matter false', 'always increase activity false', 'teleport enzymes'], 'A', ''),
          P('Substrate inhibition at high [S] for some enzymes occurs when:', ['second substrate binds nonproductive regulatory site in some models', 'substrate runs out contradictory false context high not low—models differ', 'Vmax infinite', 'zero collisions'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — Regulation',
        problems: [
          P('Allosteric enzymes show:', ['sigmoid kinetics due to cooperative subunit interactions often', 'Michaelis hyperbola always strictly false for many allosteric', 'zero regulation false', 'DNA replication catalysis primarily wrong enzyme class'], 'A', ''),
          P('Phosphorylation by kinases can:', ['switch enzyme activity via covalent modification networks', 'copy DNA primarily DNA polymerase different enzyme', 'split water in PSII wrong context', 'fix nitrogen alone'], 'A', ''),
          P('Zymogen activation prevents:', ['unwanted proteolysis at synthesis sites pancreas example', 'any digestion anywhere false later activated', 'ATP formation false', 'evolution'], 'A', ''),
            P('Competitive inhibition increases apparent Km because:', ['more substrate needed to outcompete inhibitor at active site simple model', 'Vmax drops first false noncompetitive story different though uncompetitive mixes exist advanced skip', 'substrate disappears', 'temperature absolute zero'], 'A', ''),
            P('Noncompetitive inhibitor may decrease Vmax by:', ['altering catalytic step without blocking substrate binding simple story though molecular reality varies', 'always increasing Km only false mixed inhibitors exist', 'removing enzyme DNA false', 'adding substrates always'], 'A', ''),
            P('Uncompetitive inhibition binds:', ['ES complex in common textbook simplified cases', 'free enzyme only competitive pattern', 'inhibits allosteric enzymes only false', 'water only'], 'A', ''),
            P('Feedback loops in metabolism illustrate:', ['homeostasis and efficient resource use', 'random chemistry only', 'photosynthetic nitrogen fixation in mammals false', 'zero gene expression'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — Applications',
        problems: [
          P('Amylase in brewing or baking targets:', ['starch hydrolysis to sugars', 'cellulose in grass directly monogastric humans false different enzymes ruminant microbes', 'DNA exclusively false', 'rubber tires household false'], 'A', ''),
          P('Restriction endonucleases in cloning cut:', ['DNA at specific sequences', 'proteins randomly', 'lipid membranes only', 'RNA only never some cut DNA primarily'], 'A', ''),
          P('PCR uses thermostable DNA polymerase because:', ['cycles involve high temperature denaturation steps', 'RNA would duplicate faster false wrong polymerase', 'eliminate primers false need them', 'synthesize protein false'], 'A', ''),
          P('Immobilized glucose oxidase in some biosensors detects:', ['blood glucose indirectly via linked reactions producing measurable signal', 'oxygen in stratosphere', 'hemoglobin mass', 'bone density'], 'A', ''),
          P('Enzyme replacement therapy treats some:', ['lysosomal storage diseases lacking enzyme activity', 'broken bones casting only enzyme irrelevant', 'viral infections alone false sometimes need different modalities', 'drought in crops false'], 'A', ''),
          P('Directed evolution in industry may:', ['improve enzyme stability or activity through iterative selection in lab', 'violate conservation of mass false', 'instantly yield perfect catalyst first try often false iterative', 'replace cells with rocks'], 'A', ''),
          P('Cellulase engineering targets:', ['digesting cellulose polymers in biofuel contexts among research', 'starch in bread only amylase', 'hemoglobin coagulation thrombin different', 'insulin secretion beta cells not cellulase'], 'A', ''),
        ],
      },
    ],
  },
];
