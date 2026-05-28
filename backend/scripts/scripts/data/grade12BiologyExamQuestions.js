/**
 * Five university-entrance-style MCQs per Grade 12 Biology topic (Natural stream).
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  switch (`${c}-${t}`) {
    case '0-0':
      return [
        Q('“Descent with modification” means lineages:', ['Change over generations from common ancestors', 'Stay identical forever', 'Obey Lamarckian stretching as the sole mechanism', 'Ignore evidence from fossils'], 'A'),
        Q('Natural selection is best summarized as:', ['Differential reproduction of heritable variants affecting survival and reproduction', 'Organisms choosing goals teleologically', 'Instant perfection in one generation', 'Equal fitness for all traits always'], 'A'),
        Q('Artificial selection demonstrates that:', ['Variation plus deliberate breeding can change allele frequencies rapidly', 'DNA cannot change', 'Only wild populations evolve', 'Technology is irrelevant to genetics'], 'A'),
        Q('Scientific “theory” in evolution indicates:', ['A well-supported explanatory framework—not a casual guess', 'A fact that cannot be revised', 'A synonym for “hypothesis” only', 'Belief without evidence always'], 'A'),
        Q('Which is a common misconception?', ['Evolution equals “progress to perfection” (teleology mistake)', 'Species share ancestry in the tree of life', 'Variation exists in populations', 'Fossils provide historical evidence'], 'A'),
      ];
    case '0-1':
      return [
        Q('Fitness in evolution refers most directly to:', ['Reproductive success in a given environment (relative, context-dependent)', 'Physical strength only', 'Longevity without offspring', 'Body size always'], 'A'),
        Q('Stabilizing selection tends to:', ['Reduce extreme phenotypes when intermediates do best', 'Always favor one extreme tail', 'Increase variance without bound', 'Eliminate all mutations'], 'A'),
        Q('Directional selection often follows:', ['An environmental shift favoring one tail of a trait distribution', 'Perfect stability forever', 'Zero heritability', 'Lack of variation'], 'A'),
        Q('Gene flow tends to:', ['Homogenize allele frequencies between populations that exchange migrants', 'Always create instant new species without isolation', 'Stop all evolution', 'Occur only in plants'], 'A'),
        Q('Genetic drift is most consequential in:', ['Small populations where sampling error shifts allele frequencies', 'Infinite populations theoretically', 'Populations with unlimited migration always', 'Only polyploids always'], 'A'),
      ];
    case '0-2':
      return [
        Q('Prezygotic barriers act:', ['Before a zygote forms (e.g., temporal or behavioral isolation)', 'After hybrid viability fails', 'Only by hybrid sterility', 'Only in laboratory crosses'], 'A'),
        Q('Geographic isolation promotes allopatric speciation by:', ['Reducing gene flow so divergence can accumulate', 'Guaranteeing identical allele frequencies always', 'Removing mutation', 'Instantly fusing genomes'], 'A'),
        Q('Hybrid inviability is:', ['A postzygotic barrier if hybrid offspring fail to develop normally', 'A prezygotic behavioral barrier', 'Always evidence of identical species', 'Somatic cell fusion only'], 'A'),
        Q('Adaptive radiation often occurs when:', ['Ecological opportunity opens niches after colonization or extinction events', 'Environment is totally uniform forever', 'All species have identical traits', 'Mutation rates fall to zero'], 'A'),
        Q('Speciation is challenging to define in bacteria partly because:', ['Sex and “species” concepts differ from sexually reproducing eukaryotes', 'They cannot evolve (false)', 'They lack DNA (false)', 'They always share 100% identical genomes (false)'], 'A'),
      ];
    case '0-3':
      return [
        Q('Homology of tetrapod limbs is evidence for:', ['Shared ancestry with structural modification', 'Convergent evolution only (that’s analogy)', 'Identical ecological roles always', 'Independent invention without phylogeny'], 'A'),
        Q('Analogous structures arise via:', ['Convergence in similar environments—not shared deep homology of the trait in question', 'Shared embryonic tissues necessarily', 'Gene-for-gene identity typically', 'Vestigial loss only'], 'A'),
        Q('Molecular phylogenies use:', ['DNA/RNA/protein sequences with models of change to infer relationships cautiously', 'Only adult body size', 'Blood types alone forever', 'The periodic table only'], 'A'),
        Q('Plate tectonics–aware biogeography can explain:', ['Disjunct distributions once continents were connected or organisms dispersed across barriers', 'Identical communities everywhere always', 'Random placement of taxa without history', 'Why Pluto is a cell organelle (nonsense)'], 'A'),
        Q('A transitional fossil can illuminate:', ['Intermediate morphologies linking major groups (interpretations refine over time)', 'That evolution never occurs (false)', 'That fossils are irrelevant (false)', 'That species never go extinct (false)'], 'A'),
      ];
    case '0-4':
      return [
        Q('Mass extinction events can:', ['Remove dominant lineages and reshape ecological opportunity', 'Happen only in fiction', 'Guarantee diversity always rises instantly', 'Stop natural selection permanently'], 'A'),
        Q('Co-evolution can produce:', ['Reciprocal evolutionary change between interacting species (arms races, mutualisms)', 'Species that never influence each other (often false in tight interactions)', 'Identical genomes across kingdoms', 'No variation'], 'A'),
        Q('Human–chimp genomic similarity (high level) supports:', ['Recent shared ancestry with substantial lineage-specific changes since divergence', 'Zero relatedness (false)', 'Identical phenotypes (false)', 'No genes shared (false)'], 'A'),
        Q('Punctuated equilibrium (introductory) contrasts with strict gradualism by emphasizing:', ['Long stasis with relatively rapid change in some lineages in the fossil record (debate exists)', 'That evolution never happens in bursts (false)', 'That fossils are useless (false)', 'That species never persist long (often false)'], 'A'),
        Q('Hominin evolution is discussed responsibly by emphasizing:', ['Evidence from fossils, artifacts, and genomes—not a simplistic linear “ladder” to humans', 'That modern humans are unrelated to other primates (false)', 'That culture cannot interact with biology (false)', 'That no research ethics apply (false)'], 'A'),
      ];
    case '1-0':
      return [
        Q('Population density is:', ['Individuals per unit area or volume (defined habitat)', 'Birth rate minus death rate only', 'Carrying capacity K always', 'The exponential constant r only'], 'A'),
        Q('Uniform dispersion may arise from:', ['Territorial interactions that space individuals apart (species-dependent)', 'Random placement always', 'Clumped resources always leading to clumping (different case)', 'Passive diffusion only in liquids'], 'A'),
        Q('Survivorship Type III patterns often show:', ['Very high early mortality and a few long-lived survivors (many propagules strategy)', 'Low juvenile mortality (Type I pattern)', 'Constant mortality at every age (Type II pattern)', 'Immortal individuals'], 'A'),
        Q('A life table tracks:', ['Age-specific survivorship and fecundity (demographic bookkeeping)', 'Trophic position only', 'Nucleotide substitutions only', 'Climate only'], 'A'),
        Q('Mark–recapture estimates assume (among caveats):', ['Marks can be detected; mixed assumptions about closure and equal catchability (teaching awareness)', 'Infinite population size always', 'No migration ever', 'Every animal is always recaptured'], 'A'),
      ];
    case '1-1':
      return [
        Q('Exponential growth is most likely when:', ['Resources are abundant and density dependence is weak (idealized model)', 'Carrying capacity effects dominate immediately', 'The population is at K already', 'Birth rate is zero'], 'A'),
        Q('Logistic growth levels off because:', ['Density-dependent factors intensify as N approaches K (simplified teaching)', 'Exponential growth never slows (false)', 'Mutation stops (false)', 'Energy appears from nowhere (violates thermodynamics)'], 'A'),
        Q('An Allee effect can hurt a population when:', ['Very low density reduces mating encounters or cooperative behaviors (small-N risk)', 'Carrying capacity is infinite', 'Predation disappears entirely', 'Heritability is always zero'], 'A'),
        Q('Environmental resistance includes factors such as:', ['Food limits, disease, and competition (density-dependent themes)', 'Gravity constant of Earth only', 'Species concepts only', 'Pluto’s orbit (irrelevant)'], 'A'),
        Q('Harvesting near simplistic MSY ideas (classroom reminder) conflicts with reality because:', ['Recruitment varies stochastically and ecosystems are dynamic (modern fisheries science critiques MSY naivete)', 'Fish never reproduce (false)', 'K is infinite in oceans always (false)', 'Trophic levels do not exist (false)'], 'A'),
      ];
    case '1-2':
      return [
        Q('The r/K continuum is best taught as:', ['A helpful stereotype that masks real ecological continua and context', 'A rigid law for every species', 'Only about potassium nutrients (false pun)', 'A measure of photosynthesis'], 'A'),
        Q('Semelparity vs iteroparity illustrates:', ['Trade-offs between one big reproductive episode vs repeated episodes across life', 'That all organisms are annual plants', 'That parental care never exists', 'That fungi have seeds'], 'A'),
        Q('Parental investment theory highlights:', ['Trade-offs between offspring number and per-offspring resources (broadly)', 'That bigger clutch size never has costs (false)', 'That survival is irrelevant (false)', 'Only cold-blooded animals have trade-offs (false)'], 'A'),
        Q('Bet-hedging strategies may evolve when:', ['Environmental variance makes diversified timing or dormancy advantageous stochastically (introductory)', 'The environment is perfectly predictable forever', 'Mutation rate is zero', 'There is only one food item globally'], 'A'),
        Q('Senescence and late-life decline illustrate that evolution shapes:', ['Life history trade-offs more than “genes for aging” as simple independent traits (research frontier awareness)', 'Immortality for all lineages (false)', 'Zero overlap between ecology and physiology (false)', 'Mitosis in bacteria primarily (wrong domain)'], 'A'),
      ];
    case '1-3':
      return [
        Q('Exploitative competition occurs when:', ['Species share a limiting resource indirectly (reduced availability)', 'Two individuals wrestle physically only', 'Predators eat prey (trophically related but not the same term)', 'Mutualism benefits both with no cost (different interaction)'], 'A'),
        Q('Lotka–Volterra predator–prey models predict:', ['Oscillations under simple assumptions (real communities add complexity)', 'Immediate steady equilibrium always', 'Predators always go extinct instantly', 'Prey evolve photosynthesis'], 'A'),
        Q('Müllerian mimicry involves:', ['Harmful species sharing a warning signal to reinforce predator learning', 'A palatable mimic and an unpalatable model (Batesian pattern)', 'Camouflage crypsis only', 'Cleaning symbiosis on reefs'], 'A'),
        Q('Keystone species effects illustrate:', ['Disproportionate ecological impact relative to biomass (classic sea star example)', 'That only apex predators matter ever', 'That biomass equals importance always', 'No indirect effects exist'], 'A'),
        Q('Trophic cascades can occur when:', ['Changes at one trophic level indirectly reshape distant levels (top-down or bottom-up contexts)', 'Energy pyramids become circular', 'Producers eat apex predators usually', 'Detritus channels vanish'], 'A'),
      ];
    case '1-4':
      return [
        Q('Primary succession starts where:', ['New substrate lacks established soil (e.g., new lava flows) in the classical story', 'Abandoned farmland with seed banks (usually secondary)', 'Mature forest interior only', 'Ocean vents with fish larvae only'], 'A'),
        Q('Secondary succession often happens after:', ['Disturbance that leaves soil/seed bank (e.g., many fires or farm abandonment)', 'Bare rock with no soil (primary)', 'Snowball Earth forming instantly today', 'Instant climax with no species turnover'], 'A'),
        Q('Facilitation in succession means early species:', ['Can improve conditions for later colonists (varies by system)', 'Always poison the soil for everyone later', 'Guarantee inhibition always', 'Never die'], 'A'),
        Q('Intermediate disturbance hypothesis proposes:', ['Moderate disturbance can sometimes peak diversity by preventing competitive exclusion (context dependent)', 'Zero disturbance always maximizes diversity', 'Maximum disturbance always maximizes diversity', 'Disturbance never matters'], 'A'),
        Q('Restoration ecology may fail without:', ['Long-term monitoring, invasive control, and social participation (adaptive management)', 'Only one tree-planting ceremony', 'Soil presence', 'Sunlight'], 'A'),
      ];
    case '2-0':
      return [
        Q('Energy enters most ecosystems via:', ['Primary producers fixing carbon (photosynthesis or chemosynthesis)', 'Heat from Earth’s core as primary production (mostly not)', 'Gravity as food', 'Moonlight as primary energy currency for ecosystems'], 'A'),
        Q('Why food chains are short energetically (teaching summary):', ['Energy losses to respiration and waste at each transfer thermodynamics', 'Energy is created at each step', 'All biomass becomes apex predators', 'Producers consume animals primarily'], 'A'),
        Q('GPP differs from NPP because:', ['NPP subtracts plant respiration from gross photosynthetic fixation (introductory definitions)', 'They are identical always', 'NPP measures only animals', 'GPP means only nighttime respiration'], 'A'),
        Q('Biomass pyramids can be inverted temporarily when:', ['Producer biomass turns over faster than it accumulates (e.g., some aquatic systems snapshot vs flux)', 'They are never inverted', 'Only in deserts', 'Because energy pyramids invert (generally they don’t)'], 'A'),
        Q('Detritus-based (“brown”) food chains matter because:', ['Most ecosystems recycle carbon and nutrients through decomposers', 'All energy skips decomposers', 'Only green plants count as energy pathways', 'Fungi are not heterotrophs (false)'], 'A'),
      ];
    case '2-1':
      return [
        Q('Ecological efficiency between trophic levels is often low because:', ['Energy is lost as heat in respiration and uneaten/unassimilated material (rule-of-thumb 10% teaching)', 'Efficiency is always 100%', 'Only water is lost', 'Trophic levels do not exist'], 'A'),
        Q('Secondary productivity refers to:', ['Heterotroph biomass increase over time (consumers)', 'Plant growth only (primary productivity)', 'Soil mineral mass only', 'Fossil fuel formation only'], 'A'),
        Q('NDVI from satellites is a coarse proxy for:', ['Green vegetation vigor—not identical to field NPP without calibration', 'Exact grams of carbon per m² always without error', 'Ocean salinity primarily', 'Earthquake risk'], 'A'),
        Q('Turnover rate relates productivity to:', ['Standing biomass as a residence-time concept (P/B frameworks)', 'Population density only (different idea)', 'Mutation rate only', 'Latitude only'], 'A'),
        Q('Human appropriation of productivity implies:', ['Agriculture diverts NPP from wild food webs with sustainability trade-offs (conceptual)', 'Humans photosynthesize most of their energy', 'Earth doubled solar output in 1800 (false)', 'Cows are primary producers (false)'], 'A'),
      ];
    case '2-2':
      return [
        Q('Burning fossil carbon accelerates the carbon cycle partly because:', ['Geologically stored carbon returns to the active atmosphere–ocean–biosphere pool quickly', 'Photosynthesis removes all fossil CO2 instantly', 'Carbon cannot dissolve in seawater (false)', 'Nitrogen replaces carbon in Rubisco (false)'], 'A'),
        Q('Nitrogen fixation supplies ecosystems with:', ['Biologically available nitrogen from N₂ gas (prokaryotic nitrogenase pathways)', 'N₂ directly to plant leaves without enzymes (false)', 'Phosphorus from air (mostly not)', 'Ozone as a fertilizer (false)'], 'A'),
        Q('Denitrification returns nitrogen to the atmosphere mainly as:', ['N₂ gas under low-oxygen conditions in soils and sediments (simplified)', 'NH₃ always', 'NO only always', 'Pure O₂'], 'A'),
        Q('Phosphorus is often limiting in freshwater eutrophication partly because:', ['It lacks a major atmospheric reservoir like N₂—local runoff dominates', 'It is the most abundant gas in air (false)', 'Plants cannot use phosphate (false)', 'Oceans contain zero phosphate (false)'], 'A'),
        Q('Ocean acidification is linked to:', ['CO₂ dissolving and shifting carbonate chemistry affecting many calcifiers (introductory)', 'Ozone depletion primarily (different issue)', 'Nitrification only', 'Increase in atmospheric O₂ fraction massively (not the main story)'], 'A'),
      ];
    case '2-3':
      return [
        Q('Biomes broadly map to:', ['Climate envelopes (temperature/precipitation patterns) interacting with soils and disturbance', 'Random placement ignoring physics', 'Country borders only', 'DNA barcodes only'], 'A'),
        Q('Ethiopian highland ecosystems are diverse partly because:', ['Elevation gradients create heterogeneous habitats and endemism (survey appreciation)', 'They are identical to coral reefs everywhere', 'They lack water variability (often false)', 'They contain only one species'], 'A'),
        Q('Savanna ecosystems are often shaped by:', ['Seasonal rainfall and fire–herbivory interactions (broad teaching)', 'Continuous closed canopy rainforest climate', 'Permanent sea ice', 'Only underground fungi as producers (false)'], 'A'),
        Q('Montane forests can regulate downstream:', ['Water yield and sediment—watershed services linked to agriculture and hydropower (generic framing)', 'Only lunar tides', 'Global magnetic field mainly', 'Stratosphere ozone production mainly'], 'A'),
        Q('Biome shifts under climate change may include:', ['Species tracking suitable climate upslope/latitude if dispersal/pathways allow', 'Frozen biome maps forever', 'Only marine shifts (false)', 'No genetic variation (false)'], 'A'),
      ];
    case '2-4':
      return [
        Q('Nutrient runoff to lakes can trigger:', ['Eutrophication with algal blooms and oxygen sag as microbes decompose organic matter', 'Instant purification', 'Higher dissolved oxygen always during the bloom collapse phase (often false)', 'Elimination of all bacteria (false)'], 'A'),
        Q('Habitat fragmentation tends to:', ['Increase edge effects and isolate populations, raising extinction risk (context-dependent)', 'Always increase interior habitat', 'Eliminate invasive species automatically', 'Stop gene flow entirely in every case (often false; corridors help)'], 'A'),
        Q('Biological magnification raises concerns for:', ['Lipophilic pollutants accumulating up food chains (classic teaching examples)', 'Dissolved oxygen increasing up the chain (generally not the pattern)', 'Calcium in bones only', 'Gravity'], 'A'),
        Q('Overgrazing can accelerate:', ['Soil erosion and vegetation loss—especially on steep slopes without management', 'Forests without any human involvement always', 'Infinite carrying capacity', 'Nitrogen fixation in livestock rumen only (wrong frame)'], 'A'),
        Q('Citizen science can strengthen environmental monitoring if:', ['Protocols address quality control and representativeness (not rumor-only data)', 'Social media alone is enough verification always', 'Statistics are forbidden', 'Peer review never matters'], 'A'),
      ];
    case '3-0':
      return [
        Q('Xylem transport relies on a cohesion–tension model where:', ['Water columns under tension are sustained partly by hydrogen bonding (survey)', 'Roots actively push water to leaves like a syringe primarily (mostly not in that simplistic way)', 'Phloem pushes water upward only', 'Osmosis never matters (false)'], 'A'),
        Q('Phloem moves mainly:', ['Sugars and other solutes in sink–source pressure-flow contexts (introductory)', 'Bulk water-only ascent without sugars (xylem theme)', 'DNA from roots to leaves', 'O₂ as the main transported solute always'], 'A'),
        Q('Casparian strip function includes:', ['Regulating passage into the vascular cylinder via endodermal control points', 'Accelerating leakage into cortex always', 'Making stomata bigger', 'Producing pollen'], 'A'),
        Q('Monocots vs eudicots differ in stem organization partly because:', ['Many monocots lack lateral meristem secondary thickening in the classic pattern', 'All eudicots are trees always (false)', 'Monocots never have vascular bundles (false)', 'Monocots lack phloem (false)'], 'A'),
        Q('Trichomes can influence:', ['Leaf boundary layer, defense, and sometimes water retention (species-dependent)', 'Rubisco content directly always', 'Mitochondrial DNA segregation', 'Action potentials in animals'], 'A'),
      ];
    case '3-1':
      return [
        Q('Essential macronutrients for plants prominently include:', ['N, P, K (and Ca, Mg, S) in textbook lists', 'Only Fe and Mn as macronutrients (mostly micronutrients)', 'Gold', 'Helium'], 'A'),
        Q('Mycorrhizae can improve plant uptake especially of:', ['Phosphorus via fungal hyphae in many mutualisms (overview)', 'Atmospheric N₂ fixation in all mycorrhizae (often false; that’s rhizobia in legumes)', 'Only potassium from rain (false frame)', 'Sunlight capture for the fungus photosynthesis (false)'], 'A'),
        Q('Salinization under poor irrigation management can occur when:', ['Evaporation concentrates salts and/or high water tables bring salts up', 'Freshwater always flushes salts instantly', 'Plants stop transpiring entirely', 'CEC becomes infinite in sand only (nonsense)'], 'A'),
        Q('Soil organic matter generally improves:', ['Water holding capacity, aggregation, and microbial habitat (broad pattern)', 'Salinity automatically always (false)', 'Bulk density always upward forever (often worsens if lost)', 'Earthquake magnitude'], 'A'),
        Q('Wilting near permanent wilting point means:', ['Soil water too low for plants to recover even in saturated humidity air (conceptual)', 'Stomata open maximally for fun', 'Rubisco stops in all cells everywhere always (oversimplified)', 'Roots become photosynthetic'], 'A'),
      ];
    case '3-2':
      return [
        Q('Photorespiration becomes more costly when:', ['Rubisco oxygenates RuBP and stomata close increasing O₂/CO₂ in the leaf (C3 context)', 'CO₂ is abundant and temperature is very low always', 'CAM plants close stomata only at night (different strategy)', 'Mitochondria export CO₂ to chloroplasts always (misleading)'], 'A'),
        Q('The Calvin cycle is located in the:', ['Chloroplast stroma (carbon fixation)', 'Thylakoid lumen (primarily light reactions)', 'Mitochondrial outer membrane', 'Nucleolus'], 'A'),
        Q('CAM photosynthesis is an adaptation often associated with:', ['Temporal separation of CO₂ uptake and Calvin cycle to conserve water (succulent contexts)', 'Living only in deep ocean', 'Removing chlorophyll', 'Eliminating Rubisco (false)'], 'A'),
        Q('Mitochondrial oxygen in respiration is best framed as:', ['Terminal electron acceptor in ETC (survey)', 'Direct source of carbon backbones for sugar synthesis (false)', 'The product of Calvin cycle (false)', 'What PSI uses directly (mostly not)'], 'A'),
        Q('Photophosphorylation in chloroplasts produces:', ['ATP using thylakoid proton gradients (chemiosmosis)', 'Glucose directly without Calvin cycle (false)', 'Peptidoglycan for plant walls (false)', 'Chitin for fungal walls in plants (false)'], 'A'),
      ];
    case '3-3':
      return [
        Q('Pollination is:', ['Transfer of pollen to stigma', 'Fusion of gametes (fertilization)', 'Seed dispersal', 'Meiosis inside spores—confused topic'], 'A'),
        Q('Double fertilization in angiosperms yields:', ['A zygote and endosperm precursor nuclei (classic teaching)', 'Two sperm fused with one egg only (incomplete retelling)', 'Only pollen tubes always', 'Haploid endosperm always (often false—triploid typical)'], 'A'),
        Q('A fruit typically develops from:', ['Ovary tissues after fertilization in simple cases (many variations exist)', 'Anther wall always', 'Root cap', 'Nectar gland only'], 'A'),
        Q('Apomixis refers broadly to:', ['Asexual seed formation without fertilization in some lineages', 'Self-incompatibility', 'Double fertilization', 'Spore dispersal in ferns only'], 'A'),
        Q('Wind pollination often associates with:', ['Abundant pollen and reduced showy petals in many species (not universal but textbook contrast)', 'Large nectar rewards to insects only', 'Underwater pollen in all wind plants', 'Bacterial conjugation'], 'A'),
      ];
    case '3-4':
      return [
        Q('Auxin redistribution can underlie:', ['Phototropic differential growth in shoots (classical teaching)', 'Stomatal closure as primary auxin story (often ABA-focused)', 'Nitrogenase activity', 'Viral replication'], 'A'),
        Q('Gibberellins often promote:', ['Stem elongation and seed germination in many plants', 'Ethylene-driven leaf abscission primarily (ethylene’s domain)', 'CAM induction universally (false)', 'Photosystem II assembly in animals (false)'], 'A'),
        Q('Ethylene is strongly linked to:', ['Ripening and senescence pathways (fruit contexts)', 'Phototropism mechanisms primarily', 'Primary water ascent in xylem', 'N2 fixation'], 'A'),
        Q('Photoperiodism affects flowering via:', ['Light perception and circadian integration (survey)', 'Random calendar days only', 'Soil potassium only', 'Earthquake triggers'], 'A'),
        Q('Systemic acquired resistance is a plant defense theme involving:', ['Long-distance signaling after localized attack (jasmonate/salicylate family concepts—survey)', 'Antibody secretion like mammals', 'Phagocytosis by plant macrophages (false analogy)', 'Photosynthesis increase only'], 'A'),
      ];
    case '4-0':
      return [
        Q('Bacterial binary fission yields:', ['Two daughter cells after chromosome segregation and septation', 'Four haploid gametes', 'A virus', 'A zygote'], 'A'),
        Q('Horizontal gene transfer can spread antibiotic resistance via:', ['Plasmids and other mobile elements (conjugation/transformation/transduction overview)', 'Mitosis in animals', 'Photosynthesis', 'Vacuole fusion'], 'A'),
        Q('Extremophiles illustrate:', ['Life spans broad physicochemical conditions; enzymes used in biotech sometimes', 'All life requires oxygen (false)', 'Archaea are not distinct from bacteria genetically (misleading in many textbooks but “prokaryote” umbrella used early then refined)', 'Viruses have peptidoglycan (false)'], 'A'),
        Q('Biofilms matter medically because they:', ['Increase tolerance to antibiotics and host defenses in matrix communities', 'Dissolve instantly in water always', 'Only form on glass in labs', 'Consist only of one clonal cell always'], 'A'),
        Q('Quorum sensing allows:', ['Gene regulation coordinated by cell density signals (virulence/luminescence examples)', 'Measuring altitude for flight', 'Meiosis in bacteria', 'Photosynthetic antenna assembly only'], 'A'),
      ];
    case '4-1':
      return [
        Q('Antibiotics usually fail against viruses because:', ['Viruses use host machinery and lack bacterial wall targets typical of many antibiotics', 'Viruses are larger than bacteria always', 'Viruses have peptidoglycan (false)', 'Viruses lack nucleic acids (false)'], 'A'),
        Q('Retroviruses use reverse transcriptase to:', ['Make DNA from an RNA genome (HIV exemplar—public health relevance)', 'Replicate host DNA semiconservatively by the same enzyme', 'Translate viral proteins without ribosomes', 'Fix nitrogen'], 'A'),
        Q('A lysogenic cycle can involve:', ['Prophage integration with potential later induction (phage teaching)', 'Immediate lysis only always', 'Meiosis', 'Binary fission of the virion'], 'A'),
        Q('Seasonal influenza vaccine updates relate partly to:', ['Changing antigenic properties via drift/shift (introductory vocabulary)', 'Stable proteins forever unchanged', 'Bacterial conjugation', 'Plant photoperiod only'], 'A'),
        Q('Emerging zoonoses are increasing partly due to:', ['Land-use change, travel/trade, and pathogen evolution (One Health framing)', 'The absence of mutation in RNA viruses (false)', 'Only cold climates (false)', 'Complete absence of wildlife contact (often false)'], 'A'),
      ];
    case '4-2':
      return [
        Q('Plasmodium sexual recombination occurs in the:', ['Mosquito vector (life-cycle survey)', 'Human RBC only', 'Soil amoebae', 'Plant chloroplast'], 'A'),
        Q('Trypanosomiasis involves a different vector from malaria largely because:', ['Pathogen life cycle and transmission ecology differ (tsetse vs anopheles)', 'Vectors are irrelevant (false)', 'All protozoa are identical (false)', 'Fungi transmit malaria (false)'], 'A'),
        Q('Fungal cell walls commonly contain:', ['Chitin (contrasted with plant cellulose in teaching)', 'Peptidoglycan like bacteria', 'Silica shells like diatoms', 'Only phospholipids with no wall (often false)'], 'A'),
        Q('Lichens demonstrate:', ['Symbiosis between fungi and photosynthetic partners (alga/cyanobacterium)', 'Pure animal–plant hybrid', 'A virus-only infection of bark', 'Nitrogen fixation always in every lichen thallus without exception (often false; some have N-fixing partners)'], 'A'),
        Q('Opportunistic fungal disease risk rises with:', ['Immunosuppression (neutral, ethical framing)', 'Perfectly healthy hosts only', 'High altitude alone always', 'Drinking only distilled water'], 'A'),
      ];
    case '4-3':
      return [
        Q('Incidence measures:', ['New cases per population-time', 'Total prevalence at a snapshot', 'Case fatality only', 'R0 only'], 'A'),
        Q('A reservoir host can:', ['Maintain a pathogen in nature with spillover potential', 'Never include animals (false for many zoonoses)', 'Guarantee symptoms in all infections', 'Eliminate need for vectors always'], 'A'),
        Q('Vector control may include:', ['Bed nets, larviciding, environmental management—integrated vector management concepts', 'Boiling water for vector-borne disease only as sole solution (often incomplete)', 'MRI scans', 'Increasing CO₂ to repel mosquitoes (nonsense)'], 'A'),
        Q('Screening tests differ from diagnostic tests partly because:', ['Prevalence and test error change predictive values (Bayesian intuition)', 'They are always identical', 'Screening is only for plants', 'Diagnostics never use labs'], 'A'),
        Q('Surveillance aims to:', ['Detect changes early for response (ethics and privacy safeguards matter)', 'Replace clinical judgement always', 'Publish personal identifiers widely without consent', 'Stop science'], 'A'),
      ];
    case '4-4':
      return [
        Q('β-lactam antibiotics classically target:', ['Peptidoglycan cross-linking in bacterial cell walls', '80S ribosomes as primary target', 'Viral reverse transcriptase', 'Chloroplast Rubisco'], 'A'),
        Q('Resistance spreads faster when:', ['Selection pressure pairs with horizontal gene transfer (plasmids, integrons)', 'Drugs are unused always (usually less selection—not a universal statement but misuse selects)', 'Mutations never occur (false)', 'Only one bacterial cell exists'], 'A'),
        Q('Live attenuated vaccines can trade off:', ['Strong immunity vs contraindications in immunocompromised hosts and logistics', 'Zero side effects always', 'No immune memory', 'Perfect sterilizing immunity in all pathogens always'], 'A'),
        Q('WASH interventions reduce:', ['Many enteric disease burdens (water, sanitation, hygiene)', 'Airborne TB primarily as the sole mechanism', 'Genetic diseases', 'Need for any vaccination (false)'], 'A'),
        Q('One Health emphasizes:', ['Linked health of humans, animals, and ecosystems for zoonoses and food safety', 'Only hospital billing', 'Plant taxonomy exclusively', 'Marine biology exclusively'], 'A'),
      ];
    case '5-0':
      return [
        Q('PCR requires primers to:', ['Define the ends of the amplified DNA segment', 'Ligate two fragments only', 'Cut DNA at random', 'Synthesize proteins'], 'A'),
        Q('A cloning vector often includes:', ['Origin of replication and a selectable marker (overview)', 'The entire human genome necessarily', 'A plant cuticle gene as the only permitted insert', 'Telomeres only'], 'A'),
        Q('Metagenomics can study:', ['Community DNA without culturing every species (microbiomes)', 'Only one isolate on a petri dish always', 'Fossils without DNA', 'Stellar spectra'], 'A'),
        Q('CRISPR editing raises governance concerns partly because of:', ['Off-target effects and societal implications of heritable changes (high-level ethics)', 'Impossibility of cutting DNA (false)', 'No international discussion (false)', 'Only bacteria can be edited (false)'], 'A'),
        Q('Electrophoresis separates DNA largely by:', ['Size through a gel matrix (and sometimes conformation)', 'Color of bases', 'Atomic mass of carbon only', 'Whether a trait is "natural"'], 'A'),
      ];
    case '5-1':
      return [
        Q('Transcriptomics focuses on:', ['RNA expression across conditions/tissues', 'Only static genomic DNA sequence', 'Metabolites only', 'Fossil morphology only'], 'A'),
        Q('Proteomics emphasizes:', ['Proteins, modifications, and interactions—often not predictable solely from DNA', 'Only GC content', 'Only rRNA length', 'Weather forecasting'], 'A'),
        Q('Polygenic risk scores:', ['Aggregate many small-effect variants statistically with important limits and ethics debates', 'Predict destiny perfectly for everyone', 'Apply only to viruses', 'Eliminate environmental covariates entirely'], 'A'),
        Q('Genomic privacy risks can include:', ['Re-identification from databases and misuse of sensitive inference', 'No risks because DNA is anonymous always (oversimplified)', 'Only celebrity genomes matter', 'Genomes cannot reveal relatives (false)'], 'A'),
        Q('Multi-ancestry representation in databases matters because:', ['Risk estimates may miscalibrate if training data are skewed (equity/science)', 'Science requires only one population (false)', 'GWAS is useless (false)', 'Environment does not matter (false)'], 'A'),
      ];
    case '5-2':
      return [
        Q('Dual-use research worries arise when:', ['Beneficial tools could be misapplied—oversight and training matter', 'Physics has no ethics (false)', 'All experiments are risk-free', 'Biosafety levels are decorative only'], 'A'),
        Q('Informed consent requires:', ['Voluntary participation with understandable disclosure of risks/benefits (IRB/ethics frameworks)', 'Coercion of vulnerable groups', 'Publishing identifiable genomes without permission', 'Waivers for everyone automatically'], 'A'),
        Q('Benefit sharing (biodiversity conventions context) relates to:', ['Fairness when valuable genetic resources or knowledge are used commercially (high-level)', 'Mining asteroids only', 'Banning taxonomy', 'Ending conservation'], 'A'),
        Q('GMO approval processes often weigh:', ['Environmental risk, food safety, and socioeconomic impacts (jurisdiction-dependent)', 'Only taste tests in kitchens', 'Proof of absolute zero risk (unattainable)', 'No stakeholder input'], 'A'),
        Q('Biosecurity for pathogens includes:', ['Access control, training, audits, and secure data practices (overview)', 'Posting cultures publicly without safeguards', 'Ignoring insider threats', 'Stopping all influenza research everywhere always (oversimplified)'], 'A'),
      ];
    case '5-3':
      return [
        Q('The IUCN Red List primarily communicates:', ['Extinction risk categories using standardized criteria', 'Stock prices', 'Exam scores', 'Hospital triage colors only'], 'A'),
        Q('Wildlife corridors aim to reduce:', ['Isolation and inbreeding by improving movement between habitat patches', 'All human–wildlife conflict instantly (often complex)', 'Need for any protected core habitats (often false)', 'Rainfall'], 'A'),
        Q('Ex situ conservation complements in situ partly because:', ['It can be genetic insurance—but cannot replace ecosystem processes in the wild', 'Zoos eliminate need for protected areas always', 'Seed banks harm diversity always (false if well managed)', 'Captive breeding never helps (often false for some species)'], 'A'),
        Q('Population viability analysis uses models to:', ['Estimate extinction risk under scenarios and compare management options', 'Prophecy with certainty', 'Ignore genetics in small populations (often wrong scientifically)', 'Replace field ecology entirely'], 'A'),
        Q('Payment for ecosystem services can fail if:', ['Governance is weak, benefits are inequitable, or monitoring is absent', 'It always ends poverty automatically', 'Science is irrelevant', 'Forests provide no services (false)'], 'A'),
      ];
    case '5-4':
      return [
        Q('SDGs connect environment and health partly because:', ['Ecosystem services, pollution, and climate affect nutrition and disease burdens (nexus thinking)', 'They are unrelated domains by definition', 'Biodiversity is only cosmetic', 'Climate affects only polar bears (false)'], 'A'),
        Q('A circular economy emphasizes:', ['Reducing leakage, reusing materials, and redesign—not only linear take-make-waste', 'Maximizing single-use plastic', 'Rejecting chemistry (false)', 'Ignoring energy laws (impossible)'], 'A'),
        Q('Climate-smart agriculture seeks (broadly):', ['Productivity, resilience, and mitigation where feasible—trade-offs exist', 'Yield without any environmental consideration only', 'Mitigation with no food security focus only', 'One universal global livestock rule for every culture (oversimplified)'], 'A'),
        Q('“Blue carbon” ecosystems (mangroves/seagrass) can:', ['Store carbon in sediments and buffer coasts though global area is limited', 'Absorb all anthropogenic CO2 instantly', 'Have no fishery nursery roles (often false)', 'Occur only in deserts (false)'], 'A'),
        Q('Restoration success often depends on:', ['Long timelines, invasive control, monitoring, local participation, and adaptive management', 'One tree-planting photo event only', 'Random exotic plantings without risk assessment', 'Displacing local people without consent'], 'A'),
      ];
    default:
      return [
        Q('Which choice applies the core concept for this Grade 12 topic most directly?', ['Matches definition and scenario together', 'Imports unrelated mechanism', 'Reverses cause and effect', 'Uses a non-biological distractor'], 'A'),
        Q('When two answers look similar, prefer the one that:', ['Uses the pathway or structure emphasized in this unit', 'Adds unrelated jargon', 'Ignores the prompt scenario', 'Assumes “always” without evidence'], 'A'),
        Q('Exam-style distractors often seem plausible because:', ['They borrow half-true facts from nearby topics', 'They are pure gibberish', 'They repeat the stem verbatim', 'They are mathematically impossible'], 'A'),
        Q('Grade 12 Biology synthesis may connect:', ['Evolution, ecology, physiology, and applied biotech in Ethiopian development contexts', 'Only Latin names', 'Mineral hardness scales from geology unrelated', 'Internal combustion torque'], 'A'),
        Q('Responsible citizenship in biology includes:', ['Evidence-based reasoning about health, agriculture, and environment', 'Rejecting measurement', 'Memorizing unrelated dates only', 'Claiming science proves moral oughts automatically (naturalistic fallacy)'], 'A'),
      ];
  }
}

function buildExamQuestionsForTopic({ chapterIndex, topicIndex, topicName }) {
  const raw = pack(chapterIndex, topicIndex);
  return EC_YEARS.map((_, i) => {
    const q = raw[i];
    return {
      questionText: q.questionText,
      choices: q.choices,
      correctAnswer: q.correctAnswer,
      answerExplanation:
        q.answerExplanation ||
        `University entrance exam style item (Biology, Natural stream), aligned to “${topicName}”.`,
    };
  });
}

module.exports = {
  buildExamQuestionsForTopic,
  EC_YEARS,
};
