/**
 * Grade 12 Physics curriculum — Units 1–3 (Natural stream, Ethiopia MoE NEW curriculum, introductory survey tone).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 1: Application of Physics in Other Fields',
    chapterDescription:
      'Survey links from physics to other sciences, engineering, medicine, defense, and communication systems at MoE introductory depth.',
    topics: [
      {
        topicName: 'Physics and other sciences',
        topicDescription:
          'Shared measurement, modeling, and conservation ideas connecting physics with chemistry, biology, geology, and astronomy.',
        topicObjectives: [
          'Give examples where physical principles support models in neighboring sciences.',
          'Recognize measurement and uncertainty as common ground across scientific disciplines.',
        ],
      },
      {
        topicName: 'Physics in engineering and technology',
        topicDescription:
          'How mechanics, electricity, thermodynamics, and materials ideas inform design, testing, and optimization.',
        topicObjectives: [
          'Relate introductory physics topics to simple engineering design requirements.',
          'Identify trade-offs such as efficiency, safety, and cost in technology examples.',
        ],
      },
      {
        topicName: 'Medical physics and imaging',
        topicDescription:
          'Survey roles of waves, ionizing radiation, and sensors in diagnosis and therapy (introductory, non-clinical detail).',
        topicObjectives: [
          'Name major imaging modalities and the underlying physics category at survey level.',
          'State why shielding, calibration, and dose awareness matter in medical settings.',
        ],
      },
      {
        topicName: 'Physics in defense and security technology',
        topicDescription:
          'Introductory survey of sensing, navigation, materials, and signals used responsibly in security contexts.',
        topicObjectives: [
          'Connect optics, acoustics, and electromagnetics to detection and ranging concepts.',
          'Discuss ethics and safety as constraints alongside technical capability.',
        ],
      },
      {
        topicName: 'Physics in communication systems',
        topicDescription:
          'Information carried by electromagnetic signals; bandwidth and noise at conceptual level.',
        topicObjectives: [
          'Relate wave description to propagation in cables and free space introductory.',
          'Recognize the need for modulation, encoding, and channel capacity in modern networks.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Links', 'Geology often uses physics of:', ['Waves in Earth and rock mechanics introductory survey', 'Only spelling rules', 'Ancient myths only', 'Grammar structure only'], 0, 'Easy'),
      ex(1, 'Design', 'Engineers test prototypes partly to:', ['Check performance against requirements introductory', 'Remove all measurement', 'Avoid using equations', 'Disable safety margins'], 0, 'Easy'),
      ex(2, 'US', 'Ultrasound imaging relies on:', ['Mechanical waves in tissues introductory survey', 'Only visible light reflection only false for primary modality', 'Nuclear reactions in the probe false', 'Static fluid pressure only false'], 0, 'Medium'),
      ex(3, 'Sense', 'Night-vision and infrared ideas connect to:', ['Electromagnetic spectrum and thermal emission introductory survey', 'Only chemical valence alone false scope', 'Sound in vacuum false', 'Geology fossils only false'], 0, 'Easy'),
      ex(4, 'Signal', 'Fiber optics carries information using:', ['Guided light introductory communications survey', 'Sound in steel only false', 'Direct current only always false context', 'Gravity waves only false everyday'], 0, 'Easy'),
      ex(1, 'Energy', 'Efficiency discussions in devices connect to:', ['Energy conservation and loss mechanisms introductory', 'Eliminating thermodynamics false impossible', 'Ignoring units false', 'Random outcomes only false'], 0, 'Medium'),
      ex(2, 'Safety', 'Ionizing radiation use in therapy requires:', ['Careful dose planning and shielding introductory survey', 'Ignoring exposure limits false ethics', 'Removing all physics checks false', 'Guessing doses false'], 0, 'Medium'),
      ex(3, 'Nav', 'Satellite navigation concepts include:', ['Timing and signal travel introductory survey', 'Only poetry rhythm false', 'Plant taxonomy false', 'Pure grammar false'], 0, 'Easy'),
      ex(4, 'Noise', 'Channel noise limits mostly mean:', ['Information becomes less reliable at fixed power introductory concept', 'Signals become infinite always false', 'Waves stop existing false', 'Units disappear false'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 1 Quiz 1 — Physics and other sciences',
        problems: [
          P('Astronomy often interprets starlight using ideas about:', ['Electromagnetic spectra and motion introductory survey', 'Only plant photosynthesis rates false scope', 'River erosion only false', 'Word origins false'], 'A'),
          P('Biophysics bridges physics with biology partly by:', ['Measuring forces and flows in living systems introductory', 'Rejecting experiments false', 'Ignoring cells false', 'Banning mathematics false'], 'B'),
          P('Chemical reaction rates connect to:', ['Energy barriers and molecular collisions introductory survey depth varies', 'Only map reading false', 'Fossil dating alone false narrow', 'Moon phases only false'], 'C'),
          P('Geophysical sounding may use:', ['Wave travel in Earth materials introductory survey', 'Only ancient poetry false', 'Pure speculation without data false', 'Grammar trees false'], 'D'),
          P('Conservation laws in physics help other sciences by:', ['Providing constraints on what processes can do introductory', 'Removing all uncertainty always false', 'Forbidding models false', 'Stopping measurement false'], 'A'),
          P('Scale models in science across fields rely on:', ['Dimensional and similarity reasoning introductory', 'Ignoring units false', 'Only artistic taste false', 'Random guessing false'], 'B'),
          P('Uncertainty in measured data matters because:', ['Conclusions should reflect limited precision introductory', 'All digits are infinitely exact false', 'Graphs are never needed false', 'Every theory is final false'], 'C'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 1 Quiz 2 — Physics in engineering and technology',
        problems: [
          P('Load testing a bridge design mainly checks:', ['Strength and deformation under expected forces introductory', 'Only paint colour aesthetics false narrow', 'Only historical dates false', 'Spelling accuracy false'], 'A'),
          P('Heat exchangers in technology use physics of:', ['Thermal energy transfer and fluid flow introductory survey', 'Only magnetism alone false device dependent', 'Geology layers false', 'Literary metaphor false'], 'B'),
          P('Circuit breakers relate to:', ['Current, heating, and failsafe interruption introductory household context', 'Plant growth cycles false', 'Ocean salinity only false', 'Pure philosophy false'], 'C'),
          P('Materials selection can be guided by:', ['Strength, density, and thermal properties introductory', 'Moon phase only false', 'Random popularity only false', 'Ignoring stress false'], 'D'),
          P('Prototyping reduces risk by:', ['Finding failure modes before full deployment introductory mindset', 'Eliminating all testing false opposite', 'Hiding data false', 'Ignoring standards false'], 'A'),
          P('Feedback control in engineered systems uses:', ['Measurements to adjust outputs introductory survey', 'Only open-loop guesses false contrast', 'No sensors always false', 'Perpetual motion assumptions false'], 'B'),
          P('Energy conversion losses often appear as:', ['Heat and sound in machines introductory qualitative', 'Negative mass energy false', 'New atoms created freely false balance', 'Loss of SI units false'], 'C'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 1 Quiz 3 — Medical physics and imaging',
        problems: [
          P('X-ray imaging is based on:', ['High-energy electromagnetic radiation interaction with matter introductory survey', 'Only audible sound waves false modality', 'Nuclear fusion in tissue false absurd', 'Visible light only false typical setup'], 'A'),
          P('MRI emphasises:', ['Magnetic fields and radio-frequency signals to probe nuclei introductory survey label naming varies region', 'Ionizing radiation as the main probe false common teaching contrast', 'Only chemical wet tests alone false clinic context', 'Gravity waves false'], 'B'),
          P('Ultrasound avoids ionizing radiation partly because it uses:', ['Mechanical waves introductory note imaging tradeoffs exist', 'Gamma rays primarily false opposite', 'Electron beams from nuclei false', 'Static charge only false'], 'C'),
          P('Patient dose awareness is important because:', ['Ionizing radiation can damage cells risk versus benefit introductory', 'All radiation is harmless always false', 'Dose has no units false', 'Shielding never works false'], 'D'),
          P('PET scanning conceptually involves:', ['Tracer physics and emissions detected in vivo introductory survey', 'Only rulers calipers false scope', 'Purely mechanical springs false', 'Classical geometry only false'], 'A'),
          P('Quality assurance for devices often includes:', ['Calibration and phantom tests introductory', 'Removing safety checks false', 'Guessing outputs false', 'Disabling labels false'], 'B'),
          P('Contrast agents may improve images by changing:', ['How signals interact with tissues introductory high level', 'The speed of light in vacuum false constant', 'Earthquake magnitude false unrelated', 'Language spelling false'], 'C'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 1 Quiz 4 — Physics in defense and security technology',
        problems: [
          P('Radar systems conceptually rely on:', ['Reflection and timing of electromagnetic pulses introductory survey', 'Only sonar in vacuum false impossible', 'Pure thermal convection only false', 'Ancient astronomy tables alone false'], 'A'),
          P('Sonar in fluids uses:', ['Mechanical wave propagation and echoes introductory', 'Gamma rays in water as primary false typical', 'Static electricity only false', 'Magnetic monopoles false'], 'B'),
          P('Night imaging often exploits:', ['Infrared emission or intensification introductory survey', 'Only gamma bursts false danger mismatch', 'Sound in vacuum false', 'Chemical periodic table memorization only false'], 'C'),
          P('Materials for armor and vehicles trade:', ['Mass, hardness, and energy absorption introductory qualitative', 'Only fashion trends false', 'Zero physics constraints false', 'Infinite strength without limits false'], 'D'),
          P('Responsible technology deployment should balance:', ['Capability, law, and safety introductory civics tie-in', 'Only speed without ethics false narrow', 'Secrecy only always false nuance', 'Random deployment false'], 'A'),
          P('Signal processing can help by:', ['Separating weak targets from clutter introductory', 'Ignoring noise always false', 'Removing all electronics false absurd', 'Eliminating bandwidth limits always false'], 'B'),
          P('Stealth shaping relates partly to:', ['Redirecting reflected radar energy introductory simplified', 'Making objects massless false', 'Eliminating gravity false', 'Stopping quantum effects always false'], 'C'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 1 Quiz 5 — Physics in communication systems',
        problems: [
          P('Radio broadcasts carry information using:', ['Electromagnetic carrier waves introductory survey', 'Only sound in vacuum false impossible', 'Static rocks alone false', 'Paper thickness only false'], 'A'),
          P('Bandwidth limits mostly cap:', ['How much information can pass per second introductory qualitative', 'Only wire colour false', 'Earth radius false unrelated metaphor', 'Grammar tense false'], 'B'),
          P('Optical fibers guide light by:', ['Internal reflection in a thin core introductory', 'Sound resonance in wood false', 'Nuclear chain reaction false', 'Buoyancy alone false'], 'C'),
          P('Noise in a channel tends to:', ['Increase errors if uncorrected introductory', 'Always improve clarity false opposite', 'Eliminate signals entirely always false general case', 'Remove modulation always false'], 'D'),
          P('Cell networks use many small cells partly to:', ['Reuse spectrum and support capacity introductory survey', 'Increase latency always goal false usually minimize', 'Remove all physics limits false', 'Ban digital encoding false'], 'A'),
          P('Modulation is used to:', ['Map information onto a carrier wave introductory', 'Eliminate frequency entirely false', 'Make DC carry infinite distance without hardware false', 'Destroy antennas false'], 'B'),
          P('Latency in networks can be limited partly by:', ['Signal travel time and processing delays introductory', 'Moon phase false', 'Ink colour false', 'Book page count false'], 'C'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 2: Two-Dimensional Motion',
    chapterDescription:
      'Projectile motion in the plane, rotational kinematics and simple dynamics, Kepler laws and universal gravitation at introductory MoE depth.',
    topics: [
      {
        topicName: 'Projectile motion',
        topicDescription:
          'Independence of horizontal and vertical motion, range and height ideas at flat-Earth introductory level.',
        topicObjectives: [
          'Resolve launch velocity into perpendicular components.',
          'Explain why horizontal speed is often treated as constant without air resistance.',
        ],
      },
      {
        topicName: 'Rotational kinematics',
        topicDescription:
          'Angular displacement, angular velocity, and angular acceleration; connection to linear speed on a circular path.',
        topicObjectives: [
          'Relate v, ω, and r for motion on a circular arc at introductory level.',
          'Use basic rotational kinematic equations with constant angular acceleration when taught.',
        ],
      },
      {
        topicName: 'Rotational dynamics (torque and angular momentum intro)',
        topicDescription:
          'Torque as rotational analogue of force; introductory angular momentum and conservation ideas in simple contexts.',
        topicObjectives: [
          'Compute torque magnitude for forces about an axis introductory.',
          'Identify when angular momentum is approximately conserved in introductory demonstrations.',
        ],
      },
      {
        topicName: 'Planetary motion and Kepler laws (intro)',
        topicDescription:
          'Qualitative Kepler laws linking orbital periods and sizes for planetary motion survey.',
        topicObjectives: [
          'State Kepler three laws in words appropriate to Grade 12 survey classes.',
          'Connect elliptical orbits to changing speed along the path at conceptual level.',
        ],
      },
      {
        topicName: 'Newton law of universal gravitation',
        topicDescription:
          'Inverse-square gravitational force between point masses; weight as gravitational near Earth surface introductory.',
        topicObjectives: [
          'Use F = G m1 m2 / r^2 in simple ratio problems at syllabus depth.',
          'Distinguish mass and weight in gravitational contexts.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Components', 'For projectile motion without air resistance, horizontal acceleration is typically:', ['0 m/s^2 introductory flat Earth model', 'g downward confused axis', 'Always increasing linearly false', 'Equal to vertical speed false'], 0, 'Easy'),
      ex(1, 'Omega', 'For circular motion, linear speed v equals:', ['ω r introductory relationship', 'ω/r trap', 'ω^2 r trap for wrong concept', 'ω + r false'], 0, 'Easy'),
      ex(2, 'Torque', 'Torque magnitude about a pivot is broadly:', ['r F sin θ introductory lever arm form', 'r + F false', 'r/F false', 'F/r always false'], 0, 'Medium'),
      ex(3, 'K2', 'Kepler second law is associated with:', ['Equal areas in equal times introductory wording', 'Equal speed everywhere false circle assumption sometimes', 'Circular orbits only false general ellipse', 'Cube of period equals radius false wrong law'], 0, 'Medium'),
      ex(4, 'Grav', 'Newton gravitation force magnitude is proportional to:', ['Product of masses inverse square distance introductory', 'Sum of masses only false', 'Linear distance not inverse square false', 'Orbital colour false'], 0, 'Easy'),
      ex(0, 'Height', 'Maximum height in basic projectile models depends strongly on:', ['Vertical component of launch velocity introductory energy in vertical motion', 'Horizontal component only false without vertical coupling to peak', 'Object colour false', 'Barometric poetry false'], 0, 'Medium'),
      ex(1, 'Radian', 'One complete revolution is:', ['2π rad introductory', 'π rad half trap', '1 rad false', '4π rad double trap'], 0, 'Easy'),
      ex(2, 'AM', 'Angular momentum tends to be conserved when:', ['Net external torque is negligible introductory survey statement', 'Forces exist without axis definition always false', 'Objects speed up linearly always false general', 'Objects lose all mass false'], 0, 'Medium'),
      ex(4, 'Weight', 'Near Earth surface weight is often modeled as:', ['mg toward Earth center introductory local g', 'mR false', 'Gmm/r false missing fields use carefully', 'Zero always false'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 2 Quiz 1 — Projectile motion',
        problems: [
          P('Without air resistance, the horizontal component of velocity for a projectile often:', ['Stays constant in flat Earth introductory model', 'Always increases linearly with time false no horizontal acceleration', 'Becomes zero at the top false only vertical component zero', 'Reverses every second false'], 'A'),
          P('At the highest point of a symmetric trajectory,:', ['Vertical velocity component is zero introductory', 'Acceleration is zero false gravity still g', 'Horizontal velocity is zero false model', 'Speed is always zero false'], 'B'),
          P('Projectile acceleration in the vertical direction is typically:', ['Downward near g introductory neglecting variation small', 'Zero always false', 'Horizontal along flight false', 'Toward the launch only false'], 'C'),
          P('Range on level ground depends on launch details such as:', ['Speed and angle introductory classic symmetric maximum at 45 idealized no drag teaching', 'Mass primarily in vacuum g same often negligible difference introductory', 'Paper colour false', 'Language used to describe motion false'], 'D'),
          P('Independence means vertical motion does not change:', ['Horizontal motion without horizontal forces introductory idealization', 'The gravitational field strength false g still acts vertically', 'Time monotonicity false time still advances', 'Vector notation false'], 'A'),
          P('A higher launch speed with the same angle typically:', ['Increases range and max height tendencies introductory qualitative', 'Always reduces range false opposite trends', 'Eliminates parabolic shape false still parabola', 'Removes acceleration false'], 'B'),
          P('Vector addition of velocity components gives:', ['Instantaneous resultant speed and direction introductory', 'Scalar mass always false', 'Only angular momentum false wrong context', 'Only potential energy false'], 'C'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 2 Quiz 2 — Rotational kinematics',
        problems: [
          P('Angular velocity ω relates to period T by:', ['ω = 2π/T introductory circular motion', 'ω = T/2π inverted false', 'ω = 2π T false', 'ω = πT false'], 'A'),
          P('If angular speed doubles at the same radius, tangential speed:', ['Doubles introductory v equal ω r', 'Halves false', 'Stays same false', 'Becomes zero false'], 'B'),
          P('A radian measures:', ['Angle by arc length over radius introductory definition', 'Only temperature false', 'Sound intensity false', 'Electric charge false'], 'C'),
          P('Uniform angular acceleration means:', ['Angular acceleration is constant introductory', 'Angular velocity is zero always false', 'No rotation false', 'Linear acceleration always zero false nonuniform translation possible different motion'], 'D'),
          P('Rolling without slipping ties:', ['Linear speed and angular speed by v equal ω R introductory condition', 'Heat and light false', 'Capacitance and resistance false', 'Half-life and decay false'], 'A'),
          P('Centripetal acceleration points:', ['Toward the center of circular path introductory', 'Tangent forward always false that is velocity direction not acceleration', 'Outward centrifugal as net real force in inertial frame careful pedagogy fictitious rotating frames advanced skip', 'Opposite weight always false general'], 'B'),
          P('A wheel spinning faster while increasing ω uniformly has:', ['Angular acceleration nonzero introductory could be constant if uniformly increasing ω phrasing', 'Zero angular velocity always false spinning', 'No centripetal requirement false turning needs center seeking acceleration', 'Zero radius always false'], 'C'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 2 Quiz 3 — Rotational dynamics',
        problems: [
          P('Torque tends to cause:', ['Angular acceleration in rigid-body introductory dynamics analogy with Newton law for rotation', 'Linear motion always false can translate too with net force', 'Cooling of metal false', 'Voltage spikes only false'], 'A'),
          P('Using a longer wrench handle can increase:', ['Torque for the same applied perpendicular force introductory lever arm', 'The bolt thread pitch false unrelated', 'Gravity constant g false', 'Air density false'], 'B'),
          P('The SI unit of torque can be expressed as:', ['Newton meter introductory dimensional note not joules if not work context energy vs torque distinction teaching', 'Joule always as energy label careful same Nm dimensions different meaning', 'Watt false power', 'Pascal false pressure'], 'C'),
          P('If net external torque about an axis is zero, angular momentum about that axis is often:', ['Conserved introductory isolated system idealization', 'Always zero false could be nonzero constant', 'Always infinite false', 'Undefined always false'], 'D'),
          P('A spinning ice skater pulling arms inward illustrative example may show:', ['Angular speed increasing when moment of inertia decreases introductory conservation sketch qualitative', 'Energy creation from nothing false work internal forces complexities exist caveat', 'Disappearance of mass false', 'Stop of Earth rotation false absurd'], 'A'),
          P('For equilibrium of a rigid body both:', ['Net force and net torque may need to vanish introductory statics condition depends problem statement extended bodies', 'Only forces matter always false extended objects can rotate under zero net force couple example', 'Only heat matters false', 'Only voltage matters false'], 'B'),
          P('Angular momentum magnitude for a particle includes:', ['r p sin θ introductory cross product magnitude form', 'Only mass alone false incomplete', 'Only temperature false', 'Volume of container false'], 'C'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 2 Quiz 4 — Planetary motion and Kepler laws',
        problems: [
          P('Kepler first law describes orbits as:', ['Ellipses with Sun at one focus introductory survey', 'Perfect circles only always false approximation for some planets nearly circular historically Copernican confusion but law itself ellipse', 'Parabolas only false open orbits comets sometimes parabolic approximation energy zero edge case skip exam usually Kepler focuses bound ellipse planets', 'Random straight lines false'], 'A'),
          P('Kepler third law relates period and semi-major axis roughly as:', ['T^2 proportional to a^3 for a given planetary system introductory', 'T proportional to a only false wrong power', 'T proportional to 1/a false', 'T independent of a false'], 'B'),
          P('Kepler second law hints that a planet:', ['Moves faster when closer to the Sun in an elliptical orbit introductory equal area sweep', 'Moves slower when closer false opposite', 'Has zero speed at perihelion false unless degenerate unlikely planet', 'Has constant speed on ellipse false generally varies'], 'C'),
          P('Copernican heliocentric models helped by emphasizing that:', ['Earth can move without daily breezes flinging people classical objection counter intro history survey', 'Moon is impossible to observe false absurd', 'Gravity is repulsive always false', 'Stars are painted on sphere literal false ancient model critique optional'], 'D'),
          P('Orbital motion requires a centripetal acceleration supplied by:', ['Gravitational attraction in simple planetary model introductory', 'Push from rockets continuously false except corrections orbital mechanics mostly inertial coasting', 'Buoyancy in space false negligible', 'Air drag in vacuum false'], 'A'),
          P('Smaller semi-major axis for similar systems often means:', ['Shorter orbital period introductory Kepler trend intuition', 'Longer period always false usually opposite', 'Infinite period false', 'Random periods without pattern false'], 'B'),
          P('Kepler laws describe motion primarily at the level of:', ['Kinematics of orbits before Newton gravitation derivation historically then unified introductory narrative', 'Quantum atomic spectra false different domain', 'Nuclear binding false', 'Circuit analysis false'], 'C'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 2 Quiz 5 — Universal gravitation',
        problems: [
          P('Newton universal gravitation says force magnitude increases when:', ['Masses increase introductory product m1 m2 increases', 'Distance increases and masses fixed false weaker farther inverse square', 'Only the smaller mass decreases false not increase force trend', 'G becomes zero in formula false nonphysical'], 'A'),
          P('If distance between two masses doubles, force magnitude becomes about:', ['One quarter introductory inverse square factor', 'Half false', 'Same false', 'Four times false'], 'B'),
          P('Weight differs from mass because weight depends on:', ['Local gravitational field strength introductory near Earth g may vary slightly altitude latitude', 'Colour of object false', 'Chemical taste false', 'Spelling of units false'], 'C'),
          P('Gravitational force is always:', ['Attractive between ordinary masses introductory', 'Repulsive for masses always false like charges electrostatic contrast gravity attractive masses always historically dark energy cosmology skip', 'Zero unless touching false long range force', 'Tangent to velocity always false not generally'], 'D'),
          P('Orbital weightlessness in a space station largely means:', ['Support force from floor is near zero in free-fall orbit introductory apparent weight sensation not that gravity vanished', 'Gravity is literally zero everywhere false altitude still Earth field mostly', 'Air disappeared entirely false some residual atmosphere nuance', 'Mass became zero false'], 'A'),
          P('The constant G is determined experimentally and is:', ['Universal in Newtonian gravitation introductory same constant in common textbook formula', 'Different on each planet for universal formula context false G universal g local differs planet', 'Purely imaginary number false real measured', 'Undefined always false'], 'B'),
          P('Two masses attract each other with forces that are:', ['Equal magnitude and opposite direction by Newton third law pair introductory gravity pair', 'Always different magnitudes false unless different masses then forces still equal magnitude third law pair careful not confusing acceleration which differs with mass', 'Only one-sided pull false', 'Zero in vacuum false gravity penetrates vacuum'], 'C'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 3: Fluid Mechanics',
    chapterDescription:
      'Fluid statics, pressure transmission, buoyancy, introductory flow continuity, and awareness for high-pressure systems at survey depth.',
    topics: [
      {
        topicName: 'Fluid statics and pressure',
        topicDescription:
          'Pressure in liquids and gases, hydrostatic pressure variation with depth, and Pascal as force per area.',
        topicObjectives: [
          'Compute hydrostatic pressure at depth in an incompressible liquid model.',
          'Explain why pressure acts in all directions in a static fluid.',
        ],
      },
      {
        topicName: 'Pascal principle and pressure in fluids',
        topicDescription:
          'Pressure change transmitted through a confined fluid; hydraulic lift ideas at introductory level.',
        topicObjectives: [
          'Apply force multiplication arguments for simple hydraulic devices.',
          'Identify assumptions such as neglecting height differences when taught.',
        ],
      },
      {
        topicName: 'Archimedes principle and buoyancy',
        topicDescription:
          'Buoyant force equals weight of displaced fluid; floating and sinking conditions.',
        topicObjectives: [
          'Predict whether an object floats based on density comparison introductory.',
          'Relate apparent weight loss to displaced volume in simple cases.',
        ],
      },
      {
        topicName: 'Fluid flow and continuity (intro)',
        topicDescription:
          'Streamline concept, volume flow rate, and continuity for incompressible flow in tubes.',
        topicObjectives: [
          'Use A v equals constant along a tube for steady incompressible flow introductory.',
          'Recognize how narrowing speeds up flow in idealized models.',
        ],
      },
      {
        topicName: 'Safety in high-pressure fluid systems',
        topicDescription:
          'Risks from stored energy, leaks, whipping hoses, and personal protective awareness.',
        topicObjectives: [
          'List basic safety practices when working near high-pressure systems.',
          'Explain why small leaks can still be dangerous with high-pressure liquids or gases.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Hydro', 'Hydrostatic pressure increases with depth partly because:', ['Weight of fluid above supports additional load introductory', 'Temperature always decreases false general', 'Speed always increases static fluid false', 'Sound absorption false'], 0, 'Easy'),
      ex(1, 'Hydraulic', 'A hydraulic jack can multiply force when:', ['Area ratio allows smaller force on smaller piston introductory ideal lever analogy', 'Fluids vanish false', 'Pressure is zero false', 'Gravity turns off false'], 0, 'Medium'),
      ex(2, 'Buoy', 'An object floats if average density is:', ['Less than fluid density introductory idealization uniform objects', 'Greater always false sinks usually', 'Exactly infinite false', 'Negative false'], 0, 'Easy'),
      ex(3, 'Cont', 'Continuity for steady incompressible flow gives:', ['A1 v1 equals A2 v2 introductory along a streamline tube model', 'A1 plus A2 equals v false nonsense dimensions', 'Pressure constant always false not generally', 'Density zero false'], 0, 'Medium'),
      ex(4, 'Safe', 'High-pressure hoses can be hazardous because:', ['Stored energy can accelerate fittings introductory safety awareness', 'Water always cold false irrelevant', 'Fluids lose mass false', 'Gravity disappears false'], 0, 'Easy'),
      ex(0, 'Pascal SI', 'Pressure SI unit is:', ['Pascal introductory N/m^2', 'Newton only force', 'Joule only energy', 'Watt only power'], 0, 'Easy'),
      ex(2, 'Displace', 'Buoyant force magnitude equals weight of:', ['Fluid displaced introductory Archimedes wording', 'Object only false displaced fluid careful distinction', 'Container walls false', 'Air above only false partial picture'], 0, 'Medium'),
      ex(3, 'Narrow', 'If tube area decreases, speed often:', ['Increases to keep flow rate introductory continuity', 'Decreases always false typical narrowing', 'Becomes zero false unless blocked', 'Becomes imaginary false'], 0, 'Easy'),
      ex(4, 'Leak', 'A small high-pressure leak can cut skin because:', ['Energy concentrated in high-speed jet introductory caution', 'Liquids are always cold false', 'Pressure implies low speed false often high speed jet', 'Fluids lack density false'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 3 Quiz 1 — Fluid statics and pressure',
        problems: [
          P('Pressure in a static fluid at a given depth depends on:', ['Depth and fluid density in simple hydrostatic model introductory g assumed uniform', 'Colour of the fluid false', 'Name of the ocean false', 'Container shape always for pressure at point false in connected fluid same depth same pressure teaching sometimes confusion'], 'A'),
          P('Atmospheric pressure acts:', ['On surfaces from all directions introductory fluids transmit pressure', 'Only downward false', 'Only upward false', 'Only sideways false'], 'B'),
          P('Absolute zero pressure is an idealization; practical vacuum still has:', ['Very low pressure but often nonzero residual gas molecules introductory ultra high vacuum story', 'Infinite pressure false', 'Negative temperature only false not the question focus', 'Zero density always false'], 'C'),
          P('A mercury barometer measures pressure partly using:', ['Column height balanced by atmospheric force introductory Torricelli story region', 'Sound speed false', 'Colour change false', 'Magnetic torque false'], 'D'),
          P('Equal depths in a connected static liquid often imply:', ['Equal pressure at those points introductory same height same pressure in continuous fluid', 'Equal velocity always false static', 'Equal temperature always false unless stated', 'Equal volume always false'], 'A'),
          P('Pressure units may also appear as:', ['atm or bar in everyday contexts alongside SI introductory conversions taught separately', 'Degrees only temperature false', 'Meters only without context unclear could be head unit actually', 'Amperes false current'], 'B'),
          P('In many liquids modeled as incompressible, density is treated as:', ['Approximately constant over moderate depth introductory ocean compressibility tiny often ignored', 'Exactly zero false', 'Negative false', 'Always infinite false'], 'C'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 3 Quiz 2 — Pascal principle',
        problems: [
          P('Pascal principle is often applied to:', ['Hydraulic systems and pressure transmission introductory confined fluid model', 'Vacuum cleaners primarily false different physics mostly airflow partly continuum', 'Semiconductor doping false domain', 'Nuclear spin resonance false'], 'A'),
          P('A small force on a small piston can produce a larger force on a larger piston when:', ['Pressure is approximately uniform in an ideal enclosed fluid introductory area ratio', 'Fluids are absent false', 'Gravity is turned off false still can work', 'Temperature is absolute zero false'], 'B'),
          P('Hydraulic brakes conceptually use:', ['Incompressible fluid to transmit pressure introductory automotive survey', 'Stretchy rubber as primary working fluid usually false braided lines but fluid incompressible model', 'Light waves false', 'Sound alone false'], 'C'),
          P('If you neglect piston height differences, the same pressure means:', ['Force proportional to piston area introductory', 'Force independent of area false contradictions', 'Zero force always false', 'Infinite force always false'], 'D'),
          P('Pressurizing a trapped fluid can store:', ['Energy that can do work introductory safety release valves matter', 'Only information false also physical work potential', 'Permanent new matter false', 'Negative entropy colloquially false thermodynamics caution'], 'A'),
          P('Leaks in a hydraulic line reduce effectiveness partly because:', ['Pressure cannot be maintained distributed as intended introductory fluid loss and air ingress problems also', 'Fluid becomes denser always false usually air reduces performance cavitation issues advanced skip', 'Pascal principle stops existing false still applies poorly with openings', 'Gravity reverses false'], 'B'),
          P('For a piston of area A under pressure P, approximate force magnitude is:', ['P times A introductory definition of pressure as force per area rearranged careful direction normal to surface', 'P divided by A false reversed', 'P plus A false dimensions', 'Square root of P false'], 'C'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 3 Quiz 3 — Buoyancy',
        problems: [
          P('Archimedes principle states buoyant force equals:', ['Weight of displaced fluid introductory', 'Weight of object always false depends case', 'Mass of container only false', 'Atmospheric pressure only false partial'], 'A'),
          P('A metal boat can float if:', ['Average density of the hull-displaced water system yields sufficient displacement introductory shape matters', 'Metal density always equals water false usually higher density material shaped to displace', 'Buoyancy does not exist false', 'Gravity stops false'], 'B'),
          P('An object fully submerged experiences buoyant force depending on:', ['Volume of displaced fluid introductory for fully submerged equals object volume if no cavities tricky', 'Object colour false', 'Object brand false', 'Moon phase false'], 'C'),
          P('Apparent weight in a fluid can be less than actual weight because:', ['Upward buoyant force reduces net vertical force introductory apparent weight scale reading context', 'Gravity vanishes false', 'Mass changes spontaneously false', 'Time runs backward false'], 'D'),
          P('Hot-air balloons lift when:', ['Average density of balloon system is low enough compared with surrounding air introductory buoyancy in gases', 'Air stops having density false', 'Gravity becomes repulsive false', 'Buoyancy only works in liquids false gases too'], 'A'),
          P('Hydrometer floats higher in denser liquids because:', ['Less volume must be displaced to match weight introductory', 'More volume always displaced false opposite trend for a given hydrometer mass', 'Density irrelevant false', 'Temperature irrelevant always false sometimes'], 'B'),
          P('If a cork is held underwater and released, it rises mainly because:', ['Buoyant force exceeds weight for cork introductory density comparison low density material', 'Water pushes only sideways false', 'Gravity points up false', 'Pressure is zero false'], 'C'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 3 Quiz 4 — Fluid flow and continuity',
        problems: [
          P('Continuity in a steady incompressible flow in a tube often gives:', ['Constant volume flow rate along the tube introductory A v constant', 'Constant pressure along the tube always false not generally without extra assumptions', 'Increasing mass creation false', 'Density going to zero false'], 'A'),
          P('If cross-sectional area decreases along a pipe for steady flow, speed usually:', ['Increases introductory continuity ideal fluid model', 'Decreases always false typical narrowing speeds up', 'Becomes negative false direction aside', 'Becomes infinite always false unless area goes to zero idealization singularity not physical'], 'B'),
          P('Bernoulli ideas connect pressure and speed along streamlines for ideal flow, often taught as:', ['Higher speed regions can correlate with lower pressure in many demonstrations introductory caveats viscous losses', 'Speed never affects pressure false ideal Bernoulli along streamline', 'Pressure irrelevant always false', 'Height irrelevant always false gravity head term exists'], 'C'),
          P('Turbulent flow differs from laminar partly by:', ['Irregular eddies and mixing higher losses introductory qualitative', 'Perfectly smooth layers always false laminar picture opposite', 'Zero viscosity assumption always false models vary', 'No velocity field false absurd'], 'D'),
          P('A nozzle accelerates fluid partly because:', ['Area decreases forcing higher speed for a given flow rate introductory', 'Area increases always false nozzle narrows typically', 'Flow stops false', 'Density must become zero false'], 'A'),
          P('Volume flow rate Q can be represented as:', ['A v introductory for uniform speed across area approximation', 'A plus v false', 'A divided by v only false inverse is sometimes mean speed from Q and A careful', 'Pressure squared false'], 'B'),
          P('Streamline sketches help visualize:', ['Flow direction patterns introductory qualitative', 'Internal energy distribution always false not primary', 'Electric charge density false', 'Sound pitch only false'], 'C'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 3 Quiz 5 — High-pressure safety',
        problems: [
          P('Before servicing hydraulic systems, training often stresses:', ['Depressurize and lock out energy sources introductory safety practice', 'Ignore labels false', 'Remove all tools false opposite', 'Increase pressure for fun false dangerous'], 'A'),
          P('A pinhole leak can be dangerous because:', ['Fluid can exit at very high speed introductory energy density', 'Pressure becomes zero instantly false often still dangerous', 'Fluids become nonwettting always false', 'Gravity reverses false'], 'B'),
          P('Personal protective equipment for high-pressure tasks may include:', ['Face shields and appropriate gloves introductory context dependent industry rules', 'Paper hat only insufficient often', 'Loose jewelry encouraged false hazard caught', 'Open-toe shoes encouraged false hazard'], 'C'),
          P('Stored energy in compressed gas cylinders is hazardous because:', ['Rapid expansion can do damage or fire risk with oxidizers introductory training', 'Gases lack pressure false they have pressure', 'Temperature cannot change false adiabatic processes exist', 'Volume cannot change false pistons move'], 'D'),
          P('Whipping hoses refer to risk that:', ['A free hose can move violently when pressurized fluid escapes introductory', 'Hoses always soften false not the point', 'Liquids cannot exert forces false', 'Pressure is harmless because it is invisible false'], 'A'),
          P('Relief valves help by:', ['Releasing excess pressure to reduce burst risk introductory engineering control', 'Increasing pressure always false opposite role unless malfunction', 'Stopping all flow permanently false may reseat', 'Eliminating need for maintenance false'], 'B'),
          P('Training emphasizes checking:', ['Ratings, connections, and leaks before operation introductory', 'Only colour of paint false insufficient alone', 'Only brand loyalty false', 'Astrology false'], 'C'),
        ],
      },
    ],
  },
];
