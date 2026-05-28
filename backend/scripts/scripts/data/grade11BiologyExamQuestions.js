/**
 * Five university-entrance-style MCQs per Grade 11 Biology topic (Natural stream).
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  switch (`${c}-${t}`) {
    case '0-0':
      return [
        Q('Which pair best shows biology supporting technology development?', ['Astrology and metals', 'Genomics and controlled tissue culture', 'Fossil fuels only', 'Bridge rivets only'], 'B'),
        Q('A controlled trial in agricultural extension tests:', ['One variable change with replication versus traditional practice', 'All variables at once', 'Stories without measurement', 'Soil color only'], 'A'),
        Q('Precision agriculture may use GIS and sensors to:', ['Map yield variability and tailor inputs', 'Eliminate statistics', 'Remove soil', 'Replace farmers entirely with robots always false'], 'A'),
        Q('Interdisciplinary biotech teams typically include:', ['Biologists, engineers, and data scientists among roles', 'Only poets', 'Only accountants', 'Only lawyers'], 'A'),
        Q('Appropriate technology implies solutions should match:', ['Local skills, economics, and environment', 'Only the richest laboratories globally', 'Random guess', 'Outdated equipment exclusively'], 'A'),
      ];
    case '0-1':
      return [
        Q('Monoclonal antibodies in diagnostics can detect:', ['Specific proteins or antigens in a sample', 'Moon phases', 'Tectonic drift only', 'Keyboard layouts'], 'A'),
        Q('Quality-assured vaccines depend on:', ['Trials, cold chain logistics, and regulatory oversight among factors', 'Social media polling only', 'Coin flips', 'Painting cells blue'], 'A'),
        Q('Diagnostic sensitivity refers partly to:', ['True positive rate among people with the condition in idealized teaching', 'False positives only', 'Cost only', 'Color of packaging'], 'A'),
        Q('Rapid antigen tests often trade speed for:', ['Lower sensitivity than some molecular tests depending design', 'Infinite accuracy always false', 'Zero specificity false', 'Gravity measurement'], 'A'),
        Q('Public health surveillance uses lab data to:', ['Trigger responses when outbreak thresholds crossed conceptually', 'Replace hand washing false', 'Eliminate immune system false', 'Stop DNA replication'], 'A'),
      ];
    case '0-2':
      return [
        Q('Micropropagation can produce plantlets that are:', ['Clonal copies when starting from meristematic tissue typically', 'Always genetically random crosses false', 'Fungal hybrids false', 'Mineral crystals'], 'A'),
        Q('Rhizobia inoculation aims to improve:', ['Biological nitrogen fixation in compatible legumes', 'Silicon nutrition in humans false', 'Gold uptake by roots false', 'Ozone in leaves'], 'A'),
        Q('GMO risk assessment considers:', ['Gene flow, allergenicity, and non-target organism impacts among factors', 'Only taste tests', 'Moon tides', 'Bridge weight limits'], 'A'),
        Q('Biopesticides may reduce reliance on:', ['Some synthetic pesticides depending pest system not universal panacea', 'All predators beneficial insects careful context', 'Water entirely', 'Oxygen'], 'A'),
        Q('Food security dimensions classically include:', ['Availability, access, utilization, and stability framework awareness intro', 'Only calories ignoring vitamins simplified false incomplete metric alone', 'Only imports', 'Only GDP'], 'A'),
      ];
    case '0-3':
      return [
        Q('Randomization in trials reduces:', ['Systematic bias in treatment assignment', 'Gravity', 'Atomic number', 'Student hobbies unrelated'], 'A'),
        Q('Blinding in human studies aims to reduce:', ['Bias in outcome assessment', 'Sample size', 'DNA existence false', 'Periodic table order'], 'A'),
        Q('Biosafety cabinets protect when handling:', ['Potentially infectious materials aerosolizing procedures depending class cabinet', 'Sandwich lunches always false unless unusual contamination joke', 'Distilled water only always unnecessary cabinet wasteful', 'Inert rocks only'], 'A'),
        Q('Negative controls detect:', ['Contamination generating signal without true target sometimes', 'Perfect technique always false', 'Sunspots', 'Piano tuning'], 'A'),
        Q('Plagiarism breaches ethics because it:', ['Misrepresents authorship and harms trust', 'Speeds science always good false', 'Improves statistics false', 'Replaces peer review'], 'A'),
      ];
    case '0-4':
      return [
        Q('BLAST searches use sequence similarity to infer:', ['Homology hypotheses interpreted cautiously not proof of function alone', 'Exact geological age of fossils false', 'Stomatal density', 'Car tire pressure'], 'A'),
        Q('A multiple sequence alignment is a prerequisite for many:', ['Phylogenetic tree reconstructions depending method', 'Cooking recipes', 'Stock prices', 'Poems'], 'A'),
        Q('GenBank stores primarily:', ['DNA/RNA/protein sequence records and annotations', 'Cat videos', 'Blueprints for bridges civil engineering different', 'NHL scores'], 'A'),
        Q('Protein structure prediction improved with AI helps:', ['Hypothesize binding pockets and function testing still needed', 'Guarantee drug works in humans first try always false', 'Turn water into gasoline', 'Remove evolution'], 'A'),
        Q('Metadata should record:', ['How samples were collected and processed for reproducibility', 'Researcher favorite meals only', 'Random emojis', 'Nothing'], 'A'),
      ];
    case '1-0':
      return [
        Q('A clade is best described as:', ['An ancestor and all its descendants (monophyletic group in cladistics)', 'Any miscellany of species on a list', 'Only birds', 'Rocks'], 'A'),
        Q('Binomial names reduce confusion because:', ['Each species has a Latinized unique pair globally except some synonymy issues', 'Common names never vary regionally false they do', 'They update weekly', 'They replace cells'], 'A'),
        Q('Homologous structures suggest:', ['Shared ancestry though functions may diverge', 'Convergent evolution always false analogous similar function different ancestry', 'No DNA relationship false', 'Identical amino acid sequences always false'], 'A'),
        Q('Which phylum includes animals with nematocysts?', ['Cnidaria', 'Chordata', 'Mollusca', 'Arthropoda'], 'A'),
        Q('Scientific names are typically printed:', ['Genus capitalized species epithet lowercase italicized when Latin binomial tradition', 'ALL CAPS GENUS ONLY FALSE MODERN STYLE ITALICS', 'Arabic numerals only', 'Emoji'], 'A'),
      ];
    case '1-1':
      return [
        Q('Triploblastic development includes germ layers:', ['Ectoderm mesoderm endoderm', 'One layer', 'Five standard layers false', 'Cuticle as layer false plant'], 'A'),
        Q('A coelomate body cavity is lined by:', ['Mesoderm in true coelom classical teaching', 'Epidermis only', 'Endoderm only gut cavity different', 'Spongocoel only sponge context'], 'A'),
        Q('Cephalization concentrates neural and sensory structures:', ['At the anterior end for bilaterians with heads generally', 'In the tail always', 'Evenly along body always false', 'Outside body'], 'A'),
        Q('Segmentation in annelids relates partly to:', ['Hydrostatic locomotion and repeated organ modules', 'Wings in insects false different phylum flying groups', 'Photosynthesis', 'Spores'], 'A'),
        Q('Molting in arthropods is needed because:', ['The exoskeleton cannot expand indefinitely; must be shed to grow among costs', 'They lack muscles false', 'They are plants false', 'Gravity increases yearly false'], 'A'),
      ];
    case '1-2':
      return [
        Q('Countercurrent exchange in fish gills improves:', ['Uptake of oxygen from water versus single-pass models', 'Nitrogen fixation', 'Root pressure in xylem plant context wrong kingdom', 'Lunar calendar accuracy'], 'A'),
        Q('Convergent evolution can make:', ['Dolphins and fish similarly streamlined without close ancestry', 'Identical DNA always false', 'Homology always false analogous convergence', 'No selective pressure false'], 'A'),
        Q('Small mammals lose heat faster in cold partly because:', ['Surface area to volume ratio favors heat loss at a given metabolic output simplified', 'They lack mitochondria false', 'They photosynthesize false', 'They stop ATP production false'], 'A'),
        Q('Migration as behavioral adaptation tracks:', ['Seasonal resource pulses', 'Stock markets', 'Periodic table rows', 'Printer ink levels'], 'A'),
        Q('Camouflage mainly reduces:', ['Detection risk by matching background or disrupting outline', 'Metabolic rate necessarily always false', 'Gene flow', 'Gravity'], 'A'),
      ];
    case '1-3':
      return [
        Q('Sponges feed chiefly by:', ['Filter feeding through ostia and choanocytes overview', 'Photosynthesis primarily', 'Chasing vertebrate prey', 'Drinking oil'], 'A'),
        Q('Annelids differ from nematodes roundworms in commonly taught distinctions such as:', ['Segmentation and chaetae in earthworms versus pseudocoelom cylinder smooth cuticle comparisons introductory', 'identical body plan always false', 'absence of DNA false', 'chitin exoskeleton always false nematodes collagen cuticle different arthropod chitin'], 'A'),
        Q('Arthropods outnumber other animal species largely because:', ['Versatile segmented body plan and radiations including insects', 'They eat sunlight', 'They lack reproduction false', 'They are all aquatic false many terrestrial'], 'A'),
        Q('Echinoderm adult symmetry is often:', ['Pentaradial', 'Bilateral in adults like mammals always false larvae bilateral metamorphosis story', 'Asymmetrical only', 'Cubic'], 'A'),
        Q('Molluscan mantle often:', ['Secretes shell in many groups housing visceral mass', 'Generates electricity exclusively electric eels fish not mollusk false weird pick', 'Produces insulin mammal pancreas different', 'Pumps fish gills false'], 'A'),
      ];
    case '1-4':
      return [
        Q('Chordate features include at some life stage:', ['Notochord dorsal hollow nerve cord pharyngeal slits post-anal tail among textbook list intro', 'chitin exoskeleton always false arthropod', 'nematocysts primary false cnidarian', 'segmented jointed appendages exclusive false arthropod'], 'A'),
        Q('Cartilaginous fish differ from most bony fish in:', ['Skeleton material among contrasts', 'Absence of gills false both gills', 'Lacking hearts false', 'Being plants false'], 'A'),
        Q('Birds are endothermic and have:', ['Feathers among adaptations for insulation and flight surfaces', 'Gills primary adult respiration false lungs', 'Larvae in water always false many direct development', 'Nematocysts false'], 'A'),
        Q('Monotreme mammals lay eggs yet still:', ['Have mammary glands though morphologically unusual milk delivery', 'Lack any synapomorphies with therians completely false share many', 'Are reptiles taxonomically false synapsid clade Mammalia', 'Photosynthesize false'], 'A'),
        Q('Double circulation in mammals separates:', ['Pulmonary versus systemic circuits improving gas exchange efficiency overview', 'Only one loop fish simpler some mixed hearts crocodiles nuances intro skip', 'Lymph from blood entirely false interconnected', 'Plants from fungi false'], 'A'),
      ];
    case '2-0':
      return [
        Q('Most cellular enzymes are made of:', ['Protein primary class though ribozymes exist awareness', 'DNA structural enzyme wrong enzyme usually protein', 'Cellulose only plant wall', 'Starch storage'], 'A'),
        Q('Apoenzyme needs a cofactor to form an active:', ['Holoenzyme in many cases', 'Chromosome', 'Lysosome membrane', 'ATP out of nothing'], 'A'),
        Q('Enzyme–substrate specificity involves:', ['Complementary shape and chemistry at active site', 'Random collisions only no orientation enzyme false', 'Absorbing sunlight', 'Encoding tRNA anticodons directly false'], 'A'),
        Q('EC numbers classify enzymes by:', ['Reaction catalyzed', 'Animal species source only', 'Molecular mass only', 'Laboratory shelf'], 'A'),
        Q('Zymogens protect tissues because they are:', ['Inactive until proteolytically activated at appropriate site context digestion', 'Faster always active everywhere dangerous false opposite intent', 'RNA catalysts always false usually protein', 'Noncatalytic always false'], 'A'),
      ];
    case '2-1':
      return [
        Q('Enzymes lower activation energy by:', ['Stabilizing transition states with favorable binding interactions pathway dependent', 'Violating thermodynamics ΔG unchanged overall sign false enzyme speeds not changes equilibrium like that necessarily', 'Removing substrates', 'Destroying products'], 'A'),
        Q('Induced fit contrasts some older lock-and-key models by:', ['Allowing conformational change upon substrate binding models', 'Denying any fit false', 'Predicting infinite Km always false', 'Making DNA polymer'], 'A'),
        Q('Covalent catalysis can form:', ['Transient covalent enzyme–substrate intermediates in some mechanisms', 'Permanent fusion to membrane always false often reversible intermediate', 'Only hydrogen bonds never covalent some mechanisms use covalent catalysis', 'Crystals of table salt exclusively'], 'A'),
        Q('Binding energy from ES formation can pay:', ['Entropy decreases and desolvation penalties context energy balance net determines rate', 'Nothing ever false', 'Create matter from vacuum false', 'Eliminate ATP entirely'], 'A'),
        Q('Proximity and orientation in active site raise effective:', ['Concentration favoring reaction versus random dilute collisions', 'Gravity', 'Earth radius', 'Generation time of species'], 'A'),
      ];
    case '2-2':
      return [
        Q('Optimal pH of an enzyme reflects:', ['Ionization of active site residues and sometimes substrate', 'Altitude only', 'Stock market volatility', 'Lunar month'], 'A'),
        Q('At high temperature enzyme activity often drops because of:', ['Denaturation losing native tertiary structure', 'Faster substrates arriving always good false past optimum unfolding dominates', 'Increased activation energy false unfolding not that', 'Photosynthesis interference false'], 'A'),
        Q('At saturating substrate, rate becomes most sensitive to:', ['Enzyme amount and turnover catalytic limits', 'Only diffusion from moon false joke', 'DNA length unrelated', 'Number of stomata on leaf'], 'A'),
        Q('Km in Michaelis–Menten teaching approximates:', ['Substrate concentration at half Vmax under idealized assumptions', 'Maximum velocity directly false Vmax different parameter', 'Inhibitor concentration false context', 'Temperature in Kelvin only'], 'A'),
        Q('Noncompetitive inhibitors often affect Vmax by:', ['Changing catalytic efficiency or ES breakdown path simple textbook story caveats mixed inhibition exist advanced skip', 'Increasing substrate affinity only competitive pattern different typically unless uncompetitive binds ES etc.', 'Doubling genome size', 'Increasing solar flux'], 'A'),
      ];
    case '2-3':
      return [
        Q('Competitive inhibitors frequently:', ['Resemble substrate and raise apparent Km in simple models', 'Bind irreversibly always false can vary', 'Raise Vmax always false noncompetitive pattern different though uncompetitive more subtle', 'Catalyze side reactions primarily false'], 'A'),
        Q('Allosteric enzymes may show:', ['Cooperative sigmoidal kinetics for multi-subunit proteins', 'Michaelis–Menten hyperbola always strict false many allosteric not hyperbola', 'Zero regulation false', 'Only DNA cleavage activity restriction enzyme not metabolic pathway regulated enzyme confusion'], 'A'),
        Q('Feedback inhibition often targets:', ['First enzyme in a pathway when end product abundant', 'Last enzyme only always false textbook classic first committed step often', 'Ribosomal RNA genes nonsense', 'Solar panels'], 'A'),
        Q('Phosphorylation by protein kinases can:', ['Switch enzyme activity via covalent modification cascades', 'Replicate DNA polymerase enzyme different', 'Synthesize chlorophyll', 'Fix N2 without bacteria false'], 'A'),
        Q('Zymogen activation in blood clotting illustrates:', ['Proteolytic cascades amplifying signals carefully controlled', 'Photosynthetic electron transport wrong pathway', 'Osmosis only', 'Bacterial conjugation'], 'A'),
      ];
    case '2-4':
      return [
        Q('Restriction enzymes cut:', ['DNA at specific palindromes often leaving sticky ends historically cloning teaching', 'Proteins randomly trypsin different context not restriction map', 'Lipid bilayers nonspecifically always false detergents different', 'Only RNA TEV protease is viral protease different'], 'A'),
        Q('Immobilized enzyme reactors can improve industrial processes by:', ['Reusing catalyst and stabilizing operation continuous systems', 'Destroying all products', 'Generating nuclear power', 'Cooling CPUs unrelated'], 'A'),
        Q('PCR employs thermostable DNA polymerase because:', ['Denaturation steps reach high temperatures each cycle', 'RNA viruses lack DNA false irrelevant', 'Primers are proteins false short oligonucleotides DNA', 'Cells replicate without polymerase false'], 'A'),
        Q('Glucose biosensors often use enzyme:', ['Glucose oxidase linked to measurable signal chemically', 'Rubisco', 'Telomerase exclusively aging assay different', 'Nitrogenase ambient O2 destroys nitrogenase iron sulfur caution'], 'A'),
        Q('Enzymes in detergents may include:', ['Proteases and amylases targeting protein and starch stains product dependent', 'Only lipids never enzymes false lipases exist too', 'DNA ligase dishwashing rarely', 'Insulin folding aid false'], 'A'),
      ];
    case '3-0':
      return [
        Q('Aa × Aa with complete dominance yields phenotype ratio:', ['3:1 dominant to recessive in idealized Mendel pea traits', '1:2:1 always phenotype false genotypic sometimes confusion', '9:3:3:1 dihybrid cross different', 'All dominant always false'], 'A'),
        Q('Segregation in meiosis explains Mendel’s first law because:', ['Alleles on homologs separate into different gametes when homozygous for two alleles one per homolog standard story', 'Sister chromatids separate meiosis II timing confusion careful segregation law usually framed homolog separation meiosis I classical', 'Mitosis explains inheritance false somatic', 'Random mating population genetics different scope'], 'A'),
        Q('Testcross with recessive reveals unknown dominant genotype by:', ['Observing offspring phenotypes inferring heterozygosity if recessive appears', 'Counting grandparents only', 'Measuring leaf mass', 'Blood type always false unless trait is blood typing'], 'A'),
        Q('Independent assortment explains variation when genes are:', ['On different chromosomes or far apart linked on same chromosome recombination', 'Always tightly linked without crossing over false exceptions', 'Inside mitochondria maternal inheritance different pattern', 'Absorbed from food nonsense'], 'A'),
        Q('Probability of two independent events both occurring multiplies because:', ['Joint probability under independence assumption introductory', 'You always add probabilities exclusive outcomes rule different confusion', 'Genes never assort independently false chromosomes assort independently mostly for different loci far apart', 'Chance squared always false formula careful dependent events differ'], 'A'),
      ];
    case '3-1':
      return [
        Q('Codominance means heterozygote shows:', ['Both alleles distinctly as in AB blood type classic', 'Intermediate blend incomplete dominance different roan cattle snapdragon example confusion', 'Only recessive phenotype', 'Lethality always false sometimes lethal alleles different concept'], 'A'),
        Q('Incomplete dominance heterozygote phenotype often:', ['Intermediate blending between homozygotes like pink snapdragons from red white crosses classic', 'Both parental phenotypes expressed distinctly codominance different', 'Always lethal false not necessarily', 'Matches dominant completely'], 'A'),
        Q('Sex-linked recessive manifests more in XY individuals when:', ['Single X recessive allele expressed hemizygous for X-linked recessive conditions classic color blindness context', 'Two X copies always mask false homozygous recessive female can express rare', 'Autosome location', 'Mitochondria only'], 'A'),
        Q('Epistasis masks phenotypes because:', ['One gene product affects expression pathway of another gene’s trait polygenic pathways common in pigmentation biochemistry teaching', 'genes never interact false pathways intersect often metabolic', 'dominance disappears always false epistasis different concept', 'mutations never occur false plenty occur'], 'A'),
        Q('Recombination frequency below 50% between loci suggests:', ['Linkage on same chromosome with distance measurable in map units', 'Different species automatically false same species meiosis experiment', 'Independent assortment impossible false can still assort if far apart approaches 50% unlinked', 'Nondisjunction meaning false different phenomenon'], 'A'),
      ];
    case '3-2':
      return [
        Q('DNA strands are antiparallel meaning:', ['5′ to 3′ polarity opposite on complementary strands', 'Parallel in same direction always false chemistry opposite orientation', 'Only RNA property false DNA too antiparallel double helix', 'Protein strands false question DNA'], 'A'),
        Q('Complementary base pairing in DNA is:', ['A–T and G–C with two versus three hydrogen bonds respectively introductory', 'A–G always purine purine mismatches repair identifies', 'U in DNA standard human nuclear DNA no thymine replaced false RNA uses uracil DNA thymine', 'Random pairing always false specificity Watson Crick'], 'A'),
        Q('Semiconservative replication means daughter duplexes contain:', ['One old parental strand and one newly made strand in Meselson–Stahl consistent model', 'Both brand new conservative model rejected historically', 'Random interspersed old new dispersive model rejected historically', 'RNA strands only false DNA polymer DNA'], 'A'),
        Q('Okazaki fragments occur because:', ['Lagging strand synthesis is discontinuous away from replication fork unwinding polarity polymerase only adds 5′ to 3′ with RNA primer replacement ligase connects fragments', 'Leading strand also fragment always false continuous mostly', 'Replication does not occur in S phase false it does', 'Telomerase on leading strand minutely different topic'], 'A'),
        Q('Histone modifications can influence:', ['Gene accessibility transcriptional regulation epigenetics intro not changing DNA sequence but expression', 'Primary DNA sequence always directly false same sequence can differ expression', 'ATP hydrolysis in muscle exclusively false chromatin remodeling uses ATP though', 'Bacterial conjugation pilus'], 'A'),
      ];
    case '3-3':
      return [
        Q('Transcription produces:', ['RNA from DNA template', 'Protein directly translation does that', 'DNA copies without correction replication different process', 'Lipid bilayer'], 'A'),
        Q('mRNA capping and poly-A tail in eukaryotes help:', ['Stability and export ribosome recognition introductory overview not prokaryotes same details', 'tRNA charging aminoacylation different enzyme activity', 'DNA methylation maintenance different enzymes DNMT', 'Peptide bond formation ribosome peptidyl transferase activity translation stage'], 'A'),
        Q('A nonsense mutation introduces:', ['Premature stop codon truncating protein often nonfunctional or unstable', 'Silent change always false often drastic nonsense', 'Missense definitely amino acid swap not always stop nonsense specific stop codon', 'Frameshift indel different unless coincidentally creates stop though nonsense often point to stop'], 'A'),
        Q('Silent mutations may still affect:', ['Splicing regulatory sites or translation speed codon usage bias not truly always silent effects possible modern view exam intro still classic silent synonymous term used carefully', 'Absolutely nothing always false biology rarely absolute', 'Eye color directly always false indirect rare', 'Chromosome number'], 'A'),
        Q('Lac operon regulation in E. coli illustrates:', ['Inducible genes when lactose present removing repressor simple negative control story intro details CAP positive regulation glucose starvation interplay nuance exists', 'eukaryotic polycomb silencing false prokaryotic operon', 'DNA replication initiation only oriC different', 'Photosynthetic Calvin cycle enzyme regulation chloroplast'], 'A'),
      ];
    case '3-4':
      return [
        Q('Recombinant plasmids are formed by:', ['Ligating insert DNA with vector cut by compatible restriction sites', 'Hope alone', 'Stirring without ligase usually low efficiency unless very compatible ends rare', 'Reading newspapers'], 'A'),
        Q('Selectable markers in cloning vectors often:', ['Confer antibiotic resistance to identify bacteria that took plasmid lab safety stewardship teaching avoid misuse', 'Kill all bacteria always false selection identifies survivors that took plasmid marker', 'Encode GFP always false sometimes but not definition marker', 'Are always human insulin gene false selectable marker typically different gene from insert often'], 'A'),
        Q('CRISPR–Cas9 requires:', ['Guide RNA specifying target DNA via base pairing protospacer adjacent motif PAM constraints', 'Random cuts without guidance false specificity from gRNA mostly', 'RNA primer from primase replication different', 'Reverse transcriptase exclusively false RNA-seq library sometimes'], 'A'),
        Q('cDNA libraries are constructed from:', ['mRNA via reverse transcription useful for expression clones lacking introns for bacterial expression contexts', 'genomic DNA with introns problematic in bacterial expression systems teaching contrast', 'protein digests', 'rRNA abundant contamination removed partially by polyT capture eukaryotic mRNA enrichment'], 'A'),
        Q('Ethical debates on germline editing stress partly:', ['Heritable unpredictable off-target lifelong consent generations equity global governance UNESCO WHO discussions awareness intro not exam legal detail', 'somatic-only editing identical risk profile false different inheritance stakes', 'there are zero risks always false', 'enzymes never cut DNA false obviously'], 'A'),
      ];
    case '4-0':
      return [
        Q('Homeostasis means organisms tend to maintain:', ['Stable internal environment amid external change', 'Constant external desert climate personally false organism internal', 'Zero metabolism false', 'Identical temperature to environment always false endotherms contrast'], 'A'),
        Q('Negative feedback typically:', ['Counteracts deviations restoring set point narrow core body temperature regulation example hypothalamus', 'amplifies deviations positive feedback child birth oxytocin sometimes different sign', 'operates only in plants false animals too', 'requires conscious thought false autonomic reflex arcs can negative feedback'], 'A'),
        Q('Failure of kidneys increases burden on other systems because:', ['Waste and pH regulation partially compensated not fully replaceable long term dialysis transplant contexts', 'Lungs take over nitrogen excretion nitrogen is not primary excreted as gas from protein urea urine primarily kidney context false lungs excrete CO2 acid base different', 'bones store urea false', 'skin stops sweating false'], 'A'),
        Q('Exercise stresses integrated responses involving:', ['Cardiovascular respiratory endocrine metabolic shifts together', 'only nervous system isolated false hormones too epinephrine', 'only liver false muscle too', 'only DNA replication false'], 'A'),
        Q('Set point contrast versus operating point terminology appears in some literature because:', ['Biological control has variability around target not infinite precision', 'biology is perfectly digital false analog variability noise homeostatic range', 'set point equals measured value always false oscillations circadian', 'feedback absent false'], 'A'),
      ];
    case '4-1':
      return [
        Q('Saltatory conduction in myelinated axons speeds propagation by:', ['Reducing capacitive load jumping between nodes of Ranvier', 'eliminating action potentials false still AP at nodes', 'adding more cytoplasm length false myelin insulates', 'using only chemical synapses all the way false saltatory in one axon'], 'A'),
        Q('Upper motor neuron lesions may produce:', ['Spasticity hyperreflexia classic pattern depending level damage neuro exam introductory not full clinic course', 'flaccid peripheral nerve lesion lower motor neuron different sign confusion students', 'blindness directly unless occipital unrelated false motor pathway', 'deafness cochlear unrelated false'], 'A'),
        Q('Sympathetic activation often elevates:', ['Heart rate and blood pressure among responses stress responses', 'digestive motility primarily parasympathetic rest and digest contrast generally', 'lacrimation parasympathetic facial nerve nuance', 'pupil constriction parasympathetic miosis opposite sympathetic mydriasis'], 'A'),
        Q('Photoreceptor hyperpolarization in vertebrate retina is unusual because:', ['Light decreases glutamate release signaling transduction unusual for neurons introductory sensory', 'depolarization typical of neurons stereotype excitable cells photoreceptors weird sensory exception', 'cells lack membranes false', 'no synapses false photoreceptors synapse bipolar cells'], 'A'),
        Q('Cerebrospinal fluid is produced partly by:', ['choroid plexus in ventricles circulates cushions brain anatomy intro', 'glomerulus false kidney filtration different fluid', 'lacrimal gland tears', 'pancreatic duct bicarbonate ocean'], 'A'),
      ];
    case '4-2':
      return [
        Q('Steroid hormones often:', ['Diffuse through membrane bind intracellular receptors regulate transcription rates timescale slower than many peptides hours sometimes', 'Cannot enter cells always false lipophilic steroids generally cross though some conjugated transport exceptions', 'Act only in seconds always false peptide and catecholamine fast sometimes steroids slower genomic effects', 'Synthesize proteins directly ribosomes synthesize hormones not their mechanism of hormone action'], 'A'),
        Q('Insulin secretion from beta cells rises when:', ['Blood glucose rises triggering depolarization ATP sensitive K channels close calcium influx exocytosis introductory mechanism simplified', 'blood glucose is zero false hypoglycemia suppresses insulin typically though alpha cells glucagon complex', 'epinephrine always suppresses insulin nuance exercise adrenaline sometimes complex not exam', 'cortisol always raises insulin complicated insulin resistance story'], 'A'),
        Q('TSH comes from:', ['Anterior pituitary thyrotroph cells trophic axis hierarchy TRH hypothalamus stimulates TSH secretion stimulates thyroid hormones negative feedback loop exam triad', 'posterior pituitary oxytocin ADH different place synthesis release story nuance created hypothalamus released posterior', 'thyroid parafollicular calcitonin different cell', 'adrenal medulla epinephrine'], 'A'),
        Q('Addison crisis relates to:', ['Acute adrenal insufficiency cortisol deficiency life-threatening glucocorticoid mineralocorticoid context intro not full endocrine course', 'Hyperthyroid storm opposite different', 'diabetes mellitus ketoacidosis different acute endocrine emergency category confusion students', 'hypocalcemia tetany parathyroid different'], 'A'),
        Q('Melatonin from pineal influences:', ['Circadian rhythms sleep timing introductory', 'directly parathyroid calcium false', 'ACTH secretion primarily false', 'digestive enzyme secretion primarily false'], 'A'),
      ];
    case '4-3':
      return [
        Q('Innate immunity activates:', ['Within minutes to hours without prior antigen exposure memory different adaptive timing', 'Only after two weeks exclusively adaptive lymphocyte clonal expansion slower', 'Never involves cells false phagocytes innate', 'Uses only antibodies false adaptive humoral'], 'A'),
        Q('MHC class II primarily presents to:', ['CD4+ helper T cells exogenous pathway professional APCs Introductory', 'CD8+ killers class I endogenous pathway different', 'B cells without T cell help always false T dependent antigens usually', 'mast cells degranulation allergy different'], 'A'),
        Q('Clonal selection means lymphocytes with useful receptors:', ['Proliferate upon antigen recognition introductory immunity textbook', 'exist as single identical genome all cells always false somatic recombination V DJ diversity', 'never mutate false hypermutation affinity maturation germinal centers', 'phagocytose immediately false recognition not eating first step presentation activation complex'], 'A'),
        Q('Passive immunity differs from active because:', ['Preformed antibodies transferred short-term protection maternal IgG example not long-lived memory like active vaccination', 'memory B cells transferred in passive typically not long-term host made memory active', 'always stronger false nuance', 'requires infection always false vaccine active immunization without disease usually'], 'A'),
        Q('Allergies involve:', ['IgE mediated mast cell degranulation type I hypersensitivity survey not autoimmune though related immune dysfunction umbrella', 'IgG autoimmune sometimes different mechanism type II III', 'complement only always false multiple components', 'innate immunity only false adaptive allergy arm'], 'A'),
      ];
    case '4-4':
      return [
        Q('Cardiac output equals:', ['Heart rate × stroke volume', 'Blood pressure alone false MAP different concept', 'Peripheral resistance Ohm analogy CO SVR MAP relationships interact not single equals', 'GFR kidney glomerular filtration rate different organ'], 'A'),
        Q('Systemic arteries carry oxygenated blood leaving:', ['Left ventricle to body in humans double circulation path', 'Right ventricle pulmonary artery oxygen poor to lungs false systemic oxygenated arteries aorta left ventricle exception pulmonary artery and umbilical arteries fetal special cases exam intro adult humans', 'Venae cavae to heart inflow veins', 'pulmonary veins to left atrium oxygenated that is vein carrying oxygenated blood rare exception pulmonary vein'], 'A'),
        Q('Capillary Starling forces determine:', ['Net filtration versus reabsorption in many beds tissue fluid formation intro edema if imbalance', 'oxygen diffusion only Fick’s law different though related capillary partial pressures', 'nerve action potential', 'gene transcription'], 'A'),
        Q('Lymphatic vessels return:', ['Interstitial fluid proteins missed by venous uptake immune surveilance role fat absorption chylomicrons lacteals GI specialized', 'oxygenated blood from lungs false pulmonary veins', 'CSF from brain ventricles arachnoid granulations different drainage', 'urine from kidney ureters false'], 'A'),
        Q('Platelets aggregate at injury via:', ['Adhesion activation aggregation coagulation cascade introductory', 'phagocytosis primarily neutrophils different cells', 'insulin secretion false', 'bile emulsification false'], 'A'),
      ];
    case '5-0':
      return [
        Q('Demographic momentum means population can grow after fertility drops because:', ['Large young cohorts still enter reproductive years', 'old people reproduce always false menopause etc', 'mortality becomes zero false unrealistic', 'migration stops false'], 'A'),
        Q('Crude birth rate differs from TFR because:', ['Crude uses births per total population per year TFR models lifetime per woman synthetic cohort statistic', 'identical always false', 'TFR counts only male births false obviously wrong', 'Crude always higher always false depends'], 'A'),
        Q('Logistic growth contrasted to exponential adds:', ['Carrying capacity limiting growth as resources become limiting density dependence', 'Unlimited growth parameter removed actually r intrinsic growth logistic adds K in simplest form differential equation intro', 'Random DNA mutations', 'Zero death term'], 'A'),
        Q('Survivorship type I curves show:', ['Low early mortality many survive to old age humans elephants classic teaching stereotype', 'mass seedling death type III plants many marine invertebrate offspring little parental care high early death', 'constant mortality chance age independent type II some lizards approximated lizards sometimes approximated constant hazard stylized', 'impossible pattern'], 'A'),
        Q('Age-sex pyramid interpretation intro exam:', ['Wide base suggests high youthful percentage rapid growth potential momentum if fertility stays though could also be high infant survival expanded base complex', 'Always stable population false could be growing or declining depends fertility mortality migration interplay reading skill', 'Only females shown false both sexes usually bar chart mirror', 'Indicates GDP directly false social science link not direct'], 'A'),
      ];
    case '5-1':
      return [
        Q('Demographic transition theory broadly links:', ['Falling mortality followed eventually by falling fertility during modernization narratives many exceptions critiques not deterministic law', 'instant low birth immediately always false lag cultural economic factors', 'constant high birth always false stage I high both stage IV low both roughly stylized', 'climate exclusively false socioeconomic many drivers'], 'A'),
        Q('Urbanization can strain:', ['Infrastructure water sanitation housing if planning lags megacity informal settlements contexts not deterministic harm always investment matters', 'rural soil organic matter directly always false indirect migration shifts labor remittances complex', 'moonlight levels false joke', 'Earth’s core temperature false'], 'A'),
        Q('Female education correlates in many studies with:', ['Lower fertility voluntary reproductive choices delayed age at first birth opportunities pathways not sole cause always careful causal language exam', 'Higher fertility always false many contexts opposite association observed historically as education rises fertility falls association not guaranteed individual level', 'Zero maternal health improvement false often improves health literacy though not guaranteed universal', 'Eliminates migration false'], 'A'),
        Q('Youth bulge can represent:', ['Opportunity if education jobs match demographic dividend not automatic riots risk if mismatch political economy caution intro peace and conflict studies nuance not biology exam heavy but awareness', 'only elderly population false youth many', 'post-industrial shrinkage always false opposite young cohort large', 'balanced age structure always false bulge not balanced'], 'A'),
        Q('Brain drain ethical debate includes:', ['Rights to migrate versus source country human resource losses training subsidies fair compensation recruitment codes WHO guidelines awareness intro not law exam', 'No ethical dimension false contested', 'automatic harms always false remittances can benefit source sometimes', 'only rich countries matter false global health equity framing'], 'A'),
      ];
    case '5-2':
      return [
        Q('Renewable groundwater can be overdrafted when:', ['Pumping exceeds long-term recharge average dropping water tables wells dry saltwater intrusion coastal aquifers context dependent hydrogeology intro not engineering exam depth', 'Rain always increases instantly false drought climate change contexts complex', 'Population zero false', 'Forests never influence recharge false land use influences infiltration'], 'A'),
        Q('Soil erosion by overland flow on hillsides is most increased by:', ['Steep slopes, high rainfall intensity, and reduced vegetative cover', 'Contour terracing that slows runoff', 'Increased soil organic matter and rooting', 'Contour strip cropping compared to upslope–downslope tillage'], 'A'),
        Q('Fuelwood dependence can contribute to deforestation when:', ['Harvest exceeds regrowth sustainable yield community forestry governance matters poverty energy access transitions improved cookstoves solar alternatives development context Ethiopia awareness relevance student localized exam without prescribing policy', 'Planting trees always worsens false opposite', 'Rain causes fire false', 'Photosynthesis stops false'], 'A'),
        Q('Fisheries MSY maximum sustainable yield is:', ['Contested modern fisheries science ecosystem based approach replacing naive MSY but textbook intro may still mention as teaching pivot historically collapsed fisheries awareness exam moral: avoid oversimplified overconfidence', 'Always perfectly known false uncertainty recruitment environmental stochasticity', 'Equals zero catch always false', 'Independent of fishing technology false easier catch can exceed recruitment if tech improves'], 'A'),
        Q('Integrated water resource management emphasizes:', ['Cross-sector coordination agriculture domestic industry ecosystem needs participation governance ideals IWRM slogan introduction', 'Dam only engineer top dictator false participatory rhetoric though real world messy', 'Single objective maximize irrigation yield only ignoring downstream false bad externalities', 'Ignoring transboundary rivers politically complex Nile example regionally sensitive exam neutral factual only coordination concept'], 'A'),
      ];
    case '5-3':
      return [
        Q('Biodiversity includes variation at:', ['Genetic species ecosystem levels hierarchical awareness', 'Only zoo animals false wild crucial', 'Only tropical forests false all biomes matter', 'DNA base pairs only narrow'], 'A'),
        Q('In-situ conservation means:', ['Protecting ecosystems in natural settings national parks community conserved areas', 'Zoos exclusively false ex situ opposite primarily though some overlap captive insurance populations amphibian fungal crisis nuanced', 'Gene banks seeds ex situ', 'Books about nature only false'], 'A'),
        Q('Edge effects in habitat fragments can alter:', ['Microclimate species composition favoring generalists sometimes biotic homogenization concerns', 'nothing always false', 'only abiotic temperature never biotic false species interactions edges species mix invasive corridors sometimes', 'gravity'], 'A'),
        Q('Endemic species are especially vulnerable when:', ['Ranges are small disturbance can eliminate entire distribution island mountain tops Ethiopian endemic flora fauna awareness without naming politically charged specifics exam generic', 'They reproduce rapidly always false often slow K selected', 'They inhabit multiple continents cosmopolitan opposite safer often though not invulnerable due to shared threats', 'They are domesticated always false'], 'A'),
        Q('Bioprospecting ethical concerns include:', ['Benefit sharing with local communities Nagoya protocol awareness intellectual property equity biopiracy historical grievances cinnamon etc. story teaching intro nuanced exam not legal details', 'No useful chemistry false many drugs plant derived inspiration at least', 'Everything patentable freely false ethical debate exactly', 'Only rich nations host biodiversity false megadiverse developing nations often'], 'A'),
      ];
    case '5-4':
      return [
        Q('Climate adaptation for rainfed farmers may include:', ['Drought-tolerant varieties rainwater harvesting early warning systems diversified livelihoods—not silver bullet packages context Ethiopia highlands Sahel generic intro', 'Ignoring forecasts entirely false sometimes harmful', 'Planting only waterlogged rice in deserts false agronomy mismatch', 'Stopping all emissions personally insufficient systemic mitigation overlap yet question adaptation coping with locked-in warming already committed'], 'A'),
        Q('Mitigation of greenhouse gases includes:', ['Switching from coal to renewables energy efficiency reforestation where ecologically appropriate—not simplistic exam item but directionally reduce sources enhance sinks comparative advantage framing intro IPCC AR summaries awareness students', 'Adaptation planting crops synonyms false mitigation reduce emissions adaptation cope already baked in warming exam distinction important', 'Only individual reusable straws myth busting systemic energy transport industry majority emissions narrative awareness not exam trap dismiss small actions false dichotomy better both but systemic critical', 'Increasing coal subsidies false opposite'], 'A'),
        Q('Payment for ecosystem services might fund:', ['Upstream landowners to maintain forests regulating downstream water flow scheme designs tricky monitoring enforcement corruption risks fairness critiques political ecology intro mention exam awareness that economics tool exists not endorsement', 'Polluters unlimited rights false polluter pays contrasting principle earlier different exam item could contrast', 'Mandatory slavery false hyperbole unethical obviously', 'Building walls in ocean false joke'], 'A'),
        Q('Citizen science can contribute data to:', ['Species distribution modelling conservation planning iNaturalist eBird examples quality control issues but scale benefits tradeoffs', 'Replace expert taxonomists entirely false mentorship needed misID rates', 'Eliminate statistics false', 'Prove moon landing false conspiracy off topic'], 'A'),
        Q('Environmental justice concerns include:', ['Disparate pollution burdens by income race globally documented US Flint Michigan globally many LMIC industrial siting waste dumping externalization richer countries shipping waste awareness intro ethics bridge—not exam depth legal', 'Perfectly equitable exposure always false empirical studies often inequitable', 'Irrelevant to health false respiratory cardiovascular harms PM2.5 etc.', 'Only aesthetics false wellbeing'], 'A'),
      ];
    default:
      return [
        Q('Which choice applies the core concept for this topic most directly?', ['Matches definition and scenario together', 'Imports unrelated mechanism', 'Reverses cause and effect', 'Uses nonbiological quantity as answer'], 'A'),
        Q('When two answers look similar, prefer the one that:', ['References the pathway or structure emphasized in this unit', 'Adds unrelated jargon', 'Ignores the prompt scenario', 'Assumes extreme always'], 'A'),
        Q('Exam-strong distractors often sound plausible because:', ['They use half-true related facts', 'They are gibberish', 'They repeat the stem verbatim', 'They are never wrong'], 'A'),
        Q('Synthesis in Grade 11 Biology might link:', ['Genetics, physiology, and population-resource interactions in applied contexts', 'Only Latin roots', 'Mineral hardness Mohs scale geology', 'Engine torque'], 'A'),
        Q('Choose the option consistent with Ethiopian curriculum competencies for this strand.', ['Evidence-based reasoning and responsible citizenship framing environment health agriculture nexus generic but acceptable default', 'Reject measurement', 'Memorize only dates of kings unrelated', 'Assume zero uncertainty in science false'], 'A'),
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
