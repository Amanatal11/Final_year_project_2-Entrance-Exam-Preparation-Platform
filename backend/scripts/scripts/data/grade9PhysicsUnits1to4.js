/**
 * Grade 9 Physics curriculum — Units 1–4 (Natural stream, MoE Ethiopia outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Physics and human society',
    chapterDescription:
      'Nature and scope of physics, branches of the subject, physics in technology and society, history and scientists, inquiry skills and physics-related careers.',
    topics: [
      {
        topicName: 'Nature and scope of physics',
        topicDescription: 'What physics studies; physical quantities, laws, and models.',
        topicObjectives: [
          'Describe physics as the study of matter, energy, space, and time.',
          'Recognize that physical laws are tested by observation and experiment.',
          'Distinguish questions physics answers well from those left to other sciences at intro level.',
        ],
      },
      {
        topicName: 'Branches of physics',
        topicDescription: 'Overview of major fields such as mechanics, waves, electricity, and modern physics (survey).',
        topicObjectives: [
          'Name major branches of physics taught at introductory level.',
          'Match simple phenomena to a likely branch (mechanics, optics, etc.).',
          'See branches as connected parts of one discipline rather than unrelated topics.',
        ],
      },
      {
        topicName: 'Physics, technology and society',
        topicDescription: 'Applications in energy, transport, communication, health, and the environment.',
        topicObjectives: [
          'Give examples where physics supports technology and daily life.',
          'Discuss benefits and responsible use of technology (introductory).',
          'Relate energy, communication, transport, and environment to physical principles briefly.',
        ],
      },
      {
        topicName: 'History of physics and contributions of scientists',
        topicDescription: 'Key ideas and figures from classical to modern physics (awareness level).',
        topicObjectives: [
          'Outline major turning points (e.g., laws of motion, electromagnetism).',
          'Appreciate collaborative and cumulative nature of scientific progress.',
          'Name selected scientists responsibly as part of broader global and local histories.',
        ],
      },
      {
        topicName: 'Scientific inquiry and careers in physics',
        topicDescription: 'Observing, questioning, hypothesizing, experimenting, and reporting in physics class.',
        topicObjectives: [
          'Identify basic steps of scientific method as used in school labs.',
          'List example careers that use physics knowledge (survey).',
          'Practice safe ethical recording teamwork and citing sources honestly.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Scope', 'Physics mainly investigates:', ['Matter, energy, and their interactions', 'Only chemical formulas of compounds', 'Only names of plants', 'Only historical dates'], 0, 'Easy'),
      ex(1, 'Branch', 'Study of motion and forces is usually called:', ['Mechanics', 'Botany', 'Linguistics', 'Metallurgy only for ores'], 0, 'Easy'),
      ex(2, 'Tech', 'Many medical imaging tools depend on ideas from:', ['Physics (e.g., waves and radiation)', 'Only literature', 'Ancient calendars only', 'Only music theory'], 0, 'Easy'),
      ex(3, 'History', 'Newton is widely associated with:', ['Laws of motion and universal gravitation (intro)', 'Periodic table of elements', 'Cell theory', 'Evolution by natural selection'], 0, 'Easy'),
      ex(4, 'Inquiry', 'A testable prediction in an experiment is often called:', ['A hypothesis', 'A final law of nature always', 'A guess that cannot be checked', 'A poem'], 0, 'Easy'),
      ex(2, 'Energy', 'Solar panels convert sunlight mainly into:', ['Electrical energy (intro)', 'Chemical energy of wood growth only', 'Sound always', 'Only heat with no electricity'], 0, 'Medium'),
      ex(3, 'Electromagnetism', 'Study of electric and magnetic phenomena is part of:', ['Electromagnetism branch', 'Only zoology', 'Grammar', 'Only pure mathematics without experiments'], 0, 'Medium'),
      ex(4, 'Careers', 'Physics is useful in careers such as:', ['Engineering, medicine technology, teaching (examples)', 'Only poetry', 'Only farming without machines', 'None related to technology'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Nature and scope',
        problems: [
          P('Physics seeks patterns that can be:', ['Tested and refined with evidence', 'Accepted without checking', 'Only memorized from authority alone', 'Ignored in technology'], 'A'),
          P('A physical quantity is described with:', ['A number and a unit', 'Only a name', 'Only color', 'Only opinion'], 'A'),
          P('A scientific model in physics is:', ['A useful representation; may be revised', 'Always perfect forever', 'The same as guessing', 'Only decoration'], 'A'),
          P('Experiments are important because they:', ['Allow nature to answer specific questions', 'Replace all thinking', 'Always give wrong results', 'Avoid measurement'], 'A'),
          P('Energy and matter interactions are central in:', ['Much of physics', 'Only grammar', 'Only painting styles', 'Only myths'], 'A'),
          P('Units like meter and second reflect:', ['Agreed measurement standards', 'Random changes daily', 'Only local proverbs', 'Only computer brands'], 'A'),
          P('A law in physics summarizes:', ['Repeated observations under stated conditions (intro)', 'Only one lucky trial', 'Only politics', 'Only artistic taste'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — Branches',
        problems: [
          P('Optics deals mainly with:', ['Light and vision-related phenomena', 'Plant growth only', 'River flooding only', 'Grammar rules'], 'A'),
          P('Thermodynamics focuses on:', ['Heat, temperature, and energy transfer (intro)', 'Only planet orbits', 'Only sound pitch only', 'Only fossils'], 'A'),
          P('Acoustics is associated with:', ['Sound waves (intro)', 'Only optics', 'Only magnetism in wires', 'Only chemical bonding'], 'A'),
          P('Classical mechanics is often the starting branch for:', ['Motion, forces, and energy in everyday speeds', 'Subatomic quantum details only', 'Only biology taxonomy', 'Only literature'], 'A'),
          P('Modern physics topics may include:', ['Relativity or quantum ideas (awareness)', 'Only cooking recipes', 'Only road signs', 'Only grammar'], 'A'),
          P('Studying electric circuits belongs broadly to:', ['Electricity and magnetism', 'Only mechanics of falling apples', 'Only ocean fish', 'Only botany'], 'A'),
          P('Waves on a string relate to:', ['Oscillations and wave behavior', 'Cell division', 'Poetry meter only', 'Plant photosynthesis only'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — Technology and society',
        problems: [
          P('Technology applies scientific knowledge to:', ['Solve practical problems', 'Avoid all experiments', 'Stop learning', 'Remove measurement'], 'A'),
          P('Mobile communication relies partly on:', ['Transmission and detection of electromagnetic signals (intro)', 'Only chalk boards', 'Only letters by horse', 'Only stone tools'], 'A'),
          P('Responsible use of technology should consider:', ['Safety, cost, and environmental impact (intro)', 'Only speed', 'Only advertising', 'No rules ever'], 'A'),
          P('Refrigeration uses physics ideas about:', ['Heat transfer and change of state (intro)', 'Only grammar', 'Only plant families', 'Only map drawing'], 'A'),
          P('Hydroelectric plants convert:', ['Gravitational energy of water to electricity (intro)', 'Sound directly to mass', 'Heat to fossils', 'Light to plants only'], 'A'),
          P('Physics supports transportation through:', ['Forces, materials, and energy conversion (examples)', 'Only folklore', 'Only handwriting', 'Only painting'], 'A'),
          P('Radiation in controlled medical use needs:', ['Safety standards and trained professionals', 'No planning', 'Random exposures always', 'Ignoring units'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — History and scientists',
        problems: [
          P('Galileo emphasized:', ['Observation and experiment in studying motion (intro)', 'Only ancient myths without checking', 'That Earth never moves in any model', 'That mass is unrelated to motion'], 'A'),
          P('Einstein is known for work on:', ['Special and general relativity (awareness)', 'Periodic table', 'First human heart surgery', 'Atomic number experiment rules only'], 'A'),
          P('Coulomb studied:', ['Forces between electric charges (intro)', 'Plant roots only', 'Speed of light only always', 'Only chemistry of acids'], 'A'),
          P('Faraday’s experiments advanced understanding of:', ['Electromagnetic induction (awareness)', 'Only plant cells', 'Only water freezing only', 'Only grammar'], 'A'),
          P('Scientific knowledge grows through:', ['Evidence, debate, and new measurements (intro)', 'Only memorization', 'Only secrecy forever', 'Guessing without tests'], 'A'),
          P('Technology can spread science ideas by:', ['Communication tools and education', 'Banning labs', 'Removing math', 'Stopping measurements'], 'A'),
          P('Many “laws” in textbooks began as:', ['Hypotheses tested again and again', 'Permanent guesses never checked', 'Only fiction stories', 'Only religious texts only'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — Inquiry and careers',
        problems: [
          P('A fair test often changes:', ['One independent variable at a time (intro)', 'All variables randomly at once', 'Only the conclusion first', 'Nothing measurable'], 'A'),
          P('Repeating measurements helps to:', ['Check reliability and reduce random errors (intro)', 'Waste time always', 'Avoid graphs', 'Remove units'], 'A'),
          P('Recording data honestly is important because:', ['Science builds on trustworthy evidence (intro)', 'Teachers never check', 'Random fake data is fine', 'Graphs must be pretty only'], 'A'),
          P('A career using physics could be:', ['Electrical technician (example)', 'Only fiction writer always', 'Only painting only', 'No STEM jobs'], 'A'),
          P('Laboratory safety rules exist to:', ['Protect people and equipment', 'Slow students only', 'Ban questions', 'Remove experiments'], 'A'),
          P('Peer review in science means:', ['Other experts check claims and methods (awareness)', 'Only one person judges forever', 'No evidence needed', 'Only social media votes'], 'A'),
          P('You use inquiry skills when you:', ['Ask questions, plan checks, interpret results (intro)', 'Only copy answers', 'Avoid thinking', 'Never measure'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Physical quantities',
    chapterDescription:
      'Physical quantities and measurement, SI units and prefixes, accuracy and significant figures, conversions and dimensional checks, safe laboratory work.',
    topics: [
      {
        topicName: 'Physical quantities and measurement',
        topicDescription: 'Base and derived quantities; standards; measurement as comparison.',
        topicObjectives: [
          'Distinguish base quantities and derived quantities (introductory list).',
          'Explain measurement as comparing an unknown to a standard.',
          'Select an appropriate instrument scale for a classroom measurement task.',
        ],
      },
      {
        topicName: 'SI units and prefixes',
        topicDescription: 'The International System; meter, kilogram, second; common prefixes.',
        topicObjectives: [
          'Write SI symbols correctly and use common prefixes (k, M, m, μ, etc.).',
          'Convert between prefixed units by powers of ten.',
          'Express very large or small values with scientific notation cleanly.',
        ],
      },
      {
        topicName: 'Accuracy, precision and significant figures',
        topicDescription: 'Random and systematic errors; reporting measurements meaningfully.',
        topicObjectives: [
          'Contrast accuracy and precision in basic contexts.',
          'Round results to a reasonable number of significant figures (intro).',
          'Recognize random versus systematic error in simple sketches and stories.',
        ],
      },
      {
        topicName: 'Unit conversion and dimensional analysis',
        topicDescription: 'Conversion factors; checking consistency of units in formulas (intro).',
        topicObjectives: [
          'Perform simple chained conversions using factors written as unity.',
          'Recognize when a proposed formula is dimensionally inconsistent (basic cases).',
          'Check cancelling units step-by-step while converting quantities.',
        ],
      },
      {
        topicName: 'Laboratory measurement and safety',
        topicDescription: 'Common instruments, good recording habits, and classroom safety rules.',
        topicObjectives: [
          'Use rulers, balances, and timers with sensible uncertainty awareness.',
          'Follow basic safety procedures in mechanics and heat activities.',
          'Organize notebooks reports spills and breakage according to classroom rules.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Quantity', 'Length in SI is measured in:', ['Meters', 'Only inches in science class', 'Degrees', 'Liters for length'], 0, 'Easy'),
      ex(1, 'Prefix', '1 km equals:', ['1000 m', '0.001 m', '100 m', '10 m'], 0, 'Easy'),
      ex(2, 'Precision', 'Precision refers to:', ['How close repeated readings cluster', 'Whether average matches true value every time same word', 'Only the color of the ruler', 'Only the title of the lab'], 0, 'Medium'),
      ex(3, 'Convert', '1000 g equals:', ['1 kg', '10 kg', '0.1 kg', '100 kg'], 0, 'Easy'),
      ex(4, 'Tool', 'Mass is often measured with:', ['A balance (intro context)', 'A protractor for angles', 'A barometer for mass', 'A stopwatch for mass'], 0, 'Easy'),
      ex(1, 'Micro', 'The prefix micro (μ) means:', ['One millionth', 'One thousand', 'One million times', 'One tenth'], 0, 'Medium'),
      ex(2, 'Sig figs', 'A volume written as 2.50 mL suggests about:', ['Three significant figures (intro)', 'Unlimited precision', 'One significant figure only', 'No unit needed'], 0, 'Medium'),
      ex(3, 'Dimension', 'Speed has dimensions of:', ['Length divided by time', 'Mass only', 'Force only always', 'Volume only'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Measurement basics',
        problems: [
          P('A standard in measurement is:', ['A defined reference quantity', 'Any random stick', 'Only ancient myths', 'A guess'], 'A'),
          P('Time base SI unit is:', ['Second (s)', 'Minute only in SI base', 'Hour as base', 'Year as SI base'], 'A'),
          P('Derived quantities come from:', ['Combining base quantities (intro)', 'Guessing names', 'Prefixes only without meaning', 'Ignoring units'], 'A'),
          P('Mass measures:', ['Amount of matter (intro to inertia later)', 'Always the same as weight in all contexts false', 'Only volume', 'Only speed'], 'A'),
          P('Temperature SI unit in science class is often:', ['Kelvin alongside °C awareness', 'Only “coldness” with no scale', 'Only invented units without zero meaning', 'Arbitrary only'], 'A'),
          P('Electric current base SI unit is:', ['Ampere (A)', 'Volt only', 'Ohm only', 'Joule only'], 'A'),
          P('Choosing an instrument should match:', ['Expected range and precision needed', 'Only the biggest tool', 'Only color', 'Only price sticker'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — SI and prefixes',
        problems: [
          P('Kilo (k) means:', ['×1000', '÷1000', '×10', '÷10'], 'A'),
          P('Milli (m) means:', ['÷1000', '×1000', '×10⁶', '÷10⁶'], 'A'),
          P('Mega (M) means:', ['×10⁶', '÷10⁶', '×10³', '÷10³'], 'A'),
          P('1 MW could be read as:', ['One megawatt (awareness)', 'One milliwatt only', 'One microwatt only', 'One meter only'], 'A'),
          P('Unit symbols are usually:', ['Lower case unless named after a person rule of thumb (survey)', 'Random capitals always', 'Always full words never symbols', 'Not standardized'], 'A'),
          P('2.5 km equals how many meters:', ['2500', '0.25', '25', '250'], 'A'),
          P('Scientific notation helps express:', ['Very large or very small values clearly', 'Only integers 1–10', 'Only fractions without powers', 'Impossible numbers'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — Accuracy and sig figs',
        problems: [
          P('Accuracy is about:', ['Closeness to accepted/true value (basic idea)', 'Repeatability only', 'Only instrument color', 'Sample handwriting'], 'A'),
          P('Random errors tend to:', ['Scatter readings around an average (intro)', 'Always shift one way only systematic story', 'Disappear if you never repeat', 'Increase forever always'], 'A'),
          P('Systematic errors may:', ['Shift all readings in one direction (intro)', 'Average to zero always', 'Never exist', 'Only occur in biology'], 'A'),
          P('Three sig figs means:', ['Three meaningful digits starting from first non-zero often (intro)', 'Exactly three decimals always false', 'Any numbers count', 'Zeros never count'], 'A'),
          P('Trailing zeros after a decimal may be:', ['Significant (context rules survey)', 'Never significant', 'Always infinitely uncertain', 'Ignored totally'], 'A'),
          P('Averaging many trials can reduce:', ['Random scatter impact (intro)', 'All systematic bias automatically always false', 'The need for units', 'The existence of errors'], 'A'),
          P('Recording 10.0 s differs from 10 s in implied:', ['Precision (intro)', 'Nothing ever', 'Color only', 'Only font size'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Conversion and dimensions',
        problems: [
          P('Multiply by a conversion factor equal to one to:', ['Change units without changing value', 'Change physics laws', 'Remove digits', 'Square errors only'], 'A'),
          P('1 m equals exactly:', ['100 cm', '10 cm', '1000 cm', '0.1 cm'], 'A'),
          P('If speed is m/s, distance divided by time has unit:', ['m/s consistent', 'm·s inconsistent like speed', 'kg only', 'J only'], 'A'),
          P('Checking dimensions can catch:', ['Some algebra mistakes in formulas (intro)', 'All spelling mistakes', 'Every random error', 'Only lab safety'], 'A'),
          P('3600 s equals:', ['1 h', '1 min', '10 h', '0.1 h'], 'A'),
          P('1 L is commonly:', ['1000 cm³ for water-related volume work (intro)', '1 m³', '10 cm³', '100 cm³'], 'A'),
          P('Writing units in calculations helps you:', ['See cancellations and catch mistakes', 'Look busy only', 'Avoid learning', 'Increase errors'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Lab safety',
        problems: [
          P('Before a lab you should:', ['Read instructions and note hazards (intro)', 'Ignore safety sheet', 'Work alone without telling teacher when unsafe', 'Random mixing'], 'A'),
          P('Eye protection is needed when:', ['Risk of splashes or flying objects (rule of class)', 'Never in any lab false', 'Only reading textbook', 'Only homework'], 'A'),
          P('Report spills or injuries:', ['Immediately to the teacher (intro)', 'Never', 'Next week only', 'Only if someone cries'], 'A'),
          P('Keep walkways clear mainly to:', ['Prevent trips and falls', 'Store bags randomly', 'Hide equipment', 'Block exits'], 'A'),
          P('Hot glassware looks:', ['Similar to cold glassware; handle with care (intro)', 'Always glowing obvious', 'Always blue', 'Always soft'], 'A'),
          P('Tie back long hair and loose clothing to reduce:', ['Fire and tangle hazards near flames or equipment', 'Fashion only', 'Gravity changes', 'Measurement error only'], 'A'),
          P('Return instruments cleaned because:', ['It maintains equipment and safety for the next class', 'Teachers enjoy washing always false', 'Dirt improves precision false', 'It is optional always'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 3: Motion in a straight line',
    chapterDescription:
      'Position, distance, displacement, speed and velocity, acceleration, graphs, and uniformly accelerated motion with introductory kinematic equations.',
    topics: [
      {
        topicName: 'Position, distance and displacement',
        topicDescription: 'Reference point, path length, and displacement as a vector idea along a line.',
        topicObjectives: [
          'Locate a particle on an axis using coordinates.',
          'Compute distance along a path and displacement including sign on a line.',
          'Interpret sign of displacement when direction or reference point changes.',
        ],
      },
      {
        topicName: 'Speed and velocity',
        topicDescription: 'Average vs instantaneous values; velocity as signed rate of change of position.',
        topicObjectives: [
          'Compute average speed from distance and time.',
          'Interpret velocity sign for motion along a chosen positive direction.',
          'Compare instantaneous and average quantities in qualitative terms.',
        ],
      },
      {
        topicName: 'Acceleration',
        topicDescription: 'Rate of change of velocity; speeding up, slowing down, and sign conventions.',
        topicObjectives: [
          'Calculate average acceleration from velocity change and time.',
          'Explain when acceleration opposes velocity for slowing down.',
          'Sketch simple v–t slopes for speeding up slowing down changing direction.',
        ],
      },
      {
        topicName: 'Motion graphs',
        topicDescription: 'Position–time and velocity–time graphs; slope and area interpretations (intro).',
        topicObjectives: [
          'Relate slope of x–t graph to velocity (introductory).',
          'Relate slope of v–t graph to acceleration; area under v–t to displacement (intro).',
          'Translate verbal motion stories into rough graph shapes and back.',
        ],
      },
      {
        topicName: 'Uniformly accelerated motion (kinematic equations intro)',
        topicDescription: 'Equations for constant acceleration along a line; sensible problem setup.',
        topicObjectives: [
          'Use v = u + at and s = ut + ½at² for simple straight-line cases taught in class.',
          'Choose correct signs for u, v, a relative to the coordinate axis.',
          'Identify when assuming constant acceleration is reasonable in a problem wording.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Displacement', 'If you walk 3 m east then 3 m west on a line, displacement is:', ['0 m', '6 m east', '6 m west', '3 m east'], 0, 'Easy'),
      ex(1, 'Velocity', 'Average velocity is displacement divided by:', ['Elapsed time', 'Speed only always', 'Mass', 'Acceleration only'], 0, 'Easy'),
      ex(2, 'Accel sign', 'A car slowing forward has acceleration:', ['Opposite to velocity sign (intro)', 'Always in motion direction', 'Always zero', 'Always positive'], 0, 'Medium'),
      ex(3, 'x-t graph', 'On a straight-line motion graph of x vs t, steeper positive slope means:', ['Greater positive velocity on average (intro)', 'Zero velocity', 'Lower speed always negative', 'Acceleration always'], 0, 'Medium'),
      ex(4, 'suvat', 'For u = 0, a = 2 m/s², t = 3 s, distance s = ½at² is:', ['9 m', '6 m', '18 m', '4.5 m'], 0, 'Medium'),
      ex(1, 'Speed', 'A runner covers 100 m in 20 s; average speed ≈', ['5 m/s', '0.2 m/s', '20 m/s', '80 m/s'], 0, 'Easy'),
      ex(3, 'v-t area', 'Area under a velocity–time graph often relates to:', ['Displacement (intro)', 'Mass', 'Force directly always', 'Temperature'], 0, 'Medium'),
      ex(4, 'Units', 'Acceleration SI unit is:', ['m/s²', 'm/s', 'm·s', 'N only'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Position and displacement',
        problems: [
          P('Distance is:', ['Path length (scalar)', 'Always same as displacement', 'Always negative', 'A vector always'], 'A'),
          P('Displacement on a line can be:', ['Positive, negative, or zero', 'Always positive', 'Always the full path length', 'Never zero'], 'A'),
          P('Choosing the +x direction is:', ['A coordinate choice; affects signs of vectors (intro)', 'Illegal in physics', 'Only for vertical motion', 'Only for sound'], 'A'),
          P('A round trip to the start has displacement:', ['Zero', 'Equal to total path always', 'Undefined', 'Always positive path only'], 'A'),
          P('Meters are appropriate SI units for:', ['Displacement and distance', 'Mass base unit choice confusion false kg', 'Current in amps base false', 'Temperature only'], 'A'),
          P('Average speed uses:', ['Total distance over total time', 'Displacement only in numerator always false average speed story', 'Only first second', 'Only final velocity'], 'A'),
          P('If coordinate increases along east, westward motion often shows:', ['Negative velocity (intro)', 'Positive distance only rule', 'Zero acceleration always', 'No time'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Speed and velocity',
        problems: [
          P('Velocity includes:', ['Direction information on a line or in symbols (intro)', 'Only temperature', 'Only how far', 'Only mass'], 'A'),
          P('Average velocity vector magnitude is not always equal to average speed because:', ['Path can curve or reverse; distance ≠ |displacement|', 'They are always equal false', 'Speed has no units false', 'Time stops'], 'A'),
          P('Constant velocity means:', ['Zero acceleration (intro)', 'Changing direction always false on straight line constant velocity', 'Zero speed', 'Increasing speed only'], 'A'),
          P('Instantaneous velocity is roughly:', ['Velocity at one instant; limit idea awareness', 'Always average over whole trip only', 'Only maximum speed', 'Only zero'], 'A'),
          P('On a highway, “100 km/h” often refers to:', ['Speed (magnitude) on a speedometer context', 'Always velocity with direction labeled', 'Acceleration', 'Displacement'], 'A'),
          P('SI unit of velocity is:', ['m/s', 'm/s²', 'N', 'kg'], 'A'),
          P('Moving backward on an axis if + is forward shows:', ['Negative velocity (intro)', 'Positive acceleration always', 'Zero displacement always', 'Impossible motion'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Acceleration',
        problems: [
          P('Acceleration is the rate of change of:', ['Velocity', 'Position only', 'Mass', 'Distance only'], 'A'),
          P('If velocity increases in the +x direction, acceleration is:', ['Positive (same direction) if speeding up in +x (intro)', 'Always negative', 'Zero always', 'Undefined'], 'A'),
          P('Deceleration in 1-D often means:', ['a and v have opposite signs when slowing (intro)', 'Acceleration must be zero', 'Speed is always zero', 'Time runs backward'], 'A'),
          P('Uniform acceleration means:', ['Constant a (intro lessons)', 'Constant velocity only', 'Zero distance traveled', 'Random a each second'], 'A'),
          P('A dropped object near Earth surface v changes roughly:', ['About 9.8 m/s each second in free fall intro magnitude survey', 'Constant speed always', 'Zero always', 'Independently of gravity false'], 'A'),
          P('If a = 0 m/s², then velocity is:', ['Constant in magnitude and direction on a line', 'Always zero false could be uniform motion nonzero', 'Always increasing', 'Undefined'], 'A'),
          P('Unit m/s² shows velocity change per:', ['Second (each second)', 'Meter only always false', 'Hour only', 'Kilogram'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — Motion graphs',
        problems: [
          P('On x vs t, a horizontal line means:', ['Zero velocity', 'Large acceleration always', 'Negative mass', 'Increasing displacement without time false'], 'A'),
          P('On v vs t, a horizontal line means:', ['Constant velocity (zero acceleration if truly flat and physical uniform)', 'Must be at rest false could be nonzero constant v', 'Impossible motion', 'Random speed'], 'A'),
          P('On v vs t, slope gives:', ['Acceleration (intro)', 'Displacement only directly without thinking false slope acceleration', 'Speed always the same as displacement', 'Time only'], 'A'),
          P('Curved x vs t indicates:', ['Changing velocity; acceleration present (intro awareness)', 'Constant velocity always false', 'Zero time', 'No motion'], 'A'),
          P('Instantaneous slope on x vs t estimates:', ['Instantaneous velocity (intro)', 'Average acceleration always', 'Force', 'Power'], 'A'),
          P('Negative velocity on v vs t if +axis is standard means:', ['Moving opposite to chosen + direction (intro)', 'Impossible', 'Always decelerating', 'Always accelerating forward'], 'A'),
          P('Area under v vs t curve gives displacement when:', ['Velocity signed properly (intro)', 'Always gives distance not displacement false careful', 'Units are ignored', 'Graph is never used'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — Kinematic equations intro',
        problems: [
          P('For constant acceleration, v = u + at relates:', ['Final, initial, acceleration, time (intro)', 'Only distances without time', 'Energy only', 'Circuits only'], 'A'),
          P('If u = 5 m/s, a = −2 m/s², t = 2 s, then v =', ['1 m/s', '9 m/s', '−1 m/s', '0 m/s'], 'A'),
          P('Using s = ut + ½at² requires:', ['Consistent units and sign for a (intro)', 'Zero u always', 'Always positive s', 'Time in hours only'], 'A'),
          P('Stopping distance increases strongly with speed because:', ['Kinetic energy ∝ v² (link preview) and also time to brake', 'Linear only always false', 'Speed irrelevant false', 'Friction disappears'], 'A'),
          P('If u = 0, distance in time t with uniform a goes like:', ['t² for s = ½at² (intro)', 't only always false quadratic term', 'Independent of a false', '1/t'], 'A'),
          P('Choosing + direction consistently matters because:', ['Signs of u, v, a must match your axis (intro)', 'Signs never matter', 'Physics changes with mood', 'Only scientists care'], 'A'),
          P('For vertical free fall near Earth, often use:', ['a = −g if up is + (model intro)', 'a = 0 always', 'a random', 'No gravity'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 4: Force, work, energy and power',
    chapterDescription:
      'Newton\'s laws, free-body diagrams, friction, and work, kinetic and potential energy, and power in simple mechanical contexts.',
    topics: [
      {
        topicName: 'Force and Newton\'s first law',
        topicDescription: 'Forces as pushes or pulls; inertia; equilibrium when net force is zero.',
        topicObjectives: [
          'Identify forces in everyday situations and name contact vs field forces (intro).',
          'State Newton’s first law and relate it to inertia.',
          'Recognize equilibrium as balanced forces yielding no change in velocity in an inertial description.',
        ],
      },
      {
        topicName: 'Newton\'s second law',
        topicDescription: 'F = ma in magnitude form for simple straight-line problems.',
        topicObjectives: [
          'Compute net force or acceleration for constant mass on a line.',
          'Use SI newton as unit of force.',
          'Relate apparent weight sensations qualitatively to vertical acceleration contexts.',
        ],
      },
      {
        topicName: 'Newton\'s third law and free-body diagrams',
        topicDescription: 'Action–reaction pairs on different bodies; drawing forces on one object.',
        topicObjectives: [
          'Recognize third-law pairs do not cancel because they act on different objects.',
          'Sketch simple free-body diagrams for straight-line situations.',
          'Isolate body of interest cleanly before applying ΣF = ma reasoning.',
        ],
      },
      {
        topicName: 'Friction',
        topicDescription: 'Static vs kinetic friction; basic factors affecting frictional force (intro).',
        topicObjectives: [
          'Distinguish static and kinetic friction qualitatively.',
          'Identify direction of friction opposing relative motion or attempted motion.',
          'Discuss heat and sound arising from dissipative rubbing qualitatively.',
        ],
      },
      {
        topicName: 'Work, kinetic and potential energy, and power',
        topicDescription: 'Work by a constant force; energy forms; conservation ideas; power as rate.',
        topicObjectives: [
          'Calculate work W = Fs cosθ in simple collinear cases.',
          'Relate power to work done per unit time; know basic energy units.',
          'Relate gravitational potential kinetic forms in idealized demos without calculus.',
        ],
      },
    ],
    exercises: [
      ex(0, 'N1', 'Newton’s first law is linked to:', ['Inertia', 'F = ma computation only', 'Action-reaction pair on same body', 'Heat transfer'], 0, 'Easy'),
      ex(1, 'F=ma', 'If mass 2 kg and net force 8 N, acceleration magnitude is:', ['4 m/s²', '16 m/s²', '0.25 m/s²', '10 m/s²'], 0, 'Easy'),
      ex(2, 'Third', 'A book pushes on a table and the table pushes on the book; these forces are:', ['A third-law pair (different objects)', 'A second-law pair on one object', 'Always balanced on the book alone false confusing', 'The same force twice'], 0, 'Medium'),
      ex(3, 'Friction', 'Kinetic friction tends to:', ['Oppose sliding motion (intro)', 'Speed up objects always', 'Act perpendicular to surfaces always', 'Disappear when stationary only false static exists'], 0, 'Easy'),
      ex(4, 'Work', 'Work by a constant force in the direction of displacement is:', ['F times s (scalar intro)', 'Always zero', 'mgh only always false general', 'Force plus distance added'], 0, 'Easy'),
      ex(1, 'Unit', 'SI unit of force is:', ['Newton (N)', 'Kilogram only', 'Joule', 'Watt'], 0, 'Easy'),
      ex(4, 'Energy', 'Kinetic energy depends on:', ['Mass and speed (intro)', 'Only height', 'Color', 'Temperature only'], 0, 'Easy'),
      ex(3, 'Static', 'Static friction can:', ['Match applied push up to a limit before sliding (intro)', 'Never exist', 'Always equal kinetic value exactly false', 'Only act on gases'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — First law and force',
        problems: [
          P('A force is:', ['A push or a pull', 'Always energy', 'Always heat', 'A type of atom'], 'A'),
          P('Inertia is:', ['Resistance to change in velocity (intro)', 'Friction only', 'Weight in kg', 'Power in watts'], 'A'),
          P('Net force zero on an object can mean:', ['Static equilibrium or uniform motion (inertial frame intro)', 'It must be at rest only false', 'No forces exist at all false', 'Acceleration is always 9.8 m/s²'], 'A'),
          P('Weight near Earth is mainly:', ['Gravitational pull by Earth (intro)', 'Same as mass numerically always false', 'Measured in kilograms always false', 'Friction'], 'A'),
          P('Contact forces require:', ['Touch between surfaces (for many everyday pushes)', 'No interaction', 'Always gravity only', 'Magnetism always'], 'A'),
          P('Equilibrium often analyzed by:', ['Summing forces to zero vectorially (intro)', 'Ignoring all forces', 'Doubling masses randomly', 'Deleting vectors'], 'A'),
          P('A free-body diagram focuses on:', ['One object and forces acting on it', 'All objects at once always', 'Only third-law partner forces false misleading', 'Energy bar charts only'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Second law',
        problems: [
          P('Newton’s second law: net F =', ['ma for many intro straight-line cases with constant mass', 'mv always', 'm/a always', 'zero always'], 'A'),
          P('1 N equals (SI definition context):', ['1 kg·m/s² (intro)', '1 kg·m/s', '1 kg only', '1 J'], 'A'),
          P('If net force doubles and mass stays same, acceleration:', ['Doubles', 'Halves', 'Stays same', 'Becomes zero'], 'A'),
          P('Mass resists:', ['Acceleration for a given applied net force (intro inertia link)', 'Gravity appearing in kg false', 'Measuring length', 'Using seconds'], 'A'),
          P('If several forces act, find net force by:', ['Vector sum on a line with signs (intro)', 'Adding speeds', 'Multiplying masses', 'Ignoring directions'], 'A'),
          P('An object speeding up has net force:', ['In the direction of acceleration (intro)', 'Opposite acceleration always false speeding up forward net forward', 'Zero always', 'Perpendicular always'], 'A'),
          P('In F = ma, units consistent in SI give a in:', ['m/s² if F in N and m in kg', 'cm/year² without thought', 'kg', 'N²'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Third law and FBD',
        problems: [
          P('Third-law pairs act on:', ['Two different objects', 'The same object always false', 'Only gases', 'Only the Moon'], 'A'),
          P('If A pulls B and B pulls A, those pulls are:', ['Equal magnitude and opposite direction (ideal models intro)', 'Always unequal', 'Always zero', 'Not forces'], 'A'),
          P('On a book resting on a table, upward normal force balances:', ['Downward weight for equilibrium on flat table vertical case (intro)', 'Friction always', 'Airlift randomly', 'Nothing'], 'A'),
          P('You cannot sum action and reaction to “zero net on system” for one object because:', ['They act on different bodies (intro)', 'They are not real', 'They point same way always false', 'Newton never said this false'], 'A'),
          P('A free-body diagram includes:', ['Forces on the chosen body, not forces it exerts on others as third-law focus', 'Every force in universe', 'Only motion', 'Only energy bars'], 'A'),
          P('Tension in a rope pulls:', ['Along the rope on attached objects (intro)', 'Always vertically down', 'Always outward from earth center only', 'Never exists'], 'A'),
          P('Normal force is perpendicular to:', ['The contact surface (ideal intro)', 'Motion always parallel false', 'Gravity direction always same false on slopes', 'Rope direction always'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — Friction',
        problems: [
          P('Kinetic friction appears when:', ['Surfaces slide relative to each other', 'Nothing moves ever', 'Only in vacuum without contact false', 'Only in water always'], 'A'),
          P('Static friction adjusts to:', ['Prevent slip until a maximum is exceeded (intro)', 'Always equal µN when moving false kinetic story separate', 'Zero always', 'Infinite always'], 'A'),
          P('Direction of friction typically opposes:', ['Relative motion or attempted relative motion (intro)', 'Gravity always upward false', 'Normal force always', 'Applied force always same direction false'], 'A'),
          P('Lubricants can reduce friction by:', ['Separating surfaces or changing interaction (intro)', 'Increasing roughness always', 'Removing normal force always', 'Increasing weight always'], 'A'),
          P('Wheels reduce sliding friction partly because:', ['Rolling involves different contact mechanics (intro)', 'They remove gravity false', 'They make weight zero false', 'They eliminate normal force false'], 'A'),
          P('Rougher surfaces often:', ['Increase friction compared to very smooth in many cases (not superfluid contexts)', 'Always have zero friction false', 'Have friction unrelated to roughness always false', 'Only affect sound'], 'A'),
          P('On horizontal pull at constant velocity, net horizontal force is approximately:', ['Zero if truly constant velocity and only horizontal fight kinetic friction equals pull intro', 'Always maximum static', 'Always equal to weight', 'Undefined'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Work and energy',
        problems: [
          P('Work by a constant force in direction of motion is:', ['W = Fs (intro collinear)', 'Always mgh', 'Always zero', 'Fv always'], 'A'),
          P('Joule (J) is unit of:', ['Energy or work (intro)', 'Force only', 'Power only', 'Acceleration'], 'A'),
          P('Kinetic energy is:', ['½mv² for point-like intro', 'mgh always', 'mv always', 'F/d'], 'A'),
          P('Gravitational potential energy near Earth often uses:', ['mgh with chosen reference height (intro)', '½mv² only', 'Always absolute not reference dependent false intro uses reference', 'Power'], 'A'),
          P('Power is:', ['Work done per unit time (intro)', 'Force times distance is work, not power', 'Energy always', 'Mass times speed only'], 'A'),
          P('Watt (W) relates to:', ['Joules per second (intro)', 'Newtons per meter confusion false', 'Kilograms per liter', 'Meters per second only'], 'A'),
          P('In simple mechanical processes, energy can change form but:', ['Total may be conserved if you account for heat/sound (intro awareness)', 'Always disappears completely', 'Doubles without reason', 'Only kinetic exists'], 'A'),
        ],
      },
    ],
  },
];
