/**
 * Grade 10 Physics curriculum — Units 1–3 (Ethiopia MoE outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Vector Quantities',
    chapterDescription:
      'Scalars versus vectors, representations, addition and subtraction, graphical methods, and resolving vectors into components.',
    topics: [
      {
        topicName: 'Scalars and vectors',
        topicDescription:
          'Magnitude-only quantities versus quantities that need magnitude and direction.',
        topicObjectives: [
          'Classify common physical quantities as scalar or vector.',
          'Explain why direction matters for displacement, velocity, and force.',
          'Compute magnitude of a vector from perpendicular components (introductory).',
        ],
      },
      {
        topicName: 'Vector representations',
        topicDescription:
          'Symbols, arrows, component form, and unit vectors on a plane (survey).',
        topicObjectives: [
          'Represent vectors using diagrams and ordered pairs or component notation.',
          'Relate arrow length and direction to magnitude and angle qualitatively.',
        ],
      },
      {
        topicName: 'Vector addition and subtraction',
        topicDescription:
          'Algebraic combination of components; vector subtraction as adding the opposite.',
        topicObjectives: [
          'Add and subtract vectors using components at introductory level.',
          'Interpret vector subtraction as A + (−B).',
        ],
      },
      {
        topicName: 'Graphical method of vector addition',
        topicDescription:
          'Triangle and parallelogram constructions; tip-to-tail rule.',
        topicObjectives: [
          'Construct resultants graphically using tip-to-tail or parallelogram methods.',
          'Estimate resultant direction from scaled diagrams.',
        ],
      },
      {
        topicName: 'Vector resolution',
        topicDescription:
          'Splitting a vector into perpendicular components using trigonometry.',
        topicObjectives: [
          'Resolve a vector into horizontal and vertical components.',
          'Recombine components to find magnitude and direction of the resultant.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Types', 'Which pair contains only scalars?', ['Displacement and velocity', 'Mass and temperature', 'Force and acceleration', 'Momentum and weight'], 1, 'Easy'),
      ex(0, 'Direction', 'Velocity is a vector mainly because it includes:', ['Mass only', 'Speed with direction', 'Temperature change', 'Energy stored'], 1, 'Easy'),
      ex(1, 'Notation', 'A vector shown by an arrow emphasizes:', ['Only colour', 'Magnitude and direction together', 'Only chemical bonds', 'Charge sign only'], 1, 'Easy'),
      ex(2, 'Components', 'If Ax = 3 m and Ay = 4 m, the magnitude is about:', ['5 m', '7 m', '12 m', '1 m'], 0, 'Medium'),
      ex(3, 'Graphical', 'Tip-to-tail addition builds:', ['The resultant vector', 'A scalar speed always', 'Unit charge only', 'Thermal expansion'], 0, 'Easy'),
      ex(4, 'Angle', 'For angle θ above the x-axis, the x-component is:', ['R sin θ', 'R cos θ', 'R / θ', 'θ / R'], 1, 'Medium'),
      ex(2, 'Subtract', 'Vector subtraction A − B equals:', ['A + (−B)', 'B − A always', 'A × B only', 'Zero always'], 0, 'Easy'),
      ex(4, 'Resolve', 'Splitting a force into perpendicular parts is called:', ['Resolution into components', 'Ionization', 'Fusion', 'Diffraction'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Scalars and vectors',
        problems: [
          P('Distance traveled along a path is commonly modeled as:', ['A displacement vector always', 'A scalar path length introductory', 'A torque', 'A magnetic flux'], 'B'),
          P('Displacement contrasts distance partly because:', ['It ignores endpoints', 'It links start to finish as a vector introductory', 'It measures temperature', 'It cannot be zero'], 'B'),
          P('Which quantity is a vector at introductory mechanics level?', ['Acceleration', 'Mass', 'Time', 'Temperature'], 'A'),
          P('Two vectors are equal when:', ['Magnitudes match only', 'Directions match only', 'Same magnitude and same direction introductory', 'Units differ'], 'C'),
          P('Instantaneous speed is best described as:', ['Direction of motion only', 'Magnitude of instantaneous velocity introductory', 'Average acceleration', 'Net force'], 'B'),
          P('Multiplying a vector by −1:', ['Removes magnitude', 'Reverses direction introductory', 'Converts it to mass', 'Always gives zero'], 'B'),
          P('Which pair lists two vectors?', ['Mass and density', 'Force and displacement introductory', 'Energy and work only scalars intro survey note work scalar energy scalar pick vectors pair', 'Volume and pressure'], 'B'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — Vector representations',
        problems: [
          P('Arrow length in a scaled diagram represents:', ['Temperature scale', 'Charge flow only', 'Vector magnitude introductory', 'Wave frequency'], 'C'),
          P('Unit vectors î and ĵ indicate:', ['Parallel axes always coincident false', 'Perpendicular coordinate directions introductory', 'Heat capacity directions nonsense', 'Friction directions only'], 'B'),
          P('Ordered pair notation (Vx , Vy) highlights:', ['Thermal expansion', 'Component decomposition introductory', 'Nuclear spin', 'Fluid density'], 'B'),
          P('To reverse a vectors direction without changing magnitude:', ['Add two vectors randomly', 'Multiply by −1 introductory idea', 'Divide by zero', 'Convert to kelvin'], 'B'),
          P('Parallel collinear vectors lie:', ['On perpendicular lines always false', 'Along one line same or opposite direction introductory', 'Only on circles', 'Only in fluids'], 'B'),
          P('Magnitude from components uses:', ['Addition |Vx|+|Vy| always equals magnitude false often', 'Pythagoras √(Vx² + Vy²) introductory', 'Only subtraction', 'Only sine without cosine'], 'B'),
          P('Doubling every component of a vector:', ['Halves magnitude', 'Doubles magnitude introductory', 'Rotates by 90° always false', 'Erases direction'], 'B'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — Addition and subtraction',
        problems: [
          P('Adding vectors with components means:', ['Multiply matching components', 'Add matching components introductory', 'Average temperatures', 'Swap axes blindly'], 'B'),
          P('If A = (2, 3) and B = (1, −4), then A + B equals:', ['(3, −1)', '(2, 12)', '(1, 7)', '(−1, 1)'], 'A'),
          P('The zero vector models:', ['Infinite displacement false', 'No net displacement introductory', 'Maximum kinetic energy always', 'Charge imbalance'], 'B'),
          P('Vector addition satisfies A + B equals:', ['B + A introductory commutative idea', 'A − B always false', 'Zero always false', 'Scalar AB product'], 'A'),
          P('Subtracting B from A is equivalent to:', ['B + A reversed wrongly', 'A + (−B) introductory', 'A × B cross idea skip grade noise pick dot false', 'Dividing vectors'], 'B'),
          P('3 m east then 4 m north yields displacement magnitude:', ['7 m path trap', '5 m introductory right triangle', '1 m', '12 m'], 'B'),
          P('Grouping parentheses for repeated vector sums:', ['Changes resultant generally false good models introductory associativity', 'Never matters introductory associativity', 'Applies only to temperature', 'Removes vectors'], 'B'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — Graphical addition',
        problems: [
          P('Parallelogram rule joins:', ['Two vectors tail-to-tail from a common point introductory', 'Three unrelated scalars', 'Heat and work only', 'Voltage loops only'], 'A'),
          P('Tip-to-tail chain places:', ['Second tail at first tip introductory', 'Both tails at origins random false', 'Vectors perpendicular always false', 'Arrows inside atoms humor reject'], 'A'),
          P('Inconsistent scaling leads to:', ['Better diagrams false opposite', 'Misleading angles and lengths introductory critique', 'Perfect accuracy false joke', 'Automatic SI conversion false'], 'B'),
          P('Resultant length measurement requires:', ['A stated scale introductory', 'Guessing only irresponsible intro pedagogy', 'Colour alone', 'Sound intensity'], 'A'),
          P('East vector plus west vector graphically can yield:', ['Always doubled east false', 'Small or zero resultant depending magnitudes introductory', 'Spin automatically false', 'Pressure rise'], 'B'),
          P('Careful drafting improves:', ['Graphical reliability introductory', 'Need to abandon algebra false opposite', 'Quantum uncertainty unrelated joke reject', 'Gravity strength'], 'A'),
          P('Sketch checking algebra helps:', ['Catch large mistakes introductory intuition', 'Eliminate practice false opposite', 'Replace SI units', 'Measure nuclear mass'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — Resolution',
        problems: [
          P('For 10 N at 30° above +x, horizontal component is:', ['10 sin30° N', '10 cos30° N introductory adjacent', '10 tan30° N', '30 N'], 'B'),
          P('Vertical component for the same vector is:', ['10 cos30° N', '10 sin30° N introductory opposite', '10/sin30° N misuse', '0 N'], 'B'),
          P('Rotating coordinate axes changes:', ['The physical vector arrow itself always false introductory viewpoint', 'Component numbers while vector stays same introductory framing', 'Mass units randomly', 'Gravity constant locally'], 'B'),
          P('On an incline, convenient axes are often:', ['Only horizontal world axes forced awkward sometimes', 'Along the plane and perpendicular to it introductory survey', 'Circular only false', 'Diagonal random'], 'B'),
          P('Recombining perpendicular components for magnitude uses:', ['Simple difference always wrong generally', 'Pythagoras introductory', 'Only tangent alone false', 'Periodic table'], 'B'),
          P('If Fx = 0 N and Fy = 12 N, resultant magnitude is:', ['0 N', '6 N', '24 N', '12 N introductory axis-aligned case'], 'D'),
          P('Mixing sin and cos roles commonly happens when:', ['Reading θ from a different reference axis introductory caution', 'Using kelvin', 'Ignoring gravity always false', 'Using only distance'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Uniformly accelerated motion',
    chapterDescription:
      'Displacement and velocity concepts, acceleration, constant-acceleration equations, graphs, and basic relative motion along one axis.',
    topics: [
      {
        topicName: 'Position and displacement',
        topicDescription:
          'Coordinates, path versus displacement, sign conventions on a line.',
        topicObjectives: [
          'Distinguish position from displacement using direction and sign.',
          'Compute displacement from initial and final positions.',
        ],
      },
      {
        topicName: 'Average and instantaneous velocity',
        topicDescription:
          'Δx/Δt versus slope of position–time graph at a point (introductory).',
        topicObjectives: [
          'Calculate average velocity along an interval.',
          'Interpret instantaneous velocity as limiting concept linked to graph slope.',
        ],
      },
      {
        topicName: 'Acceleration',
        topicDescription:
          'Rate of change of velocity; vector nature along one dimension.',
        topicObjectives: [
          'Define acceleration as Δv/Δt for uniform intervals introductory.',
          'Identify speeding up versus slowing down using velocity and acceleration signs.',
        ],
      },
      {
        topicName: 'Equations of motion with constant acceleration',
        topicDescription:
          'The standard kinematic formulas relating displacement, velocity, time, and acceleration.',
        topicObjectives: [
          'Select and rearrange v = u + at, s = ut + ½at², v² = u² + 2as with consistent symbols.',
          'Solve straightforward one-dimensional problems with constant acceleration.',
        ],
      },
      {
        topicName: 'Graphical representation and relative velocity in one dimension',
        topicDescription:
          'Position–time and velocity–time slopes and areas; simple relative velocity along a line.',
        topicObjectives: [
          'Extract displacement from velocity–time area under curve introductory.',
          'Solve relative velocity problems limited to collinear motion.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Displacement', 'A particle moves from x = 2 m to x = −3 m. Displacement is:', ['−5 m', '5 m', '1 m', '6 m'], 0, 'Easy'),
      ex(1, 'Average v', 'Δx = 40 m in Δt = 8 s gives average velocity:', ['5 m s⁻¹', '320 m s⁻¹', '0.2 m s⁻¹', '32 m s⁻¹'], 0, 'Easy'),
      ex(2, 'Accel sign', 'Velocity east positive and acceleration west implies:', ['Speeding up east', 'Slowing if moving east introductory', 'Must be at rest', 'Turning is undefined'], 1, 'Medium'),
      ex(3, 'Formula', 'From rest with a = 2 m s⁻² for t = 3 s, distance is:', ['9 m introductory s = ½at²', '6 m', '18 m', '3 m'], 0, 'Medium'),
      ex(3, 'v²', 'If u = 6 m s⁻¹ and a = −2 m s⁻² until rest, displacement magnitude is:', ['9 m introductory v²=u²+2as', '18 m', '3 m', '36 m'], 0, 'Medium'),
      ex(4, 'Graph', 'Uniform acceleration gives a velocity–time graph that is:', ['Horizontal line', 'Straight line with nonzero slope introductory', 'Circle', 'Hyperbola'], 1, 'Easy'),
      ex(4, 'Relative', 'Train A 12 m s⁻¹ east, train B 4 m s⁻¹ east; velocity of B relative to A (east positive) is:', ['8 m s⁻¹ east', '8 m s⁻¹ west introductory', '16 m s⁻¹ east', '4 m s⁻¹ east'], 1, 'Medium'),
      ex(1, 'Instant', 'Instantaneous velocity matches:', ['Slope of x–t graph introductory', 'Area under x–t graph', 'Curvature label vague', 'Zero always'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Position and displacement',
        problems: [
          P('Displacement depends on:', ['Total path shape only false introductory endpoints matter', 'Initial and final positions introductory', 'Average speed only', 'Colour of marker'], 'B'),
          P('Negative displacement on a line means:', ['Opposite direction to chosen positive axis introductory', 'Impossible motion false', 'Object has negative mass false joke reject', 'Heat loss'], 'A'),
          P('Round trip returning to start produces displacement:', ['Equal to path length false', 'Zero introductory', 'Always positive false', 'Undefined'], 'B'),
          P('Position is:', ['Location relative to a chosen origin introductory', 'Always identical to distance false', 'A temperature reading false', 'Only measured in seconds false'], 'A'),
          P('SI unit for displacement magnitude is:', ['Second', 'Newton', 'Metre introductory', 'Joule'], 'C'),
          P('Moving from +5 m to +1 m yields displacement:', ['+6 m', '−4 m introductory', '+4 m', '0 m'], 'B'),
          P('Path length can exceed displacement magnitude because:', ['Detours add distance along the path introductory', 'Displacement always equals path length false', 'Origin choice changes path length false', 'SI units differ false'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — Velocity',
        problems: [
          P('Average velocity is:', ['Total path length divided by time false speed vibe', 'Displacement divided by elapsed time introductory', 'Acceleration times mass false dynamics confusion', 'Always zero'], 'B'),
          P('Instantaneous velocity ties to x–t graph:', ['Slope introductory', 'Area under curve false vt graph displacement tie okay distinguish ask xt slope yes', 'Intercept only', 'Thickness of line joke'], 'A'),
          P('Average speed uses:', ['Total distance over time introductory scalar', 'Displacement over time always equals speed false sometimes differs', 'Force over mass false', 'Power over time false'], 'A'),
          P('Constant velocity implies:', ['Changing acceleration nonzero false', 'Zero acceleration introductory uniform motion model', 'Circular motion always false', 'Rest'], 'B'),
          P('Velocity sign indicates:', ['Direction along chosen axis introductory', 'Object colour', 'Material density', 'Wire resistance'], 'A'),
          P('If displacement is zero over an interval, average velocity is:', ['Undefined always false can be zero', 'Zero introductory possible round trip segment careful interval zero displacement yields zero average velocity yes', 'Infinite false', 'Always positive false'], 'B'),
          P('Units of velocity include:', ['m s⁻¹ introductory', 'kg m⁻³ false density', 'N s false impulse vibe', 'W false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — Acceleration',
        problems: [
          P('Acceleration measures:', ['Change of velocity over time introductory', 'Change of position over time false velocity vibe', 'Force directly always false mass matters dynamics later', 'Temperature rate'], 'A'),
          P('Deceleration wording often means:', ['Acceleration opposing velocity introductory slowing everyday language', 'Acceleration always positive false', 'Zero velocity always false', 'Uniform speed increase false'], 'A'),
          P('If velocity and acceleration have opposite signs along a line:', ['Speed increases always false', 'Speed decreases introductory slowing component along motion', 'Direction undefined false', 'Time stops false'], 'B'),
          P('Uniform acceleration means:', ['Acceleration constant introductory model', 'Velocity constant false opposite', 'Displacement constant false', 'Zero displacement'], 'A'),
          P('SI unit of acceleration is:', ['m s⁻² introductory', 'm s⁻¹', 'N only incomplete', 'kg'], 'A'),
          P('Velocity-time slope represents:', ['Displacement false area trap', 'Acceleration introductory slope of vt', 'Mass', 'Momentum always false'], 'B'),
          P('A drag racer speeding up forward has acceleration:', ['Opposite to velocity false', 'Perpendicular only false', 'In the same direction as velocity introductory', 'Zero always false'], 'C'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Constant acceleration equations',
        problems: [
          P('From rest, displacement grows with time as:', ['Linear in t false unless constant velocity', 'Quadratic in t for uniform acceleration introductory s ∝ t² from s=½at²', 'Independent of t false', 'Exponential introductory overshoot model'], 'B'),
          P('v = u + at applies when:', ['Acceleration is uniform introductory', 'Acceleration changes wildly each instant false model breaks naive apply', 'Velocity is always zero false', 'Only vertical motion false'], 'A'),
          P('Using v² = u² + 2as avoids:', ['Finding time explicitly introductory sometimes helpful', 'Knowing mass always required false kinematics first', 'Choosing origin false still choose coordinates carefully', 'Vectors in 2D without components false scope 1D'], 'A'),
          P('If u = 0, a = 4 m s⁻², t = 2 s then v equals:', ['4 m s⁻¹', '8 m s⁻¹ introductory', '2 m s⁻¹', '16 m s⁻¹'], 'B'),
          P('Stopping distance increases strongly with speed partly because:', ['Kinetic energy scales like v² introductory qualitative link before energy chapter okay conceptual', 'Momentum is always zero false', 'Acceleration doubles when speed doubles false simplistic', 'Friction disappears false'], 'A'),
          P('Careful sign of a matters because:', ['It sets whether velocity increases or decreases introductory', 'SI forbids negative acceleration false absurd', 'Gravity disappears false', 'Distance becomes imaginary false joke'], 'A'),
          P('Average acceleration definition uses:', ['Δv/Δt introductory', 'Δx/Δt false velocity', 'Δm/Δt false mass flow', 'Δp always without Δt false incomplete'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Graphs and relative motion',
        problems: [
          P('Displacement from velocity-time graph uses:', ['Slope of vt false acceleration tie', 'Area under vt introductory', 'Intercept only', 'Thickness joke'], 'B'),
          P('Uniform acceleration makes xt graph:', ['Straight line false constant v parabola introductory quadratic position', 'Parabolic shape introductory', 'Circle', 'Flat horizontal always false unless rest'], 'B'),
          P('Relative velocity along a line follows:', ['Vector subtraction idea collinear introductory', 'Addition of masses false', 'Heat capacities false', 'Pressure laws gas expansion skip'], 'A'),
          P('Two cars east with velocities 20 m s⁻¹ and 14 m s⁻¹ east; slower relative to faster is:', ['6 m s⁻¹ east false', '6 m s⁻¹ west introductory', '34 m s⁻¹ east false', '0 m s⁻¹ false'], 'B'),
          P('Zero acceleration implies vt graph is:', ['Steeply rising always false', 'Curved parabola false', 'Horizontal line (constant velocity) introductory', 'Vertical line false'], 'C'),
          P('Area under an x–t graph does not directly give:', ['Velocity from slope false', 'Position change from endpoints false', 'Time elapsed false', 'Displacement introductory common trap'], 'D'),
          P('Choosing consistent positive direction:', ['Reduces sign mistakes introductory', 'Removes need for units false', 'Forces gravity away false', 'Makes acceleration always positive false'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 3: Elasticity and static equilibrium of rigid body',
    chapterDescription:
      'Elastic versus plastic behavior, density and specific gravity, stress and strain, Young modulus, and first and second conditions for static equilibrium.',
    topics: [
      {
        topicName: 'Elasticity and plasticity',
        topicDescription:
          'Temporary versus permanent deformation; elastic limit and hysteresis (survey).',
        topicObjectives: [
          'Distinguish elastic deformation from plastic deformation using examples.',
          'Recognize that materials return to shape only below limits introductory.',
        ],
      },
      {
        topicName: 'Density and specific gravity',
        topicDescription:
          'Mass per volume; ratio relative to water for buoyancy discussions (survey).',
        topicObjectives: [
          'Compute density from mass and volume in SI units.',
          'Interpret specific gravity as a convenient ratio introductory.',
        ],
      },
      {
        topicName: 'Stress and strain',
        topicDescription:
          'Normal stress and longitudinal strain definitions; elastic region concept.',
        topicObjectives: [
          'Define stress as force per area and strain as fractional length change.',
          'Relate stress and strain qualitatively before introducing modulus.',
        ],
      },
      {
        topicName: 'Young modulus',
        topicDescription:
          'Stiffness measure from slope of stress–strain in elastic region.',
        topicObjectives: [
          'State Young modulus as stress divided by strain in elastic region introductory.',
          'Compare stiffer versus softer materials using larger versus smaller modulus.',
        ],
      },
      {
        topicName: 'Static equilibrium (first and second conditions)',
        topicDescription:
          'Translational balance ΣF = 0 and rotational balance Στ = 0 for rigid bodies.',
        topicObjectives: [
          'Apply Newton first law equilibrium wording for concurrent forces introductory.',
          'Use torque balance about a pivot for simple lever problems introductory.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Elastic', 'Rubber band stretched lightly often behaves:', ['Plastically always false', 'Elastic recoverably introductory', 'Never returns shape false', 'Melts always false'], 1, 'Easy'),
      ex(1, 'Density', 'Density ρ equals:', ['m/V introductory', 'V/m inverted', 'mg only weight confusion', 'm+a nonsense'], 0, 'Easy'),
      ex(2, 'Stress units', 'Stress has units like:', ['N m⁻² introductory pascal idea', 'm s⁻¹', 'kg only', 'J only'], 0, 'Easy'),
      ex(3, 'Young', 'Larger Young modulus indicates:', ['Softer material false opposite', 'Stiffer material introductory less strain for same stress elastic picture', 'Lower melting point unrelated always false', 'Higher speed of sound always false oversimplified'], 1, 'Medium'),
      ex(4, 'Eq', 'First equilibrium condition for coplanar translation:', ['ΣF = 0 introductory vector sum components zero', 'Στ only rotational false second condition', 'Σp infinite false', 'ΣW always zero false'], 0, 'Easy'),
      ex(4, 'Torque', 'Torque magnitude about pivot uses:', ['Force times perpendicular lever arm introductory', 'Mass times density false', 'Volume squared nonsense', 'Acceleration alone'], 0, 'Easy'),
      ex(2, 'Strain', 'Longitudinal strain is roughly:', ['ΔL/L introductory fractional change', 'L/ΔL inverted trap', 'FL/A stress confusion', 'ρg depth hydrostatic trap'], 0, 'Medium'),
      ex(1, 'SG', 'Specific gravity compares density to:', ['Vacuum false', 'Water introductory reference ratio survey', 'Mercury always false', 'Air only false'], 1, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Elasticity and plasticity',
        problems: [
          P('Elastic deformation means:', ['Permanent shape change false plastic vibe', 'Material tends to return shape when load removed introductory elastic picture', 'Melting always false', 'Ionization'], 'B'),
          P('Plastic deformation means:', ['Fully reversible always false', 'Permanent change after sufficient stress introductory survey', 'Only gases false', 'Zero stress always'], 'B'),
          P('Spring obeying Hookes law region is modeled as:', ['Linear elastic introductory proportionality survey', 'Plastic flow always false', 'Perfectly rigid infinite modulus false idealization', 'Friction dominated'], 'A'),
          P('Beyond elastic limit:', ['Material may not fully recover introductory', 'Stress always zero false', 'Strain always zero false', 'Density becomes zero false absurd'], 'A'),
          P('Rubber versus steel differs partly in:', ['Density only false', 'Colour only false', 'Typical stiffness (Young modulus) introductory', 'Magnetic strength false'], 'C'),
          P('Temporary bending of a ruler lightly often:', ['Recovers shape approximately introductory elastic', 'Snaps always false', 'Melts false', 'Doubles length false'], 'A'),
          P('Plastic deformation can accompany:', ['Heat and microstructure changes introductory survey light', 'Perfect elasticity always false', 'Zero force always false', 'Loss of mass always false ordinary mechanics'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Density and specific gravity',
        problems: [
          P('Density ρ = m/V uses:', ['Mass per volume introductory', 'Volume per mass inverted trap', 'Force per area stress confusion', 'Displacement per time velocity confusion'], 'A'),
          P('SI density units include:', ['kg m⁻³ introductory', 'kg m⁻¹ line density trap', 'N m⁻² stress trap', 'J K⁻¹ heat capacity trap'], 'A'),
          P('Specific gravity as ratio references:', ['Water introductory common textbook reference', 'Moon gravity false joke reject context mismatch', 'Steel always false', 'Absolute vacuum false'], 'B'),
          P('Doubling volume while keeping mass fixed:', ['Doubles density false', 'Halves density introductory', 'Quadruples density false', 'Unchanged density false'], 'B'),
          P('Object sinks if average density exceeds:', ['Fluid density introductory buoyancy survey qualitative', 'Vacuum false', 'Temperature only false', 'Young modulus false'], 'A'),
          P('Measuring mass and volume helps:', ['Estimate density introductory lab skill', 'Estimate torque directly false', 'Compute acceleration always without motion false', 'Find magnetic poles'], 'A'),
          P('Same material samples usually share:', ['Characteristic density introductory', 'Different densities always false', 'Zero mass false', 'Random volume only false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Stress and strain',
        problems: [
          P('Normal stress is:', ['Force perpendicular to area divided by area introductory σ=F/A idea', 'Displacement over time false', 'Energy over volume sometimes related false pick stress definition', 'Momentum change'], 'A'),
          P('Strain is:', ['Dimensionless ratio introductory fractional deformation', 'Measured in pascals false stress units', 'Measured in newtons only false', 'Always infinite false'], 'B'),
          P('Tension rod stress increases if:', ['Force decreases false', 'Area increases false', 'Force stays same while cross-section shrinks introductory', 'Material changes to vacuum false'], 'C'),
          P('Compressing a column shortens length producing:', ['Compressive strain introductory', 'Tensile strain false', 'Zero strain false', 'Shear only false'], 'A'),
          P('Elastic region stress-strain often:', ['Random scatter always false', 'Shows approximate linear relation introductory elastic region', 'Perfectly horizontal false', 'Undefined false'], 'B'),
          P('Ultimate strength contexts warn:', ['Failure thresholds introductory safety margins survey qualitative', 'Perfect elasticity forever false', 'Zero deformation always false', 'Speed of light limit false joke'], 'A'),
          P('Shear stress differs from normal stress by:', ['Force always perpendicular false', 'Always being zero false', 'Being scalar false', 'Force directed parallel to surface introductory shear idea'], 'D'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — Young modulus',
        problems: [
          P('Young modulus Y relates:', ['Stress over strain in elastic region introductory Y=σ/ε definition survey', 'Strain over stress inverted trap', 'Density over volume nonsense', 'Velocity over time acceleration trap'], 'A'),
          P('Stiffer rod typically has:', ['Smaller Young modulus false softer', 'Larger Young modulus introductory', 'Zero modulus absurd', 'Imaginary modulus absurd'], 'B'),
          P('Doubling stress in linear elastic region doubles:', ['Density false', 'Volume always false', 'Strain introductory linear elastic', 'Mass false'], 'C'),
          P('Units of Young modulus match stress-like:', ['Pa introductory N/m² equivalent survey', 'm s⁻¹', 'kg only', 'dimensionless'], 'A'),
          P('Measuring tiny stretches helps estimate:', ['Strain introductory experimental inference', 'Instantaneous speed unrelated false', 'Electric charge unrelated false', 'Photon energy unrelated false'], 'B'),
          P('Slope of linear elastic stress-strain graph yields:', ['Density false', 'Specific heat false', 'Young modulus introductory', 'Velocity false'], 'C'),
          P('Rubber band differs from steel wire partly due to:', ['Same modulus always false', 'Zero density false', 'Identical colour false', 'Different elastic modulus introductory comparative'], 'D'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — Static equilibrium',
        problems: [
          P('First equilibrium condition emphasizes:', ['Net torque zero only false', 'Net external force is zero introductory', 'Constant acceleration false', 'Infinite momentum false'], 'B'),
          P('Second equilibrium condition emphasizes:', ['Net torque zero introductory Στ=0 rotational balance survey', 'Net force infinite false absurd', 'Constant acceleration false dynamics', 'Kinetic energy minimum always false oversimplified'], 'A'),
          P('For static equilibrium both conditions apply when:', ['Spinning at constant rate false', 'Accelerating linearly false', 'Translation and rotation balanced introductory', 'Only heating up false'], 'C'),
          P('Pivot torque uses lever arm:', ['Parallel distance only false', 'Mass of object false', 'Wire resistance false', 'Perpendicular distance from pivot to force line introductory'], 'D'),
          P('Balanced seesaw toy model often sets:', ['Στ = 0 about pivot introductory', 'Στ infinite false', 'ΣF infinite false', 'Σp nonzero always false static'], 'A'),
          P('Choosing pivot wisely can:', ['Increase unknowns always false', 'Eliminate unknown force torques introductory pivot choice', 'Remove gravity false', 'Stop time false'], 'B'),
          P('ΣF = 0 does not guarantee Στ = 0 if:', ['All forces are zero false trivial', 'Forces are collinear false may have zero torque', 'Forces form a couple introductory zero net force torque possible', 'Mass is zero false'], 'C'),
        ],
      },
    ],
  },
];
