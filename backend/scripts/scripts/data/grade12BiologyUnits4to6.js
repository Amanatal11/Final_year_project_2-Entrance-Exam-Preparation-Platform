/**
 * Grade 12 Biology curriculum — Units 4–6 (Natural stream, MoE Ethiopia–style outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 4: Plant structure, function, and reproduction',
    chapterDescription:
      'From tissues to whole-plant physiology; how plants capture energy, move water, and complete life cycles.',
    topics: [
      {
        topicName: 'Plant tissues and organ systems',
        topicDescription: 'Meristems; dermal, ground, and vascular tissues; root, stem, leaf organization.',
        topicObjectives: [
          'Contrast monocot and dicot organization in seed and stem anatomy.',
          'Relate xylem and phloem roles to transport problems.',
        ],
      },
      {
        topicName: 'Water relations and mineral nutrition',
        topicDescription: 'Soil–plant–atmosphere continuum; transpiration; essential nutrients; nitrogen cycle link to crops.',
        topicObjectives: [
          'Explain cohesion–tension idea for xylem ascent at survey level.',
          'List macronutrients versus micronutrients with crop examples.',
        ],
      },
      {
        topicName: 'Photosynthesis and respiration — integrated overview',
        topicDescription: 'Light reactions; Calvin cycle; mitochondrial respiration contrasts; C3/C4/CAM survey.',
        topicObjectives: [
          'Trace energy flow from photon absorption to starch/sucrose.',
          'State why photorespiration matters in hot arid C3 contexts.',
        ],
      },
      {
        topicName: 'Plant reproduction and life cycles',
        topicDescription: 'Flower structure; pollination; fertilization; seeds and fruits; alternation of generations survey.',
        topicObjectives: [
          'Differentiate microspores and megaspores in angiosperms at textbook level.',
          'Connect Ethiopian crop pollination to food security.',
        ],
      },
      {
        topicName: 'Plant hormones, tropisms, and timing',
        topicDescription: 'Auxin, gibberellins, ABA, ethylene; phototropism; seed dormancy and germination.',
        topicObjectives: [
          'Describe phototropism mechanism at high-school depth.',
          'Give one agricultural use of plant growth regulators.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Xylem', 'Xylem primarily transports:', ['Water and dissolved minerals', 'Sucrose from leaves only', 'Phloem sap', 'Hormones only'], 0, 'Easy'),
      ex(0, 'Stom', 'Guard cells regulate:', ['Stomatal aperture affecting gas exchange and transpiration', 'Root hair density only', 'Pollen tube growth', 'Nitrogen fixation'], 0, 'Easy'),
      ex(1, 'Cohesion', 'Water molecules stick to each other in xylem partly due to:', ['Hydrogen bonding cohesion contributing to tension transmission', 'Ionic bonds only', 'Covalent bonds breaking', 'Photosynthetic splitting only'], 0, 'Medium'),
      ex(1, 'N def', 'Chlorosis often links to nitrogen deficiency because N is part of:', ['Chlorophyll and many enzymes (symptoms overlap other deficiencies)', 'Cellulose only', 'Cuticle wax only', 'Stomatal pores'], 0, 'Medium'),
      ex(2, 'Calvin', 'Calvin cycle fixes carbon into:', ['Organic sugars using ATP and NADPH from light reactions', 'O2 only', 'DNA directly', 'N2 gas'], 0, 'Easy'),
      ex(2, 'C4', 'C4 photosynthesis bundles CO2 to reduce:', ['Photorespiration in hot bright conditions', 'Oxygen from PSII', 'Root growth', 'Starch storage'], 0, 'Medium'),
      ex(3, 'Double', 'Double fertilization in angiosperms yields:', ['Zygote and triploid endosperm (classic pattern)', 'Two identical zygotes', 'Only the pollen tube', 'Haploid endosperm'], 0, 'Medium'),
      ex(3, 'Poll', 'Wind-pollinated flowers often show:', ['Reduced petals and abundant pollen (context-dependent)', 'Large colorful petals (typical of insect pollination)', 'Heavy nectar spurs (often animal pollination)', 'Underwater pollen release (some plants, not defining for all wind species)'], 0, 'Easy'),
      ex(4, 'Auxin', 'Auxin redistribution contributes to:', ['Phototropic differential growth (classical teaching)', 'Only gravitropism in roots without auxin (false)', 'Nitrogenase activity', 'Rubisco carboxylation rate'], 0, 'Medium'),
      ex(4, 'ABA', 'Abscisic acid roles include:', ['Stomatal closure during water stress among responses', 'Primary stem elongation (mostly gibberellin/auxin themes)', 'Pollen tube attraction only', 'Photosystem II repair'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — Plant tissues',
        problems: [
          P('Apical meristems drive:', ['Primary elongation growth at root and shoot tips', 'Secondary thickening only (mostly lateral meristems)', 'Flowering timing only (mostly environmental signaling)', 'Transpiration pull generation'], 'A', ''),
          P('Vascular bundles in angiosperm stems typically contain:', ['Xylem and phloem plus supportive tissues', 'Only stomata', 'Only collenchyma without vascular tissue', 'Cork only'], 'A', ''),
          P('The Casparian strip in root endodermis forces water and minerals to:', ['Pass through symplastic/transmembrane control points rather than slipping between all cells', 'Bypass the stele entirely', 'Enter the leaf mesophyll directly', 'Exit through guttation only'], 'A', ''),
          P('Periderm (cork) in woody stems mainly:', ['Replaces epidermis and reduces water loss with suberized cells', 'Conducts photosynthate', 'Splits water in photosynthesis', 'Produces pollen'], 'A', ''),
          P('Monocot stems typically differ from many eudicot stems in that they:', ['Usually lack a vascular cambium (limited secondary thickening in the classic pattern)', 'Always have a vascular cambium', 'Never have phloem', 'Use xylem for sugar export'], 'A', ''),
          P('Leaf mesophyll is often differentiated into:', ['Palisade and spongy layers with air spaces for CO2 diffusion', 'Only xylem vessels', 'Vascular cambium rings', 'Root cap cells'], 'A', ''),
          P('Trichomes can modify leaf microclimate or defense by:', ['Trapping humidity, reflecting light, or secreting compounds depending on species', 'Performing most photosynthesis in all plants', 'Fixing atmospheric N2 in all plants', 'Replacing stomata'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Water & nutrition',
        problems: [
          P('Transpiration through stomata is linked to water ascent partly via:', ['Cohesion–tension in xylem (survey-level model)', 'Phloem pressure flow (sugar transport model, different process)', 'Active pumping of bulk water against osmotic gradients in all soils', 'Mitochondrial oxidative phosphorylation only'], 'A', ''),
          P('Field capacity in soils refers roughly to:', ['Water retained after drainage excluding large pores gravitational loss—still available to plants vs saturation nuance', 'Ocean salinity', 'Total rainfall per year', 'Wilting coefficient only'], 'A', ''),
          P('Macronutrients required in larger amounts include:', ['N, P, K (and Ca, Mg, S) among textbook lists', 'Only Fe and Zn (usually micronutrients)', 'Gold', 'Silicon for all higher plants equally'], 'A', ''),
          P('Rhizosphere microbes can help plants by:', ['Increasing nutrient availability and sometimes suppressing pathogens (healthy soil context)', 'Replacing the plant genome', 'Eliminating transpiration requirement', 'Blocking root hair formation always'], 'A', ''),
          P('Mycorrhizal fungi commonly assist with:', ['Phosphorus and water uptake via hyphal networks (context-dependent)', 'Oxygenic photosynthesis', 'Nitrogen fixation in all species (that is rhizobia in legumes)', 'Viral replication'], 'A', ''),
          P('Irrigation can damage soils when:', ['Salts accumulate from evaporation or high water tables (salinization risk)', 'It always improves aeration', 'It eliminates all microorganisms beneficially', 'It increases latitude'], 'A', ''),
          P('Cation exchange capacity (CEC) is higher in soils with more:', ['Clay and organic matter (general pattern)', 'Pure coarse sand with no organic matter', 'Plastic pollution', 'Ice'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Photosynthesis & respiration',
        problems: [
          P('Photosystems in thylakoids ultimately help produce:', ['ATP and NADPH used by the Calvin cycle (noncyclic overview)', 'Glucose without any ATP input anywhere', 'Only O2 with no NADPH', 'Cell wall peptidoglycan'], 'A', ''),
          P('Photorespiration increases when:', ['Rubisco oxygenates RuBP and stomata close, raising O2/CO2 in the leaf', 'CO2 is very plentiful and temperature is low', 'Only at night in C3 plants', 'Mitochondria stop consuming O2'], 'A', ''),
          P('The Calvin cycle occurs in the:', ['Chloroplast stroma', 'Thylakoid lumen only', 'Mitochondrial matrix only', 'Nucleus'], 'A', ''),
          P('C4 and CAM pathways are evolutionary responses partly to:', ['Photorespiration and water-use challenges in hot or arid conditions (survey)', 'Lack of chlorophyll', 'Excess winter freezing only', 'DNA replication errors'], 'A', ''),
          P('Mitochondrial aerobic respiration uses O2 largely as:', ['Terminal electron acceptor in electron transport (survey)', 'Direct carbon source for sugars', 'The immediate product of the Calvin cycle', 'The fuel for PSI only'], 'A', ''),
          P('Starch often stores transient photosynthate in:', ['Chloroplasts (before export as sucrose in many species)', 'Mitochondria matrix primarily', 'Lysosomes', 'Rough ER exclusively'], 'A', ''),
          P('Cytochrome c oxidase in mitochondria is part of:', ['Complex IV of oxidative phosphorylation', 'Photosystem II', 'Rubisco activation', 'DNA polymerase III'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — Reproduction',
        problems: [
          P('In angiosperms, the embryo sac is the:', ['Female gametophyte (survey-level)', 'Male gametophyte', 'Sporophyte only', 'Endosperm before fertilization (not the usual teaching placement)'], 'A', ''),
          P('Pollination refers to:', ['Transfer of pollen to a receptive stigma', 'Fusion of egg and sperm', 'Seed dispersal by wind', 'Mitosis in root tips'], 'A', ''),
          P('The ovary matures into:', ['A fruit (pericarp tissues; with many variations)', 'A seed always directly without ovary tissue', 'Pollen grains', 'Spores in ferns'], 'A', ''),
          P('Self-incompatibility systems reduce:', ['Self-fertilization by molecular recognition mechanisms (overview)', 'All pollination events', 'Flower color variation', 'Meiosis in sporophytes'], 'A', ''),
          P('Double fertilization forms:', ['Zygote and primary endosperm nucleus (triploid endosperm classic teaching)', 'Two embryos always identical', 'Only endosperm with no embryo', 'Only pollen tubes'], 'A', ''),
          P('Apomixis refers broadly to:', ['Asexual seed formation without fertilization in some lineages', 'Double fertilization', 'Wind pollination', 'Moss alternation only'], 'A', ''),
          P('Many cereals relevant to Ethiopian farming rely on:', ['Self-pollination to varying degrees depending on crop—survey appreciation of breeding systems', 'Exclusive bird pollination', 'Pollen carried only by bats', 'Underwater fertilization'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Hormones & responses',
        problems: [
          P('Gibberellins can promote:', ['Stem elongation and seed germination in many contexts', 'Stomatal closure as primary role', 'Lateral root initiation only', 'Photosynthetic water splitting'], 'A', ''),
          P('Ethylene is strongly associated with:', ['Fruit ripening and abscission processes in many species', 'Phototropic bending alone', 'Phloem loading with sucrose only', 'Rubisco carboxylation'], 'A', ''),
          P('Gravitropism in roots often involves:', ['Statolith sedimentation and auxin distribution patterns (introductory model)', 'Phototropin blue-light signaling only in shoots', 'Wind direction sensing exclusively', 'Mineral taste buds'], 'A', ''),
          P('Photoperiodism affects flowering through:', ['Light perception and circadian timing integrated with developmental programs (survey)', 'Random calendar dates only', 'Solely soil nitrogen content', 'Earthquake vibrations'], 'A', ''),
          P('ABA increases under drought and contributes to:', ['Stomatal closure and stress tolerance pathways', 'Flower induction in long-day plants only', 'Cellulose synthesis in animal cells', 'Viral replication inhibition in plants'], 'A', ''),
          P('Thigmomorphosis (touch/wind) can cause:', ['Altered growth form—often shorter, thicker stems', 'Increased height without limit in all plants', 'Immediate chlorophyll destruction', 'CAM metabolism induction in all C3 species'], 'A', ''),
          P('Systemic acquired resistance in plants relies on:', ['Long-distance signaling after localized infection (jasmonate/salicylate themes—survey)', 'Antibodies like mammals', 'Circulatory macrophage cells', 'Active flight escape'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 5: Microbiology, pathogens, and public health',
    chapterDescription:
      'Microbial diversity; how viruses and microbes cause disease; epidemiology and control in community settings.',
    topics: [
      {
        topicName: 'Prokaryotes: structure, metabolism, and roles',
        topicDescription: 'Bacterial cell organization; nutrition types; beneficial roles in ecosystems and industry.',
        topicObjectives: [
          'Compare features of bacteria and archaea at survey level.',
          'Give examples of nitrogen fixation and decomposition services.',
        ],
      },
      {
        topicName: 'Viruses: structure, replication, and disease',
        topicDescription: 'Virion parts; lytic and lysogenic cycles (survey); emerging virus awareness.',
        topicObjectives: [
          'Explain why antibiotics do not treat viral infections.',
          'Describe host specificity of viruses.',
        ],
      },
      {
        topicName: 'Protists and fungi — ecological and medical relevance',
        topicDescription: 'Pathogenic eukaryotes; malaria life cycle survey; fungal infections and ecology.',
        topicObjectives: [
          'Outline mosquito–Plasmodium–human link at textbook depth.',
          'State roles of fungi as decomposers and symbionts.',
        ],
      },
      {
        topicName: 'Epidemiology basics',
        topicDescription: 'Incidence, prevalence, reservoirs, vectors, R₀ intuition; outbreak investigation outline.',
        topicObjectives: [
          'Differentiate endemic, epidemic, and pandemic usage.',
          'Interpret a simple epidemic curve qualitatively.',
        ],
      },
      {
        topicName: 'Antimicrobials, vaccination, and infection control',
        topicDescription: 'Antibiotic mechanisms and resistance; vaccine types; hygiene and public health pillars.',
        topicObjectives: [
          'Explain selection for resistant microbes with misuse.',
          'List routine preventive behaviors reducing transmission.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Gram', 'Gram staining is most informative for bacteria with:', ['Peptidoglycan-rich cell walls (many Bacteria)', 'All archaeal lineages uniformly', 'Eukaryotic nuclei', 'Viruses'], 0, 'Medium'),
      ex(0, 'Chemo', 'Chemoheterotrophs obtain energy and carbon chiefly from:', ['Organic compounds', 'CO2 with light only', 'H2S oxidation only in all cases', 'N2 gas as sole carbon source'], 0, 'Easy'),
      ex(1, 'Capsid', 'A viral capsid is built from:', ['Protein subunits enclosing nucleic acid', 'Peptidoglycan layers', 'Phospholipids forming a fluid bilayer alone in all viruses', 'Cellulose microfibrils'], 0, 'Easy'),
      ex(1, 'Lytic', 'In a lytic replication cycle, progeny virions typically:', ['Exit by lysing the host cell (many bacteriophages)', 'Integrate forever without killing', 'Photosynthesize', 'Fix nitrogen in the host leaf'], 0, 'Easy'),
      ex(2, 'Plasm', 'Sexual recombination of Plasmodium occurs in:', ['The mosquito vector (survey-level life-cycle idea)', 'Human red blood cells only', 'Soil amoebae', 'Plant chloroplasts'], 0, 'Medium'),
      ex(2, 'Yeast', 'Baker’s yeast fermentation releases CO2 that:', ['Leavens dough (along with ethanol that mostly bakes off)', 'Oxygenates the dough', 'Hardens gluten without gas', 'Denatures starch completely'], 0, 'Easy'),
      ex(3, 'R0', 'The basic reproduction number R0 is best described as:', ['Average secondary infections from one case in a fully susceptible population (idealized model)', 'Case fatality rate', 'Incidence per 100000 without time', 'Antibiotic MIC'], 0, 'Medium'),
      ex(3, 'Zoon', 'Zoonoses are diseases that:', ['Jump from animals to humans (spillover contexts)', 'Only spread within hospitals', 'Affect only plants', 'Require saltwater vectors exclusively'], 0, 'Easy'),
      ex(4, 'MRSA', 'MRSA highlights that resistance is:', ['Selected when drugs are misused or courses incomplete, in evolutionary competition', 'Impossible if hygiene is good (oversimplified)', 'Only a laboratory artifact', 'Cured by higher vitamin doses alone'], 0, 'Medium'),
      ex(4, 'Vaccine', 'Vaccination reduces disease burden partly by:', ['Priming adaptive memory (antibodies and/or T cells, platform-dependent)', 'Killing all bacteria everywhere instantly', 'Replacing sanitation entirely', 'Increasing mutation rates'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Prokaryotes',
        problems: [
          P('Binary fission in bacteria yields:', ['Two daughter cells after replication and septation', 'Four gametes like meiosis', 'A diploid zygote', 'A virus particle'], 'A', ''),
          P('Conjugation can move:', ['Plasmid DNA between bacteria via pilus-like contacts (overview)', 'Nuclear chromosomes in eukaryotes by the same mechanism', 'Virions into plant nuclei directly', 'Water up xylem'], 'A', ''),
          P('Biofilms are clinically important because they:', ['Increase tolerance to antimicrobials and host defenses in matrix communities', 'Always dissolve instantly with soap', 'Only occur in distilled water', 'Exclusively help patients clear infections faster'], 'A', ''),
          P('Chemosynthetic autotrophs obtain energy from:', ['Oxidation of inorganic chemicals (e.g., vent ecosystems) rather than light', 'Sunlight only', 'Mitochondrial beta-oxidation only', 'Only consuming viruses'], 'A', ''),
          P('Nitrogen-fixing symbioses with legumes involve:', ['Rhizobia in root nodules reducing N2 to ammonia (survey)', 'Cyanobacteria in human blood', 'Mycorrhizae fixing N2 in all trees', 'Yeast budding in roots'], 'A', ''),
          P('Obligate anaerobes are often harmed by molecular O2 partly through:', ['Toxic reactive oxygen species if antioxidant enzymes are insufficient', 'Needing oxygen for the Krebs cycle', 'Photosystem II activity in bacteria', 'Increased transpiration'], 'A', ''),
          P('Quorum sensing allows bacteria to:', ['Coordinate gene expression when cell density crosses a threshold (virulence, luminescence)', 'Measure air pressure for flight', 'Perform meiosis', 'Produce chlorophyll'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — Viruses',
        problems: [
          P('Antibiotics are generally ineffective against viruses because:', ['Viruses use host machinery and lack bacterial cell-wall targets typical of many antibiotics', 'Viruses are larger than bacteria', 'Viruses do not have nucleic acids', 'Viruses replicate only in soil'], 'A', ''),
          P('Retroviruses encode reverse transcriptase to:', ['Synthesize DNA from an RNA genome (HIV example—public health relevance)', 'Replicate DNA semiconservatively like host polymerase', 'Translate viral proteins without ribosomes', 'Fix nitrogen'], 'A', ''),
          P('A lysogenic cycle may involve:', ['Prophage integration and later induction to a lytic pathway (bacteriophage teaching)', 'Immediate lysis without any integration always', 'Binary fission of the virion', 'Photosynthesis in the capsid'], 'A', ''),
          P('Emerging infectious diseases are influenced by factors such as:', ['Land-use change, trade, travel, and pathogen evolution (One Health framing)', 'The absence of any genetic mutation in microbes', 'Only winter weather', 'Elimination of all wildlife'], 'A', ''),
          P('Seasonal influenza vaccines are updated partly because:', ['Antigenic drift/shift changes circulating strains (introductory vocabulary)', 'DNA never mutates in influenza (false)', 'People lose immunity every week uniformly (oversimplification)', 'Viruses become bacteria annually (false)'], 'A', ''),
          P('Vaccination aims to generate:', ['Immunological memory without causing the full disease (platform-dependent)', 'Permanent sterilizing immunity in every person for every pathogen (unrealistic)', 'Immediate antibiotic resistance', 'Replacement of innate immunity entirely'], 'A', ''),
          P('Oncogenic viruses illustrate that:', ['Some viruses integrate or dysregulate growth control genes (e.g., HPV—prevention by vaccine where available)', 'Viruses cannot cause chronic infections (false)', 'Only bacteria cause cancer (false)', 'Cancer is purely dietary (oversimplified)'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Protists & fungi',
        problems: [
          P('Plasmodium replication in human blood underlies periodic fevers partly because:', ['RBC rupture releases parasites and inflammatory signals (survey-level)', 'The liver photosynthesizes glucose for parasites', 'Oxygen levels rise uncontrollably', 'Platelets duplicate the parasite'], 'A', ''),
          P('African trypanosomiasis is transmitted primarily by:', ['Tsetse flies (geography and vector control are public-health themes)', 'Anopheles mosquitoes (malaria vector)', 'House flies only', 'Drinking saltwater'], 'A', ''),
          P('Phytoplankton are ecologically important as:', ['Primary producers in aquatic food webs', 'Exclusive apex predators', 'Organisms without nucleic acids', 'Agents of nitrogen fixation in mammal blood'], 'A', ''),
          P('Fungal cell walls typically contain:', ['Chitin (contrast with plant cellulose in many textbooks)', 'Peptidoglycan like bacteria', 'Silica frustules like diatoms', 'Only lipid bilayers with no wall'], 'A', ''),
          P('Lichens illustrate:', ['Symbiosis between a fungus and a photosynthetic partner (alga or cyanobacterium)', 'Purely viral infection of bark', 'Competition between identical clones only', 'Marine coral polyps exclusively'], 'A', ''),
          P('Opportunistic fungal infections rise when hosts are:', ['Immunocompromised (e.g., advanced HIV, transplant therapy—ethical, non-stigmatizing framing)', 'Always perfectly healthy only (false)', 'At sea level only (false)', 'Eating excess protein only (nonsense)'], 'A', ''),
          P('Oomycete plant pathogens (e.g., Phytophthora) remind us that:', ['Not all “fungus-like” organisms are true Fungi—phylogenetics matters', 'All filamentous eukaryotes are fungi (false)', 'Photosynthetic stramenopiles do not exist (false—diatoms etc.)', 'Viruses are oomycetes (false)'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — Epidemiology',
        problems: [
          P('Incidence measures:', ['New cases in a population over time', 'Total existing cases at one time (prevalence)', 'Death rate from all causes', 'Birth rate only'], 'A', ''),
          P('Prevalence depends on:', ['Both incidence and how long illness lasts (among other factors)', 'Only climate latitude', 'Only genetic drift in viruses', 'Hospital construction costs'], 'A', ''),
          P('A reservoir host can:', ['Maintain a pathogen in nature and occasionally spill over to humans', 'Never include animals (false: many zoonoses)', 'Guarantee clinical symptoms in every infected individual', 'Eliminate the need for vectors'], 'A', ''),
          P('Vector control for mosquito-borne diseases can include:', ['Bed nets, larviciding, environmental management, and integrated vector management', 'Drinking more saltwater', 'Stopping all photosynthesis', 'MRI scans for malaria'], 'A', ''),
          P('The herd immunity threshold increases roughly when:', ['R0 is higher (homogeneous models: higher fraction immune needed)', 'R0 is below 1 (then outbreaks shrink without herd immunity framing)', 'Vaccines are 0% effective', 'Population density is zero'], 'A', ''),
          P('Screening tests in asymptomatic populations:', ['Can have different predictive values than diagnostic tests for symptomatic disease (Bayes intuition)', 'Are always 100% accurate', 'Never produce false positives', 'Replace confirmatory diagnostics always'], 'A', ''),
          P('Public-health surveillance aggregates data from:', ['Labs, clinics, mortality registries, and field reports (with ethical safeguards)', 'Only social media rumors without verification', 'Astrology charts', 'Stock exchange tickers'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Control',
        problems: [
          P('Bactericidal drugs tend to:', ['Kill bacteria; bacteriostatic drugs inhibit growth (host immunity still matters)', 'Only slow human metabolism', 'Attack viral capsids primarily if labeled “bactericidal” (misleading)', 'Remove all biofilms instantly always'], 'A', ''),
          P('β-lactam antibiotics (e.g., penicillins) classically target:', ['Peptidoglycan cross-linking in bacterial cell walls', 'Human 80S ribosomes', 'Viral reverse transcriptase', 'Chloroplast Rubisco'], 'A', ''),
          P('Resistance genes spread faster when:', ['Selection pressure from drug misuse combines with horizontal gene transfer (plasmids, integrons)', 'Antibiotics are never used (usually lowers resistance selection, though complex)', 'Patients finish every course always without exception in reality (ideal, not always true)', 'Hospitals ban handwashing (dangerous)'], 'A', ''),
          P('Live attenuated vaccines trade off:', ['Strong immune responses versus contraindications in immunocompromised hosts and cold-chain needs', 'Zero risk and no logistics ever', 'Permanent sterilizing immunity guaranteed', 'Only antibody response without T cells (oversimplified)'], 'A', ''),
          P('WASH (water, sanitation, hygiene) interventions reduce:', ['Many enteric and skin-contact disease burdens (child health equity contexts)', 'Airborne TB alone primarily', 'Genetic disorders', 'Vitamin D synthesis only'], 'A', ''),
          P('Hospital infection prevention bundles often emphasize:', ['Hand hygiene, device stewardship, and isolation when indicated (overview)', 'Using antibiotics for all viral colds (incorrect)', 'Stopping vaccination programs', 'Eliminating sterile technique'], 'A', ''),
          P('One Health integrates:', ['Human, animal, and ecosystem health for zoonotic disease and food safety (survey)', 'Only hospital billing codes', 'Only plant taxonomy', 'Only marine biology'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 6: Biotechnology, conservation, and sustainable futures',
    chapterDescription:
      'Applying molecular tools responsibly; protecting biodiversity; linking science with development and ethics.',
    topics: [
      {
        topicName: 'DNA technology foundations',
        topicDescription: 'PCR, sequencing, cloning; agricultural and medical case studies at survey level.',
        topicObjectives: [
          'Outline PCR purpose and components at block level.',
          'Contrast in situ data collection with lab analyses.',
        ],
      },
      {
        topicName: 'Genomics, proteomics, and big data (survey)',
        topicDescription: 'From genome reads to variant interpretation; opportunities and equity limits.',
        topicObjectives: [
          'Explain that a genome sequence is not automatic clinical diagnosis.',
          'Discuss privacy and consent in biobanking briefly.',
        ],
      },
      {
        topicName: 'Biosafety, biosecurity, and ethical governance',
        topicDescription: 'Dual-use research; containment; responsible oversight of GMO and pathogen work.',
        topicObjectives: [
          'State why pathogen research requires containment tiers.',
          'Identify stakeholder interests in GMO approval processes.',
        ],
      },
      {
        topicName: 'Conservation biology in action',
        topicDescription: 'Threats; protected areas; corridors; species recovery plans; community-based management.',
        topicObjectives: [
          'Explain minimum viable population intuition.',
          'Link Ethiopian protected areas to watershed and tourism services.',
        ],
      },
      {
        topicName: 'Sustainable development and environmental stewardship',
        topicDescription: 'SDG links; climate-smart agriculture; restoration and youth participation.',
        topicObjectives: [
          'Give one example where health and environment goals reinforce.',
          'Discuss youth participation in local restoration projects.',
        ],
      },
    ],
    exercises: [
      ex(0, 'PCR', 'A heat-stable DNA polymerase is used in PCR because:', ['Thermal cycling includes high-temperature denaturation steps', 'RNA cannot be copied (false)', 'The reaction runs at 4°C only', 'Ligase requires 100°C always'], 0, 'Easy'),
      ex(0, 'Vec', 'A typical bacterial expression vector includes:', ['A selectable marker and promoter driving inserted genes (workflow overview)', 'Only telomeres for yeast artificial chromosomes always', 'Animal mitochondria always', 'A plant cuticle gene only'], 0, 'Medium'),
      ex(1, 'GWAS', 'Genome-wide association studies detect:', ['Statistical associations between variants and traits—not guaranteed mechanistic causation alone', 'Perfect deterministic fate for every individual', 'Only mutations in mitochondria', 'Behavior without environment'], 0, 'Medium'),
      ex(1, 'Biobank', 'Ethical biobanking emphasizes:', ['Informed consent, privacy, governance, and equitable benefit sharing frameworks', 'Selling participants without consent (unethical/illegal)', 'Anonymous compulsory harvesting (violates autonomy)', 'Public posting of raw medical records of minors without safeguards'], 0, 'Medium'),
      ex(2, 'BSL', 'Higher biosafety levels (BSL) correspond to:', ['Greater pathogen hazard and/or aerosol-generating procedures (overview)', 'Lower hazard always (false)', 'Only chemistry teaching labs', 'Farm tractors'], 0, 'Easy'),
      ex(2, 'GMO', 'GMO environmental risk assessment can include:', ['Gene flow, non-target effects, and biodiversity interactions (regulators weigh evidence by case)', 'Only taste tests in kitchens', 'Proof of absolute zero risk (unattainable)', 'Assuming no empirical data'], 0, 'Medium'),
      ex(3, 'MVP', 'Small isolated populations face higher extinction risk partly from:', ['Inbreeding depression and genetic drift (stochasticity in finite populations)', 'Guaranteed infinite growth (false)', 'No environmental change ever (false)', 'Too many predators always (oversimplified)'], 0, 'Medium'),
      ex(3, 'Corridor', 'Wildlife corridors are intended to:', ['Connect habitat patches to improve dispersal and gene flow', 'Separate all animals from humans forever', 'Replace protected areas entirely', 'Increase roadkill intentionally'], 0, 'Easy'),
      ex(4, 'Agroforestry', 'Agroforestry can support resilience by:', ['Combining trees with crops/livestock for microclimate, income diversity, and soil benefits (context-specific)', 'Removing every tree for “efficiency” on slopes prone to erosion (often harmful)', 'Eliminating all biodiversity for monoculture (risky)', 'Ignoring farmer knowledge (undesirable in participatory projects)'], 0, 'Medium'),
      ex(4, 'Youth', 'School environmental clubs can strengthen:', ['Citizen science, restoration planting, and leadership linked to local watersheds (examples vary)', 'Illegal wildlife trade', 'Uncontrolled burning of waste (unsafe)', 'Only memorization without action'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 6 Quiz 1 — DNA technology',
        problems: [
          P('PCR amplifies:', ['A targeted DNA segment between primer binding sites', 'Entire genomes always in one step', 'Proteins directly from amino acid templates', 'Lipid membranes'], 'A', ''),
          P('Restriction enzymes recognize:', ['Short specific DNA sequences and cut at characteristic sites (cloning context)', 'Any random sequence with equal probability', 'Proteins only', 'Only RNA genomes'], 'A', ''),
          P('CRISPR–Cas genome editing requires:', ['A guide RNA to direct cutting near complementary DNA regions (and ethical oversight)', 'No guide (false)', 'Only viral hosts (false)', 'Chlorophyll as cofactor (false)'], 'A', ''),
          P('Metagenomics studies:', ['Community DNA from environments without culturing every organism', 'Only one purified bacterial isolate always', 'Only fossil bones', 'Stellar spectra'], 'A', ''),
          P('Golden Rice is widely discussed as an example of:', ['Biofortification via engineered carotenoid pathways (governance and access debates are part of real-world biology)', 'Traditional crossing without genetics (false for Golden Rice)', 'A nitrogen-fixing cereal that needs no soil (false)', 'An anti-viral spray for wheat (false)'], 'A', ''),
          P('Electrophoresis separates DNA fragments mainly by:', ['Size (and sometimes conformation) through a gel matrix', 'Color of bases', 'Atomic number of carbon only', 'Whether the gene is “natural” (false)'], 'A', ''),
          P('A plasmid cloning vector often contains:', ['Origin of replication, selectable marker, and multiple cloning site (overview)', 'The entire human chromosome 1', 'A plant cuticle only', 'Ribosomes encoded as the only insert'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 6 Quiz 2 — Omics',
        problems: [
          P('Transcriptomics differs from genomics by focusing on:', ['RNA expression patterns across tissues/conditions', 'Only the static DNA sequence without expression', 'Only fossil morphology', 'Planetary orbits'], 'A', ''),
          P('Proteomics emphasizes:', ['Proteins, modifications, and interactions—not fully predictable from DNA alone', 'Only GC content of DNA', 'Only ribosomal RNA lengths', 'Meteorology'], 'A', ''),
          P('Polygenic risk scores:', ['Aggregate many small-effect variants into a statistical score with limits and ethics debates', 'Predict destiny with certainty for everyone', 'Apply only to bacteria', 'Eliminate environmental risk factors'], 'A', ''),
          P('Genomic privacy risks can include:', ['Re-identification from genetic genealogy databases and misuse of sensitive inference (governance needed)', 'No risks because DNA is anonymous (oversimplified)', 'Only celebrity genomes matter', 'Genomes cannot identify relatives (false)'], 'A', ''),
          P('AlphaFold-like deep learning for proteins helps researchers:', ['Build structure hypotheses for function and drug design—still with experimental validation needs', 'Replace all wet lab work instantly (false)', 'Prove evolution false (false)', 'Sequence genomes without DNA (false)'], 'A', ''),
          P('GWAS diversity gaps can cause:', ['Misleading risk estimates when extrapolated across ancestries without representative sampling', 'Perfect equity automatically', 'No scientific value from GWAS (false)', 'Only cosmetic issues (false)'], 'A', ''),
          P('Metabolomics measures:', ['Small-molecule metabolites as snapshots of physiology (nutrition, microbiome interactions)', 'Only DNA bases', 'Only fossils', 'Earthquake magnitude'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 6 Quiz 3 — Ethics',
        problems: [
          P('Dual-use research concerns arise when:', ['Legitimate science could be misapplied; oversight and training matter', 'Only agricultural genetics matter (false)', 'Physics has no ethics (false)', 'All experiments are automatically safe'], 'A', ''),
          P('Access and benefit sharing (CBD/Nagoya themes) relates to:', ['Fairness when commercializing biodiversity-derived resources and traditional knowledge (high-level survey)', 'Mining asteroids exclusively', 'Banning all taxonomy (false)', 'Eliminating conservation'], 'A', ''),
          P('Informed consent requires:', ['Voluntary participation with understandable risk/benefit disclosure (IRB/ethics committee frameworks)', 'Coercion of vulnerable groups', 'Waiving consent for everyone automatically', 'Publishing personal genomes without permission'], 'A', ''),
          P('GMO labeling debates connect to:', ['Consumer autonomy, transparency, and public trust—not only molecular “safety” assessments', 'A single universal cultural answer in all countries', 'Banning all labeling always', 'Ignoring farmer livelihoods (undesirable)'], 'A', ''),
          P('Gene drives (headline level) raise governance questions about:', ['Ecological reversibility, containment, and equity across communities', 'Whether meiosis exists (settled)', 'Whether DNA exists (settled)', 'Eliminating all vector mosquitoes instantly without trade-offs (oversimplified)'], 'A', ''),
          P('Biosecurity for pathogen collections includes:', ['Access controls, training, inventory audits, and cybersecurity for sensitive sequence data (overview)', 'Posting live cultures publicly without safeguards (dangerous)', 'Ignoring insider threats (dangerous)', 'Banning all influenza research universally (oversimplified)'], 'A', ''),
          P('Environmental ethics may contrast:', ['Intrinsic value of species/ecosystems versus instrumental human-centered benefits (philosophical frameworks)', 'Science versus mathematics (off-topic)', 'Only GDP growth metrics', 'Denial of ecology as a discipline (false)'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 6 Quiz 4 — Conservation',
        problems: [
          P('The IUCN Red List communicates:', ['Relative extinction risk using standardized criteria (not just “rare”)', 'Stock market performance', 'Hospital triage colors only', 'Exam letter grades'], 'A', ''),
          P('Protected areas may underperform if:', ['Enforcement, funding, or community livelihood alternatives are inadequate (context matters)', 'They are automatically sufficient without management (often false)', 'Biodiversity matters (false—they matter, but governance is key)', 'Tourism never exists (false)'], 'A', ''),
          P('Ex situ conservation (zoos, seed banks) can complement in situ efforts because:', ['It is a backup against catastrophic loss but cannot preserve all ecosystem processes', 'It replaces wild habitats completely (undesirable as sole strategy)', 'It eliminates genetic diversity (false if managed well)', 'It requires zero ethics or welfare standards (false)'], 'A', ''),
          P('Wildlife corridors can reduce:', ['Isolation and inbreeding by allowing movement between patches (design and stewardship matter)', 'All human–wildlife conflict automatically (false—can be complex)', 'The need for any protected core areas (often still needed)', 'Rainfall globally (false)'], 'A', ''),
          P('Population viability analysis uses models to:', ['Estimate extinction risk under scenarios and compare management options (uncertainty remains)', 'Predict the future with certainty like prophecy', 'Replace field biology entirely', 'Ignore genetics (often wrong in small populations)'], 'A', ''),
          P('Habitat restoration often needs:', ['Long-term monitoring, native species, invasive control, and hydrology repair—not one-off photo events only', 'Pouring concrete uniformly', 'Releasing random exotic ornamentals without risk assessment (risky)', 'Ignoring local communities (often undermines success)'], 'A', ''),
          P('Payment for ecosystem services can fail if:', ['Monitoring is weak, benefits are captured by elites, or tenure rights are unclear (governance matters)', 'It always solves poverty automatically', 'Science is unnecessary', 'Forests have no value (false)'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 6 Quiz 5 — Sustainability',
        problems: [
          P('SDGs link health and environment partly because:', ['Ecosystem services, pollution, and climate affect nutrition and disease burdens (nexus thinking)', 'They are unrelated domains', 'Biodiversity is purely aesthetic', 'Climate affects only polar bears (false)'], 'A', ''),
          P('A circular economy aims to:', ['Reduce leakage of materials, encourage reuse/recycling, and redesign systems—not only “more waste” linear flow', 'Maximize single-use plastics', 'Ignore energy laws', 'Reject chemistry (false)'], 'A', ''),
          P('Climate-smart agriculture (high level) seeks synergies among:', ['Productivity, resilience, and mitigation where feasible (trade-offs exist)', 'Only yield without environmental limits', 'Only mitigation with no food security', 'Eliminating all livestock globally as a mandatory universal rule (not a generalization)'], 'A', ''),
          P('“Blue carbon” habitats such as mangroves:', ['Store carbon in sediments and protect coasts—globally important though area-limited', 'Absorb all anthropogenic CO2 instantly (false)', 'Are unrelated to fisheries nursery habitat (often false)', 'Only occur in deserts (false)'], 'A', ''),
          P('Environmental change can influence migration and displacement through:', ['Interacting drivers (drought, storms, livelihood stress—not single-factor oversimplification)', 'Only economic preferences unrelated to environment (often incomplete)', 'A denial that climate exists (anti-science)', 'A guarantee that biology class never touches social science (false—interdisciplinary)'], 'A', ''),
          P('Citizen science air-quality monitoring can:', ['Expand evidence for advocacy—if devices are calibrated/interpreted carefully', 'Replace regulatory monitoring without quality assurance (risky)', 'Prove causality alone from one sensor (often insufficient)', 'Measure DNA sequences (different tool)'], 'A', ''),
          P('Restoration projects succeed more often when they:', ['Include local knowledge, monitoring, adaptive management, and fair benefit-sharing', 'Ignore invasive species management', 'Plant random species without ecology', 'Displace communities without consent'], 'A', ''),
        ],
      },
    ],
  },
];
