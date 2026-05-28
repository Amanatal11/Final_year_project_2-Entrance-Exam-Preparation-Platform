/**
 * Grade 12 Biology curriculum — Units 1–3 (Natural stream, MoE Ethiopia–style outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Evolution and the history of life',
    chapterDescription:
      'From early ideas to natural selection, speciation, and evidence that links all living things through common descent.',
    topics: [
      {
        topicName: 'Historical views and the development of evolutionary thought',
        topicDescription: 'Pre-Darwin ideas; Wallace and Darwin; patterns versus processes.',
        topicObjectives: [
          'Contrast fixist or catastrophist ideas with descent with modification.',
          'State why scientific use of “theory” differs from everyday “guess”.',
        ],
      },
      {
        topicName: 'Variation, fitness, and natural selection',
        topicDescription: 'Heritable variation; differential survival and reproduction; selection types at survey level.',
        topicObjectives: [
          'Explain natural selection using variation, inheritance, and differential success.',
          'Give examples of directional, stabilizing, and disruptive selection.',
        ],
      },
      {
        topicName: 'Species concepts and speciation',
        topicDescription: 'Reproductive isolation mechanisms; allopatric and sympatric patterns—introductory.',
        topicObjectives: [
          'Differentiate prezygotic versus postzygotic barriers.',
          'Relate geographic isolation to allopatric speciation models.',
        ],
      },
      {
        topicName: 'Evidence for evolution',
        topicDescription: 'Paleontology, comparative anatomy (homology–analogy), embryology, biogeography, molecular sequences.',
        topicObjectives: [
          'Identify homologous versus analogous structures with examples.',
          'Interpret simple phylogenies as hypotheses about shared ancestry.',
        ],
      },
      {
        topicName: 'Macroevolution and human origins (survey)',
        topicDescription: 'Mass extinctions; major transitions; hominin timeline in broad outline.',
        topicObjectives: [
          'Recognize that extinction and diversification shape the tree of life.',
          'Place early hominins in a survey-level African context (no oversimplified “linear ladder”).',
        ],
      },
    ],
    exercises: [
      ex(0, 'Descent', 'Descent with modification implies modern species share:', ['No history with each other', 'Ancestry with change along lineages', 'Identical genomes', 'Only cultural traits'], 1, 'Easy'),
      ex(0, 'Lamarck', 'Inheritance of acquired traits as a universal mechanism is:', ['Supported by modern genetics as stated classically', 'Not the main mechanism Darwin emphasized for adaptation to environment Lamarck popular misconception', 'Same as natural selection exactly', 'Proven for direction of giraffe neck growth in one life'], 1, 'Medium'),
      ex(1, 'Fitness', 'In evolutionary usage, fitness most closely reflects:', ['Gym score only', 'Differential reproductive success in a given environment', 'Body size always', 'Maximum speed only'], 1, 'Easy'),
      ex(1, 'Stabilizing', 'Stabilizing selection tends to:', ['Favor intermediate phenotypes over extremes', 'Always favor one extreme', 'Increase variance always', 'Eliminate heritability'], 0, 'Medium'),
      ex(2, 'Prezygotic', 'Temporal isolation (different mating seasons) is:', ['Prezygotic reproductive barrier', 'Postzygotic hybrid sterility', 'Geographic accident only never categorical', 'Somatic mutation'], 0, 'Medium'),
      ex(2, 'Allopatric', 'Allopatric speciation is often initiated by:', ['Physical separation reducing gene flow', 'Instant sympatry without barriers', 'Lamarckian stretching', 'Only polyploidy events always'], 0, 'Easy'),
      ex(3, 'Homolog', 'A bird wing and a bat forelimb are often cited as:', ['Analogous only always false—bones homologous different wing skin vs feather convergent flight surfaces analogous overall mixed example careful exam pick homology of limb bones underneath', 'Homologous skeletal elements with different functions', 'Identical proteins always false', 'Convergent on scales only'], 1, 'Hard'),
      ex(3, 'Vestigial', 'A reduced hind-limb skeleton in whale fossils illustrates:', ['Homology with tetrapods', 'No relationship to mammals false', 'Convergent evolution with fish fins only false', 'Lack of DNA'], 0, 'Medium'),
      ex(4, 'Mass ext', 'Mass extinction events can:', ['Remove lineages and reshape ecological opportunity for survivors', 'Increase diversity instantly always false lag', 'Stop evolution permanently false', 'Only affect plants'], 0, 'Medium'),
      ex(4, 'Africa', 'Major lines of evidence for hominin evolution in Africa include:', ['Fossil and genetic patterns as survey', 'Exclusive European origin universally false outdated', 'No shared ancestry with other primates false', 'Written records from 10 Ma false'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Evolutionary thought',
        problems: [
          P('Darwin’s core explanatory mechanism for adaptation was:', ['natural selection on heritable variation in populations', 'inheritance of acquired characters as sole force', 'divine special creation in each habitat', 'random drift always primary false'], 'A', ''),
          P('A scientific theory in biology:', ['integrates many observations under testable explanations unlike casual guess usage', 'becomes a law when popular false different epistemology', 'cannot be revised false science updates with evidence', 'equals absolute certainty false'], 'A', ''),
          P('Alfred Russel Wallace independently proposed ideas similar to Darwin about:', ['change driven by environmental pressures and reproductive success contexts', 'fixity of species', 'age of Earth thousands of years only false geology', 'non-heritable variation'], 'A', ''),
          P('Microevolution refers to:', ['change in allele frequencies within populations over generations', 'origin of life from chemicals abiotically always different topic', 'only macrofossils false', 'only human culture'], 'A', ''),
          P('Macroevolution refers broadly to:', ['patterns at speciation level and above including major transitions', 'changes in one meiosis', 'daily acclimatization reversible', 'only genetics lab assays'], 'A', ''),
          P('Common misconceptions confuse evolution with:', ['progress toward “higher” goals or perfection teleology careful teaching', 'population genetics definitions false', 'heritable variation facts', 'fossils as historical evidence'], 'A', ''),
          P('Artificial selection demonstrates:', ['heritable variation plus differential reproduction based on human preference analogous to natural selection', 'that Lamarckian use/disuse alone explains domestication false breeders select variants', 'species cannot change false', 'DNA absence in cells false'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — Natural selection',
        problems: [
          P('Natural selection requires:', ['heritable variation affecting survival or reproduction outcomes overview', 'goal-directed mutations upward false', 'uniform phenotypes', 'zero reproduction'], 'A', ''),
          P('Directional selection shifts trait means when:', ['one extreme phenotype has higher fitness in changed environment classic pepper moth industrial melanism style story', 'intermediate always highest stabilizing different', 'no genetic variation', 'only heterozygote advantage'], 'A', ''),
          P('Disruptive selection can:', ['favor extremes over intermediates in some environments bimodal distributions contexts', 'only narrow normal distributions always false', 'never change variance false can increase', 'require DNA absence false'], 'A', ''),
          P('Frequency-dependent selection means fitness depends on:', ['phenotype frequency in population predator search image host-parasite interactions examples', 'thermodynamics of sun only', 'atomic mass carbon only', 'ocean depth only'], 'A', ''),
          P('Sexual selection can produce:', ['traits affecting mating success sometimes costly survival tradeoffs peacock tails overview', 'strictly identical sexes always false', 'mitochondrial unrelated traits confused', 'photosynthetic animals'], 'A', ''),
          P('Gene flow tends to:', ['reduce genetic differences between populations when individuals migrate and reproduce', 'always cause speciation false often homogenizes', 'eliminate mutation entirely false new mutations still occur', 'increase fixation without drift false complex'], 'A', ''),
          P('Genetic drift is stronger in:', ['small populations where sampling error shifts allele frequencies by chance', 'infinite populations with migration always zero drift false', 'only bacteria false all populations finite', 'only diploids false'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — Speciation',
        problems: [
          P('Biological species concept emphasizes:', ['reproductive isolation between species concepts debates ring species bacteria challenges but textbook anchor', 'morphology only always false cryptic species molecular discovery', 'ecological niche exclusively sometimes blended definitions', 'fossil record completeness false'], 'A', ''),
          P('Habitat isolation is:', ['prezygotic ecological separation reducing encounter rates', 'hybrid sterility postzygotic', 'polyploidy instantly always false can be instant sometimes sympatric plant cases different', 'mitochondrial disease'], 'A', ''),
          P('Reduced hybrid viability is:', ['postzygotic barrier hybrid offspring lower survival', 'behavioral premating isolation prezygotic different', 'gametic incompatibility prezygotic fertilization failure', 'different seasons prezygotic'], 'A', ''),
          P('Polyploidy can promote speciation especially in:', ['plants where instant reproductive isolation may arise from chromosome doubling contexts', 'birds exclusively false rare', 'mammals usually false common plant route', 'bacteria binary fission confusion'], 'A', ''),
          P('Adaptive radiation may follow:', ['ecological opportunity after colonization or mass extinction freeing niches finch classic Galápagos intro', 'uniform environment with one niche only often not radiation conditions', 'loss of all predators always false', 'complete genetic uniformity false needs variation'], 'A', ''),
          P('Hybrid zones can illustrate:', ['incomplete isolation and ongoing gene flow tension between models', 'total absence of mating always false', 'only laboratory artifacts false natural zones exist', 'instant perfect barriers'], 'A', ''),
          P('Ring species concept suggests:', ['a chain of intergrading populations where ends cannot interbreed though intermediates can geography-dependent model debated but teaching awareness', 'perfect typological species always false', 'DNA meaningless', 'only fossil species false'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — Evidence',
        problems: [
          P('Homology of tetrapod limbs supports:', ['common ancestry with modification', 'convergent evolution only false analogous wings different story bat bird if comparing limbs vs wings mixed', 'independent creation identical blueprints always', 'absence of genes false'], 'A', ''),
          P('Analogous structures arise from:', ['convergent evolution similar function different ancestry bird vs insect wing iconic exam', 'shared deep homology same genes always false analogies often differ developmental pathways', 'vestigial only false', 'embryonic recapitulation false analogy different from recapitulation issue'], 'A', ''),
          P('Vestigial traits may persist when:', ['not strongly detrimental or through pleiotropy/developmental constraints contexts', 'they always increase fitness false definition mismatch', 'species lack DNA false', 'environment perfectly constant always false'], 'A', ''),
          P('Molecular clock uses roughly:', ['mutation rate assumptions sequences calibrate divergence times with uncertainty caveats not precision stopwatch', 'only fossil dates exclusive false integrates sometimes', 'perfect constancy always false rate variation', 'blood types only false'], 'A', ''),
          P('Endemic island forms illustrate:', ['migration founder events and rapid diversification opportunities geography evolution textbook', 'only continental shelf species false', 'no selection false', 'human migration maps political'], 'A', ''),
          P('Transitional fossils like feathered dinosaurs clarify:', ['linkages among major groups bridging morphological gaps interpretive though careful wording', 'that fossils are never informative false young-earth denial contrast science exam neutral', 'instantaneous creation of birds false gradations', 'birds lack skeletons false'], 'A', ''),
          P('Embryological similarities (with caveats simplifying older recapitulation claims) helped Darwin argue:', ['community of embryonic forms may reflect shared ancestry developmental hourglass nuances modern field complex', 'adults always identical false', 'recapitulation strictly true without revision false outdated strong form', 'plants and animals indistinguishable always false'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — Macroevolution & humans',
        problems: [
          P('Punctuated equilibrium proposes:', ['long stasis punctuated by relatively rapid change in geologically detected patterns Eldredge-Gould framing debate with gradualism fossil record resolution issues', 'constant slow change only always false alternative model', 'no speciation ever false', 'only bacteria evolve false'], 'A', ''),
          P('Co-evolution can produce:', ['reciprocal evolutionary change between interacting species pollinators toxic prey arms races contexts', 'uniform global species always false', 'no genetic variation', 'instant new body plans every generation'], 'A', ''),
          P('Evidence humans share ancestry with great apes includes:', ['genomic synteny and high coding similarity alongside derived human changes FOXP2 etc. survey', 'zero DNA similarity false', 'humans have cells plants lack false irrelevant', 'identical karyotypes always false chromosome fusion 2 human vs chimp etc.'], 'A', ''),
          P('Bipedalism as hominin trend relates partly to:', ['fossil pelvis and foramen magnum position changes overview not single cause storytelling careful', 'giraffe neck lengthening Lamarck', 'aquatic ape hypothesis dominant consensus false minority', 'insect wing homology'], 'A', ''),
          P('Culture and tools introduce:', ['gene-culture co-evolution models and non-genetic inheritance challenges teaching overlap with biology exam awareness', 'that evolution stops for humans false biological evolution continues variation selection drift', 'no overlap with genetics false lactase persistence etc.', 'only memes no biology false'], 'A', ''),
          P('Out-of-Africa model for modern H. sapiens broadly emphasizes:', ['recent African origin with later migration replacing or mixing with other hominins depending region genetic ancient DNA story evolving', 'multiregional continuity with no mixing always false evidence admixture Neanderthal Denisovan introgression awareness', 'European Neanderthals as ancestors exclusively false complicated mosaic', 'separate creation continents false creationism contrast'], 'A', ''),
          P('Teaching ethics with evolution includes:', ['addressing misconceptions respectfully without equating evolution with moral philosophy social Darwinism caution', 'proving ethical beliefs false philosophy separate domain', 'that survival equals moral good naturalistic fallacy', 'rejecting all religious learners always false inclusive science education goal'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Population and community ecology',
    chapterDescription:
      'Numbers of organisms, growth and regulation; interactions and succession shaping communities.',
    topics: [
      {
        topicName: 'Population attributes and sampling',
        topicDescription: 'Density, dispersion, age structure, life tables—introductory.',
        topicObjectives: [
          'Contrast exponential and logistic frameworks qualitatively.',
          'Interpret a simple survivorship curve type.',
        ],
      },
      {
        topicName: 'Population growth and regulation',
        topicDescription: 'r versus K concepts; carrying capacity; density-dependent factors.',
        topicObjectives: [
          'Explain logistic leveling near environmental limits.',
          'Give density-dependent and density-independent examples.',
        ],
      },
      {
        topicName: 'Life histories and trade-offs',
        topicDescription: 'r/K continuum as teaching simplification; fecundity, parental care, longevity.',
        topicObjectives: [
          'Relate life-history traits to environmental unpredictability or competition.',
          'Avoid rigid stereotypes; recognize continua.',
        ],
      },
      {
        topicName: 'Species interactions',
        topicDescription: 'Competition models; predation; herbivory; mutualism; parasitism—survey.',
        topicObjectives: [
          'Describe how predators and prey can cycle or stabilize.',
          'Give Ethiopian examples of mutualisms (pollination, legume symbiosis).',
        ],
      },
      {
        topicName: 'Succession and disturbance',
        topicDescription: 'Primary versus secondary succession; pioneer species; climax concepts as heuristic.',
        topicObjectives: [
          'Differentiate primary versus secondary succession with habitat examples.',
          'Explain how disturbance regimes alter community composition.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Density', 'Population density is calculated as:', ['Individuals per unit area or volume', 'Birth rate minus death rate only', 'Carrying capacity K', 'Exponential r only'], 0, 'Easy'),
      ex(0, 'Dispersion', 'Uniform dispersion can reflect:', ['Territorial competition in some species', 'Random wind dispersal always', 'Clumped always', 'No social behavior'], 0, 'Medium'),
      ex(1, 'K', 'Environmental resistance opposing exponential growth includes:', ['Resources, disease, predation among factors', 'Only sunlight', 'Zero mortality always', 'Infinite mates'], 0, 'Easy'),
      ex(1, 'Crash', 'A population crash after overshoot can occur when:', ['Density exceeds long-term support then resources collapse or disease spikes classic logistic drama teaching', 'K is infinite', 'Immigration spikes only', 'Photosynthesis stops globally'], 0, 'Medium'),
      ex(2, 'Semel', 'Semelparity means:', ['One big reproductive episode then death often in some insects fish plants', 'Continuous breeding like humans iteroparity contrast', 'Asexual only', 'No germ cells'], 0, 'Medium'),
      ex(2, 'Tradeoff', 'High parental investment often associates with:', ['Fewer offspring per reproductive bout among contrasts', 'Thousands of tiny seeds with zero care always false r strategy side', 'No learning behavior false', 'Infinite population growth'], 0, 'Medium'),
      ex(3, 'Pred', 'A refuge habitat for prey can:', ['Stabilize dynamics by preventing extinction during predator spikes', 'Always increase predator extinction only', 'Eliminate competition false', 'Stop photosynthesis'], 0, 'Medium'),
      ex(3, 'Sym', 'Rhizobia–legume root nodules exemplify:', ['Mutualism', 'Predation', 'Commensalism with zero benefit to plant false', 'Parasitism always harmful plant false'], 0, 'Easy'),
      ex(4, 'Primary', 'Primary succession begins on:', ['Newly exposed barren substrates without soil pioneer lichens etc.', 'Abandoned farmland with soil seed bank secondary different', 'Mature rainforest only', 'Ocean trenches with fish'], 0, 'Easy'),
      ex(4, 'Fire', 'Fire-adapted communities may require periodic disturbance to:', ['Maintain certain species dependent on open habitat regeneration cycles savanna ponderosa examples awareness', 'Eliminate all birds always false', 'Increase soil to zero false', 'Stop nitrogen cycle'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Population attributes',
        problems: [
          P('Mark-recapture estimates abundance using:', ['marked individuals recaptured proportion assumptions closed population caveats', 'quadrats only plants sometimes density vegetation', 'only fossils false', 'blood types'], 'A', ''),
          P('Clumped dispersion often reflects:', ['patchy resources or social grouping', 'pure lottery competition uniform sometimes territorial opposite', 'perfect independence random rare in nature many clumped', 'quantum randomness false'], 'A', ''),
          P('Generation time affects:', ['how quickly populations can respond genetically to selection r per generation framing', 'K necessarily always false different concept', 'only viruses false all life', 'Earth orbit exactly'], 'A', ''),
          P('Age pyramid with wide base suggests:', ['many young individuals and potential future momentum growth if survival allows', 'post-reproductive society only inverted triangle elderly heavy', 'zero births false many young implies births occurred', 'stable zero growth always false'], 'A', ''),
          P('Survivorship Type I (large mammals) shows:', ['low juvenile mortality high old-age mortality concave curve classic', 'mass seedling death convex Type III different', 'constant mortality diagonal Type II different', 'no mortality unrealistic'], 'A', ''),
          P('Survivorship Type III (many marine invertebrates plants seeds) shows:', ['high early mortality concave upward for survivors high later survival', 'low juvenile mortality Type I contrast', 'constant rate diagonal', 'vertical line impossible'], 'A', ''),
          P('Ecological footprint overlaps human demography by:', ['resource demand per capita times population ethics sustainability bridge not identical to biological population growth models but related policy teaching', 'DNA replication errors', 'only immigration laws', 'Kepler’s laws'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — Growth & regulation',
        problems: [
          P('Exponential growth requires:', ['unlimited resources idealization dN/dt ~ rN teaching', 'logistic crowding always false opposite regime', 'density dependence immediately', 'zero births'], 'A', ''),
          P('r in exponential model is:', ['per capita growth rate intrinsic idealized absence limits', 'carrying capacity', 'population size always', 'temperature Kelvin'], 'A', ''),
          P('Logistic curve inflection occurs when N equals:', ['K/2 maximum sustained yield teaching stock but ecosystem ethics caveats fisheries MSY controversy not biology exam depth mostly K/2 math fact', 'K maximum', 'zero', '2K impossible'], 'A', ''),
          P('Density-dependent regulation includes:', ['competition for food territoriality disease transmission rising with crowding', 'meteor impact generally density independent for impacted region catastrophic', 'volcanic eruption lava density independent mostly', 'seasonal freeze event maybe independent'], 'A', ''),
          P('Density-independent factors can include:', ['natural disasters weather extremes sometimes decimate regardless of density over short scales nuance exists', 'territoriality crowding dependent', 'disease only always density dependent not always cholera water supply mixes contexts simplified exam pick disaster independent', 'mating success necessarily'], 'A', ''),
          P('Allee effects occur when:', ['very low density harms reproduction due to mate finding or group defense cooperative breeding contexts', 'high density always lowers fitness false opposite crowding stress different Allee small N problems', 'carrying capacity infinite', 'no heritability'], 'A', ''),
          P('Harvesting at MSY level controversial but textbook mentions because:', ['mathematically derivable from logistic simplistic real fisheries ecosystem shifts recruitment stochasticity modern critique introductory pivot awareness', 'it is always sustainable ethically universally false collapsed stocks historically', 'it ignores biology completely false', 'it is same as r selection'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — Life histories',
        problems: [
          P('r-selected strategists stereotypically have:', ['high fecundity early maturity small body short lifespan in unstable environments teaching caricature continuum caveat', 'few offspring late maturity large bodies long life K stereotype different', 'no evolution possible false', 'no environmental variation'], 'A', ''),
          P('K-selected strategists stereotypically thrive when:', ['competition for limited resources favors efficiency parental care longer lifespan teaching stereotype elephants large mammals contexts', 'unpredictable boom bust only always false r more often', 'zero predation always false', 'mutations never occur'], 'A', ''),
          P('Iteroparity means:', ['multiple reproductive episodes across life', 'one-shot semelparity different', 'asexual budding only false some iteroparous sexual many', 'no meiosis'], 'A', ''),
          P('Bet-hedging in variable environments may favor:', ['variable offspring timing or dormancy strategies reducing variance fitness long run stochastic demography intro awareness', 'always same clutch size exactly one egg', 'infinite clutch without cost false trade-offs', 'diploidy elimination false'], 'A', ''),
          P('Parent-offspring conflict theory notes:', ['parent and offspring may disagree over investment trivers williams intro not exam proof', 'perfect harmony always false', 'only in plants false many animals show weaning conflict', 'no genetic conflict ever'], 'A', ''),
          P('Senescence patterns relate partly to:', ['trade-offs reproduction survival accumulation damage theories many unsolved active research still teach decline late life', 'DNA never mutates false mutation accumulation theory among', 'infinite telomeres always false', 'photosynthesis cessation animals'], 'A', ''),
          P('Human demography bridges social science because:', ['fertility choices education economics interact with health mortality not pure r/K biology only teaching boundary awareness', 'biology irrelevant false lactase etc.', 'population models never apply false', 'genes determine culture entirely false'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Interactions',
        problems: [
          P('Exploitative competition means:', ['shared limiting resource reduces availability indirectly interference is direct aggression contrast', 'fighting injuries only interference', 'mutual benefit always false competition', 'predation where prey eaten symbiosis subset predation'], 'A', ''),
          P('Lotka-Volterra predator–prey models predict:', ['cyclical oscillations under simplistic assumptions reality more complex', 'immediate equilibrium always false can cycles', 'prey always extinct false possible coexist oscillations', 'predators evolve photosynthesis false'], 'A', ''),
          P('Trophic cascades occur when:', ['changes at one trophic level indirectly affect distant levels classic kelp-urchin-sea otter story introductory', 'only plants matter false top-down examples', 'no energy loss false thermodynamics still', 'detritus absent always false'], 'A', ''),
          P('Coevolutionary arms race between host and parasite may favor:', ['sexual reproduction genetic diversity red queen hypothesis intro awareness not exam depth proof', 'asexual only always false many parasites sexual too', 'smaller genomes always false expansion sometimes', 'no immune system false'], 'A', ''),
          P('Müllerian mimicry involves:', ['harmful species evolving shared warning signals reinforced learning predators introductory aposematism overlap', 'palatable mimic of toxic model Batesian different mimicry type exam contrast', 'cleaning mutualism fish parasite different', 'cryptic camouflage only false'], 'A', ''),
          P('Batesian mimicry involves:', ['palatable mimic resembling protected model', 'two toxic species resembling each other Müllerian different', 'mutualism pollination', 'camouflage background matching crypsis different mimicry category'], 'A', ''),
          P('Keystone species concept:', ['disproportionate effect relative to biomass classic Pisaster sea star experimental removal increased mussels reduced diversity rocky intertidal intro', 'always largest body mass false often small predator or engineer beaver', 'synonymous with apex predator always false could be engineer or mutualist disruptor fig wasp complex', 'irrelevant to conservation false concept motivates protection'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Succession',
        problems: [
          P('Secondary succession follows disturbance that:', ['leaves soil and often seed bank intact agriculture abandonment fire suppressed then allowed regrowth contexts', 'volcanic lava creating new rock primary different no soil', 'glacier scouring bare rock primary', 'ocean floor spreading primary sense'], 'A', ''),
          P('Facilitation in succession means early species:', ['modify environment improving conditions for later colonists classic dunes nitrogen fixers', 'always prevent all later species false sometimes inhibition', 'never die false', 'photosynthesize at night only false'], 'A', ''),
          P('Tolerance model suggests later species can establish:', ['under existing canopy given resources tolerant to shade compared facilitation emphasis depends system examined modern models interplay', 'only on bare rock always false succession stage dependent', 'without water false', 'instant climax no time false'], 'A', ''),
          P('Inhibition model suggests early colonists:', ['make site worse for others until they die release space later successional stages', 'always help everyone facilitation opposite narrative species dependent', 'never compete false', 'fix nitrogen always false not universal'], 'A', ''),
          P('Climax community terminology is:', ['heuristic historically equilibrium ideas disturbance regimes modern non-equilibrium challenge but teaching mention', 'law of nature exact endpoint always false fire resets many biomes', 'only tropical false all biomes', 'means no biodiversity false can be diverse'], 'A', ''),
          P('Intermediate disturbance hypothesis proposes:', ['moderate disturbance maximizes diversity by preventing competitive exclusion and specialist dominance extremes extremes sometimes collapse diversity low high context Hutchinson connell discussions intro', 'zero disturbance maximizes always false can lower diversity competitive dominance', 'maximum disturbance maximizes diversity always false often lowers', 'disturbance irrelevant false'], 'A', ''),
          P('Restoration ecology may accelerate succession by:', ['planting natives controlling invasives restoring hydrology soil microbiome reinoculation contexts Ethiopian watershed projects awareness', 'adding concrete always false unless extreme civil engineering stabilizing erosion sometimes controversial', 'removing all humans always false participatory conservation often ethical best practice', 'random exotic species false often harmful'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 3: Ecosystem energy, matter, and biomes',
    chapterDescription:
      'How energy flows and nutrients cycle through ecosystems; major biomes and human-caused change.',
    topics: [
      {
        topicName: 'Energy flow and trophic structure',
        topicDescription: 'Food chains and webs; energy pyramids; trophic levels.',
        topicObjectives: [
          'Explain why energy pyramids are typically upright.',
          'Trace carbon from photosynthesis to respiration at survey level.',
        ],
      },
      {
        topicName: 'Productivity and efficiency',
        topicDescription: 'GPP, NPP; ecological efficiency percentages—introductory.',
        topicObjectives: [
          'Differentiate gross and net primary productivity conceptually.',
          'State why top predators are few relative to plants.',
        ],
      },
      {
        topicName: 'Biogeochemical cycles',
        topicDescription: 'Water, carbon, nitrogen, phosphorus—pools, fluxes, human acceleration.',
        topicObjectives: [
          'Identify major reservoirs versus annual fluxes at conceptual level.',
          'Relate fixation and denitrification to the nitrogen cycle.',
        ],
      },
      {
        topicName: 'World biomes and Ethiopian landscapes (survey)',
        topicDescription: 'Climate–soil–vegetation relationships; afroalpine, dryland, rift valley contexts.',
        topicObjectives: [
          'Match biome to rainfall and temperature patterns broadly.',
          'Give one Ethiopian ecosystem example and its service.',
        ],
      },
      {
        topicName: 'Human-driven ecosystem change',
        topicDescription: 'Land-use change, invasive species, eutrophication, fragmentation, climate interactions.',
        topicObjectives: [
          'Link nutrient runoff to water quality.',
          'Propose evidence-based mitigation relevant to local watersheds.',
        ],
      },
    ],
    exercises: [
      ex(0, '10%', 'Roughly ~10% energy transfer between trophic levels is:', ['A teaching rule of thumb with many exceptions', 'Exact physical law like thermodynamics conservation false', '100% efficient', 'Zero always'], 0, 'Easy'),
      ex(0, 'Decomp', 'Detritivores channel energy from dead organic matter to:', ['Higher trophic levels in detritus food chains', 'Only sunlight', 'Lithosphere only', 'Ozone layer'], 0, 'Medium'),
      ex(1, 'NPP', 'Net primary productivity is:', ['GPP minus plant respiration', 'Total solar flux', 'Only animal growth', 'Carbon in fossil fuels only'], 0, 'Medium'),
      ex(1, 'Biomass', 'Standing crop biomass in a trophic level:', ['Not same as energy flow rate though related snapshot versus flux confusion teaching', 'Always increases up the chain false energy decreases numbers may decrease too often pyramids', 'Equals NPP always false', 'Unrelated to photosynthesis false'], 0, 'Hard'),
      ex(2, 'N fix', 'Biological nitrogen fixation converts atmospheric N₂ to:', ['Ammonia/amino intermediates via nitrogenase contexts', 'N₂O only laughing gas false mixture step', 'Ozone', 'Pure diamonds'], 0, 'Easy'),
      ex(2, 'Denitrif', 'Denitrifying bacteria in low oxygen can:', ['Return nitrogen to atmosphere as N₂ gas closing cycle partly', 'Fix nitrogen symbiotically legume root confusion opposite process', 'Photosynthesize using N₂ false', 'Create petroleum'], 0, 'Medium'),
      ex(3, 'Savanna', 'Tropical savanna climate often features:', ['Seasonal rainfall with grass–tree mixture fire herbivory regime', 'Continuous dense canopy rainforest', 'Permanent ice', 'No soil false'], 0, 'Easy'),
      ex(3, 'Afromontane', 'Afroalpine vegetation above treeline shows:', ['Low stature plants adapted to cold UV wind exposure giant lobelia senecio iconic Ethiopia highlands intro tourism aware exam neutral', 'tropical coral reef species false', 'deep ocean fish', 'mangrove pneumatophores false'], 0, 'Medium'),
      ex(4, 'Eutro', 'Agricultural fertilizer runoff can cause:', ['Algal blooms oxygen sag as bacteria decompose dead algae eutrophication', 'Instant desertification always false different mechanism though land degradation related upstream', 'Salinization identical always false different ion issue irrigation sometimes', 'Increase stratospheric ozone false'], 0, 'Medium'),
      ex(4, 'Invasive', 'Invasive plant spread can reduce:', ['Native diversity through competition altered fire regime niche displacement contexts Parthenium in East Africa awareness exam generic', 'Global oxygen production to zero false though local changes', 'Sunlight globally false', 'Gravity'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Energy flow',
        problems: [
          P('Why are food chains rarely long energetically:', ['multiplicative losses at each transfer thermodynamic inefficiencies respiration not all biomass edible', 'energy created at each level false violates thermodynamics', 'predators eat all energy false much lost heat', 'plants consume animals primarily false'], 'A', ''),
          P('Gross primary productivity differs from net because:', ['GPP includes total photosynthetic carbon fixation while NPP subtracts plant respiration', 'NPP is always higher false opposite typically', 'they are identical false', 'NPP measures only animals false'], 'A', ''),
          P('Trophic level 1 in many textbooks refers to:', ['primary producers autotrophs', 'apex carnivores', 'decomposers sometimes separate detritivore channel teaching variation aware', 'sunlight as trophic level false'], 'A', ''),
          P('Food web complexity matters because:', ['alternative pathways can stabilize system when one link removed redundancy context weak trophic cascades debates', 'linear chains only always false webs ubiquitous', 'energy duplication magically false', 'no omnivory false omnivores exist'], 'A', ''),
          P('Biomass pyramid inversion can occur in:', ['aquatic systems where phytoplankton turnover fast small standing crop supports zooplankton biomass temporarily inverted snapshot', 'terrestrial always upright false teaching exception highlight', 'all ecosystems always one shape false', 'pyramids irrelevant false'], 'A', ''),
          P('Herbivory transfers energy from:', ['plants to herbivores consumption not all plant biomass eaten defenses', 'sun directly to lions false except in weird metaphor', 'detritus to CO2 without plants false', 'bacteria to viruses confused'], 'A', ''),
          P('Decomposition returns nutrients to:', ['inorganic pools usable by producers closing nutrient cycle energy not recycled second law link teaching contrast', 'space permanently false mostly Earth system closed chemically mostly materials circulate', 'inside Earth core false mantle irrelevant to ecology day to day', 'only oceans false soil atmosphere too'], 'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Productivity',
        problems: [
          P('Which biome tends toward very high NPP tropical seasonal forests etc varies but tropical rainforests often cited high productivity though nutrient paradox awareness optional exam keep simple', ['Tropical rainforests among highest productivity regions annual carbon fixation large leaf area year-round where moisture allows', 'Polar deserts very low not high', 'Open ocean gyre unexpectedly low productivity despite water iron limitation paradox contrasts coastal upwelling high', 'deep sea vent chemoautotroph localized exceptions not regional NPP dominance'], 'A', ''),
          P('Lindeman classic efficiency ~10% between trophic levels reflects:', ['energy not converted entirely to consumer production much respired heat unassimilated egested', 'perfect conversion false', 'violation of energy conservation false energy conserved but degraded heat quality second law', 'plants fake carbon false'], 'A', ''),
          P('Secondary productivity refers to:', ['heterotroph biomass increase per time', 'plant growth only primary different term', 'detritus mass in soil always false context', 'fossil fuel formation'], 'A', ''),
          P('Light limitation in oceans:', ['photic zone depth turbidity latitude seasonal mixing iron availability iron fertilization experiments complex HLAD topics intro', 'uniform brightness everywhere false', 'prevents all life abyss chemosynthesis vent communities exceptions false photic not needed there', 'only freshwater false'], 'A', ''),
          P('Human appropriation of net primary productivity is high because:', ['agriculture forestry grazing divert biomass from wild food webs sustainability concern ethic', 'humans photosynthesize primarily false eating plants indirect', 'Earth expanded sun output false', 'cows are producers false'], 'A', ''),
          P('Remote sensing NDVI correlates with:', ['greenness vegetation vigor index coarse productivity proxy not same as ground NPP but operational', 'ocean salinity directly false', 'population density census false', 'earthquake magnitude'], 'A', ''),
          P('Turnover time of biomass relates:', ['standing crop divided by production rate equals residence time conceptual aquatic vs terrestrial differences', 'only to mutation rate false', 'immune memory duration false', 'orbital period Jupiter'], 'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Nutrient cycles',
        problems: [
          P('Carbon fossil reservoir release differs from photosynthetic flux because:', ['fossil carbon slow geological pool combustion releases quickly relative to geological burial Anthropocene acceleration', 'identical timescales false', 'photosynthesis increases CO2 false removes CO2', 'no isotope differences false 12C 13C subtle'], 'A', ''),
          P('Nitrogen limitation often constrains:', ['terrestrial primary productivity despite atmosphere abundance because N2 triple bond not directly usable to plants without fixation', 'ocean productivity exclusively iron often co-limited different regions diazotrophs etc. nuanced exam simplified pick terrestrial textbook classic', 'animal movement', 'Earthquake frequency'], 'A', ''),
          P('Nitrification is:', ['oxidation of ammonium to nitrite and nitrate by specialized bacteria two-step groups', 'reduction of nitrate to N2 gas denitrification different', 'N2 to NH3 nitrogen fixation different', 'DNA replication'], 'A', ''),
          P('Phosphorus cycle lacks:', ['major atmospheric gas phase compared to nitrogen carbon meaning local runoff dominates aquatic eutrophication P often limiting freshwater', 'rock weathering inputs agriculture mines guano historical', 'biology entirely false biota concentrate P', 'sediment burial ocean long-term sink'], 'A', ''),
          P('Sulfur cycle connects to:', ['acid rain volcanoes organic compounds marine dimethyl sulfide atmospheric chemistry aerosol nucleation intro not exam deep acid mine drainage environmental case', 'only plastics false', 'pure nitrogen cycle false', 'photosystem II splitting exclusively false oxygen from water PSII but sulfur distinct cycle'], 'A', ''),
          P('Ocean acidification arises from:', ['CO2 dissolving forming carbonic acid lowering pH affecting calcifiers sensitivity', 'ozone hole direct false UV different stress', 'nitrogen fixation increasing pH actually would shift complicated false main narrative CO2 acidity', 'salt removal'], 'A', ''),
          P('Internal cycling within ecosystems via:', ['decomposer and plant uptake loops fast versus geological uplift slow rocks comparative pools residence times', 'only human trade false pre-industrial cycled too', 'instant perfect closed never leaks to groundwater false leaching happens', 'violation mass conservation false'], 'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — Biomes',
        problems: [
          P('Temperature and precipitation WHITTAKER diagrams map:', ['major biome types coarse classification climate envelopes teach', 'specific species identities always false many species share biome', 'ocean currents only false mixed', 'soil orders exclusively false'], 'A', ''),
          P('Desert organisms adapt via:', ['water conservation behaviors CAM C4 photosynthesis small leaves drought deciduous among strategies', 'high transpiration rates always suicidal false xerophytes reduce', 'salt glands in some birds marine not desert mostly different adaptation story', 'only behavioral night activity many not only'], 'A', ''),
          P('Tropical seasonal forest differs from rainforest partly by:', ['pronounced dry season deciduousness in some regions fire ecology humans historically influenced', 'permanent subzero winter false', 'no plant diversity false still diverse', 'permafrost'], 'A', ''),
          P('Ethiopian Rift biodiversity relates to:', ['geographic heterogeneity elevation gradients isolation endemism Afar–Ethiopian highlands awareness without memorizing endless lists exam appreciation level', 'identical to Sahara uniformly false', 'oceanic trench species false though rift lakes fish radiations famous example tanganyika elsewhere awareness', 'no human history impacts false anthropogenic effects matter'], 'A', ''),
          P('Montane forest in Ethiopia provides services such as:', ['watershed regulation for lowland agriculture hydropower sediment reduction among ecosystem services narrative exam generic services list', 'infinite timber without regrowth false sustainability', 'zero carbon storage false forests store carbon', 'replacing all farms false trade-offs'], 'A', ''),
          P('Savanna trees resist fire partly via:', ['thick bark resprouting adaptations among traits seasonal fire regimes grass maintenance', 'no bark false', 'underwater roots false', 'CAM photosynthesis only always false some cam but not defining of all savanna trees'], 'A', ''),
          P('Biome shifts under climate change may:', ['shift species ranges (e.g., elevationally) as isotherms move, if dispersal allows', 'leave all species fixed in place forever', 'only rearrange minerals in Earth’s core', 'eliminate natural selection entirely'], 'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — Human impacts',
        problems: [
          P('Habitat fragmentation reduces:', ['population sizes increases edge effects isolation inbreeding meta-population dynamics extinction risk contexts corridors help', 'species always to zero instantly false stochastic time lag extinction debt', 'photosynthesis globally false', 'mutation rate directly always false can indirectly'], 'A', ''),
          P('Biological magnification concentrates:', ['lipophilic pollutants up food chain DDT classic teaching example mercury methylmercury fish advisories awareness', 'oxygen levels increasing up chain false aerobic metabolism decreases available O2 with depth pressure ocean confusion wrong domain', 'nitrogen gas in tissues false', 'calcium only'], 'A', ''),
          P('Dead zones in estuaries often link to:', ['nutrient runoff algal bloom bacterial decomposition oxygen depletion seasonal hypoxia Gulf of Mexico Baltic examples awareness generic exam', 'O3 ozone high altitude confused with O2 surface waters false', 'volcanic ash only false occasional', 'too many trees false opposite often deforestation sediment too multi-factor'], 'A', ''),
          P('Overgrazing can trigger:', ['vegetation loss erosion desertification feedback loops Sahel Ethiopian highlands historical debates complex interventions community management lessons', 'instant rainforest creation false', 'increase deep soil organic matter often depletes surface unless managed holistic grazing debates nuance skip exam general', 'no social dimensions false governance matters'], 'A', ''),
          P('Climate warming may shift phenology such that:', ['mismatched pollinator emergence and flowering timing ecological consequences trophic asynchrony research examples', 'perfect match forever false', 'no genetic variation responds false evolutionary responses observed sometimes', 'only Arctic false temperate tropics too'], 'A', ''),
          P('Plastic pollution harms wildlife via:', ['entanglement ingestion bioaccumulation of additives endocrine disruption research ongoing', 'increasing dissolved oxygen always false often microbial degradation uses O2', 'creating new elements false chemistry', 'only aesthetic beaches false also food web'], 'A', ''),
          P('Payment for ecosystem services might fund:', ['upstream conservation reducing downstream flood sediment costs scheme designs monitoring fairness critiques', 'unlimited fossil fuel extraction false', 'military expansion unrelated', 'zero community participation false good schemes include participation'], 'A', ''),
        ],
      },
    ],
  },
];
