/**
 * Grade 11 Physics curriculum — Units 5–7 (Ethiopia MoE outline).
 */

const { P } = require('./biologySeedQuizHelpers');

function ex(topicIndex, title, question, options, correctIndex, difficulty) {
  return { topicIndex, title, question, options, correctAnswer: correctIndex, difficulty };
}

module.exports = [
  {
    chapterName: 'Unit 5: Heat Conduction and Calorimetry',
    chapterDescription:
      'Heat versus temperature, specific heat capacity, thermal expansion, phase changes and latent heat, and calorimetry with conduction models (survey).',
    topics: [
      {
        topicName: 'Heat, temperature and thermal energy transfer',
        topicDescription:
          'Kinetic particle model, heat as energy transfer, temperature scales, and conduction, convection, and radiation pathways.',
        topicObjectives: [
          'Distinguish heat, temperature, and internal energy using particle language at Grade 11 introductory depth.',
          'Compare conduction, convection, and radiation as mechanisms of thermal energy transfer.',
          'Interpret simple heating curves qualitatively when energy enters or leaves a system.',
        ],
      },
      {
        topicName: 'Specific heat capacity',
        topicDescription:
          'Q = mcΔT for sensible heating, heat capacity of materials, and experimental determination ideas (survey).',
        topicObjectives: [
          'Apply Q = mcΔT to calculate heat absorbed or released for a given mass and temperature change.',
          'Explain why materials with large specific heat warm or cool more slowly for the same energy input.',
          'Design or interpret simple calorimeter measurements of specific heat at survey level.',
        ],
      },
      {
        topicName: 'Thermal expansion',
        topicDescription:
          'Linear, area, and volume expansion coefficients; applications and limitations such as expansion joints (survey).',
        topicObjectives: [
          'Use linear expansion ΔL = αL₀ΔT in straightforward numerical problems introductory.',
          'Relate expansion of solids, liquids, and gases to particle spacing qualitatively.',
          'Give engineering examples where controlled expansion or contraction matters survey.',
        ],
      },
      {
        topicName: 'Phase changes and latent heat',
        topicDescription:
          'Melting, boiling, sublimation; latent heat of fusion and vaporization; plateaus on heating curves.',
        topicObjectives: [
          'Apply Q = mL for phase change calculations at constant temperature introductory.',
          'Explain constant-temperature plateaus on heating curves using latent heat language.',
          'Distinguish sensible heating from phase-change energy transfer in diagrams.',
        ],
      },
      {
        topicName: 'Calorimetry and heat conduction',
        topicDescription:
          'Mixing calorimetry, heat balance equations, thermal conductivity and rate of conduction (survey).',
        topicObjectives: [
          'Set up energy balance equations for mixing problems with no heat loss idealization introductory.',
          'Describe factors affecting rate of heat conduction through a slab survey.',
          'Evaluate simple composite-wall or insulation problems qualitatively.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Heat vs temp', 'Heat is best described as:', ['Energy transferred due to temperature difference introductory', 'The same as temperature always false', 'Only stored in vacuum false', 'A scalar mass false'], 0, 'Easy'),
      ex(1, 'Specific heat', 'Water has high specific heat so it:', ['Changes temperature quickly for small Q false', 'Stores much energy per degree change introductory', 'Has zero internal energy false', 'Cannot boil false'], 1, 'Easy'),
      ex(1, 'Q=mcΔT', '2 kg copper c=390 J kg⁻¹ K⁻¹ heated 10 K needs heat about:', ['7800 J introductory Q=mcΔT', '780 J divide trap', '78 J', '78000 J multiply trap'], 0, 'Medium'),
      ex(2, 'Expansion', 'A metal bridge gap in summer closes mainly because:', ['Rails contract when hot false', 'Rails expand and gap allows expansion introductory survey', 'Gravity removes heat false', 'Latent heat only false'], 1, 'Easy'),
      ex(3, 'Latent', 'During boiling at constant pressure temperature of pure water:', ['Rises steadily false plateau', 'Stays constant until liquid gone introductory plateau idea', 'Drops to zero false', 'Becomes undefined always false'], 1, 'Easy'),
      ex(3, 'Fusion', 'Latent heat of fusion refers to energy for:', ['Solid to liquid at melting point introductory', 'Liquid to gas only vaporization trap', 'Chemical bond breaking in nucleus false', 'Magnetic alignment false'], 0, 'Medium'),
      ex(4, 'Calorimeter', 'In ideal mixing calorimetry heat lost by hot body equals:', ['Heat gained by cold parts introductory balance', 'Zero always false', 'Mass times velocity false', 'Voltage times charge false'], 0, 'Easy'),
      ex(4, 'Conduction', 'Thicker insulation generally:', ['Reduces heat flow rate introductory qualitative', 'Increases conduction always false', 'Stops all radiation perfectly false', 'Removes temperature difference instantly false'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 5 Quiz 1 — Heat and temperature',
        problems: [
          P('Temperature measures primarily:', ['Average kinetic energy of particles introductory', 'Total internal energy always false extensive', 'Heat flow rate false', 'Latent heat false'], 'A'),
          P('Heat always flows spontaneously from:', ['Hotter to colder region introductory', 'Colder to hotter without work false', 'Equal temperatures with large difference false', 'Vacuum to metal only false'], 'A'),
          P('Convection requires mainly:', ['Fluid motion carrying energy introductory', 'Solid lattice only false conduction', 'Electromagnetic waves only false radiation', 'Zero medium in all cases false'], 'A'),
          P('Radiation can transfer energy through:', ['Vacuum introductory infrared example', 'Only direct contact false', 'Only metals false', 'Only liquids false'], 'A'),
          P('Internal energy of an ideal monatomic gas depends on:', ['Temperature introductory state function survey', 'Only volume always false ideal gas U depends T', 'Path of process only false', 'Colour of container false'], 'A'),
          P('Thermal equilibrium means:', ['No net heat transfer introductory', 'No particles moving false', 'Zero absolute temperature false', 'Maximum latent heat false'], 'A'),
          P('Kelvin scale zero represents:', ['No thermal motion ideal limit introductory', 'Water freezing false Celsius ref', 'Room temperature false', 'Boiling point false'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 5 Quiz 2 — Specific heat capacity',
        problems: [
          P('Specific heat capacity c has SI units:', ['J kg⁻¹ K⁻¹ introductory', 'kg m s⁻² only force trap', 'V A⁻¹ resistance trap', 'N C⁻¹ field trap'], 'A'),
          P('Doubling mass at same c and ΔT doubles:', ['Heat Q required introductory Q=mcΔT', 'Specific heat false intensive property', 'Temperature change false if same ΔT given', 'Latent heat false'], 'A'),
          P('Material with larger c needs ___ energy for same ΔT:', ['More introductory', 'Less false inverse', 'Zero false', 'Infinite always false'], 'A'),
          P('Cooling a hot object in water transfers energy mainly by:', ['Conduction and convection at surface introductory survey', 'Only nuclear decay false', 'Only reflection of light false', 'Magnetic force false'], 'A'),
          P('In Q = mcΔT, ΔT means:', ['Temperature change introductory', 'Time interval false', 'Thickness false', 'Charge false'], 'A'),
          P('Ethanol and water differ in heating curves partly due to:', ['Different specific heat and boiling points introductory', 'Same latent heat always false', 'No hydrogen bonds in water false', 'Zero density false'], 'A'),
          P('A calorimeter with known mass of water helps find:', ['Unknown specific heat of a sample introductory survey method', 'Speed of light false', 'Coulomb constant false', 'Half-life only false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 5 Quiz 3 — Thermal expansion',
        problems: [
          P('Linear expansion coefficient α relates ΔL to:', ['L₀ and ΔT introductory ΔL=αL₀ΔT', 'Mass only false', 'Voltage false', 'Pressure only always false gas differs'], 'A'),
          P('Heating a bimetallic strip can bend because:', ['Metals expand by different amounts introductory', 'Gravity reverses false', 'Charge is created false', 'Light refracts only false'], 'A'),
          P('Liquid-in-glass thermometer works using:', ['Expansion of liquid introductory', 'Only latent heat at fixed T false', 'Magnetic domains false', 'Radioactive decay false'], 'A'),
          P('Gap in railway track prevents:', ['Buckling from summer expansion introductory survey', 'Winter contraction false still need gap', 'Electrical current false', 'Refraction false'], 'A'),
          P('Volume expansion of gas at constant pressure is often:', ['Larger than typical solid expansion introductory qualitative', 'Zero always false', 'Unrelated to temperature false', 'Only magnetic false'], 'A'),
          P('Pyrex glass cookware resists cracking partly by:', ['Low expansion coefficient matched to content introductory survey', 'High latent heat only false', 'Being a superconductor false', 'Emitting gamma rays false'], 'A'),
          P('Negative ΔT on a metal rod causes:', ['Contraction introductory', 'Always melting false', 'Infinite expansion false', 'Phase change at all T false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 5 Quiz 4 — Phase changes and latent heat',
        problems: [
          P('During melting of ice at 0 °C added energy goes to:', ['Breaking bonds while T stays constant introductory latent', 'Raising temperature steadily false plateau', 'Creating electric current false', 'Increasing mass false'], 'A'),
          P('Latent heat of vaporization Lv is generally:', ['Larger than Lf for water introductory survey', 'Smaller than Lf always false for water Lv bigger', 'Zero at boiling false', 'Same as specific heat false'], 'A'),
          P('Plateau on heating curve indicates:', ['Phase change at constant temperature introductory', 'Rapid temperature rise false', 'Chemical reaction only always false', 'No energy input false'], 'A'),
          P('Sublimation is direct change from:', ['Solid to gas introductory', 'Liquid to solid false freeze', 'Gas to plasma only false', 'Metal to insulator false'], 'A'),
          P('Condensation on cold glass releases:', ['Latent heat to surroundings introductory', 'Only magnetic energy false', 'No energy false', 'Only light false'], 'A'),
          P('Steam burn can be worse than hot water partly because:', ['Condensation releases extra latent heat introductory', 'Steam has lower temperature always false can be higher', 'Steam has no energy false', 'Water cannot conduct heat false'], 'A'),
          P('Q = mL applies when:', ['Temperature remains constant during phase change introductory', 'Only solids heat up false', 'Only gases expand false', 'Charge flows false'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 5 Quiz 5 — Calorimetry and conduction',
        problems: [
          P('Mixing 100 g water at 20 °C with 100 g at 80 °C ideal final T near:', ['50 °C introductory equal masses same c', '20 °C cold wins false', '80 °C hot wins false', '0 °C false'], 'A'),
          P('Heat conduction rate through slab increases if:', ['Temperature difference increases introductory qualitative', 'Thickness increases false usually decreases rate', 'Area decreases false', 'Conductivity drops false'], 'A'),
          P('Good thermal insulator has:', ['Low thermal conductivity introductory', 'Very high conductivity false', 'Infinite density always false', 'Zero specific heat false'], 'A'),
          P('Fourier law survey form rate proportional to:', ['ΔT across thickness introductory', 'Mass only false', 'Electric charge false', 'Magnetic pole strength false'], 'A'),
          P('Calorimeter stirrer helps:', ['Uniform temperature introductory', 'Block all heat transfer false', 'Increase latent heat false', 'Measure voltage false'], 'A'),
          P('Metal spoon in hot tea feels hot quickly due to:', ['High thermal conductivity introductory', 'Low specific heat only partial', 'Radioactivity false', 'Total internal reflection false'], 'A'),
          P('Energy conservation in calorimetry neglecting losses means:', ['Heat lost equals heat gained introductory', 'Heat created from nothing false', 'Temperature undefined false', 'Mass changes false'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 6: Electric Current and Circuits',
    chapterDescription:
      'Coulomb law and fields, potential and capacitance, current and Ohm law, resistor networks and power, and household safety (survey).',
    topics: [
      {
        topicName: 'Coulomb law and electric field',
        topicDescription:
          'Force between point charges, superposition, uniform and non-uniform fields, and field line interpretation at Grade 11 depth.',
        topicObjectives: [
          'Calculate Coulomb force magnitude using kq₁q₂/r² for point charges introductory.',
          'Determine electric field from point charge and uniform field models.',
          'Use superposition qualitatively for two or more source charges survey.',
        ],
      },
      {
        topicName: 'Electric potential and capacitance',
        topicDescription:
          'Potential difference, equipotentials, energy in uniform field, capacitors and C = Q/V, series and parallel capacitors (survey).',
        topicObjectives: [
          'Relate potential difference to work per unit charge moved in a field introductory.',
          'Compute capacitance and stored energy U = ½QV for parallel-plate model survey.',
          'Combine capacitors in series and parallel at introductory level.',
        ],
      },
      {
        topicName: 'Electric current and Ohm law',
        topicDescription:
          'Drift model survey, current density idea, resistivity ρ, Ohm law, and I-V characteristics of ohmic conductors.',
        topicObjectives: [
          'Define current, voltage, and resistance and apply V = IR in single-element circuits.',
          'Use R = ρL/A for a uniform wire introductory.',
          'Interpret simple circuit diagrams with switches and meters survey.',
        ],
      },
      {
        topicName: 'Resistor combinations and electrical power',
        topicDescription:
          'Series and parallel equivalent resistance, Kirchhoff voltage loop idea survey, and P = VI, I²R, V²/R.',
        topicObjectives: [
          'Find equivalent resistance for series and parallel networks introductory.',
          'Calculate power dissipated in resistors and compare brightness of bulbs qualitatively.',
          'Apply simple two-loop rules at survey depth for classroom circuits.',
        ],
      },
      {
        topicName: 'Household circuits and electrical safety',
        topicDescription:
          'AC mains context survey, fuses, breakers, earthing, power ratings, and shock prevention.',
        topicObjectives: [
          'Explain parallel household wiring and independent appliance operation introductory.',
          'Relate power rating P = VI to energy cost and heating effects survey.',
          'Identify safe practices for plugs, insulation, and overload protection.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Coulomb', 'Two like charges separated by 2 m feel force F. At 4 m force is about:', ['F/4 introductory inverse square', 'F/2 distance trap', '4F', 'F/16 double distance trap'], 0, 'Medium'),
      ex(0, 'Field', 'Electric field direction is force direction on:', ['Positive test charge introductory', 'Negative mass false', 'Neutral neutron false', 'Only electron at rest false'], 0, 'Easy'),
      ex(1, 'Capacitor', 'Doubling plate separation of parallel-plate capacitor:', ['Halves capacitance introductory C proportional area over separation survey', 'Doubles C false', 'Removes voltage false', 'Creates magnetic monopole false'], 0, 'Medium'),
      ex(2, 'Ohm', 'Wire length doubled at same ρ and area resistance:', ['Doubles introductory R=ρL/A', 'Halves false', 'Unchanged false', 'Quadruples false'], 0, 'Easy'),
      ex(2, 'Current', '5 A for 2 minutes transfers charge:', ['600 C introductory Q=It', '10 C product trap', '2.5 C divide trap', '0.04 C false'], 0, 'Medium'),
      ex(3, 'Power', '12 V across 3 Ω dissipates power:', ['48 W introductory P=V²/R', '36 W VI trap with wrong I', '4 W I only false', '144 W false'], 0, 'Medium'),
      ex(3, 'Parallel', 'Two 12 Ω resistors in parallel equivalent:', ['6 Ω introductory', '24 Ω series trap', '12 Ω false', '0 Ω false'], 0, 'Easy'),
      ex(4, 'Safety', 'Earth wire in appliance connects metal case to:', ['Ground to prevent shock if live touches case introductory', 'Neutral only always false safety', 'High voltage line false', 'Fuse only false'], 0, 'Easy'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 6 Quiz 1 — Coulomb law and field',
        problems: [
          P('Coulomb constant k appears in F = kq₁q₂/r² with SI unit context:', ['N m² C⁻² introductory', 'J only false', 'Ω false', 'T false'], 'A'),
          P('Electric field E at distance r from point charge Q scales as:', ['1/r² introductory', '1/r only false potential', 'r² false', 'Independent of Q false'], 'A'),
          P('Superposition means total field is:', ['Vector sum of fields from each charge introductory', 'Scalar average only false', 'Always zero false', 'Only magnetic false'], 'A'),
          P('Field lines point toward:', ['Negative charge as sinks introductory convention', 'Positive charge always false sources outward', 'Neutral wire only false', 'Mass false'], 'A'),
          P('Force on charge q in field E is:', ['qE introductory', 'mE false', 'q/E false', 'E/q always false'], 'A'),
          P('Permittivity relates to Coulomb constant as:', ['k = 1/(4πε₀) introductory survey', 'k = ε₀ only false', 'k = c false speed of light', 'k = ρ false resistivity'], 'A'),
          P('Uniform field between large parallel plates is approximate when:', ['Plates close compared to size introductory survey', 'Plates far apart only false fringing', 'No voltage false', 'Only AC false'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 6 Quiz 2 — Potential and capacitance',
        problems: [
          P('Equipotential surfaces cross field lines:', ['Perpendicular introductory', 'Parallel always false', 'At 45° only false', 'Never defined false'], 'A'),
          P('1 volt is 1 joule per:', ['Coulomb introductory definition', 'Ampere second false', 'Kilogram false', 'Ohm false'], 'A'),
          P('Capacitance C = Q/V means:', ['Charge per volt introductory', 'Voltage per charge inverse false', 'Power only false', 'Resistance false'], 'A'),
          P('Energy stored in capacitor:', ['½QV or ½CV² introductory', 'mcΔT false thermal', 'mgh false', '½mv only kinetic false'], 'A'),
          P('Capacitors in parallel combine as:', ['C_eq = sum of C introductory', 'Reciprocal sum false series rule', 'Product false', 'Always zero false'], 'A'),
          P('Capacitors in series have:', ['Smaller equivalent C than each introductory', 'Larger C than each false parallel', 'Infinite C always false', 'Same as resistors parallel false trap'], 'A'),
          P('Dielectric between plates increases C partly by:', ['Reducing effective field introductory survey', 'Removing all charge false', 'Increasing separation always false', 'Blocking voltage false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 6 Quiz 3 — Current and Ohm law',
        problems: [
          P('Ohmic conductor has I-V graph:', ['Straight line through origin introductory', 'Parabola only false', 'Horizontal always false', 'Random false'], 'A'),
          P('Resistivity ρ units include:', ['Ω m introductory', 'Ω m⁻¹ false', 'V only false', 'C false'], 'A'),
          P('Thicker wire same material length has:', ['Lower resistance introductory R=ρL/A', 'Higher R false', 'Same R always false', 'Zero R false'], 'A'),
          P('Ammeter ideal resistance is:', ['Very low introductory', 'Very high false voltmeter', 'Infinite always false', 'Equal to load false'], 'A'),
          P('Electron drift speed in wire is typically:', ['Small compared to signal speed introductory survey', 'Speed of light false', 'Sound speed false', 'Zero always false'], 'A'),
          P('Doubling voltage across ohmic resistor doubles:', ['Current introductory Ohm', 'Resistance false', 'Charge of electron false', 'Coulomb constant false'], 'A'),
          P('Open circuit means:', ['No complete path introductory', 'Zero resistance everywhere false short', 'Infinite current false', 'Maximum power always false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 6 Quiz 4 — Resistors and power',
        problems: [
          P('Three 6 Ω in series equivalent:', ['18 Ω introductory', '2 Ω parallel trap', '6 Ω false', '0 Ω false'], 'A'),
          P('Kirchhoff current law at junction states:', ['Sum currents in equals sum out introductory', 'Voltage sum zero false KVL', 'Power zero always false', 'Charge destroyed false'], 'A'),
          P('Brighter bulb in series usually has:', ['Larger resistance introductory P=I²R same I', 'Smaller R false', 'Zero voltage false', 'No current false'], 'A'),
          P('Household appliance 230 V 2 A uses power about:', ['460 W introductory P=VI', '115 W divide trap', '1150 W false', '2 W false'], 'A'),
          P('Fuse rating should be:', ['Slightly above normal operating current introductory safety survey', 'Far below normal false nuisance trip', 'Unlimited false', 'Zero false'], 'A'),
          P('Power dissipated if current halved at fixed R:', ['Quarter introductory P=I²R', 'Half false', 'Double false', 'Same false'], 'A'),
          P('Internal resistance of battery causes:', ['Terminal voltage drop under load introductory', 'Infinite voltage always false', 'No current false', 'Capacitance increase false'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 6 Quiz 5 — Household and safety',
        problems: [
          P('Household appliances wired in parallel so:', ['Each gets full supply voltage introductory survey', 'Voltage divides equally always false series', 'Current is same everywhere false', 'One failure stops all always false'], 'A'),
          P('Live wire colour coding survey may use:', ['Brown or red region dependent introductory survey', 'Green yellow earth only false earth not live', 'Blue as live always false often neutral', 'Any colour safely false'], 'A'),
          P('RCD or GFCI protects by:', ['Detecting imbalance current introductory leak to ground', 'Increasing voltage false', 'Storing charge in fuse false', 'Cooling wires false'], 'A'),
          P('Overloading extension cord risks:', ['Overheating insulation introductory', 'Lower resistance always false', 'Perfect safety false', 'Increased insulation false'], 'A'),
          P('Double insulation symbol means:', ['No earth wire required on plastic case introductory survey', 'Two live wires false', 'Twice the voltage false', 'No fuse needed false'], 'A'),
          P('kWh on electricity bill measures:', ['Energy introductory', 'Power only false kW', 'Current false', 'Resistance false'], 'A'),
          P('Wet hands increase shock risk because:', ['Skin resistance drops introductory', 'Voltage increases false', 'Charge is removed false', 'Fuses melt faster only false incomplete'], 'A'),
        ],
      },
    ],
  },
  {
    chapterName: 'Unit 7: Nuclear Physics',
    chapterDescription:
      'Nuclear structure, radioactivity and decay laws, fission and fusion introductions, mass-energy and binding energy, and applications with safety (survey).',
    topics: [
      {
        topicName: 'Structure of the nucleus',
        topicDescription:
          'Protons, neutrons, isotopes, nuclide notation, and strong nuclear force at introductory survey depth.',
        topicObjectives: [
          'Use AZX notation and define isotope, atomic number, and mass number correctly.',
          'Describe nucleus as proton-neutron bound system with strong force short range survey.',
          'Estimate nuclear size order of magnitude compared to atom introductory.',
        ],
      },
      {
        topicName: 'Radioactivity and decay',
        topicDescription:
          'Alpha, beta, gamma radiation; decay equations; activity and half-life; background and detection (survey).',
        topicObjectives: [
          'Write balanced nuclear equations for simple alpha and beta decays introductory.',
          'Apply N = N₀(½)^(t/T½) for half-life problems at Grade 11 level.',
          'Compare penetrating power and ionization of alpha, beta, and gamma qualitatively.',
        ],
      },
      {
        topicName: 'Nuclear reactions (fission and fusion intro)',
        topicDescription:
          'Fission chain reaction idea, fusion in stars, energy release from mass defect introductory.',
        topicObjectives: [
          'Describe fission of heavy nuclei and controlled versus uncontrolled contexts survey.',
          'Explain fusion as light nuclei combining with energy release introductory.',
          'Identify reactants and products in sample fission and fusion equations survey.',
        ],
      },
      {
        topicName: 'Mass-energy and binding energy (intro)',
        topicDescription:
          'E = mc², mass defect, binding energy per nucleon curve, and stability trends (survey).',
        topicObjectives: [
          'Relate mass defect to binding energy using ΔE = Δmc² introductory.',
          'Interpret binding energy per nucleon versus mass number graph qualitatively.',
          'Explain why iron region nuclei are most stable per nucleon survey.',
        ],
      },
      {
        topicName: 'Applications and safety of nuclear physics',
        topicDescription:
          'Medical tracers and therapy, power generation, carbon dating idea, shielding, and waste (survey).',
        topicObjectives: [
          'Give examples of peaceful uses of radioisotopes and nuclear reactors introductory.',
          'Apply inverse-square and shielding ideas for radiation protection qualitatively.',
          'Discuss ethical and environmental issues of nuclear waste and safety survey.',
        ],
      },
    ],
    exercises: [
      ex(0, 'Notation', 'In ²³⁸₉₂U the number 238 is:', ['Mass number A introductory', 'Atomic number false 92 is Z', 'Charge in coulombs false', 'Neutron count only false'], 0, 'Easy'),
      ex(1, 'Alpha', 'Alpha particle is:', ['Helium-4 nucleus ⁴₂He introductory', 'Electron false beta', 'Photon false gamma', 'Neutron only false'], 0, 'Easy'),
      ex(1, 'Half-life', 'After two half-lives fraction remaining is:', ['1/4 introductory', '1/2 one half trap', '1/8 three halves trap', 'Zero always false'], 0, 'Easy'),
      ex(2, 'Fission', 'Nuclear fission commonly involves:', ['Heavy nucleus splitting introductory', 'Only hydrogen fusion false', 'Chemical electron transfer false', 'Static friction false'], 0, 'Easy'),
      ex(2, 'Fusion', 'Solar energy source is primarily:', ['Fusion of light nuclei introductory', 'Chemical burning false scale', 'Fission of uranium in core false', 'Magnetic monopoles false'], 0, 'Easy'),
      ex(3, 'Mass defect', 'Mass defect in nucleus means:', ['Nucleus mass less than sum of separate nucleons introductory', 'Mass increases when binding false', 'No energy involved false', 'Only electrons missing false'], 0, 'Medium'),
      ex(4, 'Safety', 'Thick lead sheet mainly attenuates:', ['Gamma radiation introductory survey', 'Alpha only always false stopped by paper', 'Neutrinos fully false', 'Sound false'], 0, 'Easy'),
      ex(3, 'Binding', 'Higher binding energy per nucleon generally means:', ['More stable nucleus introductory trend', 'Less stable always false', 'Faster decay always false', 'Zero mass false'], 0, 'Medium'),
    ],
    quizzes: [
      {
        topicIndex: 0,
        title: 'Unit 7 Quiz 1 — Structure of nucleus',
        problems: [
          P('Isotopes of an element have same:', ['Atomic number Z introductory', 'Mass number always false differ A', 'Neutron count always false varies', 'Number of nucleons A always false'], 'A'),
          P('Strong nuclear force acts between:', ['Nucleons introductory protons and neutrons', 'Only electrons false', 'Only distant galaxies false', 'Only charges in vacuum false Coulomb'], 'A'),
          P('Most of atom volume is:', ['Empty compared to nucleus introductory', 'Filled uniformly with nucleus density false', 'Only neutrons false', 'Only positive charge false'], 'A'),
          P('Neutron in nucleus helps:', ['Bind protons via strong force introductory reduces repulsion', 'Increase proton repulsion only false', 'Remove mass number false', 'Emit visible light always false'], 'A'),
          P('Nuclear radius is about:', ['10⁻¹⁵ m order introductory femtometre', '1 m false', '10⁻¹⁰ m atomic false larger atom', 'Visible false'], 'A'),
          P('Atomic number Z equals number of:', ['Protons introductory', 'Neutrons always false A-Z', 'Electrons in ion only false neutral case', 'Nucleons false mass number'], 'A'),
          P('Deuterium is isotope of hydrogen with:', ['One proton one neutron introductory ²H', 'No neutrons false protium', 'Two protons false', 'Zero electrons always false'], 'A'),
        ],
      },
      {
        topicIndex: 1,
        title: 'Unit 7 Quiz 2 — Radioactivity and decay',
        problems: [
          P('Beta minus decay converts neutron to:', ['Proton electron antineutrino introductory survey', 'Only photon false', 'Alpha particle false', 'Two protons false'], 'A'),
          P('Gamma emission often follows:', ['Alpha or beta decay leaving excited nucleus introductory', 'Chemical reaction only false', 'Only fusion false', 'Static discharge false'], 'A'),
          P('Half-life T½ is time for:', ['Half of radioactive nuclei to decay introductory statistical', 'All nuclei gone false two half-lives', 'Activity to double false', 'Mass to zero false'], 'A'),
          P('Activity SI unit becquerel is:', ['One decay per second introductory', 'One joule false', 'One volt false', 'One tesla false'], 'A'),
          P('Alpha stopped by:', ['Paper or few cm air introductory', 'Thick lead only false gamma', 'Nothing false', 'Water only always false'], 'A'),
          P('Background radiation sources include:', ['Cosmic rays and rocks introductory', 'Only lab sources false', 'Only fusion in Sun false partial', 'Only magnets false'], 'A'),
          P('Carbon-14 dating uses:', ['Known half-life of ¹⁴C introductory survey', 'Speed of sound false', 'Ohm law false', 'Snell law false'], 'A'),
        ],
      },
      {
        topicIndex: 2,
        title: 'Unit 7 Quiz 3 — Fission and fusion',
        problems: [
          P('Nuclear reactor control rods absorb:', ['Neutrons introductory slow chain', 'All gamma instantly false', 'Electrons only false', 'Protons in core only false'], 'A'),
          P('Fusion requires very high temperature because:', ['Nuclei must overcome Coulomb barrier introductory', 'Electrons vanish false', 'Gravity is weak false', 'Mass defect zero false'], 'A'),
          P('Typical fission fuel survey includes:', ['Uranium-235 introductory', 'Hydrogen-1 only fusion fuel false', 'Helium in balloons false', 'Sodium chloride false'], 'A'),
          P('Chain reaction in reactor is:', ['Controlled introductory', 'Always uncontrolled false bomb', 'Chemical false', 'Only optical false'], 'A'),
          P('Fusion product in Sun includes:', ['Helium introductory', 'Only uranium false', 'Only carbon dioxide false chemical', 'Only iron always false later stages'], 'A'),
          P('Energy from nucleus compared to chemical bond is:', ['Much larger per nucleon change introductory', 'Always smaller false', 'Exactly equal false', 'Zero false'], 'A'),
          P('Critical mass concept relates to:', ['Minimum amount for sustained chain introductory survey', 'Lens focal length false', 'Capacitance false', 'Thermal expansion false'], 'A'),
        ],
      },
      {
        topicIndex: 3,
        title: 'Unit 7 Quiz 4 — Mass-energy and binding',
        problems: [
          P('Einstein relation E = mc² links:', ['Mass and energy introductory', 'Force and area false', 'Voltage and current false', 'Pressure and volume only false'], 'A'),
          P('Binding energy is energy needed to:', ['Separate nucleus into nucleons introductory', 'Ionize one electron only false atomic', 'Heat 1 kg water false', 'Move Earth orbit false'], 'A'),
          P('Mass defect Δm in nucleus is:', ['Δm = (Zmp + Nmn) − M_nucleus introductory', 'Always zero false', 'Negative of binding false sign care energy positive', 'Only electron mass false'], 'A'),
          P('Iron peak on binding curve suggests:', ['Maximum stability per nucleon near Fe introductory survey', 'Lightest element false', 'No fusion ever false', 'Infinite binding false'], 'A'),
          P('Fission of U-235 releases energy because:', ['Products have higher binding per nucleon introductory', 'Mass increases false', 'Electrons annihilate false', 'Coulomb law reverses false'], 'A'),
          P('Fusion of light nuclei releases energy when:', ['Product nucleus binding per nucleon higher introductory', 'Product less stable false', 'Mass defect negative energy false', 'Only at 0 K false'], 'A'),
          P('1 u mass energy is about:', ['931 MeV introductory survey conversion', '1 J false', '1 eV false', '931 J false'], 'A'),
        ],
      },
      {
        topicIndex: 4,
        title: 'Unit 7 Quiz 5 — Applications and safety',
        problems: [
          P('PET scan uses positron-emitting isotopes to:', ['Image metabolism introductory medical survey', 'Measure gravity false', 'Heat water only false', 'Create magnetic field only false'], 'A'),
          P('Radiotherapy aims to:', ['Destroy cancer cells with controlled dose introductory', 'Increase background always false', 'Remove all shielding false', 'Generate household AC false'], 'A'),
          P('ALARA principle means:', ['As low as reasonably achievable introductory safety', 'Always maximum dose false', 'No rules false', 'Only alpha exposure false'], 'A'),
          P('Time distance shielding reduce dose by:', ['Lowering exposure introductory', 'Increasing activity false', 'Removing half-life false', 'Adding mass defect false'], 'A'),
          P('Nuclear waste long-lived isotopes need:', ['Secure storage introductory survey', 'Open air disposal always false', 'Burning in wood fire false', 'Dilution in drinking water false'], 'A'),
          P('Smoke detector may use:', ['Americium-241 alpha source introductory survey', 'Fusion plasma false', 'Only visible laser false', 'Gravity waves false'], 'A'),
          P('Worker radiation badge measures:', ['Accumulated dose introductory', 'Speed of car false', 'Voltage in home false', 'Resistivity false'], 'A'),
        ],
      },
    ],
  },
];
