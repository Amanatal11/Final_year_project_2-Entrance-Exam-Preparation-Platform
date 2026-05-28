/**
 * Five entrance-exam-style MCQs per Grade 9 Physics topic (Natural stream).
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  const key = `${c}-${t}`;
  const banks = {
    '0-0': [
      Q('Physics mainly studies:', ['Matter, energy, space, and time', 'Only chemical bonding', 'Only plant taxonomy', 'Only grammar'], 'A'),
      Q('Physical laws are accepted because they:', ['Agree with repeated experiments within stated limits', 'Never change', 'Need no measurement', 'Come only from authority'], 'A'),
      Q('A model in physics is:', ['A useful representation that can be revised', 'Always perfect', 'The same as a guess without test', 'Only art'], 'A'),
      Q('Technology often applies:', ['Scientific knowledge to practical problems', 'Only tradition', 'Only luck', 'No measurement'], 'A'),
      Q('Grade 9 physics builds skills in:', ['Reasoning with evidence and units', 'Ignoring numbers', 'Only memorizing names', 'Avoiding experiments'], 'A'),
    ],
    '0-1': [
      Q('Mechanics deals mainly with:', ['Motion and forces', 'Only light color', 'Only fossils', 'Only acids'], 'A'),
      Q('Acoustics is the study of:', ['Sound', 'Only magnetism', 'Only stars only', 'Only cells'], 'A'),
      Q('Thermodynamics focuses on:', ['Heat, temperature, and energy transfer', 'Only optics', 'Only poetry', 'Only maps'], 'A'),
      Q('Optics studies:', ['Light and vision-related phenomena', 'Only friction', 'Only pulleys', 'Only atoms only'], 'A'),
      Q('Branches of physics are:', ['Connected parts of one discipline', 'Unrelated stories', 'Only history', 'Only engineering drawings'], 'A'),
    ],
    '0-2': [
      Q('Mobile phones use principles from:', ['Electromagnetism and waves (intro)', 'Only botany', 'Only grammar', 'Only painting'], 'A'),
      Q('Solar panels convert sunlight into:', ['Electrical energy (intro)', 'Only sound', 'Only chemical wood', 'Nothing useful'], 'A'),
      Q('Responsible technology use considers:', ['Safety and environmental impact', 'Only speed', 'No rules', 'Only advertising'], 'A'),
      Q('Medical imaging may use:', ['Waves or radiation controlled by physics', 'Only folklore', 'Only handwriting', 'Only coins'], 'A'),
      Q('Physics supports transport through:', ['Forces, materials, and energy ideas', 'Only myths', 'Only music theory', 'Only spelling'], 'A'),
    ],
    '0-3': [
      Q('Galileo emphasized:', ['Observation and experiment', 'Only authority without checking', 'That mass has no role in motion', 'Only alchemy'], 'A'),
      Q('Newton is known for:', ['Laws of motion and gravitation (intro)', 'Periodic table', 'Cell theory', 'Evolution'], 'A'),
      Q('Scientific progress is often:', ['Cumulative and collaborative', 'Always by one person only', 'Unrelated to evidence', 'Only political'], 'A'),
      Q('Einstein contributed to ideas about:', ['Space, time, and energy (awareness)', 'Only plant names', 'Only river names', 'Only grammar'], 'A'),
      Q('Learning history of physics helps students:', ['See how ideas were tested and refined', 'Memorize dates only', 'Avoid experiments', 'Reject units'], 'A'),
    ],
    '0-4': [
      Q('A hypothesis is:', ['A testable prediction or explanation', 'A final law always', 'A random guess', 'A poem only'], 'A'),
      Q('Scientific method steps include:', ['Observe, question, test, analyze (intro)', 'Only guess', 'Only vote', 'Only copy'], 'A'),
      Q('Careers using physics include:', ['Engineering, medicine technology, teaching (examples)', 'Only poetry', 'Only sports commentary only', 'None'], 'A'),
      Q('Honest reporting in labs means:', ['Recording data as measured', 'Changing numbers to fit wish', 'Hiding outliers always', 'No units'], 'A'),
      Q('Teamwork in inquiry should be:', ['Respectful and safe', 'Careless with glassware', 'Ignore instructions', 'Skip citations'], 'A'),
    ],
    '1-0': [
      Q('A physical quantity is described with:', ['A number and a unit', 'Only a name', 'Only color', 'Only letter grade'], 'A'),
      Q('Scalars have:', ['Magnitude only', 'Magnitude and direction', 'No units', 'Only direction'], 'A'),
      Q('Vectors have:', ['Magnitude and direction', 'Only magnitude', 'No units ever', 'Only temperature'], 'A'),
      Q('Mass measures:', ['Quantity of matter (intro)', 'Pull of gravity only', 'Speed', 'Heat'], 'A'),
      Q('Weight depends on:', ['Gravitational force on mass', 'Volume only', 'Color', 'Pitch of sound'], 'A'),
    ],
    '1-1': [
      Q('SI unit of mass is:', ['Kilogram', 'Meter', 'Second', 'Newton'], 'A'),
      Q('Prefix kilo means:', ['× 10³', '× 10⁻³', '× 10⁶', '× 10⁻⁶'], 'A'),
      Q('Unit of time in SI is:', ['Second', 'Minute only', 'Hour only', 'Day only'], 'A'),
      Q('Derived unit newton equals:', ['kg·m/s²', 'kg·m', 'm/s only', 'J/s only'], 'A'),
      Q('Using SI units helps:', ['Communicate measurements clearly', 'Hide results', 'Avoid comparison', 'Remove precision'], 'A'),
    ],
    '1-2': [
      Q('Significant figures reflect:', ['Measured precision', 'Random spelling', 'Color of instrument', 'Student name'], 'A'),
      Q('Precision means:', ['Closeness of repeated measurements', 'Correctness to true value always', 'Only speed', 'Only mass'], 'A'),
      Q('Accuracy means:', ['Closeness to true value', 'Same as precision always', 'Only frequency', 'Only volume'], 'A'),
      Q('Reporting 1.0 m instead of 1 m suggests:', ['Two significant figures', 'Zero figures', 'Infinite precision', 'No measurement'], 'A'),
      Q('Rounding should not:', ['Increase apparent precision falsely', 'Follow class rules', 'Keep sensible digits', 'Use units'], 'A'),
    ],
    '1-3': [
      Q('Dimensional analysis checks:', ['Consistency of units in equations', 'Color of graphs', 'Only names', 'Only dates'], 'A'),
      Q('Converting km to m multiplies by:', ['1000', '0.001', '3600 only', '100 only'], 'A'),
      Q('If v = d/t, solving for t gives:', ['t = d/v', 't = v/d always wrong', 't = dv', 't = d + v'], 'A'),
      Q('Unit analysis can:', ['Catch algebra mistakes', 'Replace thinking', 'Eliminate experiments', 'Remove vectors'], 'A'),
      Q('Speed units m/s mean:', ['Meters per second', 'Meters times second', 'Seconds per meter only', 'No units'], 'A'),
    ],
    '1-4': [
      Q('Before heating, you should:', ['Wear goggles and follow instructions', 'Taste chemicals', 'Leave burners unattended', 'Ignore teacher'], 'A'),
      Q('Broken glass should be:', ['Disposed safely as directed', 'Left on floor', 'Hidden in desk', 'Thrown anywhere'], 'A'),
      Q('Reading a scale at eye level reduces:', ['Parallax error', 'Gravity', 'Mass', 'Frequency'], 'A'),
      Q('Report spills:', ['Immediately to the teacher', 'Never', 'Next week', 'Only if colorful'], 'A'),
      Q('Lab safety protects:', ['People and equipment', 'Only paper', 'Only grades', 'Nobody'], 'A'),
    ],
    '2-0': [
      Q('Distance is:', ['Total path length (scalar)', 'Shortest straight line always', 'A vector always', 'Unitless'], 'A'),
      Q('Displacement is:', ['Change in position (vector)', 'Always greater than distance', 'Scalar only', 'Same as speed'], 'A'),
      Q('SI unit for displacement is:', ['Meter', 'Newton', 'Second', 'Joule'], 'A'),
      Q('If you return to start, displacement is:', ['Zero', 'Equal to distance always', 'Negative always', 'Infinite'], 'A'),
      Q('A map grid helps find:', ['Position coordinates', 'Only taste', 'Only color', 'Only mass'], 'A'),
    ],
    '2-1': [
      Q('Speed is:', ['Distance per time (scalar)', 'Displacement per time vector', 'Force per mass', 'Energy per charge'], 'A'),
      Q('Velocity includes:', ['Direction', 'Only magnitude', 'Only mass', 'Only heat'], 'A'),
      Q('Average speed equals:', ['Total distance / total time', 'Final velocity only', 'Acceleration × time only', 'Mass × gravity'], 'A'),
      Q('Unit of speed in SI is:', ['m/s', 'm/s²', 'N', 'J'], 'A'),
      Q('Constant velocity means:', ['Zero acceleration', 'Zero speed always', 'Changing direction always', 'Infinite force'], 'A'),
    ],
    '2-2': [
      Q('Acceleration is:', ['Rate of change of velocity', 'Rate of change of distance only', 'Mass times weight', 'Work per time'], 'A'),
      Q('SI unit of acceleration is:', ['m/s²', 'm/s', 'N', 'Hz'], 'A'),
      Q('Negative acceleration can mean:', ['Slowing down if velocity is positive', 'Always speeding up', 'No change', 'Zero mass'], 'A'),
      Q('If velocity and acceleration are opposite, object:', ['Slows down (1D intro)', 'Speeds up always', 'Stops time', 'Loses mass'], 'A'),
      Q('Uniform acceleration means:', ['Constant a', 'Zero velocity always', 'No forces', 'No units'], 'A'),
    ],
    '2-3': [
      Q('On a distance–time graph, slope gives:', ['Speed (intro)', 'Acceleration always', 'Mass', 'Temperature'], 'A'),
      Q('On a velocity–time graph, slope gives:', ['Acceleration', 'Distance directly', 'Mass', 'Work'], 'A'),
      Q('Horizontal line on v–t graph means:', ['Constant velocity', 'Constant acceleration', 'Zero distance always', 'Zero mass'], 'A'),
      Q('Area under v–t graph gives:', ['Displacement (intro)', 'Force', 'Power directly always', 'Charge'], 'A'),
      Q('Graphs help because they:', ['Show relationships visually', 'Remove units', 'Replace experiments always', 'Hide data'], 'A'),
    ],
    '2-4': [
      Q('From rest with constant a, v equals:', ['at (intro)', 'a/t', 't/a', 'a + t'], 'A'),
      Q('Equation s = ut + ½at² applies when:', ['Acceleration is constant (intro)', 'Acceleration changes randomly', 'No time passes', 'No displacement'], 'A'),
      Q('Free fall near Earth uses g about:', ['9.8 m/s² downward', '0 m/s²', '98 m/s upward', '1 m/s² only'], 'A'),
      Q('If u = 0, s for uniform a is:', ['½at²', 'at² only without half', 'a/t', 'u/t'], 'A'),
      Q('Kinematic equations require:', ['Constant acceleration in 1D model', 'Zero friction always in all problems', 'Relativistic speeds', 'Sound in vacuum'], 'A'),
    ],
    '3-0': [
      Q('Newton’s first law is also called the law of:', ['Inertia', 'Gravitation only', 'Conservation of charge', 'Reflection'], 'A'),
      Q('Force is measured in:', ['Newtons', 'Joules', 'Watts', 'Pascals only'], 'A'),
      Q('Inertia depends mainly on:', ['Mass', 'Color', 'Speed only', 'Temperature only'], 'A'),
      Q('Balanced forces on an object give:', ['Zero net force', 'Infinite acceleration', 'Always motion', 'No mass'], 'A'),
      Q('Free-body diagrams show:', ['Forces on one object', 'Only energy', 'Only waves', 'Only temperature'], 'A'),
    ],
    '3-1': [
      Q('Newton’s second law is:', ['F = ma', 'F = mv always', 'F = m/a', 'F = 0 always'], 'A'),
      Q('Doubling mass at same net force:', ['Halves acceleration', 'Doubles acceleration', 'No effect', 'Triples velocity instantly'], 'A'),
      Q('Doubling net force on same mass:', ['Doubles acceleration', 'Halves acceleration', 'No effect', 'Removes friction always'], 'A'),
      Q('Unit of force newton equals:', ['kg·m/s²', 'kg·m/s', 'J/s only', 'm/s'], 'A'),
      Q('A 4 kg object with net force 12 N accelerates at:', ['3 m/s²', '48 m/s²', '0.33 m/s²', '12 m/s'], 'A'),
    ],
    '3-2': [
      Q('Newton’s third law states forces:', ['Occur in equal opposite pairs', 'Cancel inside body always', 'Act on same object only', 'Are always friction'], 'A'),
      Q('When you push a wall, the wall:', ['Pushes back on you', 'Exerts no force', 'Disappears', 'Has no mass'], 'A'),
      Q('Action–reaction pairs act on:', ['Different objects', 'Same object always', 'Only Earth', 'Only air'], 'A'),
      Q('Rocket propulsion uses:', ['Expelled gas pushes rocket forward', 'No forces', 'Only air inside cabin', 'Only magnetism in fuel'], 'A'),
      Q('Free-body diagrams help show:', ['Forces acting on one object', 'Only energy levels', 'Only wave speed', 'Only temperature'], 'A'),
    ],
    '3-3': [
      Q('Friction opposes:', ['Relative motion or tendency to slide', 'Gravity always', 'All weight', 'Sound only'], 'A'),
      Q('Kinetic friction acts when:', ['Surfaces slide', 'Object is at rest always', 'No contact', 'In vacuum only'], 'A'),
      Q('Reducing friction can be done by:', ['Lubrication (example)', 'Increasing roughness always', 'Adding sand always', 'Removing surfaces'], 'A'),
      Q('Static friction is generally:', ['Up to a maximum before sliding', 'Zero always', 'Less than zero', 'Independent of surfaces'], 'A'),
      Q('Friction can:', ['Convert kinetic energy to thermal energy', 'Create energy forever', 'Eliminate normal force', 'Stop gravity'], 'A'),
    ],
    '3-4': [
      Q('Work is done when:', ['Force has component along displacement', 'Force perpendicular only', 'No movement', 'Mass is zero'], 'A'),
      Q('SI unit of work is:', ['Joule', 'Newton', 'Watt', 'Pascal'], 'A'),
      Q('Kinetic energy depends on:', ['Mass and speed squared (intro)', 'Only height', 'Only color', 'Only charge'], 'A'),
      Q('Gravitational PE near Earth increases with:', ['Height (intro)', 'Speed only', 'Volume only', 'Frequency'], 'A'),
      Q('Power is:', ['Work per time', 'Force only', 'Mass only', 'Distance only'], 'A'),
    ],
    '4-0': [
      Q('Simple machines:', ['Make work easier by trading force and distance', 'Create energy', 'Eliminate friction always', 'Change mass'], 'A'),
      Q('Examples include:', ['Lever, pulley, inclined plane', 'Only battery', 'Only lens', 'Only atom'], 'A'),
      Q('Ideal machine cannot output more work than:', ['Input (real machines less)', 'Infinite', 'Zero input', 'Negative input'], 'A'),
      Q('Mechanical advantage compares:', ['Forces (ideal definition intro)', 'Only colors', 'Only sounds', 'Only tastes'], 'A'),
      Q('Wedge is related to:', ['Inclined plane', 'Only pulley', 'Only lens', 'Wave only'], 'A'),
    ],
    '4-1': [
      Q('A lever has:', ['Fulcrum, effort, and load (intro)', 'Only battery', 'Only coil', 'Only lens'], 'A'),
      Q('A fixed pulley mainly:', ['Changes direction of force', 'Doubles speed always', 'Removes gravity', 'Measures temperature'], 'A'),
      Q('Moving effort farther from fulcrum can:', ['Increase moment arm', 'Remove mass', 'Stop Earth rotation', 'Eliminate units'], 'A'),
      Q('Pulley systems can reduce:', ['Input force needed (ideal MA > 1 setups)', 'Mass of load', 'Gravity', 'Wavelength'], 'A'),
      Q('First-class lever example:', ['Seesaw (intro)', 'Wheelbarrow only always', 'No fulcrum', 'Only pulley'], 'A'),
    ],
    '4-2': [
      Q('A lever has:', ['Fulcrum, effort, load (intro)', 'Only battery', 'Only coil', 'Only lens'], 'A'),
      Q('First-class lever has fulcrum:', ['Between effort and load (example)', 'Always at end only', 'Never', 'Only in pulley'], 'A'),
      Q('Moving effort farther from fulcrum can:', ['Increase moment arm', 'Remove friction completely', 'Change mass', 'Eliminate gravity'], 'A'),
      Q('Pulley can change:', ['Direction of force (fixed pulley)', 'Mass of Earth', 'Speed of light', 'Atomic number'], 'A'),
      Q('Inclined plane reduces:', ['Force needed for same height gain (ideal)', 'Distance to climb', 'Energy need to zero', 'Weight'], 'A'),
    ],
    '4-3': [
      Q('Mechanical advantage (ideal) is:', ['Output force / input force', 'Input / output always', 'Mass / time', 'Heat / work'], 'A'),
      Q('Velocity ratio compares:', ['Input distance to output distance (intro)', 'Forces only', 'Temperatures', 'Charges'], 'A'),
      Q('If MA = 3, ideal input force is:', ['One third of load force', 'Triple load force', 'Zero', 'Equal to weight of Earth'], 'A'),
      Q('Block and tackle increases:', ['Ideal MA with more rope segments', 'Gravity', 'Sound in vacuum', 'Atomic mass'], 'A'),
      Q('Real MA is less than ideal because of:', ['Friction and deformation', 'No forces', 'Extra energy created', 'Vectors disappear'], 'A'),
    ],
    '4-4': [
      Q('Efficiency is:', ['Useful output / input × 100% (intro)', 'Always 100% in real devices', 'Force only', 'Mass only'], 'A'),
      Q('Friction in machines:', ['Lowers efficiency', 'Increases efficiency always', 'Has no effect', 'Creates perpetual motion'], 'A'),
      Q('Lubrication often:', ['Reduces friction', 'Increases friction always', 'Removes normal force', 'Stops gravity'], 'A'),
      Q('Bicycle gears help rider by:', ['Adjusting force and speed trade-off', 'Eliminating work', 'Removing inertia', 'Stopping motion'], 'A'),
      Q('Cannot build 100% efficient real machine because:', ['Some energy becomes thermal (intro)', 'Gravity stops', 'Mass vanishes', 'No forces exist'], 'A'),
    ],
    '5-0': [
      Q('A wave transfers:', ['Energy without net matter transport (intro)', 'Matter bulk flow always', 'Only charge', 'Only heat only in solids'], 'A'),
      Q('Amplitude relates to:', ['Maximum disturbance from equilibrium', 'Speed only', 'Mass only', 'Charge only'], 'A'),
      Q('Period is:', ['Time for one cycle', 'Distance per time', 'Force per area', 'Mass per volume'], 'A'),
      Q('Frequency unit hertz means:', ['Cycles per second', 'Meters per second', 'Newtons', 'Joules'], 'A'),
      Q('Wavelength is:', ['Distance between repeating points', 'Time for one cycle', 'Force', 'Temperature'], 'A'),
    ],
    '5-1': [
      Q('Simple harmonic motion repeats:', ['Regularly in pattern', 'Only once', 'Randomly without period', 'Only with friction zero always'], 'A'),
      Q('At pendulum ends, PE is:', ['Maximum (intro)', 'Zero always', 'Negative always', 'Undefined'], 'A'),
      Q('At pendulum bottom, KE is often:', ['Maximum (intro)', 'Zero always', 'Equal to nuclear energy', 'Infinite'], 'A'),
      Q('Restoring force in SHM points:', ['Toward equilibrium', 'Away always', 'Sideways only', 'Zero always'], 'A'),
      Q('Examples of oscillation include:', ['Pendulum and mass-spring (intro)', 'Only chemical burn', 'Only photosynthesis', 'Only rust'], 'A'),
    ],
    '5-2': [
      Q('Wave speed equals:', ['fλ', 'f/λ', 'λ/f only wrong form', 'f + λ'], 'A'),
      Q('Energy travels in waves through:', ['Medium or field depending on type', 'Only vacuum for sound', 'Only steel for light', 'Only water for all'], 'A'),
      Q('Transverse wave particles move:', ['Perpendicular to propagation (intro)', 'Parallel always', 'Not at all', 'Only in vacuum'], 'A'),
      Q('Longitudinal sound particles move:', ['Parallel to propagation', 'Perpendicular always', 'In circles only always', 'Not at all'], 'A'),
      Q('Higher amplitude wave often carries:', ['More energy (intro)', 'Less energy always', 'No frequency', 'Zero speed'], 'A'),
    ],
    '5-3': [
      Q('Sound is a:', ['Longitudinal mechanical wave', 'Transverse wave in vacuum', 'Electromagnetic wave only', 'Static charge'], 'A'),
      Q('Pitch relates mainly to:', ['Frequency', 'Amplitude only', 'Speed in vacuum', 'Mass'], 'A'),
      Q('Loudness relates mainly to:', ['Amplitude', 'Frequency only', 'Wavelength only in vacuum', 'Density of student'], 'A'),
      Q('Echo is:', ['Reflection of sound', 'Refraction only', 'Absorption only', 'Creation of vacuum'], 'A'),
      Q('Speed of sound is generally highest in:', ['Solids among common states (intro trend)', 'Vacuum', 'Same in all media always', 'Only gases always highest'], 'A'),
    ],
    '5-4': [
      Q('Ultrasound uses:', ['High-frequency sound waves', 'Only visible light', 'Only X-rays always', 'Only magnets'], 'A'),
      Q('Sonar measures:', ['Distance using sound echoes', 'Only color', 'Only mass of Earth', 'Only pH'], 'A'),
      Q('Noise pollution can:', ['Harm hearing with loud exposure', 'Improve hearing always', 'Remove waves', 'Stop gravity'], 'A'),
      Q('Musical instruments change pitch by:', ['Changing frequency of vibration', 'Removing amplitude', 'Eliminating medium', 'Stopping time'], 'A'),
      Q('Hearing protection is needed when:', ['Sound level is dangerously high', 'Sound is quiet', 'In vacuum', 'Never in labs'], 'A'),
    ],
    '6-0': [
      Q('Temperature measures:', ['Average kinetic energy of particles (intro model)', 'Total heat energy stored', 'Only color', 'Only force'], 'A'),
      Q('Heat flows from:', ['Hotter to cooler region', 'Cooler to hotter always', 'Only solids to gases always', 'Nowhere'], 'A'),
      Q('Heat and temperature are:', ['Different concepts', 'Exactly the same always', 'Both measured in newtons', 'Both vectors'], 'A'),
      Q('Thermal equilibrium means:', ['No net heat transfer', 'No particles move', 'Zero temperature only', 'Maximum pressure'], 'A'),
      Q('Touch feels hot when:', ['Energy transfers to your skin', 'Object has no molecules', 'Gravity increases', 'Sound increases'], 'A'),
    ],
    '6-1': [
      Q('Water freezes at on Celsius scale:', ['0°C (standard pressure)', '100°C', '273°C', '−273°C'], 'A'),
      Q('Kelvin scale starts at:', ['Absolute zero concept (0 K)', '0°C', '100°C', 'Room temperature only'], 'A'),
      Q('T(K) = T(°C) +', ['273 (intro conversion)', '100', '0', '459 only'], 'A'),
      Q('Thermometer measures:', ['Temperature', 'Heat directly as energy stored', 'Force', 'Current'], 'A'),
      Q('Two thermometers in same bath should read:', ['Same temperature at equilibrium', 'Always different', 'Zero always', 'Infinite'], 'A'),
    ],
    '6-2': [
      Q('Liquid-in-glass thermometer works by:', ['Thermal expansion of liquid', 'Chemical reaction always', 'Magnetism', 'Sound'], 'A'),
      Q('Thermocouple uses:', ['Voltage change with temperature (awareness)', 'Only water color', 'Only mass', 'Only friction'], 'A'),
      Q('Calibration marks:', ['Convert property change to temperature scale', 'Remove units', 'Stop expansion', 'Create heat'], 'A'),
      Q('Clinical thermometer range is designed for:', ['Human body temperatures', 'Only stars', 'Only furnaces only always', 'Only vacuum'], 'A'),
      Q('Reading thermometer should wait for:', ['Thermal equilibrium with object', 'Instant reading always', 'Shaking forever', 'No contact'], 'A'),
    ],
    '6-3': [
      Q('Thermal expansion means:', ['Size change with temperature', 'Mass change with color', 'Force change with sound', 'Charge change with light'], 'A'),
      Q('Linear expansion ΔL depends on:', ['α, L₀, and ΔT (intro)', 'Only mass', 'Only speed', 'Only frequency'], 'A'),
      Q('Bridge gaps allow for:', ['Summer expansion', 'Winter only contraction only story', 'Removing steel', 'Stopping traffic always'], 'A'),
      Q('Bimetallic strip bends because:', ['Metals expand differently', 'Gravity changes', 'Light refracts', 'Sound reflects'], 'A'),
      Q('Mercury thermometer must not be used if banned due to:', ['Toxicity concerns', 'Too much expansion only', 'No color', 'Too cheap'], 'A'),
    ],
    '6-4': [
      Q('Weather stations measure temperature to:', ['Forecast and warn public', 'Only paint roads', 'Only mine gold', 'Avoid data'], 'A'),
      Q('Industry uses temperature control for:', ['Processes and safety', 'Only music', 'Only grammar', 'Only fossils'], 'A'),
      Q('Refrigerators keep food safe by:', ['Removing heat from interior (intro)', 'Creating cold substance', 'Stopping molecules', 'Removing mass'], 'A'),
      Q('Fever is detected by:', ['Body temperature above normal', 'Only pulse color', 'Only weight', 'Only height'], 'A'),
      Q('Consistent units in reporting temperature help:', ['Compare data worldwide', 'Hide trends', 'Remove science', 'Avoid thermometers'], 'A'),
    ],
  };

  if (banks[key]) return banks[key];
  return [
    Q(`Which statement best matches Grade 9 Physics topic ${key}?`, ['Uses syllabus definitions and examples', 'Ignores units', 'Only memorizes names', 'Avoids measurement'], 'A'),
    Q('In MCQs, prefer answers that:', ['Match classroom definitions', 'Contradict Newton’s laws without context', 'Ignore SI units', 'Use “always/never” without evidence'], 'A'),
    Q('Vectors include direction for quantities such as:', ['Velocity and force', 'Speed only always', 'Mass only', 'Temperature only'], 'A'),
    Q('Safety in school labs includes:', ['Goggles and careful equipment use', 'Tasting unknown liquids', 'Running with glassware', 'Ignoring instructions'], 'A'),
    Q('Physics supports development through:', ['Energy, transport, and health technologies', 'Only astrology', 'Only sports scores', 'Ignoring evidence'], 'A'),
  ];
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
        `Entrance-exam style item (Grade 9 Physics), aligned to “${topicName}”.`,
    };
  });
}

module.exports = {
  buildExamQuestionsForTopic,
  EC_YEARS,
};
