/**
 * Five entrance-exam-style MCQs per Grade 12 Physics topic (Natural stream).
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  const key = `${c}-${t}`;
  const banks = {
    '0-0': [
      Q('Physics relates most closely to other natural sciences mainly because it:', ['Provides quantitative laws that chemistry, biology, and Earth science build upon', 'Eliminates the need for experiments', 'Replaces mathematics in all fields', 'Ignores measurement uncertainty'], 'A'),
      Q('An interdisciplinary physics example at Grade 12 level is:', ['Modeling forces, energy, or fields in a biomedical imaging or environmental measurement context', 'Memorizing poem meters only', 'Avoiding SI units', 'Rejecting graphs'], 'A'),
      Q('A major reason physics uses models is to:', ['Represent complex systems with equations that can be tested and refined', 'Avoid ever updating theories', 'Hide experimental results', 'Replace observation entirely'], 'A'),
      Q('Compared with purely descriptive accounts, physics prioritizes:', ['Repeatable measurement, stated assumptions, and predictive power', 'Authority alone', 'Untestable claims', 'Ignoring assumptions'], 'A'),
      Q('Ethical scientific practice in physics-linked projects emphasizes:', ['Honest reporting, safety, and transparent limitations of the model', 'Altering data to fit expectations', 'Skipping peer review', 'Ignoring hazard labels'], 'A'),
    ],
    '0-1': [
      Q('Engineering design cycles commonly use physics to:', ['Estimate stresses, heat flow, electricity, and efficiency before building prototypes', 'Replace all drawings with slogans', 'Ignore failure analysis', 'Avoid standards'], 'A'),
      Q('A civil engineer uses mechanics ideas primarily to:', ['Analyze loads, stability, materials behavior, and safety margins', 'Replace soil testing', 'Estimate grammar rules', 'Ignore vectors'], 'A'),
      Q('Electronics and robotics rely on circuit physics because:', ['Voltage, current, resistance, and power constrain what a design can do safely', 'Components have random behavior with no rules', 'Ohm’s law never applies', 'Safety ratings are decorative'], 'A'),
      Q('Thermal management in technology devices connects to physics through:', ['Heat transfer, temperature limits, and energy dissipation in components', 'Only chemical symbols', 'Only alphabetical sorting', 'Ignoring wattage'], 'A'),
      Q('Quality control in manufacturing often measures physics quantities such as:', ['Force, pressure, temperature, vibration, or electrical parameters', 'Only font sizes on labels', 'Only employee birthdays', 'Only product color names'], 'A'),
    ],
    '0-2': [
      Q('Ionizing radiation used in some medical imaging must be managed because it:', ['Can damage tissue; benefit versus risk is optimized with protocols and shielding', 'Has no biological effects', 'Cannot be measured', 'Eliminates all diagnostic value'], 'A'),
      Q('Ultrasound imaging primarily relies on:', ['High-frequency mechanical waves reflected at tissue boundaries', 'Ionizing nuclear radiation in typical diagnostic mode', 'Static magnetic resonance of nuclei in all cases', 'Visible light only'], 'A'),
      Q('MRI safety training stresses keeping ferromagnetic objects away because:', ['Strong magnetic fields can turn metal items into dangerous projectiles', 'MRI uses only sound waves', 'Magnets remove all tissue heating concerns', 'RF coils cannot heat tissue'], 'A'),
      Q('Radiotherapy treatment planning uses physics to:', ['Compute dose distribution to target tumors while sparing healthy tissue', 'Guess doses without measurement', 'Ignore absorption in tissue', 'Replace medical oversight'], 'A'),
      Q('Contrast agents in some imaging modalities are chosen to:', ['Improve visibility of structures by altering how waves or radiation interact', 'Remove the need for operators', 'Replace all physics calibration', 'Guarantee zero side effects always'], 'A'),
    ],
    '0-3': [
      Q('Physics supports defense-related sensing by enabling principles such as:', ['Radar, lidar, infrared detection, and signal processing of electromagnetic returns', 'Only handwriting analysis', 'Ignoring propagation delays', 'No use of waves'], 'A'),
      Q('Stealth and camouflage discussions often involve physics of:', ['Reflection, absorption, and scattering of electromagnetic waves across wavelengths', 'Only chemical odors', 'Only acoustic spelling', 'Ignoring wavelength'], 'A'),
      Q('Ballistics and guidance use classical mechanics because:', ['Trajectory, impulse, and energy models help predict motion under stated assumptions', 'Motion has no equations', 'Gravity depends on object color', 'Drag is always negligible without checking'], 'A'),
      Q('Nuclear safeguards and detection training emphasize:', ['Instrumentation, shielding, statistics of rare events, and chain-of-custody rigor', 'Ignoring dose limits', 'Discarding calibration', 'Assuming all readings are exact'], 'A'),
      Q('Acoustic sensing in underwater applications relies on:', ['Propagation, reflection, and attenuation of sound in water', 'Only visible light photography', 'Zero absorption in seawater', 'Speed of sound having no temperature dependence'], 'A'),
    ],
    '0-4': [
      Q('Modern communication systems depend on physics of:', ['Electromagnetic waves, modulation, bandwidth, noise, and information limits', 'Only paper mail routes', 'Signals requiring no energy to transmit', 'Infinite bandwidth always'], 'A'),
      Q('Fiber-optic links use physics of:', ['Total internal reflection and low-loss guided light propagation in glass fibers', 'Sound in copper only', 'Visible light through empty vacuum tubes only', 'No relation to refractive index'], 'A'),
      Q('Antenna design ties physics to communication because:', ['Radiation patterns depend on wavelength, geometry, and impedance matching', 'Antennas ignore frequency', 'Size never matters near wavelength', 'No Maxwell concepts apply'], 'A'),
      Q('Satellite communication must account for:', ['Path loss, latency, atmospheric effects, and orbital mechanics in planning links', 'Infinite instantaneous bandwidth', 'Zero propagation delay', 'No Doppler effects ever'], 'A'),
      Q('Cellular networks allocate spectrum and power using ideas from:', ['Information capacity, interference, SNR, and regulatory emission limits', 'Only random guessing', 'No channel sharing concepts', 'Ignoring safety SAR limits entirely'], 'A'),
    ],
    '1-0': [
      Q('In ideal projectile motion near Earth, horizontal and vertical motions are often analyzed separately because:', ['Horizontal acceleration is modeled as ~0 while vertical acceleration is modeled as g downward', 'Horizontal acceleration must equal g', 'Time differs for the two components', 'Gravity only acts horizontally'], 'A'),
      Q('At the projectile’s highest point in a symmetric ideal model, the vertical component of velocity is:', ['Zero momentarily while horizontal component may remain nonzero', 'Always equal to launch speed', 'Maximum upward always', 'Undefined in all cases'], 'A'),
      Q('Range on level ground in a simple symmetric model increases with launch speed and varies with angle; for fixed speed the classical textbook optimum is near:', ['45° when landing height equals launch height in the ideal uniform g model', '0° always maximal', '90° always maximal', 'always independent of angle'], 'A'),
      Q('Horizontal distance traveled by a projectile depends on:', ['Flight time and nearly constant horizontal speed in the ideal model', 'Only launch angle with no time dependence', 'Mass directly in vacuum-level intro before advanced drag', 'A color of the object'], 'A'),
      Q('Choosing consistent axes (+x horizontal, +y up) helps avoid errors when applying:', ['Constant-acceleration kinematics to the vertical component separately', 'Only zero acceleration everywhere falsely', 'Only thermal expansion equations', 'Nuclear decay half-life only'], 'A'),
    ],
    '1-1': [
      Q('Angular displacement Δθ is most directly analogous among these to:', ['Linear displacement along a curved path for pure rotation about an axis', 'Linear momentum', 'Electric charge', 'Latent heat'], 'A'),
      Q('Angular velocity ω is defined conceptually as:', ['Rate of change of angular displacement with respect to time', 'Mass times radius', 'Torque divided by mass always', 'Centripetal force only'], 'A'),
      Q('For uniform rotation about a fixed axis, every point on a rigid body shares the same:', ['Angular speed ω while linear speed v depends on radius', 'Linear speed regardless of radius falsely', 'Angular acceleration that must be infinite', 'Zero velocity always'], 'A'),
      Q('Converting between linear and angular quantities along circular motion often uses:', ['v = Rω and tangential acceleration a_t = Rα when rolling without slip is stated separately later', 'v = ω/R incorrectly as a universal swap', 'ω = vR incorrectly always', 'No relation between v and ω'], 'A'),
      Q('The SI unit of angular speed is appropriately expressed as:', [' radians per second (rad/s) among standard choices', 'meters per second for ω universally falsely', 'Newtons per ampere falsely', 'Joules per kelvin falsely'], 'A'),
    ],
    '1-2': [
      Q('Torque magnitude about an axis due to a force can be modeled as:', ['|τ| = r_|F_| sin θ with lever-arm interpretation (intro)', 'Always equal to mg regardless of geometry falsely', 'Force times mass falsely', 'Always zero unless object moves linearly'], 'A'),
      Q('Rotational analog of Newton’s law for rigid body intro form includes:', ['Στ = Iα about a chosen axis under appropriate modeling assumptions', 'Στ = mv always falsely', 'Στ always zero for any rotation falsely', 'Torque has no direction sense'], 'A'),
      Q('Angular momentum L for a particle intro model can be expressed as:', ['L = r × p with magnitude related to r, p, and sin(angle) between them', 'L always equals mv regardless of point falsely', 'L is always zero if speed is constant falsely', 'L has no conserved special cases'], 'A'),
      Q('Increasing moment of inertia I for the same applied torque tends to:', ['Reduce angular acceleration α if Στ is held similar (intro qualitative)', 'Always increase α blindly', 'Eliminate friction by definition falsely', 'Make ω infinite instantly'], 'A'),
      Q('Conservation of angular momentum applies in many intro problems when:', ['Net external torque about an axis is modeled as zero', 'Any friction exists always falsely', 'Linear momentum is always zero falsely', 'Objects cannot spin'], 'A'),
    ],
    '1-3': [
      Q('Kepler’s first law states planets move in:', ['Elliptical orbits with the Sun at one focus in the classical model', 'Perfect circles always exactly', 'Random curves with no focus', 'Straight lines away from the Sun always'], 'A'),
      Q('Kepler’s second law is about:', ['Areal velocity swept by the radius vector being constant for a given orbit (intro)', 'Constant speed everywhere on the orbit falsely', 'Period independent of semimajor axis falsely', 'Only circular motion'], 'A'),
      Q('Kepler’s third law relates period T and semimajor axis a approximately as:', ['T² ∝ a³ for planets around the same central mass in the simplest textbook forms (intro)', 'T ∝ a falsely linear always', 'T independent of a falsely', 'T ∝ 1/a³ falsely'], 'A'),
      Q('More distant planets in the solar system tend to have:', ['Longer orbital periods consistent with larger a in Kepler’s third law trend (intro)', 'Shorter periods always falsely', 'The same period regardless of a falsely', 'Zero angular momentum'], 'A'),
      Q('Circular orbit speed intro around a massive central body depends on:', ['Gravitational attraction providing centripetal acceleration in the simplified model', 'Only the planet’s color', 'No dependence on central mass falsely', 'Orbital speed always equals escape speed falsely'], 'A'),
    ],
    '1-4': [
      Q('Newton’s law of universal gravitation gives magnitude F roughly as:', ['F ∝ m1 m2 / r² for point-like or spherical masses in introductory forms', 'F ∝ r² (inverse of the real trend) falsely', 'No dependence on distance falsely', 'Repulsive for all masses falsely'], 'A'),
      Q('The gravitational force between two masses is always attractive because:', ['Masses are positive scalars and the law yields an attractive interaction along the line joining them (intro)', 'Like charges repel always falsely here', 'Magnetic poles dominate falsely', 'Mass cancels out leaving repulsion falsely'], 'A'),
      Q('Weight near a planet’s surface models as:', ['W ≈ mg using local gravitational field strength at the location', 'Always identical on the Moon as on Earth without checking falsely', 'Independent of altitude always falsely', 'Equal to the normal force in every scenario falsely'], 'A'),
      Q('Doubling the distance between two point masses in the inverse-square law scales force by about:', ['One fourth if other factors are unchanged in the ideal model', 'Four times falsely', 'No change falsely', 'Doubling falsely'], 'A'),
      Q('Gravitational field strength g at a point conceptually means:', ['Gravitational force per unit mass on a small test mass (intro)', 'Electric field times charge falsely', 'Always zero in space falsely', 'Thermal energy per mole falsely'], 'A'),
    ],
    '2-0': [
      Q('Pressure in a fluid at rest increases with depth mainly because:', ['The weight of the fluid column above adds to the load at that level', 'Depth decreases pressure always falsely', 'Pressure is the same at all depths falsely', 'Only the container shape sets pressure falsely'], 'A'),
      Q('In a connected static fluid, pressure at a given depth depends on:', ['Fluid density, gravitational acceleration, and vertical depth in the usual P = P0 + ρgh model (intro)', 'Only the container color', 'Horizontal area of the tank base only falsely', 'Zero contribution from ρ falsely'], 'A'),
      Q('Absolute versus gauge pressure ideas emphasize that:', ['Absolute includes atmospheric contribution; gauge is relative to atmosphere in common engineering language (intro)', 'They are always identical everywhere falsely', 'Gauge can never be negative falsely', 'Absolute is always zero falsely'], 'A'),
      Q('A mercury barometer example ties pressure to:', ['Column height balancing atmospheric pressure in simple hydrostatic models', 'Radiation dosage', 'Induced emf directly falsely', 'Semiconductor doping'], 'A'),
      Q('Poor depth unit consistency (mixing meters and centimeters blindly) in ρgh calculations typically causes:', ['Large errors in predicted pressure magnitudes', 'Automatic exactness blindly', 'No effect on order of magnitude falsely', 'Only graphical mistakes'], 'A'),
    ],
    '2-1': [
      Q('Pascal’s principle states roughly that in a confined incompressible fluid:', ['A pressure change applied is transmitted throughout the fluid (intro)', 'Pressure is trapped at the point of application only falsely', 'Liquids cannot transmit pressure falsely', 'Pressure depends only on container volume falsely'], 'A'),
      Q('Hydraulic lifts exploit Pascal’s idea by:', ['Using a small force on a small area to create large pressure that acts on a larger area to yield larger force (idealization intro)', 'Violating energy conservation in real machines falsely', 'Eliminating the need for pumps always falsely', 'Ignoring fluid density entirely always'], 'A'),
      Q('In many intro problems, if pistons are horizontal and height differences are negligible, the key scaling compares:', ['Force ratios to area ratios under the same transmitted pressure assumption', 'Only masses unrelated to areas falsely', 'Only temperatures', 'Only string tensions'], 'A'),
      Q('Assuming an incompressible fluid is a model that:', ['Ignores density changes under pressure for simplicity in introductory cases', 'Matches gases near high compression always blindly', 'Means the fluid has zero density falsely', 'Eliminates viscosity in all cases automatically'], 'A'),
      Q('If a leak appears in a high-pressure hydraulic line, the first safety concern is:', ['Rapid release of stored fluid energy and uncontrolled motion of loads', 'That pressure becomes infinite instantly falsely', 'That liquids vanish from physics falsely', 'That Pascal’s principle stops holding instantly falsely'], 'A'),
    ],
    '2-2': [
      Q('Archimedes’ principle states the buoyant force equals:', ['The weight of the fluid displaced by the submerged part of the object (intro)', 'The object’s weight always falsely', 'The object’s volume in kilograms falsely', 'Zero whenever the object floats falsely'], 'A'),
      Q('An object floats when averaged over equilibrium if:', ['Buoyant force balances weight for the displaced volume in the fluid model used', 'Its density is always larger than fluid falsely in float cases', 'It displaces no fluid falsely', 'Gravity turns off'], 'A'),
      Q('Measuring displaced water volume helps determine:', ['Buoyant force or density-related quantities in introductory lab reasoning', 'Nuclear half-life directly falsely', 'Magnetic dipole moment only falsely', 'Photon frequency'], 'A'),
      Q('A common student error is confusing “weight in air” with “true weight” while forgetting:', ['Tension/support forces and buoyant effects from surrounding fluid in careful analysis', 'That mass changes with location falsely (intro caveat)', 'That buoyancy never exists in liquids falsely', 'That Archimedes only applies to gases falsely'], 'A'),
      Q('Apparent weight in a fluid can differ from actual weight because:', ['Buoyancy reduces the net downward force needed from a scale/support in static models (intro)', 'Gravity disappears underwater falsely', 'Density becomes irrelevant falsely', 'Water has no pressure falsely'], 'A'),
    ],
    '2-3': [
      Q('Continuity equation for steady flow in a tube intro expresses:', ['Mass conservation leading to A1v1 ≈ A2v2 for incompressible flow model', 'Energy always conserved without losses automatically falsely', 'Bernoulli with no assumptions falsely always', 'Turbulence never occurs falsely'], 'A'),
      Q('If a pipe narrows and flow is modeled as steady incompressible, speed tends to:', ['Increase in the narrower section', 'Decrease always falsely', 'Stay unchanged regardless of area falsely', 'Become negative falsely'], 'A'),
      Q('Volume flow rate Q in simple intro forms links to:', ['Cross-sectional area times average flow speed in the model Q = Av', 'Pressure squared always falsely', 'Only viscosity alone falsely', 'Temperature alone'], 'A'),
      Q('Bernoulli’s equation is introduced alongside continuity to relate:', ['Pressure, flow speed, and elevation changes along streamlines under stated idealizations', 'Only static fluids with no motion always falsely', 'Nuclear binding energy falsely', 'Ohm’s law only'], 'A'),
      Q('Real fluids differ from ideal models partly because of:', ['Viscosity, turbulence, and energy dissipation omitted in simplest textbook cases', 'Having zero density always falsely', 'Violating mass conservation permanently falsely', 'No measurable pressure'], 'A'),
    ],
    '2-4': [
      Q('High-pressure hydraulic systems require design attention to:', ['Rated hoses/fittings, pressure relief, guarding pinch points, and leak containment', 'Eliminating all warnings', 'Using any plastic tube blindly', 'Operating with removed relief valves'], 'A'),
      Q('Before maintaining a pressurized line, introductory safety culture advises:', ['De-energize, relieve stored pressure, verify zero energy state, and lockout/tagout procedures where applicable', 'Opening fittings under load confidently', 'Assuming pressure is zero without checking', 'Ignoring spray risk'], 'A'),
      Q('A fluid jet under high pressure can cut or injure because:', ['It carries momentum and can penetrate skin or move unsecured parts', 'It is always harmless below 1 MPa falsely', 'Liquids cannot do work falsely', 'Pressure never translates to motion falsely'], 'A'),
      Q('Stored energy in compressed gas/liquid systems can cause:', ['Sudden uncontrolled motion or rupture hazards if released incorrectly', 'Cooling only with no mechanical risk falsely', 'Instant loss of all pressure without flow falsely', 'No need for emergency planning falsely'], 'A'),
      Q('Personal protective equipment around high-pressure labs often includes:', ['Eye/face protection and awareness of pinhole leaks that can be nearly invisible but dangerous', 'Only cotton for all chemicals falsely', 'Open-toe shoes', 'Removing guards for better visibility'], 'A'),
    ],
    '3-0': [
      Q('A magnetic field exerts a force on a moving charge given by the Lorentz law form:', ['F = q(v × B) in vector notation with magnitude involving sin θ between v and B (intro)', 'Always parallel to v regardless of B falsely', 'Zero unless the charge is at rest falsely general', 'Independent of q falsely'], 'A'),
      Q('The direction of magnetic force on a positive charge uses:', ['The right-hand rule for the cross product v × B (intro conventions)', 'Always opposite to B without exception falsely', 'Heat-flow direction always falsely', 'Gravitational field only'], 'A'),
      Q('A straight current-carrying wire in an external magnetic field experiences a force:', ['Described by the vector law for current elements (intro: I L × B form when uniform along segment models)', 'Always parallel to the wire’s current regardless of B falsely', 'Only when the wire is uncharged falsely', 'Never, because magnetic fields do no work on moving charges falsely oversimplified confusion'], 'A'),
      Q('If velocity is parallel to the magnetic field in the elementary model, the magnetic force magnitude is:', ['Zero because sin θ = 0 in |q|vB sin θ', 'Maximum always falsely', 'Infinite falsely', 'Depends only on mass not q falsely'], 'A'),
      Q('Uniform magnetic fields can make charged particles move in:', ['Circular or helical paths depending on velocity components relative to B (intro)', 'Always straight lines regardless of v falsely', 'Only elliptical planetary orbits falsely here', 'Static equilibrium without motion always falsely'], 'A'),
    ],
    '3-1': [
      Q('Faraday’s law of induction connects changing magnetic flux to:', ['Induced emf in a loop (magnitude linked to rate of flux change in intro forms)', 'Constant flux always yielding infinite emf falsely', 'Only static charges with no loops falsely', 'Heat capacity of copper only'], 'A'),
      Q('Lenz’s law explains the sign of induced effects by emphasizing:', ['Induced currents oppose the change in flux that produced them (intro qualitative)', 'Induced current always aids the change blindly always falsely', 'Magnetic flux is always zero falsely', 'Induction never happens in coils falsely'], 'A'),
      Q('Moving a magnet into a coil can induce a current because:', ['The relative motion changes magnetic flux through the coil turns', 'Coils create permanent magnets instantly falsely', 'Resistance forces induction to stop falsely', 'Voltage cannot exist in wires falsely'], 'A'),
      Q('Magnetic flux Φ through a flat loop intro can be modeled as:', ['Φ = BA cos θ linking area orientation to field direction (intro)', 'Always BA regardless of angle falsely', 'Independent of field strength falsely', 'Only electric field lines falsely mixed'], 'A'),
      Q('A changing current in one coil can induce emf in another nearby coil via:', ['Mutual induction and linked magnetic flux between the coils (intro)', 'Chemical bonding only falsely', 'Direct conduction without wire connection always falsely', 'Only gravitational coupling falsely'], 'A'),
    ],
    '3-2': [
      Q('An electrical generator converts:', ['Mechanical energy into electrical energy via electromagnetic induction in practical designs', 'Heat into chemical energy only falsely', 'DC into permanent magnets only falsely', 'Voltage into mass falsely'], 'A'),
      Q('A basic AC generator idea uses:', ['Coils rotating in a magnetic field so flux varies sinusoidally over time in ideal textbook introductions', 'A battery inside the magnet falsely', 'No magnetic field required falsely', 'Constant flux to maximize emf falsely'], 'A'),
      Q('A transformer transfers power between coils through:', ['Shared magnetic flux in the core and time-varying fields (intro ideal transformer model)', 'Direct metallic connection between primary and secondary always falsely', 'Only chemical reactions falsely', 'Changing gravity'], 'A'),
      Q('Ideal transformer voltage ratio scales with:', ['Turns ratio N2/N1 in introductory models assuming perfect coupling (intro)', 'Wire color codes only falsely', 'Resistance only falsely', 'Core color only falsely'], 'A'),
      Q('Step-up transformers increase voltage while in idealized power conservation reasoning:', ['Current decreases inversely in many textbook idealizations (P ≈ VI concept)', 'Current always increases with voltage blindly in all real cases falsely general', 'Power becomes infinite always falsely', 'Efficiency must be zero falsely'], 'A'),
    ],
    '3-3': [
      Q('Household outlets use AC mainly because it:', ['Allows efficient voltage transformation for long-distance transmission and distribution', 'Eliminates all resistance falsely', 'Means charge flows only one direction always falsely', 'Prevents use of transformers falsely'], 'A'),
      Q('RMS values are quoted for AC because they correlate with:', ['Equivalent energy/heating effects compared to DC in resistive loads in common definitions (intro)', 'Peak voltage always numerically falsely', 'Instantaneous voltage at one random time only falsely', 'Battery emf directly'], 'A'),
      Q('Skin effect at high frequencies tends to:', ['Concentrate current nearer the conductor surface, affecting effective resistance in AC models (intro qualitative)', 'Make current uniform regardless of frequency falsely', 'Eliminate magnetic fields around wires falsely', 'Stop transformers from working falsely'], 'A'),
      Q('Power factor in AC circuits matters because:', ['It affects real power delivery relative to apparent power when voltage and current are not in phase (intro)', 'It is always exactly 1 in every practical load falsely', 'It is unrelated to phase angle falsely', 'It replaces voltage entirely falsely'], 'A'),
      Q('High-voltage transmission lines reduce current for a given power, helping limit:', ['I²R line losses compared with lower voltage for the same delivered power in simplified P = IV reasoning', 'All losses to zero falsely', 'The need for insulators falsely', 'Frequency of the grid falsely'], 'A'),
    ],
    '3-4': [
      Q('Radio transmitters encode information on carrier waves using ideas such as:', ['Amplitude, frequency, or phase modulation in classical communication physics intros', 'Constant amplitude always for all services falsely', 'Only thermal noise', 'Sending DC carriers without oscillation falsely'], 'A'),
      Q('A tuned LC circuit can select frequencies because:', ['Resonance emphasizes a narrow band of frequencies in introductory models', 'It blocks all frequencies equally falsely', 'It eliminates inductance falsely', 'It removes Maxwell’s equations falsely'], 'A'),
      Q('Electromagnetic interference mitigation may involve:', ['Shielding, grounding, filtering, and good layout practices for high-frequency circuits', 'Removing all capacitors blindly', 'Increasing loop area for fun', 'Ignoring FCC/ITU concepts entirely'], 'A'),
      Q('Antenna polarization affects link quality because:', ['The receiver sensitivity depends on matching polarization in many line-of-sight communication setups (intro)', 'Polarization is purely cosmetic falsely', 'Magnetic fields are not part of EM waves falsely', 'Wavelength is irrelevant falsely'], 'A'),
      Q('Fiber is preferred over long copper for some links partly because:', ['Lower attenuation per kilometer and immunity to many kinds of conducted interference (intro survey)', 'Copper cannot carry electricity falsely', 'Light carries infinite power in fiber falsely', 'Fiber requires no transmitters falsely'], 'A'),
    ],
    '4-0': [
      Q('Semiconductors like silicon are useful because conductivity can be tuned by:', ['Doping with donor or acceptor impurities to change carrier concentrations (intro)', 'Painting them any color', 'Heating until they become perfect insulators always falsely', 'Removing all crystal structure without effects falsely'], 'A'),
      Q('An n-type semiconductor (intro idea) has increased:', ['Majority electron carriers due to donor dopants in the common textbook cartoon', 'Positive “holes” as majority in the same simplistic labeling falsely', 'Zero free carriers always falsely', 'No effect on conductivity falsely'], 'A'),
      Q('A p-type semiconductor (intro idea) has increased:', ['Majority holes due to acceptor dopants in introductory semiconductor storylines', 'Majority electrons by the same acceptor story falsely', 'Infinite conductivity always falsely', 'No band gap falsely'], 'A'),
      Q('Intrinsic semiconductor carrier concentrations rise with temperature largely because:', ['More electron-hole pairs are thermally generated across the band gap (intro qualitative)', 'All electrons vanish as T increases falsely', 'The lattice disappears falsely', 'Doping becomes irrelevant at any T falsely'], 'A'),
      Q('PN junctions form built-in electric fields because:', ['Mobile carriers diffuse leaving ionized dopants and establishing equilibrium separation (intro cartoon)', 'Copper and aluminum touch falsely here', 'Magnetic monopoles align falsely', 'Gravity dopes silicon falsely'], 'A'),
    ],
    '4-1': [
      Q('A diode conducts easily in forward bias because:', ['The applied voltage reduces the barrier so significant current can flow under the model assumptions (intro)', 'Reverse bias always increases current strongly falsely', 'Diodes are linear resistors at all voltages falsely', 'Temperature never affects diode curves falsely'], 'A'),
      Q('Rectification converts AC to pulsating DC using diodes because diodes:', ['Allow preferential current in one direction under the intended operating conditions (intro)', 'Conduct equally in both directions always falsely', 'Eliminate all ripple without filters falsely', 'Raise frequency without circuits falsely'], 'A'),
      Q('A bridge rectifier uses multiple diodes to:', ['Steer both half-cycles of AC to produce a mostly one-direction output (intro pattern)', 'Generate AC from DC falsely', 'Remove transformers entirely always falsely', 'Cool the transformer by magic falsely'], 'A'),
      Q('Zener diodes are often used for (intro survey):', ['Reference or simple regulation by operating in reverse breakdown in controlled conditions', 'Amplifying music without power falsely', 'Creating perpetual motion falsely', 'Blocking all voltage always falsely'], 'A'),
      Q('LED operation is related to semiconductor physics because:', ['Forward-biased recombination can emit photons in materials engineered for efficient light emission (intro)', 'They emit via incandescent filament heat always falsely', 'They require superconductivity falsely', 'They ignore band gaps falsely'], 'A'),
    ],
    '4-2': [
      Q('A bipolar transistor can amplify because:', ['A small base current controls a much larger collector current in active region biasing models (intro cartoon)', 'It stores infinite charge always falsely', 'It always acts like two independent diodes with no interaction falsely', 'Gain is independent of operating point always falsely'], 'A'),
      Q('Using a transistor as a switch often places it between:', ['Saturation (on) and cutoff (off) states in digital-style introductory explanations', 'Always active amplification only for every application falsely', 'Superconducting states at room temperature falsely', 'Reverse breakdown solely falsely'], 'A'),
      Q('Field-effect transistor (intro idea) emphasizes control by:', ['Electric field from gate voltage modulating channel conductivity in simplified explanations', 'Mechanical lever motion falsely', 'Only temperature hysteresis in all devices falsely', 'Gravity on the gate pin literally falsely'], 'A'),
      Q('Biasing networks are needed because transistors require:', ['Correct operating voltages/currents to sit in the intended region of their characteristic curves (intro)', 'Random voltages always falsely', 'Zero base current always to amplify falsely', 'No power supplies ever falsely'], 'A'),
      Q('Heat sinks help in power transistors mainly to:', ['Limit temperature rise so safe operation margins and reliability are maintained', 'Remove all electrical resistance falsely', 'Convert AC to DC without diodes falsely', 'Increase noise unconditionally'], 'A'),
    ],
    '4-3': [
      Q('Integrated circuits package many components on one chip to:', ['Reduce size, parasitics, and interconnect delays compared to discrete wiring (intro)', 'Guarantee infinite speed always falsely', 'Remove the need for power supplies falsely', 'Eliminate manufacturing variability entirely falsely'], 'A'),
      Q('A logic inverter (NOT) outputs high when input is low in ideal digital abstraction because:', ['The gate circuit implements a controlled switching function per the technology family design', 'Analog amplifiers always invert phase only falsely', 'Heat always increases high output falsely unrelated', 'Magnetic cores store bits without power falsely'], 'A'),
      Q('NAND and NOR gates are practically important because:', ['They can be combined to build any combinational logic network in Boolean completeness introductions', 'They can only add numbers falsely', 'They cannot implement AND/OR falsely', 'They require mechanical relays always falsely'], 'A'),
      Q('Fan-out limits in digital design relate to:', ['How many inputs can be driven without violating voltage/current thresholds (intro qualitative)', 'Wind speed on chips literally falsely', 'The number of songs stored falsely', 'Thermal conductivity only falsely'], 'A'),
      Q('Propagation delay matters because:', ['It limits how fast synchronous digital circuits can be clocked in real devices', 'It is always zero in real wires falsely', 'It replaces power consumption completely falsely', 'It has no relation to switching time falsely'], 'A'),
    ],
    '4-4': [
      Q('Switch-mode power supplies are common because they can achieve:', ['High efficiency using fast switching and magnetic energy storage elements in modern designs (intro survey)', 'Zero losses always falsely', 'Only linear regulation without inductors falsely', 'Operation without any control ICs always falsely'], 'A'),
      Q('Microcontrollers embed peripherals so embedded systems can:', ['Sense inputs, compute, and drive outputs for automation and communication (intro)', 'Only heat the board purposefully falsely', 'Operate without clocks always falsely', 'Eliminate the need for software falsely'], 'A'),
      Q('ADCs translate analog sensor voltages into digital codes for DSP; sampling must respect:', ['Nyquist-type constraints and quantization limits in introductory signal discussions', 'Infinite bandwidth always falsely', 'No need for anti-aliasing filters ever falsely', 'Only mechanical speed of gears falsely'], 'A'),
      Q('MEMS sensors in phones use micro-engineered structures and electronics to measure quantities such as:', ['Acceleration, rotation, or environmental parameters using packaged integrated modules (intro)', 'Only nuclear forces directly falsely', 'Sound without any physics falsely', 'Only chemical titration falsely'], 'A'),
      Q('Responsible e-waste practice matters because electronic devices contain:', ['Materials and sometimes hazards that need proper recycling and recovery pathways', 'Only silica with zero metals falsely', 'No energy storage components falsely', 'No recoverable copper falsely'], 'A'),
    ],
  };

  if (banks[key]) return banks[key];
  return [
    Q(`Which statement best matches Grade 12 Physics topic ${key}?`, ['Uses syllabus concepts with measurement-aware reasoning', 'Ignores SI units fully', 'Only memorizes names', 'Avoids careful modeling'], 'A'),
    Q('Cross-topic readiness in Grade 12 physics includes relating forces energy waves and fields to:', ['Concrete technologies and safety constraints illustrated in the course', 'Only literary themes', 'Only alphabetical formulas', 'No laboratory connection'], 'A'),
    Q('Numerical reasoning with stated assumptions helps avoid:', ['Silent contradictions like ignoring friction while claiming ideal free motion without saying so', 'Writing any units', 'Checking limits', 'Graphing relationships'], 'A'),
    Q('Exam-style items reward recognizing which model applies because:', ['Different idealizations change which equation setup is appropriate', 'All models are identical', 'Gravity is optional everywhere falsely', 'Vectors are never used'], 'A'),
    Q('Communicating limitations such as “ideal fluid” or “long solenoid approximation” is important so that:', ['Predictions are interpreted correctly and refined when needed', 'Approximations are always exact', 'Measurements must never be repeated', 'Mathematics can replace experiments entirely falsely'], 'A'),
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
        `Entrance-exam style item (Grade 12 Physics), aligned to “${topicName}”.`,
    };
  });
}

module.exports = {
  buildExamQuestionsForTopic,
  EC_YEARS,
};
