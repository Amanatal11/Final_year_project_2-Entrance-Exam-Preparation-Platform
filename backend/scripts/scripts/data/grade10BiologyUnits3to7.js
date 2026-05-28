/**
 * Grade 10 Biology curriculum — Units 3–7 (Natural stream).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 3: Respiration and gas transport',
    chapterDescription: 'Ventilation, diffusion at alveoli, hemoglobin, CO₂ and pH, respiratory disease prevention.',
    topics: [
      {
        topicName: 'Mechanics of breathing',
        topicDescription: 'Diaphragm, intercostals, pressure gradients, lung volumes.',
        topicObjectives: ['Relate alveolar pressure to airflow.', 'Name tidal and vital capacity at an introductory level.'],
      },
      {
        topicName: 'Alveolar gas exchange',
        topicDescription: 'Thin barrier, surfactant, basic V/Q ideas.',
        topicObjectives: ['Explain O₂ diffusion into pulmonary capillaries.', 'Describe surfactant’s anti-collapse role.'],
      },
      {
        topicName: 'Hemoglobin and oxygen delivery',
        topicDescription: 'Heme binding, anemia, carbon monoxide.',
        topicObjectives: ['Contrast low Hb vs low PO₂ as different limits.', 'Explain CO toxicity on oxygen carrying capacity.'],
      },
      {
        topicName: 'Carbon dioxide transport and pH',
        topicDescription: 'Bicarbonate pathway, chloride shift, hypoventilation vs hyperventilation.',
        topicObjectives: ['Identify carbonic anhydrase importance.', 'Link high PaCO₂ to acidemia trend when uncompensated.'],
      },
      {
        topicName: 'Respiratory health',
        topicDescription: 'Asthma and COPD survey; tobacco smoke harms.',
        topicObjectives: ['State why smoking damages airways and alveoli over time.', 'Name prevention and cessation benefits.'],
      },
    ],
    exercises: [
      ex(0, 'Pressure', 'During quiet inspiration, intrapulmonary pressure is:' , ['Greater than atmospheric while air flows in', 'Less than atmospheric before air flows in', 'Exactly 760 mmHg always false timing', 'Zero absolute in healthy lungs false'], 1, 'Medium'),
      ex(1, 'Area', 'Huge total alveolar surface supports:', ['Rapid diffusion parallel to concentration gradients', 'Mechanical digestion', 'Filtration in glomerulus', 'Rumen fermentation'], 0, 'Easy'),
      ex(2, 'Content vs pressure', 'In anemia, PaO₂ may be normal while oxygen content is reduced because:', ['There is less hemoglobin to carry oxygen per liter of blood', 'Diffusion across alveoli stopped entirely', 'Atmospheric PO₂ fell', 'Surfactant doubled'], 0, 'Medium'),
      ex(3, 'pH', 'If CO₂ is retained, blood pH tends to', ['rise (become more alkaline) when uncompensated acutely false direction for extra CO2 dissolve carbonic acid trend drop pH acidosis', 'fall (become more acidic) in acute respiratory acidosis before renal compensation', 'stay exactly 7.00 always', 'become non‑buffered distilled water false'], 1, 'Medium'),
      ex(4, 'Smoke', 'Tobacco smoke exposure is strongly linked to:', ['chronic bronchitis and lung cancer among other diseases', 'stronger alveolar walls always false', 'lower blood pressure always false nicotine acute vasoconstriction mixed cardiovascular risk rises chronic', 'improved mucociliary clearance long-term false'], 0, 'Easy'),
      ex(1, 'Surf', 'Surfactant deficiency in premature infants increases risk of:', ['atelectasis', 'hyperopia', 'jaundice from excess bilirubin primarily different context', 'thyroid storm false'], 0, 'Easy'),
      ex(2, 'CO', 'Carbon monoxide impairs delivery chiefly by:', ['occupying hemoglobin binding sites', 'increasing diffusion distance across alveoli primarily not main CO mechanism', 'raising plasma sodium only', 'destroying the diaphragm false'], 0, 'Easy'),
      ex(3, 'Bicarb', 'Bicarbonate carries a large fraction of CO₂ in blood as:', ['HCO₃⁻ in plasma after RBC processing', 'O₂ gas bubbles', 'iron filings', 'starch granules'], 0, 'Easy'),
      ex(4, 'Asthma', 'Asthma is characterized by episodes of:', ['airway inflammation and bronchoconstriction', 'irreversible alveolar wall destruction primarily emphysema pattern distinct though COPD umbrella overlaps clinically nuanced exam simple pick inflammation constriction episodes', 'kidney stone pain', 'ulcerative colitis'], 0, 'Easy'),
      ex(0, 'Volumes', 'Vital capacity roughly equals', ['IRV + TV + ERV (spirometry definition)', 'only residual volume', 'only dead space volume anatomical', 'stroke volume of the heart'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Mechanics of breathing',
        problems: [
          P(
            'During quiet inspiration, contraction of the diaphragm primarily:',
            [
              'Shrinks thoracic cavity volume in healthy adults',
              'Increases thoracic volume, allowing lungs to expand as air follows pressure gradients',
              'Stops alveolar ventilation completely',
              'Does not contribute to changing thoracic volume',
            ],
            'B',
            ''
          ),
          P(
            'Compared with atmospheric pressure, intrapleural pressure in a healthy person at rest is typically:',
            ['Strongly positive', 'Subatmospheric (negative)', 'Exactly 0 mmHg absolute', 'Equal to left ventricular systolic pressure'],
            'B',
            ''
          ),
          P(
            'According to basic pressure–volume flow ideas, air moves into the lungs when alveolar pressure is:',
            ['Higher than atmospheric pressure', 'Lower than atmospheric pressure', 'Unrelated to atmospheric pressure', 'Higher than plasma colloid osmotic pressure'],
            'B',
            ''
          ),
          P(
            'Tidal volume best describes:',
            [
              'Residual volume only',
              'Air moved in a quiet resting breath (one inhalation or exhalation without forced effort)',
              'Total lung capacity',
              'Gas exchange surface area of all alveoli',
            ],
            'B',
            ''
          ),
          P(
            'Vital capacity (as commonly defined in introductory spirometry) is closest to:',
            [
              'IRV + TV + ERV',
              'Only residual volume',
              'Only anatomic dead space',
              'Stroke volume × heart rate',
            ],
            'A',
            ''
          ),
          P(
            'Intercostal muscles can assist inspiration by:',
            [
              'Increasing chest wall dimensions in some breathing patterns',
              'Blocking airflow through the trachea',
              'Filtering plasma in Bowman’s capsule',
              'Closing the mitral valve',
            ],
            'A',
            ''
          ),
          P(
            'At functional residual capacity (relaxed breathing), the inward elastic recoil of the lungs is mainly balanced by:',
            [
              'Outward elastic recoil of the chest wall',
              'Smooth muscle tone in the esophagus only',
              'ADH secretion from the kidney',
              'Glycolysis in erythrocytes only',
            ],
            'A',
            ''
          ),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Alveolar gas exchange',
        problems: [
          P(
            'The blood–gas barrier for O₂ diffusion is kept thin mainly by:',
            [
              'Thick cartilage plates in bronchioles',
              'Alveolar epithelium and capillary endothelium with fused basement membranes in many regions',
              'Hemoglobin inside bronchial glands',
              'Bile salts in pulmonary surfactant',
            ],
            'B',
            ''
          ),
          P(
            'O₂ net diffusion into pulmonary capillary blood follows mainly from:',
            [
              'Higher alveolar PO₂ than mixed venous blood PO₂ at the exchange site',
              'Higher PO₂ in renal cortex than alveoli always',
              'Lower hematocrit than tissue always',
              'Absence of carbonic anhydrase in the stomach',
            ],
            'A',
            ''
          ),
          P(
            'Surfactant reduces alveolar surface tension, which helps prevent:',
            ['Anemia', 'Alveolar collapse (atelectasis tendency) when compliant alveoli become very small', 'Polycythemia', 'Hyperextension of knee tendons'],
            'B',
            ''
          ),
          P(
            'Regional ventilation–perfusion matching means that areas with better ventilation relative to perfusion tend to:',
            [
              'Receive less blood automatically always',
              'Adjust perfusion via hypoxic vasoconstriction in pulmonary circulation (survey level concept)',
              'Secrete pepsin into alveoli',
              'Fix nitrogen symbiotically',
            ],
            'B',
            ''
          ),
          P(
            'Anatomic dead space refers to air in conducting airways where:',
            ['Gas exchange with blood occurs maximally', 'Gas exchange does not occur in healthy lungs', 'Filtration of glucose occurs', 'Ultrafiltration of plasma occurs'],
            'B',
            ''
          ),
          P(
            'Carbon monoxide diffusion is used clinically in DLCO tests partly because:',
            [
              'CO binds hemoglobin with very high affinity, sensitive to diffusion barrier changes',
              'CO does not bind hemoglobin at all',
              'CO is filtered freely at the glomerulus without limit',
              'CO is the main buffer in blood plasma',
            ],
            'A',
            ''
          ),
          P(
            'Pulmonary edema fluid in alveoli impairs gas exchange mainly by:',
            ['Increasing hemoglobin concentration', 'Increasing diffusion distance / barrier thickness for gases', 'Increasing inspired PO₂ always', 'Eliminating surfactant synthesis entirely always'],
            'B',
            ''
          ),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Hemoglobin and oxygen delivery',
        problems: [
          P(
            'At typical lung capillary conditions, most transported oxygen in arterial blood is:',
            [
              'Dissolved O₂ in plasma only',
              'Bound to hemoglobin in red blood cells',
              'Trapped as starch granules',
              'Converted entirely to CO₂ before leaving lungs',
            ],
            'B',
            ''
          ),
          P(
            'Anemia can yield normal arterial PaO₂ yet low oxygen content because:',
            [
              'There is less hemoglobin available per liter to carry oxygen',
              'Diffusion across alveoli stops completely',
              'Ventilation always becomes zero',
              'Surfactant always doubles in anemia',
            ],
            'A',
            ''
          ),
          P(
            'Carbon monoxide toxicity impairs oxygen delivery chiefly by:',
            [
              'Competitive binding at hemoglobin sites and shifting Hb away from carrying O₂ effectively',
              'Blocking diffusion across type I pneumocytes only',
              'Increasing atmospheric nitrogen partial pressure',
              'Stopping all red blood cell glycolysis instantly always',
            ],
            'A',
            ''
          ),
          P(
            'The sigmoid shape of the oxyhemoglobin dissociation curve is explained partly by:',
            ['Michaelis–Menten kinetics of pepsin', 'Cooperative binding of O₂ to hemoglobin subunits', 'Independent non-interacting single-site binding only', 'Zero role of pH or CO₂'],
            'B',
            ''
          ),
          P(
            'Right shift of the oxyhemoglobin curve (Bohr effect context) can be associated with:',
            [
              'Lower temperature only always for exercise',
              'Higher CO₂ / lower pH in metabolically active tissues favoring O unloading',
              'Absence of 2,3-BPG in erythrocytes always',
              'Pure left shift with no metabolic meaning',
            ],
            'B',
            ''
          ),
          P(
            '2,3-BPG in RBCs generally:',
            ['Stabilizes relaxed Hb lowering O₂ affinity in tissues contextually', 'Destroys hemoglobin permanently in lungs', 'Functions identical to insulin', 'Is produced in the nephron proximal tubule only'],
            'A',
            ''
          ),
          P(
            'Polycythemia (more RBCs) may increase total oxygen content but can also:',
            [
              'Improve ventilation perfusion automatically without any viscosity issues always',
              'Increase blood viscosity posing circulation risks in some contexts',
              'Eliminate need for iron',
              'Convert hemoglobin to myoglobin in neurons',
            ],
            'B',
            ''
          ),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — CO₂ transport and pH',
        problems: [
          P(
            'Most CO₂ in blood is transported as:',
            ['O₂ dissolved only', 'Bicarbonate after hydration reactions largely involving RBC carbonic anhydrase', 'Pure carbon dust', 'Amino acids only'],
            'B',
            ''
          ),
          P(
            'Carbonic anhydrase speeds:',
            [
              'Conversion of CO₂ and H₂O to carbonic acid / bicarbonate pathway components',
              'Protein synthesis on ribosomes in alveoli',
              'DNA replication in bronchi',
              'Glycogen synthesis in pneumocytes',
            ],
            'A',
            ''
          ),
          P(
            'The chloride shift helps maintain electroneutrality when:',
            ['HCO₃⁻ leaves RBCs', 'Sodium is filtered into Bowman’s capsule only', 'ADH closes stomata', 'Glycolysis stops in the liver'],
            'A',
            ''
          ),
          P(
            'Acute hypoventilation tends to raise arterial PaCO₂ and can cause:',
            [
              'Respiratory alkalosis always',
              'Trend toward respiratory acidosis (lower blood pH) if uncompensated acutely',
              'Immediate metabolic alkalosis always',
              'Disappearance of bicarbonate from Earth',
            ],
            'B',
            ''
          ),
          P(
            'Haldane effect relates to the influence of:',
            ['Urea cycle intermediates in liver', 'Oxygenation state of hemoglobin on CO₂ carrying / release', 'Insulin spikes in fasting', 'Auxin gradients in shoots only'],
            'B',
            ''
          ),
          P(
            'Hyperventilation can lower PaCO₂ and cause:',
            ['Respiratory acidosis', 'Respiratory alkalosis tendency (blood pH rises acutely if uncompensated)', 'Immediate high altitude polycythemia always', 'Increased bilirubin always'],
            'B',
            ''
          ),
          P(
            'Central chemoreceptors are sensitive chiefly to:',
            ['Atmospheric N₂ partial pressure alone', 'CSF pH influenced by CO₂-derived acid loading', 'Plasma glucose in isolation always', 'Bone density changes'],
            'B',
            ''
          ),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — Respiratory health',
        problems: [
          P(
            'Tobacco smoke irritates and damages respiratory epithelium partly by:',
            [
              'Improving ciliary clearance long-term',
              'Delivering toxins and paralyzing/reducing mucociliary clearance over time',
              'Increasing alveolar surface area always',
              'Eliminating all inflammatory responses always',
            ],
            'B',
            ''
          ),
          P(
            'COPD often involves chronic bronchitic and/or emphysematous patterns sharing:',
            [
              'Improved elastic recoil of alveolar walls',
              'Obstructive limitation to airflow and destruction/remodeling of small airways and/or alveolar walls',
              'Purely restrictive lung disease only always',
              'Renal failure',
            ],
            'B',
            ''
          ),
          P(
            'Asthma exacerbations commonly feature:',
            [
              'Bronchoconstriction and airway inflammation',
              'Irreversible fusion of ribs always',
              'Absence of smooth muscle in bronchi',
              'Increased surfactant deficiency as the defining sole cause always',
            ],
            'A',
            ''
          ),
          P(
            'Pneumonia risk factors can include:',
            [
              'Both impaired clearance (e.g. smoking) and pathogens reaching alveoli among many factors',
              'Only genetic absence of hemoglobin always',
              'Vitamin C excess only',
              'Lack of DNA in bacteria',
            ],
            'A',
            ''
          ),
          P(
            'Public health measures that reduce smoking initiation include examples such as:',
            [
              'Only banning oxygen in hospitals',
              'Taxation, clean indoor air laws, and education campaigns (context-dependent effectiveness)',
              'Eliminating vaccines',
              'Encouraging sedentary behavior only',
            ],
            'B',
            ''
          ),
          P(
            'Silicosis is an occupational lung disease caused by:',
            [
              'Excess dietary fructose only',
              'Inhaled silica dust leading to inflammatory fibrotic lung injury over time',
              'Hyperhydration only',
              'Mitochondrial DNA in pollen',
            ],
            'B',
            ''
          ),
          P(
            'Spirometry screening in some programs helps identify:',
            [
              'Only kidney stones',
              'Obstructive patterns (e.g. low FEV1/FVC ratios in airflow limitation contexts)',
              'Retinal detachment',
              'Dental cavities only',
            ],
            'B',
            ''
          ),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 4: Excretion and osmoregulation',
    chapterDescription: 'Kidney organization, nephron function, hormones, dialysis concepts.',
    topics: [
      { topicName: 'Kidney structure and circulation', topicDescription: 'Cortex, medulla, blood flow path overview.', topicObjectives: ['Locate cortex vs medulla roles.', 'Follow blood from renal artery toward peritubular capillaries.'] },
      { topicName: 'Filtration at the glomerulus', topicDescription: 'Barrier, GFR influences.', topicObjectives: ['Explain protein exclusion in normal filtrate.', 'Name factors altering GFR conceptually.'] },
      { topicName: 'Tubular processing', topicDescription: 'Reabsorption vs secretion; glucose threshold idea.', topicObjectives: ['Give proximal tubule examples.', 'State why glucose appears in urine in hyperglycemia.'] },
      { topicName: 'Concentrating urine and hormones', topicDescription: 'Countercurrent idea; ADH; aldosterone overview.', topicObjectives: ['Predict urine concentration when ADH rises.', 'Link aldosterone to Na⁺ and water retention.'] },
      { topicName: 'Renal failure and dialysis', topicDescription: 'Waste retention; hemodialysis vs peritoneal dialysis survey.', topicObjectives: ['List urea/creatinine rise with low GFR.', 'Compare dialysis modalities at a high level.'] },
    ],
    exercises: [
      ex(0, 'Unit', 'The functional unit of the kidney is the', ['nephron', 'neuron', 'osteocyte', 'chloroplast'], 0, 'Easy'),
      ex(1, 'Protein', 'In health, plasma albumin is largely', ['retained in blood at the filtration barrier', 'freely filtered like glucose always false size charge barrier', 'secreted by distal tubule primarily', 'converted to urea in Bowman’s space false'], 0, 'Medium'),
      ex(2, 'Glucose', 'Glucose appears in urine when', ['filtered load exceeds proximal tubule reabsorptive capacity', 'GFR is zero false anuria different', 'ADH is high but only when diabetes insipidus false primarily hyperglycemia diabetes mellitus type context exam', 'aldosterone absent only false'], 0, 'Medium'),
      ex(3, 'ADH', 'ADH increases water permeability mainly in the', ['collecting duct principal cells among locations', 'proximal only exclusively false ADH modulates collecting duct primarily major school level also inner medullary collecting duct regulatory context', 'glomerular capillary', 'pulmonary alveolus'], 0, 'Easy'),
      ex(4, 'Dialysis', 'Hemodialysis clears solutes by', ['diffusion across a dialyzer membrane with dialysate', 'photosynthesis', 'fermentation', 'mitosis'], 0, 'Easy'),
      ex(1, 'GFR', 'Decreased renal perfusion can', ['lower GFR via afferent/efferent dynamics and tubuloglomerular feedback pathways introductory', 'increase GFR always false', 'stop insulin secretion primarily false organ', 'increase surfactant false'], 0, 'Hard'),
      ex(2, 'Secretion', 'Many organic acids are secreted from blood into filtrate in the', ['proximal tubule', 'lens of the eye false', 'inner ear only false', 'spinal cord false'], 0, 'Medium'),
      ex(3, 'Aldo', 'Aldosterone primarily enhances epithelial sodium reabsorption in', ['late distal tubule and collecting duct contexts', 'bowman’s capsule filtration barrier primarily secretion not aldo role', 'pancreatic acinar cells false', 'plant roots only false'], 0, 'Medium'),
      ex(4, 'EPO', 'Erythropoietin is produced mainly in', ['adult kidneys (fibroblast-like interstitial cells in classic teaching)', 'the gallbladder false', 'alveolar macrophages primarily false immun role diff context', 'thyroid follicular cells false mostly T3 T4 hormone'], 0, 'Medium'),
      ex(0, 'Pyramids', 'Renal pyramids lie primarily in the', ['medulla', 'cortex exclusively false corpuscle region cortex outer', 'urethra', 'liver'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — Kidney structure and circulation',
        problems: [
          P('The functional unit that filters blood and forms urine is the:', ['neuron', 'nephron', 'hepatocyte', 'sarcomere'], 'B', ''),
          P('Renal corpuscles (glomerulus + Bowman’s capsule) are located mainly in the:', ['medulla only', 'cortex', 'ureter wall', 'adrenal medulla'], 'B', ''),
          P('Blood enters each kidney from the:', ['pulmonary vein', 'renal artery', 'hepatic portal vein', 'common iliac vein only'], 'B', ''),
          P('The renal pyramids drain toward the:', ['glomerulus', 'minor calyx / collecting system', 'portal triad', 'alveolus'], 'B', ''),
          P('Peritubular capillaries and vasa recta exchange with:', ['pulmonary alveoli', 'tubules along postglomerular microcirculation routes', 'bone osteocytes only', 'chloroplasts'], 'B', ''),
          P('Erythropoietin is produced chiefly in:', ['alveolar macrophages', 'kidney interstitial cells (classic teaching location in adults)', 'pancreatic islets', 'thyroid follicular cells primarily'], 'B', ''),
          P('Compared with the cortex, the medulla is specialized in part for:', ['forming all glomeruli', 'generating high osmolar gradients used in concentrating urine', 'producing insulin', 'gas exchange'], 'B', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Filtration at the glomerulus',
        problems: [
          P('Filtration occurs at the glomerulus into:', ['collecting duct', 'Bowman’s space / capsular space', 'urethra', 'distal ileum'], 'B', ''),
          P('Plasma proteins like albumin are largely excluded because:', ['they are synthesized only in tubules', 'pore size, charge selectivity, and barrier structure limit passage', 'they are larger than red blood cells always false relative', 'they dissolve only in bile'], 'B', ''),
          P('GFR is the volume of:', ['urine finally voided per day only', 'filtrate formed per unit time across all functioning nephrons', 'saliva', 'chyme'], 'B', ''),
          P('Increased glomerular capillary hydrostatic pressure tends to:', ['lower filtration force', 'favor filtration if other Starling forces unchanged in direction', 'stop proximal reabsorption', 'convert urea to starch'],
            'B', ''),
          P('Constriction of the efferent arteriole can sometimes:', ['eliminate filtration completely always', 'alter downstream peritubular pressure affecting nephron dynamics', 'digest dietary fat in the kidney', 'increase surfactant production'], 'B', ''),
          P('Autoregulation via myogenic and tubuloglomerular feedback helps:', ['keep cerebral blood flow constant only always', 'stabilize GFR when systemic pressure varies over a range', 'ventilate lungs', 'fix nitrogen in soil'], 'B', ''),
          P('Normal filtrate typically contains little:', ['water', 'glucose at concentrations near plasma unless filtered load exceeds tubular maximum', 'large plasma protein fractions compared to plasma', 'ions like sodium'], 'C', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Tubular processing',
        problems: [
          P('Most filtered glucose is reabsorbed primarily in the:', ['collecting duct under ADH only always for glucose', 'proximal convoluted tubule', 'loop of Henle ascending limb exclusively', 'glomerular capsule lining cells only'], 'B', ''),
          P('Glucose appears in glucosuria mainly when:', ['ADH is absent only', 'filtered glucose load exceeds proximal tubule transport capacity', 'alkalosis only', 'breathing rate is fixed'], 'B', ''),
          P('Many organic acids and bases are secreted into filtrate especially in the:', ['cornea', 'proximal tubule among sites', 'inner ear hair cells', 'salivary amylase vesicles'], 'B', ''),
          P('Active reabsorption of Na⁺ in many tubular segments often creates:', ['urea in mitochondria only', 'osmotic gradients that favor water reabsorption when channels are open', 'chlorophyll', 'surfactant'],
            'B', ''),
          P('Loop of Henle function contributes to:', ['gas exchange in alveoli', 'medullary hypertonicity for urine concentrating ability survey', 'synaptic vesicle docking', 'photosystem II'],
            'B', ''),
          P('Secretion moves substances from:', ['urine to dialysis bag only always', 'blood across tubular epithelium into tubular fluid', 'alveolus to pulmonary vein only', 'stomach lumen to liver always always'], 'B', ''),
          P('Para-aminohippurate is a classic conceptual example for teaching:', ['glomerular filtration rate only without secretion', 'effective renal plasma flow estimation because it is cleared by secretion strongly', 'hemoglobin oxygen affinity', 'mitotic spindle formation'], 'B', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — Concentrating urine and hormones',
        problems: [
          P('ADH (vasoppressin) increases water permeability mainly in the:', ['proximal tubule only exclusively always', 'collecting duct principal cells / collecting system', 'glomerular podocytes exclusively', 'bronchial smooth muscle primarily'], 'B', ''),
          P('Aldosterone acts on principal cells in late distal/collecting regions to:', ['increase Na⁺ reabsorption and indirectly water retention tendency among actions', 'block all chloride channels forever', 'secrete bile', 'photosynthesize in renal cortex'], 'A', ''),
          P('The countercurrent multiplier / exchanger systems help establish:', ['photosynthetic quantum yield', 'medullary osmotic gradients enabling concentrated urine when ADH present', 'platelet aggregation in lungs', 'bone resorption rates only'],
            'B', ''),
          P('When dehydrated, ADH rises and urine becomes:', ['more dilute always', 'more concentrated typically', 'isotonic to plasma always regardless of ADH', 'pure distilled water'], 'B', ''),
          P('Obligatory water loss occurs because:', ['urea and solutes must be excreted requiring some water with them', 'kidneys stop filtering water entirely in dehydration false', 'all ADH is destroyed', 'chloride is absent from plasma'], 'A', ''),
          P('Atrial natriuretic peptide can promote:', ['increased sodium excretion tendency among cardiovascular/renal contexts', 'massive aldosterone spikes always', 'closure of glomerular filtration pores completely', 'stomach acid suppression unrelated'], 'A', ''),
          P('A high protein diet may increase urea load and can:', ['remove need for kidneys', 'increase obligatory urine solute excretion water somewhat', 'turn plasma isotonic to pure water always', 'cause mitosis in neurons exclusively'], 'B', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Renal failure and dialysis',
        problems: [
          P('End-stage renal disease typically involves:', ['infinite GFR', 'severely reduced filtration with waste retention', 'pure respiratory alkalosis always only', 'increased hepatic urea removal replacing kidneys always'], 'B', ''),
          P('Hemodialysis clears solutes by:', ['photosynthetic carbon fixation in dialyzer', 'diffusion across a semipermeable membrane with dialysate controlled', 'mitosis in dialysate bags', 'binary fission of erythrocytes'], 'B', ''),
          P('Peritoneal dialysis uses:', ['alveolar surface area', 'the peritoneal membrane as a dialyzing surface with instilled fluid', 'the cornea as filter', 'mitochondrial cristae only'], 'B', ''),
          P('Urea and creatinine rise in blood partly because:', ['kidneys synthesize them faster always solely', 'excretion falls when GFR drops markedly', 'hemoglobin stops binding oxygen', 'pulmonary surfactant doubles'], 'B', ''),
          P('Kidney transplant treats ESRD by:', ['removing immune system entirely', 'replacing filtration/excretory function with a donor organ when successful', 'deleting DNA from patients', 'turning skin into nephrons'], 'B', ''),
          P('Anemia in CKD relates partly to:', ['excess erythropoietin always', 'decreased erythropoietin production and uremia effects among factors', 'increased hemoglobin always', 'lack of iron only in every CKD patient universally'], 'B', ''),
          P('Strict fluid management in dialysis aims partly to:', ['prevent dangerous volume overload or hypotension between sessions depending context', 'increase alveolar dead space', 'eliminate bile production', 'replace insulin fully'], 'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 5: Neural and endocrine coordination',
    chapterDescription: 'Neurons, synapses, reflexes, major hormones, blood glucose as homeostasis example.',
    topics: [
      { topicName: 'Neuron electrophysiology', topicDescription: 'Resting potential, action potential basics.', topicObjectives: ['Describe sodium and potassium channel roles in depolarization/repolarization survey.', 'State all-or-none nature along axon.'] },
      { topicName: 'Synaptic transmission', topicDescription: 'Chemical synapse events; excitation/inhibition.', topicObjectives: ['Outline neurotransmitter release and receptor binding.', 'Differentiate EPSP vs IPSP conceptually.'] },
      { topicName: 'Reflex arcs', topicDescription: 'Spinal reflex example; autonomic overview.', topicObjectives: ['Sketch a simple reflex pathway.', 'Relate reflex speed to synapse count.'] },
      { topicName: 'Endocrine system survey', topicDescription: 'Pituitary, thyroid, adrenal cortex/medulla basics.', topicObjectives: ['Match gland to one key hormone role.', 'State negative feedback idea with thyroid or cortisol examples.'] },
      { topicName: 'Glucose homeostasis', topicDescription: 'Insulin vs glucagon pathways overview.', topicObjectives: ['Explain postprandial vs fasting hormone patterns at survey level.', 'Link glucagon targets in liver.'] },
    ],
    exercises: [
      ex(0, 'Resting', 'At rest, neuron cytoplasm is', ['more negative than extracellular fluid typically', 'more positive always false', 'iso-electric everywhere false dynamic synapses aside', 'without ion gradients false'], 0, 'Easy'),
      ex(1, 'Ca', 'Influx of Ca²⁺ into a presynaptic terminal promotes', ['neurotransmitter vesicle fusion', 'photosynthesis', 'bone mineralization at that instant primarily false synapse context', 'filtration in kidneys false'], 0, 'Easy'),
      ex(2, 'Reflex', 'Monosynaptic stretch reflex arcs are often', ['fast partly due to fewer synapses in pathway', 'impossible in humans false patellar exists', 'purely hormonal', 'dependent on voluntary motor planning for speed false'], 0, 'Easy'),
      ex(3, 'Thyroid', 'Thyroid hormones broadly', ['raise metabolic rate in many tissues', 'digest cellulose', 'ventilate lungs directly mechanically false', 'produce surfactant false'], 0, 'Easy'),
      ex(4, 'Insulin', 'Insulin lowers blood glucose partly by', ['promoting cellular uptake and storage pathways', 'stimulating liver glycogen breakdown primarily glucagon opposite not insulin main story', 'blocking all enzymes universally false', 'closing stomata false plant context wrong'], 0, 'Easy'),
      ex(1, 'Clear', 'Acetylcholine is cleared from synapses partly by', ['acetylcholinesterase', 'rubisco', 'pepsin', 'carbonic anhydrase in alveoli primarily wrong location enzyme'], 0, 'Medium'),
      ex(2, 'ANS', 'The autonomic nervous system includes branches that can be', ['sympathetic and parasympathetic among divisions', 'only sensory afferent exclusively false mixed', 'only cerebellar nuclear output false', 'only lymphatic vessels false'], 0, 'Easy'),
      ex(3, 'Cortisol', 'Chronic high cortisol can contribute to', ['immune suppression and hyperglycemia among cushing syndrome style features', 'instant height doubling false pediatric growth complexities nuanced usually stunt if chronic excess children', 'iron deficiency anemia primarily not main acute mechanism unrelated', 'surfactant deficiency in adults only false neonatal primarily'], 0, 'Hard'),
      ex(4, 'Gluca', 'Glucagon acts strongly on the', ['liver to mobilize glucose stores pathways glycogenolysis gluconeogenesis promotion contexts', 'skeletal muscle glycogen primarily insulin mediated glycogen synthesis not glucagon major story muscle sparing nuanced physiology teaching simplification exam pick liver', 'kidney primary calcitriol different hormone', 'salivary glands false'], 0, 'Medium'),
      ex(0, 'Myelin', 'Myelin on axons speeds conduction by', ['saltatory conduction jumping node to node', 'adding more cytoplasm length per second false actually insulation reduces capacitance jumps nodes', 'eliminating action potentials false', 'storing neurotransmitters false'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Neuron electrophysiology',
        problems: [
          P('Typical intracellular resting potential is negative relative to outside mainly because:', ['only sodium channels exist', 'ion pumps and selective permeabilities maintain unequal ion distributions across the membrane', 'DNA inside nucleus pushes voltage', 'mitochondria cancel all gradients'], 'B', ''),
          P('Voltage-gated Na⁺ channels opening at the axon hillock initiates:', ['DNA replication', 'rapid depolarization forming an action potential upstroke', 'peptide bond formation', 'glomerular filtration'], 'B', ''),
          P('After depolarization, Na⁺ channel inactivation and K⁺ channel opening help:', ['transcribe RNA only', 'repolarize/refractory phases survey', 'fix nitrogen', 'photosynthesize in myelin'], 'B', ''),
          P('The action potential is all-or-none in a given axon region meaning:', ['amplitude is graded continuously with stimulus intensity at each point along axon once threshold met typical teaching simplification local circuit exceptions exist but core idea', 'once triggered, shape/propagation threshold behavior follows stereotyped channel events for that axon patch at that moment', 'it never refracts', 'it requires chemical synapse only'],
            'B', ''),
          P('Myelinated axons often conduct faster because:', ['saltatory conduction reduces membrane charging between nodes of Ranvier', 'myelin digests neurotransmitters', 'myelin stores insulin', 'action potentials become analog sine waves only'],
            'A', ''),
          P('The resting membrane is influenced substantially by:', ['K⁺ leak channels contribution among factors and Na⁺/K⁺-ATPase activity maintaining gradients', 'rubisco activity in dendrites', 'pepsin secretion', 'stomatal opening'],
            'A', ''),
          P('Local anesthetics often work partly by:', ['blocking voltage-gated Na⁺ channels reducing AP propagation', 'increasing thyroid output', 'stimulating insulin only', 'filtering urea in liver'],
            'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — Synaptic transmission',
        problems: [
          P('Presynaptic Ca²⁺ influx typically triggers:', ['photosystem II repair', 'vesicle fusion releasing neurotransmitter', 'DNA polymerase activation in axon', 'bone remodeling directly always'],
            'B', ''),
          P('Excitatory postsynaptic potentials (conceptually) move membrane toward:', ['more negative always', 'threshold for firing if summed sufficiently', 'absolute zero Kelvin', 'plant cell turgor'],
            'B', ''),
          P('Acetylcholinesterase in the synaptic cleft:', ['synthesizes acetylcholine in mitochondria', 'cleaves ACh to limit prolonged receptor activation among roles', 'packages dopamine', 'produces surfactant'],
            'B', ''),
          P('IPSPs tend to:', ['make postsynaptic neuron less likely to reach threshold', 'always trigger seizures', 'increase thyroid hormones always', 'digest proteins in synapse nonenzymatically'],
            'A', ''),
          P('SNARE proteins and synaptotagmin are involved in:', ['mitotic spindle attachment', 'regulated vesicle fusion machinery survey', 'chloroplast division only', 'xylem lignification'],
            'B', ''),
          P('Neurotransmitter reuptake transporters:', ['return some transmitters to presynaptic terminal for reuse among strategies', 'block all reflex arcs', 'eliminate blood–brain barrier', 'only occur in kidneys'],
            'A', ''),
          P('Clostridial toxins that cleave SNAREs impair:', ['hemoglobin binding to O₂', 'neurotransmitter release causing flaccid paralysis contexts in botulism teaching', 'photosynthesis in guard cells', 'renal tubular secretion of PAH only'],
            'B', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Reflex arcs',
        problems: [
          P('A monosynaptic stretch reflex arc includes sensory neuron contacting:', ['motor neuron directly in classic patellar reflex model', 'five interneurons minimum always', 'photoreceptor', 'podocyte'],
            'A', ''),
          P('Reflexes can be faster partly because:', ['they bypass consciousness and reduce synapse number in some circuits', 'they require hippocampal recall', 'they wait for digestive enzymes', 'they increase lung dead space'],
            'A', ''),
          P('Interneurons in polysynaptic reflexes can:', ['integrate excitation/inhibition before motor output', 'perform hemoglobin cooperative binding directly', 'transpile code to RNA in muscle', 'filter plasma proteins'],
            'A', ''),
          P('The efferent limb of a somatic reflex involves:', ['motor axons to skeletal muscle among standard diagrams', 'olfactory receptors only', 'glomerular filtration', 'insulin only endocrine pathway unrelated'],
            'A', ''),
          P('Withdrawal reflex from painful stimuli illustrates:', ['protective flexion patterns coordinated by spinal circuits with higher modulation', 'photosynthesis shut down', 'double fertilization', 'countercurrent multiplication in kidney'],
            'A', ''),
          P('Autonomic efferents differ from somatic motor in targeting:', ['skeletal muscle exclusively always', 'cardiac/smooth/glands among targets', 'only cerebral cortex neurons', 'only rods and cones'],
            'B', ''),
          P('Reflex testing clinically assesses:', ['integrity of specific sensory–motor pathways at introductory level', 'only kidney GFR', 'plant hormone gradients exclusively', 'bone density DEXA only'],
            'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — Endocrine system survey',
        problems: [
          P('The anterior pituitary secretes hormones like:', ['insulin from beta cells of pituitary false', 'growth hormone among examples', 'glucagon from alpha pituitary false', 'pepsinogen into gastric lumen from pituitary false'],
            'B', ''),
          P('Thyroid hormones (T3/T4) broadly:', ['decrease metabolic rate universally always false', 'support metabolic regulation in many tissues via nuclear receptors survey', 'digest cellulose in humans', 'produce pulmonary surfactant'],
            'B', ''),
          P('Cortisol from adrenal cortex is associated with:', ['stress responses and metabolic/immune modulation among textbook roles', 'PTH secretion only', 'prolactin inhibition of all bones only', 'rubisco activity'],
            'A', ''),
          P('Epinephrine from adrenal medulla can:', ['increase heart rate and redirect blood flow in sympathetic activation contexts', 'increase surfactant production always', 'catalyze carbonic anhydrase in RBC only', 'convert starch to cellulose'],
            'A', ''),
          P('Negative feedback on TRH–TSH axis when thyroid hormone is sufficient demonstrates:', ['runaway exponential hormone rise always', 'homeostatic damping of excessive stimulation', 'positive feedback only', 'feedback that requires sunlight'],
            'B', ''),
          P('Oxytocin roles include examples such as:', ['uterine contraction during labor and milk ejection reflex contexts among mammals', 'increasing ADH in collecting duct always confused different hormone', 'stimulating pepsin in stomach chief cells', 'photosynthetic electron transport'],
            'A', ''),
          P('Diabetes insipidus with deficient ADH differs from mellitus partly because:', ['primary problem is water balance / massive dilute urine, not glucose as defining centerpiece in mellitus teaching contrast', 'it always means hyperglycemia false', 'it is cured by pepsin', 'it is caused only by thyroid storm false'],
            'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Glucose homeostasis',
        problems: [
          P('Insulin lowers blood glucose by promoting:', ['hepatic glycogenolysis as main acute effect always false glucagon pathway contrast', 'cellular uptake and anabolic storage pathways survey', 'renal glucose secretion primarily', 'chloride shift reversal only'],
            'B', ''),
          P('Glucagon raises blood glucose partly via:', ['liver glycogen breakdown and gluconeogenesis promotion contexts', 'muscle glycogen breakdown as primary target always nuanced', 'increasing insulin secretion from delta cells always false', 'stomatal opening'],
            'A', ''),
          P('Type 1 diabetes involves:', ['autoimmune destruction of pancreatic beta cells in classic teaching', 'purely sedentary lifestyle as only mechanism always false', 'loss of surfactant', 'increased hemoglobin always'],
            'A', ''),
          P('Oral glucose tolerance tests conceptually measure:', ['how plasma glucose clears over standardized challenge', 'thyroid TSH only', 'lung DLCO', 'bone density'],
            'A', ''),
          P('Insulin receptor signaling cascade affects GLUT4 translocation especially in:', ['skeletal muscle and adipose contexts among insulin-sensitive tissues survey', 'pulmonary surfactant cells primarily', 'glomerular podocytes exclusively for glucose always false', 'chloroplast membranes'],
            'A', ''),
          P('Somatostatin from pancreatic delta cells can:', ['modulate secretion of other pancreatic hormones locally among roles survey', 'digest starch in duodenum directly', 'open voltage-gated Na⁺ at nodes of Ranvier specifically only', 'fix atmospheric nitrogen'],
            'A', ''),
          P('Postprandially, insulin typically rises as blood glucose rises because:', ['closed-loop endocrine coordination to promote uptake/storage tendency', 'pancreas senses light levels false', 'liver stops all gluconeogenesis always forever false fasting later resumes context', 'kidneys secrete insulin'],
            'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 6: Reproduction and development',
    chapterDescription: 'Human reproductive anatomy and cycle; plant sexual reproduction; early development; sexual health awareness.',
    topics: [
      { topicName: 'Human gamete formation and anatomy', topicDescription: 'Ovary and testis roles; meiosis products.', topicObjectives: ['Contrast spermatogenesis and oogenesis outcomes.', 'Name pathway of sperm vs egg for fertilization anatomy.'] },
      { topicName: 'Menstrual and ovarian cycle', topicDescription: 'Hormones, ovulation, endometrium changes.', topicObjectives: ['Identify LH surge role.', 'Relate progesterone to endometrial maintenance.'] },
      { topicName: 'Plant flowers and fertilization', topicDescription: 'Pollination, double fertilization overview.', topicObjectives: ['Label anther and stigma functions.', 'State products of double fertilization.'] },
      { topicName: 'Sexual health and STI prevention', topicDescription: 'Barrier methods, testing, responsible behavior survey.', topicObjectives: ['Explain why combination approaches reduce STI transmission.', 'Mention vaccine-preventable cases where relevant (HPV).'] },
      { topicName: 'Early embryonic development', topicDescription: 'Cleavage, implantation, placenta roles overview.', topicObjectives: ['Define zygote to blastocyst progression at survey level.', 'State placental exchange functions.'] },
    ],
    exercises: [
      ex(0, 'Meiosis', 'Human sperm are', ['haploid after meiosis', 'diploid like somatic skin cells always false', 'triploid', 'polyploid always false'], 0, 'Easy'),
      ex(1, 'LH', 'LH surge typically triggers', ['ovulation of a secondary oocyte in many cycles', 'immediate menopause', 'lactation without pregnancy', 'epiphyseal closure in adults on that day only'], 0, 'Easy'),
      ex(2, 'Pollen', 'In flowering plants, pollen is received on the', ['stigma', 'root cap', 'cuticle of bark', 'glomerulus'], 0, 'Easy'),
      ex(3, 'HPV vaccine', 'HPV vaccination programs aim to reduce cancers associated with', ['high-risk HPV types over time', 'every cancer type equally', 'bone fractures', 'high cholesterol alone'], 0, 'Medium'),
      ex(4, 'Implant', 'A blastocyst typically implants in the', ['endometrium', 'gallbladder mucosa', 'alveolar wall', 'epidermis'], 0, 'Easy'),
      ex(1, 'Prog', 'The corpus luteum chiefly secretes', ['progesterone to support the endometrium early in pregnancy contexts', 'insulin', 'trypsinogen', 'thyroxine'], 0, 'Medium'),
      ex(2, 'Double', 'Double fertilization in angiosperms produces', ['an embryo and endosperm in typical outcomes', 'two mature trees instantly', 'four sperm nuclei in the egg', 'diploid pollen only'], 0, 'Easy'),
      ex(3, 'Barrier', 'Correct condom use lowers risk of many', ['STIs transmitted by fluids compared with unprotected sex', 'genetic disorders in offspring automatically', 'plant fungal rust', 'atmospheric CO₂'], 0, 'Medium'),
      ex(4, 'Placenta', 'Across the placenta, fetal blood exchanges', ['gases and nutrients with maternal blood without direct mixing', 'identical merged blood in one pool always', 'chlorophyll into the fetus', 'pure ozone'], 0, 'Easy'),
      ex(0, 'Fert', 'Human fertilization normally occurs in the', ['fallopian tube', 'ovarian follicle before ovulation', 'uterine cavity before cleavage', 'renal pelvis'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 6 Quiz 1 — Human gamete formation and anatomy',
        problems: [
          P('Spermatogenesis in the seminiferous tubules yields:', ['diploid zygotes immediately', 'haploid sperm after meiotic divisions', 'triploid ova', 'spores for moss only'],
            'B', ''),
          P(
            'In humans, a primary oocyte arrested in prophase I typically resumes meiosis I in conjunction with:',
            [
              'completion of spermatogenesis in the epididymis',
              'the pre-ovulatory LH surge in many textbook cycles',
              'implantation of the blastocyst',
              'double fertilization in angiosperms',
            ],
            'B',
            ''
          ),
          P('The acrosome contains enzymes helping:', ['fertilization of the egg by penetrating zona pellucida contexts', 'stomach protein digestion primarily there wrong organ', 'DNA replication', 'xylem water lift'],
            'A', ''),
          P('Epididymis functions include:', ['storage and maturation of sperm along pathway survey', 'progesterone synthesis chief site false', 'filtration and erythropoietin primarily false', 'chlorophyll packaging'],
            'A', ''),
          P('The fallopian tube is part of the pathway for:', ['sperm toward fertilization site and movement of early embryo toward uterus survey', 'bile into duodenum', 'sound transduction', 'nephrons to ureter'],
            'A', ''),
          P('FSH in females acts on follicles to support:', ['oocyte development in growing follicles among roles survey', 'testosterone synthesis in luteal cells primarily false', 'uterine implantation immediately without ovulation false', 'root hair growth'],
            'A', ''),
          P('Men have XY sex chromosomes in typical karyotypes meaning:', ['all sperm carry Y always false', 'sperm carry either X or Y in typical meiotic segregation survey', 'eggs carry Y', 'mitochondria carry Y'],
            'B', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 6 Quiz 2 — Menstrual and ovarian cycle',
        problems: [
          P('The LH surge triggers:', ['corpus luteum formation without ovulation always false', 'ovulation of secondary oocyte in many cycles among textbook stories', 'milk let-down primarily oxytocin different', 'spermiogenesis final packaging always at that instant false'],
            'B', ''),
          P('Progesterone from corpus luteum supports:', ['endometrium maintenance conducive to implantation early contexts', 'ovarian follicle recruitment simultaneously paradox false', 'pepsin activation in stomach', 'anion gap in plasma solely'],
            'A', ''),
          P('FSH levels early follicular phase relate to:', ['stimulating follicular development among endocrine arcs survey', 'LH surge timing as identical spike simultaneous always false', 'closing stomata', 'osteoclast apoptosis exclusively'],
            'A', ''),
          P('If pregnancy does not occur, the corpus luteum regresses leading to:', ['menses shedding of functionalis as hormones fall among simplified models', 'immediate doubling of progesterone always false', 'ovulation again same day always false', 'blastocyst implantation in ureter false'],
            'A', ''),
          P('Estrogen from growing follicles can provide:', ['negative feedback on GnRH pulses at some concentrations among complex dynamics introductory', 'zero effect on endometrium always false', 'stomatal potassium flux control', 'conversion of hemoglobin to myoglobin in uterus false'],
            'A', ''),
          P('The endometrial cycle functionalis layer responds to:', ['steroid hormones from ovaries among major influences survey', 'direct solar irradiance only', 'pulmonary surfactant levels', 'uric acid crystals only'],
            'A', ''),
          P('Contraceptive pills with combined hormones can prevent ovulation partly by:', ['altering feedback loops on pituitary gonadotropins survey level', 'eliminating DNA in oocytes false', 'making fallopian tubes transparent false', 'increasing aldosterone only'],
            'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 6 Quiz 3 — Plant flowers and fertilization',
        problems: [
          P('Pollen is produced in the:', ['stigma', 'anther', 'ovary integuments', 'root cap'],
            'B', ''),
          P('The stigma’s role is to:', ['catch compatible pollen grains for germination contexts', 'synthesize bile', 'perform Krebs cycle exclusively', 'pump blood'],
            'A', ''),
          P('Double fertilization in angiosperms yields:', ['two embryos always', 'embryo and endosperm nutrition in typical textbook outcome', 'four polar nuclei without fusion always false', 'haploid endosperm'],
            'B', ''),
          P('A style often connects:', ['stigma to ovary bearing ovules survey', 'leaf to xylem only without phloem false', 'glomerulus to ureter false', 'bronchi to alveoli exclusively false'],
            'A', ''),
          P('Self-incompatibility systems can:', ['reduce seed set from self-pollen via molecular recognition pathways survey', 'require animal photosynthesis', 'double chromosome number in pollen always', 'prevent transpiration'],
            'A', ''),
          P('The integuments develop into the:', ['seed coat among textbook diagrams', 'fruit flesh always in all species false', 'style cuticle', 'stomatal pore'],
            'A', ''),
          P('Ovules after fertilization develop into:', ['pollen grains', 'seeds containing embryo and nutritive tissues depending on plant group', 'lichen thalli', 'rhizobia nodules'],
            'B', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 6 Quiz 4 — Sexual health and STI prevention',
        problems: [
          P('Barrier methods like condoms can reduce transmission of many:', ['fluid-associated STIs when used correctly compared with unprotected sex contexts', 'all diseases including genetic disorders automatically false', 'plant rust fungi', 'atmospheric CO₂'],
            'A', ''),
          P('Regular testing is important because:', ['many infections can be asymptomatic yet transmissible survey', 'tests always cure without treatment false', 'virus genomes cannot exist in humans false', 'stomata regulate STIs false'],
            'A', ''),
          P('HPV vaccination targets:', ['high-risk oncogenic HPV types to reduce certain cancers over time public health aim', 'every herpes strain always false', 'HIV directly always false different pathogen', 'malaria parasites exclusively'],
            'A', ''),
          P('Partner communication and consent are part of:', ['ethical sexual health education frameworks survey', 'glomerular filtration mechanics', 'xylem cohesion theory primarily', 'photosystem repair cycles'],
            'A', ''),
          P('Antibiotic misuse can worsen:', ['antibiotic-resistant bacterial STIs like drug-resistant gonorrhea emerging threats survey', 'rubisco carboxylation rate directly', 'plant nitrogen fixation efficiency only', 'chloride shift in alveoli unrelated'],
            'A', ''),
          P('Pre-exposure prophylaxis for HIV is:', ['a biomedical prevention strategy in appropriate clinical contexts not universal', 'a vaccine against all viruses always false', 'a cure for AIDS in all cases false', 'same as HPV vaccine false'],
            'A', ''),
          P('Vertical transmission can sometimes be reduced by:', ['testing/treatment around pregnancy in appropriate clinical pathways survey', 'ignoring maternal serology entirely always', 'sunlight exposure of fetus false', 'urea supplementation false'],
            'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 6 Quiz 5 — Early embryonic development',
        problems: [
          P('Cleavage divisions after fertilization produce:', ['adult-sized organs instantly', 'smaller cells without overall growth at first survey', 'chloroplasts in trophoblast', 'four mature gametes'],
            'B', ''),
          P('A blastocyst implants typically in the:', ['endometrium', 'renal cortex', 'nasal cavity', 'xylem vessel'],
            'A', ''),
          P('The placenta facilitates exchange of:', ['gases and nutrients between maternal and fetal circulations without normal direct blood mixing', 'chlorophyll to fetus always false', 'cellular fusion of maternal and fetal blood always always false immunology contexts aside', 'pure ozone'],
            'A', ''),
          P('The inner cell mass contributes to:', ['embryo proper among lineages survey', 'only yolk sac universally always nuanced', 'chorionic villi exclusively always false', 'amniotic fluid secretion exclusively all cells false'],
            'A', ''),
          P('Gastrulation forms:', ['germ layers ectoderm mesoderm endoderm survey', 'the zona pellucida', 'double fertilization second sperm', 'pollen tube in animals false'],
            'A', ''),
          P('Neurulation forms early:', ['neural tube from ectoderm survey introductory', 'kidney nephrons directly day 1 always false timeline', 'stomata on cotyledons mammal false', 'bone marrow only'],
            'A', ''),
          P('Teratogens illustrate that embryonic development is:', ['sensitive windows to environmental agents survey', 'immune to chemicals always false', 'independent of maternal nutrition always false', 'only DNA replication without morphology false'],
            'A', ''),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 7: Ecology, evolution, and conservation',
    chapterDescription: 'Populations, communities, biogeochemical cycles, biodiversity threats, natural selection overview.',
    topics: [
      { topicName: 'Population growth and regulation', topicDescription: 'Exponential vs logistic; carrying capacity.', topicObjectives: ['Interpret simple growth curves.', 'Define carrying capacity K.'] },
      { topicName: 'Community interactions', topicDescription: 'Predation, competition, symbioses.', topicObjectives: ['Give examples of mutualism and parasitism.', 'Explain keystone species concept at survey level.'] },
      { topicName: 'Biogeochemical cycles', topicDescription: 'Carbon and nitrogen links to living systems; eutrophication.', topicObjectives: ['Track carbon from photosynthesis to respiration.', 'Explain nutrient runoff effects on water bodies.'] },
      { topicName: 'Biodiversity threats', topicDescription: 'Habitat loss, invasive species, climate shifts.', topicObjectives: ['List major drivers of extinction risk.', 'Propose mitigation examples (parks, corridors).'] },
      { topicName: 'Natural selection and conservation action', topicDescription: 'Variation, heredity, differential success; protected areas.', topicObjectives: ['Restate Darwinian conditions in simple terms.', 'Link evidence-based management to sustained populations.'] },
    ],
    exercises: [
      ex(0, 'Log', 'Logistic growth levels off near', ['carrying capacity K', 'zero population always false unless extinction', 'infinite exponential without limit always unrealistic', 'only bacterial densities false'], 0, 'Easy'),
      ex(1, 'Key', 'A keystone species is one that', ['has an outsized effect on community structure relative to its biomass in classic examples', 'must always be the largest predator', 'must be a producer plant only', 'must be an abiotic factor'], 0, 'Medium'),
      ex(2, 'CO2', 'Burning fossil fuels increases atmospheric CO₂ largely because', ['geologic carbon is oxidized faster than slow burial removes it on human time scales', 'iron converts to nitrogen in engines', 'photosynthesis stops worldwide', 'Earth radius doubles'], 0, 'Easy'),
      ex(3, 'Invade', 'Invasive species may harm natives through', ['competition, predation, or novel disease transmission among pathways', 'guaranteed higher local biodiversity always', 'adding harmless decoration only', 'always producing excess oxygen that harms fish'], 0, 'Medium'),
      ex(4, 'Select', 'Natural selection in Darwin’s sense requires', ['heritable variation that affects survival or reproduction in an environment', 'goal-directed choice of traits by organisms', 'perfect offspring in one generation', 'absence of environmental change'], 0, 'Easy'),
      ex(1, 'Sym', 'Mutualistic interactions typically', ['yield net benefits to both partners in many textbook examples', 'always kill the smaller partner', 'involve no energy transfer', 'occur only between viruses'], 0, 'Easy'),
      ex(2, 'N', 'Nitrogen shortage in an ecosystem can limit', ['protein synthesis and thus primary production', 'all bacteria absolutely', 'global atmospheric oxygen removal', 'moonlight-driven photosynthesis'], 0, 'Medium'),
      ex(3, 'Frag', 'Habitat fragmentation tends to', ['create smaller patches and reduce dispersal between populations', 'always enlarge continuous forest', 'raise intrinsic growth rate uniformly', 'turn producers into carnivores'], 0, 'Easy'),
      ex(4, 'Park', 'Protected areas help biodiversity partly by', ['reducing some habitat destruction and overharvest in bounded zones', 'preventing every extinction automatically', 'duplicating identical climate everywhere', 'banning all science'], 0, 'Medium'),
      ex(0, 'Curve', 'The exponential phase of growth is prominent when', ['per-capita growth stays high and limiting factors are weak for a time', 'the population is right at carrying capacity', 'birth rate is zero', 'there are no deaths at all'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 7 Quiz 1 — Population growth and regulation',
        problems: [
          P('Exponential growth is plausible when:', ['per-capita growth rate is high and resources are abundant for a time', 'population equals carrying capacity always', 'birth rate is zero', 'death rate is infinite'], 'A', ''),
          P('Logistic growth introduces carrying capacity K as:', ['environmental maximum population size supported sustainably in simplified models', 'instant extinction number always', 'moon phase divisor', 'leaf area index only'],
            'B', ''),
          P('Density-dependent factors can include:', ['competition for food as population rises', 'speed of light in vacuum', 'absolute zero temperature only', 'constant 9.8 m s⁻² independent of population always false'],
            'A', ''),
          P('Life tables and cohort data help estimate:', ['survivorship and fecundity parameters survey', 'renal plasma flow only', 'mitotic phase under microscope always blood', 'stomatal index only'],
            'A', ''),
          P('r-selected vs K-selected are simplified contrasts about:', ['life history tradeoffs between growth rate and competitive ability contexts survey', 'plant cell wall pectin content exclusively', 'DNA base pairing rules only', 'kidney loop length only'],
            'A', ''),
          P('Human demography uses age pyramids to infer:', ['future growth momentum and dependency ratios survey level', 'glomerular filtration only', 'alveolar surface tension', 'rubisco kinetics'],
            'A', ''),
          P('Harvest models can crash populations if:', ['mortality from harvesting exceeds sustainable recruitment replacement simplified', 'photosynthesis stops in ocean', 'all animals become ectothermic', 'DNA disappears'],
            'A', ''),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 7 Quiz 2 — Community interactions',
        problems: [
          P('Predation can regulate prey populations when:', ['predators remove enough prey to affect population growth rates in simple models', 'prey evolve to become abiotic factors false', 'competition disappears always', 'NPP is zero globally'],
            'A', ''),
          P('Mutualism describes interactions where:', ['both partners often gain net benefits in textbook examples', 'one always dies immediately', 'energy is created from nothing', 'mitochondria become chloroplasts always'],
            'A', ''),
          P('Parasitism typically involves:', ['one organism benefiting at expense of host fitness generally', 'both partners always larger together', 'no resource transfer', 'photosynthetic animals always'],
            'A', ''),
          P('Keystone species are noted when:', ['their removal disproportionately alters community structure relative to simple biomass expectations in classic examples', 'they weigh the most always', 'they are producers only always', 'they never interact'],
            'A', ''),
          P('Competitive exclusion principle states roughly that:', ['two species with identical niches cannot coexist indefinitely in simple models', 'two species can never share a resource false', 'predation cannot exist', 'carrying capacity is infinite'],
            'A', ''),
          P('Trophic cascades can occur when:', ['changes at one trophic level alter lower levels indirectly e.g. predator removal increases herbivory impacts survey', 'energy pyramid inverts with more energy at top than bottom sustainable long term false physics', 'nitrogen becomes inert forever', 'cell walls vanish'],
            'A', ''),
          P('Facilitation in communities means:', ['one species can improve conditions for another e.g. nurse plants survey', 'all interactions are neutral always', 'parasites always help hosts', 'oxygen is irrelevant to life'],
            'A', ''),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 7 Quiz 3 — Biogeochemical cycles',
        problems: [
          P('Atmospheric nitrogen is largely inert N₂; fixation converts it to:', ['bicarbonate', 'ammonia / nitrate forms usable by life among pathway contexts', 'pure diamond', 'liquid helium'],
            'B', ''),
          P('Photosynthesis removes CO₂ and incorporates carbon into:', ['starch in diatoms only always false breadth', 'organic molecules in producers survey', 'helium nuclei', 'heavy metals only'],
            'B', ''),
          P('Respiration returns CO₂ by:', ['oxidizing organic carbon for energy among ecosystem connections survey', 'splitting pure N₂ inside mitochondria primarily false', 'forming enamel on teeth only', 'closing stomata only'],
            'B', ''),
          P('Phosphorus often cycles more ______ than carbon atmospherically:', ['slowly / with less extensive gaseous phase in many textbook diagrams', 'rapidly in gas phase always false comparative', 'only through ozone layer always false', 'exclusively in DNA never false'],
            'A', ''),
          P('Denitrification can return nitrogen to the atmosphere as:', ['O₂ and glucose', 'N₂ or N₂O among bacteria under low oxygen conditions survey', 'pure chlorine', 'sulfur hexafluoride only'],
            'B', ''),
          P('Eutrophication from fertilizer runoff can cause:', ['algal blooms and oxygen sag affecting aquatic communities survey', 'increased water clarity always false often opposite', 'elimination of all bacteria false', 'increase in primary production sometimes initially before negative impacts complex'],
            'A', ''),
          P('Decomposers are critical for returning:', ['nutrients from detritus to soil and nutrient cycles survey', 'solar photons to the sun', 'hemoglobin to chloroplasts', 'urea to seeds only'],
            'A', ''),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 7 Quiz 4 — Biodiversity threats',
        problems: [
          P('Habitat loss threatens species because:', ['reduces carrying capacity and fragments populations among mechanisms survey', 'increases K in logistic model always false', 'removes predation entirely always good for prey always false context dependent', 'creates infinite niche space'],
            'A', ''),
          P('Invasive species can disrupt natives via:', ['novel predation competition or disease introduction pathways survey', 'automatically increasing diversity always false often decreases', 'making biomes colder globally always false', 'preventing plate tectonics false'],
            'A', ''),
          P('Climate shifts can move biomes by:', ['altering temperature and precipitation patterns beyond species tolerance or dispersal limits survey', 'holding temperature exactly constant forever', 'eliminating greenhouse gases completely', 'turning sea water into distilled water only'],
            'A', ''),
          P('Overharvesting fish can lead to:', ['population crashes and trophic cascades in fisheries contexts', 'infinite recruitment always false', 'spontaneous speciation in one generation always false normally long timescales', 'complete nitrogen fixation in oceans always false'],
            'A', ''),
          P('Corridors between reserves can help by:', ['increasing dispersal and gene flow reducing isolation risks survey', 'eliminating all edges false edges can increase some threats paradoxically careful but corridor intent is connectivity', 'doubling road collisions always false design matters', 'stopping seasons'],
            'A', ''),
          P('Pollution including microparticles can harm wildlife by:', ['physical blockage toxicants or endocrine disruption pathways context-dependent survey', 'providing free vitamins always false', 'making organisms immortal false', 'eliminating DNA replication'],
            'A', ''),
          P('Zoonotic disease emergence links to:', ['human encroachment on wildlife and trade contexts among risk factors survey', 'complete absence of viruses in nature false', 'too much biodiversity always causing zero disease false nuanced', 'moonlight cycles only'],
            'A', ''),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 7 Quiz 5 — Natural selection and conservation action',
        problems: [
          P('Natural selection requires variation that is:', ['heritable and affects survival or reproduction differentially in an environment', 'purely random with zero fitness effects always false selection definition fails', 'stored only in ribosomes false', 'created fully anew each generation without DNA false'],
            'A', ''),
          P('Adaptation arises over generations as:', ['favored variants leave more descendants shifting allele frequencies simplistic model', 'individual giraffes stretch necks to offspring Larmarck meme as mechanism always rejected modern synthesis for acquired traits story', 'environment chooses goals teleologically false', 'mitosis in gametes primarily false'],
            'A', ''),
          P('Genetic drift has stronger effects when:', ['population size is small because sampling error in alleles increases', 'population is infinite', 'migration is infinite', 'mutation is zero always'],
            'A', ''),
          P('Protecting apex predators can indirectly protect ecosystems via:', ['trophic cascades influencing herbivore and plant communities examples survey', 'eliminating all prey always sustainable false', 'photosynthesis in carnivores false', 'closing stomata globally'],
            'A', ''),
          P('Evidence-based reserve design may consider:', ['species ranges edge effects and connectivity among principles survey', 'random dart throws on a map only satire', 'maximizing roads through core habitats usually opposite goal', 'ignoring reproduction schedules'],
            'A', ''),
          P('Captive breeding can aid recovery but also risks:', ['low genetic diversity and inbreeding if not managed carefully survey', 'instant perfect adaptation always', 'removal of all diseases automatically false quarantine matters', 'making species immortal'],
            'A', ''),
          P('Community-based conservation may succeed when:', ['local stakeholders’ incentives align with sustainable use survey narratives context-dependent', 'outsiders forbid all knowledge always toxic colonial failures counterexamples caution', 'protected areas have zero staffing always', 'ecotourism never funds anything false sometimes it can'],
            'A', ''),
        ],
      },
    ],
  },
];
