/**
 * Grade 10 Physics curriculum — Units 4–6 (Ethiopia MoE outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 4: Static and current electricity',
    chapterDescription:
      'Electric charge and charging methods, Coulomb law and fields, circuits with Ohm law, resistor networks and meters, safety and simple electric projects (survey).',
    topics: [
      {
        topicName: 'Electric charge, charging, electroscope and discharge',
        topicDescription:
          'Two kinds of charge, conservation, friction and contact charging, electroscope behaviour, grounding and discharge.',
        topicObjectives: [
          'Describe charging by friction and contact using electron transfer language introductory.',
          'Explain electroscope deflection and grounding as charge detection and neutralization.',
          'State conservation of charge for isolated systems introductory.',
        ],
      },
      {
        topicName: 'Coulomb law and electric field',
        topicDescription:
          'Inverse-square force between point charges; electric field lines and direction (survey).',
        topicObjectives: [
          'Use Coulomb law qualitatively for attraction and repulsion between like and unlike charges.',
          'Sketch electric field lines around simple charge configurations introductory.',
          'Relate field direction to force on a positive test charge introductory.',
        ],
      },
      {
        topicName: 'Electric circuits, current, voltage and Ohm law',
        topicDescription:
          'Closed paths, conventional current, potential difference, resistance and V = IR in simple circuits.',
        topicObjectives: [
          'Define current as rate of charge flow and voltage as energy per charge introductory.',
          'Apply Ohm law to find one quantity when two are known in simple resistors.',
          'Distinguish series and parallel connection effects on current and voltage introductory.',
        ],
      },
      {
        topicName: 'Resistor combinations and meter connections',
        topicDescription:
          'Equivalent resistance for series and parallel groups; ammeter and voltmeter placement (survey).',
        topicObjectives: [
          'Calculate equivalent resistance for resistors in series and in parallel introductory.',
          'Place ammeters in series and voltmeters in parallel with the component measured introductory.',
          'Interpret simple circuit diagrams with bulbs and resistors.',
        ],
      },
      {
        topicName: 'Electrical safety and electric projects',
        topicDescription:
          'Household hazards, fuses and breakers, earthing, and classroom wiring projects with safe practice.',
        topicObjectives: [
          'Identify shock and fire risks from water, damaged insulation, and overloaded circuits introductory.',
          'Explain earthing and fuse or breaker roles in protecting users and equipment survey.',
          'Follow safe wiring steps for simple student projects using low-voltage supplies.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Charge types', 'Like charges:', ['Repel introductory', 'Attract always false', 'Have no interaction', 'Cancel mass'], 0, 'Easy'),
      ex(0, 'Conservation', 'In an isolated group of objects, total charge:', ['Increases randomly', 'Remains constant introductory', 'Always becomes zero', 'Doubles each second'], 1, 'Easy'),
      ex(1, 'Coulomb', 'Doubling distance between two point charges divides force by about:', ['2', '4 introductory inverse square', '8', '1'], 1, 'Medium'),
      ex(1, 'Field', 'Electric field lines point away from:', ['Positive source charge introductory convention', 'Negative charge only always false', 'Neutral wire only', 'Ground always'], 0, 'Easy'),
      ex(2, 'Ohm', 'A 12 V battery across 4 Ω gives current:', ['3 A introductory I=V/R', '48 A', '0.33 A inverted trap', '16 A'], 0, 'Easy'),
      ex(2, 'Units', 'SI unit of resistance is:', ['Ohm introductory', 'Volt', 'Ampere', 'Coulomb'], 0, 'Easy'),
      ex(3, 'Series R', 'Two 6 Ω resistors in series have equivalent resistance:', ['12 Ω introductory', '3 Ω parallel trap', '36 Ω', '0 Ω'], 0, 'Easy'),
      ex(4, 'Safety', 'Water near live mains increases risk mainly because:', ['It improves insulation falsely', 'It lowers resistance of skin path introductory', 'It removes charge', 'It blocks current'], 1, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 4 Quiz 1 — Charge and electroscope',
        problems: [
          P('Rubbing a plastic rod with cloth often transfers:', ['Protons in bulk introductory classroom model focuses electrons', 'Electrons between surfaces introductory', 'Neutrons primarily', 'Photons only'], 'B'),
          P('A neutral electroscope touched by a negatively charged rod becomes:', ['Positively charged always false', 'Negatively charged introductory contact sharing', 'Unable to hold charge ever false', 'Massless'], 'B'),
          P('Grounding a charged object allows excess charge to:', ['Flow to Earth introductory survey wording', 'Multiply indefinitely', 'Become magnetic only', 'Freeze in place'], 'A'),
          P('Charging by induction can separate charges without:', ['Permanent contact with the charging body introductory survey', 'Any electrons moving falsely', 'A conductor present false', 'Voltage existing'], 'A'),
          P('Conservation of charge means net charge in an isolated system:', ['Cannot be created or destroyed introductory', 'Must always be zero false can redistribute', 'Doubles each hour false', 'Depends on colour'], 'A'),
          P('Lightning discharge is an example of:', ['Large-scale charge neutralization introductory', 'Only static on small rods false scale differs', 'Magnetic monopole flow false', 'Nuclear fission'], 'A'),
          P('After discharge, leaves of a neutral electroscope:', ['Hang together introductory no net charge', 'Always repel maximally false needs charge', 'Melt false', 'Conduct like copper wire falsely'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 4 Quiz 2 — Coulomb law and field',
        problems: [
          P('Coulomb force between two positive charges is:', ['Attractive false', 'Repulsive introductory', 'Zero always false', 'Perpendicular to line only false'], 'B'),
          P('Doubling both charges while keeping distance fixed multiplies force by:', ['2', '4 introductory product in numerator', '8', '1'], 'B'),
          P('Electric field at a point describes force on:', ['A test charge introductory definition survey', 'Only neutrons', 'Mass only', 'Sound wave'], 'A'),
          P('Field lines closer together suggest:', ['Stronger field introductory qualitative density idea', 'Weaker field false', 'Zero field always false', 'Only gravity'], 'A'),
          P('SI unit of electric field can be expressed as:', ['N C⁻¹ introductory', 'kg m⁻³ density trap', 'J only incomplete', 'Ω only resistance trap'], 'A'),
          P('A negative test charge in a uniform field toward +x feels force:', ['Opposite field direction introductory', 'Same as field always false for negative', 'Zero always false', 'Only magnetic'], 'A'),
          P('Inverse-square law for point charges mirrors:', ['Gravitational force between masses introductory analogy survey', 'Hookes law spring false', 'Ohm law resistor false', 'Snell law optics false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 4 Quiz 3 — Circuits and Ohm law',
        problems: [
          P('Conventional current direction is:', ['Opposite electron flow historical convention introductory', 'Same as neutron drift false', 'Random each second false', 'Always from cathode in vacuum tubes only overscoped'], 'A'),
          P('Potential difference 6 V across 2 Ω implies current:', ['3 A introductory', '12 A product trap', '0.33 A inverted', '8 A'], 'A'),
          P('Doubling resistance at fixed voltage:', ['Halves current introductory Ohm picture', 'Doubles current false', 'Leaves current unchanged false', 'Removes voltage'], 'A'),
          P('In a single-loop series circuit current is:', ['Same through each element introductory', 'Zero everywhere false', 'Different in each wire arbitrarily false', 'Only at battery'], 'A'),
          P('Power in a resistor P = VI also equals:', ['I²R introductory equivalent forms survey', 'R/V only false', 'V/R only false incomplete', 'Charge only'], 'A'),
          P('Open switch stops current because:', ['Path is incomplete introductory', 'Resistance becomes zero false short idea', 'Voltage disappears always false', 'Electrons vanish false'], 'A'),
          P('A bulb rated 6 V 2 A at normal brightness uses power about:', ['12 W introductory P=VI', '3 W divide trap', '8 W', '0.33 W'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 4 Quiz 4 — Resistors and meters',
        problems: [
          P('Three 2 Ω resistors in parallel have equivalent resistance:', ['2/3 Ω introductory 1/R_eq sum reciprocals', '6 Ω series trap', '2 Ω single only false', '0 Ω short false'], 'A'),
          P('Ammeter should be connected:', ['In series with the branch measured introductory', 'In parallel always false voltmeter rule', 'Only across battery falsely', 'Nowhere safely false'], 'A'),
          P('Ideal voltmeter connection is:', ['In parallel across component introductory', 'In series with load falsely ammeter', 'Inside fuse only false', 'Under water false safety joke reject'], 'A'),
          P('More resistors in parallel generally lowers:', ['Total equivalent resistance introductory', 'Total current from battery always false increases current usually', 'Voltage of battery false', 'Charge conservation false'], 'A'),
          P('If one bulb in parallel branch burns out others often:', ['Stay lit introductory independent branches survey', 'All go out series trap false for parallel', 'Explode always false', 'Reverse polarity'], 'A'),
          P('Series circuit with two equal resistors splits voltage:', ['Equally introductory symmetry', 'All at one resistor false', 'Zero at both false', 'Random'], 'A'),
          P('Household bulbs in parallel allow:', ['Independent operation introductory', 'Only one brightness always false', 'No current ever false', 'Charge destruction'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 4 Quiz 5 — Safety and projects',
        problems: [
          P('Fuses protect circuits by:', ['Melting when current exceeds rating introductory', 'Increasing current always false', 'Storing charge falsely', 'Cooling wires magically false'], 'A'),
          P('Earthing metal casings helps:', ['Carry fault current away from user introductory', 'Increase shock risk false opposite', 'Remove need for insulation false', 'Block all current always false'], 'A'),
          P('Overloading an extension cord can cause:', ['Overheating and fire risk introductory', 'Perfect safety false', 'Lower resistance always false simplistic', 'Automatic cooling false'], 'A'),
          P('Student project wiring should use:', ['Insulated conductors and correct polarity introductory survey', 'Bare hands on mains false', 'Water baths for wires false', 'No teacher supervision falsely'], 'A'),
          P('Circuit breaker differs from fuse partly by being:', ['Resettable after trip introductory survey', 'Always glass tube false fuse image', 'Unable to stop current false', 'Only for optics false'], 'A'),
          P('Damaged appliance cord insulation risks:', ['Exposure of live conductors introductory', 'Improved grounding falsely', 'Lower voltage always false', 'Perfect insulation increase false'], 'A'),
          P('Low-voltage DC lab packs are safer partly because:', ['Lower shock severity introductory qualitative', 'They use infinite current false', 'They remove resistance false', 'They eliminate electrons false'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 5: Magnetism',
    chapterDescription:
      'Permanent magnets and fields, Earth field and compass, fields from currents, forces on charges and wires, and applications such as motors and loudspeakers (survey).',
    topics: [
      {
        topicName: 'Magnets and magnetic fields',
        topicDescription:
          'Poles, attraction and repulsion, field lines, ferromagnetic materials, and temporary versus permanent magnets.',
        topicObjectives: [
          'Map field lines around bar magnets and describe north-seeking pole language introductory.',
          'Explain that unlike poles attract and like poles repel.',
          'Distinguish hard and soft magnetic materials at survey level.',
        ],
      },
      {
        topicName: 'Earth magnetic field and compass',
        topicDescription:
          'Geomagnetic field as tilted dipole model; compass alignment and declination/inclination vocabulary (survey).',
        topicObjectives: [
          'Describe how a compass needle aligns with local Earth field introductory.',
          'Relate geographic north to magnetic north conceptually survey.',
          'Recognize field direction varies with location introductory.',
        ],
      },
      {
        topicName: 'Magnetic field of a current-carrying conductor',
        topicDescription:
          'Right-hand rule for straight wire and solenoid; electromagnets and core materials (survey).',
        topicObjectives: [
          'Sketch circular field patterns around a straight current-carrying wire introductory.',
          'Use right-hand rule to find field direction around a wire introductory.',
          'Explain how a solenoid concentrates field lines inside the coil survey.',
        ],
      },
      {
        topicName: 'Magnetic forces on charges, wires and parallel conductors',
        topicDescription:
          'Force on moving charge F = qvB sin θ; force on current-carrying wire; parallel wire attraction/repulsion (survey).',
        topicObjectives: [
          'State that a charge moving perpendicular to a uniform field experiences a magnetic force introductory.',
          'Apply F = BIL for a straight wire in a uniform field introductory.',
          'Predict attraction or repulsion for parallel currents in same or opposite directions survey.',
        ],
      },
      {
        topicName: 'Applications of magnetism',
        topicDescription:
          'Electric motors, generators, loudspeakers, MRI context at survey level, and data storage ideas.',
        topicObjectives: [
          'Link motor action to current in a field producing torque introductory.',
          'Contrast motor energy input with generator energy output survey.',
          'Give everyday examples where magnetism is used in technology introductory.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Poles', 'Breaking a bar magnet produces:', ['Two smaller magnets each with two poles introductory', 'Single poles only false', 'No poles', 'Electric charge only'], 0, 'Easy'),
      ex(1, 'Compass', 'A compass needle aligns with:', ['Local Earth magnetic field introductory', 'Geographic east only false', 'Wind direction', 'Gravity vector'], 0, 'Easy'),
      ex(2, 'Wire field', 'Increasing current in a straight wire generally:', ['Strengthens magnetic field around it introductory', 'Removes field false', 'Reverses Earth spin false joke', 'Stops electron flow false'], 0, 'Easy'),
      ex(3, 'Force', 'Force on a current-carrying wire in a field increases if:', ['Current increases introductory F=BIL', 'Field is zero', 'Wire is uncharged only false', 'Length is zero'], 0, 'Medium'),
      ex(4, 'Motor', 'A simple DC motor converts:', ['Electrical energy to mechanical motion introductory', 'Heat to light only', 'Mass to charge', 'Sound to gravity'], 0, 'Easy'),
      ex(2, 'Solenoid', 'Iron core inside a solenoid usually:', ['Strengthens the field introductory', 'Removes all magnetism false', 'Blocks current false', 'Creates electric charge false'], 0, 'Easy'),
      ex(3, 'Parallel', 'Parallel wires with currents in the same direction:', ['Attract introductory survey', 'Repel always false opposite currents repel', 'Have no force false', 'Cancel gravity'], 0, 'Medium'),
      ex(1, 'Declination', 'Angle between geographic and magnetic north is called:', ['Magnetic declination introductory survey', 'Refraction false optics', 'Young modulus false', 'Strain false'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Magnets and fields',
        problems: [
          P('Magnetic field lines emerge from:', ['North pole of a bar magnet model introductory', 'South pole only always false convention', 'Electric battery only false', 'Vacuum alone false'], 'A'),
          P('Like magnetic poles:', ['Repel introductory', 'Attract always false unlike attract', 'Have no interaction false', 'Merge into one pole false'], 'A'),
          P('Soft iron is used in electromagnets partly because it:', ['Magnetizes strongly but loses magnetism easily introductory survey', 'Is permanently magnetized always false hard magnets differ', 'Insulates current false', 'Blocks field lines false'], 'A'),
          P('Field line density indicates:', ['Field strength qualitatively introductory', 'Electric charge in coulombs false', 'Temperature false', 'Sound intensity false'], 'A'),
          P('Cutting a magnet does not isolate a single pole because:', ['Poles always come in pairs introductory', 'Monopoles are common false', 'Charge disappears false', 'Gravity cancels false'], 'A'),
          P('Steel paper clips near a magnet illustrate:', ['Induced magnetism introductory temporary alignment', 'Nuclear fusion false', 'Only electric repulsion false', 'Zero field false'], 'A'),
          P('Magnetic domains in ferromagnets align when:', ['External field applied introductory survey', 'Temperature is absolute zero only false', 'Mass doubles false', 'Light reflects'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — Earth field and compass',
        problems: [
          P('Earth behaves roughly like a:', ['Giant magnet with field lines introductory model', 'Pure electric capacitor only false', 'Nonmagnetic sphere false', 'Vacuum chamber false'], 'A'),
          P('A freely pivoted compass needle points approximately:', ['Along local magnetic field introductory', 'Always to geographic north pole exactly false declination', 'To the Moon false', 'Perpendicular to gravity always false'], 'A'),
          P('Magnetic declination is the angle between:', ['Magnetic north and geographic north introductory survey', 'East and west only false', 'Voltage and current false', 'Stress and strain false'], 'A'),
          P('Magnetic inclination relates to:', ['Angle field makes with horizontal introductory survey', 'Bulb brightness false', 'Wire resistance false', 'Lens focal length false'], 'A'),
          P('Migratory animals may use Earth field partly for:', ['Navigation introductory survey examples', 'Photosynthesis false plant process', 'Nuclear decay false', 'Ohm law false'], 'A'),
          P('At magnetic equator inclination is about:', ['Zero introductory horizontal field component picture survey', '90° always false varies', 'Undefined false', '180° false'], 'A'),
          P('Compass error near strong magnets happens because:', ['Local field dominates Earth field introductory', 'Earth field disappears false', 'Needle loses mass false', 'Gravity reverses false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Field from current',
        problems: [
          P('Oersted discovery linked:', ['Electric currents and magnetic fields introductory history survey', 'Only static charge to light false', 'Mass to temperature false', 'Mirrors to sound false'], 'A'),
          P('Right-hand rule for straight wire gives field direction:', ['Around the wire in circles introductory', 'Only parallel to wire always false also circular', 'Opposite gravity false', 'Inside battery only false'], 'A'),
          P('Increasing turns on a solenoid at same current:', ['Strengthens interior field introductory', 'Removes field false', 'Stops electron flow false', 'Creates monopoles false'], 'A'),
          P('Electromagnet advantage over permanent magnet:', ['Can switch field on and off introductory', 'Always stronger false not always', 'Needs no power false when off needs power on', 'Cannot pick up iron false'], 'A'),
          P('Field inside long solenoid is approximately:', ['Uniform introductory ideal model survey', 'Zero everywhere false', 'Radial only false', 'Same as Earth tide false'], 'A'),
          P('Reversing current in a wire reverses:', ['Direction of magnetic field around wire introductory', 'Mass of wire false', 'Coulomb charge sign false unrelated', 'Speed of light false'], 'A'),
          P('MRI machines use strong fields from:', ['Large current-carrying coils introductory survey context', 'Only permanent bar magnets tiny false scale', 'Friction alone false', 'Sound waves false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — Magnetic forces',
        problems: [
          P('A stationary charge in a uniform magnetic field experiences:', ['No magnetic force introductory v=0 in F=qvB sinθ', 'Maximum force always false', 'Force along gravity only false', 'Infinite acceleration false'], 'A'),
          P('Maximum magnetic force on moving charge occurs when velocity is:', ['Perpendicular to field introductory sin90°=1', 'Parallel to field sin0°=0', 'Zero always false needs motion', 'Opposite to mass false'], 'A'),
          P('Force on wire F = BIL requires:', ['Current perpendicular to field introductory ideal case survey', 'Zero length false', 'No magnetic field false', 'Only static charge false'], 'A'),
          P('Parallel conductors with opposite currents:', ['Repel introductory survey', 'Attract false same direction attracts', 'Have no force false', 'Become insulators false'], 'A'),
          P('Lorentz force combines:', ['Electric and magnetic contributions on a charge introductory survey', 'Only gravity false', 'Only friction false', 'Only tension false'], 'A'),
          P('A charged particle spirals in uniform B field when velocity has:', ['Component perpendicular to B introductory circular motion part', 'Only parallel component always false no spiral', 'Zero speed false', 'Only electric field false'], 'A'),
          P('Doubling current in a wire in same field doubles:', ['Magnetic force on wire introductory F proportional I', 'Earth mass false', 'Speed of light false', 'Resistance always false separate idea'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Applications',
        problems: [
          P('Electric motor principle uses:', ['Current in magnetic field producing torque introductory', 'Only static charge repulsion false', 'Nuclear fission false', 'Refraction only false'], 'A'),
          P('Generator converts:', ['Mechanical energy to electrical introductory survey', 'Electrical to mechanical false motor direction', 'Mass to charge false', 'Heat to magnetism only false incomplete'], 'A'),
          P('Loudspeaker coil moves when:', ['Current varies in magnetic field introductory', 'Voltage is always zero false needs signal', 'No magnet present false', 'Only gravity acts false'], 'A'),
          P('Transformer requires:', ['Changing magnetic flux linking coils introductory AC context survey', 'Steady DC only always false ideal transformer AC', 'No core false often has core', 'Only one turn false'], 'A'),
          P('Maglev train idea uses:', ['Magnetic levitation forces introductory survey', 'Only friction increase false opposite goal', 'Sound diffraction false', 'Snell law false'], 'A'),
          P('Hard disk stores data using:', ['Magnetic domains oriented up or down introductory survey', 'Only visible light pits false optical disc differs', 'Pure gravity false', 'Coulomb inverse square only false'], 'A'),
          P('Electric bell hammer motion is driven by:', ['Electromagnet switching introductory survey', 'Permanent magnet alone without current false', 'Lens focusing false', 'Radioactive decay false'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 6: Electromagnetic waves and geometrical optics',
    chapterDescription:
      'EM spectrum and wave properties, reflection and refraction, mirrors and lenses, eye and instruments, and colour addition and subtraction (survey).',
    topics: [
      {
        topicName: 'EM waves and EM spectrum',
        topicDescription:
          'Transverse waves, speed of light, spectrum regions from radio to gamma, and everyday sources (survey).',
        topicObjectives: [
          'State that EM waves do not require a medium introductory.',
          'Order major spectrum regions by wavelength or frequency introductory.',
          'Link visible light to a narrow band within the spectrum survey.',
        ],
      },
      {
        topicName: 'Light as a wave, reflection and refraction',
        topicDescription:
          'Wavefronts and rays; law of reflection; Snell law and refractive index; total internal reflection (survey).',
        topicObjectives: [
          'Apply law of reflection for plane mirrors introductory.',
          'Use n = sin i / sin r for refraction at a boundary introductory.',
          'Explain total internal reflection conditions in denser-to-rarer transition survey.',
        ],
      },
      {
        topicName: 'Mirrors and lenses',
        topicDescription:
          'Plane, concave, and convex mirrors; thin lens formula and ray diagrams for image formation (survey).',
        topicObjectives: [
          'Locate images with ray diagrams for mirrors and lenses introductory.',
          'Distinguish real and virtual images using screen test language introductory.',
          'Apply sign conventions for focal length and object distance at survey depth.',
        ],
      },
      {
        topicName: 'Human eye and optical instruments',
        topicDescription:
          'Eye parts, accommodation, myopia and hyperopia corrections, microscope and telescope ideas (survey).',
        topicObjectives: [
          'Relate cornea and lens to focusing light on the retina introductory.',
          'Explain concave lens for myopia and convex for hyperopia survey.',
          'Describe how a simple microscope or telescope extends vision introductory.',
        ],
      },
      {
        topicName: 'Color of light (primary colors, addition and subtraction)',
        topicDescription:
          'Additive RGB mixing for screens; subtractive CMY pigments; dispersion and filters (survey).',
        topicObjectives: [
          'Predict additive mixtures of red, green, and blue light introductory.',
          'Explain subtractive colour with paints and filters survey.',
          'Connect dispersion of white light through a prism to spectrum introductory.',
        ],
      },
    ],
    exercises: [
      ex(0, 'EM speed', 'Light in vacuum travels at about:', ['3 × 10⁸ m s⁻¹ introductory', '340 m s⁻¹ sound trap', '9.8 m s⁻² gravity trap', '1 m s⁻¹'], 0, 'Easy'),
      ex(1, 'Reflection', 'Angle of incidence equals angle of:', ['Reflection introductory', 'Refraction false different law', 'Dispersion false', 'Polarization only false'], 0, 'Easy'),
      ex(1, 'Snell', 'Light entering glass from air bends:', ['Toward normal introductory denser medium survey', 'Away from normal false leaving glass', 'Not at all false', 'Randomly always false'], 0, 'Medium'),
      ex(2, 'Mirror', 'Plane mirror image is:', ['Virtual and same size introductory', 'Real always false', 'Inverted laterally yes but upright vertically phrase Virtual upright same size pick virtual', 'Always smaller false'], 0, 'Easy'),
      ex(3, 'Eye', 'Myopia is corrected with:', ['Concave diverging lens introductory survey', 'Convex converging lens hyperopia trap', 'Prism only false', 'Mirror coating false'], 0, 'Easy'),
      ex(4, 'Additive', 'Red and green light combined additively give:', ['Yellow introductory RGB', 'Blue false', 'Black false subtractive trap', 'White always false need blue too'], 0, 'Easy'),
      ex(2, 'Lens', 'Convex lens converges:', ['Parallel rays toward focal point introductory', 'Rays to diverge always false concave diverges', 'Only sound false', 'Magnetic field false'], 0, 'Easy'),
      ex(4, 'Dispersion', 'A prism separates white light because:', ['Different wavelengths refract by different amounts introductory', 'Light has no frequency false', 'Mirrors absorb colour false', 'Gravity splits photons false'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 6 Quiz 1 — EM spectrum',
        problems: [
          P('Electromagnetic waves consist of oscillating:', ['Electric and magnetic fields introductory', 'Only air molecules false needs no medium', 'Only sound pressure false', 'Only water waves false'], 'A'),
          P('Higher frequency EM radiation has:', ['Shorter wavelength introductory c=fλ', 'Longer wavelength always false inverse', 'Zero speed false', 'No energy false'], 'A'),
          P('Radio waves compared to gamma rays have:', ['Lower frequency introductory spectrum order', 'Higher frequency false', 'Same wavelength always false', 'No photon idea false intro okay still frequency compare'], 'A'),
          P('Visible light sits between:', ['Infrared and ultraviolet introductory survey band', 'Radio and microwave only false lower', 'Gamma and X-ray only false higher', 'Sound and ultrasound false'], 'A'),
          P('Microwave ovens use EM energy mainly to:', ['Excite water molecules introductory survey', 'Create magnetic monopoles false', 'Stop electron flow false', 'Reflect all light false'], 'A'),
          P('Sunburn links to:', ['Ultraviolet exposure introductory survey', 'Only infrared heating false partial', 'Only radio waves false', 'Only DC current false'], 'A'),
          P('All EM waves in vacuum share speed:', ['c ≈ 3×10⁸ m s⁻¹ introductory', 'Depends on loudness false', 'Zero false', 'Same as sound 340 m s⁻¹ false'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 6 Quiz 2 — Reflection and refraction',
        problems: [
          P('Law of reflection states incident angle equals:', ['Reflection angle measured from normal introductory', 'Refraction angle false', '90° always false', 'Zero always false'], 'A'),
          P('Refractive index n = c/v relates:', ['Speed in vacuum to speed in medium introductory', 'Mass to volume false', 'Force to area false', 'Current to voltage false'], 'A'),
          P('Light slows in glass compared to vacuum so n is:', ['Greater than 1 introductory', 'Less than 1 false', 'Zero false', 'Imaginary false'], 'A'),
          P('Total internal reflection needs:', ['Denser to rarer medium and large angle introductory survey', 'Any angle always false', 'Rarer to denser only false', 'No boundary false'], 'A'),
          P('Apparent depth of pool looks shallower because:', ['Refraction at water surface introductory', 'Reflection only false partial', 'Dispersion only false', 'Magnetic field false'], 'A'),
          P('A ray diagram uses:', ['Straight lines representing light direction introductory', 'Curved field lines of magnet false', 'Only wave circles false can combine', 'Sound intensity maps false'], 'A'),
          P('Critical angle concept applies when:', ['Incident angle in denser medium reaches special value introductory survey', 'Object at infinity only false lens topic', 'Mirror is plane only false', 'Light speed infinite false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 6 Quiz 3 — Mirrors and lenses',
        problems: [
          P('Real image can be projected on:', ['A screen introductory', 'Only a mirror falsely virtual mirror image', 'Only the retina always false eye special case', 'Vacuum without light false'], 'A'),
          P('Concave mirror can form:', ['Real inverted image when object beyond F introductory survey', 'Only virtual always false depends', 'No image false', 'Only sound false'], 'A'),
          P('Thin lens formula 1/f = 1/u + 1/v used with:', ['Consistent sign convention introductory survey', 'Any units randomly false', 'Only mirrors false', 'Magnetic poles false'], 'A'),
          P('Convex lens is also called:', ['Converging lens introductory', 'Diverging lens false concave', 'Plane mirror false', 'Prism only false'], 'A'),
          P('Object at 2F of convex lens gives image:', ['Same size real introductory standard ray diagram case', 'Highly magnified virtual false inside F', 'No image false', 'At infinity only false special case u=F'], 'A'),
          P('Virtual image rays appear to meet:', ['Behind mirror or lens introductory extension', 'On screen always false real images', 'At focal point always false', 'Inside magnet false'], 'A'),
          P('Magnifying glass is a:', ['Convex lens with object inside F introductory', 'Concave mirror only false', 'Prism dispersing only false', 'Coil solenoid false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 6 Quiz 4 — Eye and instruments',
        problems: [
          P('Eye lens focuses light onto:', ['Retina introductory', 'Cornea only surface false part', 'Iris hole size only false', 'Optic nerve first false order'], 'A'),
          P('Myopia means:', ['Distant objects focus in front of retina introductory', 'Near focus behind retina hyperopia false', 'Perfect vision false', 'Only colour blindness false'], 'A'),
          P('Hyperopia correction often uses:', ['Convex lens introductory survey', 'Concave lens myopia trap', 'Only prism false', 'Only mirror false'], 'A'),
          P('Simple microscope produces:', ['Magnified virtual image introductory survey', 'Diminished real only false can vary', 'No refraction false', 'Magnetic image false'], 'A'),
          P('Telescope objective lens or mirror mainly:', ['Collects light from distant object introductory', 'Heats the eye false', 'Measures current false', 'Blocks all colours false'], 'A'),
          P('Accommodation changes:', ['Eye lens curvature introductory', 'Speed of light in vacuum false', 'Earth magnetic field false', 'Wire resistance false'], 'A'),
          P('Blind spot lacks:', ['Photoreceptors introductory optic nerve exit survey', 'Cornea false', 'Lens false', 'Eyelid only false'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 6 Quiz 5 — Colour',
        problems: [
          P('Additive primary colours for light often taught as:', ['Red green blue introductory', 'Cyan magenta yellow subtractive pigment false', 'Black white gray only false', 'Only infrared false'], 'A'),
          P('Red and blue light additively produce:', ['Magenta introductory RGB', 'Green false R+G', 'Yellow false R+G', 'Black false subtractive'], 'A'),
          P('Subtractive colour with paints mixes by:', ['Absorbing wavelengths introductory survey', 'Emitting more light always false screens emit', 'Increasing speed of light false', 'Magnetic domains false'], 'A'),
          P('Yellow pigment appears yellow because it:', ['Reflects yellow absorbs other bands introductory survey simplified', 'Creates yellow photons from vacuum false', 'Has no absorption false', 'Only refracts false'], 'A'),
          P('White light through prism shows spectrum because:', ['Dispersion depends on wavelength introductory', 'Reflection angle equals incidence only false law mismatch', 'Mirrors invert charge false', 'Ohm law false'], 'A'),
          P('Cyan magenta yellow are associated with:', ['Subtractive printing introductory survey', 'Additive RGB screen primaries false', 'Sound waves false', 'Magnetic poles false'], 'A'),
          P('Black object in white light absorbs:', ['Most visible wavelengths introductory survey', 'All light perfectly always false real surfaces reflect some', 'Only infrared always false', 'Only UV always false'], 'A'),
        ],
      },
    ],
  },
];
