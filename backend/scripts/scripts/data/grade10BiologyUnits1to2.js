/**
 * Grade 10 Biology curriculum — Units 1–2 (Natural stream).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Plant mineral nutrition and soil fertility',
    chapterDescription:
      'Essential nutrients, soil properties, nitrogen cycle, deficiency symptoms, sustainable fertilization.',
    topics: [
      {
        topicName: 'Essential mineral nutrients and roles',
        topicDescription: 'Macronutrients N, P, K and key micronutrients; symptoms conceptually.',
        topicObjectives: [
          'Relate nutrient roles to plant structure and metabolism.',
          'Distinguish macronutrient versus micronutrient needs.',
        ],
      },
      {
        topicName: 'Soil, pH, and nutrient availability',
        topicDescription: 'CEC, pH effects on ion solubility; liming and acid soil issues.',
        topicObjectives: [
          'Explain why the same fertilizer can behave differently on contrasting soils.',
          'Interpret simple pH–availability charts qualitatively.',
        ],
      },
      {
        topicName: 'Nitrogen cycle and biological fixation',
        topicDescription: 'Fixation, nitrification, denitrification; legume nodules conceptually.',
        topicObjectives: [
          'Trace nitrogen from atmosphere to protein in a food web overview.',
          'Describe mutualism between rhizobia and legumes at an introductory level.',
        ],
      },
      {
        topicName: 'Deficiency symptoms and field diagnosis',
        topicDescription: 'Mobile vs immobile nutrient patterns; toxicity vs shortage cautions.',
        topicObjectives: [
          'Predict likely leaf patterns when a mobile nutrient is limiting.',
          'Explain why diagnosis needs context and sometimes tissue tests.',
        ],
      },
      {
        topicName: 'Fertilizers and environmental stewardship',
        topicDescription: 'Slow-release, timing, runoff and eutrophication risks.',
        topicObjectives: [
          'Propose practices that reduce nutrient loss to waterways.',
          'Connect crop need with fertilizer planning objectives.',
        ],
      },
    ],
    exercises: [
      ex(0, 'N source', 'Plants absorb nitrogen most commonly as:', ['N₂ gas unaided by roots', 'Ions such as NO₃⁻ and NH₄⁺', 'Pure ammonia gas only in leaves', 'Metallic Na'], 1, 'Easy'),
      ex(0, 'P role', 'Phosphorus is critical for:', ['Chlorophyll Mg center substitution always', 'ATP and nucleic acids among roles', 'Cuticle wax only', 'Stomatal count only'], 1, 'Medium'),
      ex(1, 'pH', 'Very low pH can limit availability of:', ['Some micronutrients like Mo while raising toxicity risk for Al³⁺ in some soils', 'All oxygen availability in air false', 'Sunlight', 'Rain'], 0, 'Medium'),
      ex(1, 'CEC', 'Cation exchange capacity relates to:', ['Soil ability to retain exchangeable cations on colloids', 'Plant height only', 'Wind speed', 'Lunar phase'], 0, 'Medium'),
      ex(2, 'Fixation', 'Rhizobia in legume nodules convert:', ['Atmospheric N₂ into ammonia forms plants can assimilate', 'CO₂ into starch in nodules primarily wrong site', 'Water into O₂ in nodules wrong', 'NaCl into KCl magically false'], 0, 'Easy'),
      ex(2, 'Denitrification', 'Anaerobic denitrifying bacteria can return nitrogen to the atmosphere as:', ['O₂', 'N₂ or N₂O among gases', 'Pure carbon', 'H₂'], 1, 'Medium'),
      ex(3, 'Mobile', 'Nitrogen deficiency often appears on:', ['Older leaves when remobilized from senescing tissues first in many plants', 'Only root tips', 'Flowers only always', 'Stomata'], 0, 'Easy'),
      ex(3, 'Mg', 'Magnesium deficiency interveinal chlorosis occurs partly because:', ['Mg is central to chlorophyll and mobile in many plants', 'Mg blocks iron always false', 'Mg stored only in bark false', 'Mg irrelevant to photosynthesis false'], 0, 'Medium'),
      ex(4, 'Runoff', 'Eutrophication risk rises when:', ['Excess N and P reach surface water stimulating algal growth', 'Nitrogen disappears from Earth', 'Photosynthesis stops globally', 'All fish vanish unrelated'], 0, 'Easy'),
      ex(4, '4R', 'The “4R” nutrient stewardship idea includes:', ['Right source, rate, time, and place matching crop need context', 'Right random guess', 'Right ignoring soil tests always', 'Right harvesting moon only'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Essential nutrients',
        problems: [
          P('Potassium roles include:', ['Stomatal regulation via K⁺ flux among functions', 'Photosystem II splitting N₂ false', 'Making cellulose solely alone false', 'DNA in mitochondria animal wrong'], 'A'),
          P('Calcium in cell walls contributes to:', ['Structural integrity and signaling among roles', 'Chlorophyll core entirely Mg not Ca primary anyway', 'Rubisco active site primarily false', 'Gibberellin synthesis in roots exclusively false'], 'A'),
          P('Sulfur is important for:', ['Some amino acids and proteins', 'Ozone layer thickness false', 'NADPH production site thylakoid false explanation unrelated here', 'Bone CaPO4 primary animal context plant needs sulfur for proteins'], 'A'),
          P('Micronutrients are needed in:', ['Small amounts yet can limit yield if scarce', 'Huge amounts always toxic always not definition', 'Zero in healthy plants false', 'Only hydroponics false'], 'A'),
          P('Iron chlorosis symptom pattern may include:', ['Young leaf yellowing with greener veins in some species/deficiencies', 'Older leaves only always nitrogen style always false for Fe typically younger in many dicots', 'Brown necrotic spots always bacterial not only fe', 'Roots glowing false'], 'A'),
          P('Zinc deficiency can present as:', ['“Little leaf” or stunted growth in some crops', 'Immediate fruit color change always false', 'Doubling photosynthesis false', 'Salt glands on leaves universally false'], 'A'),
          P('Boron is notable for:', ['Pollen tube growth and cell wall processes among roles', 'Splitting H₂O at PSII false', 'Making lignin exclusively alone boron false primarily', 'Neutralizing stomach acid false'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — Soil and pH',
        problems: [
          P('Organic matter generally improves:', ['Water-holding capacity and microbial activity supporting nutrient cycling', 'Concrete strength false', 'Soil salinity always infinite false', 'Permafrost always false context dependent'], 'A'),
          P('Liming can raise pH in acid soils partly to:', ['Reduce toxic Al availability and improve conditions for some roots', 'Eliminate all microbes false', 'Freeze pests false', 'Replace nitrogen fertilization entirely false'], 'A'),
          P('Sandy soils often:', ['Drain fast and hold fewer nutrients unless amended', 'Hold more cations than clay always false typically opposite trend in CEC nuance careful', 'Never grow crops false', 'Are always alkaline false'], 'A'),
          P('Soil texture triangle classifies:', ['Sand–silt–clay relative proportions', 'Only leaf shapes', 'Only root depths only', 'Air pressure'], 'A'),
          P('Profile horizons like A/B/C relate to:', ['Layers differing in organic matter, minerals, bedrock weathering degree', 'Leaf palisade layers', 'Ocean thermocline', 'Brain meninges'], 'A'),
          P('Compaction can harm crops by:', ['Limiting root penetration and aeration', 'Increasing pore space always false undesirable compaction decreases pores', 'Increasing nitrogen from nothing false', 'Heating soil to 500°C false'], 'A'),
          P('Saline soils challenge plants partly through:', ['Osmotic stress and ion toxicity depending on species tolerance', 'Guaranteed frost false', 'Excess O₂ in roots false hypoxia sometimes waterlogging separate issue', 'More stomata always false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — Nitrogen cycle',
        problems: [
          P('Lightning can contribute small amounts of:', ['NOx leading to some atmospheric deposition pathways', 'Pure O₂ into roots', 'Cellulose in clouds false', 'Chloroplasts in air false'], 'A'),
          P('Nitrifiers are chemoautotrophs oxidizing:', ['NH₄⁺ toward nitrite/nitrate in aerobic soils among steps', 'Fe to Au false', 'Water to hydrogen peroxide only false', 'Sugars to starch in soil false'], 'A'),
          P('Legume seed inoculation can add:', ['Compatible rhizobia strains increasing nodulation success', 'Earthworm DNA false', 'Herbicide permanently inside seed false', 'Fish oil false'], 'A'),
          P('Leaching of nitrate can occur when:', ['Heavy rain moves soluble NO₃⁻ through soil beyond roots', 'Plants close stomata forever false', 'Soil is frozen solid always false context', 'Sunlight stops'], 'A'),
          P('Cover crops may scavenge leftover N to:', ['Reduce off-season leaching losses', 'Increase erosion always false typically reduce', 'Eliminate microbes false', 'Kill pollinators false'], 'A'),
          P('Denitrification is favored by:', ['Wet, low-oxygen microsites supplying organic carbon among factors', 'Desert air always bone dry sandy surface not microsite nuance question broad still ok', 'Pure oxygen saturation false aerobic suppresses denitrifiers generally', 'UV only'], 'A'),
          P('Integrated nutrient management combines:', ['Organic and inorganic sources with monitoring and timing tailored to crop rotation', 'Guessing only', 'Only foliar Fe annually forever for every crop falsely', 'Mining bedrock at home false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — Deficiencies',
        problems: [
          P('Tissue tests complement visual scouting because:', ['Symptoms can be ambiguous or multiple limiting factors coexist', 'They always replace soil tests entirely false complementary', 'They remove need for plant science false', 'They measure moonlight false'], 'A'),
          P('Necrotic spotting may suggest:', ['Particular micronutrient issues or toxicity depending on pattern and tissue', 'Always bacteria automatically false', 'Always irrigation adequate false', 'Healthy leaf by definition false'], 'A'),
          P('Split applications of N can:', ['Reduce leaching risk versus one massive early dose in some systems', 'Guarantee zero losses unrealistic', 'Replace soil texture management false', 'Eliminate need for phosphorus false'], 'A'),
          P('Hidden hunger means:', ['Yield loss without obvious leaf symptoms yet nutrient limiting', 'Insects only below ground false term nutrient context', 'Over-fertilization neon signs obvious always false', 'Toxic honey production false'], 'A'),
          P('Chelated micronutrient sprays may help when:', ['Root uptake blocked by high pH or calcareous conditions for specific elements', 'Plants lack any stomata false', 'Sunlight intensity zero false', 'Soil is perfect already false'], 'A'),
          P('Excess fertilizer can cause:', ['Salt injury or antagonisms among ions', 'Infinite yield always false', 'Permanent soil pH 14 overnight false', 'Automatic pest elimination false'], 'A'),
          P('Remote sensing NDVI can:', ['Help map vigor patterns correlated with stress including nutrient limits among stresses', 'Replace all soil testing entirely false', 'Measure DNA in leaves false directly not NDVI point', 'Read farmer mind false'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — Stewardship',
        problems: [
          P('Riparian buffers may reduce:', ['Nutrient and sediment entry to streams', 'Bird migration always false can improve habitat actually careful wording—buffers reduce runoff pollutants generally', 'Sunrise timing false', 'Gravity false'], 'A'),
          P('Precision agriculture tools can map:', ['Yield or biomass variability guiding variable-rate applications where feasible', 'Weather on Mars primarily false', 'Stock market crop futures only false', 'Student exam scores false'], 'A'),
          P('Organic amendments like compost can:', ['Improve soil structure slowly and supply some mineralization over time', 'Instantly supply all K needed every season always guarantee false', 'Freeze nitrogen forever false', 'Replace irrigation water entirely false'], 'A'),
          P('Legume rotation can reduce:', ['Synthetic N need for following crops partly depending on biomass and incorporation', 'Need for all phosphorus always false', 'Sunlight requirement false', 'DNA in plants false'], 'A'),
          P('Regulations often target phosphorus in sensitive watersheds because:', ['P triggers algal blooms strongly and persists in sediments', 'P is gaseous like N false', 'P is non-essential false plants need P', 'P never moves false'], 'A'),
          P('Farmer extension programs aim to:', ['Translate research into practical nutrient and conservation practices', 'Eliminate science adoption false ironic', 'Ban fertilizers totally always false balanced approach', 'Sell ocean water to crops false'], 'A'),
          P('Economic optimum yield often:', ['Balances input costs with expected returns below biological maximum sometimes', 'Equals maximum yield always false economics', 'Ignores environment always false modern stewardship', 'Depends only on zodiac false'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Animal nutrition and digestion',
    chapterDescription:
      'Human digestive tract, enzyme action, absorption, balanced diet, comparative digestion.',
    topics: [
      {
        topicName: 'Digestive tract regions and accessory organs',
        topicDescription: 'Mouth to anus overview; liver, pancreas, gallbladder roles.',
        topicObjectives: [
          'Trace food through major compartments naming key secretions.',
          'Relate structure to mixing, propulsion, digestion, absorption, elimination.',
        ],
      },
      {
        topicName: 'Chemical digestion by enzymes and acid',
        topicDescription: 'Salivary amylase, gastric pepsin, pancreatic and brush-border enzymes.',
        topicObjectives: [
          'Explain why gastric pH matters for pepsin activation and mucosal protection.',
          'Match substrates to major enzymatic classes.',
        ],
      },
      {
        topicName: 'Absorption in the small intestine',
        topicDescription: 'Villi, microvilli, lymphatic vs capillary uptake routes.',
        topicObjectives: [
          'Describe how surface area and blood flow support absorption.',
          'Contrast carbohydrate, protein, and lipid absorption pathways conceptually.',
        ],
      },
      {
        topicName: 'Balanced nutrition and deficiency diseases',
        topicDescription: 'Macronutrients, vitamins, minerals, fiber, and energy balance.',
        topicObjectives: [
          'Link specific vitamin deficiencies to classic syndromes at introductory level.',
          'Discuss dietary diversity as a safeguard.',
        ],
      },
      {
        topicName: 'Comparative digestion — ruminants vs monogastric animals',
        topicDescription: 'Rumen fermentation; hindgut fermentation highlights; limitations of human enzymes.',
        topicObjectives: [
          'Explain why cellulose is tough for monogastric humans.',
          'Outline one advantage of rumen symbionts for roughage.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Chew', 'Mastication increases:', ['Surface area for enzymatic attack and mixing with saliva', 'Bone density only', 'Lung volume only', 'Kidney GFR'], 0, 'Easy'),
      ex(0, 'Liver', 'Bile is produced by:', ['Liver; often stored in gallbladder', 'Pancreas exclusively', 'Spleen', 'Thyroid'], 0, 'Easy'),
      ex(1, 'Pepsin', 'Pepsin primarily digests:', ['Proteins', 'Starch optimally in stomach lumen', 'Triglycerides alone', 'DNA in mouth'], 0, 'Easy'),
      ex(1, 'Pancreas', 'Pancreatic lipase needs:', ['Emulsification by bile for efficient lipid digestion interface', 'Only acid pH 1 in duodenum mostly neutralized secretin etc.', 'Sunlight', 'Oxygen in chyme absorbed completely before lipase wrong'], 0, 'Medium'),
      ex(2, 'Villi', 'Villi in the small intestine increase:', ['Surface area for absorption', 'Storage of bile', 'Ventilation', 'Urine concentration'], 0, 'Easy'),
      ex(2, 'Lacteal', 'Long-chain fatty products often enter:', ['Lymphatic lacteals before systemic circulation', 'Portal vein glucose-only misconception—long chain lymph chylomicrons route nuance', 'Alveoli', 'Nephron lumen first always false'], 0, 'Hard'),
      ex(3, 'Vit D', 'Vitamin D deficiency in children can produce:', ['Rickets skeletal deformities among contexts', 'Scurvy primarily vitamin C', 'Beriberi B1 primarily', 'Pellagra niacin primarily'], 0, 'Medium'),
      ex(3, 'Fiber', 'Soluble fiber can:', ['Slow glucose absorption and feed microbiomes beneficially some types', 'Be digested by human cellulase abundant false', 'Replace water intake entirely false', 'Eliminate bile forever false'], 0, 'Medium'),
      ex(4, 'Rumen', 'Ruminant fermentation of cellulose occurs mainly in:', ['Rumen prior to acid abomasum stomach', 'Human mouth primarily false', 'Bird lung air sac primarily false', 'Kidney medulla false'], 0, 'Easy'),
      ex(4, 'Cecum', 'Hindgut fermenters like horses rely partly on:', ['Cecal/colonic microbes digesting fiber', 'Pure stomach pepsin alone for cellulose false', 'Gills', 'Alveolar macrophages'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Digestive regions',
        problems: [
          P('The esophagus transports food by:', ['Peristalsis', 'Photosynthesis', 'Filtration in nephron', 'Binary fission'], 'A'),
          P('The stomach stores and mixes chyme while secreting:', ['Acid and pepsinogen among products', 'Bile primary producer liver not stomach', 'Trypsin active always straight in stomach mostly inactive trypsinogen duodenal activation', 'Insulin mass secretion gastric not primary locale'], 'A'),
          P('The small intestine is the major site of:', ['Digestion completion and nutrient absorption', 'Gas exchange', 'Urine formation', 'Sperm production'], 'A'),
          P('Colonic bacteria ferment some:', ['Indigestible carbohydrates producing gases and short-chain fatty acids', 'Oxygen from alveoli false', 'Hemoglobin from diet false', 'Insulin protein absorb intact false degraded'], 'A'),
          P('The pancreas secretes bicarbonate partly to:', ['Neutralize acidic chyme entering duodenum', 'Acidify small intestine to pH 1 false', 'Digest nucleotides exclusively alone false broad', 'Create surfactant false lung'], 'A'),
          P('The large intestine absorbs mainly:', ['Water and electrolytes; hosts microbiome', 'Most dietary sugars after ileum majority absorbed prior', 'O₂ from swallowed air negligible nutrient O2 context misframe', 'Amino acids primarily jejunum mostly prior'], 'A'),
          P('Defecation eliminates:', ['Indigestible residues and some wastes', 'All absorbed glucose retroactively false', 'Plasma proteins mostly not feces route kidney liver', 'Renal filtrate false'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — Chemical digestion',
        problems: [
          P('Salivary amylase begins starch breakdown in the:', ['Mouth until acid inactivates further along', 'Stomach optimal pH for amylase long false acid quenches', 'Colon primarily', 'Glomerulus'], 'A'),
          P('Parietal cells secrete HCl and:', ['Intrinsic factor for B₁₂ absorption context', 'Pepsin active immediately not secreted active chief secretes zymogen pepsinogen parietal HCl IF', 'Trypsin', 'Lipase primary pancreatic'], 'A'),
          P('Enteropeptidase activates:', ['Trypsinogen to trypsin initiating cascade', 'Pepsinogen in stomach already HCl activated environment different', 'Salivary amylase', 'Insulin'], 'A'),
          P('Disaccharidases on brush border finish:', ['Lactose, sucrose, maltose into monomers for uptake', 'Protein primaries pepsin trypsin earlier', 'Triglyceride emulsification bile not brush border hydrolysis finalize monoglycerides fatty acids absorb brush border not disacc phrase careful still distractors ok', 'Starch in mouth only'], 'A'),
          P('Nucleases from pancreas help digest:', ['DNA and RNA fragments in dietary nucleic acids limited relevance but enzymes exist', 'Triglycerides only false', 'Cellulose effectively human duodenum false', 'Keratin always swallowed hair small joke'], 'A'),
          P('Emulsification by bile salts increases:', ['Lipid surface area for lipase action', 'Starch solubility in acid primarily', 'O₂ diffusion in lungs unrelated', 'Urea in blood directly this step unrelated'], 'A'),
          P('Gastric mucus protects epithelium from:', ['Acid and protease autodigestion partly', 'Bile salts primarily duodenum', 'Alveolar surfactant false', 'ATP synthesis'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — Absorption',
        problems: [
          P('Monosaccharides like glucose often enter epithelial cells via:', ['Transport proteins and enter capillary portal circulation mostly', 'Lacteals directly for glucose mostly portal vein historically—glucose portal', 'Diffusion only gasoline through skin false', 'Nuclear pores'], 'A'),
          P('Amino acids after digestion are absorbed into:', ['Portal blood largely', 'Lymph chylomicrons long chain fats context mixed question about amino route primarily portal', 'Alveoli', 'Bowman’s capsule filtrate diet false'], 'A'),
          P('Fatty acids and monoglycerides reform triglycerides in enterocytes then:', ['Chylomicrons exported to lymphatics often for long chain', 'Direct to renal tubule primary false', 'Stored only in villi forever false', 'Exported as pure O₂ false'], 'A'),
          P('Tight junctions between enterocytes regulate:', ['Paracellular leakage helping selective barrier', 'Gas exchange in lungs unrelated', 'Bone strength unrelated direct', 'Sperm motility unrelated'], 'A'),
          P('Iron absorption can be regulated partly because:', ['Free iron toxicity risk necessitates controlled uptake mechanisms', 'Iron unlimited always saturate always false regulation exists', 'Iron absorbed only in colon primarily duodenum mostly', 'Iron is vitamin false'], 'A'),
          P('Water follows osmotic gradients in the intestine largely via:', ['Aquaporins and paracellular flow context dependent', 'Photosynthesis', 'Kidney only always GI water important', 'Mitochondrial matrix bulk flow'], 'A'),
          P('Lactose intolerance results from:', ['Insufficient lactase enzyme activity post-weaning in many populations', 'Too much bile', 'Too much insulin', 'Pancreatic bicarbonate absence primary alone false different disorder'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Nutrition balance',
        problems: [
          P('Kwashiorkor classically links to:', ['Severe dietary protein deficit presentation often in children', 'Vitamin C absence primarily scurvy', 'Excess vitamin A primarily acute', 'Iodine excess primarily'], 'A'),
          P('Marasmus is more about:', ['Overall calorie deficit wasting', 'Excess protein only false', 'Only iron false', 'Hyperthyroid always false'], 'A'),
          P('Vitamin A roles include:', ['Vision cycle rhodopsin and epithelial integrity among roles', 'Calcium absorption primarily D not A primary Ca absorption nuance', 'Coagulation clotting factors primarily K not A primary', 'Oxygen transport hemoglobin Fe not vitamin A'], 'A'),
          P('Vitamin K is required for:', ['Synthesizing some clotting factors in liver carboxylation', 'Collagen crosslinking primarily C false', 'ATP synthase rotation primarily CoQ not K', 'Making surfactant primarily type II cells not K context'], 'A'),
          P('Iodine deficiency in pregnancy risks:', ['Cretinism and goiter among developmental concerns', 'Scurvy primarily', 'Pellagra primarily', 'Beriberi primarily'], 'A'),
          P('Hydration supports physiology by:', ['Maintaining blood volume and solvent for reactions among basics', 'Eliminating need for kidneys false', 'Stopping sweating entirely false', 'Blocking insulin false'], 'A'),
          P('Balanced plates emphasize:', ['Variety, adequate fiber, controlled saturated fat among guidelines frameworks', 'Only one staple food forever', 'Eliminating all starches universally false athletes need carbs', 'Avoiding all fats including essential fatty acids false'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Comparative digestion',
        problems: [
          P('Ruminants chew cud to:', ['Re-masticate bolus improving microbial access and particle size', 'Cool brain blood exclusively false', 'Pump lymph from hooves false', 'Ventilate rumen with gill analogy false'], 'A'),
          P('Volatile fatty acids from rumen absorption provide:', ['Major energy source to host even though cellulose not enzymatically cleaved by host enzymes directly mostly', 'Pure glucose loads portal like starch meal false different', 'Vitamin D primarily sun rumen not', 'Oxygen'], 'A'),
          P('Monogastric humans cannot digest cellulose because:', ['We lack cellulase enzymes; gut microbiota ferment small amounts in colon but limited energy capture vs ruminants specialized', 'Stomach acid destroys all fiber instantly false', 'Small intestine too short absolutely false metric vague', 'Mouth lacks teeth false we have teeth'], 'A'),
          P('Coprophagy in some species can recover:', ['Microbial vitamins produced in hindgut among contexts', 'Photosynthetic O₂', 'Glomerular filtrate', 'Chlorophyll'], 'A'),
          P('Birds’ crop and gizzard functions include:', ['Storage and mechanical grinding respectively in many species', 'Rumen fermentation identical to cattle false different anatomy', 'Gas exchange', 'Urine concentration in kidney bird still has kidneys excretion question comparative digestion focus GI bird features'], 'A'),
          P('Foregut fermenters like some primates may utilize:', ['Colonic digestion of fiber with specialized gut proportions time', 'Photosynthetic symbionts in mouth false generally', 'Four-chambered stomach always false some colobine monkeys pseudo ruminant forestomach complexities exist but distractor not needed keep simple', 'Gills'], 'A'),
          P('Dental formulas reflect:', ['Diet adaptation across mammals not identical stomach type only', 'Wind speed', 'Kidney nephron count', 'Feather color'], 'A'),
        ],
      },
    ],
  },
];
