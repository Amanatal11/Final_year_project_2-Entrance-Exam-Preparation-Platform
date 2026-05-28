/**
 * Five university-entrance-style MCQs per Grade 9 Biology topic (Natural stream).
 * Attached to exam papers 2014–2018 for sorting; stems have no year prefix.
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  switch (`${c}-${t}`) {
    case '0-0':
      return [
        Q('Which describes biology most accurately?', ['Study of planets', 'Study of life and living organisms', 'Study of chemicals only', 'Study of rocks'], 'B'),
        Q('Applying science in agriculture best illustrates:', ['Astronomy', 'How biological knowledge supports food production', 'Metallurgy', 'Pure physics only'], 'B'),
        Q('A biologist might study all except:', ['Cell signaling', 'Star formation in nebulae', 'Photosynthesis', 'Immune responses'], 'B'),
        Q('Interdisciplinary biology often uses ideas from:', ['Only art history', 'Chemistry and physics', 'No other fields', 'Only philosophy'], 'B'),
        Q('Which is a central theme in modern biology?', ['Information flow in inheritance', 'Melting points of metals', 'Radio power', 'Engine torque'], 'A'),
      ];
    case '0-1':
      return [
        Q('The scientific method often begins with:', ['Publishing without data', 'Observation and questioning', 'Ignoring measurement', 'Skipping controls'], 'B'),
        Q('A hypothesis should be:', ['Untestable', 'Testable with evidence', 'Purely opinion', 'Always proven beforehand'], 'B'),
        Q('A controlled experiment compares:', ['Only two species names', 'A treatment group to a baseline control', 'Random units only', 'No variables'], 'B'),
        Q('Replication of trials helps:', ['Guarantee bias', 'Reduce effects of random error', 'Eliminate statistics', 'Remove graphs'], 'B'),
        Q('When data disagree with a hypothesis, scientists:', ['Ignore anomalies', 'Refine models and retest', 'Stop measuring', 'Change SI units arbitrarily'], 'B'),
      ];
    case '0-2':
      return [
        Q('Compound light microscopes use:', ['Gamma rays only', 'Light and glass lenses', 'Only electron beams in all modes', 'Sound waves'], 'B'),
        Q('Rough total magnification equals:', ['Objective ÷ eyepiece', 'Eyepiece × objective', 'Sum of weights only', 'Constant 40× always'], 'B'),
        Q('Resolution limits:', ['Brightness always', 'Ability to distinguish nearby details', 'Slide label font size', 'Room temperature only'], 'B'),
        Q('Low power first helps:', ['Melt the slide', 'Locate the specimen before high magnification', 'Kill cells immediately', 'Remove stains'], 'B'),
        Q('Coverslips are used to:', ['Increase bubbles only', 'Flatten samples and protect the objective', 'Burn specimens', 'Add oil always'], 'B'),
      ];
    case '0-3':
      return [
        Q('Living things typically share:', ['No metabolism', 'Growth and reproduction', 'Permanent stasis', 'Lack of organization'], 'B'),
        Q('Homeostasis refers to:', ['Constant external storms', 'Stable internal conditions despite change', 'Random temperatures inside', 'No feedback loops'], 'B'),
        Q('Population evolves when:', ['Only individuals choose to evolve', 'Allele frequencies change across generations', 'Rocks replicate', 'Cells lack DNA'], 'B'),
        Q('Response to stimuli differs from:', ['Simple noise drift', 'Coordinated signaling or behavior', 'Heat capacity of water only', 'Nuclear fusion'], 'B'),
        Q('Which hierarchical level is most inclusive?', ['Tissue', 'Biosphere', 'Organelle', 'Molecule of ATP'], 'B'),
      ];
    case '0-4':
      return [
        Q('Many organs working together form:', ['One organelle', 'An organ system', 'A single chromosome', 'A pure element'], 'B'),
        Q('A population includes:', ['All kingdoms at once', 'One species in an area', 'All rocks', 'All biomes globally'], 'B'),
        Q('Community definition includes:', ['Only sunlight', 'Multiple species populations interacting', 'One oak tree only', 'Inert gases only'], 'B'),
        Q('Ecosystem refers to:', ['Only plants in pots', 'Biotic and abiotic parts interacting', 'Only lakeshore pebbles', 'Only soil bacteria'], 'B'),
        Q('Several tissue types combine into:', ['One molecule', 'An organ', 'One ribosome', 'A kingdom label only'], 'B'),
      ];
    case '1-0':
      return [
        Q('Cell theory emphasizes that:', ['Viruses prove spontaneous generation', 'Cells are basic units of life', 'Proteins are the only genetic material', 'All cells lack membranes'], 'B'),
        Q('Prokaryotes differ from typical plant cells mainly by lacking:', ['Plasma membrane', 'Membrane-bound nucleus', 'Ribosomes', 'Cytoplasm'], 'B'),
        Q('Eukaryotes include:', ['Typical fungi, plant, and animal cells', 'Only viruses', 'Ice crystals', 'Prions only'], 'A'),
        Q('“Omnis cellula e cellula” supports:', ['Cells arise from pre-existing cells', 'Cells pop from broth always', 'No mitosis', 'Random mineral growth'], 'A'),
        Q('Which structures are absent in typical prokaryotes?', ['DNA and ribosomes', 'Membrane-bound mitochondria', 'Cytoplasm', 'Plasma membrane'], 'B'),
      ];
    case '1-1':
      return [
        Q('A rigid cell wall external to the membrane characterizes:', ['Typical animal cells', 'Typical plant cells', 'Mature human erythrocytes', 'Viruses'], 'B'),
        Q('Chloroplasts occur in:', ['Nerve axons', 'Photosynthetic plant cells', 'Cartilage only', 'Hair keratinocytes without plastids'], 'B'),
        Q('Which is true of many animal cells?', ['They have a large central vacuole like a plant', 'They lack a rigid cellulose wall', 'They always have chloroplasts', 'They lack mitochondria'], 'B'),
        Q('The nucleus stores:', ['Genetic instructions in chromatin', 'Only starch reserves', 'Primary photosynthetic pigments in its matrix', 'Cell wall cellulose'], 'A'),
        Q('Membrane-bound organelles are a hallmark of:', ['Typical prokaryotes', 'Eukaryotes', 'Viroids inside host only', 'Ice'], 'B'),
      ];
    case '1-2':
      return [
        Q('The plasma membrane’s framework is:', ['Pure polysaccharide', 'Phospholipid bilayer', 'DNA double helix sheet', 'Iron filings'], 'B'),
        Q('Cholesterol in animal membranes tends to:', ['Remove all proteins', 'Modulate fluidity', 'Conduct photosynthesis', 'Encode RNA'], 'B'),
        Q('Which crosses lipid cores more readily?', ['Small nonpolar molecules', 'Free hydrated ions without channels', 'Starch polymers', 'DNA strands'], 'A'),
        Q('Glycoproteins on the surface can serve as:', ['Nuclear pores', 'Recognition sites', 'Ribosome cores', 'Thylakoid stacks'], 'B'),
        Q('Membranes are described as fluid mosaic because:', ['They are solid ice', 'Lipids and proteins move laterally to a degree', 'They never change composition', 'They lack bilayers'], 'B'),
      ];
    case '1-3':
      return [
        Q('Ribosomes are sites of:', ['Lipid bilayer assembly', 'Protein synthesis', 'DNA replication in cytosol only in prophase', 'ATP from light'], 'B'),
        Q('Mitochondria participate in:', ['Oxygenic light capture', 'Aerobic ATP generation pathways', 'Cell wall formation in animals', 'Calvin cycle only'], 'B'),
        Q('Rough ER is associated with:', ['Secretory and membrane proteins entering pathway', 'Thylakoid stacking', 'Homologous pairing', 'Binary fission of nucleus'], 'A'),
        Q('Golgi modifies molecules for:', ['Secretion and membrane insertion', 'Transcription in nucleus replicate DNA', 'Photosynthetic antenna only', 'Crossing over'], 'A'),
        Q('Peroxisomes often:', ['Split water in photosystem II', 'Oxidize fatty acids and detoxify some compounds', 'Pack starch in leaves', 'Duplicate centrioles'], 'B'),
      ];
    case '1-4':
      return [
        Q('Chromatin consists mainly of:', ['ATP polymers', 'DNA and histone proteins', 'Only ribosomal RNA', 'Cellulose fibers'], 'B'),
        Q('The nucleolus is prominent when a cell makes many:', ['Chlorophyll molecules', 'Ribosomal subunits', 'Actin in muscle striations in nucleus', 'Stomatal openings'], 'B'),
        Q('Nuclear envelope has:', ['No connection to ER', 'Pores regulating traffic', 'Photosynthetic pigments embedded', 'Peptidoglycan sheets'], 'B'),
        Q('Gene expression begins in nucleus with:', ['Fermentation only', 'Transcription usually for protein-coding genes', 'Translation before RNA exists', 'Replication of centrioles only'], 'B'),
        Q('mRNA exits nucleus to:', ['Be degraded instantly in pores', 'Reach ribosomes for translation', 'Store starch', 'Pump protons'], 'B'),
      ];
    case '2-0':
      return [
        Q('Diffusion is driven chiefly by:', ['Photosystem charge separation', 'Random thermal motion down gradients', 'Gravity across membranes only', 'Ion lasers'], 'B'),
        Q('Dynamic equilibrium at a membrane often means:', ['Zero molecular motion', 'No net flow even though particles still move', 'Only active transport', 'Ice formation'], 'B'),
        Q('Facilitated diffusion uses proteins and:', ['Requires ATP always', 'Moves solute down its electrochemical gradient typically', 'Only moves water as solute', 'Occurs in steel'], 'B'),
        Q('Channel proteins differ from carriers partly in:', ['Never conducting ions', 'Opening/closing or continuous pores versus conformational cycling', 'Synthesizing ATP', 'Storing genes'], 'B'),
        Q('Higher temperature within tolerable range often:', ['Freezes diffusion', 'Speeds diffusion rates', 'Eliminates gradients', 'Removes membranes'], 'B'),
      ];
    case '2-1':
      return [
        Q('If external solution is hypertonic to cytoplasm, animal cells often:', ['Swell and may lyse', 'Shrink (crenate)', 'Ignore water movement', 'Duplicate chromosomes instantly'], 'B'),
        Q('If plant cells lose water to hypertonic media, vacuoles shrink and:', ['Turgor may drop', 'Turgor always infinite', 'Stomata irrelevant', 'Cell walls dissolve instantly'], 'A'),
        Q('Isosmotic roughly means:', ['No solutes anywhere', 'No net osmotic water movement between compartments', 'Pure water inside only', 'Cells explode always'], 'B'),
        Q('Aquaporins increase membrane:', ['Electrical fuse melting', 'Water permeability', 'DNA replication speed', 'ATP synthase in nucleus'], 'B'),
        Q('Ion pumps are an example of:', ['Pure diffusion', 'Active transport', 'Osmosis of water only', 'Binary fission'], 'B'),
      ];
    case '2-2':
      return [
        Q('Enzymes are mainly:', ['DNA genes only', 'Protein catalysts (some RNAs catalytic too in ribozymes)', 'Pure lipopeptide walls', 'Inert stones'], 'B'),
        Q('Lock-and-key emphasizes:', ['Enzyme consumed in reaction', 'Complementary shape between active site and substrate', 'Random collisions irrelevant', 'Heat destruction always'], 'B'),
        Q('High temperature can denature enzymes by:', ['Increasing favorable hydrogen bonds only', 'Disrupting 3D structure of active site', 'Adding substrates permanently', 'Increasing diffusion only'], 'B'),
        Q('Competitive inhibitors:', ['Bind distant allosteric sites only', 'Often resemble substrate and compete for active site', 'Destroy membranes only', 'Never resemble substrate'], 'B'),
        Q('Cofactors may include:', ['Only sunlight', 'Metal ions or coenzyme pieces', 'Ribosomal RNA only', 'Thylakoid membranes only'], 'B'),
      ];
    case '2-3':
      return [
        Q('Glycolysis location in eukaryotes:', ['Inner mitochondrial membrane stroma mix-up—avoid trick—actually cytoplasm', 'Cytoplasm', 'Thylakoid', 'Nucleolus'], 'B'),
        Q('Citric acid cycle (Krebs) occurs in:', ['Stroma of chloroplast', 'Mitochondrial matrix', 'Outer membrane only', 'Golgi'], 'B'),
        Q('Electron transport in aerobes uses O₂ as:', ['Initial electron donor to photosystem II', 'Terminal electron acceptor forming water', 'Carbon source for Calvin cycle', 'ATP itself'], 'B'),
        Q('Fermentation recycles NAD⁺ by:', ['Oxidative phosphorylation', 'Reducing pyruvate or derivatives without oxygen', 'Photolysis', 'Binary fission'], 'B'),
        Q('Most useful energy currency released for work in cells is often:', ['Glucose stored only', 'ATP', 'NADPH in muscles directly always', 'Starch grains'], 'B'),
      ];
    case '2-4':
      return [
        Q('Photosynthesis converts:', ['Light energy to chemical energy in organic molecules', 'Organic molecules entirely to light', 'Rocks into sugars', 'N₂ into chlorophyll metals'], 'A'),
        Q('Light reactions generate ATP and:', ['CO₂ for Calvin cycle import only', 'NADPH reducing power', 'DNA replication primers', 'Spindle microtubules'], 'B'),
        Q('Calvin cycle fixes carbon in:', ['Mitochondrial matrix', 'Chloroplast stroma (general scheme)', 'Ribosomal P site', 'Lysosome'], 'B'),
        Q('Photorespiration can waste carbon when:', ['O₂ competes at Rubisco under some conditions', 'CO₂ is abundant always', 'Stomata closed never matters', 'Roots inactive'], 'A'),
        Q('Oxygenic photosynthesis produces O₂ from:', ['Splitting H₂O', 'Splitting CO₂ only', 'N₂ fixation', 'Fermentation of glucose only'], 'A'),
      ];
    case '3-0':
      return [
        Q('DNA replication primarily in interphase occurs before:', ['Cytokinesis of previous cell still running alone', 'Mitosis/meiosis divisions', 'Photosynthetic burst only', 'Seed dormancy only'], 'B'),
        Q('Mitosis in diploid somatic cells yields:', ['Haploid daughter cells usually', 'Typically two diploid daughter nuclei before cytokinesis completes partitioning', 'Four gametes always', 'Random ploidies'], 'B'),
        Q('Checkpoints delay division if:', ['DNA damage unrepaired', 'Weather nice', 'Stomata open', 'Vacuole large'], 'A'),
        Q('Apoptosis is:', ['Unregulated bursting only', 'Programmed cell death important in development', 'Binary fission of bacteria', 'Photosynthetic stage'], 'B'),
        Q('Telomerase relevance appears in:', ['Prokaryotic plasmids mainly', 'Some eukaryotic lineage stem/germ contexts', 'Viruses lack genomes', 'Mineral crystals'], 'B'),
      ];
    case '3-1':
      return [
        Q('Prophase features:', ['Chromatin condenses into visible chromosomes', 'Separation of sisters at poles', 'Cytokinesis completed', 'DNA replicates now'], 'A'),
        Q('Metaphase aligns chromosomes:', ['At nuclear envelope remnants randomly', 'At metaphase plate', 'Inside Golgi stacks', 'Across two nuclei'], 'B'),
        Q('Anaphase separates:', ['Homologs in mitosis', 'Sister chromatids in mitosis', 'DNA bases G from C chemically', 'Entire cells without cytokinesis always'], 'B'),
        Q('Cytokinesis differs in plants because:', ['Cleavage furrow contractile ring', 'Cell plate formation', 'No wall ever', 'Spores only'], 'B'),
        Q('Binary fission in bacteria resembles:', ['Meiosis II', 'A form of asexual prokaryotic division', 'Gamete fusion', 'Crossing over'], 'B'),
      ];
    case '3-2':
      return [
        Q('Homologous chromosomes pair in:', ['Mitotic metaphase', 'Meiosis I prophase', 'Cytokinesis only', 'G2'], 'B'),
        Q('Crossing over creates:', ['Identical sister strands only', 'Recombinant chromatids with new allele combinations', 'Proteins from lipids only', 'ATP from starch only'], 'B'),
        Q('Meiosis II most resembles:', ['Meiosis I in separating homologs', 'Mitosis in separating sisters', 'Photosystem II splitting N2', 'Replication'], 'B'),
        Q('Fertilization restores:', ['Haploid number always lost', 'Diploid condition from two haploid gametes in many species', 'Triploid always', 'Infinite ploidy'], 'B'),
        Q('Tetrad refers to:', ['Four haploid cells after meiosis complete', 'Paired homologs with four chromatids during synapsis', 'Four Calvin turns only', 'Four hearts in birds'], 'B'),
      ];
    case '3-3':
      return [
        Q('Independent assortment shuffles:', ['Sister chromatids at metaphase II only', 'Maternal/paternal homolog combinations at metaphase I', 'Carbon fixation options', 'Pollen color only'], 'B'),
        Q('Random fertilization mixes:', ['Only mitochondria from dad', 'Which male and female gametes unite', 'Ribosome subunits randomly only', 'Mineral types'], 'B'),
        Q('Crossing over occurs between:', ['Maternal sisters only', 'Non-sister chromatids of homologs', 'Any chromosome from unrelated species always', 'DNA polymerase III only'], 'B'),
        Q('Genetic drift is change in allele frequencies by:', ['Only natural selection', 'Chance especially in small populations', 'Photosynthetic yield only', 'Muscle exercise'], 'B'),
        Q('Which increases phenotypic variation within populations?', ['Only cloning', 'Sexual reproduction with meiosis', 'Binary fission only', 'Mitosis of soma alone'], 'B'),
      ];
    case '3-4':
      return [
        Q('Proto-oncogenes normally can:', ['Stop all division always', 'Regulate growth positively when functioning', 'Encode only structural hair keratin', 'Prevent checkpoints always'], 'B'),
        Q('Tumor suppressors often:', ['Encourage unchecked cycles if mutated loss-of-function', 'Promote checkpoint or repair if functioning', 'Synthesize chlorophyll', 'Pump K+ only'], 'B'),
        Q('Carcinogenesis is usually:', ['Single overnight event always', 'Multi-step accumulation of mutations', 'Only viral in humans', 'Only in plants'], 'B'),
        Q('Biopsy study helps because:', ['Astrology charts tumors', 'Cell morphology reveals malignancy clues', 'Weather predicts cancer', 'Rocks diagnose'], 'B'),
        Q('Angiogenesis can support tumors by:', ['Removing all blood', 'Growing new vessels feeding growth', 'Crystallizing hemoglobin', 'Closing stomata'], 'B'),
      ];
    case '4-0':
      return [
        Q('The second word in a binomial denotes the:', ['Genus always', 'Specific epithet', 'Author citation only', 'Country name'], 'B'),
        Q('Taxonomic ranks progress from domain toward species by:', ['Random ordering', 'Nested inclusivity decreasing', 'Only two ranks exist', 'Alphabetical English only'], 'B'),
        Q('Which violates binomial style?', ['Homo sapiens correctly italicized print', 'homo Sapiens inconsistent capitalization', 'Panthera tigris', 'Canis familiaris'], 'B'),
        Q('Type specimens anchor:', ['Radio stations', 'Nomenclature reference for species names', 'Plant height only', 'Ocean salinity'], 'B'),
        Q('Synonyms in taxonomy arise when:', ['One species has multiple scientific names historically', 'No variation exists', 'DNA absent', 'Common names vanish'], 'A'),
      ];
    case '4-1':
      return [
        Q('A clade is:', ['Polyphyletic collection ignoring traits', 'Monophyletic group with common ancestor and descendants', 'Random species list', 'Any kingdom'], 'B'),
        Q('Analogous traits arise by:', ['Only homology', 'Convergent evolution', 'Same embryonic origin always', 'Mitosis only'], 'B'),
        Q('Homologous structures suggest:', ['Shared ancestry (not always similar function)', 'Always identical function', 'Random similarity', 'No DNA'], 'A'),
        Q('A phylogeny is:', ['Lab safety rule', 'Hypothesis of evolutionary relationships', 'Calvin cycle map', 'Krebs map of soils'], 'B'),
        Q('Outgroup comparison helps:', ['Invent unrelated traits', 'Polarize character states on ingroup tree', 'Remove genes from organisms', 'Deny fossils'], 'B'),
      ];
    case '4-2':
      return [
        Q('Dichotomous keys use:', ['One vague statement', 'Series of paired contrasting statements', 'Only molecular clocks always', 'RGB color codes only'], 'B'),
        Q('Field guide may begin identification by:', ['Ignoring habitat', 'Observing morphological traits', 'Measuring radioactivity', 'Counting cloud types'], 'B'),
        Q('Type of fruit might key:', ['Angiosperm species in botany', 'Protein shape always', 'Air pressure', 'Mineral hardness only'], 'A'),
        Q('Using multiple traits reduces:', ['Reliability', 'Misidentification risk', 'Scientific names', 'Taxonomy entirely'], 'B'),
        Q('Digital databases assist taxonomy by:', ['Replacing all field work instantly forever', 'Comparing sequences and morphological records', 'Banning binomials', 'Eliminating species concepts'], 'B'),
      ];
    case '4-3':
      return [
        Q('Domain Archaea differs from typical Bacteria partly in:', ['Both lack genetic material', 'Membrane lipid chemistry and ribosomal features', 'Having nuclei like animals', 'No ribosomes'], 'B'),
        Q('Protista is traditionally:', ['Perfectly single coherent kingdom genetically', 'A convenient heterogeneous group of many eukaryote lineages', 'Only bacteria', 'Only land plants'], 'B'),
        Q('Many protists are:', ['Obligate multicellular animals', 'Unicellular or simple colonial eukaryotes', 'Viruses with metabolism', 'Prokaryotes without DNA'], 'B'),
        Q('Algal groups differ in:', ['Never having chlorophyll', 'Pigments, storage compounds, cell division details', 'Lacking membranes universally', 'Being all marine only'], 'B'),
        Q('Slime molds illustrate:', ['Only plant life cycles', 'Life-cycle transitions between amoeboid and fruiting stages', 'Pure viral cycles', 'Rock dissolution only'], 'B'),
      ];
    case '4-4':
      return [
        Q('Fungal cell walls often contain:', ['Peptidoglycan like bacteria', 'Chitin', 'Cellulose like green plants always primary', 'Silica shells mainly'], 'B'),
        Q('Hyphae are:', ['Photosynthetic leaf blades', 'Filamentous fungal growth form absorbing nutrients', 'Animal nerve fibers only', 'Bacterial flagella'], 'B'),
        Q('Fungi digest food by:', ['Photosynthesis in chloroplasts', 'Extracellular enzymatic digestion then absorption', 'Swallowing macro prey whole always', 'Ingesting like earthworms through mouth always'], 'B'),
        Q('Dimorphic fungi may switch between:', ['Only diploid and triploid', 'Yeast-like and hyphal forms depending on environment', 'Ice and steam only', 'DNA and RNA as individuals'], 'B'),
        Q('Lichens are symbioses of:', ['Viruses and worms', 'Fungus and photosynthetic partner', 'Fish and bird', 'Two mammals'], 'B'),
      ];
    case '5-0':
      return [
        Q('Root hairs form from:', ['Shoot apical meristem', 'Epidermal extensions near root tip zone', 'Flower petals', 'Stomata cells'], 'B'),
        Q('Casparian strip influences:', ['Selectivity of mineral entry into vascular stele', 'Bee navigation', 'Bird feather color', 'Nerve impulse speed'], 'A'),
        Q('Meristematic regions enable:', ['Only senescence', 'Primary growth at tips', 'No new cells ever', 'Mineralization of teeth only'], 'B'),
        Q('Mycorrhizae assist roots in:', ['Blocking water', 'Nutrient and water uptake symbiotically', 'Phototropism sensing', 'Pollination'], 'B'),
        Q('Lateral roots often arise:', ['From leaf mesophyll', 'From pericycle internal layers', 'From pollen tubes', 'From bark cork only'], 'B'),
      ];
    case '5-1':
      return [
        Q('Xylem transport depends on:', ['Sieve tube pressure from sugar loading only for ascent universally', 'Cohesion–tension with evaporation pull in many plants', 'Capillary action alone infinite to space', 'Root push only unlimited'], 'B'),
        Q('Tracheids and vessels are:', ['Sugar conduits exclusively', 'Dead at maturity water-conducting cells', 'Living cytoplasmic bridges like plasmodesmata only', 'Guard cells'], 'B'),
        Q('Root pressure can contribute when:', ['Stomata sealed forever', 'Soil moisture high transpiration low night sometimes guttation scenarios', 'Photosynthesis zero always', 'Desert midday always'], 'B'),
        Q('Cohesion refers to:', ['Water molecules sticking to each other via hydrogen bonding', 'Air sticking to oils only', 'Sugar to starch polymerization only', 'Minerals to gold'], 'A'),
        Q('Cuticle reduces:', ['DNA replication', 'Non-stomatal water loss from aerial surfaces', 'O₂ production in mitochondria', 'Vacuolar tonicity'], 'B'),
      ];
    case '5-2':
      return [
        Q('Stomatal opening increases:', ['Only O₂ entry to roots', 'CO₂ diffusion into leaf when open', 'Mineral uptake through bark only', 'Sugar export block'], 'B'),
        Q('Wilting under drought often links to:', ['Excessive turgor only', 'Guard cells losing turgor closing stomata sometimes', 'Faster photosynthesis always', 'Increased root hair length instantly always'], 'B'),
        Q('Transpiration stream pulls water via:', ['Adhesion to conduit walls and cohesion in xylem sap', 'Magnetism in phloem', 'Vacuole implosion in animals', 'Denaturing enzymes'], 'A'),
        Q('Humidity affects transpiration because:', ['It changes water potential gradient from leaf to air', 'It eliminates photosystems', 'It adds ATP to xylem', 'It duplicates chromosomes'], 'A'),
        Q('Abscisic acid often promotes:', ['Stomatal closure under stress signaling contexts', 'Fruit ethylene explosion only always', 'Root hair death only', 'Flowering always long-day-only regardless'], 'A'),
      ];
    case '5-3':
      return [
        Q('Palisade mesophyll is adapted to:', ['Maximize light capture with chloroplast-rich columnar cells', 'Store large quantities of bone matrix', 'Pump water from soil', 'Produce pollen'], 'A'),
        Q('Spongy mesophyll promotes:', ['Gas circulation via air spaces near stomata', 'Mechanical wood strength', 'Rhizoid attachment', 'Spore discharge in mammals'], 'A'),
        Q('Upper epidermis often:', ['Contains most chloroplasts palisade below not always in epidermis itself', 'Is relatively transparent allowing light to palisade', 'Is entirely stomata only', 'Photosynthesizes like mesophyll always'], 'B'),
        Q('Bundle sheath cells in C4 plants wrap:', ['Xylem only', 'Vascular bundles participating in carbon concentration schemes', 'Pollen sacs', 'Mycorrhizae'], 'B'),
        Q('Cuticle color or waxes affect:', ['DNA replication', 'UV protection and desiccation resistance traits', 'Mitotic spindle placement', 'Animal immunity'], 'B'),
      ];
    case '5-4':
      return [
        Q('Auxin from apical meristem can:', ['Always stimulate all lateral buds equally', 'Suppress lateral bud outgrowth in apical dominance pattern', 'Catalyze Calvin cycle', 'Split water at PSII'], 'B'),
        Q('Gibberellins can promote:', ['Seed dormancy always only', 'Stem elongation in many contexts', 'Stomatal closure always', 'Binary fission'], 'B'),
        Q('Ethylene ripens some fruits by:', ['Increasing cellulose in secondary walls only', 'Coordinating softening and color changes gene expression', 'Generating ATP in fruit mitochondria uniquely only via ethylene', 'Denaturing all enzymes'], 'B'),
        Q('Photoperiodism in flowering measures:', ['Only soil nitrogen', 'Night length or day length with photoreversible pigment systems', 'Air pressure only', 'Lunar phases only historically wrong simplistic'], 'B'),
        Q('Tropisms are:', ['Random heat shocks', 'Growth responses to directional stimuli like light or gravity', 'Chemical digestion in roots', 'Nuclear fusion'], 'B'),
      ];
    case '6-0':
      return [
        Q('Sponges belong to phylum:', ['Cnidaria', 'Porifera', 'Annelida', 'Chordata'], 'B'),
        Q('Choanoflagellate collar cells resemble:', ['Some protist relatives suggesting evolutionary links to animals', 'Chloroplasts', 'Bacterial nucleoids', 'Virus capsids'], 'A'),
        Q('Cnidarians exhibit:', ['Three germ layers always', 'Tissue-level organization with nematocytes', 'Closed circulatory system always', 'Amniotic eggs universal'], 'B'),
        Q('Flatworms lack:', ['A body cavity between gut and outer tissue in acoelomate classic view', 'Epithelial layers', 'Nervous system rudiments', 'Cells'], 'A'),
        Q('Parasitic flukes illustrate:', ['Autotrophic nutrition', 'Complex life cycles with hosts', 'No tissues', 'Photosynthesis'], 'B'),
      ];
    case '6-1':
      return [
        Q('Segmentation in annelids correlates with:', ['No repeated parts', 'Repeating organ units along axis', 'Absence of coelom', 'Radial symmetry only'], 'B'),
        Q('Arthropods molt because:', ['Endoskeleton expands freely', 'Exoskeleton is rigid and must be shed to grow', 'Cells lack walls', 'They photosynthesize'], 'B'),
        Q('Open circulatory systems often occur in:', ['Birds', 'Many mollusks and arthropods', 'Mammals', 'Lungfish lungs only'], 'B'),
        Q('Chelicerates include:', ['Insects with six legs', 'Spiders with book lungs/tracheae variants', 'Octopuses only', 'Sea stars only'], 'B'),
        Q('Uniramia includes insects with:', ['Eight legs always', 'Six legs in adults typical ground pattern', 'Two shells hinged', 'Tube feet'], 'B'),
      ];
    case '6-2':
      return [
        Q('Bone remodeling involves:', ['Only fetal development once', 'Osteoblasts and osteoclasts ongoing', 'Pure cartilage forever in adults all bones', 'Mineral-free matrix'], 'B'),
        Q('Cartilage lacks:', ['Extracellular matrix components', 'Direct blood supply in mature hyaline regions slowing healing', 'Cells called chondrocytes', 'Collagen sometimes'], 'B'),
        Q('Long bone growth in length at:', ['Articular cartilage wear only', 'Epiphyseal plate cartilage region children', 'Periosteum random depth', 'Hair follicles'], 'B'),
        Q('Calcium homeostasis involves:', ['Only plants', 'Parathyroid hormone and vitamin D pathways among regulators', 'Stomatal kinetics only', 'Rubisco active site only'], 'B'),
        Q('Synovial joints allow:', ['No movement', 'Controlled movement with lubrication', 'Fibrous immobility only', 'Bone fusion always'], 'B'),
      ];
    case '6-3':
      return [
        Q('Fish gills use countercurrent exchange to:', ['Eliminate O₂ from water', 'Maximize O₂ diffusion efficiency', 'Pump blood backward', 'Digest plankton only'], 'B'),
        Q('Amphibians may respire through:', ['Skin in some species supplementing lungs', 'Only tracheae like insects', 'Book lungs like spiders only', 'Gills in adults always in all species'], 'A'),
        Q('Avian respiratory system includes:', ['Alveoli only like mammals identically same', 'Air sacs aiding unidirectional lung airflow', 'Two separate diaphragms like four-legged always', 'Gills in adult sparrow'], 'B'),
        Q('Mammalian alveoli increase:', ['Blood pressure in arteries only', 'Surface area for gas diffusion', 'Bone marrow volume', 'Photosynthetic area'], 'B'),
        Q('CO₂ transport in blood includes:', ['Only dissolved gas', 'Bicarbonate formation in red blood cells among routes', 'Starch granules', 'Calcified shells only'], 'B'),
      ];
    case '6-4':
      return [
        Q('Endothermy in birds and mammals means:', ['Body temperature purely follows environment always', 'Metabolic heat maintains relatively stable core temperature', 'No energy cost', 'Ectothermy identical'], 'B'),
        Q('Mammary glands characterize:', ['All vertebrates', 'Mammalia feeding young milk', 'Avians primarily', 'Reptiles generally'], 'B'),
        Q('Monotreme mammals:', ['All placentals', 'Lay shelled eggs still mammalian features', 'Are fish', 'Are insects'], 'B'),
        Q('Placental mammals support embryos via:', ['Mineral shell nutrition only like birds always same', 'Placental exchange interface in uterus', 'External gills only', 'Sporophyte nourishment'], 'B'),
        Q('Homoiothermy advantage includes:', ['Always slower metabolism', 'Sustained activity across wider ambient temperature ranges potentially', 'No food need', 'No circulatory system'], 'B'),
      ];
    default:
      return [
        Q('Which choice applies a definition from this lesson correctly?', ['Use the definition with given facts', 'Ignore given information', 'Change units randomly', 'Assume conclusion'], 'A'),
        Q('Which is least appropriate in a short explanation here?', ['Tie evidence to concept', 'Invoke unrelated physics alone', 'Name one example organism', 'Keep steps causal'], 'B'),
        Q('A strong distracter often:', ['Matches superficial wording', 'Matches no pattern', 'Is undefined', 'Equals zero'], 'A'),
        Q('Best next step after eliminating two choices:', ['Re-read for precise biological meaning', 'Pick randomly only', 'Change the stem', 'Reject biology'], 'A'),
        Q('When uncertain, you should:', ['Substitute a simple organism or pathway example consistent with stem', 'Abandon evidence standards', 'Assume all answers equal', 'Skip reading'], 'A'),
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
