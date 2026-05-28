/**
 * Five entrance-exam-style MCQs per Grade 10 Physics topic (Natural stream).
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  const key = `${c}-${t}`;
  const banks = {
    '0-0': [
      Q('A scalar quantity has:', ['Magnitude only', 'Magnitude and direction', 'No units', 'Only direction'], 'A'),
      Q('Which pair is vector and scalar respectively?', ['Velocity and speed', 'Speed and distance both vectors', 'Mass and weight both scalars', 'Time and displacement both vectors'], 'A'),
      Q('Displacement differs from distance because:', ['It is vector from start to end', 'It is always longer', 'It has no units', 'It ignores direction'], 'A'),
      Q('Force is a vector because it has:', ['Direction and magnitude', 'Only color', 'Only mass', 'Only temperature'], 'A'),
      Q('Grade 10 vectors are used to analyze:', ['Forces and motion in 2D (intro)', 'Only chemical bonds', 'Only plant growth', 'Only grammar'], 'A'),
    ],
    '0-1': [
      Q('Vectors can be drawn as:', ['Arrows with length and direction', 'Only numbers without units', 'Only circles', 'Only colors'], 'A'),
      Q('Component form helps because:', ['It simplifies addition on axes', 'It removes units', 'It stops experiments', 'It eliminates direction'], 'A'),
      Q('Unit vectors show:', ['Direction along an axis', 'Only mass', 'Only charge', 'Only heat'], 'A'),
      Q('Arrow length on a diagram often represents:', ['Magnitude when scaled', 'Time always', 'Temperature', 'Charge only'], 'A'),
      Q('Representing a vector needs:', ['A coordinate system choice', 'No reference frame', 'Only words', 'Only history dates'], 'A'),
    ],
    '0-2': [
      Q('Vector addition uses:', ['Tip-to-tail or components', 'Only multiplication of masses', 'Only division of time', 'Random guessing'], 'A'),
      Q('A + (−B) represents:', ['Vector subtraction', 'Scalar product always', 'Zero always', 'Only heat flow'], 'A'),
      Q('Perpendicular components add using:', ['Pythagoras for magnitude (intro)', 'Only subtraction', 'Only tangent alone', 'Periodic table'], 'A'),
      Q('Resultant of two forces depends on:', ['Their magnitudes and angle', 'Only color', 'Only names', 'Only volume'], 'A'),
      Q('Opposite vectors of equal magnitude give resultant:', ['Zero', 'Double magnitude always', 'Infinite', 'Undefined always'], 'A'),
    ],
    '0-3': [
      Q('Parallelogram method finds:', ['Resultant of two vectors', 'Only scalar speed', 'Only density', 'Only pH'], 'A'),
      Q('Graphical addition requires:', ['A consistent scale', 'Only guessing', 'No units', 'Only chemical formulas'], 'A'),
      Q('Tip-to-tail order for A then B gives:', ['B drawn from tip of A', 'A from tip of B always reversed story', 'No diagram', 'Only circles'], 'A'),
      Q('Rough sketches help check:', ['Component algebra (intro)', 'Nuclear decay always', 'Only spelling', 'Only maps'], 'A'),
      Q('Direction of resultant is read from:', ['The constructed arrow (intro)', 'Only mass scale', 'Only thermometer', 'Only ammeter'], 'A'),
    ],
    '0-4': [
      Q('Resolving a vector splits it into:', ['Perpendicular components', 'Only scalars without direction', 'Only heat values', 'Only charge'], 'A'),
      Q('For angle θ from +x, x-component is often:', ['R cos θ (intro)', 'R sin θ always for x', 'R/θ', 'θ only'], 'A'),
      Q('Recombining components uses:', ['Pythagoras and trig (intro)', 'Only addition of masses', 'Only gas laws', 'Only redox'], 'A'),
      Q('Inclined plane problems often resolve weight into:', ['Parallel and perpendicular to plane', 'Only vertical always useless', 'Only horizontal only', 'Only magnetic parts'], 'A'),
      Q('Wrong sin/cos choice causes:', ['Sign or component errors', 'Better accuracy always false', 'No effect ever', 'Changes atomic number'], 'A'),
    ],
    '1-0': [
      Q('Position is measured from:', ['A chosen origin', 'Only the Moon', 'Only final point', 'No reference'], 'A'),
      Q('Displacement Δx equals:', ['x_final − x_initial (intro)', 'Path length always', 'Speed × time always', 'Mass × g always'], 'A'),
      Q('Negative displacement means:', ['Opposite to positive axis direction', 'Impossible motion', 'Negative mass', 'Zero time'], 'A'),
      Q('Round trip to start gives displacement:', ['Zero', 'Equal to path always', 'Infinite', 'Undefined'], 'A'),
      Q('SI unit for displacement is:', ['Metre', 'Newton', 'Second', 'Ampere'], 'A'),
    ],
    '1-1': [
      Q('Average velocity equals:', ['Δx/Δt', 'Total distance/Δt always same false', 'Mass/Δt', 'Force/Δt'], 'A'),
      Q('Instantaneous velocity relates to x–t graph:', ['Slope at a point (intro)', 'Area under curve', 'Intercept only', 'Thickness'], 'A'),
      Q('Constant velocity implies acceleration:', ['Zero', 'Always 9.8 m/s²', 'Infinite', 'Undefined always'], 'A'),
      Q('Average speed may exceed |average velocity| when:', ['Path is not straight (intro)', 'Motion is always straight', 'Time is zero', 'Mass is zero'], 'A'),
      Q('Velocity is a vector; speed is:', ['Scalar magnitude of velocity (intro)', 'Also always a vector', 'Unitless', 'Measured in newtons'], 'A'),
    ],
    '1-2': [
      Q('Acceleration a equals:', ['Δv/Δt', 'Δx/Δt', 'F/m always without net force story', 'Work/t'], 'A'),
      Q('Deceleration usually means:', ['Acceleration opposite velocity (intro)', 'Acceleration zero', 'Speed always increasing', 'Only turning'], 'A'),
      Q('Uniform acceleration gives v–t graph:', ['Straight sloped line', 'Horizontal line always', 'Circle', 'Random scatter'], 'A'),
      Q('SI unit of acceleration is:', ['m/s²', 'm/s', 'N', 'J'], 'A'),
      Q('If v and a have same sign along a line, object:', ['Speeds up (intro)', 'Slows down always false', 'Stops time', 'Loses mass'], 'A'),
    ],
    '1-3': [
      Q('v = u + at applies when:', ['Acceleration is constant', 'Acceleration changes each instant always', 'Only vertical free fall excluded false', 'Only circular motion'], 'A'),
      Q('From rest with a = 3 m/s² for 4 s, v equals:', ['12 m/s', '7 m/s', '1.33 m/s', '48 m/s'], 'A'),
      Q('s = ut + ½at² with u = 0 gives:', ['s = ½at²', 's = at', 's = u/t', 's = a/t'], 'A'),
      Q('v² = u² + 2as avoids finding:', ['Time explicitly (sometimes)', 'Mass always required false', 'Origin choice false still need coords', 'Units'], 'A'),
      Q('Free fall near Earth uses g about:', ['9.8 m/s² downward (intro)', '0 m/s²', '98 m/s upward', '1 m/s² only'], 'A'),
    ],
    '1-4': [
      Q('Displacement from v–t graph uses:', ['Area under curve (intro)', 'Slope only', 'Intercept', 'Color'], 'A'),
      Q('Relative velocity along a line uses:', ['Vector subtraction idea (intro)', 'Mass addition', 'Only heat capacities', 'Only pressure law'], 'A'),
      Q('Uniform acceleration makes x–t curve:', ['Quadratic (intro)', 'Straight line always', 'Horizontal always', 'Hyperbola always wrong model'], 'A'),
      Q('Two trains same direction 20 m/s and 14 m/s; faster sees slower at:', ['6 m/s relative (intro)', '34 m/s always addition trap', '0 m/s', '14 m/s only'], 'A'),
      Q('Choosing + direction consistently helps:', ['Avoid sign mistakes', 'Remove need for units', 'Eliminate gravity', 'Make a always positive'], 'A'),
    ],
    '2-0': [
      Q('Elastic deformation:', ['Recovers shape when load removed (within limit)', 'Is always permanent', 'Only happens in gases', 'Ignores forces'], 'A'),
      Q('Plastic deformation means:', ['Permanent change after enough stress', 'Instant recovery always', 'Only in vacuum', 'No stress involved'], 'A'),
      Q('Hookes law region shows stress–strain as:', ['Approximately linear (intro)', 'Random always', 'Zero always', 'Only for fluids'], 'A'),
      Q('Beyond elastic limit, material may:', ['Not fully return to original shape', 'Always strengthen without limit', 'Lose all mass', 'Become chargeless'], 'A'),
      Q('Rubber band stretched lightly is mostly:', ['Elastic (intro)', 'Always plastic immediately', 'Magnetic', 'Radioactive'], 'A'),
    ],
    '2-1': [
      Q('Density ρ equals:', ['m/V', 'V/m', 'F/A', 'Work/time'], 'A'),
      Q('SI density unit is:', ['kg/m³', 'kg/m', 'N/m²', 'J/K'], 'A'),
      Q('Specific gravity compares density to:', ['Water (intro reference)', 'Vacuum', 'Air only always', 'Mercury always'], 'A'),
      Q('Same material samples have:', ['Same density (homogeneous assumption)', 'Random density always', 'Zero mass', 'No volume'], 'A'),
      Q('Object floats if average density is:', ['Less than fluid (intro)', 'Always greater', 'Always infinite', 'Zero only'], 'A'),
    ],
    '2-2': [
      Q('Stress is defined as:', ['Force per unit area', 'Area per force inverted', 'Mass per volume', 'Displacement per time'], 'A'),
      Q('Longitudinal strain is:', ['Fractional length change ΔL/L (intro)', 'Measured in pascals', 'Always zero', 'Same as density'], 'A'),
      Q('Tension stress pulls:', ['Material apart along axis (intro)', 'Only sideways always', 'Only charges', 'Only light'], 'A'),
      Q('Smaller cross-section at same force gives:', ['Larger stress', 'Smaller stress', 'Zero stress', 'No effect'], 'A'),
      Q('Stress units include:', ['Pa (N/m²)', 'm/s', 'kg only', 'C only'], 'A'),
    ],
    '2-3': [
      Q('Young modulus Y equals:', ['Stress/strain in elastic region (intro)', 'Strain/stress inverted', 'Density only', 'Velocity only'], 'A'),
      Q('Larger Y indicates:', ['Stiffer material (intro)', 'Softer always', 'Zero strength', 'Infinite strain always'], 'A'),
      Q('Steel versus rubber typically has:', ['Larger Young modulus for steel (intro)', 'Smaller for steel false', 'Same always', 'No measurable difference ever'], 'A'),
      Q('Slope of linear elastic stress–strain graph gives:', ['Young modulus (intro)', 'Density', 'Acceleration', 'Current'], 'A'),
      Q('Units of Y match:', ['Pressure-like units Pa (intro)', 'm/s only', 'kg only', 'Dimensionless always false'], 'A'),
    ],
    '2-4': [
      Q('First equilibrium condition:', ['ΣF = 0 (intro translation)', 'Στ = 0 only', 'Σp infinite', 'ΣW zero always false general'], 'A'),
      Q('Second equilibrium condition:', ['Στ = 0 (intro rotation)', 'ΣF infinite', 'Constant acceleration', 'No forces ever false'], 'A'),
      Q('Torque uses lever arm:', ['Perpendicular distance to line of action (intro)', 'Parallel distance only always wrong', 'Mass only', 'Volume only'], 'A'),
      Q('Balanced seesaw model has:', ['Equal and opposite torques about pivot (intro)', 'Infinite torque', 'No pivot', 'Only magnetic forces'], 'A'),
      Q('Couple can produce torque with:', ['Zero net force possible (intro)', 'Zero torque always', 'No forces', 'Only heat'], 'A'),
    ],
    '3-0': [
      Q('Like charges:', ['Repel', 'Attract always', 'Have no interaction', 'Cancel mass'], 'A'),
      Q('Conductors allow:', ['Charge movement (intro)', 'No electrons ever false', 'Only heat always', 'Only magnetism only'], 'A'),
      Q('Insulators resist:', ['Free charge flow (intro)', 'All forces', 'Gravity only', 'Light only'], 'A'),
      Q('Charging by friction transfers:', ['Electrons often (intro)', 'Protons in bulk always false', 'Neutrons mainly', 'Only photons'], 'A'),
      Q('Electroscope detects:', ['Presence of charge (intro)', 'Only mass', 'Only sound', 'Only heat only'], 'A'),
    ],
    '3-1': [
      Q('Coulomb force between like charges is:', ['Repulsive (intro)', 'Always attractive', 'Zero always', 'Independent of distance false'], 'A'),
      Q('Electric field describes:', ['Force per unit charge on a test charge (intro)', 'Only voltage', 'Only current', 'Only resistance alone'], 'A'),
      Q('Field lines point:', ['From + to − convention (intro survey)', 'From − to + always false convention note', 'Randomly', 'Only horizontally always'], 'A'),
      Q('Coulomb law force decreases with distance as:', ['About 1/r² (intro)', '1/r only always false', 'r² growth false', 'No change'], 'A'),
      Q('SI unit of charge is:', ['Coulomb', 'Ampere', 'Volt', 'Ohm'], 'A'),
    ],
    '3-2': [
      Q('Electric current is:', ['Charge flow per time (intro)', 'Voltage stored', 'Resistance only', 'Power only'], 'A'),
      Q('Ohm law states:', ['V = IR (intro)', 'V = I/R always inverted trap', 'I = VR false', 'R = VI false'], 'A'),
      Q('SI unit of current is:', ['Ampere', 'Volt', 'Ohm', 'Coulomb only charge'], 'A'),
      Q('Battery provides:', ['Potential difference (intro)', 'Infinite charge without energy story false', 'Only magnetism', 'Only light'], 'A'),
      Q('12 V across 6 Ω gives current:', ['2 A', '72 A', '0.5 A', '18 A'], 'A'),
    ],
    '3-3': [
      Q('Resistors in series have equivalent R:', ['Sum of individual R (intro)', 'Reciprocal sum trap parallel', 'Product always false', 'Zero always'], 'A'),
      Q('Resistors in parallel have 1/R_eq equal:', ['Sum of 1/R_i (intro)', 'Sum of R_i series trap', 'Zero', 'Product of R_i false'], 'A'),
      Q('Ammeter should be connected:', ['In series with branch (intro)', 'In parallel always wrong ideal', 'Only across battery always wrong', 'Nowhere'], 'A'),
      Q('Voltmeter measures:', ['Potential difference (intro)', 'Current directly always ammeter', 'Resistance without formula false', 'Charge only'], 'A'),
      Q('Two 4 Ω in parallel give:', ['2 Ω', '8 Ω series trap', '16 Ω', '0 Ω'], 'A'),
    ],
    '3-4': [
      Q('Electrical safety includes:', ['Avoid water near live circuits', 'Touch bare wires for testing', 'Overload sockets always', 'Ignore grounding'], 'A'),
      Q('Fuses and breakers protect by:', ['Stopping excessive current (intro)', 'Increasing voltage always', 'Removing resistance', 'Creating charge'], 'A'),
      Q('Earth wire helps:', ['Safety grounding (intro)', 'Increase shock risk false', 'Only decoration', 'Stop magnetism'], 'A'),
      Q('School project wiring should:', ['Follow teacher instructions and standards (intro)', 'Use any random wire', 'Ignore polarity always false', 'Skip insulation'], 'A'),
      Q('Low resistance human path increases:', ['Shock danger (intro)', 'Safety always false', 'Voltage of supply', 'Mass of person'], 'A'),
    ],
    '4-0': [
      Q('Like magnetic poles:', ['Repel', 'Attract always', 'Have no force', 'Cancel charge'], 'A'),
      Q('Magnetic field lines show:', ['Direction and strength pattern (intro)', 'Only temperature', 'Only mass', 'Only pressure'], 'A'),
      Q('Iron is attracted because:', ['Domains align in external field (intro survey)', 'It has no electrons false', 'It is an insulator always false', 'It loses mass'], 'A'),
      Q('Magnetic field is strongest:', ['Where lines are closest (intro)', 'Far from magnet always false', 'Only inside vacuum', 'Only at equator always false oversimplified'], 'A'),
      Q('Permanent magnets have:', ['North and south poles (intro)', 'Only north alone', 'Only electric charge', 'No field'], 'A'),
    ],
    '4-1': [
      Q('Earth behaves roughly like:', ['A giant magnet (intro model)', 'Uncharged mass only', 'Only electric field', 'No field'], 'A'),
      Q('Compass needle aligns with:', ['Earth magnetic field (intro)', 'Only gravity', 'Only wind', 'Only sound'], 'A'),
      Q('Magnetic declination is:', ['Angle between geographic and magnetic north (survey)', 'Same as latitude always false', 'Zero everywhere false', 'Only at poles always false'], 'A'),
      Q('Migrating animals may use:', ['Earth field for navigation (survey)', 'Only taste', 'Only pressure only', 'Only chemical bonds'], 'A'),
      Q('Compass points approximately:', ['North (intro)', 'East always', 'Random direction', 'Vertical always false'], 'A'),
    ],
    '4-2': [
      Q('Oersted showed:', ['Current creates magnetic field (intro history)', 'Only static charge makes B always incomplete', 'No link E and B false', 'Only gravity'], 'A'),
      Q('Right-hand rule helps find:', ['Field direction around straight wire (intro)', 'Mass direction', 'Heat flow', 'Sound pitch'], 'A'),
      Q('Stronger current in wire usually gives:', ['Stronger magnetic field (intro)', 'Weaker field false', 'Zero field', 'Only electric field disappears'], 'A'),
      Q('Solenoid with many turns can:', ['Produce strong uniform field inside (intro)', 'Remove all magnetism', 'Only create heat', 'Stop current'], 'A'),
      Q('Electromagnet advantage is:', ['Field can be switched on/off (intro)', 'Permanent always false', 'No energy use false', 'Only works in vacuum'], 'A'),
    ],
    '4-3': [
      Q('Moving charge in magnetic field can experience:', ['Magnetic force (intro)', 'Only gravitational force always false', 'No force ever false', 'Only heat'], 'A'),
      Q('Force on parallel current wires:', ['Attract or repel depending on directions (intro)', 'Always zero', 'Always perpendicular to Earth only false', 'Only affects insulators'], 'A'),
      Q('Lorentz force idea links:', ['Charge motion and B field (survey)', 'Only mass and volume', 'Only temperature', 'Only pressure'], 'A'),
      Q('Motor uses magnetic force to:', ['Produce rotation (intro)', 'Only store charge', 'Only melt wire always false', 'Stop motion'], 'A'),
      Q('Current direction matters for force because:', ['Force direction depends on I and B (intro)', 'Force is always zero', 'Only voltage matters alone false', 'Only resistance matters alone'], 'A'),
    ],
    '4-4': [
      Q('Electric motor converts:', ['Electrical to mechanical energy (intro)', 'Mechanical to nuclear', 'Only heat to light', 'Only sound to mass'], 'A'),
      Q('Loudspeaker uses:', ['Coil and magnet interaction (survey)', 'Only chemical reaction', 'Only friction heating', 'Only optics'], 'A'),
      Q('MRI uses strong:', ['Magnetic fields and radio waves (survey)', 'Only visible light', 'Only sound waves in vacuum false', 'Only static charge alone'], 'A'),
      Q('Magnetic stripe cards store data using:', ['Magnetic domains patterns (survey)', 'Only gravity', 'Only pressure', 'Only X-rays always false'], 'A'),
      Q('Electromagnets in scrap yards lift:', ['Ferromagnetic materials (intro)', 'All plastics', 'All wood', 'All gases'], 'A'),
    ],
    '5-0': [
      Q('EM waves include:', ['Radio, microwave, visible, X-ray (intro)', 'Only sound', 'Only water waves', 'Only seismic always false'], 'A'),
      Q('All EM waves in vacuum travel at:', ['Same speed c (intro)', 'Different speeds always false vacuum', 'Zero speed', 'Sound speed'], 'A'),
      Q('Higher frequency EM radiation has:', ['Shorter wavelength (intro c = fλ)', 'Longer wavelength always false', 'No energy story false', 'Zero speed'], 'A'),
      Q('Microwaves are used for:', ['Heating food and communication (survey)', 'Only visible sight', 'Only ultrasound medical false', 'Only sonar'], 'A'),
      Q('UV can cause:', ['Skin damage (survey safety)', 'Only plant growth always false', 'No effects ever false', 'Only magnetism'], 'A'),
    ],
    '5-1': [
      Q('Law of reflection:', ['Angle i = angle r', 'Angle i = 2r always false', 'No angles', 'Only refraction'], 'A'),
      Q('Refraction occurs when light:', ['Changes speed crossing boundary (intro)', 'Stops always false', 'Only reflects always false', 'Loses mass'], 'A'),
      Q('Normal is:', ['Perpendicular to surface (intro)', 'Parallel to surface always false', 'Same as incident ray', 'Only in lenses false'], 'A'),
      Q('Denser medium often bends light:', ['Toward normal on entering (intro survey)', 'Away always false general', 'Not at all', 'Only backward'], 'A'),
      Q('Mirrors use:', ['Reflection (intro)', 'Only refraction', 'Only diffraction alone', 'Only polarization only false'], 'A'),
    ],
    '5-2': [
      Q('Converging lens can:', ['Focus parallel rays (intro)', 'Remove all light', 'Only reflect', 'Only absorb always'], 'A'),
      Q('Real image can be projected on:', ['A screen (intro)', 'Only retina always false general', 'Only vacuum false', 'Nowhere ever false'], 'A'),
      Q('Focal length measures:', ['Lens focusing strength (intro)', 'Mass of lens', 'Temperature', 'Current'], 'A'),
      Q('Concave mirror can:', ['Focus light (intro)', 'Only diffuse always false', 'Stop reflection', 'Create charge'], 'A'),
      Q('Ray diagrams help find:', ['Image location (intro)', 'Atomic number', 'Gas pressure', 'Resistance only'], 'A'),
    ],
    '5-3': [
      Q('Eye lens adjusts shape to:', ['Focus on retina (intro)', 'Change color only', 'Produce magnetism', 'Measure current'], 'A'),
      Q('Nearsightedness often needs:', ['Diverging corrective lens (intro survey)', 'Converging always false general', 'No lens ever false', 'Only mirror'], 'A'),
      Q('Microscope uses:', ['Multiple lenses to magnify (intro)', 'Only one mirror', 'Only sound', 'Only magnet'], 'A'),
      Q('Telescope collects:', ['More light and magnifies distant objects (intro)', 'Only heat', 'Only charge', 'Only radio waves always false'], 'A'),
      Q('Retina function is to:', ['Detect light and send signals (intro)', 'Produce light', 'Store charge', 'Filter blood only false organ mix'], 'A'),
    ],
    '5-4': [
      Q('Primary additive colors of light:', ['Red, green, blue (intro)', 'Cyan, magenta, yellow paint subtractive trap', 'Black, white only', 'Only infrared'], 'A'),
      Q('Object color depends on:', ['Wavelengths reflected (intro)', 'Only absorbed heat always incomplete', 'Only mass', 'Only magnetism'], 'A'),
      Q('White light contains:', ['Many wavelengths (intro)', 'Only one frequency always false', 'No visible light false', 'Only UV'], 'A'),
      Q('Filters transmit:', ['Selected wavelengths (intro)', 'All wavelengths always', 'Only sound', 'Only charge'], 'A'),
      Q('Subtractive color mixing uses:', ['Pigments absorbing colors (intro survey)', 'Only RGB light addition trap', 'Only magnetism', 'Only refraction alone'], 'A'),
    ],
  };

  if (banks[key]) return banks[key];
  return [
    Q(`Which statement best matches Grade 10 Physics topic ${key}?`, ['Uses syllabus definitions and examples', 'Ignores units', 'Only memorizes names', 'Avoids measurement'], 'A'),
    Q('Vectors include direction for quantities such as:', ['Force and velocity', 'Speed only always', 'Mass only', 'Temperature only'], 'A'),
    Q('Ohm law relates:', ['Voltage, current, and resistance', 'Only mass and weight', 'Only heat and temperature', 'Only frequency and period'], 'A'),
    Q('Safety in electricity labs includes:', ['Insulated tools and dry hands', 'Touching live terminals', 'Overloading sockets', 'Ignoring teacher'], 'A'),
    Q('Physics supports technology through:', ['Electricity, magnetism, and optics applications', 'Only astrology', 'Only sports scores', 'Ignoring evidence'], 'A'),
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
        `Entrance-exam style item (Grade 10 Physics), aligned to “${topicName}”.`,
    };
  });
}

module.exports = {
  buildExamQuestionsForTopic,
  EC_YEARS,
};
