/**
 * Five university-entrance-style MCQs per Grade 10 Biology topic (Natural stream).
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  switch (`${c}-${t}`) {
    case '0-0':
      return [
        Q('Which ion form is commonly absorbed by plant roots as a nitrogen source?', ['Pure N₂ gas always', 'Nitrate (NO₃⁻) among others', 'NaCl only', 'Au³⁺'], 'B'),
        Q('Legume nodules host bacteria that mainly:', ['Dissolve gold', 'Fix atmospheric nitrogen into usable forms', 'Photosynthesize inside roots with chlorophyll only', 'Synthesize cellulose in animals'], 'B'),
        Q('Phosphorus in plants is especially important for:', ['Chlorophyll Mg only substitution', 'Energy carriers like ATP and nucleic acids', 'Cuticle wax only', 'Stomatal count fixed'], 'B'),
        Q('Potassium deficiency may show as:', ['Interveinal chlorosis always only Mg symptom', 'Marginal leaf scorch or curling patterns in many plants', 'Immediate black spots always bacterial always', 'Roots always blue'], 'B'),
        Q('Soil pH influences nutrient availability because:', ['pH never matters', 'Ion solubility and microbial activity change with pH', 'Plants ignore chemistry', 'Gravity changes'], 'B'),
      ];
    case '0-1':
      return [
        Q('Nitrogen fixation converts N₂ to:', ['O₃', 'Forms like ammonia that can be assimilated', 'NaCl', 'CO'], 'B'),
        Q('Nitrifying bacteria can oxidize:', ['NH₄⁺ toward NO₂⁻/NO₃⁻ in some steps contexts', 'Iron into gold', 'Silicate to diamond', 'Water to helium'], 'A'),
        Q('Denitrification under anaerobic conditions can release:', ['O₃ to stratosphere', 'N₂ or N₂O back to atmosphere', 'Pure glucose', 'Chlorophyll'], 'B'),
        Q('Animal wastes return nitrogen to soil when:', ['Minerals never cycle', 'Decomposers mineralize organic nitrogen', 'Rocks grow leaves', 'Photosynthesis stops globally'], 'B'),
        Q('Overuse of nitrogen fertilizer risks:', ['Eutrophication of water bodies', 'Perfect ecosystems always', 'Elimination of algae always wrong—bloom harm', 'Zero runoff'], 'A'),
      ];
    case '0-2':
      return [
        Q('Magnesium is central in:', ['Peptidoglycan', 'Chlorophyll porphyrin ring', 'Keratin hair exclusively plant', 'Hemoglobin in leaves'], 'B'),
        Q('Iron chlorosis often shows:', ['Youngest leaves always first necessarily every species equally always', 'Yellowing with greener veins in some deficiency patterns', 'Immediate fruit drop always', 'Stomatal doubling'], 'B'),
        Q('Zinc shortage can cause:', ['“Little leaf” symptoms in some crops', 'Immediate tree death every time', 'Photosynthesis doubling', 'Instant flowering always'], 'A'),
        Q('Tissue tests can mislead if:', ['Sampled correctly always flawless', 'Deficiency is non-uniform or multiple limiting factors exist', 'Microscopes exist', 'Sun shines'], 'B'),
        Q('pH extremes may lock up nutrients by:', ['Increasing solubility always', 'Precipitation or altered chelation reducing uptake', 'Making plants immune', 'Stopping diffusion'], 'B'),
      ];
    case '0-3':
      return [
        Q('Casparian strip is part of:', ['Leaf palisade', 'Endodermis regulating passage into stele', 'Stomatal pore only', 'Flower anther'], 'B'),
        Q('Ion uptake at root hairs often requires:', ['No energy ever', 'ATP for active transport of many ions', 'Only diffusion of all ions equally', 'Moonlight'], 'B'),
        Q('Mycorrhizae assist root uptake of:', ['Only nitrogen gas directly from air in leaves wrong', 'Phosphorus and water among nutrients', 'Sunlight', 'Ozone'], 'B'),
        Q('Transpiration pull depends partly on:', ['Stomatal opening allowing evaporation', 'Closed stomata always maximal', 'Lack of xylem', 'Phloem sugars only'], 'A'),
        Q('Nitrogen preferentially mobilizes from older leaves when scarce because:', ['N is often mobile in phloem remobilization', 'Older leaves have more chlorophyll always', 'Roots push nitrogen only up never down', 'Stomata reverse'], 'A'),
      ];
    case '0-4':
      return [
        Q('Eutrophication may lead to:', ['Algal blooms and low oxygen dead zones', 'Always clearer water', 'Desert formation instantly', 'More oxygen everywhere always'], 'A'),
        Q('Best management often includes:', ['Precision fertilization to crop need', 'Maximum annual over-application always', 'Eliminating all fertilizers globally instantly unrealistic', 'Ignoring watershed boundaries'], 'A'),
        Q('Organic matter improves soil by:', ['Increasing CEC and microbial activity helping structure', 'Removing all nitrogen', 'Killing all worms always', 'Turning soil to glass'], 'B'),
        Q('Crop rotation can reduce:', ['Pathogen buildup and nutrient depletion patterns', 'Soil existence', 'Sunlight', 'Rain'], 'A'),
        Q('Cover crops may help:', ['Reduce erosion and scavenge leftover nitrogen', 'Eliminate photosynthesis', 'Guarantee hail', 'Melt glaciers'], 'A'),
      ];
    case '1-0':
      return [
        Q('Salivary amylase begins digesting:', ['Triglycerides only', 'Starches', 'Proteins only', 'Cellulose effectively in humans primarily'], 'B'),
        Q('Bolus formation occurs in:', ['Stomach chiefly first', 'Mouth during chewing', 'Colon only', 'Kidney'], 'B'),
        Q('Epiglottis helps prevent:', ['Food entering trachea during swallowing', 'O₂ uptake', 'Urine formation', 'Bone remodeling'], 'A'),
        Q('Esophagus moves food mainly by:', ['Binary fission', 'Peristalsis', 'Photosynthesis', 'Osmosis outward'], 'B'),
        Q('Cardiac sphincter relates to:', ['Entry to stomach from esophagus region sphincter names vary', 'Lung alveoli', 'Glomerulus', 'Ovary'], 'A'),
      ];
    case '1-1':
      return [
        Q('Gastric acid activates:', ['Salivary lipase incorrectly primarily', 'Pepsinogen to pepsin among roles', 'Amylase strongest activity', 'Insulin secretion gastric wrong context'], 'B'),
        Q('Mucus in stomach protects:', ['Food only', 'Gastric mucosa from acid and enzyme autodigestion partly', 'Brain cortex', 'Bone matrix entirely'], 'B'),
        Q('Chyme exits stomach into:', ['Duodenum', 'Ileum only directly always', 'Colon first always', 'Esophagus'], 'A'),
        Q('Chief cells release chiefly:', ['Hydrochloric acid only', 'Pepsinogen among secretions', 'Bile', 'Insulin'], 'B'),
        Q('Parietal cells secrete:', ['HCl and intrinsic factor for B₁₂ absorption context', 'Trypsin active always straight', 'Salivary amylase', 'Pepsin only'], 'A'),
      ];
    case '1-2':
      return [
        Q('Pancreatic proteases are often secreted as:', ['Active inside pancreas always dangerous', 'Zymogens activated in intestine', 'DNA only', 'Starch only'], 'B'),
        Q('Trypsinogen is activated to trypsin by:', ['Enteropeptidase on duodenal brush border among mechanisms', 'HCl in stomach permanently optimal for trypsin wrong', 'Amylase', 'Bile salts alone as protease'], 'A'),
        Q('Bile is produced in:', ['Pancreas', 'Liver stored/concentrated in gallbladder', 'Spleen', 'Thyroid'], 'B'),
        Q('Micelles aid absorption of:', ['Glucose monomers only already absorbed readily often', 'Fatty acids and monoglycerides products of lipolysis', 'Nucleotides only', 'Oxygen gas'], 'B'),
        Q('Villi lacteals absorb some:', ['Amino acids always only bloodstream not lymph wrong generalization partially false', 'Long-chain fatty lipids packaged into chylomicrons entering lymphatic route among routes', 'Pure water only', 'Iron always only lymph'], 'B'),
      ];
    case '1-3':
      return [
        Q('Vitamin C deficiency classically links to:', ['Beriberi B1 primarily wrong pick for C', 'Scurvy (collagen defects)', 'Rickets vitamin D primarily', 'Pellagra niacin primarily'], 'B'),
        Q('Vitamin A roles include:', ['Rhodopsin in vision among many functions', 'Calcium bone mineral primary alone vitamin D more', 'DNA polymerase alone only', 'Insulin synthesis'], 'A'),
        Q('Kwashiorkor is primarily:', ['Pure calorie excess', 'Severe protein deficiency syndrome presentation often', 'Iron overload hemochromatosis wrong', 'Vitamin C overdose'], 'B'),
        Q('Fiber benefits include:', ['Microbiome support and bowel motility', 'Zero calories so harmful always wrong', 'Blocking all mineral absorption always good wrong', 'Replacing water'], 'A'),
        Q('IODine deficiency can cause:', ['Goiter in thyroid enlargement contexts', 'Scurvy', 'Beriberi', 'Toxic hypervitaminosis A primarily'], 'A'),
      ];
    case '1-4':
      return [
        Q('Ruminants ferment plant fiber mainly in:', ['Abomasum only secretory acid stomach like monogastric', 'Rumen with microbial symbionts', 'Small intestine only', 'Kidney medulla'], 'B'),
        Q('Cecum fermentation occurs notably in:', ['Many herbivores like horses in hindgut', 'Carnivore cats primarily only rumen-like always wrong', 'Fish gills', 'Alveoli'], 'A'),
        Q('Monogastric animals primarily digest starch with:', ['Rumen microbes chiefly always wrong for pig human dog', 'Pancreatic amylase and salivary amylase limited in adults humans somewhat but pancreatic major in intestine', 'Cellulase endogenous abundant human—false', 'Bile emulsification of starch wrong'], 'B'),
        Q('Foregut fermentation in sloths occurs:', ['In modified stomach region with symbionts in some herbivores adaptation examples', 'Lung alveoli', 'Kidney cortex', 'Pancreatic duct exclusively always'], 'A'),
        Q('Coprophagy in some animals can:', ['Recover microbial vitamins like B vitamins partly', 'Prove carnivory always', 'Eliminate fiber need entirely always', 'Replace photosynthesis'], 'A'),
      ];
    case '2-0':
      return [
        Q('Inspiration in mammals increases thoracic volume via:', ['Diaphragm contraction and external intercostals among actions', 'Only smooth muscle in bronchi always only driver wrong', 'Stomach peristalsis', 'Kidney filtration'], 'A'),
        Q('Alveolar pressure drops below atmospheric during:', ['Inhalation', 'Exhalation passive relaxation phase', 'Guttation', 'Filtration'], 'A'),
        Q('Dead space in conducting airways means:', ['Some inspired air never reaches alveoli before exhale', 'All gas exchange occurs in trachea wrong', 'O₂ never dissolves', 'CO₂ absent in blood'], 'A'),
        Q('Surface tension in alveoli is reduced by:', ['Surfactant from type II pneumocytes', 'Mucus only always collapse alveoli more wrong complex', 'Hemoglobin only', 'Bicarbonate only'], 'A'),
        Q('Pneumothorax impairs ventilation because:', ['Pleural pressure equilibrates with air collapsing lung partly', 'Stomach acid leaks—irrelevant', 'Heart stops always unrelated always', 'Kidney fails directly'], 'A'),
      ];
    case '2-1':
      return [
        Q('Diffusion across alveolar epithelium and endothelium favors O₂:', ['Into pulmonary capillary blood from alveolar air', 'Out of blood always into alveoli always—wrong for resting arterialization', 'Neither direction', 'Into mitochondria alveoli wrong compartment'], 'A'),
        Q('Pulmonary surfactant deficiency in premature infants risks:', ['Respiratory distress syndrome (atelectasis tendency)', 'Hyperoxia always benign', 'Increased surfactant always', 'Gills forming'], 'A'),
        Q('Alveolar surface area is enlarged by:', ['Many tiny sacs collectively huge area', 'Only three giant sacs', 'Cartilage plates gas exchange wrong', 'Bone trabeculae exchange'], 'A'),
        Q('Diffusion barrier ideally is:', ['Thick water layer only always infinite barrier wrong generally thin pathologies vary', 'Very thin layers alveolar epithelium + fused basal lamina + endothelial cells summary', 'Bone matrix', 'Skin stratum corneum thickness same as alveolar wrongly'], 'B'),
        Q('CO leaves blood faster than O enters in some poisonings because:', ['Hb affinity differences and diffusion gradients; CO binds Hb with high affinity lowering O₂ delivery', 'CO is larger than O₂ always false size comparable wrong reasoning', 'CO is nutrient wrong', 'Alveoli close for CO only wrong'], 'A'),
      ];
    case '2-2':
      return [
        Q('Hemoglobin cooperativity means:', ['O₂ binding facilitates further O₂ binding on same tetramer until saturated', 'Each subunit independent never influences others false', 'Hb carries DNA false', 'Hb is enzyme'], 'A'),
        Q('Anemia reduces O₂ delivery partly because:', ['Less hemoglobin content carrying capacity drops', 'Hb binds O₂ irreversibly always false', 'Alveoli shrink only anemia rarely—indirect', 'Lungs disappear'], 'A'),
        Q('Fetal hemoglobin differs mainly in:', ['Higher affinity for O₂ shifting dissociation curve aiding placental uptake', 'No iron component false', 'Green color false', 'No heme'], 'A'),
        Q('Carbon monoxide poisoning treatment starts with:', ['O₂ therapy increasing gradient and displacement support in protocols', 'Pure water drip', 'Insulin bolus', 'Vitamin K only'], 'A'),
        Q('2,3-BPG in RBCs shifts curve:', ['Rightward lowering affinity aiding O₂ unloading in tissues when elevated', 'Left increasing lung uptake only always confused', 'Eliminates cooperativity false', 'Hardens arteries primarily wrong'], 'A'),
      ];
    case '2-3':
      return [
        Q('HCO₃⁻ transport helps carry CO₂ as:', ['Dissolved gas always majority—actually bicarbonate major route overall often', 'Bicarbonate in plasma after RBC conversion', 'Pure carbon dust', 'Fe++ only'], 'B'),
        Q('Chloride shift balances:', ['Charge as HCO₃⁻ leaves RBC', 'Water freezing point only', 'Glucose uptake only', 'DNA replication'], 'A'),
        Q('Carbondioxide loading in tissues increases acidity by:', ['Forming carbonic acid after CO₂ hydration enzyme catalysis', 'Consuming O₂ only', 'Denaturing all enzymes instantly', 'Melting hemoglobin'], 'A'),
        Q('Hyperventilation lowers blood CO₂ causing:', ['Respiratory alkalosis trend', 'Metabolic acidosis primarily not same mechanism', 'Kidney stone instant always wrong', 'Hemoglobin synthesis surge'], 'A'),
        Q('Exercise increases CO₂ production causing:', ['Ventilation rise to remove CO₂ and bring O₂ in coordinated control partly', 'Bronchioles permanently sealed', 'Alveolar collapse always', 'Bile secretion'], 'A'),
      ];
    case '2-4':
      return [
        Q('Chronic smoking risks include:', ['COPD emphysema/chronic bronchitis categories', 'Stronger cilia always false impaired', 'Improved immune clearance false', 'Extra alveoli'], 'A'),
        Q('Carcinogens in smoke can damage:', ['DNA in bronchial epithelium cells leading to cancer risk', 'Only shoes', 'Kidney stones only', 'Bone density increase always'], 'A'),
        Q('Emphysema pathology includes:', ['Loss of elastic recoil and alveolar wall destruction making expiration difficult', 'Extra surfactant always', 'Increased diffusion capacity always false often worse', 'Only heart failure unrelated always'], 'A'),
        Q('Asthma involves:', ['Airway inflammation and bronchoconstriction episodes', 'Always cured spontaneously everyone false', 'Liver failure primary false', 'Kidney stones required false'], 'A'),
        Q('Public health tobacco control strategies include:', ['Taxation, clean indoor air laws, cessation support among policy tools', 'Encouraging youth uptake unethical', 'Banning oxygen false', 'Forcing smoking for health false'], 'A'),
      ];
    case '3-0':
      return [
        Q('The renal corpuscle includes:', ['Bowman’s capsule + glomerulus', 'Loop of Henle always only wrong', 'Collecting duct', 'Urethra'], 'A'),
        Q('Filtration barrier blocks most:', ['Proteins but passes small molecules', 'Water impossible wrong', 'Na+ impossible wrong', 'Urea entirely wrong'], 'A'),
        Q('GFR is regulated partly by:', ['Afferent/efferent arteriolar tone and tubuloglomerular feedback among mechanisms', 'Alveolar surfactant wrong organ', 'Insulin receptor in liver wrong context only', 'Stomach pepsin'], 'A'),
        Q('Podocytes form:', ['Slit diaphragm filtration slit structure', 'Cilia in trachea wrong', 'Thylakoid stacks wrong', 'Spindle fibers mitosis wrong organ'], 'A'),
        Q('Renal blood flow is large relative to mass because:', ['Filtration is continuous high throughput process supportive', 'Kidneys photosynthesize', 'Urine is plasma duplicate fully wrong', 'Bones pump blood'], 'A'),
      ];
    case '3-1':
      return [
        Q('The descending limb of Henle is permeable mainly to:', ['Na+ actively always ascend later different segment contexts', 'Water highly in medullary hypertonic environment', 'Glucose infinitely always normally fully reabsorbed proximal anyway', 'Proteins'], 'B'),
        Q('The ascending thick limb pumps:', ['Na⁺ K⁺ 2Cl⁻ cotransport among segments contributing to medullary gradient without vasopressin directly here overview', 'Oxygen into urine', 'Hemoglobin', 'Chlorophyll'], 'A'),
        Q('Countercurrent multiplier builds:', ['Hypertonic medulla aiding urine concentration later', 'Isotonic cortex only always false overall kidney varies gradients', 'Blood plasma free of ions false', 'Lung surfactant wrong'], 'A'),
        Q('ADH increases water permeability mainly in:', ['Collecting duct principal cells via aquaporin insertion', 'Proximal only always exclusive false ADH small effect proximal vs major collecting', 'Glomerulus filtration slits', 'Bowman’s capsule only'], 'A'),
        Q('Urea recycling in medulla contributes to:', ['Osmotic gradient for concentrating urine', 'Oxygen transport', 'Bile formation wrong organ', 'Digestive amylase'], 'A'),
      ];
    case '3-2':
      return [
        Q('Glucose appears in urine if:', ['Transport maximum exceeded in diabetes hyperglycemia contexts', 'Always healthy humans always false', 'Never measurable—false in pathology', 'Kidney filters zero glucose always false'], 'A'),
        Q('Secretion moves wastes from blood into filtrate in:', ['Proximal tubule notably organic acids and some drugs', 'Glomerulus only filters wrong direction secretion distinct', 'Alveoli', 'Duodenum mucosa primarily wrong organ'], 'A'),
        Q('RAAS system responds partly to:', ['Low perfusion/increased renin raising aldosterone trend angiotensin pathway overview', 'High O₂ in space false', 'Hunger hormone ghrelin irrelevant here', 'Photosynthetic light intensity false'], 'A'),
        Q('Creatinine estimate reflects:', ['Filtration rate as useful waste marker produced steadily muscle metabolism', 'Lung capacity', 'Salivary rate', 'Pupil dilation only'], 'A'),
        Q('Proteinuria on dipstick may indicate:', ['Barrier damage or overload rare benign transient exertion vs pathology differs', 'Normal always sleep false', 'Bile excess false', 'Alveolar surfactant in urine false'], 'A'),
      ];
    case '3-3':
      return [
        Q('ADH release is triggered by:', ['Increased plasma osmolality/detected hypovolemia pathways', 'Hyperhydration suppression of its release rather than trigger—careful opposite question could be asked but here choose trigger false option elimination: cold triggers primary not—best among distractors: increased osmolality vs decreased false', 'Low osmolality false inhibits', 'High erythrocytes count wrong primary ADH sensor false primary osmolality baroreceptors too'], 'A'),
        Q('Alcohol inhibits ADH leading to:', ['Diuresis dilute urine volume loss dehydration risk', 'Concentrated urine only false', 'Na+ retention always false', 'Bone growth spur always wrong'], 'A'),
        Q('Aldosterone acts mainly on:', ['Principal cells in late DCT and collecting duct increasing Na+ reabsorption K+ secrets aldosterone actions summary', 'Proximal only exclusive false major aldosterone effect distal/collecting while ENaC channels etc.', 'Alveoli', 'Skeleton osteoblast only wrong'], 'A'),
        Q('ANP release from atrial stretch tends to:', ['Increase natriuresis decreasing volume and BP partly', 'Increase aldosterone mostly opposite', 'Close kidney forever', 'Stop glomerular filtration entirely false'], 'A'),
        Q('Diabetes insipidus central lacks:', ['ADH leading to huge dilute urine volumes', 'Insulin only type confusion—wrong word diabetes—but question says central DI correct answer ADH not insulin', 'Pepsin', 'Thyroxine'], 'A'),
      ];
    case '3-4':
      return [
        Q('Hemodialysis removes waste using:', ['Semi-permeable dialyzer and dialysate gradients', 'Photosynthesis', 'Bile', 'Neurotransmitter reuptake'], 'A'),
        Q('Peritoneal dialysis uses:', ['Peritoneal cavity as dialysis membrane with infused fluid exchanges', 'Alveolar sacs wrong', 'Plant roots wrong', 'Synovial fluid primarily wrong'], 'A'),
        Q('Transplant rejection involves:', ['Immune system attacking foreign kidney', 'Bacterial cellulase digestion', 'O₂ excess damage only wrong', 'ADH overdose always false'], 'A'),
        Q('Chronic kidney disease elevates:', ['Urea and creatinine among markers retention', 'O₂ saturation always false mainly', 'Salivary amylase', 'Chlorophyll'], 'A'),
        Q('Erythropoietin deficiency in renal failure causes:', ['Anemia partly because EPO produced mainly kidneys adults', 'Polycythemia always false', 'Leukopenia primarily not main story', 'Jaundice primarily wrong'], 'A'),
      ];
    case '4-0':
      return [
        Q('Resting membrane potential near −70 mV means inside is:', ['More negative than outside in typical neuron', 'Positive always false', 'Zero always false', '+70 mV false'], 'A'),
        Q('Voltage-gated Na⁺ channels open during:', ['Rising phase of action potential depolarization', 'Resting only always closed mostly', 'Synaptic cleft crossing false', 'Translation in ribosome false'], 'A'),
        Q('Repolarization involves:', ['K⁺ channels opening outward current among channels restoring negativity', 'Na⁺ influx continues only false later phases', 'Calcium only always false sodium major fast component', 'Cl− only always false mixture'], 'A'),
        Q('Myelin speeds conduction by:', ['Saltatory conduction at nodes of Ranvier', 'Adding more resistance always slower false if complete remyelinate healthy', 'Blocking all signals false if destructive demyelinating disease yes but physiologically speeds jumps', 'Photosynthesis in Schwann cells false'], 'A'),
        Q('Absolute refractory period prevents:', ['Immediate reverse direction firing ensuring one-way propagation cycles', 'Any Na+ channel existence false', 'Synapses false', 'ATP production cessation false'], 'A'),
      ];
    case '4-1':
      return [
        Q('Ca²⁺ influx at synaptic terminal triggers:', ['Synaptic vesicle fusion releasing neurotransmitter', 'Photosynthesis', 'DNA replication in axon mostly false', 'Urine formation'], 'A'),
        Q('Excitatory postsynaptic potentials often involve:', ['Channels allowing Na⁺ influx depolarizing membrane toward threshold summation', 'K+ efflux hyperpolarizing only inhibitory IPSP often Cl- too GABA-A depends', 'Stomach acid', 'Bone resorption exclusively'], 'A'),
        Q('Neurotransmitter clearance includes:', ['Reuptake transporters and enzymatic degradation among mechanisms e.g. acetylcholinesterase', 'Permanent binding forever false', 'Conversion to starch false', 'Kidney filtration primarily for most neurotransmitters local'], 'A'),
        Q('Curare blocks:', ['Nicotinic acetylcholine receptors at neuromuscular junction causing paralysis historically arrow poisons', 'Bile duct', 'Glomerulus', 'Mitochondria universally all cells instantly misleading false'], 'A'),
        Q('SSRI drugs increase serotonin by:', ['Blocking reuptake at presynaptic terminal increasing synaptic dwell time overview simplistic', 'Increasing serotonin synthesis infinitely false regulated', 'Destroying receptors false', 'Blocking all synapses false toxicity'], 'A'),
      ];
    case '4-2':
      return [
        Q('The patellar reflex is best described as:', ['A monosynaptic stretch reflex at the knee', 'Purely hormonal', 'Digestive feedback', 'Kidney autoregulation'], 'A'),
        Q('Simple spinal reflex arcs can run without the brain because:', ['Interneurons and motor neurons in the cord complete the loop', 'Reflexes never use the spinal cord', 'Synapses occur only in the cerebellum', 'Motor output is always from the retina'], 'A'),
        Q('Interneurons typically:', ['Integrate sensory input before motor output in polysynaptic pathways', 'Connect muscle directly to bone only', 'Produce bile', 'Filter blood in the glomerulus'], 'A'),
        Q('A withdrawal reflex from a painful stimulus is often:', ['Polysynaptic and protective', 'Absent in all mammals', 'Located only in the forebrain', 'Dependent on insulin'], 'A'),
        Q('Stretch reflex helps maintain:', ['Muscle tone and posture partly', 'Gastric pH at 14', 'Alveolar surfactant synthesis', 'Bone marrow T-cell negative selection detail too advanced'], 'A'),
      ];
    case '4-3':
      return [
        Q('Insulin generally lowers blood glucose by:', ['Increasing peripheral glucose uptake and promoting storage pathways', 'Stimulating liver glycogen breakdown primarily', 'Blocking all enzyme activity', 'Closing potassium channels everywhere'], 'A'),
        Q('Glucagon acts chiefly on the liver to:', ['Stimulate glycogenolysis and gluconeogenesis among responses', 'Lower blood glucose', 'Secrete insulin', 'Concentrate urine'], 'A'),
        Q('Thyroid hormones mainly:', ['Regulate metabolic rate in many tissues', 'Digest dietary starch in the mouth', 'Ventilate alveoli directly', 'Filter plasma in Bowman’s capsule'], 'A'),
        Q('Long-term excess cortisol can contribute to:', ['Cushing-type signs such as muscle wasting and poor wound healing', 'Rickets in adults primarily', 'Sickle cell crisis', 'Bile deficiency only'], 'A'),
        Q('Acute epinephrine release typically:', ['Raises heart rate and mobilizes energy stores partly', 'Stimulates parasympathetic salivation only', 'Stops ventilation', 'Activates insulin alone'], 'A'),
      ];
    case '4-4':
      return [
        Q('Homeostasis refers to:', ['Maintaining stable internal conditions via feedback regulation', 'Matching sea water salinity in cells always', 'No energy use by the body', 'Eliminating all nerves'], 'A'),
        Q('Negative feedback often:', ['Reverses deviations from a set point for a regulated variable', 'Amplifies deviations endlessly', 'Occurs only in plants', 'Requires sunlight'], 'A'),
        Q('Thermoregulation in humans uses:', ['Behavior, vasodilation/vasoconstriction, sweating, and shivering among mechanisms', 'Photosynthesis in skin', 'Gills', 'Stomata'], 'A'),
        Q('Blood pressure is regulated partly by:', ['Baroreceptors and renin–angiotensin–aldosterone pathway among systems', 'Pure diffusion only', 'Bile salts concentration only', 'Red blood cell shape permanently fixed'], 'A'),
        Q('Blood glucose is stabilized by:', ['Insulin and glucagon among key hormones acting on liver and periphery', 'Only ADH', 'Thyroxine alone without exceptions', 'Pepsin in blood'], 'A'),
      ];
    case '5-0':
      return [
        Q('Oogenesis in humans produces:', ['One secondary oocyte per cycle typically ovulated with polar bodies discarded', 'Four functional eggs each meiosis always like sperm wrong asymmetric', 'Diploid gametes', 'Spores'], 'A'),
        Q('Seminiferous tubules are the site of:', ['Sperm production (spermatogenesis)', 'Estrogen synthesis primarily ovarian', 'Urine formation', 'Gas exchange'], 'A'),
        Q('The acrosome contains enzymes important for:', ['Penetrating egg investments during fertilization', 'Digesting starch in mouth', 'Photosynthesis', 'Urine concentration'], 'A'),
        Q('FSH in females supports:', ['Follicle development in the ovary among roles', 'Prostate growth primarily male context differs', 'Thyroid hormone synthesis directly', 'Bile release'], 'A'),
        Q('LH surge triggers:', ['Ovulation of a mature follicle in many cycles', 'Menarche definition timing always wrong trigger', 'Spermiogenesis directly in testes wrong primary male FSH LH testosterone', 'Kidney filtration'], 'A'),
      ];
    case '5-1':
      return [
        Q('The corpus luteum secretes mainly:', ['Progesterone supporting the uterine lining after ovulation', 'Insulin', 'Surfactant in alveoli', 'Pepsinogen'], 'A'),
        Q('Early in pregnancy, hCG helps maintain:', ['The corpus luteum and progesterone production', 'Ovulation every week', 'Menopause', 'ADH release'], 'A'),
        Q('Menstrual shedding involves:', ['Loss of functional endometrium when pregnancy does not occur', 'Egg release from testes', 'Bone remodeling', 'Glomerular filtration'], 'A'),
        Q('The uterine cycle is influenced by:', ['Estrogen and progesterone among regulators', 'Only thyroxine unrelated primarily', 'Insulin only', 'Bile acids'], 'A'),
        Q('Contraception methods include barrier approaches that reduce:', ['STI transmission risk for some designs among benefits', 'Photosynthesis', 'Kidney filtration', 'Alveolar surface area'], 'A'),
      ];
    case '5-2':
      return [
        Q('In angiosperms, the ovule develops into:', ['A seed after fertilization', 'A pollen grain', 'A petal', 'A stolon'], 'A'),
        Q('Double fertilization yields:', ['Embryo and endosperm in many species', 'Two embryos always identical', 'Only pollen tubes', 'Spores only'], 'A'),
        Q('Pollination transfers pollen from anther to:', ['Stigma', 'Ovary directly always without tube sometimes happens but typical landing stigma first', 'Root tip', 'Xylem'], 'A'),
        Q('Self-incompatibility systems reduce:', ['Self-fertilization promoting outcrossing in some plants', 'Photosynthesis rate', 'Stomatal opening', 'Mitosis'], 'A'),
        Q('Fruit development often follows:', ['Fertilization triggering hormonal changes expanding ovary tissues among patterns', 'Mitosis in animals only', 'Binary fission', 'Denitrification'], 'A'),
      ];
    case '5-3':
      return [
        Q('Barrier contraception can reduce risk of:', ['Some sexually transmitted infections when used correctly', 'All cancers', 'Genetic drift', 'Photosynthesis'], 'A'),
        Q('Vaccination (e.g. HPV) helps prevent:', ['Some virus-associated cancers among public health outcomes', 'Broken bones primarily', 'Kidney stones only', 'Rickets only'], 'A'),
        Q('Antibiotic misuse can select for:', ['Resistant bacterial strains', 'Stronger viruses directly', 'Plant hybrids only', 'Mitochondrial loss'], 'A'),
        Q('Trusted sexual health education emphasizes:', ['Consent, communication, testing, and prevention options', 'Avoiding all medicine', 'Ignoring STI symptoms', 'Shared needles'], 'A'),
        Q('HIV targets primarily:', ['CD4+ T helper cells impairing immunity', 'Red blood cell hemoglobin directly primarily wrong—late anemia indirect', 'Alveolar type I cells primarily wrong', 'Osteoblasts only'], 'A'),
      ];
    case '5-4':
      return [
        Q('Cleavage divisions after fertilization:', ['Subdivide the zygote without much growth at first', 'Begin only after birth', 'Depend on sunlight in the uterus', 'Take place chiefly in the renal pelvis'], 'A'),
        Q('In a typical uterine pregnancy, implantation occurs in the:', ['Endometrium', 'Renal cortex', 'Alveolar sac', 'Duodenal ampulla'], 'A'),
        Q('The placenta allows exchange of:', ['Gases and nutrients between maternal and fetal circulation without direct blood mixing', 'Identical blood pools shared freely always', 'Only solid bone minerals', 'Chlorophyll into the fetus'], 'A'),
        Q('Teratogens are agents that can:', ['Disrupt fetal development if exposure occurs at sensitive stages', 'Always strengthen embryos', 'Increase surfactant in adults only', 'Improve night vision in mothers only'], 'A'),
        Q('A zygote is genetically:', ['Diploid in humans combining haploid gametes', 'Haploid like each gamete still', 'Triploid always', 'Identical to only the father always'], 'A'),
      ];
    case '6-0':
      return [
        Q('Exponential growth is most likely when:', ['Resources are abundant and limiting factors are few', 'Carrying capacity is reached', 'Predation removes all prey instantly always', 'Birth rate is zero'], 'A'),
        Q('Logistic growth levels off near:', ['Carrying capacity K as density-dependent factors strengthen', 'Infinite population regardless', 'Zero individuals', 'Only bacteria never animals false'], 'A'),
        Q('A population’s age structure diagram can indicate:', ['Future growth momentum if many young cohorts exist', 'Mineral soil pH directly always', 'Moon phase', 'Earthquake risk'], 'A'),
        Q('Immigration increases population size when:', ['Individuals enter the defined population', 'Birth rate becomes zero', 'Death rate infinite', 'Carrying capacity equals zero'], 'A'),
        Q('Density-independent factors might include:', ['Some natural disasters affecting many densities similarly in a region', 'Competition always only density dependent not exclusively—disaster wildfire example ok', 'Territoriality always only density dependent', 'Disease transmission sometimes—can be density dependent—fire clearer pick'], 'A'),
      ];
    case '6-1':
      return [
        Q('Predation can:', ['Regulate prey density and shape community structure', 'Remove all producers in every biome', 'Eliminate competition entirely', 'Replace photosynthesis globally'], 'A'),
        Q('The competitive exclusion principle states that:', ['Two species competing for identical limited resources cannot coexist indefinitely in simple models', 'Species never compete', 'Niches are infinite always', 'Producers are unnecessary for consumers'], 'A'),
        Q('A keystone species is one whose:', ['Removal causes disproportionate community change compared to its biomass', 'Biomass always dominates the habitat', 'Role is only decorative', 'Population is always largest'], 'A'),
        Q('Mutualism is a relationship where:', ['Both partners often gain a net benefit in many cases', 'Only one organism benefits always', 'Neither is affected', 'The sun is the only energy source involved'], 'A'),
        Q('Commensalism typically describes:', ['One species benefiting with negligible effect on the other in idealized cases', 'Both harmed', 'Both always strongly harmed', 'No interaction'], 'A'),
      ];
    case '6-2':
      return [
        Q('Carbon dioxide rises with fossil fuel combustion because:', ['Geologically stored carbon oxidizes to CO₂ faster than long-term burial removes it', 'Oceans lose all CO₂ instantly false', 'Plants stop respiration false', 'Nitrogen becomes carbon false'], 'A'),
        Q('Photosynthesis removes CO₂ by:', ['Fixing inorganic carbon into organic molecules in producers', 'Burning glucose in mitochondria only always consumer context opposite', 'Denitrification', 'Subduction into mantle primarily human timescale irrelevant here'], 'A'),
        Q('Nitrogen for proteins enters food webs largely via:', ['Fixation and assimilation pathways converting N₂ to biologically useful forms', 'Pure diamond consumption false', 'Iron alone', 'Helium fusion'], 'A'),
        Q('Eutrophication is driven partly by:', ['Nutrient runoff increasing primary production then decomposition consuming oxygen', 'CO₂ drop only', 'Ozone hole primarily local ponds false main issue complex', 'Lunar eclipse'], 'A'),
        Q('Burning forests for land clearance:', ['Releases stored carbon quickly and removes future uptake capacity', 'Permanently removes nitrogen from atmosphere entirely false', 'Increases Earth mass', 'Stops water cycle'], 'A'),
      ];
    case '6-3':
      return [
        Q('Habitat fragmentation tends to:', ['Create smaller patches and more edge habitat, often reducing viable populations', 'Always increase total wilderness area', 'Eliminate sunlight', 'Guarantee higher carrying capacity'], 'A'),
        Q('Wildlife corridors can help by:', ['Reconnecting populations for gene flow and movement', 'Separating all habitats permanently', 'Stopping reproduction', 'Converting forests to pavement'], 'A'),
        Q('Invasive species may threaten natives by:', ['Competition, predation, or disease introduction among mechanisms', 'Increasing biodiversity always', 'Never altering food webs', 'Photosynthesizing less'], 'A'),
        Q('Endemic species on islands are often vulnerable because:', ['Small ranges and limited escape from disturbance or novel threats', 'They reproduce too fast always', 'They lack any predators always false', 'They are always toxic'], 'A'),
        Q('Captive breeding programs aim to:', ['Support recovery of threatened species with managed reproduction', 'Replace all wild populations', 'Eliminate genetic diversity intentionally', 'Ban zoos always'], 'A'),
      ];
    case '6-4':
      return [
        Q('Natural selection requires:', ['Variation, heredity, and differences in survival or reproduction', 'Instant perfection of all traits', 'No environment', 'Identical offspring always'], 'A'),
        Q('Adaptation refers to:', ['Traits that increase fitness in a given environment over generations', 'Individuals consciously choosing traits', 'Lamarckian lifting weights meme as the main mechanism', 'Random language change'], 'A'),
        Q('Protecting biodiversity can involve:', ['Protected areas, sustainable harvest, pollution control, and restoration among strategies', 'Harvesting all keystone predators', 'Maximizing single-crop agriculture everywhere without limits', 'Ignoring invasive species'], 'A'),
        Q('Climate change shifts can lead to:', ['Range shifts or local extinctions when warming exceeds tolerances or habitat disappears', 'Identical weather forever everywhere', 'More sea ice in the Arctic always universally false trend', 'No effect on phenology false many shifts observed'], 'A'),
        Q('Citizen science can aid conservation by:', ['Expanding monitoring data for species distributions', 'Replacing peer review entirely', 'Eliminating taxonomy', 'Stopping all field research'], 'A'),
      ];
    default:
      return [
        Q('Which option best applies the core definition from this unit?', ['Use the definition with the scenario’s facts', 'Ignore every given', 'Assume unrelated mechanisms', 'Pick randomly'], 'A'),
        Q('Which line of reasoning is weakest here?', ['Contradicts an established pathway for the organ or population described', 'Matches textbook sequence', 'Uses correct terminology', 'Checks units and direction'], 'A'),
        Q('Strong exam distractors often:', ['Use partly true wording about a related process', 'Are physically impossible within biology', 'Contain no verbs', 'Are always option D'], 'A'),
        Q('When narrowing two answers:', ['Compare needed cause–effect direction carefully', 'Flip a coin only', 'Always choose the longer text', 'Reject all diagrams'], 'A'),
        Q('Synthesis across topics in Grade 10 might link:', ['Nutrition, gas exchange, excretion, and homeostasis in whole-organism context', 'Only Latin names', 'Rock chemistry unrelated', 'Keyboard shortcuts'], 'A'),
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
