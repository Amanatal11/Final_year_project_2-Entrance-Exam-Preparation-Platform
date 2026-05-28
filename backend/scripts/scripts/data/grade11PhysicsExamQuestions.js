/**
 * Five entrance-exam-style MCQs per Grade 11 Physics topic (Natural stream).
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  const key = `${c}-${t}`;
  const banks = {
    '0-0': [
      Q('Physics is central to Ethiopia’s modernization mainly because:', ['It supports evidence-based engineering, technology, and health systems', 'It removes the need for mathematics', 'It replaces experimentation', 'It ignores measurements'], 'A'),
      Q('A disciplined physics mindset emphasizes:', ['Models, measurements, and checking predictions', 'Stories without numbers', 'Only memorizing names', 'Rejecting graphs'], 'A'),
      Q('Compared with guesses, physics explanations typically:', ['Can be tested and refined with data', 'Cannot be improved', 'Avoid units', 'Depend only on authority'], 'A'),
      Q('Learning Grade 11 physics helps citizens understand issues like:', ['Energy, radiation safety, electricity, and materials', 'Only grammar rules', 'Only chemical symbols without context', 'Only sports scores'], 'A'),
      Q('Responsible use of physics-based technology includes:', ['Considering safety ethics and societal impacts', 'Ignoring labels on equipment', 'Overloading circuits for speed', 'Avoiding grounding'], 'A'),
    ],
    '0-1': [
      Q('Research universities in physics commonly:', ['Train specialists and investigate new phenomena', 'Only memorize old notes', 'Avoid laboratories', 'Stop publishing findings'], 'A'),
      Q('Teachers in the physics classroom mainly:', ['Guide inquiry explain concepts and ensure safe practices', 'Replace demonstrations with guesses', 'Discourage questioning', 'Ignore units'], 'A'),
      Q('Laboratory technicians contribute by:', ['Preparing setups calibrating tools and collecting reliable data', 'Writing unchecked theories alone', 'Avoiding teamwork', 'Replacing graphs with prose only'], 'A'),
      Q('Industrial R&D teams use physics for:', ['Designing electronics materials testing and QC metrics', 'Only advertising', 'Only folklore explanations', 'Avoiding measurement uncertainty'], 'A'),
      Q('International physics collaboration helps:', ['Share expertise datasets and reproducible methods', 'Hide methods from students', 'Remove peer review standards', 'Stop safety training'], 'A'),
    ],
    '0-2': [
      Q('A scientific hypothesis in physics should be:', ['Testable against observations within stated conditions', 'Impossible to check', 'Only a slogan', 'Only an untestable belief'], 'A'),
      Q('Experiments revise physics knowledge when:', ['Results disagree with predictions at needed precision', 'Students guess randomly', 'No data are recorded', 'Graphs are never drawn'], 'A'),
      Q('Repeated trials with controlled variables mainly improve:', ['Reliability and confidence in averaged results', 'Memorization only', 'Bypassing uncertainties', 'Avoiding calculators'], 'A'),
      Q('Measurement uncertainty is communicated so that:', ['Conclusions reflect what the data truly support', 'All numbers look exact falsely', 'Error bars are unnecessary', 'Only one trial is acceptable always'], 'A'),
      Q('Updating a model after new evidence reflects:', ['The self-correcting nature of physics', 'That physics never changes falsely absolute', 'That laws are guesses only', 'That theory replaces measurement always'], 'A'),
    ],
    '0-3': [
      Q('A graduate with strong physics fundamentals may pathway toward:', ['Engineering medicine teaching instrumentation or ICT', 'Only non-technical clerical routes always', 'Rejecting STEM sectors', 'Avoiding teamwork roles'], 'A'),
      Q('Laboratory physicist-type roles emphasize:', ['Precision measurement instrument knowledge and procedural rigor', 'Only sales pitching', 'No safety awareness', 'No documentation'], 'A'),
      Q('Teaching physics professionally requires:', ['Subject mastery pedagogical skill and ethics', 'Ignoring student misconceptions', 'Avoiding demos', 'No continuous learning'], 'A'),
      Q('Industrial quality testing connects to:', ['Applying forces energy electricity and thermal ideas', 'Only storytelling', 'No standards', 'No calibration'], 'A'),
      Q('Continuing education matters in physics-linked careers because:', ['Standards equipment and frontier knowledge evolve', 'Old notes never need revision', 'Math becomes unnecessary', 'Safety rules stay optional'], 'A'),
    ],
    '0-4': [
      Q('Growing energy-transition discussions often hinge on:', ['Efficiency materials storage grids and measurable losses', 'Only slogans without numbers', 'Rejecting thermal concepts', 'Ignoring electrical safety'], 'A'),
      Q('Medical imaging advancements rely heavily on:', ['Ionizing radiation optics fields and detectors', 'Only herbal classification', 'No physics training', 'No risk communication'], 'A'),
      Q('Quantum and nano trends appear in:', ['Modern electronics sensing and engineered materials', 'Only ancient astrology', 'Only classical poetry', 'Ignoring measurement'], 'A'),
      Q('Data science roles benefit from physics training because:', ['Modeling quantitative reasoning and interpreting uncertainty transfer', 'Physics removes statistics needs falsely', 'Graphs become useless', 'Only memorization transfers'], 'A'),
      Q('Ethics in emerging physics-linked tech focuses on:', ['Safety privacy environmental impact and responsible deployment', 'Only speed-to-market blindly', 'No regulation discussion', 'No education'], 'A'),
    ],
    '1-0': [
      Q('A vector quantity in mechanics must include:', ['Magnitude and direction', 'Magnitude only', 'Direction only', 'Neither magnitude nor direction'], 'A'),
      Q('Displacement is modeled as:', ['An arrow from initial to final position (vector)', 'Only path length without direction notion', 'A scalar regardless of wording', 'A temperature reading'], 'A'),
      Q('Polar form of a planar vector emphasizes:', ['Magnitude R and angle θ from a chosen axis', 'Only Cartesian components without magnitude', 'Only color coding', 'Only mass alone'], 'A'),
      Q('Equivalent vectors have:', ['Same magnitude and same direction', 'Opposite directions always', 'Different magnitudes necessarily', 'No relation to displacement'], 'A'),
      Q('Acceleration as a vector can change:', ['Either speed direction or both', 'Speed only always', 'Direction only without speed change always false generally', 'Time without motion'], 'A'),
    ],
    '1-1': [
      Q('Resolving a vector into components means expressing it as:', ['A sum along chosen perpendicular directions', 'A single number ignoring direction always', 'A chemical formula', 'A phase change equation'], 'A'),
      Q('Using angle θ measured from +x-axis the x-component is often:', ['R cos θ when standard convention applies', 'R tan θ generally', 'R/θ', 'θ²'], 'A'),
      Q('Recombining perpendicular components restores magnitude:', ['R = √(x² + y²)', 'x + y always false general', '|x − y| only', 'x/y only'], 'A'),
      Q('Choosing axes along an incline can simplify resolving:', ['Weight into parallel and perpendicular parts to the surface', 'Only buoyancy falsely always', 'Only nuclear forces', 'No forces'], 'A'),
      Q('Choosing wrong sine/cosine for θ typically causes:', ['Incorrect component magnitudes direction errors', 'Automatic cancellation always', 'No effect ever', 'Unit conversion only'], 'A'),
    ],
    '1-2': [
      Q('Graphical tip-to-tail addition combines vectors by:', ['Placing successive vectors nose-to-tail then drawing resultant', 'Multiplying magnitudes always', 'Removing direction', 'Averaging labels only'], 'A'),
      Q('Adding vectors by components yields resultant components:', ['Rx = Σx Ry = Σy', 'Always zero regardless', 'Product of components falsely', 'Only difference never sum'], 'A'),
      Q('Polygon method extends tip-to-tail to:', ['Many vectors in plane (intro)', 'Scalar temperature addition', 'Chemical stoichiometry', 'Calorimetry only'], 'A'),
      Q('Finding resultant direction from Rx Ry uses:', ['Arctangent with quadrant awareness', 'Addition of angles only blindly', 'No trigonometry', 'Only Coulomb constants'], 'A'),
      Q('If A+B=C in planar components then Cx equals:', ['Ax + Bx', 'Ax − By always', 'Ay + Bx', 'AxBx'], 'A'),
    ],
    '1-3': [
      Q('Vector subtraction can be rewritten as:', ['A + (−B)', 'Only scalar subtraction', 'A × B vector cross always', 'A/B'], 'A'),
      Q('For two perpendicular planar vectors magnitude 6 and 8 the resultant magnitude is:', ['10 (Pythagoras)', '14 numeric sum trap', '2', '48'], 'A'),
      Q('Equal and opposite displacement vectors summed give:', ['Zero displacement', 'Double magnitude necessarily', 'A random arrow', 'A scalar temperature'], 'A'),
      Q('Find R = A − B graphically tip-to-tail by:', ['Adding A then drawn −B nose-to-tail (intro)', 'Drawing only magnitudes squared', 'Multiplying tips only', 'Ignores direction conventions'], 'A'),
      Q('Two forces balance an object translating at constant velocity imply roughly:', ['Net force ΣF≈0 in that simple model assumption', 'Net force infinite', 'Friction absent always falsely', 'No vectors exist'], 'A'),
    ],
    '1-4': [
      Q('The dot product A · B introduces in plane:', ['Scalar linked to projections with cos θ factor (intro)', 'A vector perpendicular always', 'A latent heat quantity', 'A resistance value'], 'A'),
      Q('Parallel vectors θ = 0 gives cos θ:', ['equals 1 (intro)', 'equals −1 necessarily', 'equals 0', 'undefined'], 'A'),
      Q('Introductory cross-product magnitude satisfies |A×B| =', ['|A||B| sin θ', '|A||B| cos θ (dot-product mix)', '|A||B| / sin θ', '|A||B| + θ'], 'A'),
      Q('Intro cross direction is perpendicular to:', ['Plane containing both A and B (right-hand-rule intro)', 'Only gravitational field', 'Only heat flow', 'Time axis only'], 'A'),
      Q('Straight-line displacement d with parallel force magnitude F motivates work:', ['As F multiplied by displacement magnitude when parallel (intro bridge)', 'As mass times voltage', 'Only as temperature gap', 'As charge squared always'], 'A'),
    ],
    '2-0': [
      Q('Uniformly accelerated straight-line motion has:', ['Nearly constant acceleration a over the interval modeled', 'Zero acceleration necessarily', 'Speed always constant falsely', 'No equation links v and t'], 'A'),
      Q('A standard relation is:', ['v = u + at for constant acceleration (intro)', 'v = u − at squared always falsely', 'a = vt always', 'x = vt only always'], 'A'),
      Q('Displacement with constant acceleration from rest uses:', ['x = ut + ½at² (intro)', 'x = vt without u story always', 'x = a/t', 'x = u/a always'], 'A'),
      Q('Equation v² = u² + 2ax can remove:', ['Finding time explicitly sometimes (intro)', 'Need for acceleration always falsely', 'All units', 'Mass always'], 'A'),
      Q('Choosing + direction consistently for a axis helps:', ['Reduce sign confusion in kinematics', 'Eliminate displacement', 'Make gravity disappear', 'Remove vectors'], 'A'),
    ],
    '2-1': [
      Q('On an x−t graph slope at a point gives:', ['Instantaneous velocity (intro)', 'Acceleration necessarily', 'Total distance travelled only', 'Power'], 'A'),
      Q('For uniform acceleration straight line x−t plot is modeled as:', ['Parabolic curvature (intro)', 'Always perfectly linear always false accelerating', 'A circle', 'A vertical asymptote generally'], 'A'),
      Q('Displacement from velocity–time graph area uses:', ['Signed area rule for straight-line graphs (intro)', 'Only circumference', 'Only peak height blindly', 'No integration idea'], 'A'),
      Q('Slope of velocity–time graph gives:', ['Acceleration (intro)', 'Displacement directly always', 'Kinetic energy', 'Charge density'], 'A'),
      Q('Average velocity straightforward case for uniformly accelerated:', ['Often (u+v)/2 along one axis (intro pattern)', 'Always u+v without divide', 'Always zero', 'Equals acceleration'], 'A'),
    ],
    '2-2': [
      Q('Ideal projectile models often assume:', ['Negligible air effects and symmetry when stated (survey)', 'Air always dominates strongly', 'No horizontal velocity component falsely', 'No vertical acceleration falsely'], 'A'),
      Q('Horizontal velocity component modeled constant (ideal intro):', ['Because modeled net horizontal acceleration ≈ 0 overview', 'Because gravity acts horizontally falsely', 'Because mass vanishes falsely', 'Because time stops'], 'A'),
      Q('Peak height time links to:', ['Vertical motion symmetry ideas when landing level (intro)', 'Only microscope optics', 'Only circuit rules', 'Nuclear decay times only'], 'A'),
      Q('Flight time multiplied by steady horizontal component affects:', ['Range R ≈ uxT_total idea (survey)', 'Only magnetic declination falsely', 'Only thermal expansion falsely', 'Nuclear binding only'], 'A'),
      Q('Analyzing projectile motion cleanly splits:', ['Independent horizontal kinematics model alongside vertical uniformly accelerated vertical model intro', 'Only one unknown always', 'No components ever', 'Only rotation energy'], 'A'),
    ],
    '2-3': [
      Q('Near Earth modeled free vertical acceleration magnitude is roughly:', ['9.8 m/s² downward magnitude idea (survey)', '0 m/s² always', '98 m/s² upward', 'Depends on mass falsely g independent intro'], 'A'),
      Q('Thrown upward instantaneous velocity at maximum height:', ['Passes through zero briefly (intro)', 'Is always maximal', 'Doubles downward immediately without stopping falsely', 'Is undefined'], 'A'),
      Q('Displacement sign depends on:', ['Chosen upward or downward positive axis conventions', 'Object color only', 'City altitude only blindly', 'Only resistance values'], 'A'),
      Q('Dropped from rest modeled distance after t uses:', ['h = ½gt² downward choice intro', 'h = gt only', 'h = g²t falsely', 'h independent of time'], 'A'),
      Q('Symmetric ideal toss up/down near same elevation implies:', ['Time up matches time down in simple model symmetry (intro caveat)', 'Range always maximal at 89° blindly', 'No gravity acts falsely', 'Speed never returns'], 'A'),
    ],
    '2-4': [
      Q('Uniform circular motion means:', ['Around a circle centered path model speed magnitude roughly constant rotating direction (intro)', 'Velocity vector constant falsely', 'No acceleration falsely', 'Linear motion strictly'], 'A'),
      Q('Intro centripetal acceleration points:', ['Toward circle center inward (intro naming)', 'Tangentially always outward falsely general label mix', 'Along velocity always', 'Away from orbital plane falsely'], 'A'),
      Q('Magnitudes relate as intro ac ≈:', ['v²/R pattern (survey)', 'v/R only falsely', 'R/v² falsely', 'vR falsely'], 'A'),
      Q('Intro period T and frequency f obey:', ['f ≈ 1/T reciprocal relationship (survey)', 'f = T always', 'f = T² falsely', 'No relation'], 'A'),
      Q('Angular speed ω links to linear speed magnitude v roughly as:', ['v ≈ Rω tangent speed intro', 'v = ω/R inverted trap', 'v = ω+R falsely', 'v independent of radius always'], 'A'),
    ],
    '3-0': [
      Q('Newton’s first law inertia idea states roughly:', ['Object stays at uniform motion unless nonzero net external force tendency (survey)', 'Net force guarantees speed up always falsely', 'Objects stop without forces always falsely', 'Massless objects obey magic'], 'A'),
      Q('Newton’s second law backbone form:', ['ΣF = ma translational modeling (survey)', 'a = ΣF·m falsely', 'F = mv always', 'ΣF always zero falsely'], 'A'),
      Q('Newton’s third law emphasizes:', ['Interactive force pairs equal magnitude opposite direction on different bodies (survey)', 'Normal equals weight always falsely', 'Internal forces accelerate system center falsely blindly', 'Friction absent always'], 'A'),
      Q('Choosing a free-body isolation helps visualize:', ['Forces acting on ONE object of interest cleanly (intro)', 'All bodies simultaneously without clarity falsely', 'Only heat capacities', 'Only nuclear charge alone'], 'A'),
      Q('Acceleration direction matches net force direction:', ['Along same line sense for point particle model assumption (intro caveat)', 'Always opposite blindly', 'Unrelated blindly', 'Perpendicular necessarily'], 'A'),
    ],
    '3-1': [
      Q('Static friction can adjust up to:', ['A limiting rough value Fs_max ≈ μsN modeled intro', 'Infinite always blindly', 'Zero always blindly', 'Equals kinetic always blindly'], 'A'),
      Q('Intro kinetic friction often modeled like:', ['Fk ≈ μkN tangent opposing relative motion tendency (survey)', 'Fk always zero blindly', 'Fk always maximal static blindly unchanged', 'Independent of surfaces falsely general'], 'A'),
      Q('Translational equilibrium along an axis modeled roughly:', ['ΣFx = 0 when net acceleration modeled zero that direction (survey)', 'ΣFx infinite', 'Friction absent always blindly', 'All forces perpendicular falsely'], 'A'),
      Q('Normal force is not:', ['Always identical to gravity weight blindly incline caveat', 'A contact perpendicular support idea', 'Relevant friction modeling context', 'Perpendicular ideally to surface contact'], 'A'),
      Q('Using wrong friction direction opposing motion slips causes:', ['Wrong net force equilibrium answers', 'Automatic cancellation magically', 'No effect ever blindly', 'Only nuclear errors'], 'A'),
    ],
    '3-2': [
      Q('Straight constant force magnitude F parallel displacement d gives:', ['Work W = Fd scalar energy transfer idea (survey)', 'W = F/d falsely', 'W = mv falsely', 'W always zero blindly'], 'A'),
      Q('Translational kinetic energy modeled:', ['Ek = ½mv² nonnegative scalar intro', 'Ek = mv falsely', 'Ek = m/gh falsely insane', 'Negative always blindly'], 'A'),
      Q('Gravity near uniform field intro potential energy modeled:', ['Ep ≈ mgh relative reference height assumption (survey)', 'Ep independent of height falsely blindly', 'Ep = ½kx² falsely spring mix', 'Ep vector'], 'A'),
      Q('Joule expresses:', ['Energy or work magnitude (survey)', 'Power only blindly', 'Force only blindly', 'Current only blindly'], 'A'),
      Q('Including angle θ generalized constant force displacement dot-intro concept:', ['Uses cos θ projection factor multiplying magnitudes introductory survey', 'Ignores cosine always blindly', 'Demands θ=π always blindly', 'Replaces watts blindly'], 'A'),
    ],
    '3-3': [
      Q('Mechanical energy E_mech summarizes intro:', ['E_mech ≈ Ek + Ep conservative-gravity/simple cases idea (survey)', 'Only friction heat always falsely', 'Only nuclear mass defect falsely here', 'Vector sum'], 'A'),
      Q('Ignoring non-conservative dissipative modeled losses simplified cases:', ['E_mech can stay approximately conserved during motion model intro', 'Ek always disappears instantly blindly', 'Ep always maximal blindly', 'Total energy meaningless falsely'], 'A'),
      Q('Friction presence often implies:', ['Some mechanical energy becomes thermal dissipative modeled macro intro', 'No energy bookkeeping needed blindly', 'Conservation invalidated totally falsely universe-wide mix', 'Only chemical bonds falsely'], 'A'),
      Q('Rolling ideal intro sometimes couples:', ['Translation and rotation energy partitioned ideas advanced bridge', 'Only latent heat blindly', 'Only buoyancy blindly', 'No kinetic forms falsely'], 'A'),
      Q('Misidentifying datum height for PE can shift:', ['Ep numeric value reference but differences key if consistent intro', 'Meaninglessly all physics outcomes always falsely', 'Kinetic formulas falsely break', 'Mass changes falsely'], 'A'),
    ],
    '3-4': [
      Q('Impulse J modeled intro relation:', ['J ≈ F_avg Δt vector linked to Δp idea (survey)', 'J equals mass always blindly', 'J equals Ep falsely', 'J scalar always blindly'], 'A'),
      Q('Momentum p modeled:', ['p = mv vector intro', 'p = Ft always falsely instantaneous story', 'p scalar always blindly', 'p = Ek falsely'], 'A'),
      Q('Newton’s law momentum form intro:', ['ΣF_avgΔt ↔ Δp over interval modeling (survey)', 'ΣF forbids Δp blindly', 'Only thermal expansion falsely', 'Only waves falsely'], 'A'),
      Q('Elastic head-on textbook intro conserved quantities often cite:', ['Momentum and kinetic energy in ideal elastic model (survey)', 'Only temperature blindly', 'Only charge blindly', 'Only mechanical advantage blindly'], 'A'),
      Q('Sticky inelastic mergers intro lose some:', ['Often some kinetic fraction becomes internal thermal modeled macro intro', 'All momentum blindly always falsely', 'All mass blindly', 'All charge blindly falsely'], 'A'),
    ],
    '4-0': [
      Q('Informal distinction heat versus temperature emphasizes:', ['Heat is energy transferred thermal sense temperature gauges average particle intensity notion (survey)', 'They identical always blindly', 'Heat never moves falsely', 'Temperature always energy outright falsely sloppy'], 'A'),
      Q('Thermal energy linked micro picture intro:', ['Internal random microscopic motions summed macro idea (survey)', 'Only orderly macroscopic KE projectiles falsely entirety', 'Only nuclear binding solely falsely here', 'Only electric field uniformly falsely'], 'A'),
      Q('Conduction needs intro:', ['Material medium particle collision transfer modeled overview', 'Vacuum obligatory falsely radiation path', 'Only latent heat blindly', 'Only fluid bulk motion falsely mix convection'], 'A'),
      Q('Convection relies intro on:', ['Moving fluid carrying thermal energy collectively (survey)', 'Only vacuum radiation solely falsely', 'Only rigid lattice vibration solely falsely solids', 'No mass motion falsely blind'], 'A'),
      Q('Thermal equilibrium informal idea:', ['No net spontaneous energy flows between touching idealized insulated boundary cases intro', 'Bodies unequal temps exchange forever blindly macro closed false', 'Heat ceases universally falsely absolute zero mix', 'Temperature undefined'], 'A'),
    ],
    '4-1': [
      Q('Specific heat capacity definition intro pattern:', ['c characterized energy per kg per kelvin ΔT proportional intro Q = mcΔT idea (survey)', 'Same for all substances always falsely', 'Zero always blindly', 'Vector quantity falsely'], 'A'),
      Q('Higher specific heat loosely means:', ['More energy needed per kg for similar ΔT modeled intro intuition', 'Heats quicker always blindly false general', 'No temperature change falsely always', 'Only gases possess falsely'], 'A'),
      Q('Water comparatively large c implies intro intuition:', ['Slower sizable temperature swings per energy input heuristic (survey)', 'Instant boiling always blindly', 'No phase change falsely', 'No thermal effects falsely'], 'A'),
      Q('Misusing grams versus kilograms in Q = mcΔT causes:', ['Order-of-magnitude energy errors wildly', 'No effect blindly', 'Only nuclear errors falsely irrelevant', 'Only optical errors blindly'], 'A'),
      Q('Choosing consistent ΔT units Kelvin Celsius interval intro:', ['Same numeric interval magnitude for Δ change modeling intro bridge', 'Cannot convert Δ falsely sloppy', 'Zero offset identical falsely absolute values', 'Forbids calculators falsely'], 'A'),
    ],
    '4-2': [
      Q('Linear thermal expansion ΔL modeled intro:', ['ΔL ≈ αL₀ΔT for small fractional changes heuristic (survey)', 'ΔL always zero blindly', 'Independent of temperature falsely general unbounded sloppy', 'Vector cross product falsely'], 'A'),
      Q('Coefficient α summarizes intro:', ['Material sensitivity expansion per degree heuristic (survey)', 'Electrical conductivity falsely unrelated here', 'Nuclear charge falsely', 'Only fluid density falsely unrelated'], 'A'),
      Q('Leaving expansion gaps rails bridges anticipates:', ['Seasonal contraction expansion strain relief intro', 'Increasing stress blindly always aim falsely', 'Melting purposely falsely simplistic', 'Capacitive breakdown falsely unrelated'], 'A'),
      Q('Rough volume expansion heuristic intro proportional idea:', ['Volume change trends similar linear small ΔT simplistic survey bridge', 'Volume never expands solids falsely blindly', 'Only gases expand falsely blindly', 'No thermal effects liquids falsely blindly'], 'A'),
      Q('Thermal stress risk increases if expansion:', ['Constrained mechanically forced compression tension intro intuition', 'Unconstrained floats freely blindly never stress falsely ideal', 'Eliminates elasticity falsely silly', 'Stops convection falsely unrelated'], 'A'),
    ],
    '4-3': [
      Q('Phase change plateaus intro:', ['Absorb or release latent energy while temperature plateau macro observation (survey)', 'No energy exchange falsely blindly', 'Only kinetic changes falsely blindly entire story', 'Only chemical bonds blindly mix'], 'A'),
      Q('Fusion latent heat Lf modeled intro heuristic:', ['Q ≈ mLf energy for melting modeled quantity intro', 'Lf always zero blindly', 'Only sensible heat blindly', 'Vector'], 'A'),
      Q('Vaporization latent Lv heuristic intro:', ['Q ≈ mLv energy boiling modeled intro pattern', 'Always smaller than fusion blindly falsely general', 'Equal electron charge falsely nonsense', 'No units'], 'A'),
      Q('Pure substance heating curve segmented intro:', ['Sensible stretches plus flat latent plateau sections idealized (survey)', 'Always single straight blindly real materials messy caveat', 'No phases exist falsely', 'Only nuclear segments falsely'], 'A'),
      Q('Misreading latent plateau as “no heating” falsely ignoring chem intro:', ['Energy still transfers rearranging microscopic binding patterns intro fix', 'Internal energy unchanged falsely blindly flat wrong', 'Stops entropy considerations falsely sloppy', 'Only mechanical work falsely'], 'A'),
    ],
    '4-4': [
      Q('Coffee-cup-style calorimetry heuristic intro relies on:', ['Assuming negligible heat leak idealization heat lost ≈ heat gained survey bridge', 'Explicit infinite leak ideal falsely', 'No liquids allowed falsely', 'Only nuclear reactions falsely'], 'A'),
      Q('Conductive heat rate intro heuristic mentions:', ['Proportional temperature gradient Fourier-style qualitative intro', 'Independent of ΔT blindly false linear approx region', 'Only microwave resonance falsely simplistic', 'No material dependence falsely blindly'], 'A'),
      Q('Thermal conductor versus insulator heuristic:', ['Conductors transport internal energy readily metals exemplar intro', 'Perfect insulators never exist realistically caveat', 'All plastics identical falsely blindly', 'Only gases conduct falsely blindly'], 'A'),
      Q('Stirring promotes intro:', ['Faster equilibrium uniform temperature measurement calorimetry quality', 'Removes latent heat falsely magic', 'Stops convection falsely silly', 'Creates cold fusion blindly joke'], 'A'),
      Q('Poor insulation in school heat labs inflates:', ['Systematic underestimated specific heat outcomes trend intuition', 'Precision improvement blindly falsely', 'Nuclear contamination falsely joking', 'Friction elimination falsely joking'], 'A'),
    ],
    '5-0': [
      Q('Intro Coulomb law magnitude pattern heuristic:', ['|F| ∝ q1 q2 / r² inverse-square overview (survey)', 'Independent of distance falsely blindly', 'Attractive always blindly regardless sign mix', 'Proportional r² falsely inverted trap'], 'A'),
      Q('Electric field E intro conceptual test charge heuristic:', ['Force per tiny positive probe charge notion E = F/q direction away + source heuristic (survey)', 'Scalar temperature falsely', 'Only magnetic pole falsely unrelated', 'Nuclear decay rate falsely unrelated'], 'A'),
      Q('Same-sign point charges heuristic force:', ['Repulsive along line joining centers intro', 'Always attractive blindly', 'Zero always blindly noncontact false', 'Tangential always falsely spinning'], 'A'),
      Q('Superposition intro idea multiple charges:', ['Vector sum of contributions each source modeled intro', 'Only largest charge dominates always falsely general', 'Fields cancel arbitrarily falsely without calc', 'No addition'], 'A'),
      Q('Coulomb constant k appears because SI rationalized units heuristic intro:', ['Connects microscopic charge units to measurable force magnitude scale (survey)', 'Eliminates need for distances falsely', 'Makes elementary charge imaginary falsely joke', 'Replaces volts blindly'], 'A'),
    ],
    '5-1': [
      Q('Electric potential difference ΔV heuristic intro relates:', ['Work per unit charge moving conservative field modeled idea (survey)', 'Force per area falsely pressure', 'Current squared falsely power alone sloppy', 'Nuclear binding falsely'], 'A'),
      Q('Volt unit expresses intro:', ['Joule per coulomb energy-per-charge transfer notion (survey)', 'Coulomb per second falsely ampere blindly mislabel ΔV falsely', 'Ohm·m falsely resistivity blindly', 'Tesla blindly magnetic'], 'A'),
      Q('Equipotential surfaces heuristic qualitative intro:', ['No work moving charge along ideally without crossing field perpendicular story (survey)', 'Always parallel field lines blindly false mix', 'Max field always zero falsely confused', 'Only mechanical energy'], 'A'),
      Q('Intro capacitance definition heuristic:', ['C = Q/V stores separated charge modeling intro', 'Measured in ohms blindly trap', 'Vector quantity falsely blindly', 'Equals resistance blindly trap'], 'A'),
      Q('Increasing plate separation parallel-plate heuristic capacitance trend intro:', ['Tends to decrease C simplified qualitative models textbooks (survey)', 'Always doubles blindly falsely', 'Unaffected blindly false', 'Becomes inductor blindly joke'], 'A'),
    ],
    '5-2': [
      Q('Electric current I heuristic intro modeled:', ['Charge flow rate I = ΔQ/Δt sense (survey)', 'Stored separated charge falsely capacitance static alone blindly label', 'Thermal expansion rate falsely blindly', 'Nuclear decay rate blindly mix'], 'A'),
      Q('Ampere heuristic intro expresses:', ['Coulomb per second flow notion (survey)', 'Joule per coulomb falsely volt blindly label current falsely', 'Ohm blindly resistance', 'Tesla blindly'], 'A'),
      Q('Macroscopic Ohm law linear intro:', ['V = IR modeled ohmic materials approximately (survey)', 'I = VR falsely inverted blindly trap', 'R = VI falsely alphabet trap', 'V independent of R falsely blindly'], 'A'),
      Q('Resistance heuristic micro connection intro mentions:', ['ρL/A proportionalities qualitative survey bridges', 'Independent of geometry always falsely blindly', 'Increases with thicker shorter wire blindly false trend', 'Nuclear density falsely nonsense'], 'A'),
      Q('Misconnecting meters intro cautions briefly:', ['Ammeter parallel can blow branch protection lesson (survey)', 'Voltmeter series ideal model pitfall introductory story', 'Meters meaningless always blindly false pedagogical necessity', 'Only dc works falsely sloppy'], 'A'),
    ],
    '5-3': [
      Q('Series resistors heuristic intro equivalent:', ['R_eq = ΣRi adds along single path (survey)', 'Reciprocal sum falsely parallel inverted trap blindly', 'Product falsely', 'Harmonic mean blindly wrong'], 'A'),
      Q('Parallel resistors reciprocal rule intro heuristic:', ['1/R_eq = Σ 1/Ri shared voltage branches (survey)', 'Simple sum R_eq falsely trap series confusion', 'R_eq infinite always blindly false trivial', 'R_eq equals smallest only blindly simplistic'], 'A'),
      Q('Electric power heuristic DC intro patterns:', ['P = IV equivalences I²R and V²/R survey bridges', 'P always zero blindly false resistive heaters', 'P equals mcΔT blindly thermal sloppy direct', 'P vector'], 'A'),
      Q('Increasing total resistance modeled with fixed ideal battery intro trend vague:', ['Current tends down if modeled V fixed simplified Ohmic story caveat internal r later (survey)', 'Current always climbs blindly falsely', 'Power always climbs blindly falsely general', 'Energy disappears magically falsely'], 'A'),
      Q('Voltage division heuristic two series intro qualitative:', ['Larger resistor tends larger share ΔV simplistic survey bridge', 'Equal always blindly false mismatched deliberately', 'Only parallel splits falsely blindly trap story', 'No relation blindly false'], 'A'),
    ],
    '5-4': [
      Q('Household safety intro lists basics:', ['Grounding breaker/fuse caution water wet conductors insulation awareness (survey)', 'Touch energized conductors dry-handed testing blindly dangerous wrong', 'Bypass earth wire advantage falsely wrong', 'Overload multi-adapters purposely safe falsely wrong'], 'A'),
      Q('Circuit breaker heuristic purpose intro:', ['Interrupts overheating/overcurrent faults protection (survey)', 'Raises supply voltage purposely falsely wrong', 'Removes grounding need falsely dangerously wrong joke', 'Generates electrons endlessly falsely joking'], 'A'),
      Q('Bird single-line perch heuristic simplistic intro:', ['Modes often modeled high-voltage negligible potential difference locally naive story caveat (survey)', 'Always shocked blindly simplistic false nuanced', 'Insulated wings falsely joking', 'Charges birds positively permanently falsely sloppy'], 'A'),
      Q('Proper fuse sizing intro qualitative:', ['Match intended conductor capacity avoid sustained overcurrent overheating naive story (survey)', 'Largest fuse always blindly false fire risk', 'Fuse optional blindly dangerously false code reality', 'Fuse heats water falsely joke'], 'A'),
      Q('Appliance polarity wiring intro awareness heuristic:', ['Live neutral earth roles separate protection concepts simplified survey', 'Neutral always safe blindly false subtle faults caveat', 'Earth decorative falsely dangerously wrong pedagogical rejection', 'AC never shocks falsely falsely'], 'A'),
    ],
    '6-0': [
      Q('Nucleus heuristic intro constituents:', ['Protons Z neutrons forming nucleon count A modeled intro (survey)', 'Electrons imprisoned classical orbits blindly outdated naive mix', 'Only photons blindly wrong', 'Empty void falsely joke'], 'A'),
      Q('Atomic number Z defines intro:', ['Proton tally chemical element identity heuristic (survey)', 'Neutron tally blindly false', 'Total mass blindly vague sloppy', 'Orbital electrons count always equal mass number falsely blindly'], 'A'),
      Q('Mass number A naive intro shorthand:', ['Protons plus neutrons counting nucleons simplistic survey', 'Electron shells counted falsely', 'Coulomb energy only falsely', 'Only binding fraction falsely'], 'A'),
      Q('Isotopes heuristic intro same element:', ['Same Z differing neutron counts variant nuclides (survey)', 'Same neutrons falsely', 'Different elements falsely blindly same Z contradictory', 'No nuclear structure falsely joking'], 'A'),
      Q('Stable nuclides intro qualitative trend survey:', ['Neutron proton ratio patterns moderate nuclei heuristic chart intro', 'All nuclei identical falsely', 'Heaviest always stable blindly false radioactive trend', 'No strong interaction mention allowed falsely silly'], 'A'),
    ],
    '6-1': [
      Q('Alpha particle heuristic intro coarse identity:', ['Helium nucleus two protons two neutrons packaged emission intro story (survey)', 'Electron emission falsely blindly label mismatch', 'Hydrogen nucleus falsely blindly unless special case caveat', 'Photon nuclear gamma confused falsely'], 'A'),
      Q('Beta-minus heuristic intro simplistic overview:', ['Neutron proton conversion emits electron-type lepton bookkeeping intro qualitative (survey)', 'Removes proton always blindly false generalization', 'Emits helium nucleus blindly false mismatch', 'Stops nucleus existing falsely joking'], 'A'),
      Q('Gamma emission heuristic qualitative intro distinction:', ['High-energy photons nuclear de-excitation electromagnetic story (survey)', 'Helium nucleus mistakenly labeled blindly false misuse', 'Charged helium atom falsely blindly', 'Sound wave falsely unrelated'], 'A'),
      Q('Half-life heuristic intro modeled trend:', ['Time for decay probability half simplistic statistic intro exponential memoryless mention survey', 'Time all nuclei vanished precisely blindly falsely counting half', 'Zero duration always blindly false', 'Only chemical kinetics blindly wrong domain'], 'A'),
      Q('Dosimetry heuristic intro distinguishes grossly:', ['Exposure versus biological dose weighted concepts simplistic survey bridge', 'Equal photon energy always blindly false tissue dependence subtle', 'No radiation differs falsely safety wrong', 'Only distance irrelevant falsely inverse square caveat'], 'A'),
    ],
    '6-2': [
      Q('Nuclear fission heuristic intro modeled:', ['Heavy nucleus splits lighter fragments liberating binding energy modeled intro qualitatively survey', 'Hydrogen merges blindly falsely fusion inversion', 'No energy release blindly false', 'Chemical bond snapping only falsely microscopic scale sloppy'], 'A'),
      Q('Controlled chain reaction heuristic reactor intro caveat:', ['Neutron population balanced engineered moderation absorption concept simplistic survey cartoon', 'Unbounded always blindly falsely engineering negates caricature runaway caveat', 'No fuel needed blindly joke', 'Only chemical burning falsely caricature misuse'], 'A'),
      Q('Fusion heuristic intro caricature simplistic:', ['Light nuclei merge heavier releasing energy heuristic stars intro story (survey)', 'Splits uranium blindly falsely opposite', 'Cold tabletop trivial always falsely oversell pseudoscience reject intro pedagogy caveat', 'No temperature relevance blindly false Coulomb barrier concept qualitative'], 'A'),
      Q('Mass-energy heuristic intro bookkeeping:', ['Noticed deficits appear as kinetic photon liberation qualitative binding-energy bridge intro (survey)', 'Mass perfectly conserved blindly ignoring relativity caveat pedagogy nuanced', 'c irrelevant falsely laughable', 'Only chemical enthalpy blindly wrong scale'], 'A'),
      Q('Accelerator safety heuristic intro caricature distinguishes:', ['Machine radiation zoning shielding protocols intros vs uncontrolled fallout vague contrast survey', 'No shielding acceptable blindly falsely training reality', 'Home microwave equals reactor falsely dangerously wrong caricature pedagogical misuse', 'Magnetic containment equals microwave blindly false'], 'A'),
    ],
    '6-3': [
      Q('Einstein heuristic mass-energy linkage intro cites:', ['E = mc² energy–mass equivalence bookkeeping bridge survey', 'Deletes conservation blindly false nuanced mass-energy jointly', 'Forces classical inertia removal blindly falsely', 'Only photons obey falsely blindly wrong general'], 'A'),
      Q('Mass defect heuristic intro nucleus qualitative:', ['Nucleons bound tighter than free parts suggests lower total rest mass heuristic survey', 'Nucleons weigh more assembled blindly false trend typical stable nuclides intro qualitative', 'No measurement possible falsely wrong mass spectrometry bridge later', 'Only electrons contribute falsely blindly wrong'], 'A'),
      Q('Binding energy heuristic intro simplistic definition caricature:', ['Energy required imagined disassemble nucleons naive model bookkeeping intro pedagogical cartoon (survey)', 'Always zero blindly false', 'Equal chemical bond blindly wrong scale sloppy', 'Vector quantity blindly false'], 'A'),
      Q('Fusion energy heuristic simplistic survey binding-per-nucleon intro:', ['Heavier binding preferred trend middle mass iron peak qualitative chart intro heuristic', 'Monotonic always increases blindly falsely peak nuance caveat', 'No peak exists blindly false pedagogical denial', 'Nuclear reactor equals battery voltage blindly false'], 'A'),
      Q('Danger conflating mass defect blindly with everyday weight intro pitfall caricature pedagogical avoids:', ['Classical bookkeeping mass changes tiny chemistry-scale dominant ignorance legitimate intro caveat', 'Everyday scales swing wildly blindly false negligible chemical binding fraction vs nuclear caricature humorous but instructive caveat', 'Nuclear reactors lighter instantly visibly falsely caricature misconception reject intro', 'c zero falsely joke'], 'A'),
    ],
    '6-4': [
      Q('Peaceful nuclear power heuristic intro caricature distinguishes:', ['Baseload electricity production versus weapons pathways governance emphasis survey simplification caveat', 'Identical blindly dangerous generalization falsely oversimplified ethically reject intro caveat', 'No engineering controls exist blindly falsely modern regulatory reality intro contrast', 'No waste concern falsely ethically incomplete intro bridge'], 'A'),
      Q('Medical radioisotope tracer heuristic qualitative intro cites:', ['Targeted metabolic imaging therapies survey highlight careful dosing intro', 'No biological effect blindly false stochastic risk subtle intro qualitative', 'Replaces anatomy always blindly falsely multimodal caveat', 'Equal airport scanner dose blindly careless'], 'A'),
      Q('Food irradiation heuristic intro survey:', ['Controlled exposure reduces microbes regulatory pathways intro qualitative mention debate nuance caveat', 'Makes food radioactive blindly false misconception reject intro caricature pedagogical staple', 'Replaces refrigeration always blindly falsely partial complement caveat', 'Only gamma never electrons falsely sloppy'], 'A'),
      Q('Smoke detector heuristic intro caricature cites:', ['Small sealed americium source ionization principle qualitative intro caveat modern tech variants caveat', 'No radiation emitted blindly false negligible shielded carefully intro nuance caveat', 'Replaces audible alarm falsely unrelated', 'Nuclear reactor household falsely caricature misconception reject pedagogical'], 'A'),
      Q('ALARA heuristic radiation safety caricature acronym intro:', ['As Low As Reasonably Achievable pragmatic dose minimization ethos survey intro', 'No limits ever blindly unethical opposite professional reality intro contrast', 'Maximize doses blindly unethical joke caricature pedagogical reversal', 'Only workers protected blindly falsely public concern intro nuance caveat'], 'A'),
    ],
  };

  if (banks[key]) return banks[key];
  return [
    Q(`Which statement best matches Grade 11 Physics topic ${key}?`, ['Uses syllabus definitions and examples', 'Ignores units', 'Only memorizes names', 'Avoids measurement'], 'A'),
    Q('Vectors quantities such as displacement and acceleration include:', ['Direction as well as magnitude', 'Distance only blindly', 'Speed only falsely always', 'Current only blindly'], 'A'),
    Q('Energy methods including work and mechanical energy conserve under stated models intro:', ['Helping analyze motions without awkward intermediate times sometimes', 'Replace Newton laws always blindly false generality caveat', 'Remove vectors entirely blindly false', 'Only nuclear scale falsely'], 'A'),
    Q('Laboratory radiation awareness includes heuristic intro:', ['Time distance shielding minimizing exposure cartoon ALARA echoes', 'Staring sources closely blindly unethical joke', 'Removing warning labels ethically reject intro caricature pedagogical reversal', 'Ignoring calibrated meters blindly dangerous'], 'A'),
    Q('Responsible electricity practice intro lists:', ['Dry insulation respect breakers avoid unsafe extensions awareness survey', 'Wet barefoot panel servicing blindly unethical joke caricature pedagogical reversal', 'Bypass grounding advantage falsely unethical dangerous intro reject', 'Ignore rated wattage blindly hazardous'], 'A'),
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
        `Entrance-exam style item (Grade 11 Physics), aligned to “${topicName}”.`,
    };
  });
}

module.exports = {
  buildExamQuestionsForTopic,
  EC_YEARS,
};
