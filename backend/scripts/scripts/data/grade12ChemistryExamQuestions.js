/**
 * Five university-entrance-style MCQs per Grade 12 Chemistry topic (Natural stream).
 */

const EC_YEARS = [2014, 2015, 2016, 2017, 2018];

function Q(questionText, choices, correctLetter, answerExplanation = '') {
  return { questionText, choices, correctAnswer: correctLetter, answerExplanation };
}

function pack(c, t) {
  switch (`${c}-${t}`) {
    case '0-0':
      return [
        Q('The Pauli exclusion principle implies an orbital holds at most:', ['Two electrons with opposite spins', 'Six electrons sharing one spin', 'Unlimited electrons', 'One electron in all atoms'], 'A'),
        Q('For main-group elements, valence electrons are linked to:', ['Group number for many representative elements (survey rules)', 'Only atomic mass', 'Nuclear spin only', 'The number of neutrons only'], 'A'),
        Q('The Aufbau filling order is used together with:', ['Hund’s rule and the Pauli principle (introductory)', 'Ignoring all periodic trends', 'Removing d orbitals from the periodic table', 'Fixing electron speed to light speed'], 'A'),
        Q('Electron configuration notation such as 1s² 2s² describes mainly:', ['Approximate ground-state occupancy across subshells', 'Exact continuous paths of electrons in orbit', 'Only nuclear charge of neutrons', 'Photons in the nucleus'], 'A'),
        Q('Across a period (left→right, main-group) atomic radius typically:', ['Decreases due to increasing effective nuclear charge (trend story)', 'Increases without exception', 'Is constant for all atoms', 'Depends only on neutron count'], 'A'),
      ];
    case '0-1':
      return [
        Q('Ionization energy tends to increase across a period mainly because:', ['Effective nuclear charge rises while valence shell is similar (survey)', 'Atoms get larger without limit', 'Electrons are removed from the nucleus', 'Shielding becomes infinite'], 'A'),
        Q('Electronegativity generally increases toward:', ['The upper-right corner of the main periodic table (excluding noble gases in many plots)', 'The bottom-left corner always', 'Group 1 metals only', 'Isotopes with more neutrons only'], 'A'),
        Q('Atomic radius usually increases down a group because:', ['Additional occupied shells increase atomic size (qualitative)', 'Nuclear charge disappears', 'Electrons are deleted from atoms', 'Covalent bonds forbid larger atoms'], 'A'),
        Q('A discontinuity in first ionization energy trends may occur near:', ['Group 13–15 regions in some comparisons (survey discussion)', 'Only group 18 noble gases', 'Only lanthanides in every table always', 'Hydrogen only'], 'A'),
        Q('When comparing Na versus Cl across a period, typical ionization energies differ because:', ['Cl holds valence electrons more tightly in the trend narrative', 'Na has higher first IE always', 'Both have identical electron affinities always', 'Neither forms ions'], 'A'),
      ];
    case '0-2':
      return [
        Q('Ionic bonding in a simple binary salt involves:', ['Electron transfer forming cations and anions that attract in a lattice', 'Equal sharing only', 'No electrostatic attraction', 'Neutron exchange'], 'A'),
        Q('Lattice energy trends often connect with:', ['Charge magnitude and ion size (Born–Landé style reasoning at survey level)', 'Only covalent bond order', 'Only molecular orbital diagrams in every ionic case', 'Sound speed in water'], 'A'),
        Q('In solid NaCl at room temperature, ions typically:', ['Vibrate about fixed lattice sites—ions do not wander freely (idealized ionic model)', 'Move like free gas molecules', 'Disappear into neutrons', 'Conduct electricity in the solid easily'], 'A'),
        Q('Melting points of many ionic compounds are often relatively:', ['High due to strong electrostatic attractions in the crystal', 'Near absolute zero always', 'Identical to methane always', 'Lower than all molecular solids always'], 'A'),
        Q('Dissolved ionic salts in water can conduct electricity because:', ['Mobile ions carry charge when the medium is fluid (qualitative)', 'Only covalent molecules move', 'Electrons flow in pure water alone', 'NaCl remains neutral clusters only'], 'A'),
      ];
    case '0-3':
      return [
        Q('VSEPR predicts molecular geometry from:', ['Repulsions among electron domains around a central atom (survey)', 'Only atomic masses', 'Nuclear fusion cross-sections', 'Random dice rolls'], 'A'),
        Q('A double bond includes:', ['One σ framework plus one π component between the bonded atoms (intro)', 'Two unrelated ionic bonds', 'Only hydrogen bonds', 'Pure metallic delocalization'], 'A'),
        Q('Bond polarity arises when:', ['Atoms differ in electronegativity (unequal sharing)', 'All bonds are nonpolar always', 'Only isotopes differ', 'Only solids form'], 'A'),
        Q('A tetrahedral electron geometry with four bonding domains usually yields:', ['A bond angle near 109.5° in idealized tetrahedral geometry', '180° linear geometry', '90° square planar geometry in all molecules', '0° bond angle'], 'A'),
        Q('Formal charge is a bookkeeping tool used mainly to:', ['Compare plausible Lewis structures for the same connectivity', 'Measure pH directly', 'Replace experiment', 'Compute nuclear half-life'], 'A'),
      ];
    case '0-4':
      return [
        Q('Metallic bonding is often modeled as:', ['Positive ions in a “sea” of delocalized valence electrons', 'Shared localized pairs only between two atoms always', 'Only ionic transfer with no conduction', 'Hydrogen bonding between metal atoms only'], 'A'),
        Q('Dipole–dipole interactions are typically stronger than:', ['London dispersion forces between similar-sized molecules (very broad comparison)', 'Every covalent bond always', 'Ionic lattice energy always', 'Nuclear strong force'], 'A'),
        Q('Hydrogen bonding (in the chemistry sense) is strongest when H is bonded to:', ['Very electronegative small atoms like F, O, or N in typical teaching lists', 'Any metal atom always', 'Noble gases', 'Silicon only'], 'A'),
        Q('London dispersion forces increase with:', ['Polarizability that grows with larger electron clouds (often heavier/larger analogs)', 'Temperature decreasing to absolute zero only', 'Never with molecular size', 'Only ionic charge'], 'A'),
        Q('Boiling points of comparable alkanes generally rise as:', ['Chain length increases due to increased dispersion interactions (trend)', 'Molecular mass falls', 'Intermolecular forces vanish', 'Double bonds disappear necessarily'], 'A'),
      ];
    case '1-0':
      return [
        Q('The IUPAC name for a straight-chain alkane with six carbons uses the prefix:', ['hex-', 'meth-', 'prop-', 'but-'], 'A'),
        Q('Branched alkanes require identifying the:', ['Longest continuous chain and locating substituents with lowest numbers (intro rules)', 'Shortest chain always', 'Alphabetical mass of atoms only', 'Color of the liquid only'], 'A'),
        Q('Structural isomers share:', ['The same molecular formula but different connectivity', 'Identical physical properties in every case always', 'Different molecular formulas always', 'Different elements entirely'], 'A'),
        Q('Cyclic alkanes have the general formula CₙH₂ₙ compared with straight alkanes mainly because:', ['Ring closure removes two hydrogens compared to the open-chain alkane with same carbons (survey)', 'Rings have more hydrogens always', 'Rings cannot exist', 'They are always aromatic'], 'A'),
        Q('Conformational changes (rotation about single bonds) in alkanes:', ['Do not change identity/regioisomers but change energy minima (staggered vs eclipsed)', 'Break double bonds always', 'Change molecular formula', 'Eliminate σ bonds'], 'A'),
      ];
    case '1-1':
      return [
        Q('Alkanes are comparatively unreactive partly because:', ['C–C and C–H σ bonds are relatively strong/unpolarized (survey)', 'They contain C=C double bonds always', 'They are strong acids in water', 'They oxidize instantly in air at room temperature always'], 'A'),
        Q('Free-radical chlorination of alkanes is initiated typically by:', ['Homolytic cleavage of Cl₂ under light/heat to form chlorine radicals (mechanism survey)', 'Ionic precipitation alone', 'Adding only sodium metal', 'Cooling to absolute zero only'], 'A'),
        Q('Combustion of hydrocarbons produces primarily:', ['CO₂ and H₂O under complete combustion conditions (idealized)', 'Only elemental carbon always', 'Only H₂ always', 'Noble gases'], 'A'),
        Q('Straight alkanes often have higher boiling points than branched isomers because:', ['Greater surface contact enables stronger dispersion forces (generic explanation)', 'Branches increase surface area always in the wrong model', 'Branching increases ionic bonding', 'Boiling does not depend on structure'], 'A'),
        Q('Cracking larger hydrocarbon fractions is used industrially partly to:', ['Produce more valuable shorter molecules and alkenes (survey)', 'Convert metals into plastics', 'Remove all energy from crude oil', 'Eliminate alkenes entirely'], 'A'),
      ];
    case '1-2':
      return [
        Q('The suffix for the principal chain in an alkene is typically:', ['-ene', '-yne', '-ol', '-anoic'], 'A'),
        Q('Geometric (cis/trans or E/Z) isomerism in alkenes requires:', ['Restricted rotation about the π bond and different substituents on each sp² carbon in the pair story', 'Single bonds only', 'Identical groups on both carbons of the double bond always', 'Sp³ carbons only'], 'A'),
        Q('Compared to alkanes of similar size, alkenes often show:', ['A C=C π bond that increases reactivity toward electrophiles (survey)', 'Lower heat of combustion always', 'No difference in formula classes', 'Only single bonds'], 'A'),
        Q('Markovnikov-style additions describe a regioselectivity pattern mainly for:', ['HX additions to unsymmetrical alkenes in introductory courses (context matters)', 'All reactions equally likely always', 'Reduction of carboxylic acids only', 'Decomposition of salts'], 'A'),
        Q('Naming alkenes includes numbering the chain so the double bond:', ['Gets the lowest possible numbers (standard IUPAC style)', 'Always receives the highest numbers', 'Is ignored', 'Is placed at the middle even if not correct'], 'A'),
      ];
    case '1-3':
      return [
        Q('Electrophilic addition to alkenes begins commonly with:', ['Attack of the π bond on an electrophile leading to a carbocation or cyclic intermediate (depending on lesson)', 'Losing all electrons from the molecule', 'Hydration without any acid catalyst always in the lab story', 'Forming ionic lattice directly'], 'A'),
        Q('Hydration of alkenes (acid-catalyzed, classroom overview) forms:', ['An alcohol product consistent with Markovnikov patterns in many cases (survey)', 'An alkane only always', 'A carboxylic acid always without oxidants', 'NaCl'], 'A'),
        Q('Bromine water decolorization can indicate:', ['Unsaturation (alkene/alkyne test context in teaching labs—caveats exist)', 'Only Na⁺ ions', 'Complete polymer breakdown always', 'Presence of noble gases'], 'A'),
        Q('Hydrogenation converts C=C into:', ['C–C single bonds using H₂ with a catalyst like Ni/Pd/Pt in textbook hydrogenations', 'Triple bonds always', 'Free atoms', 'Ions only'], 'A'),
        Q('Addition polymerization starting from an alkene is a classic example because:', ['π bonds can open to propagate a polymer chain (polyethylene story)', 'Alkanes polymerize more easily always', 'Alkenes cannot react', 'Polymers never contain carbon'], 'A'),
      ];
    case '1-4':
      return [
        Q('Alkynes contain at least one:', ['Carbon–carbon triple bond', 'Aromatic ring necessarily', 'Ether linkage necessarily', 'Metal–metal bond'], 'A'),
        Q('Petroleum fractions are separated mainly by:', ['Boiling point differences during fractional distillation (survey)', 'Magnetic sorting of carbon isotopes', 'Filtration of seawater', 'Photochemical excitation only'], 'A'),
        Q('Compared to alkenes, terminal alkynes provide a weakly acidic hydrogen attached to:', ['An sp-hybridized carbon (hydrogen talk in advanced units)', 'An sp² carbon always', 'Oxygen in alcohols always', 'Nitrogen in amides always'], 'A'),
        Q('Cracking and reforming processes in refining aim broadly at:', ['Matching product slate to fuel and chemical feedstock demand', 'Removing all hydrocarbons', 'Producing only methane forever', 'Eliminating equilibrium concepts'], 'A'),
        Q('Unsaturated hydrocarbons are more reactive than alkanes partly because:', ['Higher bond order (π systems) offers electron density for addition reactions (intro)', 'They lack σ bonds entirely', 'They cannot combust', 'They have no isomers'], 'A'),
      ];
    case '2-0':
      return [
        Q('Benzene is unusually stable relative to hypothetical cyclohexatriene models partly due to:', ['π delocalization (resonance/aromatic stabilization—survey)', 'Absence of any π electrons', 'Pure single bonds only in reality', 'Ionic lattice formation'], 'A'),
        Q('Electrophilic aromatic substitution replaces a hydrogen on an aromatic ring with:', ['An electrophile forming a σ complex and then restoring aromaticity (mechanism survey)', 'A free neutron', 'A metal atom only always', 'Water exclusively'], 'A'),
        Q('Hückel’s 4n+2 π-electron rule is used in class mainly to distinguish:', ['Aromatic vs antiaromatic vs nonaromatic frameworks (intro)', 'Aliphatic chain length only', 'Boiling points only', 'Nuclear decay modes'], 'A'),
        Q('Resonance structures for benzene mainly illustrate:', ['Delocalized bonding not fully captured by one localized Lewis form (conceptual)', 'Different molecules with different formulas', 'Ionization in metals only', 'Photons replacing electrons'], 'A'),
        Q('Toluene is a benzene derivative containing:', ['A methyl substituent attached to the ring (nomenclature survey)', 'A carboxy group directly on the ring in the common name’s structure', 'Only oxygen substituents', 'No carbon beyond benzene'], 'A'),
      ];
    case '2-1':
      return [
        Q('Primary alcohols have the OH group attached to a carbon bonded to:', ['One other carbon (classification scheme)', 'Three other carbons', 'No carbons', 'Only oxygen'], 'A'),
        Q('Phenol features a hydroxyl group directly attached to:', ['An aromatic ring', 'A triple bond carbon always', 'A carboxyl carbon always', 'A quaternary alkyl center always'], 'A'),
        Q('Alcohols can hydrogen bond in the pure liquid, which tends to:', ['Increase boiling points versus analogous nonpolar molecules of similar mass (generic)', 'Eliminate all intermolecular forces', 'Make alcohols gases at 25 °C always', 'Prevent water solubility always'], 'A'),
        Q('Dehydration of alcohols to alkenes is commonly promoted by:', ['Acid catalysis and heat (mechanism survey—E1/E2 context in courses)', 'Only neutron bombardment', 'Adding NaCl crystals without heat always', 'Electrolysis of molten alcohols (nonsense)'], 'A'),
        Q('Oxidation of primary alcohols can progress toward:', ['Aldehydes and (with stronger conditions) carboxylic acids (survey control theme)', 'Alkanes only always', 'Only polymers directly without intermediates always', 'Noble gases'], 'A'),
      ];
    case '2-2':
      return [
        Q('The carbonyl functional group is C=O and appears in:', ['Aldehydes and ketones as a core motif', 'Only alkanes', 'Only quartz', 'Only NaCl'], 'A'),
        Q('Aldehydes have the carbonyl:', ['At least terminally on a chain (attached to hydrogen on the carbonyl carbon in the formal class definition)', 'Always between two carbon substituents in the strict aldehyde definition (false—ketone pattern)', 'Only in aromatic systems always', 'Never attached to hydrogen'], 'A'),
        Q('Ketones differ from aldehydes partly because the carbonyl carbon is typically:', ['Bonded to two carbons (within the functional-class definition)', 'Bonded only to hydrogen', 'Part of a nitro group always', 'A metal center'], 'A'),
        Q('Nucleophilic addition to carbonyls is central in many reactions because:', ['The carbonyl carbon is electrophilic (polarity story)', 'The C=O bond has zero dipole', 'Carbonyls never react with bases', 'Carbonyls only dimerize instantly always'], 'A'),
        Q('Tollens’ reagent (silver mirror test) is classically associated with:', ['Aldehydes being oxidized in diagnostic qualitative schemes for teaching (ketone caveats vary)', 'Alkane detection always', 'Salt precipitation only', 'Noble gas spectra'], 'A'),
      ];
    case '2-3':
      return [
        Q('Carboxylic acids are named with the suffix:', ['-oic acid (IUPAC style taught in many courses) or common names like acetic acid', '-ane', '-ene', '-yne only'], 'A'),
        Q('Carboxylic acids are Brønsted acids because they can:', ['Donate protons to bases (general acid–base definition)', 'Accept protons only always', 'Never form salts', 'Only exist as gases'], 'A'),
        Q('Acid chlorides and esters are examples of:', ['Carboxylic acid derivatives with characteristic reactivity (survey)', 'Hydrocarbons without oxygen always', 'Pure metals', 'Nuclear fuels'], 'A'),
        Q('Esterification often pairs an alcohol with an acid (or derivative) and is important for:', ['Flavors, plastics precursors, and biodiesel narratives in applied chemistry', 'Only nuclear medicine always', 'Breaking all polymers', 'Eliminating oxygen from Earth'], 'A'),
        Q('Soap formation (saponification) links to:', ['Hydrolysis of esters/triglycerides under basic conditions (intro industrial/ethiopian household relevance possible)', 'Photosynthesis directly', 'Electrolysis of neon', 'Fusion in stars as the key classroom analogy'], 'A'),
      ];
    case '2-4':
      return [
        Q('Addition polymers such as poly(ethene) form by:', ['Repeated addition of monomer units often through π-bond opening (survey)', 'Condensation of water always first', 'Nuclear fusion of monomers', 'Metallic bonding between monomers'], 'A'),
        Q('Condensation polymers often release small molecules such as:', ['Water or HCl when difunctional monomers link (class examples vary)', 'He alone as the only permitted byproduct (not typical)', 'Neon atoms', 'Argon crystals'], 'A'),
        Q('Thermoplastics can typically be:', ['Reshaped on heating (chain entanglement sliding in simple models)', 'Never melted once formed (that thermoset tendency differs)', 'Only ceramics', 'Only elemental metals'], 'A'),
        Q('Polyesters and polyamides illustrate polymers built from:', ['Linking monomers with ester or amide bonds (nylon/PET contexts)', 'Only pure carbon chains without heteroatoms always', 'Only noble gas clusters', 'Ionic salts only'], 'A'),
        Q('Microplastic pollution concerns connect chemistry learning to:', ['Persistence, fragmentation, and ecosystem impacts that motivate green design (ethical science link)', 'Plastics disappearing instantly in oceans always', 'Zero industrial importance', 'Only astronomy'], 'A'),
      ];
    case '3-0':
      return [
        Q('At constant pressure, enthalpy change ΔH often tracks heat for:', ['Many chemical processes without massive PV work complications (intro assumption)', 'Every nuclear explosion quantitatively without further terms', 'Only endothermic dissolution always', 'Zero if temperature changes'], 'A'),
        Q('An exothermic reaction commonly has:', ['Negative ΔH forward in the sign convention used in most Ethiopian textbooks when products are lower in enthalpy than reactants (frame-dependent—but “releases heat” story)', 'Positive ΔH always', 'Zero entropy always', 'No bond changes'], 'A'),
        Q('Thermochemical equations should include phases because:', ['Enthalpy depends on states of matter', 'Phases change atomic number', 'Phases are legally optional without consequence', 'Phases only matter for gases'], 'A'),
        Q('Standard conditions for tabulated data typically specify:', ['Reference states and defined pressure/concentration conventions (textbook tables—exact standard varies slightly by source)', 'Absolute zero everywhere', 'Zero pressure always', 'Moon dust solvent'], 'A'),
        Q('Calorimetry at introductory level estimates heat changes using:', ['Temperature change of a known mass of water calorimeter fluid with specific heat concepts (simplified)', 'Only volumes without temperatures', 'Speed of sound in solids only', 'Neutron counts'], 'A'),
      ];
    case '3-1':
      return [
        Q("Hess's law works because enthalpy is:", ['A state function (path independent for a defined initial/final)', 'Always path dependent without exception', 'Undefined for chemical reactions', 'Equal to activation energy'], 'A'),
        Q('If reaction A → B has ΔH = +x, then B → A has:', ['ΔH = −x in the same standard state framing', 'ΔH = x always', 'ΔH = 0 always', 'Undefined sign'], 'A'),
        Q('Average bond enthalpies estimate reaction enthalpies by comparing:', ['Bonds broken versus bonds formed (survey)', 'Only atomic radii', 'Only catalyst mass', 'Planetary orbits'], 'A'),
        Q('Forming bonds from separated atoms is typically:', ['Exothermic in the bookkeeping where bond formation lowers energy relative to separated atoms (conventions explained in class)', 'Endothermic always', 'Zero always', 'Only for ionic bonds'], 'A'),
        Q("Lattice enthalpy in Born–Haber style cycles connects with:", ['Ionization, electron affinity, atomization, and formation values in a careful cycle (qualitative purpose)', 'Nuclear decay chains only', 'RNA translation only', 'Speed of light'], 'A'),
      ];
    case '3-2':
      return [
        Q('Collision theory emphasizes that reactions occur when collisions are:', ['Energetic enough and properly oriented to surmount the activation barrier (effective collisions)', 'Infinitely frequent regardless of energy', 'Impossible in liquids', 'Only between noble gases'], 'A'),
        Q('Increasing temperature raises reaction rates largely by:', ['Increasing the fraction of molecules with energy above Ea (Maxwell–Boltzmann story)', 'Lowering Ea always for all reactions', 'Removing equilibrium', 'Making catalysts unnecessary always'], 'A'),
        Q('A catalyst changes rate by:', ['Providing a pathway with lower activation energy while not shifting the final equilibrium constant (for a single temperature story)', 'Consuming products completely', 'Increasing ΔH of reaction always', 'Eliminating intermediates always'], 'A'),
        Q('The rate law must generally be found by:', ['Experiment (except elementary-step cases in mechanism study)', 'Stoichiometric coefficients alone always', 'Balancing charge only', 'Periodic table row number'], 'A'),
        Q('Increasing reactant concentration in a homogeneous mixture often:', ['Increases collision frequency raising rate (first-step explanation)', 'Eliminates all reverse reactions always', 'Lowers temperature automatically', 'Removes catalyst surfaces'], 'A'),
      ];
    case '3-3':
      return [
        Q('At chemical equilibrium in a closed system, forward and reverse rates are:', ['Equal while concentrations may stay constant (dynamic equilibrium)', 'Both zero always', 'Different while concentrations never change (contradiction)', 'Infinite'], 'A'),
        Q('The reaction quotient Q uses the same form as K but:', ['Can be computed at any moment; compared to K to predict direction toward equilibrium (intro)', 'Is always zero', 'Equals temperature only', 'Does not involve products'], 'A'),
        Q('Pure solids are often omitted from K expressions because:', ['Their activities are approximated as unity in the standard state convention', 'They have infinite concentration numerically', 'They are never present in heterogeneous equilibria (false)', 'They always evaporate'], 'A'),
        Q('If Q < K, the net reaction proceeds toward:', ['Products until Q approaches K at that temperature (idealized behavior)', 'Only reactants always', 'No net change always', 'Infinite rate always'], 'A'),
        Q('K changes with temperature because:', ['The equilibrium position responds to endothermic/exothermic enthalpy constraints (van’t Hoff direction—qualitative)', 'K must equal 1 at all temperatures always', 'Catalyst choice changes K at fixed T in the standard model (false)', 'K tracks only pressure units'], 'A'),
      ];
    case '3-4':
      return [
        Q('Le Châtelier’s principle (introductory framing) is best described as:', ['A qualitative guide: systems at equilibrium respond partially to offset applied stresses', 'A guarantee of complete conversion to products always', 'A denial of thermodynamics', 'A replacement that removes mass conservation'], 'A'),
        Q('For gaseous equilibria, increasing total pressure by reducing volume shifts toward:', ['The side with fewer moles of gas when gases are idealized and other conditions apply', 'Always the reactant side regardless of stoichiometry', 'Never shifts', 'Always increases atoms'], 'A'),
        Q('Removing a gaseous product continuously tends to:', ['Drive further net formation of product in an equilibrium setup (Le Châtelier heuristic)', 'Stop forward reaction entirely without energy input', 'Make K infinite always', 'Eliminate all gases'], 'A'),
        Q('Adding a catalyst to a reversible reaction at fixed T:', ['Speeds forward and reverse similarly; does not change equilibrium composition in the basic model', 'Changes K', 'Removes products', 'Only affects endothermic direction'], 'A'),
        Q('For an exothermic forward reaction, raising temperature (adding heat) typically shifts equilibrium:', ['Toward reactants in the classic enthalpy sign narrative at introductory level (qualitative)', 'Toward products always regardless of sign', 'Without any effect on K', 'Only for liquids'], 'A'),
      ];
    case '4-0':
      return [
        Q('pH is defined (in common aqueous teaching) as:', ['−log10[H⁺] with [H⁺] in mol/L for dilute solutions', 'log10[OH⁻] only', 'The negative atomic mass', 'Always 7 in acid'], 'A'),
        Q('At 25 °C in pure water, pH is near:', ['7 (neutral reference for [H⁺]≈[OH⁻] in pure water)', '0 always', '14 always', 'Undefined'], 'A'),
        Q('A Brønsted–Lowry acid is defined as:', ['A proton donor', 'A proton acceptor (that’s a Brønsted base)', 'An electron pair acceptor (Lewis acid—different framework)', 'A neutron emitter'], 'A'),
        Q('Strong acids in dilute aqueous solutions are modeled as:', ['Fully dissociated into ions (idealized “strong” limit)', 'Never dissociated', 'Only gases', 'Only weak electrolytes always'], 'A'),
        Q('Ka measures:', ['The equilibrium constant for weak acid dissociation in water (intro form)', 'Gas pressure always', 'Nuclear decay rate', 'Lattice energy'], 'A'),
      ];
    case '4-1':
      return [
        Q('A buffer resists pH change because it contains:', ['Significant amounts of a weak acid and its conjugate base (or analogous pair)', 'Only strong acid', 'Only NaCl always', 'Pure water only'], 'A'),
        Q('The Henderson–Hasselbalch approximation links pH to:', ['pKa and the log of the conjugate-base/acid ratio (introductory)', 'Only temperature squared', 'Molecular speed in argon only', 'Nuclear Q values'], 'A'),
        Q('Buffer capacity increases when:', ['Concentrations of buffering components are larger and neither component is extremely small', 'The solution is infinitely dilute', 'Only strong acids are present', 'No conjugate pair exists'], 'A'),
        Q('Human blood pH is buffered partly by:', ['The carbonic acid/bicarbonate system among others (survey relevance)', 'Liquid nitrogen only', 'Iron metal suspensions only', 'Xenon gas in plasma only'], 'A'),
        Q('Adding a small amount of strong acid to an acetate buffer mostly:', ['Produces more weak acid from acetate, moderating ΔpH compared to pure water (conceptual)', 'Destroys all molecules instantly', 'Raises pH dramatically always', 'Eliminates all ions'], 'A'),
      ];
    case '4-2':
      return [
        Q('The equivalence point in an acid–base titration is reached when:', ['Stoichiometric amounts of acid and base have reacted (definition)', 'Indicator changes color always (endpoint—related but not identical)', 'pH is always exactly 7 (only for strong–strong case at 25 °C)', 'Half the indicator remains'], 'A'),
        Q('For weak acid + strong base titration, the equivalence pH is typically:', ['Greater than 7 because the conjugate base hydrolyzes in water (qualitative)', 'Always exactly 7', 'Always less than 2', 'Undefined'], 'A'),
        Q('Indicators are weak acids/bases whose color depends on:', ['Protonation state linked to pH relative to the indicator pKa', 'Temperature only', 'Gas pressure only', 'Atomic nucleus size only'], 'A'),
        Q('Standardization of a NaOH solution against a primary standard like KHP is used to:', ['Determine accurate concentration before student titrations', 'Remove water from the lab', 'Convert NaOH into a gas', 'Make solutions less basic'], 'A'),
        Q('A sharp pH change near equivalence makes:', ['Endpoint detection feasible with an appropriately chosen indicator or a pH probe', 'Titration impossible', 'pH constant forever', 'Only precipitation titrations valid'], 'A'),
      ];
    case '4-3':
      return [
        Q('Oxidation corresponds to:', ['Increase in oxidation number (electron loss in many redox narratives)', 'Decrease in oxidation number always', 'No electron bookkeeping', 'Only proton transfer always'], 'A'),
        Q('In the half-reaction method, electrons must balance so that:', ['Total charge is conserved when half-reactions combine', 'Atoms disappear', 'Protons are unlimited without balance', 'OH⁻ never appears'], 'A'),
        Q('The oxidizing agent is:', ['Reduced (it gains electrons) in the redox pair language', 'Oxidized always', 'Always Na⁺', 'Only elemental oxygen'], 'A'),
        Q('Balancing redox in acidic aqueous medium may involve:', ['H⁺, H₂O, and e⁻ in systematic bookkeeping (as taught)', 'Only solids without charge', 'Ignoring oxygen atoms', 'Adding neutrons freely'], 'A'),
        Q('Galvanic vs electrolytic cells differ partly because:', ['Galvanic uses spontaneous reactions to produce electrical work in idealized framing; electrolysis uses external energy to drive nonspontaneous change (survey)', 'Both are identical always', 'Neither involves electron flow', 'Both always produce chlorine at the cathode'], 'A'),
      ];
    case '4-4':
      return [
        Q('In a voltaic (galvanic) cell, reduction occurs at the:', ['Cathode (by definition)', 'Anode', 'Salt bridge only', 'Beaker wall'], 'A'),
        Q('The salt bridge (or porous barrier) reduces:', ['Buildup of net charge separating half-cells by allowing ion migration', 'All voltage always', 'Electron flow always', 'Need for any metals'], 'A'),
        Q('Electrolysis of molten NaCl produces sodium metal at the:', ['Cathode where Na⁺ is reduced (survey-level target products)', 'Anode', 'Salt bridge', 'Air above the melt'], 'A'),
        Q('Faraday’s laws connect:', ['Mass of substance produced/consumed to the electric charge passed (stoichiometry of electrons)', 'Only gas pressure', 'Activation energy only', 'Nuclear binding only'], 'A'),
        Q('Electroplating deposits metal ions by reduction typically at the:', ['Cathode where metal cations gain electrons', 'Anode (some industrial setups vary, but textbook emphasis is cathodic metal deposition)', 'Both electrodes equally in typical plating narratives', 'Pure electrolyte with no electrodes'], 'A'),
      ];
    case '5-0':
      return [
        Q('The Haber process synthesizes ammonia from:', ['N₂ and H₂ over a catalyst at engineered T/P (industrial story)', 'CO₂ and H₂O only always', 'NaCl brine directly', 'Pure oxygen only'], 'A'),
        Q('High pressure favors NH₃ in the classic gas-phase Haber stoichiometry partly because:', ['Fewer moles of gas on the product side in the usual balanced equation', 'Pressure eliminates catalysts', 'Gases cease to behave as gases', 'N₂ becomes a liquid at all plant T always'], 'A'),
        Q('Nitric acid production is linked industrially to ammonia as a:', ['Feedstock for oxidation steps (Ostwald route at overview)', 'Catalyst for water splitting', 'Fuel for diesel engines only', 'Precursor only to table salt'], 'A'),
        Q('Excess nitrate fertilizer can lead to environmental issues such as:', ['Eutrophication from nutrient runoff into water bodies (survey)', 'Instant permanent sterilization of all soil on Earth', 'Complete crop elimination in one season always', 'Stratospheric ozone formation as the main mechanism'], 'A'),
        Q('Catalyst poisoning in industrial plants matters because:', ['Impurities can deactivate active sites lowering throughput', 'Catalysts become infinitely selective', 'It always increases equilibrium yield without limit', 'It removes all gases from the reactor volume'], 'A'),
      ];
    case '5-1':
      return [
        Q('In the Contact process, SO₂ is oxidized to SO₃ typically using:', ['A heterogeneous catalyst such as vanadium oxide in converters (survey)', 'Only thermal decomposition of NaCl', 'Photosynthesis', 'Moonlight'], 'A'),
        Q('SO₃ is often absorbed into sulfuric acid to avoid:', ['Runaway mist formation and extreme heat release when adding SO₃ directly to water in naive setups (engineering detail at overview)', 'Any reaction at all', 'Formation of oleum always', 'Using catalysts'], 'A'),
        Q('Concentrated sulfuric acid is hazardous because it is strongly:', ['Dehydrating and corrosive', 'Nonreactive always', 'A weak Brønsted acid in all concentrations always', 'Radioactive'], 'A'),
        Q('When diluting concentrated sulfuric acid, the safe protocol is:', ['Add acid slowly to water with stirring and cooling', 'Pour water quickly into concentrated acid in one step (unsafe)', 'Mix with oils first', 'Freeze acid and add ice to the acid'], 'A'),
        Q('SO₂ emissions relate to air quality because SO₂ can lead to:', ['Sulfuric acid formation in atmospheric chemistry contributing to acid rain pathways (simplified story)', 'Stratospheric ozone formation as the sole pathway', 'Rainwater with zero dissolved ions everywhere', 'Diamond formation in urban air'], 'A'),
      ];
    case '5-2':
      return [
        Q('Membrane chlor-alkali electrolysis of brine is a major route to:', ['Cl₂, H₂, and NaOH among products (design-dependent overview)', 'Solid sodium metal at room temperature brine cells typically (different from Downs molten salt)', 'Only oxygen gas at both electrodes always', 'Iron smelting'], 'A'),
        Q('Reactive metals such as aluminum are produced by:', ['Electrolytic reduction of compounds because carbon reduction is insufficient (Hall–Héroult story)', 'Blast furnace reduction like iron for all metals always', 'Photosynthesis', 'Simple filtration of ore'], 'A'),
        Q('Electrorefining copper uses an impure anode so that:', ['Copper dissolves and replates purer metal on the cathode (survey)', 'Copper disappears without any deposition anywhere', 'Gold always plates instead of copper in every industrial cell', 'No electrical input is required'], 'A'),
        Q('Downs cell electrolysis of molten NaCl targets products such as:', ['Sodium metal and chlorine gas (conceptual separation)', 'NaOH from molten salt without water (different process)', 'Iron metal', 'Aluminum from bauxite directly'], 'A'),
        Q('Recycling aluminum saves energy largely because:', ['Electrolysis of virgin alumina is very energy-intensive compared to remelting scrap in many flows', 'Scrap aluminum is impossible to melt', 'Bauxite is renewable within days geologically', 'Copper behaves identically'], 'A'),
      ];
    case '5-3':
      return [
        Q('Alpha decay emission corresponds to:', ['A helium-4 nucleus (2p+2n classically) leaving the parent nucleus', 'A high-energy photon only', 'A free electron always classified as β− in all cases', 'A neutrino only'], 'A'),
        Q('Beta-minus decay in neutron-rich nuclides commonly involves:', ['A neutron converting to a proton with e⁻ and ν̄e emission in standard descriptions', 'A proton converting to a neutron always in β−', 'No change in Z or A', 'Gamma emission only'], 'A'),
        Q('Half-life is the time for:', ['Half of a large sample’s atoms to decay on average in an exponential decay model', 'All atoms to decay exactly always', 'Twice the activity always', 'Zero radiation'], 'A'),
        Q('Balancing a nuclear equation must conserve:', ['Mass number and charge (nucleon count and proton count at simple level)', 'Only energy, with no need to balance nucleon totals', 'Electron shell occupancies only', 'Momentum while ignoring charge balance'], 'A'),
        Q('¹⁴C dating is applied to:', ['Organic materials with carbon exchange while alive; not ideal for ancient rocks (different geochronometers)', 'All ancient minerals primarily (U–Pb is more typical there)', 'Pure metal artifacts without carbon', 'Seawater salinity alone'], 'A'),
      ];
    case '5-4':
      return [
        Q('Green chemistry emphasizes:', ['Preventing waste and hazardous substances where feasible (prevention first)', 'Maximizing hazardous waste as a design goal', 'Banning measurement and data', 'Ignoring all safety information sheets'], 'A'),
        Q('Atom economy compares:', ['Mass of desired product to mass of all reactants for a planned reaction (metric)', 'Only catalyst mass, ignoring reactants', 'Nuclear binding energy release only', 'Sound intensity in the laboratory'], 'A'),
        Q('Primary air pollutants include gases such as:', ['SO₂ from combustion of sulfur-containing fuels among examples', 'Pure N₂ at normal atmospheric levels as a regulated primary pollutant', 'Argon spikes from clean air', 'Oxygen as a primary pollutant in pristine air'], 'A'),
        Q('Greenhouse gases trap energy partly because they:', ['Interact with infrared radiation related to Earth’s outgoing thermal emission (simplified framing)', 'Block 100% of incoming solar radiation at all times', 'Permanently remove CO₂ from circulation in one day', 'Massively increase atmospheric O₂ fraction'], 'A'),
        Q('Eutrophication in freshwaters can follow:', ['Nutrient excess → blooms → decomposition using dissolved oxygen (simplified chain)', 'Only pure distilled rainfall with zero nutrients', 'Permanent removal of all algae without any bloom phase', 'Monotonic rise in dissolved oxygen during bloom collapse'], 'A'),
      ];
    default:
      return [
        Q('Which choice connects most directly to the taught concept for this topic?', ['Matches definitions with the scenario', 'Imports unrelated physics', 'Reverses cause and effect', 'Ignores units'], 'A'),
        Q('In ambiguous MCQs, prefer the answer that:', ['Uses the pathway or principle named in the syllabus unit', 'Adds random jargon', "Assumes 'never/always' without evidence", 'Contradicts stoichiometry'], 'A'),
        Q('Dimensional analysis checks often fail a distractor when:', ['Units do not match the quantity asked', 'The words are long', 'It mentions Ethiopia', 'It is letter B'], 'A'),
        Q('Grade 12 Chemistry (Natural) synthesis may connect:', ['Atomic structure, reactions rates/equilibrium, organic functional groups, and industrial processes relevant to Ethiopia’s development contexts', 'Only mineral hardness unrelated to reactions', 'Internal combustion torque as chemistry core', 'Stock market indices'], 'A'),
        Q('Responsible chemistry citizenship includes:', ['Safety, evidence-based environmental stewardship, and lab discipline', 'Pouring concentrated acids unsupervised as “practice”', 'Ignoring SDS sheets', 'Mislabeling waste streams on purpose'], 'A'),
      ];
  }
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
        `University entrance exam style item (Chemistry, Natural stream), aligned to “${topicName}”.`,
    };
  });
}

module.exports = {
  buildExamQuestionsForTopic,
  EC_YEARS,
};
