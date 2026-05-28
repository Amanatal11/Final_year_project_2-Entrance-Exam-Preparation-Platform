/**
 * Grade 12 Physics curriculum — Units 4–5, Natural stream (Ethiopia MoE NEW outline, survey depth).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 4: Electromagnetism',
    chapterDescription:
      'Magnetic fields and forces on moving charges and currents, electromagnetic induction and Faraday law, generators and transformers, AC power and transmission, and electromagnetism in communication systems (survey).',
    topics: [
      {
        topicName: 'Magnetic fields and forces on charges and currents',
        topicDescription:
          'Magnets and magnetic domains, magnetic field lines, force on straight conductors F = BIℓsinθ, Fleming left-hand rule, and force on charged particles in crossed fields at introductory MoE Natural depth.',
        topicObjectives: [
          'Describe magnetic field direction using field lines and the right-hand rule for currents.',
          'Apply F = BIℓsinθ qualitatively and in simple perpendicular geometry problems.',
          'Relate Lorentz force on charged particles qv × B qualitatively to motion in fields survey.',
        ],
      },
      {
        topicName: 'Electromagnetic induction and Faraday law (intro)',
        topicDescription:
          'Changing flux, induced emf, Lenz law direction, qualitative Faraday linkage with turns, and demonstrations with coils moving near magnets.',
        topicObjectives: [
          'State Faraday induction idea induced emf from changing magnetic flux through a loop introductory.',
          'Use Lenz law to oppose the change producing emf qualitative.',
          'Compare motional emf in straight conductor cutting field lines introductory survey.',
        ],
      },
      {
        topicName: 'Generators and transformers',
        topicDescription:
          'Electromagnetic generator principle, coils rotating in magnetic field induced AC waveform, transformers Np/Ns ratios, step-up and step-down intro, assuming ideal transformers survey.',
        topicObjectives: [
          'Explain rotary generator alternating emf sinusoidal idea qualitative.',
          'Relate alternating current from rotation of coil perpendicular to flux survey.',
          'Compute secondary voltage ratios Vp/Vs ≈ Np/Ns introductory ideal transformer.',
        ],
      },
      {
        topicName: 'AC electricity and power transmission',
        topicDescription:
          'RMS and peak sinusoidal amplitude intro, mains frequency convention, transformers for high-voltage transmission, and minimizing I²R line losses qualitative.',
        topicObjectives: [
          'Distinguish peak and RMS values introductory single-frequency AC survey.',
          'Explain why stepping up voltage lowers current for same transmitted power qualitative.',
          'Identify roles of conductors, transformers, substations sketch survey.',
        ],
      },
      {
        topicName: 'Electromagnetism in communication systems',
        topicDescription:
          'Carrier waves modulation intro, antennas as radiators and receptors, electromagnetic spectrum bands radio to microwave survey, fibre optics linkage only optional mention.',
        topicObjectives: [
          'State that accelerated charges radiate electromagnetic waves introductory.',
          'Match radio TV mobile bands qualitatively to frequency spectrum survey.',
          'Describe antenna transmitting and receiving function qualitatively.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Field direction', 'Magnetic field around long straight conductor with current into page is:', ['Circular clockwise introductory right-hand corkscrew viewed from above into page reversed', 'Radial outward only false monopole', 'Uniform infinite false finite wire', 'Perpendicular inward only field line false'], 0, 'Easy'),
      ex(0, 'Force conductor', 'Forces on parallel conductors with parallel currents:', ['Same direction currents attract introductory', 'Same direction always repel false', 'Opposite currents attract false', 'No force between currents false'], 0, 'Medium'),
      ex(0, 'Lorentz', 'Force on moving positive charge perpendicular to B is:', ['mv false mass only', 'qvB introductory magnitude case', 'qE only electric false', 'B/v false'], 1, 'Easy'),
      ex(1, 'Flux change', 'Induced emf appears when:', ['Magnetic flux through loop changes introductory', 'Flux is constant non-zero false', 'Only when B is zero false', 'Only for superconductors false'], 0, 'Easy'),
      ex(1, 'Lenz', 'Lenz law ensures induced current opposes:', ['The change causing it introductory', 'Battery EMF always false', 'Gravity false', 'Heat flow only false'], 0, 'Medium'),
      ex(2, 'Transformer ratio', 'Ideal transformer 200 primary 4000 secondary turns means Vs is about:', ['20 times Vp introductory step-up Ns/Np', '1/20 Vp divide trap', 'Same as Vp false', '4000 V always false'], 0, 'Medium'),
      ex(2, 'Generator', 'Simple AC generator peak emf increases if rotation speed doubles approximately:', ['Doubles introductory rate of flux cut survey', 'Halves false', 'Unchanged false', 'Square root false'], 0, 'Easy'),
      ex(3, 'Transmission', 'Transmitting fixed power at higher line voltage mainly reduces:', ['Joule losses in conductors introductory lower I same P equals VI qualitative', 'Generator mass false', 'Demand false', 'Insulation need always decreases false nuanced'], 0, 'Medium'),
      ex(3, 'AC RMS intro', 'RMS sinusoidal voltage compared to peak is about:', ['Peak divided by √2 introductory', 'Peak times √2 multiply trap', 'Same as peak false', 'Zero false'], 0, 'Medium'),
      ex(4, 'Spectrum', 'AM radio broadcasts typically occupy roughly:', ['Hundreds kHz introductory survey MHz order lower than FM', 'Visible light false nm', 'X-ray false medical', 'dc static false'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — Magnetic fields and forces',
        problems: [
          P('North pole direction is where:', ['Earth magnetic south pole geographically introductory approximation names', 'True geographic north always false ambiguity', 'Current only false wire', 'Negative charge drift false'], 'A'),
          P('Inside long solenoid field is approximately:', ['Uniform along axis introductory dense turns survey', 'Zero everywhere false', 'Only outside false', 'Random false'], 'A'),
          P('Fleming left-hand rule applies to:', ['Force on conductor in magnetic field introductory motor rule', 'Induced voltage only false dynamo opposite hand', 'Refraction angle false optics', 'Capacitor charge false'], 'A'),
          P('If current doubled in perpendicular wire in fixed B magnetic force:', ['Doubles introductory F proportional I', 'Halves false', 'Unchanged false', 'Quarter false'], 'A'),
          P('Circular motion uniform B v perpendicular path radius depends on:', ['mv divided by qB introductory cyclotron qualitative', 'qE only false electric', 'B squared only false partial', 'Only mass squared false'], 'A'),
          P('Electron beam undeflected indicates fields may be:', ['Balanced forces introductory qE versus qvB velocity filter idea', 'Zero speed always false undeflected no field case', 'Only gravity false negligible', 'Only magnetic monopoles false'], 'A'),
          P('Permeability contrasts with:', ['Vacuum permeability µ₀ scaling B from current introductory survey', 'Coulomb k only electrostatic trap', 'Planck constant h false quantum unrelated here', 'Speed of units only false misleading'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Induction and Faraday',
        problems: [
          P('Flux through flat loop proportional to introductory survey:', ['B times area cosine angle between normal and field introductory Φ=BA cosθ', 'Charge only false', 'Velocity only unless moving cut false simplistic', 'Temperature only false'], 'A'),
          P('Pushing magnet into coil induces emf so current flows to:', ['Oppose relative motion introductory Lenz', 'Assist push always false', 'Random direction false conserved energy', 'Only if coil superconducting false'], 'A'),
          P('Increasing number of coil turns proportionally introductory ideal:', ['Can increase induced emf for same rate of flux change introductory survey', 'Removes flux false', 'Makes resistor zero false unless specified', 'Stops alternating current false'], 'A'),
          P('Moving conductor cutting field lines induces motional emf roughly:', ['Bℓv introductory perpendicular textbook case', 'Bℓ squared false wrong power', 'Q over C false capacitor', 'IR only Ohm passive false source'], 'A'),
          P('Transformer requires changing flux introductory meaning:', ['AC primary current survey', 'Steady DC only long term false coupling steady state zero rate after transient', 'No core false improves coupling', 'No secondary turns false still idea'], 'A'),
          P('Eddy currents in sheet moving through B cause:', ['Opposing magnetic drag introductory', 'Acceleration always aiding false opposite', 'No heating false Ohmic losses', 'Only chemical change false'], 'A'),
          P('Self-inductance arises when:', ['Circuit current creates flux linked to same circuit introductory', 'Separate permanent magnet unrelated false passive', 'Only nuclear decay false', 'Photon pressure only false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Generators and transformers',
        problems: [
          P('Commercial AC mains frequency Ethiopian context survey introductory:', ['50 Hz introductory region typical many countries textbook', '0 Hz dc false mains ac', '1 MHz rf false', '1000 Hz ultrasonic false unrelated'], 'A'),
          P('Efficiency of real transformer lowered partly by:', ['Core losses hysteresis eddy currents beginner survey', 'Zero resistance conductors false impossible', 'No magnetic coupling false tightly coupled assists', 'dc primary continuous false transformers need changing flux unless special'], 'A'),
          P('Step-down transformer has:', ['Primary turns greater than secondary introductory Np > Ns', 'Ns always zero false', 'Equal turns always false step equal', 'No core false'], 'A'),
          P('Brushes and slip rings in basic AC generator provide:', ['Connection to rotating coil introductory survey', 'Cooling only false partial', 'Increase insulation always false', 'Eliminate magnetic field false'], 'A'),
          P('Transformer iron core purpose:', ['Concentrate flux link both coils introductory', 'Block all flux false opposite', 'Store chemical energy false', 'Provide insulation only false'], 'A'),
          P('If primary voltage 240 V and turns ratio 1 10 step down secondary about:', ['24 V introductory divide by 10', '2400 V multiply trap', '240 V same false', '2.4 V decimal shift wrong false'], 'A'),
          P('Hand-crank flashlight generator converts:', ['Mechanical to electrical introductory', 'Thermal to optical only false incandescent different', 'Chemical fusion false', 'Nuclear gamma only false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — AC and power transmission',
        problems: [
          P('Peak voltage 311 V RMS about:', ['220 V introductory mains survey region typical relation', '311 V RMS false swapped', '440 V double false confusing line-line', '100 V approximate false guess'], 'A'),
          P('Power factor intro survey means ratio of:', ['Active power to apparent power introductory resistive unity max', 'Peak to RMS false amplitude', 'Voltage to charge false capacitor', 'Current to flux false magnetic'], 'A'),
          P('High-voltage lines reduce currents so line heat losses scale as:', ['I squared introductory Ploss I^2 R', 'I linear only false miss square', '1 over I squared false inverted', 'Independent of current false contradicts'], 'A'),
          P('Neutral wire contrast live in balanced single-phase introductory:', ['Neutral approximately near Earth potential survey earthing schemes', 'Carries lightning always false sporadic faults', 'Same as live amplitude always false RMS equal danger false', 'Insulated from Earth always false grounding'], 'A'),
          P('Substation lowers voltage before distribution introductory for:', ['Consumer safety utilization lower voltage survey', 'Increase consumer current always negative false nuisance', 'Eliminate transformers false cascade', 'Remove frequency false mains constant'], 'A'),
          P('Skin effect at high frequency tends to:', ['Concentrate current near conductor surface introductory survey qualitative', 'Make wire superconductive false unrelated', 'Remove resistance zero false imperfect', 'Stop wave propagation vacuum false conductors carry'], 'A'),
          P('Reactive loads intro inductive motors may cause:', ['Phase shift between voltage and current introductory power factor lag', 'No current ever false stalled draw', 'dc offset false ac context', 'Zero magnetic field false stator currents'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Electromagnetism in communication',
        problems: [
          P('Carrier wave in radio transmits information by introductory:', ['Modulation amplitude frequency phase survey qualitative', 'dc level only fixed false conveys nothing', 'Only chemical ink false analogy', 'Only sound in wire without propagation false freespace em'], 'A'),
          P('Speed of electromagnetic waves vacuum introductory:', ['3 times 10^8 m/s introductory approximate c', 'Sound speed air false slower', 'Zero false', 'Infinite false relativity capped'], 'A'),
          P('Increasing electromagnetic carrier frequency freespace wavelength introductory λ = c / f yields:', ['Shorter wavelength for same propagation speed introductory antennas often smaller qualitative', 'Longer wavelength always false contradicts wavelength relation', 'Lower photon energy proportional to frequency squared false E equals hf linear survey', 'Infinite bandwidth without regulatory limits false licensing spectrum'], 'A'),
          P('Optical fibres carry signals using:', ['Guided electromagnetic waves infrared introductory survey telecom', 'Sound compression only false audible', 'dc current loops false coax different', 'Only nuclear particles false'], 'A'),
          P('Receiving antenna absorbs energy from introductory:', ['Passing electromagnetic fields survey far field', 'Gravitational waves negligible false wrong band', 'Nuclear recoils irrelevant false', 'Ferromagnetic Barkhausen only hysteresis noise unrelated primary'], 'A'),
          P('Radar uses echoes of introductory:', ['Microwave pulses reflected survey qualitative', 'Seismic waves earthquake false geology', 'Sound in vacuum false acoustic', 'X-ray transmission soft tissue mammography unrelated always false scenario'], 'A'),
          P('Ionosphere can introductory survey reflect:', ['Some HF signals enabling long distance hops qualitative', 'All light visible false optics', 'All gamma penetrating false absorbs high energy', 'dc earth ground loop false LF'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 5: Basics of Electronics',
    chapterDescription:
      'Semiconductors and doping introductions, diode operation and rectification, transistors as switches and amplifiers introductions, logic gates integrated circuits introductory, and applications of everyday electronic devices (survey).',
    topics: [
      {
        topicName: 'Semiconductors and doping (intro)',
        topicDescription:
          'Crystalline silicon band gap idea qualitative, intrinsic versus doped conductors, n-type and p-type majority carriers introductory MoE Natural depth.',
        topicObjectives: [
          'Distinguish conductor insulator semiconductor by band gap qualitative survey.',
          'Explain donor and acceptor doping introductory terms majority carriers.',
          'Relate conductivity increase with modest doping compared to intrinsic silicon survey.',
        ],
      },
      {
        topicName: 'Diodes and rectification',
        topicDescription:
          'PN junction depletion qualitative forward reverse bias diode symbol half-wave and full-wave rectifier bridge idea smoothing capacitor intro.',
        topicObjectives: [
          'Interpret diode characteristic curve qualitatively forward turn-on reverse breakdown introductory.',
          'Sketch half-wave versus full-wave rectified waveforms qualitative.',
          'Explain capacitor smoothing role ripple reduction introductory.',
        ],
      },
      {
        topicName: 'Transistors as switches and amplifiers (intro)',
        topicDescription:
          'BJT or MOSFET symbols introductory common emitter switch saturation cutoff small-signal amplification idea qualitative without deep biasing calculus.',
        topicObjectives: [
          'Use transistor conceptually like controlled switch introductory base or gate drives.',
          'Describe amplifier boosts small variation using power supply qualitative.',
          'Contrast saturation versus cutoff introductory digital logic levels survey.',
        ],
      },
      {
        topicName: 'Integrated circuits and logic gates',
        topicDescription:
          'Wafer lithography qualitative scale idea AND OR NOT NAND XOR truth tables combinational introductory flip-flop idea optional superficial.',
        topicObjectives: [
          'Evaluate truth tables for AND OR NOT gates introductory combinations.',
          'Describe integration many transistors chips introductory survey economies.',
          'Recognize NAND as universal introductory mention building others survey.',
        ],
      },
      {
        topicName: 'Applications of electronic devices',
        topicDescription:
          'Microcontrollers LEDs sensors chargers regulated supplies introductory efficiency ideas environmental e-waste note survey.',
        topicObjectives: [
          'Give examples microcontroller in appliances introductory automotive survey.',
          'Identify LED diode light emission semiconductor introductory.',
          'Discuss energy efficiency chargers switching versus linear qualitative survey.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Bands', 'Semiconductor at room intrinsic carrier concentration silicon introductory increases if temperature rises because:', ['More electrons promoted across gap introductory qualitative', 'Band gap disappears false', 'Resistance always zero false not superconducting semiconductor', 'Doping disappears false'], 0, 'Medium'),
      ex(0, 'Doping n', 'n-type semiconductor majority carriers introductory:', ['Electrons introductory donors phosphorus idea', 'Holes introductory false majority opposite p-type', 'Ions stationary false lattice', 'Photon pairs false'], 0, 'Easy'),
      ex(1, 'Diode polarity', 'Diode conducts easily when:', ['Forward biased introductory PN junction diffusion idea', 'Reverse biased avalanche always false introductory assumes normal rectifier regime', 'Unbiased large current false negligible', 'Heated alone false simplistic'], 0, 'Easy'),
      ex(1, 'Bridge', 'Four-diode bridge provides:', ['Full-wave rectification introductory', 'Amplification voltage gain false transistor', 'Bandpass filter false RLC', 'Inverter XOR false logical'], 0, 'Easy'),
      ex(2, 'Switch transistor', 'In saturation transistor switch introductory collector voltage tends:', ['Near zero qualitative compared supply introductory low Vce', 'Equal supply rails both false contradictory', 'Negative infinite false unrealistic', 'Same as gate only false terminology mix'], 0, 'Medium'),
      ex(2, 'Amplifier survey', 'Small-signal amplifier needs:', ['Separate power rail introductory powered device', 'No energy input false violates conservation', 'Only resistor bias false incomplete', 'Perpetuum mobile false impossible'], 0, 'Medium'),
      ex(3, 'NAND universal', 'NAND gate alone can introductory survey:', ['Build other combinational gates with extra wiring introductory universality qualitative', 'Store infinite bits alone false sequential needs flops', 'Guarantee analog precision false discrete only', 'Remove propagation delay impossible false latency'], 0, 'Easy'),
      ex(3, 'Chip scale', 'Moore law trend qualitative survey historically:', ['Rising transistor density introductory observation', 'Decreasing digital usage false exploded growth', 'Slower chips always false opposing trend eras', 'No fabrication limits false lithography challenged'], 0, 'Medium'),
      ex(4, 'LED colour', 'LED emission wavelength tied to introductory qualitative:', ['Band gap energy semiconductor material survey', 'Resistor wattage mostly false incidental heating', 'Wire gauge only false conduction sizing', 'Magnetic polarity false'], 0, 'Medium'),
      ex(4, 'Phone intro', 'Smartphone motherboard contains primarily:', ['Digital integrated circuits introductory SoC memory sensors survey', 'Only vacuum tubes false obsolete', 'Only mechanical relays false bulky', 'Nuclear reactors false humorous'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Semiconductors',
        problems: [
          P('Hole in semiconductor represents:', ['Electron vacancy behaving like positive carrier introductory quasi-particle survey', 'Proton drifting freely false nucleus bound', 'Neutron surplus false dopant misconception', 'Vacuum molecule false wording'], 'A'),
          P('Intrinsic silicon carrier densities electrons n and holes p satisfy:', ['n equals p introductory charge neutrality balance', 'n always hundred times p false doped scenario', 'p zero finite T false intrinsic both', 'n negative false'], 'A'),
          P('Acceptor atoms add:', ['Extra holes introductory p-type acceptors boron example survey', 'Free neutrons nonsense false', 'Only magnetic domains false semiconductor context', 'No charge carriers impossible false doping goal'], 'A'),
          P('Doping silicon heavily increases conductivity mainly by:', ['More majority carriers introductory improved conduction qualitative', 'Removing bands false structure remains', 'Turning metallic always false extremes degenerate later topic', 'Cooling lattice only false conductivity drops cold'], 'A'),
          P('Band gap for silicon order introductory textbook:', ['About 1.1 electron volt survey qualitative room temperature context', '0 eV conductor false conductor zero gap approximately', '20 eV insulator magnitude false alkali halides UV range', 'Unmeasurable false'], 'A'),
          P('Thermal generation creates:', ['electron hole pairs introductory intrinsic increase with T qualitative', 'Only phonons lattice quanta insufficient alone false electrical conductivity needs carriers', 'Nuclear ions false unrelated', 'Only photons electromagnetic field without coupling false needs absorption'], 'A'),
          P('PN junction unbiased depletion introductory:', ['Has built-in barrier electric field separates carriers survey qualitative', 'Has zero electric field everywhere false misconception', 'Has free electrons uniformly false drift diffusion balance', 'Is superconductive false ordinary temperature'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — Diodes and rectification',
        problems: [
          P('Diode schematic arrow points introductory convention:', ['Direction of conventional forward easy current qualitative', 'Reverse breakdown direction false opposite', 'Magnetic north false mnemonic', 'Ground reference always false ambiguous'], 'A'),
          P('Half-wave loses introductory compared full-wave:', ['One polarity entire half cycle clipped introductory lower average power harvested', 'No difference false wrong double average full-wave doubles rectified portions per period', 'Triples ripple false contradictory', 'Operates microwave false wrong domain'], 'A'),
          P('Ripple smoothing introductory supply uses:', ['Electrolytic capacitor qualitative charge reservoir survey', 'Inductor only primary often combined but simplest intro filter cap emphasized', 'Open circuit false useless', 'Nuclear damping false wording'], 'A'),
          P('Zener diode regulating intro qualitative operates in:', ['Controlled reverse breakdown region introductory reference voltage regulator idea', 'Forward only always false regulating rail often reverse zener stacked series idea survey', 'Superconductive state false unrealistic', 'Photoconductive only false detector different'], 'A'),
          P('LED emits when:', ['Electron recombination emits photon introductory spontaneous emission diode', 'Only heat I squared R dominates false resistor incandescent different', 'Nuclear fusion false humorous', 'Sound vibration false mechanics'], 'A'),
          P('Reverse saturation current diode introductory tiny because:', ['Minority carriers diffusion limited qualitative survey exponentially small until breakdown', 'Majority floods barrier false contradicts reversed bias depleted', 'Infinite voltage always false bounded supply', 'No band gap assumption false semiconductor has gap'], 'A'),
          P('Rectifier converts:', ['Alternating voltage to pulsating uni-directional introductory', 'Analog to quantum false unrelated', 'dc to rotating mechanical false invert motor', 'Light to proton false sensor different'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Transistors',
        problems: [
          P('Emitter follower buffer introductory idea:', ['High input impedance low output qualitative voltage follower approximate unity gain survey', 'High voltage amplification always stage false emitter follower near 1 voltage gain textbook', 'Inverts input always phase false emitter follower noninverting', 'Requires vacuum pump false semiconductor'], 'A'),
          P('MOSFET channel forms when introductory:', ['Gate voltage exceeds threshold strong inversion survey qualitative NMOS enhancement', 'Source equals drain always trivial false biased matter', 'No oxide insulator nonsense false MOS has oxide barrier', 'Base current controls false bipolar terminology'], 'A'),
          P('Transistor dissipates heat when introductory:', ['Current through with voltage drop product power introductory P = IV channel survey', 'Only when off false negligible actually switching loss nuanced but conduction dominates mid', 'Cold superconductor semiconductor false silicon resistive ordinary', 'No supply connected false contradiction'], 'A'),
          P('Amplifier coupling capacitor introductory blocks:', ['Dc bias while passing ac signals qualitative survey capacitor high-pass idea', 'All frequencies infinitely false cutoff finite', 'Only gamma rays humorous false', 'Only digital bits false ambiguous'], 'A'),
          P('Common emitter inverter logic introductory saturates:', ['Output low versus high cutoff introductory digital interpretation survey', 'Output always midpoint analog false contradictory digital rail', 'No gain ever false transistor has beta', 'Operates mechanically false solid state'], 'A'),
          P('Biasing establishes introductory:', ['Quiescent operating point avoid clipping introductory survey midpoint bias line', 'Zero current always amplifier active needs bias false off', 'Random operating state false deterministic design', 'Perpetuum motion bias false violates'], 'A'),
          P('Darlington pair boosts introductory:', ['Current gain product approximate survey two BJT compounded', 'Speed always increases false saturation delay may worsen', 'Breakdown voltage doubling always false nuanced stacked', 'Transconductance canceled false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — Logic and IC',
        problems: [
          P('XOR output high introductory:', ['Exactly one input high survey truth table mnemonic', 'Both high false NOR different', 'All low false contradiction', 'Three inputs ambiguous two-input XOR standard'], 'A'),
          P('Integrated circuit introductory packaging examples survey:', ['DIP QFN BGA qualitative student recognition labeling', 'Only wooden breadboard enclosure false prototyping platform not IC package standardized', 'Only vacuum envelopes false valves historical', 'Barbed wire coils false wording'], 'A'),
          P('Combinational gates lack introductory:', ['Internal memory sequential elements flip-flops store state survey contrast', 'Boolean operations false trivially combinational computes functions', 'Power pins false nonsense they need rails', 'Output pins false contradictory'], 'A'),
          P('Decoder IC introductory:', ['Translates binary address to individual lines introductory memory addressing survey idea', 'Aggregates sums always false unrelated ALU narrower', 'Is analog multiplier false misconception', 'Is magnetic core memory false archaic'], 'A'),
          P('FPGA differs intro survey from ASIC loosely:', ['Reconfigurable after manufacture introductory field programmable qualitative', 'Cheaper massive production always reversed ASIC wins volume often false absolute', 'No transistors paradox false contains many programmable switches', 'Only mechanical gears false wording'], 'A'),
          P('Timing hazards introductory combinatorial may cause:', ['Glitches from unequal propagation delays qualitative race conditions survey', 'Perpetual stable output always contradictory hazard definition', 'No Boolean algebra false tautologies exist glitch timing issue', 'Only thermal noise false crossover relevant'], 'A'),
          P('Voltage levels logic families introductory TTL CMOS thresholds differ survey:', ['Noise margins and thresholds technology dependent introductory interoperability care', 'Universally identical 0–5 assumption false LV CMOS lowers rails', 'Ignore completely false PCB design respects', 'Only analog false digital definition'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Applications',
        problems: [
          P('PWM motor speed introductory varies:', ['Average voltage by duty cycle introductory survey motor driver', 'Only series resistor heating losses worse efficiency false pedagogy contrasts PWM switching', 'Magnetic polarity motor false rotor field orientation different concern', 'Nuclear neutron flux humorous false unrelated'], 'A'),
          P('Hall sensor detects introductory:', ['Magnetic field via Hall voltage semiconductor effect survey robotics', 'Temperature always false thermistor different', 'Light intensity introductory false photodiode competitor', 'Audio loudness microphone false acoustics'], 'A'),
          P('UPS contains introductory qualitative:', ['Batteries inverter charger survey backup power', 'Perpetuum flywheel indefinite false friction losses', 'Only diesel motor false narrower generator external sometimes', 'No semiconverters false contradictory modern UPS solid-state'], 'A'),
          P('SMPS introductory advantage over linear regulators survey:', ['Higher efficiency introductory switch mode duty cycle transformers inductors ripple trade-off', 'Zero noise spectrum false EMI challenges pedagogy caveat but efficiency primary answer', 'Simpler always false arguably more components', 'No magnetic parts false contradictory inductors ferrite cores'], 'A'),
          P('OLED differs intro survey from LCD often:', ['Self-emissive no separate backlight qualitative contrast black levels survey', 'Always uses liquid crystals false contradictory OLED organic emitters LC separate tech', 'Cannot bend flexible false contradictory flexible OLED marketed', 'Always higher power false nuanced content dependent'], 'A'),
          P('Quartz crystal oscillator uses introductory:', ['Mechanical resonance piezoelectric stability clock survey microcontroller', 'Thermal expansion timing false unreliable clock source', 'Chemical acidity sensor false misuse', 'Photon pressure metrology humorous false unrelated'], 'A'),
          P('Recycling e-waste issue introductory survey:', ['Toxic metals and recovery economics environmental ethics discourse MoE STS survey', 'No valuable metals false contradictory gold reclaim', 'Electronic devices degrade instantly false nuanced lifetimes reuse', 'Only paper waste false misconception'], 'A'),
        ],
      },
    ],
  },
];
