/**
 * Grade 11 Physics curriculum — Units 1–4 (Ethiopia MoE outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Physics and Human Society',
    chapterDescription:
      'Why physics matters in daily life and technology, the physics community, how knowledge is built, careers, and emerging trends.',
    topics: [
      {
        topicName: 'Importance of physics',
        topicDescription:
          'Physics as the foundation for engineering, medicine, energy, and everyday technologies.',
        topicObjectives: [
          'Explain how physics principles underpin common technologies and natural phenomena.',
          'Relate physics literacy to informed citizenship on energy, climate, and safety issues.',
        ],
      },
      {
        topicName: 'Roles of the physics community',
        topicDescription:
          'Researchers, educators, engineers, technicians, and policy advisors who apply and communicate physics.',
        topicObjectives: [
          'Identify key roles within the physics community and how they collaborate.',
          'Describe how peer review and professional ethics support reliable knowledge.',
        ],
      },
      {
        topicName: 'How physics knowledge is developed',
        topicDescription:
          'Observation, hypothesis, experiment, model building, and revision through evidence.',
        topicObjectives: [
          'Outline the scientific method as applied in physics investigations.',
          'Distinguish between a model, a theory, and a law at introductory level.',
        ],
      },
      {
        topicName: 'Career pathways in physics',
        topicDescription:
          'Academic research, teaching, industry R&D, health physics, and interdisciplinary fields.',
        topicObjectives: [
          'List representative careers that use physics training at Grade 11 survey level.',
          'Connect school physics topics to skills valued in STEM workplaces.',
        ],
      },
      {
        topicName: 'Current trends in physics',
        topicDescription:
          'Renewable energy, quantum technologies, space exploration, and computational physics (survey).',
        topicObjectives: [
          'Recognize contemporary research areas influenced by classical and modern physics.',
          'Discuss how new instruments and computing extend what physicists can measure and predict.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Foundation', 'Physics helps explain everyday phenomena such as:', ['Only poetry rhythm', 'Motion, light, and electricity introductory', 'Grammar rules only', 'Historical dates only'], 1, 'Easy'),
      ex(1, 'Community', 'Peer review in science mainly aims to:', ['Hide results from public', 'Check quality and validity of research introductory', 'Replace experiments with opinions', 'Eliminate all disagreement'], 1, 'Easy'),
      ex(2, 'Method', 'A testable prediction from a model is called a:', ['Hypothesis introductory survey', 'Final law always false', 'Random guess only irresponsible', 'Unit vector'], 0, 'Easy'),
      ex(3, 'Careers', 'Medical imaging technicians often rely on physics of:', ['Sound and electromagnetic waves introductory survey', 'Ancient mythology', 'Plant taxonomy only', 'Pure grammar'], 0, 'Easy'),
      ex(4, 'Trends', 'Solar panels convert sunlight using principles related to:', ['Photovoltaic effect introductory survey', 'Nuclear fission in the panel false everyday context', 'Buoyancy only false', 'Friction heating only false'], 0, 'Easy'),
      ex(2, 'Theory', 'A scientific theory is best described as:', ['A well-tested explanatory framework introductory', 'A mere guess without evidence false', 'A single measurement false', 'An unchangeable dogma false'], 0, 'Medium'),
      ex(1, 'Ethics', 'Responsible physicists should:', ['Report data honestly introductory', 'Fabricate results to win false', 'Ignore safety guidelines false', 'Refuse to share methods always false'], 0, 'Easy'),
      ex(4, 'Computing', 'Computer simulations in physics help:', ['Model complex systems introductory', 'Replace all experiments always false', 'Eliminate the need for units false', 'Ignore conservation laws false'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Importance of physics',
        problems: [
          P('Physics contributes to technology partly by:', ['Describing how forces and energy interact introductory', 'Replacing mathematics entirely false', 'Ignoring measurement false', 'Banning experiments false'], 'A'),
          P('Understanding electricity safety at home connects to:', ['Physics of circuits and power introductory', 'Only literature themes false', 'Ancient history alone false', 'Grammar parsing false'], 'A'),
          P('GPS navigation relies on physics concepts including:', ['Time measurement and signal travel introductory survey', 'Only chemical bonding false', 'Plant growth cycles false', 'Poetic meter false'], 'A'),
          P('Physics literacy helps citizens evaluate claims about:', ['Energy use and environmental impact introductory', 'Spelling contests only false', 'Fashion trends only false', 'Random superstition as equal to evidence false'], 'A'),
          P('Bridges and buildings are designed using:', ['Mechanics and material properties introductory', 'Only colour theory false', 'Astrology false', 'Unmeasured guesses false'], 'A'),
          P('Weather forecasting uses physics of:', ['Fluids, heat, and radiation introductory survey', 'Only coin tossing false', 'Pure geometry without data false', 'Ignoring atmosphere false'], 'A'),
          P('Medical X-rays involve physics of:', ['High-energy electromagnetic radiation introductory survey', 'Only sound waves in all imaging false oversimplified', 'Gravity alone false', 'Friction only false'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — Roles of the physics community',
        problems: [
          P('University researchers often:', ['Design experiments and publish findings introductory', 'Avoid measurement entirely false', 'Work without colleagues always false', 'Ignore peer feedback always false'], 'A'),
          P('Science teachers help by:', ['Translating physics ideas for learners introductory', 'Discouraging questions false pedagogy', 'Hiding SI units false', 'Rejecting all lab work false'], 'A'),
          P('Engineers apply physics to:', ['Build and optimize practical systems introductory', 'Eliminate safety standards false', 'Avoid calculations false', 'Ignore constraints false'], 'A'),
          P('Peer review means:', ['Independent experts evaluate research introductory', 'Students grade teachers only false context', 'Results stay secret always false', 'Experiments are banned false'], 'A'),
          P('Laboratory technicians support science by:', ['Maintaining equipment and procedures introductory', 'Fabricating data false ethics', 'Skipping calibration false', 'Avoiding records false'], 'A'),
          P('Science communicators aim to:', ['Explain findings clearly to wider audiences introductory', 'Confuse the public false', 'Hide uncertainty always false', 'Replace experiments false'], 'A'),
          P('Collaboration in physics projects often:', ['Combines specialized skills introductory interdisciplinary teams', 'Prevents any progress false', 'Eliminates need for evidence false', 'Forbids documentation false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — How physics knowledge is developed',
        problems: [
          P('The scientific method typically includes:', ['Observation, hypothesis, and testing introductory', 'Only opinion without data false', 'Ignoring anomalies always false', 'Refusing revision false'], 'A'),
          P('An experiment tests:', ['Predictions from a model introductory', 'Unfalsifiable claims false', 'Popular votes false', 'Random beliefs false'], 'A'),
          P('When data contradict a model, scientists:', ['Revise or replace the model introductory', 'Ignore all data false', 'Stop measuring false', 'Declare science finished false'], 'A'),
          P('A physical law often summarizes:', ['A pattern confirmed repeatedly introductory', 'One unrepeatable event false', 'Pure preference false', 'Unmeasured folklore false'], 'A'),
          P('Measurement uncertainty reminds us:', ['Results have limited precision introductory', 'All numbers are exact always false', 'Units do not matter false', 'Graphs are optional always false'], 'A'),
          P('Reproducibility means:', ['Others can repeat the experiment introductory', 'Only one person may ever test false', 'Results change randomly without cause false', 'Data need not be recorded false'], 'A'),
          P('Models in physics are:', ['Useful simplified representations introductory', 'Perfect copies of reality always false', 'Unrelated to evidence false', 'Fixed forever false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — Career pathways in physics',
        problems: [
          P('A physics degree can lead toward:', ['Research, teaching, or engineering introductory survey', 'Only unrelated jobs with zero STEM false oversimplified', 'Avoiding mathematics false', 'Banning technology false'], 'A'),
          P('Renewable energy sectors employ people who understand:', ['Energy conversion and efficiency introductory', 'Only ancient scripts false', 'Unrelated crafts only false', 'No measurement false'], 'A'),
          P('Telecommunications engineers use physics of:', ['Waves and signals introductory survey', 'Only plant biology false', 'Pure mythology false', 'Ignoring electromagnetism false'], 'A'),
          P('Medical physicists may work on:', ['Radiation therapy and imaging introductory survey', 'Only literary criticism false', 'Ignoring patient safety false', 'Unregulated devices false'], 'A'),
          P('Astrophysicists study:', ['Objects and radiation in the universe introductory', 'Only local weather false narrow', 'Grammar rules false', 'Unmeasured guesses false'], 'A'),
          P('Data analysis skills from physics help in:', ['Many STEM and tech careers introductory', 'No modern jobs false absurd', 'Avoiding computers false opposite trend', 'Rejecting statistics false'], 'A'),
          P('Internships and projects help students:', ['Explore real workplace applications introductory', 'Skip learning fundamentals false', 'Avoid teamwork false', 'Ignore safety false'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — Current trends in physics',
        problems: [
          P('Renewable energy research focuses partly on:', ['Improving solar and wind technologies introductory', 'Eliminating all measurement false', 'Ignoring conservation laws false', 'Rejecting engineering false'], 'A'),
          P('Space missions depend on:', ['Orbital mechanics and propulsion introductory survey', 'Only fortune telling false', 'Ignoring gravity false absurd', 'Unpowered random drift false'], 'A'),
          P('Quantum technologies explore:', ['Behavior at very small scales introductory survey', 'Only macroscopic baseballs false scope', 'Rejecting experiments false', 'Eliminating units false'], 'A'),
          P('Supercomputers assist physicists by:', ['Running large simulations introductory', 'Replacing thinking entirely false', 'Making units optional false', 'Hiding data false'], 'A'),
          P('Climate science uses physics of:', ['Energy balance in Earth systems introductory survey', 'Only poetry false', 'Ignoring heat transfer false', 'Unmeasured folklore false'], 'A'),
          P('Particle accelerators help study:', ['Fundamental constituents of matter introductory survey', 'Only kitchen recipes false', 'Grammar false', 'Unrelated art only false'], 'A'),
          P('Interdisciplinary fields combine physics with:', ['Biology, chemistry, and engineering introductory examples', 'Nothing else ever false absurd', 'Avoidance of math false', 'Rejecting evidence false'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Vectors',
    chapterDescription:
      'Classification of vectors, resolving into components, two-dimensional addition and subtraction, and introductory dot and cross products.',
    topics: [
      {
        topicName: 'Types of vectors',
        topicDescription:
          'Equal, opposite, parallel, antiparallel, unit, and null vectors; position and displacement vectors.',
        topicObjectives: [
          'Classify vectors by direction and magnitude relationships.',
          'Use unit vectors to write components in î and ĵ form introductory.',
        ],
      },
      {
        topicName: 'Resolution of vectors',
        topicDescription:
          'Splitting vectors into perpendicular components using trigonometry on a plane.',
        topicObjectives: [
          'Resolve a vector into x and y components given magnitude and angle.',
          'Reconstruct magnitude and direction from component pairs.',
        ],
      },
      {
        topicName: 'Vector addition in two dimensions',
        topicDescription:
          'Component-wise addition; graphical parallelogram and tip-to-tail methods in the plane.',
        topicObjectives: [
          'Add two or more vectors using components in two dimensions.',
          'Verify results with scaled graphical constructions introductory.',
        ],
      },
      {
        topicName: 'Vector subtraction and resultants',
        topicDescription:
          'Subtracting vectors via adding the negative; finding resultant of coplanar vectors.',
        topicObjectives: [
          'Compute A − B using components and interpret as A + (−B).',
          'Determine resultant magnitude and direction from perpendicular components.',
        ],
      },
      {
        topicName: 'Vector multiplication (dot and cross product intro)',
        topicDescription:
          'Scalar dot product and vector cross product definitions, geometric meaning, and simple applications.',
        topicObjectives: [
          'Evaluate dot products using A·B = AB cos θ and component form introductory.',
          'Recognize cross product magnitude AB sin θ and perpendicular direction right-hand rule survey.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Unit vector', 'A vector of magnitude 1 pointing along +x is:', ['î introductory unit vector', 'Zero vector', 'A scalar 1 only false', 'Cross product result always false'], 0, 'Easy'),
      ex(1, 'Components', 'For 20 N at 60° above +x, x-component is:', ['10 N introductory 20 cos60°', '20 N full magnitude trap', '17.3 N sin trap', '0 N'], 0, 'Medium'),
      ex(2, 'Add', 'If A = (3, 4) N and B = (1, −2) N, then A + B equals:', ['(4, 2) N introductory', '(2, 6) N', '(4, −2) N', '(3, −8) N'], 0, 'Easy'),
      ex(3, 'Subtract', 'Vector A − B equals:', ['A + (−B) introductory', 'B − A always false', 'Scalar difference only false', 'Zero always false'], 0, 'Easy'),
      ex(4, 'Dot', 'For perpendicular vectors, A·B equals:', ['0 introductory cos90°=0', 'AB always false needs parallel', '1 always false', 'A+B false'], 0, 'Medium'),
      ex(3, 'Resultant', 'Components Rx = 6 m, Ry = 8 m give resultant magnitude:', ['10 m introductory Pythagoras', '14 m sum trap', '2 m difference trap', '48 m product trap'], 0, 'Medium'),
      ex(2, 'Graphical', 'Tip-to-tail addition in 2D yields:', ['The resultant vector introductory', 'Always zero false', 'A scalar speed only false incomplete', 'Unit charge false'], 0, 'Easy'),
      ex(4, 'Cross intro', 'Cross product of parallel vectors has magnitude:', ['0 introductory sin0°=0', 'AB always false needs perpendicular component', '1 N always false', 'Infinite false'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Types of vectors',
        problems: [
          P('Two vectors are equal when:', ['Same magnitude and same direction introductory', 'Same magnitude only false', 'Same direction only false', 'Same colour false joke'], 'A'),
          P('The null vector has:', ['Zero magnitude introductory', 'Unit magnitude false', 'Undefined direction always false intro model zero vector okay', 'Infinite magnitude false'], 'A'),
          P('Antiparallel vectors point:', ['In opposite directions introductory', 'Same direction false', 'Only vertically false', 'Randomly without definition false'], 'A'),
          P('Position vector locates a point:', ['Relative to chosen origin introductory', 'Without any reference false', 'Only on y-axis false', 'As a scalar always false'], 'A'),
          P('Multiplying a vector by a positive scalar:', ['Changes magnitude keeps direction introductory same line', 'Always reverses direction false negative scalar case', 'Removes all components false', 'Converts to scalar permanently false'], 'A'),
          P('Unit vector purpose includes:', ['Specifying direction with magnitude 1 introductory', 'Measuring temperature false', 'Replacing mass units false', 'Eliminating angles false'], 'A'),
          P('Parallel vectors lie along:', ['The same line introductory same or opposite direction', 'Perpendicular lines always false', 'Only circles false', 'Random curves false'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — Resolution of vectors',
        problems: [
          P('Horizontal component of R at angle θ above +x uses:', ['R cos θ introductory adjacent', 'R sin θ opposite trap', 'R tan θ misuse', 'R/θ nonsense'], 'A'),
          P('Vertical component of the same vector uses:', ['R sin θ introductory opposite', 'R cos θ trap', 'R² false', 'Zero always false'], 'A'),
          P('Resolution means:', ['Splitting into perpendicular components introductory', 'Adding random scalars false', 'Integrating without limits false', 'Ignoring direction false'], 'A'),
          P('If Fx = 12 N and Fy = 5 N, magnitude is:', ['13 N introductory 5-12-13 triangle', '17 N sum trap', '7 N diff trap', '60 N product trap'], 'A'),
          P('Angle from components uses:', ['tan⁻¹(Fy/Fx) with quadrant care introductory', 'Only addition false', 'Only Fx alone false', 'Ignoring units false'], 'A'),
          P('On an incline, useful axes are often:', ['Along and perpendicular to the plane introductory', 'Only global east-west forced awkward sometimes', 'Circular only false', 'Without any reference false'], 'A'),
          P('Mixing sin and cos often happens when:', ['Angle measured from a different axis introductory caution', 'Using kelvin false', 'Ignoring gravity false unrelated', 'Using only distance false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — Vector addition in two dimensions',
        problems: [
          P('Adding vectors by components means:', ['Add x-components and y-components separately introductory', 'Multiply components false', 'Add magnitudes always false collinear same direction only special case', 'Ignore y-components false'], 'A'),
          P('If A = (2, 1) and B = (−1, 3), then A + B equals:', ['(1, 4) introductory', '(3, 4)', '(1, −2)', '(−2, 3)'], 'A'),
          P('Parallelogram rule applies to:', ['Coplanar vector addition introductory', 'Only scalars false', 'Only 3D always false intro 2D focus okay', 'Chemical bonding false'], 'A'),
          P('Commutative property A + B equals:', ['B + A introductory', 'A − B false', 'Zero always false', 'Scalar product false'], 'A'),
          P('3 m east plus 4 m north displacement magnitude is:', ['5 m introductory right triangle', '7 m path sum trap if asking displacement magnitude', '1 m false', '12 m false'], 'A'),
          P('Graphical addition requires:', ['Consistent scale introductory', 'Ignoring units false', 'Random arrow lengths false', 'Only one axis false'], 'A'),
          P('Adding multiple vectors sequentially uses:', ['Repeated tip-to-tail or component sums introductory', 'Division of magnitudes false', 'Cross product only false', 'Scalar subtraction only false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Subtraction and resultants',
        problems: [
          P('Vector subtraction A − B is equivalent to:', ['A + (−B) introductory', 'B + A false', 'A × B cross false context', '|A| − |B| scalars false'], 'A'),
          P('If A = (5, 0) and B = (2, 0), then A − B equals:', ['(3, 0) introductory', '(7, 0)', '(−3, 0)', '(3, 3)'], 'A'),
          P('Resultant of coplanar vectors gives:', ['Single vector equivalent effect introductory', 'Always zero false', 'Only scalar speed false incomplete', 'Charge value false'], 'A'),
          P('Opposite vectors sum to:', ['Zero vector introductory', 'Unit vector false', 'Infinite magnitude false', 'Scalar 2 false'], 'A'),
          P('Direction of resultant from Rx and Ry found using:', ['tan⁻¹(Ry/Rx) with quadrant check introductory', 'Only Rx false', 'Only Ry false', 'Ignoring signs false'], 'A'),
          P('Subtracting equal vectors yields:', ['Zero vector introductory', 'Doubled vector false', 'Perpendicular vector always false', 'Unit vector false'], 'A'),
          P('Equilibrium of forces in 2D means:', ['Vector sum of forces is zero introductory', 'Each force zero individually false', 'Only torques matter false statics broader', 'Mass is zero false'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Dot and cross product intro',
        problems: [
          P('Dot product A·B equals:', ['AB cos θ introductory scalar result', 'AB sin θ cross magnitude trap', 'A + B false', 'Perpendicular vector always false'], 'A'),
          P('Dot product of parallel vectors at θ = 0° is:', ['Maximum positive AB introductory', 'Zero false perpendicular case', 'Negative always false same direction positive', 'Undefined false'], 'A'),
          P('Cross product magnitude |A × B| equals:', ['AB sin θ introductory', 'AB cos θ dot trap', 'A + B false', 'Zero always false'], 'A'),
          P('Cross product direction follows:', ['Right-hand rule introductory survey', 'Left-hand mass rule false joke', 'Gravity only false', 'Random axis false'], 'A'),
          P('Work by constant force uses dot product because:', ['Only displacement along force contributes introductory W=F·d cosθ survey', 'Cross product gives work always false', 'Only angles matter without magnitudes false', 'Units are always kg false'], 'A'),
          P('Perpendicular vectors have dot product:', ['Zero introductory', 'Maximum AB false parallel case', 'Negative AB always false', 'One always false'], 'A'),
          P('Cross product of two vectors in a plane is:', ['Perpendicular to the plane introductory survey 3D result', 'Always in the plane false', 'Always zero false non-parallel case', 'A scalar false'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 3: Motion in One and Two Dimensions',
    chapterDescription:
      'Uniformly accelerated straight-line motion, motion graphs, projectile motion, vertical free fall, and uniform circular motion.',
    topics: [
      {
        topicName: 'Motion in a straight line (uniformly accelerated)',
        topicDescription:
          'Kinematic equations for constant acceleration along one axis; sign conventions.',
        topicObjectives: [
          'Apply v = u + at, s = ut + ½at², and v² = u² + 2as in one dimension.',
          'Interpret positive and negative signs for velocity and acceleration consistently.',
        ],
      },
      {
        topicName: 'Motion graphs',
        topicDescription:
          'Position–time, velocity–time, and acceleration–time graphs; slopes and areas.',
        topicObjectives: [
          'Relate slope of x–t graph to velocity and slope of v–t graph to acceleration.',
          'Find displacement from area under a velocity–time graph.',
        ],
      },
      {
        topicName: 'Projectile motion',
        topicDescription:
          'Independent horizontal and vertical motion; range, time of flight, and maximum height.',
        topicObjectives: [
          'Separate projectile motion into horizontal uniform and vertical accelerated components.',
          'Solve for time of flight and range on level ground introductory.',
        ],
      },
      {
        topicName: 'Vertical motion under gravity',
        topicDescription:
          'Free fall and vertical throws with acceleration g downward near Earth surface.',
        topicObjectives: [
          'Use g ≈ 9.8 m s⁻² downward in kinematic equations for vertical motion.',
          'Analyze motion at maximum height where vertical velocity is momentarily zero.',
        ],
      },
      {
        topicName: 'Uniform circular motion',
        topicDescription:
          'Constant speed along a circle; centripetal acceleration and period.',
        topicObjectives: [
          'Define centripetal acceleration as v²/r directed toward the center.',
          'Relate period T, frequency f, and speed v = 2πr/T introductory.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Kinematics', 'From rest with a = 3 m s⁻² for 4 s, displacement is:', ['24 m introductory s = ½at²', '12 m linear trap', '48 m', '7 m'], 0, 'Medium'),
      ex(1, 'Graph slope', 'Slope of velocity–time graph represents:', ['Acceleration introductory', 'Displacement false area', 'Mass false', 'Force always false needs mass'], 0, 'Easy'),
      ex(2, 'Projectile', 'Horizontal component of projectile velocity neglecting air drag:', ['Remains constant introductory', 'Increases linearly false', 'Becomes zero immediately false', 'Equals g always false'], 0, 'Easy'),
      ex(3, 'Free fall', 'At maximum height of vertical throw, vertical velocity is:', ['Zero introductory instantaneously', 'Maximum false', 'Equal to g false', 'Always negative false at top instant'], 0, 'Easy'),
      ex(4, 'Circular', 'Centripetal acceleration direction points:', ['Toward center of circle introductory', 'Tangent to path false velocity direction', 'Opposite velocity always false', 'Outward only false centrifugal frame trap'], 0, 'Easy'),
      ex(0, 'Sign', 'Braking car moving east with east positive has acceleration:', ['Negative introductory slowing', 'Positive always false', 'Zero always false', 'Undefined false'], 0, 'Medium'),
      ex(2, 'Range', 'Range of projectile on flat ground depends on:', ['Launch speed and angle introductory', 'Mass primarily false neglect drag intro', 'Colour false', 'Only height false incomplete'], 0, 'Medium'),
      ex(4, 'Period', 'Period T for one revolution relates to frequency by:', ['T = 1/f introductory', 'T = f false', 'T = v/r false incomplete', 'T = ar false nonsense'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Uniformly accelerated straight-line motion',
        problems: [
          P('Uniform acceleration means:', ['Acceleration constant over time introductory', 'Velocity constant false', 'Displacement constant false', 'Force zero always false'], 'A'),
          P('If u = 10 m s⁻¹, a = −2 m s⁻², t = 3 s, then v equals:', ['4 m s⁻¹ introductory v=u+at', '16 m s⁻¹ sign trap', '6 m s⁻¹', '4 m s⁻² units trap'], 'A'),
          P('From rest, distance in time t with acceleration a is:', ['s = ½at² introductory', 's = at false missing half', 's = vt with constant v false', 's = u/t false'], 'A'),
          P('Negative acceleration with positive velocity often means:', ['Slowing down introductory along axis', 'Speeding up always false opposite signs case', 'Rest always false', 'Turning at 90° false 1D'], 'A'),
          P('v² = u² + 2as is useful when:', ['Time is not given introductory', 'Acceleration varies wildly false model breaks', 'Motion is circular always false context', 'Mass is unknown always needed false kinematics first'], 'A'),
          P('SI unit of acceleration is:', ['m s⁻² introductory', 'm s⁻¹ velocity trap', 'N force trap', 'm displacement trap'], 'A'),
          P('Average acceleration equals:', ['Δv/Δt introductory', 'Δx/Δt false velocity', 'v/u false', 's/t false incomplete'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Motion graphs',
        problems: [
          P('Slope of position–time graph gives:', ['Instantaneous velocity introductory', 'Acceleration false vt slope', 'Displacement false ask area vt', 'Force false'], 'A'),
          P('Area under velocity–time graph gives:', ['Displacement introductory', 'Acceleration false slope', 'Mass false', 'Power false'], 'A'),
          P('Horizontal line on v–t graph means:', ['Constant velocity introductory zero acceleration', 'Constant acceleration false sloped line', 'Rest only if line at zero careful constant nonzero velocity also horizontal okay pick Constant velocity introductory phrase okay', 'Maximum displacement always false'], 'A'),
          P('Straight sloped line on v–t graph means:', ['Uniform acceleration introductory', 'Zero acceleration false horizontal', 'Circular motion false', 'Random motion false'], 'A'),
          P('Curved x–t graph indicates:', ['Changing velocity introductory non-zero acceleration', 'Zero velocity always false', 'Constant acceleration always false could be varying', 'No motion false'], 'A'),
          P('Zero slope on x–t at a point suggests:', ['Instantaneous rest introductory horizontal tangent', 'Maximum acceleration false', 'Maximum speed false opposite often', 'Negative mass false'], 'A'),
          P('Trap: acceleration is not read from:', ['Area under x–t graph introductory wrong graph', 'Slope of v–t graph false that gives acceleration correct source distractor mismatch Which is NOT obtained from slope of x–t pick area under x–t for displacement not acceleration phrase Which quantity is NOT given by slope of x–t Acceleration introductory distinguish'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Projectile motion',
        problems: [
          P('Projectile motion neglecting air resistance splits into:', ['Horizontal uniform and vertical accelerated introductory', 'Only vertical false incomplete', 'Only horizontal false', 'Circular only false'], 'A'),
          P('At launch angle θ, horizontal component of velocity is:', ['v cos θ introductory', 'v sin θ vertical trap', 'v tan θ misuse', 'g cos θ false'], 'A'),
          P('Time to reach maximum height depends on:', ['Initial vertical component introductory', 'Horizontal component only false', 'Mass primarily false intro', 'Colour false'], 'A'),
          P('Maximum height increases if:', ['Initial vertical speed increases introductory', 'Horizontal speed alone increases false same vertical needed', 'Launch angle 0° false no vertical', 'Gravity increases false decreases height'], 'A'),
          P('Range on level ground is maximum near:', ['45° launch angle introductory ideal vacuum level ground survey', '90° vertical false zero range', '0° false zero range', '180° impossible false'], 'A'),
          P('Horizontal range formula uses:', ['Horizontal velocity times time of flight introductory conceptual', 'Only vertical speed false', 'Only mass false', 'Only height at launch false incomplete'], 'A'),
          P('Neglecting air drag, horizontal acceleration is:', ['Zero introductory', 'g always false vertical', 'Increasing linearly false', 'v²/r false circular trap'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — Vertical motion under gravity',
        problems: [
          P('Near Earth surface, gravitational acceleration is about:', ['9.8 m s⁻² downward introductory', '9.8 m s⁻¹ velocity trap', 'Zero false', '98 m s⁻² ten times trap'], 'A'),
          P('Object thrown upward slows because:', ['Gravity acceleration opposes upward velocity introductory', 'Gravity disappears false', 'Mass increases false', 'Horizontal drag only false vertical context'], 'A'),
          P('Time up equals time down for same level catch introductory assumes:', ['Symmetric motion without air drag introductory ideal model', 'Different g each way false', 'Horizontal motion changes false vertical only', 'Mass cancels time always false still need ideal model okay'], 'A'),
          P('Displacement for free fall from rest in time t is:', ['s = ½gt² introductory downward positive choice consistent', 's = gt false missing half', 's = g/t false', 'Zero always false'], 'A'),
          P('Velocity after falling time t from rest is:', ['v = gt introductory', 'v = ½gt false', 'v = g/t false', 'Zero always false'], 'A'),
          P('Choosing downward as positive simplifies:', ['Sign of g and velocity in free fall introductory convention', 'Eliminating units false', 'Making acceleration zero false', 'Removing vectors false'], 'A'),
          P('At top of vertical toss, acceleration is:', ['Still g downward introductory velocity zero accel not zero', 'Zero false common misconception', 'Maximum upward false', 'Undefined false'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — Uniform circular motion',
        problems: [
          P('Uniform circular motion has:', ['Constant speed changing direction introductory', 'Zero acceleration false centripetal present', 'Constant velocity false direction changes', 'Zero centripetal force false needs net inward'], 'A'),
          P('Centripetal acceleration magnitude is:', ['v²/r introductory', 'vr false', 'v/r only incomplete missing square', 'r/v false'], 'A'),
          P('Centripetal acceleration direction is:', ['Toward center introductory', 'Tangent to path false velocity', 'Outward in inertial frame false common language trap', 'Zero always false'], 'A'),
          P('Period T is:', ['Time for one full revolution introductory', 'Frequency false inverse', 'Speed false', 'Half revolution only false'], 'A'),
          P('Frequency f relates to period by:', ['f = 1/T introductory', 'f = T false', 'f = 2πT false', 'f = v/r false incomplete'], 'A'),
          P('Speed on circle of radius r with period T is:', ['v = 2πr/T introductory', 'v = r/T false missing 2π', 'v = T/r false', 'v = πrT false'], 'A'),
          P('Doubling speed while radius fixed multiplies centripetal acceleration by:', ['4 introductory square dependence v²', '2 linear false', '8 false', '1 no change false'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 4: Dynamics',
    chapterDescription:
      'Newton laws, friction and equilibrium, work and energy, conservation of mechanical energy, and impulse with momentum.',
    topics: [
      {
        topicName: 'Force and Newton laws of motion',
        topicDescription:
          'Inertia, F = ma, action–reaction pairs, and free-body diagrams.',
        topicObjectives: [
          'State Newton three laws and apply F_net = ma along chosen axes.',
          'Draw and interpret free-body diagrams for simple systems.',
        ],
      },
      {
        topicName: 'Friction and equilibrium',
        topicDescription:
          'Static and kinetic friction, limiting friction, and translational equilibrium.',
        topicObjectives: [
          'Use f = μN for magnitude of friction at introductory level.',
          'Apply ΣF = 0 for objects in translational equilibrium.',
        ],
      },
      {
        topicName: 'Work, kinetic energy and potential energy',
        topicDescription:
          'Work by constant force, KE = ½mv², gravitational PE, and power.',
        topicObjectives: [
          'Calculate work W = Fd cos θ and relate to energy transfer.',
          'Compute kinetic and gravitational potential energy in standard problems.',
        ],
      },
      {
        topicName: 'Conservation of mechanical energy',
        topicDescription:
          'Interconversion of KE and PE when non-conservative work is negligible.',
        topicObjectives: [
          'Apply KE_i + PE_i = KE_f + PE_f for conservative systems introductory.',
          'Identify when friction or external pushes break mechanical energy conservation.',
        ],
      },
      {
        topicName: 'Impulse, momentum and collisions',
        topicDescription:
          'Linear momentum, impulse–momentum theorem, and elastic versus inelastic collisions survey.',
        topicObjectives: [
          'Define momentum p = mv and impulse J = FΔt = Δp introductory.',
          'Use conservation of momentum for isolated systems in one dimension.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Second law', 'Net force on 2 kg mass with acceleration 3 m s⁻² is:', ['6 N introductory F=ma', '5 N', '1.5 N inverted', '9 N'], 0, 'Easy'),
      ex(1, 'Friction', 'Kinetic friction magnitude often modeled as:', ['μ_k N introductory', 'μ_k mg always false normal not always mg', 'Zero always false', 'N/μ false'], 0, 'Easy'),
      ex(2, 'Work', 'Force 10 N over 5 m in direction of force gives work:', ['50 J introductory', '15 J sum trap', '2 J ratio trap', '0.5 J false'], 0, 'Easy'),
      ex(3, 'Energy', 'A 4 kg object at 3 m s⁻¹ has kinetic energy:', ['18 J introductory ½mv²', '12 J missing half', '36 J doubled trap', '6 J false'], 0, 'Medium'),
      ex(4, 'Momentum', 'Momentum of 2 kg mass moving at 5 m s⁻¹ is:', ['10 kg m s⁻¹ introductory', '7 kg m s⁻¹ sum trap', '2.5 kg m s⁻¹ false', '25 kg m s⁻¹ squared trap'], 0, 'Easy'),
      ex(0, 'Third law', 'Action–reaction forces act on:', ['Different bodies introductory', 'Same body always false', 'Only stationary objects false', 'Only fluids false'], 0, 'Easy'),
      ex(1, 'Equilibrium', 'Translational equilibrium requires:', ['Net external force zero introductory ΣF=0', 'Net torque zero only false rotation separate', 'Zero velocity always false can move constant v', 'Zero mass false'], 0, 'Easy'),
      ex(3, 'PE', 'Gravitational PE near Earth mgh uses:', ['Height relative to chosen reference introductory', 'Speed squared false KE', 'Only mass false incomplete', 'Friction coefficient false'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — Newton laws',
        problems: [
          P('Newton first law highlights:', ['Inertia and need for net force to change motion introductory', 'F=ma primarily false second law', 'Equal action reaction false third law', 'Gravity formula false'], 'A'),
          P('Newton second law states:', ['Net force equals mass times acceleration introductory', 'Force always equals weight false', 'Acceleration independent of mass false', 'Momentum is constant always false'], 'A'),
          P('Newton third law pairs are:', ['Equal in magnitude opposite in direction on different objects introductory', 'Both on same object false', 'Unequal always false', 'Only for gravity false'], 'A'),
          P('Free-body diagram shows:', ['All external forces on one object introductory', 'Only internal forces false', 'Only kinetic energy false', 'Only velocity false'], 'A'),
          P('If net force on object is zero, acceleration is:', ['Zero introductory', 'Maximum false', 'Always g false', 'Undefined false'], 'A'),
          P('Mass measures:', ['Inertia introductory resistance to acceleration', 'Force directly false', 'Speed false', 'Weight always same thing false'], 'A'),
          P('SI unit of force is:', ['Newton introductory', 'Joule energy trap', 'Watt power trap', 'kg mass trap'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Friction and equilibrium',
        problems: [
          P('Static friction can match applied force up to:', ['A maximum limiting value introductory', 'Zero always false', 'Infinite always false', 'Weight only false incomplete'], 'A'),
          P('Kinetic friction is often:', ['Less than maximum static friction introductory survey typical', 'Greater than static always false typical', 'Independent of normal false model depends on N', 'Always zero false'], 'A'),
          P('Normal force on horizontal floor supporting block equals:', ['Weight if no vertical acceleration introductory level case', 'Always zero false', 'Always mg sin θ false incline case different', 'Friction false'], 'A'),
          P('Translational equilibrium means:', ['ΣF = 0 introductory vector sum', 'All forces equal magnitude pairwise false', 'Object must be at rest always false can move uniform v', 'No friction present false'], 'A'),
          P('Coefficient of friction μ is:', ['Ratio relating friction to normal introductory dimensionless survey', 'Measured in newtons false', 'Always 1 false', 'Mass false'], 'A'),
          P('Increasing normal force typically:', ['Increases friction magnitude introductory proportional model', 'Eliminates friction false', 'Decreases friction false opposite model', 'Removes weight false'], 'A'),
          P('Net force zero on horizontal plane at rest implies:', ['Forces balance introductory including friction if present', 'Friction zero always false can be static balancing', 'Weight zero false', 'Normal zero false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Work and energy',
        problems: [
          P('Work by constant force at angle θ to displacement uses:', ['W = Fd cos θ introductory', 'W = Fd sin θ trap', 'W = ma false', 'W = mv false'], 'A'),
          P('Kinetic energy formula is:', ['½mv² introductory', 'mv false missing half', 'mgh false PE', 'Fd always false work'], 'A'),
          P('Gravitational potential energy mgh depends on:', ['Mass gravity and height introductory', 'Speed only false', 'Time only false', 'Friction only false'], 'A'),
          P('Power is defined as:', ['Work done per unit time introductory', 'Force times mass false', 'Energy times distance false', 'Momentum per mass false'], 'A'),
          P('Negative work by friction means:', ['Mechanical energy removed from system introductory', 'Energy created false', 'Object speeds up always false', 'No effect false'], 'A'),
          P('Doubling speed multiplies kinetic energy by:', ['4 introductory v squared', '2 linear false', '8 false', '1 no change false'], 'A'),
          P('SI unit of energy is:', ['Joule introductory', 'Newton force trap', 'Watt power trap', 'kg m s⁻¹ momentum trap'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — Conservation of mechanical energy',
        problems: [
          P('Mechanical energy often means:', ['Kinetic plus potential energy introductory survey', 'Heat only false', 'Chemical energy only false broader thermodynamics later', 'Momentum false'], 'A'),
          P('Conservation applies when:', ['Non-conservative work is negligible introductory ideal cases', 'Friction always present false breaks strict conservation', 'External motors always ignored false can add energy', 'Mass changes false intro fixed mass'], 'A'),
          P('Falling object neglecting air drag converts:', ['PE to KE introductory', 'KE to PE while falling false direction', 'Mass to energy false nuclear not intro', 'Momentum to charge false'], 'A'),
          P('If only gravity does work, total mechanical energy:', ['Stays constant introductory ideal', 'Always increases false', 'Always zero false', 'Equals force false'], 'A'),
          P('At bottom of frictionless slide starting from rest height h, speed relates to:', ['√(2gh) introductory energy method', 'gh missing factor 2 trap', '2gh squared speed false', 'Zero always false'], 'A'),
          P('Adding friction to a track:', ['Reduces final KE introductory energy dissipated', 'Increases mechanical energy false', 'Has no effect false', 'Eliminates gravity false'], 'A'),
          P('Choosing zero PE reference:', ['Affects PE values not physical speed differences introductory', 'Changes all physics false', 'Eliminates KE false', 'Forbids conservation false'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Impulse and momentum',
        problems: [
          P('Linear momentum is:', ['Mass times velocity introductory p=mv', 'Force times time only false impulse related', '½mv² false KE', 'mgh false PE'], 'A'),
          P('Impulse equals:', ['Change in momentum introductory J=Δp', 'Change in energy always false', 'Mass times acceleration only false over time gives impulse if constant force FΔt', 'Zero always false'], 'A'),
          P('Conservation of momentum applies when:', ['External impulse is negligible introductory isolated system', 'Friction always zero false external can exist careful isolated net external zero', 'Energy conserved always false separate principle', 'Mass zero false'], 'A'),
          P('Elastic collision introductory survey also conserves:', ['Kinetic energy introductory ideal elastic model', 'Only momentum false inelastic case', 'Only heat false', 'Charge false'], 'A'),
          P('In perfectly inelastic collision objects:', ['Stick together introductory model', 'Bounce with same KE false elastic', 'Ignore momentum false', 'Have zero mass false'], 'A'),
          P('Longer collision time with same Δp reduces:', ['Average force introductory airbags example', 'Impulse false impulse set by Δp', 'Mass false', 'Momentum change false fixed Δp'], 'A'),
          P('Two skaters pushing apart at rest show:', ['Equal and opposite momentum changes introductory', 'Only one moves false', 'Momentum not conserved false isolated', 'Energy always zero false can gain KE'], 'A'),
        ],
      },
    ],
  },
];
