/**
 * Grade 9 Physics curriculum — Units 5–7 (Natural stream, MoE Ethiopia outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 5: Simple machines',
    chapterDescription:
      'Purpose and types of simple machines; levers and pulleys; inclined plane, wedge, and screw; mechanical advantage and velocity ratio; efficiency and everyday uses.',
    topics: [
      {
        topicName: 'Purpose and types of simple machines',
        topicDescription: 'Why machines are used; effort, load, and work; classification of simple machines.',
        topicObjectives: [
          'Explain how simple machines change force or direction while transferring work.',
          'Identify common simple machines used in daily life and tools.',
        ],
      },
      {
        topicName: 'Lever and pulley systems',
        topicDescription: 'Classes of levers; fulcrum, effort arm, load arm; fixed, movable, and compound pulleys.',
        topicObjectives: [
          'Relate lever class to positions of fulcrum, effort, and load.',
          'Describe how pulley arrangements change the force needed to lift a load.',
        ],
      },
      {
        topicName: 'Inclined plane, wedge and screw',
        topicDescription: 'How slope reduces needed force; wedge as two ramps; screw as inclined plane wrapped around.',
        topicObjectives: [
          'Use inclined-plane ideas to explain ramps, stairs, and roads.',
          'Connect wedge and screw structures to force-distance trade-offs.',
        ],
      },
      {
        topicName: 'Mechanical advantage and velocity ratio',
        topicDescription: 'Ideal MA and VR definitions; distance and force relationships for machines without friction.',
        topicObjectives: [
          'Compute ideal mechanical advantage from force or distance ratios (introductory).',
          'State the link between velocity ratio and distances moved by effort and load.',
        ],
      },
      {
        topicName: 'Efficiency and everyday applications',
        topicDescription: 'Useful output vs total input; friction and heat losses; practical examples.',
        topicObjectives: [
          'Define efficiency as a percentage using useful work or power.',
          'Give examples where friction lowers real mechanical advantage.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Purpose', 'A simple machine often helps you:', ['Apply a smaller force over a larger distance to do the same work (ideal)', 'Create energy from nothing', 'Eliminate friction completely', 'Remove the need for effort'], 0, 'Easy'),
      ex(1, 'Lever class', 'In a first-class lever, the fulcrum is:', ['Between effort and load', 'At one end with effort in the middle', 'At one end with load in the middle', 'Always absent'], 0, 'Easy'),
      ex(1, 'Pulley', 'A single fixed pulley mainly changes:', ['Direction of the force', 'The weight of the object', 'Gravity to zero', 'The mass of the rope'], 0, 'Medium'),
      ex(2, 'Ramp', 'A longer, gentler inclined plane usually needs:', ['A smaller force along the plane (for the same vertical rise)', 'A larger force along the plane', 'No force', 'Infinite force'], 0, 'Easy'),
      ex(2, 'Screw', 'A screw can be thought of as:', ['An inclined plane wrapped around a cylinder', 'A pure lever only', 'A type of wheel without axle', 'A sound wave'], 0, 'Easy'),
      ex(3, 'MA', 'Ideal mechanical advantage can be written as:', ['Load force ÷ effort force (in the usual ideal definition)', 'Effort force ÷ load force always', 'Effort distance ÷ load distance only always false varies definition', 'Always 1 for any machine'], 0, 'Medium'),
      ex(4, 'Efficiency', 'Efficiency is lower when:', ['More energy is lost to friction and heat', 'Friction is zero', 'Useful output equals total input', 'The machine does no work'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Purpose and types',
        problems: [
          P('A simple machine transfers energy so that:', ['You may trade force for distance (intro)', 'Energy is created inside the machine', 'Work output always exceeds work input', 'Gravity disappears'], 'A'),
          P('Examples of simple machines include:', ['Lever, pulley, inclined plane (among others)', 'Only electric motors', 'Only batteries', 'Only lasers'], 'A'),
          P('The “load” on a machine is:', ['The force or object you want to move or lift', 'Always the person’s weight', 'Only friction', 'Only air resistance'], 'A'),
          P('Machines reduce the force needed by:', ['Increasing the distance through which effort acts (ideal story)', 'Removing the load', 'Blocking energy transfer', 'Stopping motion'], 'A'),
          P('A bottle opener used as a lever still obeys:', ['Conservation of energy (with losses in real cases)', 'Creation of energy', 'Zero work principle false', 'No relation to force'], 'A'),
          P('A wheel and axle is modeled as:', ['A lever that rotates around a fulcrum line (survey)', 'Only a sound source', 'Only a heater', 'Only a capacitor'], 'A'),
          P('Simple machines are widespread because they:', ['Make many tasks easier to perform with the body’s limited force', 'Remove the need for materials', 'Eliminate measurement', 'Cancel friction always'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — Levers and pulleys',
        problems: [
          P('A second-class lever has:', ['Load between fulcrum and effort', 'Effort between fulcrum and load', 'Fulcrum at the effort point always', 'No fulcrum'], 'A'),
          P('A third-class lever has:', ['Effort between fulcrum and load', 'Load between fulcrum and effort', 'Fulcrum at infinity', 'Only pulleys'], 'A'),
          P('Mechanical advantage of a lever (ideal) can increase when:', ['Effort arm is longer compared with load arm', 'Load arm is longer without other changes', 'Fulcrum is removed', 'Mass of lever is zero only'], 'A'),
          P('A block and tackle uses:', ['Several pulleys to multiply ideal mechanical advantage', 'Only one fixed pulley always', 'No ropes', 'Magnets only'], 'A'),
          P('A movable pulley with ideal rope support can:', ['Reduce the effort force compared with lifting directly (intro)', 'Always halve weight without geometry context false setup dependent', 'Cancel gravity', 'Create mass'], 'A'),
          P('Fulcrum in a seesaw is:', ['The pivot point', 'Always the heavier child only', 'The rope only', 'The sky'], 'A'),
          P('Compound machines are:', ['Combinations of simple machines', 'Only theoretical', 'Unable to do work', 'Only electronic'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Plane, wedge, screw',
        problems: [
          P('Wider ramps for the same height give:', ['A smaller slope angle often', 'A larger slope angle always false compare lengths', 'No relation to force', 'Infinite acceleration always'], 'A'),
          P('A wedge concentrates force to:', ['Split or separate materials', 'Produce sound only', 'Measure temperature', 'Store charge mainly'], 'A'),
          P('Screw pitch relates to:', ['How far the screw advances per turn (intro)', 'Only color', 'Only mass of bolt', 'Sound frequency'], 'A'),
          P('Using a zig-zag mountain road resembles:', ['A long inclined plane to reduce steepness', 'A single vertical lift only', 'Free fall', 'Resonance'], 'A'),
          P('Cutting tools often use wedge geometry because:', ['Small angle concentrates force on a narrow edge', 'Wedges cannot exert force false', 'Wedges remove friction always false', 'Wedges are gases'], 'A'),
          P('An axle thread is a helix similar to:', ['Inclined plane wrapped on a rod', 'Pure transverse wave', 'Only lever class two', 'Capacitor plates'], 'A'),
          P('Stairs are related to inclined planes because:', ['They break a rise into smaller effective slopes', 'They eliminate potential energy false', 'They are not machines false', 'They have no normal force false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — MA and velocity ratio',
        problems: [
          P('Velocity ratio is often:', ['Effort distance ÷ load distance (intro wording)', 'Load distance ÷ effort distance only always false check definitions', 'Always 100', 'Always zero'], 'A'),
          P('For an ideal frictionless machine:', ['Ideal MA equals velocity ratio (intro level)', 'MA is always zero', 'VR is always infinite', 'Energy is not conserved false'], 'A'),
          P('If effort moves 2 m and load rises 0.5 m, VR ≈', ['4', '0.25', '1', '2.5'], 'A'),
          P('A machine cannot have:', ['Efficiency greater than 100% in normal models', 'Input work', 'Output work', 'Friction'], 'A'),
          P('Larger VR with same load often implies:', ['Effort moves through a longer distance', 'Effort moves zero distance', 'Load moves farther than effort always false typical', 'No work is done'], 'A'),
          P('Actual mechanical advantage uses:', ['Measured forces including friction effects', 'Only theoretical distances without forces false', 'Only speeds of light', 'Temperature only'], 'A'),
          P('Idealizations ignore:', ['Friction and bending losses first pass', 'Conservation of energy false conservation still holds with losses as heat', 'The load', 'The fulcrum'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Efficiency and applications',
        problems: [
          P('Efficiency η can be written as:', ['(Useful energy output ÷ total energy input) × 100% (intro)', 'Always 200%', 'Input ÷ output only', 'Friction × mass only'], 'A'),
          P('Rusty bearings tend to:', ['Lower efficiency', 'Raise efficiency to 100%', 'Remove heat losses false more heat often', 'Cancel gravity'], 'A'),
          P('Lubrication can improve efficiency by:', ['Reducing frictional work losses', 'Increasing friction', 'Removing the machine', 'Stopping motion always'], 'A'),
          P('Bicycle gears illustrate:', ['Force–speed trade similar to simple machines (survey)', 'Nuclear energy', 'Capacitance only', 'Photoelectric threshold only'], 'A'),
          P('A ramp helps move a wheelchair because:', ['It reduces the perpendicular steep climb force needed (intro)', 'It increases weight', 'It removes normal force', 'It eliminates rolling friction completely'], 'A'),
          P('Real cranes are less than 100% efficient partly due to:', ['Friction in cables, gears, and joints', 'Perfect friction absence', 'No work done', 'Zero load'], 'A'),
          P('Knowing efficiency helps engineers:', ['Judge how much input is wasted as heat/noise (survey)', 'Break conservation of energy false', 'Ignore safety', 'Remove measurement'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 6: Mechanical oscillation and sound waves',
    chapterDescription:
      'Wave introduction; simple harmonic motion; propagation and energy; sound wave properties; applications of sound (survey).',
    topics: [
      {
        topicName: 'Introduction to waves',
        topicDescription: 'Disturbance propagation; mechanical vs electromagnetic (survey); transverse and longitudinal basics.',
        topicObjectives: [
          'Describe a wave as energy transfer often without bulk motion of medium.',
          'Distinguish transverse and longitudinal motion of medium particles.',
        ],
      },
      {
        topicName: 'Simple harmonic motion (pendulum and spring)',
        topicDescription: 'Restoring force idea; period factors for pendulum (length) and spring–mass (intro).',
        topicObjectives: [
          'Relate equilibrium, displacement, and restoring force direction.',
          'Identify period dependence on length for a simple pendulum (small angles, class level).',
        ],
      },
      {
        topicName: 'Wave propagation and energy transfer',
        topicDescription: 'Medium particles oscillate; speed depends on medium; amplitude and energy (intro).',
        topicObjectives: [
          'Explain that waves carry energy, not usually the medium itself over long distances.',
          'Link larger amplitude to more energy in many mechanical waves (qualitative).',
        ],
      },
      {
        topicName: 'Properties of sound waves',
        topicDescription: 'Longitudinal compressions; pitch, loudness, and speed in air (orders of magnitude, survey).',
        topicObjectives: [
          'Connect frequency to pitch and amplitude to loudness qualitatively.',
          'State that sound needs a medium; contrast speed in solids, liquids, gases qualitatively.',
        ],
      },
      {
        topicName: 'Applications of sound (survey)',
        topicDescription: 'Echo, sonar principles (intro); medical imaging mention; noise control awareness.',
        topicObjectives: [
          'Give everyday examples of reflection and absorption of sound.',
          'Name at least one technology that uses sound beyond hearing (survey).',
        ],
      },
    ],
    exercises: [
      ex(0, 'Wave', 'In a transverse wave on a string, particle motion is:', ['Perpendicular to propagation direction', 'Parallel only always', 'Zero always', 'Random with no pattern'], 0, 'Easy'),
      ex(1, 'Pendulum', 'For small oscillations, a simple pendulum’s period mainly increases when:', ['Length increases', 'Mass increases strongly always false ideal', 'Air disappears', 'Amplitude is huge always'], 0, 'Medium'),
      ex(2, 'Energy', 'Larger wave amplitude often means:', ['More energy carried (many mechanical cases)', 'Less energy always', 'Zero speed', 'No medium'], 0, 'Easy'),
      ex(3, 'Sound', 'Sound in air is mainly:', ['Longitudinal', 'Transverse only in air false', 'Not a wave false', 'Only visible light'], 0, 'Easy'),
      ex(3, 'Pitch', 'Higher musical pitch is associated with:', ['Higher frequency', 'Lower frequency', 'Zero amplitude only', 'Slower wave always in same medium false depends freq'], 0, 'Easy'),
      ex(4, 'Echo', 'An echo involves:', ['Reflection of sound from a surface', 'Creation of sound in vacuum', 'Only absorption', 'Light interference only'], 0, 'Easy'),
      ex(1, 'Spring', 'A mass on a spring oscillates about:', ['Equilibrium where net force is zero at the center of motion', 'Only the top point', 'Infinite displacement always', 'A point with max acceleration always false ends have max magnitude'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 6 Quiz 1 — Waves intro',
        problems: [
          P('A mechanical wave requires:', ['A material medium (for sound in the usual class story)', 'Always a vacuum', 'Only electromagnetic fields without particles false for mech', 'No source'], 'A'),
          P('Wavelength is:', ['Distance between successive identical points on the wave', 'Always the wave height', 'The same as amplitude always false', 'Time for one oscillation false that is period'], 'A'),
          P('Frequency unit is:', ['Hertz (cycles per second)', 'Meter only', 'Newton only', 'Joule only'], 'A'),
          P('Period T and frequency f relate as:', ['T ≈ 1/f', 'T = f', 'T = f²', 'No relation'], 'A'),
          P('Longitudinal particle motion is:', ['Parallel to propagation direction', 'Perpendicular always', 'Zero always', 'Only in optics false'], 'A'),
          P('Crest and trough describe:', ['High and low points of a transverse wave model', 'Compression only', 'Battery terminals', 'Temperature scales'], 'A'),
          P('Wave speed v often satisfies:', ['v ≈ fλ (intro)', 'v = f/λ only false', 'v = amplitude only', 'v = 0 always'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 6 Quiz 2 — SHM',
        problems: [
          P('Restoring force in SHM points:', ['Toward equilibrium and opposes displacement', 'Always away from equilibrium', 'Perpendicular always to motion', 'Is zero always at all times false'], 'A'),
          P('At maximum displacement in SHM, speed is:', ['Zero instantaneously', 'Maximum', 'Infinite', 'Undefined always'], 'A'),
          P('At equilibrium in ideal spring SHM, for many textbooks:', ['Speed is maximum magnitude', 'Acceleration is maximum magnitude false max at ends', 'Displacement is maximum', 'Potential energy is maximum false spring U min at eq for ideal'], 'A'),
          P('Simple pendulum period depends strongly on:', ['Length (for small-angle model)', 'Mass directly always false ideal', 'Only color', 'Barometric label only'], 'A'),
          P('Amplitude affects ideal pendulum period:', ['Very little for small angles (survey)', 'Always linearly doubles period false small-angle approx', 'Removes gravity false', 'Makes period zero'], 'A'),
          P('Damping in real oscillations:', ['Reduces amplitude over time', 'Increases forever always', 'Removes mass', 'Stops gravity'], 'A'),
          P('A swing child uses periodic motion because:', ['Motion repeats in cycles', 'Motion never repeats', 'Only random', 'Only uniform velocity'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 6 Quiz 3 — Propagation and energy',
        problems: [
          P('Sound cannot travel through:', ['Ideal vacuum (no medium)', 'Air false air carries sound', 'Water false', 'Steel false'], 'A'),
          P('Compressions in sound are:', ['Regions where air pressure is higher than equilibrium (model)', 'Regions of zero density only', 'Electromagnetic crests only', 'Static charge piles'], 'A'),
          P('Wave carries energy as it travels through:', ['A medium with particle oscillations (mechanical)', 'Nothing ever false', 'Only rigid unmovable matter false', 'Only vacuum for sound false'], 'A'),
          P('Greater loudness often correlates with:', ['Larger amplitude vibrations at source', 'Lower frequency only', 'Zero intensity', 'Shorter wavelength only'], 'A'),
          P('Earthquake seismic waves are:', ['Mechanical waves in Earth materials (survey)', 'Only radio', 'Only DC current', 'Only infrared light'], 'A'),
          P('Stiffer or denser media change wave speed:', ['According to medium properties (qualitative)', 'Always to 3×10⁸ m/s false EM vacuum', 'Always zero', 'Independently of material false'], 'A'),
          P('Standing waves on a string need:', ['Reflection and superposition (intro idea)', 'Only a vacuum', 'No tension', 'No frequency'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 6 Quiz 4 — Sound properties',
        problems: [
          P('Human hearing is roughly in the range:', ['About 20 Hz–20 kHz (survey textbook)', '0–10 Hz only', 'Only MHz', 'Only GHz'], 'A'),
          P('Ultrasound means:', ['Frequency above human hearing (typical class wording)', 'Always zero frequency', 'Only visible colors', 'Only subsonic always'], 'A'),
          P('Reflection of sound can produce:', ['Echo if path difference and timing are right', 'Always silence', 'Only light', 'Nuclear fission'], 'A'),
          P('Sound travels faster in solids than in gases often because:', ['Particles couple stiffness/mass differently (qualitative)', 'Gases have no atoms false', 'Solids have no elasticity false', 'Speed must be same always false'], 'A'),
          P('Beats heard when two tones are close in frequency relate to:', ['Interference of waves with slightly different f (survey)', 'Only temperature drift', 'Only friction static', 'Capacitance'], 'A'),
          P('A stethoscope uses sound to:', ['Couple body sounds to the ear (application)', 'Generate X-rays', 'Measure altitude only', 'Store chemical energy'], 'A'),
          P('Noise-canceling ideas (intro) may use:', ['Superposition of waves (survey level)', 'Elimination of conservation of energy false', 'Only thermal expansion', 'Only levers'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 6 Quiz 5 — Applications (survey)',
        problems: [
          P('Sonar uses:', ['Sound reflection to detect objects underwater (intro)', 'Only visible light', 'Only nuclear radiation in basic story', 'Only magnets'], 'A'),
          P('Medical ultrasound imaging relies on:', ['Reflection and timing of pulses (survey)', 'Gamma rays primarily', 'Only chemical titration', 'Gravitational lensing'], 'A'),
          P('Soft materials in a room can:', ['Absorb sound and reduce reverberation', 'Always reflect 100% of sound', 'Eliminate all waves in air false', 'Stop temperature changes always false'], 'A'),
          P('Breaking glass with loud sound (demo story) links to:', ['Resonance when driving frequency matches natural frequency (intro)', 'Only static friction', 'Only lever MA', 'Half-life'], 'A'),
          P('Echolocation in animals uses:', ['Emitted sounds and echoes (survey)', 'Only infrared eyes', 'Only gamma bursts', 'Nuclear magnetic resonance always'], 'A'),
          P('Loud prolonged noise can harm hearing because:', ['Excessive vibration stresses sensory structures', 'Sound has no energy false', 'Only cold causes damage false', 'Ears require vacuum false'], 'A'),
          P('Designing concert halls involves:', ['Controlling reflection, absorption, and diffusion (awareness)', 'Ignoring wave behavior', 'Only painting colors for pitch false', 'Removing all air false'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 7: Temperature and thermometry',
    chapterDescription:
      'Temperature vs heat; Celsius and Kelvin scales; thermometer types; thermal expansion; practical measurement uses.',
    topics: [
      {
        topicName: 'Temperature and heat',
        topicDescription: 'Thermal equilibrium; heat as energy in transit; internal energy idea (intro).',
        topicObjectives: [
          'Distinguish temperature from total thermal energy of an object.',
          'Describe heat flow from hotter to colder until equilibrium.',
        ],
      },
      {
        topicName: 'Temperature scales (Celsius, Kelvin)',
        topicDescription: 'Fixed points; absolute zero as limit; conversion T_K ≈ T_C + 273 (survey).',
        topicObjectives: [
          'Convert between Celsius and Kelvin at a Grade 9 level.',
          'State that Kelvin scale starts at absolute zero conceptually.',
        ],
      },
      {
        topicName: 'Types of thermometers',
        topicDescription: 'Liquid-in-glass, bimetallic strip, thermistors and digital displays (survey).',
        topicObjectives: [
          'Explain how a liquid column length relates to temperature change.',
          'Compare contact vs remote sensing examples at introductory level.',
        ],
      },
      {
        topicName: 'Thermal expansion of solids and liquids',
        topicDescription: 'Linear and volume expansion ideas; anomalies like water (awareness).',
        topicObjectives: [
          'Predict gap spacing for rails or bridges in hot weather (qualitative).',
          'Note that most substances expand when heated under ordinary conditions.',
        ],
      },
      {
        topicName: 'Applications of temperature measurement',
        topicDescription: 'Weather, health, industry, food safety; calibration concept (intro).',
        topicObjectives: [
          'Give examples where accurate temperature readings matter.',
          'Identify safety reasons for monitoring temperature in machines and food.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Heat', 'Heat is energy transferred because of:', ['Temperature difference', 'Position in space only', 'Color only', 'Speed of light only'], 0, 'Easy'),
      ex(1, 'Kelvin', '0 K represents:', ['A theoretical lower limit (absolute zero, no thermal energy left to remove)', 'Water boiling always', 'Room temperature', 'Ice point always'], 0, 'Medium'),
      ex(1, 'Convert', '25 °C is approximately:', ['298 K', '248 K', '273 K exactly', '0 K'], 0, 'Easy'),
      ex(2, 'Liquid', 'Liquid in glass thermometers use:', ['Expansion of liquid with temperature', 'Only magnetic fields', 'Only pressure at constant volume only without mercury story', 'Radio waves'], 0, 'Easy'),
      ex(3, 'Bridge gaps', 'Expansion joints allow:', ['Sections to move without buckling when heated', 'Zero movement always', 'Elimination of friction in wheels false', 'Faster light'], 0, 'Easy'),
      ex(3, 'Water', 'Water shows unusual density behavior near:', ['4 °C (awareness for advanced note)', '500 °C always', '−273 °C only false', 'Always expands uniformly without anomaly false'], 0, 'Medium'),
      ex(4, 'Fever', 'Clinical thermometers help:', ['Monitor body temperature for health', 'Measure speed', 'Weigh atoms only', 'Record loudness'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 7 Quiz 1 — Temperature and heat',
        problems: [
          P('Temperature measures:', ['Average kinetic energy of random particle motion (intro wording)', 'Total energy always same as heat name', 'Only potential energy in gravity', 'Only volume'], 'A'),
          P('Two objects in thermal contact reach equilibrium when:', ['No net heat flows between them', 'All heat is destroyed false', 'Temperatures always differ forever false', 'Objects vanish'], 'A'),
          P('Heat flows spontaneously from:', ['Hotter to colder', 'Colder to hotter without work devices', 'Always sideways only false', 'No direction'], 'A'),
          P('Internal energy includes:', ['Random microscopic kinetic and potential parts of molecules (survey)', 'Only macroscopic bulk speed always false', 'Only chemical formula mass', 'Only light color'], 'A'),
          P('Specific heat concept (intro) helps explain:', ['Why some materials change temperature slower for same heat input', 'Why all materials heat equally always false', 'Constant speed always', 'Sound frequency'], 'A'),
          P('Touching metal feels cold sometimes because:', ['Heat conducts quickly away from skin', 'Metal is always colder than air false', 'Metal has no electrons false', 'Metal stops radiation'], 'A'),
          P('An insulating mug reduces:', ['Rate of heat transfer to surroundings', 'Temperature of coffee to absolute zero instantly', 'Gravity', 'Mass of liquid'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 7 Quiz 2 — Scales',
        problems: [
          P('Ice point of water at standard pressure is:', ['0 °C', '100 °C', '273 °C', '−273 °C'], 'A'),
          P('Steam point of water at standard pressure is:', ['100 °C', '0 °C', '273 °C', '50 °C'], 'A'),
          P('Kelvin is SI base unit for:', ['Thermodynamic temperature', 'Length only', 'Current only', 'Amount only'], 'A'),
          P('A change of 1 °C is the same size as:', ['1 K change in temperature difference', '1 °F always false', '100 K always false', '0 K'], 'A'),
          P('Absolute zero in °C is about:', ['−273.15 °C (survey)', '0 °C', '100 °C', '+273 °C'], 'A'),
          P('Triple point and fixed points help:', ['Define reproducible temperature scale references (intro)', 'Eliminate measurement', 'Create perpetual motion', 'Remove atoms'], 'A'),
          P('Room temperature near 20 °C is about:', ['293 K (approx)', '20 K', '573 K', '0 K'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 7 Quiz 3 — Thermometers',
        problems: [
          P('Mercury or alcohol columns change length mainly due to:', ['Thermal expansion of liquid', 'Radioactivity', 'Gravitational waves', 'Laser cooling always'], 'A'),
          P('Bimetallic strips bend when heated because:', ['Metals expand by different amounts', 'Both metals always expand identically false', 'Heat removes electrons entirely false', 'Only one metal exists'], 'A'),
          P('Digital probes may sense temperature via:', ['Electrical property change with T (survey)', 'Only acoustic resonance always', 'Only counting atoms', 'Changing mass'], 'A'),
          P('A thermometer must be:', ['Calibrated against known fixed points or references (intro)', 'Uncalibrated always better false', 'Only decorative', 'Filled with vacuum for liquids false'], 'A'),
          P('Insertion time matters in medical thermometers because:', ['Thermal equilibrium needed with body', 'Display color only', 'Bluetooth pairing false basics', 'GPS lock false'], 'A'),
          P('Infrared forehead thermometers estimate temperature from:', ['Radiation emitted (survey level)', 'Touching arteries only always false', 'Weighing person', 'Sound echo'], 'A'),
          P('A Galileo-style idea (history survey) used:', ['Buoyancy of heated fluid or gas (intro story varies)', 'Nuclear fusion', 'X-ray diffraction', 'Semiconductor PN junction only'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 7 Quiz 4 — Thermal expansion',
        problems: [
          P('Most solids expand when heated because:', ['Particles vibrate with larger average separation (model)', 'Particles disappear', 'Mass changes always chemically false thermal usually', 'Atoms stop moving false'], 'A'),
          P('Railway lines have gaps to allow:', ['Expansion on hot days', 'Train acceleration in vacuum false', 'Sound insulation only', 'Water freezing only'], 'A'),
          P('Bridge expansion joints prevent:', ['Buckling or excessive stress from thermal strain', 'All motion false some motion allowed', 'Electric current', 'Evaporation'], 'A'),
          P('Overhead power lines sag more in heat partly because:', ['Metal expands increasing length', 'Metal loses all strength false', 'Air disappears', 'Gravity turns off'], 'A'),
          P('Glass can crack with sudden temperature shocks if:', ['Stresses from uneven expansion exceed strength', 'Temperature is uniform always false', 'No heat exists', 'Liquid never expands false'], 'A'),
          P('Expansion of liquids helps in:', ['Liquid thermometers', 'Absolute zero production casually false not main idea', 'Creating charge', 'Lens grinding only'], 'A'),
          P('Water density maximum near 4 °C affects:', ['Lake layering and freezing from top (awareness)', 'Nothing observable false', 'Only gases', 'Diamond hardness only'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 7 Quiz 5 — Applications',
        problems: [
          P('Food storage guidelines use temperature to:', ['Slow microbial growth', 'Increase spoilage always false', 'Remove nutrients chemically instantly false', 'Change mass'], 'A'),
          P('Industrial processes monitor temperature to avoid:', ['Overheating damage or unsafe operation', 'Any measurement ever false', 'Electric charge buildup only', 'Sound beats'], 'A'),
          P('Weather forecasts report temperature to describe:', ['Thermal state of air near surface (among other data)', 'Wind color', 'Ocean salinity only', 'Planet core only'], 'A'),
          P('Incubator temperature control supports:', ['Stable conditions for eggs or cultures (survey)', 'Laser cooling of metals in home false', 'Fusion ignition', 'Ultrasound therapy only'], 'A'),
          P('Car engine coolant temperature gauges warn if:', ['Engine is too hot', 'Radio volume is high', 'Tire pressure is musical false', 'Fuel is colorful'], 'A'),
          P('Calibration compares instrument to:', ['Reference standard or known points', 'Random guesses', 'Only aesthetics', 'Speed of sound always'], 'A'),
          P('Ethiopian highlands weather discussions may reference °C because:', ['It is a common scientific everyday unit alongside forecasts', 'Kelvin is never used false science uses K in formulas', 'Temperature is not measured false', 'Only Fahrenheit exists globally false'], 'A'),
        ],
      },
    ],
  },
];
