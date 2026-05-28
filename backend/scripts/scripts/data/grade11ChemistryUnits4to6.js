/**
 * Grade 11 Chemistry curriculum — Units 4–6 (Ethiopia MoE outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 4: Chemical kinetics',
    chapterDescription:
      'Reaction rate measurements and influencing factors; collision theory and activation energy survey; empirical rate laws and reaction order; mechanisms and intermediates overview; homogeneous and heterogeneous catalysis.',
    topics: [
      {
        topicName: 'Reaction rate and factors influencing it',
        topicDescription:
          'Average versus instantaneous rates; concentrations and time slopes; stoichiometric rate links for simple schemes; concentration, temperature, pressure, catalyst, surface-area effects.',
        topicObjectives: [
          'Compute average rates consistently with units and stoichiometric language.',
          'Interpret how doubling concentration often increases collision likelihood introductory.',
          'Relate steeper disappearance curves to faster loss of reactants qualitative.',
        ],
      },
      {
        topicName: 'Collision theory',
        topicDescription:
          'Particles must collide; sufficient kinetic energy exceeding activation hurdle; favoured orientation qualitative; hotter samples increase fraction of fruitful collisions caricature Maxwell-Boltzmann tail.',
        topicObjectives: [
          'State why ineffective collisions dominate at low-energy encounters introductory.',
          'Describe activation-energy barrier wording from textbooks qualitatively.',
          'Contrast concentration effects versus temperature effects pathway introductory.',
        ],
      },
      {
        topicName: 'Rate laws survey',
        topicDescription:
          'Experimental orders zeroth-first-second caricatures; overall order wording; distinguishes rate-law exponents from balanced-equation stoichiometric integers.',
        topicObjectives: [
          'Draft proportionality wording rate proportional to concentrations raised empirical orders introductory.',
          'Sum partial reaction orders simplistic classroom overall-order notation.',
          'Recognize empirical rate laws require data not only balanced stoichiometric coefficients.',
        ],
      },
      {
        topicName: 'Reaction mechanisms survey',
        topicDescription:
          'Sequences of elementary steps that sum to observe net stoichiometric summary; intermediates; catalyst regenerated cycles introductory; bottleneck slow-step caricature heuristic.',
        topicObjectives: [
          'Add elementary stoichiometries to verify net-balanced equation bookkeeping introductory.',
          'Identify intermediates that never appear standalone net-balanced summary introductory.',
          'Relate bottleneck elementary step caricature verbally to sluggish rate-determining heuristic.',
        ],
      },
      {
        topicName: 'Catalysis',
        topicDescription:
          'Lowering activation-energy alternative pathway introductory promoters poisons heterogeneous surface sites enzyme parallels caveat equilibrium quotient unchanged simplistic constant temperature.',
        topicObjectives: [
          'Classify heterogeneous versus homogeneous catalyst illustrative industrial examples Ethiopian survey.',
          'Explain faster approach to equilibrium while K unchanged caveat introductory simplistic.',
          'Relate polluted catalyst poisoning to deactivated surface sites heuristic.',
        ],
      },
    ],
    exercises: [
      ex(
        0,
        'Instantaneous',
        'Reactant concentration–time graph instantaneous rate aligns with tangent:',
        ['Area under curve misconception', 'Negative slope magnitude introductory convention wording', 'Zero always misconception', 'Catalyst oxidation number'],
        1,
        'Easy'
      ),
      ex(
        0,
        'Powder',
        'Powder vs lump limestone with acid often differs mainly owing to:',
        ['Lower temperature spontaneously false converse', 'Larger exposed reacting surface introductory', 'Opposite stoichiometric ratio false converse', 'Nuclear reactors'],
        1,
        'Easy'
      ),
      ex(
        1,
        'Ea',
        'Activation energy caricature hurdle mainly concerns:',
        ['Reorganisation during productive collisions introductory language', 'Nuclear-binding tables false misplaced', 'Vapour-pressure curves false misplaced solely', 'SDS viscosity'],
        0,
        'Easy'
      ),
      ex(
        1,
        'Heating',
        'Raising temperature often boosts rate partly because:',
        ['Only fewer collisions converse false clumsy careless', 'Larger energetic-collision fraction introductory qualitative caricature heuristic', 'Nuclear neutron flux false absurd', 'Photon mass increases false absurd'],
        1,
        'Medium'
      ),
      ex(
        2,
        'Order sum',
        'If rate equals k multiplied by one factor A times factor B squared overall order caricature:',
        ['1 introductory partial mis-sum', '2 introductory partial mis-sum', '3 introductory naive sum heuristic', '0 always misconception'],
        2,
        'Easy'
      ),
      ex(
        2,
        'Stoichiometry',
        'Rate-law exponents are generally _____ balanced-equation integers introductory distinction:',
        ['Identical blindly misconception survey correction', 'Determined experimentally independent introductory wording', 'Zero always converse false clumsy careless', 'Nuclear neutron counts false absurd'],
        1,
        'Medium'
      ),
      ex(
        3,
        'Intermediate',
        'Species produced then consumed within mechanism seldom listed net-balanced summary called:',
        ['Catalyst always misconception sloppy', 'Intermediate introductory wording', 'Stoichiometric solid product misconception sloppy', 'Nuclear projectile ludicrous'],
        1,
        'Easy'
      ),
      ex(
        4,
        'Catalyst K',
        'Catalyst lowers activation yet same-isolated reversible T oft yields same _____ introductory caveat:',
        ['Equilibrium constant K caveat introductory qualitative simplistic', 'Nuclear lattice parameter false misplaced', 'Vapour-pressure zero false converse', 'Nernst voltage blindly false'],
        0,
        'Medium'
      ),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — Reaction rate factors',
        problems: [
          P('Δconcentration divided by Δtime defines _____ rate introductory heuristic:', ['Nuclear instantaneous false misplaced', 'Average introductory heuristic vocabulary', 'Equilibrium instantaneous false careless', 'SDS viscosity'], 'B'),
          P('Shrinking flask volume at fixed moles boosts gas concentrations thus often _____ rate introductory qualitative:', ['slows converse crude mistaken', 'speeds introductory qualitative collision-frequency wording', 'erases spontaneously false careless', 'inverts equilibrium constant arbitrarily false misconception'], 'B'),
          P('Powder exposes _____ reactive-area introductory dissolution gas-solid reactions heuristic:', ['reduced converse false clumsy careless', 'larger introductory heuristic', 'unchanged blindly false caricature converse', 'infinite unrealistic false caricature converse'], 'B'),
          P('Stirring heterogeneous flasks _____ transport rates introductory dissolution gas-exchange qualitative:', ['suppresses converse false clumsy careless', 'improves introductory qualitative caveat surface reactions later', 'erases convection entirely false caricature converse', 'replaces kinetic theory false careless'], 'B'),
          P('Increasing pressure on gas-phase mixtures often _____ concentration proportional introductory caveat ideal gas caricature heuristic:', ['decreases converse false clumsy careless', 'raises introductory qualitative caveat fixed temperature simplistic', 'erases kinetic energy misconception', 'violates mole concept misconception'], 'B'),
          P('Graphical instantaneous reactant disappearance uses tangent _____ introductory vocabulary:', ['area misconception', 'slope qualitative introductory differential idea optional softened', 'colour hue misconception silly', 'molar mass misconception'], 'B'),
          P('Gas-collection timing proxies reaction _____ introductory practical lab survey heuristic:', ['Nuclear-spin relaxation false misplaced', 'Progress kinetic rate introductory qualitative caveat stoichiometric gas linkage', 'Lattice parameter X-ray false misplaced casual', 'Equilibrium entropy only false misplaced'], 'B'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Collision theory',
        problems: [
          P('Collision theory hinges on _____ occurring introductory heuristic:', ['Nuclear partitioning false careless', 'Collisions qualitative introductory kinetic vocabulary', 'Gravitational lensing astronomical false absurd careless', 'Saponification blindly false misplaced'], 'B'),
          P('Many collisions rebound without reaction lacking adequate _____ introductory language:', ['Photon colour misconception', 'Activation energy caricature heuristic', 'Atomic number misconception careless', 'Molar conductivity misconception misplaced'], 'B'),
          P('Steric orientation matters especially _____ larger molecules introductory caricature heuristic:', ['less converse false clumsy careless', 'more introductory qualitative multi-atom encounters survey', 'not at all converse sloppy misconception', 'only for noble gases false absurd careless'], 'B'),
          P('Hotter mixtures shift Maxwell-Boltzmann sketch _____ higher kinetic energies heuristic introductory qualitative caricature heuristic:', ['removing converse false clumsy careless', 'spreading tails toward introductory qualitative caricature heuristic', 'freezing spontaneously false clumsy careless', 'collapsing single velocity false clumsy careless'], 'B'),
          P('Increasing concentration raises collision _____ per volume introductory qualitative heuristic:', ['decreases converse false clumsy careless', 'frequency introductory qualitative caveat orders later', 'nuclear-cross-section units false careless', 'enthalpy sign flip misconception'], 'B'),
          P('Catalyst parallels lower barrier analogous orientation-energy hurdles _____ introductory bridging vocabulary:', ['raising converse false clumsy careless', 'easing fruitful encounters introductory caricature bridging catalyst tie-in caveat future detail', 'erasing equilibrium constant misconception', 'preventing collisions misconception'], 'B'),
          P('Solid-state intact crystal versus dissolved ions caricature _____ ready-to-collide aqueous ions introductory caveat conceptual caricature heuristic:', ['slows spontaneously false clumsy careless', 'sometimes speeds introductory qualitative caveat surface-vs-solution reactors advanced skip softened', 'erases conductivity misconception messy', 'nuclear reactors'], 'B'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Rate laws survey',
        problems: [
          P('Exponent orders gleaned _____ experiments introductory qualitative mantra:', ['only nuclear tables false careless', 'usually empirically determined introductory caveat stoichiometric mismatch', 'purely morally false joke careless', 'from periodic table periods false careless'], 'B'),
          P('Zeroth-order caricature plateau rate _____ concentration introductory caveat surface-limited refinements later softened:', ['unrelated loosely introductory simplified lesson caveat', 'strictly quadratic converse false clumsy careless', 'inverse cubic converse absurd clumsy careless', 'equals nuclear half-life misconception'], 'A'),
          P('First-order doubling sole reactant caricature _____ rate introductory heuristic:', ['doubles simplistic proportionality caveat integrated plots later lesson-dependent', 'quarters converse false clumsy careless', 'erases spontaneously false clumsy careless', 'depends on lattice constant misconception'], 'A'),
          P('Integrated linear ln[A] versus t plot suggests _____ order caricature survey optional textbook favourite:', ['first introductory survey optional caveat lesson pacing', 'zero converse false clumsy careless', 'infinite absurd careless', 'solid-state band-gap false misplaced'], 'A'),
          P('Trial-and-error isolation method varies _____ systematically introductory MoE wording survey heuristic:', ['Nuclear-spin states false careless', 'Concentrations to deduce empirical orders introductory survey heuristic', 'Gravitational fields false absurd careless', 'SDS typography false careless joke'], 'B'),
          P('Mechanism-informed rate law _____ match overall stoichiometry coefficients automatically introductory caveat:', ['Need not introductory qualitative caution students', 'Must always converse sloppy misconception debunk survey', 'Forbids data converse false clumsy careless', 'Equals photon energy converse false clumsy careless'], 'A'),
          P('Rate constant magnitude depends prominently on _____ introductory exponential Arrhenius bridge optional survey wording:', ['Nuclear neutron excess false careless', 'Temperature introductory qualitative caveat Arrhenius optional later pacing', 'Container colour misconception silly careless', 'Textbook thickness misconception silly careless'], 'B'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — Mechanisms survey',
        problems: [
          P('Elementary steps _____ sum to observable net-balanced equation bookkeeping introductory heuristic:', ['Need not converse false clumsy careless', 'Should introductory qualitative bookkeeping survey', 'Delete atoms misconception', 'Erase catalyst misconception sloppy'], 'B'),
          P('Intermediate appears within mechanism _____ net-balanced summary introductory distinction:', ['always listed converse sloppy misconception corrected', 'not always introductory qualitative caveat wording survey', 'only nuclear debris false absurd careless', 'never exists converse false clumsy careless'], 'B'),
          P('Catalyst _____ net consumption introductory qualitative recycled cycles heuristic:', ['suffers obligatory converse false clumsy careless', 'often avoids introductory qualitative caveat complex redox nuances later pacing', 'increases moles arbitrarily misconception', 'replaces solvents entirely misconception sloppy'], 'B'),
          P('Sequential elementary steps caricature bottleneck _____ dominates observed rate-law introductory caveat heuristic:', ['fastest converse false clumsy careless', 'slowest introductory caricature bottleneck wording survey', 'largest photocurrent false careless derail contextual', 'highest conductivity false careless derail contextual'], 'B'),
          P('Mechanistic arrows distinguish elementary _____ balanced overall arrows introductory caricature heuristic:', ['unrelated converse false clumsy careless', 'from introductory qualitative caveat mechanism literacy survey', 'nuclear explosions false absurd careless joke reject', 'gravitational waves false absurd careless'], 'B'),
          P('Proposed mechanism must _____ mass and charge elemental bookkeeping introductory survey heuristic:', ['violate converse false clumsy careless', 'preserve introductory qualitative atom inventory survey', 'ignore stoichiometric coefficients misconception sloppy', 'neglect intermediates misconception sloppy dangerous'], 'B'),
          P('Spectroscopic detection of _____ supports mechanistic hypotheses introductory survey caveat advanced instrumentation pacing MoE softened:', ['Nuclear fallout false absurd careless', 'Short-lived species introductory heuristic intermediates caveat advanced labs optional later MoE pacing softened', 'Textbook pagination false joke careless', 'Periodic table zigzag false careless'], 'B'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Catalysis',
        problems: [
          P('Industrial Haber ammonia iron catalyst is primarily _____ heterogeneous introductory heuristic:', ['solution-phase homogeneous converse misconception sloppy', 'surface-mediated heterogeneous introductory heuristic survey', 'enzyme cytoplasm converse false clumsy careless', 'noble plasma torch converse false clumsy careless'], 'B'),
          P('Poisoned catalyst _____ active sites introductory vocabulary survey heuristic:', ['activates spontaneously converse false clumsy careless', 'often blocks introductory qualitative poisoning survey MoE Ethiopian industrial awareness optional', 'increases K arbitrarily misconception sloppy', 'replaces promoters entirely converse false clumsy careless'], 'B'),
          P('Bioenzymes catalyze metabolic pathways _____ mild conditions introductory parallelism survey heuristic:', ['requiring unrealistic plasma converse misconception sloppy', 'often under aqueous nearer-body-temperature caricature parallelism survey heuristic softened caveat industrial variance', 'erasing Gibbs energy misconception sloppy', 'ignoring substrates misconception sloppy dangerous'], 'B'),
          P('Zeolite catalyst geometries _____ specificity introductory shape-selective heuristic survey optional Ethiopian petrochemical bridging softened:', ['negate arbitrarily converse false clumsy careless', 'often enforce introductory qualitative shape-selectivity survey caveat advanced optional pacing', 'only nuclear magnetic false careless derail contextual', 'only literary narratives false careless joke reject'], 'B'),
          P('Alternative catalytic _____ lowers barrier introductory caricature heuristic:', ['raised pathway converse clumsy careless debunk caricature converse', 'pathway lowers activation introductory caricature heuristic wording caveat MoE Ethiopian curriculum alignment survey', 'increases photon mass misconception sloppy ridiculous', 'erases solvents misconception sloppy nonsense'], 'B'),
          P('Autocatalytic cases product accelerates _____ own formation introductory caveat niche survey MoE pacing optional softened:', ['inhibiting converse false clumsy careless', 'further introductory qualitative autocatalytic survey pacing optional caveat rare examples softened', 'nuclear partitioning misconception sloppy', 'entropy erasure misconception sloppy'], 'B'),
          P('Catalyst recovery economics encourages _____ heterogeneous beds introductory Ethiopian industrial bridging survey heuristic softened:', ['throwaway converse false clumsy careless', 'reuse introductory qualitative heterogeneous packed-bed caricature Ethiopian industrial bridging survey heuristic softened caveat detail later pacing', 'infinite neutron flux misconception sloppy nonsense', 'ignoring promoters misconception sloppy nonsense'], 'B'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 5: Chemical equilibrium and phase equilibrium',
    chapterDescription:
      'Dynamic chemical equilibrium Q vs K; Le Chatelier and K qualitative changes; sparingly soluble salts Ksp; phase coexistence vapour-pressure and simple phase-diagram sketches (survey).',
    topics: [
      {
        topicName: 'Chemical equilibrium concept',
        topicDescription:
          'Reversible reactions; forward equals reverse rates at equilibrium; microscopic dynamic vs steady macroscopic properties; closed-system idea (survey).',
        topicObjectives: [
          'Define equilibrium steady composition when rates balance forward backward.',
          'Interpret Q versus K directional prediction simplistic closed ideal-gas caricature lesson.',
          'Note pure solids liquids often omitted simplified K surveys activity ~1 caricature.',
        ],
      },
      {
        topicName: 'Equilibrium constants and Le Chatelier’s principle',
        topicDescription:
          'Manipulating equilibrium by concentration pressure volume disturbance; temperature altering K caveat endothermic exothermic direction; catalyst speeds approach only.',
        topicObjectives: [
          'Qualitatively decide shift after stress introductory Le Chatelier language.',
          'Argue catalyst fastens path without relocating final equilibrium constant simplistic same T caveat.',
          'Relate ΔT stress with endothermic forward versus exothermic forward survey wording.',
        ],
      },
      {
        topicName: 'Solubility equilibrium survey',
        topicDescription:
          'Ion-product expressions Ksp; saturated unsaturated supersaturated; common-ion effect qualitative selective precipitation caricature bridging.',
        topicObjectives: [
          'Compare Qsp Ksp supersaturation precipitation caricature heuristic.',
          'Outline common-ion reducing solubility introductory qualitative heuristic.',
          'Recognize sparingly soluble examples classroom survey MoE-aligned.',
        ],
      },
      {
        topicName: 'Phase equilibrium',
        topicDescription:
          'Coexistence vapour liquid solid physical equilibrium vapour-pressure equality caricature plateau latent heat bridging.',
        topicObjectives: [
          'Describe liquid-vapour dynamic exchange caricature coexistence heuristic.',
          'Relate vapour-pressure equality sealed container caricature heuristic.',
          'Contrast physical phase equilibrium caricature reversible chemical equilibrium survey.',
        ],
      },
      {
        topicName: 'Vapor pressure and phase diagrams',
        topicDescription:
          'Volatile versus less volatile liquids microscopic escape caricature hotter higher vapour pressure qualitative P–T sketches triple point critical caveat survey.',
        topicObjectives: [
          'Read single-component axes pressure temperature regions introductory sketch.',
          'Locate triple point intersection introductory caricature heuristic.',
          'Relate Ethiopian highland lowered boiling-pressure anecdote bridging optional survey softened.',
        ],
      },
    ],
    exercises: [
      ex(
        0,
        'Steady',
        'Macroscopic equilibrium property includes:',
        ['Net visible drift always misconception', 'Steady composition forward reverse microscopic dynamic introductory', 'Reaction stops absolutely misconception sloppy', 'Nuclear neutron flux ludicrous'],
        1,
        'Easy'
      ),
      ex(
        1,
        'Product pull',
        'Adding extra product boosts Q reversible net shift often:',
        ['forward making more products misconception clumsy careless', 'partially consumes product reverse introductory caricature qualitative', 'erases Gibbs misconception clumsy careless', 'doubling nuclear mass misconception clumsy careless'],
        1,
        'Medium'
      ),
      ex(
        1,
        'Heat stress',
        'Heating reversible endothermic forward reaction caricature favoured:',
        ['reverse always misconception clumsy careless', 'forward absorbs heat introductory caricature caveat sign awareness survey', 'catalyst misconception clumsy careless', 'triple point misconception clumsy careless derail contextual'],
        1,
        'Medium'
      ),
      ex(
        2,
        'Ksp exceed',
        'Ion-product sparingly soluble salt exceeds solubility product expectation:',
        ['always dissolves more misconception clumsy careless', 'often precipitation introductory qualitative caricature heuristic', 'implies zero ions misconception clumsy careless', 'deletes equilibrium misconception clumsy careless'],
        1,
        'Medium'
      ),
      ex(
        2,
        'Chloride',
        'Adding NaCl aqueous stresses saturated silver chloride caricature equilibrium:',
        ['always dissolves more AgCl misconception clumsy careless', 'suppressed dissolution introductory common-ion caricature heuristic', 'infinite solubility misconception clumsy careless', 'triple point misconception clumsy careless derail contextual'],
        1,
        'Medium'
      ),
      ex(
        3,
        'Open boil',
        'Liquid boils open pan when vapour _____ matches surrounding pressure introductory:',
        ['volume only misconception clumsy careless', 'pressure introductory qualitative caveat idealizations survey', 'nuclear neutron flux ludicrous', 'conductivity misconception clumsy careless derail contextual'],
        1,
        'Medium'
      ),
      ex(
        4,
        'Escape',
        'More volatile solvent exhibits roughly:',
        ['lower vapour pressure misconception clumsy careless converse', 'higher vapour pressure introductory qualitative caricature heuristic', 'no molecules escape misconception clumsy careless', 'only nuclear decay misconception clumsy careless derail contextual joke reject'],
        1,
        'Easy'
      ),
      ex(
        4,
        'Triple pt',
        'Triple-point coexistence for one component means:',
        ['Two phases misconception', 'Solid liquid vapour coexist introductory caricature heuristic', 'Plasma lattice misconception clumsy careless', 'No atoms misconception clumsy careless'],
        1,
        'Easy'
      ),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Equilibrium concepts',
        problems: [
          P('Macroscopic _____ when forward and reverse rates match:', ['Entropy collapse misconception', 'Steadiness composition caricature caveat molecular motion persists survey', 'Nuclear fallout misconception clumsy careless', 'Photon spin misconception clumsy careless derail contextual'], 'B'),
          P('At equilibrium rate_forward equals _____ rate_reverse:', ['Zero absolute misconception clumsy careless', 'Equals introductory dynamic equilibrium wording caveat micro motion continues heuristic', 'Beats spontaneously misconception clumsy careless', 'Random unrelated misconception clumsy careless derail contextual'], 'B'),
          P('Compared with K quotient Q dictates _____ shift:', ['Lattice parameter misconception clumsy careless', 'Net direction simplifying closed ideal caricature caveat advanced nuance pacing optional', 'Nuclear neutron excess misconception clumsy careless absurd careless', 'Textbook cartoons misconception clumsy careless derail contextual'], 'B'),
          P('Pure solid activity simplifying often _____ explicit concentration denominator:', ['Adds triple concentration misconception clumsy careless', 'Omit introductory qualitative activity unity caricature caveats pacing optional softened', 'Nuclear reactors misconception clumsy careless derail contextual joke reject', 'SDS viscosity misconception clumsy careless derail contextual'], 'B'),
          P('Closed homogeneous reversible stoichiometric totals obey elemental _____:', ['abolishes spontaneously misconception clumsy careless', 'Conservation bookkeeping introductory qualitative caveat closed container survey', 'invents mercury misconception clumsy careless', 'doubling nuclear mass misconception clumsy careless absurd careless joke reject irresponsible'], 'B'),
          P('Liquid–vapour physical equilibrium caricature _____ evaporation condensation dynamic:', ['Matched introductory qualitative caricature microscopic exchange metaphor survey', 'Only nuclear fission misconception clumsy careless absurd careless', 'Gravitational lensing astronomical misconception clumsy careless absurd careless', 'No exchange misconception clumsy careless derail contextual'], 'A'),
          P('Industrial reactor designs approach equilibrium _____ differently caveat engineering survey:', ['Impossible spontaneously misconception clumsy careless', 'Residence/pathway caricature introductory qualitative caveat flow vs batch survey softened', 'Deletes periodic table misconception clumsy careless nonsense', 'Forbids MoE misconception clumsy careless derail contextual'], 'B'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — K and Le Chatelier',
        problems: [
          P('Shrinking gas volume boosts partial pressures thereby raising _____:', ['enthalpy only misconception', 'Q reaction quotient introductory shift toward fewer gas moles caricature heuristic', 'K always zero misconception clumsy careless', 'nuclear mass misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
          P('Additional gaseous reactant disturbance net shift often _____:', ['consumes reactant misconception clumsy careless', 'forward consuming added reactant introductory Le Chatelier vocabulary', 'erases Gibbs misconception clumsy careless', 'triple point misconception clumsy careless derail contextual'], 'B'),
          P('Stress favouring ______ product for exothermic forward when heated:', ['product forward misconception clumsy careless', 'reactants backward absorbs heat caricature caveat sign-awareness survey', 'catalyst misconception clumsy careless', 'infinity misconception clumsy careless derail contextual'], 'B'),
          P('Catalyst role limited to:', ['moving equilibrium misconception clumsy careless', 'speed attainment leaving K untouched introductory caveat same closed T simplistic', 'raising ΔH misconception clumsy careless', 'adding matter misconception clumsy careless derail contextual'], 'B'),
          P('Removing product continuously _____ forward shift industrial wording:', ['suppresses spontaneously misconception clumsy careless', 'can pull forward introductory caricature continuous removal survey', 'erases Gibbs misconception clumsy careless', 'nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
          P('Temperature change mainly _____ value of K introductory:', ['ignores spontaneously misconception clumsy careless', 'alters equilibrium constant introductory caricature caveat van’t Hoff optional pacing', 'only colour misconception clumsy careless silly careless', 'stirring artefacts misconception clumsy careless derail contextual'], 'B'),
          P('Inert gas puff at fixed V ideal gas caricature _____ total pressure only partial unchanged simplified exam nuance caveat:', ['alters spontaneously misconception clumsy careless absolutist careless', 'no shift partial pressures unchanged caricature caveat fixed V ideal gas nuance Ethiopian MoE typical simplified heuristic survey', 'nuclear neutron excess misconception clumsy careless derail contextual', 'triple point misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Solubility equilibrium',
        problems: [
          P('Saturated sparingly soluble solution holds ion _____ Ksp equilibrium:', ['Product below always misconception clumsy careless', 'Ion-product equals K introductory caricature sparse salt survey', 'No ions misconception clumsy careless', 'triple point misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
          P('Adding shared ion tends _____ dissolution introductory:', ['accelerate spontaneously misconception clumsy careless converse', 'depress introductory common-ion caricature qualitative survey', 'erases Gibbs misconception clumsy careless', 'nuclear moderator misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
          P('Ion-product _____ K precipitate expectation introductory:', ['below spontaneously misconception clumsy careless', 'surpass introductory precipitation caricature qualitative kinetic nucleation caveat optional pacing', 'zero always misconception clumsy careless', 'stirring artefacts misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
          P('Different Ksp _____ selective precipitation bridging survey:', ['Nuclear fallout misconception clumsy careless derail contextual exaggerated joke reject irresponsible', 'Contrasting values introductory caricature selective precipitation heuristic survey Ethiopian lake resources optional bridging anecdote soften pacing', 'Textbook cartoons misconception clumsy careless derail contextual', 'triple point misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
          P('Supersaturated solution caricature _____ lab hazard;', ['Absolutely stable misconception clumsy careless', 'Metastable may crash introductory nucleation caricature caveat lab hazard survey', 'Impossible misconception clumsy careless nonsense', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible'], 'B'),
          P('Ligands forming complexes _____ solubility advanced optional caveat:', ['Always delete misconception clumsy careless', 'sometimes raise introductory caricature complex-ion caveat industrial hydrometallurgy bridging optional Ethiopian MoE advanced pacing softened skip caveat exam careful nuanced', 'nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic'], 'B'),
          P('Qsp _____ Ksp dissolution direction introductory:', ['Unrelated misconception clumsy careless', 'Compared introductory directional precipitation versus dissolve caricature survey', 'Nuclear neutron excess misconception clumsy careless derail contextual', 'triple point misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — Phase equilibrium',
        problems: [
          P('Liquid–vapour physical equilibrium caricature _____ evaporation condensation:', ['No exchange misconception clumsy careless', 'Matched rates introductory caricature coexistence microscopic dynamic metaphor survey', 'Nuclear reactors misconception clumsy careless derail contextual joke reject irresponsible', 'gravitational lensing astronomical misconception clumsy careless absurd careless joke reject irresponsible'], 'B'),
          P('Sealed container partial vapor partial liquid settles vapour _____:', ['Zero misconception clumsy careless', 'Pressure equilibrium introductory caricature qualitative survey caveat nonidealities pacing optional softened', 'Infinite density misconception clumsy careless nonsense', 'triple point misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
          P('Higher temperature _____ vapour pressure introductory qualitative caricature microscopic escape heuristic:', ['lowers spontaneously misconception clumsy careless converse', 'often raises introductory qualitative Clausius-Clapeyron bridging optional Ethiopian highland anecdotes optional bridging softened pacing', 'erases density misconception clumsy careless derail contextual', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible'], 'B'),
          P('Boiling latent heat caricature _____ temperature plateau introductory:', ['spikes spontaneously misconception clumsy careless converse clumsy careless', 'temporarily steadier introductory caricature latent heat plateau survey softened caveat nonidealities optional pacing', 'collapse misconception clumsy careless derail contextual', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic'], 'B'),
          P('Dissolved salt _____ freezing introductory colligative caricature caveat:', ['raises spontaneously misconception clumsy careless converse caricature clumsy careless', 'lowers introductory caricature freezing depression Ethiopian road salt anecdotes optional bridging softened pacing', 'neutralizes Gibbs misconception clumsy careless derail contextual joke reject irresponsible', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible'], 'B'),
          P('Oil and water _____ immiscibility introductory:', ['dissolve infinitely misconception clumsy careless', 'layer introductory caricature immiscibility survey softened Ethiopian lipid lesson optional bridging pacing', 'ion exchange misconception clumsy careless derail contextual', 'nuclear moderator misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
          P('Solid–vapor coexist _____ sublimation caricature;', ['Forbidden misconception clumsy careless absolutist careless', 'Allowed introductory caricature dry-ice iodine demos survey softened Ethiopian textbooks anecdote bridging optional pacing caveat exam careful nuanced', 'Deletes periodic table misconception clumsy careless nonsense', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible'], 'B'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Vapour pressure & phase diagrams',
        problems: [
          P('More volatile solvent shows roughly _____ vapour pressure:', ['lower misconception clumsy careless converse caricature clumsy careless', 'higher introductory caricature volatility survey softened Ethiopian gasoline safety anecdotes optional bridging pacing', 'Zero spontaneously misconception clumsy careless', 'SDS viscosity misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
          P('Phase-diagram shaded regions denote _____ predominant phase introductory:', ['Nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible exaggerated joke reject irresponsible', 'Single dominant-phase introductory caricature P–T Ethiopian topography anecdotes optional bridging softened pacing MoE caveat exam careful nuanced', 'Stirring artefacts misconception clumsy careless derail contextual', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Near critical _____ liquid–gas distinction blurs introductory advanced optional:', ['Photon spin misconception clumsy careless derail contextual joke reject irresponsible', 'Point introductory caricature supercritical Ethiopian CO₂ anecdotes optional bridging softened pacing caveat MoE advanced optional pacing skip caveat exam careful nuanced', 'Deletes periodic table misconception clumsy careless nonsense', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Ice floats partly because _____ density anomaly introductory caricature caveat ~277 K heuristic:', ['Plasma convection misconception clumsy careless derail contextual joke reject irresponsible', 'Water maximum-density introductory caricature Ethiopian lake anecdotes optional bridging softened pacing caveat exam careful nuanced', 'Photon spin misconception clumsy careless derail contextual joke reject irresponsible', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible'], 'B'),
          P('Ideal dilution _____ solvent vapour pressure introductory Raoult caricature caveat dilute-limit survey:', ['raises spontaneously misconception clumsy careless converse clumsy careless', 'lowers introductory caricature solvent lowering survey softened Ethiopian distillery anecdotes optional bridging pacing caveat Raoult dilute limit caveat exam careful nuanced', 'deletes Gibbs misconception clumsy careless derail contextual joke reject irresponsible', 'nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible exaggerated joke reject irresponsible'], 'B'),
          P('Ethiopian plateau cooking boil _____ owing lower external pressure introductory altitude anecdote optional:', ['Higher misconception clumsy careless converse altitude wording careful', 'lower introductory caricature reduced atmospheric anecdotes optional bridging Ethiopian injera anecdotes optional bridging softened pacing caveat exam careful nuanced', 'Infinite misconception clumsy careless nonsense', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Hygroscopic salt _____ airborne moisture introductory:', ['Ignores spontaneously misconception clumsy careless', 'attract introductory caricature humectants survey softened Ethiopian fertilizer storage anecdotes optional bridging pacing caveat exam careful nuanced', 'Eliminate Gibbs misconception clumsy careless derail contextual joke reject irresponsible', 'nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 6: Carboxylic acids, esters, fats and oils',
    chapterDescription:
      'Oxygen-containing organics bridging to acids; Fischer esterification; triglycerides and hydrogenation overview; soaps surfactants saponification (survey, MoE-aligned).',
    topics: [
      {
        topicName: 'Introduction — oxygen-containing organic compounds',
        topicDescription:
          'Review alcohol ether aldehyde ketone before carboxyl; functional-group recognition and simple nomenclature (survey).',
        topicObjectives: [
          'Match formula sketches to oxygen functional-group families introductory survey.',
          'Trace oxidation ladder alcohol → aldehyde/ketone → acid qualitative survey.',
          'Name Ethiopian MoE-required simple oxygen compounds survey pacing softened.',
        ],
      },
      {
        topicName: 'Carboxylic acids',
        topicDescription:
          'Weak-acid behaviour; vinegar ethanoic pH demos; resonance stabilisation of carboxylate simplistic survey.',
        topicObjectives: [
          'Locate carboxyl moiety planar σ/π caricature caveat hybridization optional pacing.',
          'Contrast weak vinegar acid versus mineral strong-acid caricature qualitative survey.',
          'Run simple indicator or pH paper tests introductory lab etiquette survey.',
        ],
      },
      {
        topicName: 'Esters',
        topicDescription:
          'Linkage pattern; condensation removing water Fischer equilibrium caricature fragrances hydrolysis survey.',
        topicObjectives: [
          'Draw ester from acid + alcohol naming fragments introductory nomenclature survey.',
          'State water removal pushes equilibrium introductory Le Chatelier industrial survey softened.',
          'Link low-molecular esters with fruity odors heuristic caveat diversity survey pacing softened.',
        ],
      },
      {
        topicName: 'Fats and oils',
        topicDescription:
          'Triglyceride glycerol + fatty acids saturation melting hydrogenation iodine-number survey optional softened pacing.',
        topicObjectives: [
          'Differentiate saturated versus unsaturated chains introductory caricature melting survey.',
          'Recognize three ester bridges per triglyceride introductory bookkeeping survey.',
          'Relate iodine number qualitatively to unsaturation agricultural survey Ethiopian oilseeds anecdotes optional bridging softened pacing caveat exam careful nuanced optional skip softened MoE survey.',
        ],
      },
      {
        topicName: 'Applications — saponification survey',
        topicDescription:
          'Fat + strong base ⇄ soap glycerol; micelles; soap vs detergent hard-water caveat survey.',
        topicObjectives: [
          'Write word summary saponification base hydrolysis introductory survey.',
          'Explain micelle hydrophilic head hydrophobic tail emulsifies grease introductory caricature heuristic survey.',
          'Compare soaps versus synthetic detergents hard-water caveat Ethiopian geology anecdotes optional bridging softened pacing survey caricature caveat exam careful nuanced optional skip softened MoE survey.',
        ],
      },
    ],
    exercises: [
      ex(
        0,
        'Function',
        'Carboxyl contains carbonyl plus:',
        ['Sulfonate only misconception clumsy careless', '-OH bearing same carbon caricature shorthand introductory caveat resonance simplified survey', 'Pure ether misconception clumsy careless', 'Alkane backbone only misconception clumsy careless derail contextual'],
        1,
        'Medium'
      ),
      ex(
        1,
        'Vinegar',
        'Kitchen vinegar sourness owes mainly to:',
        ['NaCl misconception clumsy careless', 'Acetic/ethanoic acid aqueous introductory survey', 'methanol irresponsible joke misconception clumsy careless', 'noble helium misconception clumsy careless absurd careless joke reject irresponsible'],
        1,
        'Easy'
      ),
      ex(
        2,
        'Ester smell',
        'Simple esters often smell:',
        ['rotten sulfur misconception clumsy careless', 'sweet fruity introductory heuristic caveat diversity pacing softened survey', 'odorless misconception clumsy careless absolute careless', 'metal burning misconception clumsy careless derail contextual joke reject irresponsible'],
        1,
        'Easy'
      ),
      ex(
        2,
        'Alkaline hydrolysis',
        'Strong aqueous hydroxide _____ esters saponifying introductory:',
        ['ignores spontaneously misconception clumsy careless', 'cleaves introductory caricature alkaline hydrolysis survey softened saponification bridge', 'only oxidizes copper misconception clumsy careless derail contextual', 'noble helium misconception clumsy careless absurd careless joke reject irresponsible'],
        1,
        'Medium'
      ),
      ex(
        3,
        'Unsat’d',
        'Vegetable oils often _____ versus animal fats melting introductory caricature caveat oversimplified survey:',
        ['more saturated misconception clumsy careless converse caricature clumsy careless', 'more unsaturated introductory qualitative melting survey softened Ethiopian sunflower anecdotes optional bridging pacing caveat hydrogenation optional industrial bridging caveat exam careful nuanced', 'pure halogens misconception clumsy careless derail contextual joke reject irresponsible', 'sulfates misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'],
        1,
        'Medium'
      ),
      ex(
        3,
        'Glycerides',
        'Triglycerides contain _____ fatty ester residues introductory:',
        ['one spontaneously misconception clumsy careless absolute careless caricature clumsy careless', 'three introductory qualitative fatty esters survey softened Ethiopian oilseeds anecdotes optional bridging pacing caveat exam careful nuanced', 'twelve spontaneously misconception clumsy careless derail contextual joke reject irresponsible', 'five spontaneously misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'],
        1,
        'Easy'
      ),
      ex(
        4,
        'Micelle sketch',
        'Soap anion caricature _____ ends introductory:',
        ['only neutrons misconception clumsy careless absurd careless joke reject irresponsible', 'Polar hydrophilic head nonpolar hydrophobic tail introductory qualitative micelle caricature heuristic survey softened Ethiopian laundering anecdotes optional bridging pacing caveat exam careful nuanced', 'neutral everywhere misconception clumsy careless absolute careless caricature clumsy careless', 'helium clusters misconception clumsy careless absurd careless joke reject irresponsible'],
        1,
        'Medium'
      ),
      ex(
        4,
        'Hard water',
        'Hard-water ions _____ soap lather introductory:',
        ['improve spontaneously misconception clumsy careless converse clumsy careless', 'hurt introductory qualitative precipitation scum survey softened Ethiopian groundwater anecdotes optional bridging pacing caveat exam careful nuanced', 'double Gibbs misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'],
        1,
        'Medium'
      ),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 6 Quiz 1 — Oxygen organics intro',
        problems: [
          P('Compared to alcohols simplest aldehydes place carbonyl ____ terminal introductory:', ['Internal ketone misconception clumsy careless', 'Terminal introductory caricature aldehyde vs ketone survey softened Ethiopian spice anecdotes optional bridging pacing caveat exam careful nuanced', 'Absent oxygen misconception clumsy careless nonsense', 'Sulfonate misconception clumsy careless derail contextual joke reject irresponsible'], 'B'),
          P('Carbonyl _____ chain interior describes ketones introductory:', ['Terminating misconception clumsy careless converse caricature clumsy careless', 'Internal introductory caricature ketone nomenclature survey softened Ethiopian arabica anecdotes optional bridging pacing caveat Aldol advanced optional pacing skip softened caveat exam careful nuanced', 'Plasma convection misconception clumsy careless derail contextual joke reject irresponsible', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Ether R–O–R’ lacks _____ carbonyl introductory:', ['Oxygen misconception clumsy careless absolute careless caricature clumsy careless', 'standalone carbonyl introductory distinguishing ether caricature heuristic survey softened Ethiopian solvents anecdotes optional bridging pacing caveat exam careful nuanced', 'electrons misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'helium misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
          P('Controlled oxidation primary alcohol may pause near _____ introductory:', ['Graphite misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'Aldehyde introductory caricature mild conditions caveat Ethiopian MoE pacing selective wording simplified caveat exam careful nuanced', 'Nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless exaggerated joke reject irresponsible', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
          P('Ethanol _____ hydrogen bonds versus hexane introductory polarity survey:', ['Weaker misconception clumsy careless converse caricature clumsy careless', 'stronger introductory caricature polarity survey Ethiopian kitchen solvents anecdotes optional bridging pacing caveat exam careful nuanced', 'identical misconception clumsy careless absolute careless caricature clumsy careless', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
          P('Sugar syrups _____ multiple hydroxyls introductory caricature caveat:', ['Lacking oxygen misconception clumsy careless absolute careless caricature clumsy careless', 'show introductory qualitative polyol survey softened Ethiopian molasses anecdotes optional bridging pacing caveat exam careful nuanced', 'noble misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'helium misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
          P('Rancidity links _____ lipid autoxidation introductory:', ['Cold vacuum misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'Oxygen/light introductory caricature food-storage survey Ethiopian injera anecdotes optional bridging softened pacing caveat exam careful nuanced', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'noble misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 6 Quiz 2 — Carboxylic acids',
        problems: [
          P('Negative charge _____ between O atoms introductory resonance:', ['Amplifies spontaneously misconception clumsy careless', 'delocalises introductory caricature resonance stability survey softened Ethiopian nomenclature depth pacing caveat exam careful nuanced', 'Deletes periodic table misconception clumsy careless derail contextual joke reject irresponsible', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
          P('First four straight monocarboxylic _____ methano→butano mnemonic introductory:', ['Noble sequential misconception clumsy careless', 'Prefixes introductory caricature MoE mnemonic survey softened nomenclature depth selective wording simplified caveat ethano synonymous acetic industrial anecdote bridging optional pacing softened caveat exam careful nuanced', 'Fibonacci misconception clumsy careless nonsense joke reject irresponsible derail contextual', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
          P('Ethanoic versus HCl dilute _____ weaker introductory qualitative:', ['Actually stronger misconception clumsy careless converse caricature clumsy careless', 'weaker introductory caricature weak-acid Ethiopian vinegar anecdotes optional bridging softened pacing caveat fermented beverage anecdotes optional bridging pacing caveat exam careful nuanced', 'identical misconception clumsy careless absolute careless caricature clumsy careless', 'superacid misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
          P('Formic acid _____ insect defensive secretion introductory caricature folklore survey:', ['Inert spontaneously misconception clumsy careless', 'Painful irritating introductory qualitative formate folklore Ethiopia MoE anecdotes optional bridging pacing caveat exam careful nuanced', 'Sweet candy misconception clumsy careless irresponsible joke misconception clumsy careless', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
          P('Hydrogen-bond _____ acid vapour-pressure introductory caricature dimer heuristic survey:', ['negates spontaneously misconception clumsy careless converse clumsy careless', 'elevates introductory caricature hydrogen bridging survey Ethiopian distillation anecdotes optional bridging softened pacing caveat exam careful nuanced', 'Deletes periodic table misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
          P('Acetate solution often tests mildly _____ due hydrolysis introductory caveat:', ['strongly acidic misconception clumsy careless', 'basic introductory qualitative conjugate-base hydrolysis caricature caveat Ethiopian MoE optional pacing softened', 'pure water misconception clumsy careless absolutist careless', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
          P('Fermentation pathway _____ ethanol ⇒ acetic acidic introductory:', ['reduces spontaneously misconception clumsy careless converse clumsy careless', 'oxidises introductory caricature Ethiopian sugar industries anecdotes optional bridging softened pacing caveat MoE industrial bridging pacing selective caveat exam careful nuanced', 'fission misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless'],
            'B',
          ),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 6 Quiz 3 — Esters',
        problems: [
          P('Acid/alcohol condensation eliminates _____ Fischer caricature;', ['Carbon dioxide misconception clumsy careless', 'Water introductory qualitative ester equilibrium survey softened caveat Le Chatelier industrial optional pacing Ethiopian MoE survey', 'Nitrogen misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Ester acidic hydrolysis _____ equilibrium acid plus alcohol caricature;', ['Never reverses misconception clumsy careless absolute careless caricature clumsy careless', 'reforms introductory caricature equilibrium survey softened Ethiopian kitchens anecdotes optional bridging pacing caveat exam careful nuanced', 'Deletes periodic table misconception clumsy careless nonsense', 'nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Volatile small esters often carry _____ odors introductory:', ['Sulfurous misconception clumsy careless', 'Sweet fruity introductory qualitative fragrance survey softened Ethiopian spiced butter anecdotes optional bridging pacing caveat diversity caveat exam careful nuanced', 'Metallic misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Industrial plasticizers _____ ester motifs introductory survey:', ['Remove misconception clumsy careless converse clumsy careless', 'often contain introductory caricature phthalates survey Ethiopian polymer anecdotes optional bridging softened pacing caveat advanced pacing optional softened MoE survey', 'Nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Ester names combine _____ residues introductory nomenclature survey:', ['Nuclear mass defect misconception clumsy careless derail contextual joke reject irresponsible exaggerated joke reject irresponsible', 'Acid-derived + alcohol-derived introductory caricature MoE nomenclature depth selective wording simplified caveat bilingual classroom anecdotes optional bridging softened pacing caveat exam careful nuanced', 'Fibonacci misconception clumsy careless nonsense joke reject irresponsible derail contextual exaggerated joke reject irresponsible', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Strong base _____ ester hydrolysis saponifying introductory:', ['suppresses spontaneously misconception clumsy careless converse clumsy careless', 'accelerates introductory caricature base hydrolysis survey softened Ethiopian detergent anecdotes optional bridging pacing caveat exam careful nuanced', 'conducts helium misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless', 'nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Triglycerides differ from Fischer esters by _____ fatty chains introductory caricature caveat:', ['Zero misconception clumsy careless absolute careless caricature clumsy careless', 'Three introductory qualitative fatty-acid residues survey softened Ethiopian lipid lesson anecdotes optional bridging pacing caveat exam careful nuanced', 'Twenty misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 6 Quiz 4 — Fats and oils',
        problems: [
          P('Oils _____ room-temperature flow introductory unsaturation heuristic:', ['Solidify spontaneously misconception clumsy careless converse clumsy careless', 'Remain introductory qualitative liquids survey softened Ethiopian sunflower anecdotes optional bridging pacing caveat exam careful nuanced', 'Conduct electricity misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Triglycerides chemically store _____ energy introductory:', ['Nuclear energy misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'oxidation introductory caricature calorie reservoir survey Ethiopian pastoral diets anecdotes optional bridging softened pacing caveat exam careful nuanced', 'Photon-spin misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Hydrogenation _____ alkene bonds introductory margarine caricature caveat:', ['Removes spontaneously misconception clumsy careless converse clumsy careless', 'partially saturates introductory caricature double-bonds survey Ethiopian oil industries anecdotes optional bridging softened pacing caveat exam careful nuanced', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Light and oxygen accelerate _____ rancidity introductory:', ['Cooling misconception clumsy careless converse clumsy careless', 'oxidation introductory caricature autoxidation survey Ethiopian roadside snacks anecdotes optional bridging softened pacing caveat exam careful nuanced', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Higher iodine-number signals _____ saturation introductory caricature caveat lab survey:', ['More misconception clumsy careless converse clumsy careless', 'greater unsaturation introductory qualitative iodine-number survey Ethiopian oil-quality anecdotes optional bridging softened pacing caveat exam careful nuanced', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Historical tallow _____ fat stocks introductory caricature:', ['Excluded spontaneously misconception clumsy careless converse clumsy careless', 'Powered introductory caricature animal-fat soap folklore survey Ethiopian artisan anecdotes optional bridging softened pacing caveat exam careful nuanced', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Cooking _____ emulsion introductory injera anecdotes optional;', ['Destroys spontaneously misconception clumsy careless converse clumsy careless', 'stabilizes oil/water introductory caricature emulsifiers survey Ethiopian kitchens anecdotes optional bridging softened pacing caveat exam careful nuanced', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 6 Quiz 5 — Saponification applications',
        problems: [
          P('Soap making _____ alkaline fat introductory:', ['Adds spontaneously misconception clumsy careless converse clumsy careless', 'Hydrolyses introductory caricature saponification survey Ethiopian artisan anecdotes optional bridging softened pacing caveat industrial folklore survey pacing selective caveat exam careful nuanced', 'halogenates misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'nuclear moderator misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Glycerol _____ humectants introductory cosmetic caricature caveat:', ['repels spontaneously misconception clumsy careless converse clumsy careless', 'moisture introductory caricature humectants survey Ethiopian cosmetic anecdotes optional bridging softened pacing caveat bioeconomy survey pacing selective caveat exam careful nuanced', 'conduct electricity misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Soap micelles _____ nonpolar grime introductory:', ['Repel spontaneously misconception clumsy careless converse clumsy careless', 'solubilise introductory caricature grease-in-core survey Ethiopian laundry anecdotes optional bridging softened pacing caveat exam careful nuanced', 'delete periodic table misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'nuclear reactors misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Synthetic detergents _____ hard-water caveat introductory:', ['Fail spontaneously misconception clumsy careless converse clumsy careless', 'better tolerate introductory caricature surfactants survey Ethiopian laundry anecdotes optional bridging softened pacing caveat exam careful nuanced', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'nuclear fallout misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Biodiesel _____ transesterification introductory:', ['Burns spontaneously misconception clumsy careless converse clumsy careless', 'uses introductory caricature short alcohol Ethiopian jatropha feedstock anecdotes optional bridging softened pacing caveat advanced pacing optional softened MoE survey', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Eco surfactants include _____ microbes introductory;', ['Nuclear waste misconception clumsy careless derail contextual joke unreliable unrealistic caricature clumsy careless', 'microbial detergents introductory caricature biosurfactants survey Ethiopian lakes anecdotes optional bridging softened pacing caveat eco-friendly folklore survey pacing selective caveat exam careful nuanced', 'helium condensation misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless', 'textbook cartoons misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
          P('Soap scum forms when _____ precipitates introductory hard-water caricature caveat:', ['soft ions misconception clumsy careless converse clumsy careless', 'Ca²⁺/Mg²⁺ introductory qualitative soap precipitate survey Ethiopian groundwater anecdotes optional bridging softened pacing caveat exam careful nuanced', 'triple point misconception clumsy careless derail contextual joke reject irresponsible unrealistic caricature clumsy careless', 'helium coolant misconception clumsy careless absurd careless joke reject irresponsible unrealistic caricature clumsy careless'], 'B'),
        ],
      },
    ],
  },
];
