// English lesson content for the Rijbewijs A (motorcycle) theory trainer.
// Translated from the Dutch source material (gratisrijbewijsonline.be),
// compiled at A:\_code\rijbewijs-A-leerstof.md.

export const CATEGORIES = [
  { id: "A", title: "Introduction", lessonIds: [1] },
  { id: "B", title: "The Motorcycle", lessonIds: [2, 3, 4, 5, 6] },
  { id: "C", title: "Public Roads", lessonIds: [7, 8, 9, 10] },
  { id: "D", title: "Road Users", lessonIds: [11, 12, 13] },
  { id: "E", title: "Crossing & Overtaking", lessonIds: [14, 15, 16] },
  { id: "F", title: "Right of Way", lessonIds: [17, 18, 19, 20, 21, 22] },
  { id: "G", title: "On the Road", lessonIds: [23, 24, 25, 26, 27] },
  { id: "H", title: "Miscellaneous", lessonIds: [28, 29, 30, 31] },
  { id: "I", title: "Signs & Serious Violations", lessonIds: [32, 33] },
];

export const LESSONS = [
  {
    id: 1,
    category: "A",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/een-rijbewijs-a-bekomen",
    title: "Obtaining an A/A1/A2 License",
    html: `
      <h3>Learning the theory</h3>
      <ol>
        <li><strong>Recognized driving school:</strong> buy a handbook and/or take theory lessons.</li>
        <li><strong>Self-study:</strong> study freely using material such as theory and practice exams.</li>
      </ol>
      <h3>Theory exam</h3>
      <ul>
        <li>From <strong>17 years and 9 months</strong> you may take the exam at an exam center.</li>
        <li>Computer exam: <strong>50 multiple-choice questions</strong>, 15 seconds per question.</li>
        <li>Needed to pass: <strong>at least 41/50</strong>.</li>
        <li>Result known immediately; retake possible (max. once per day).</li>
      </ul>
      <h3>Categories</h3>
      <table>
        <tr><th>Category</th><th>Age</th><th>Power</th></tr>
        <tr><td>A1</td><td>18+</td><td>max. 125cc, 11 kW/15 hp, 0.1 kW/kg</td></tr>
        <tr><td>A2</td><td>20+</td><td>max. 35 kW/47 hp, 0.2 kW/kg</td></tr>
        <tr><td>A</td><td>24+</td><td>above 35 kW/47 hp</td></tr>
      </table>
      <h3>Ways to obtain it</h3>
      <p><strong>Direct access:</strong></p>
      <ul>
        <li>9-12h practical lessons at a recognized driving school</li>
        <li>Part 1: exam on private terrain (provisional license valid 1 year if passed)</li>
        <li>Part 2: exam on public road (within 1 year, may use own motorcycle)</li>
        <li>Upon passing: collect certificate at the municipality</li>
      </ul>
      <p><strong>Progressive training (A1&rarr;A2&rarr;A):</strong></p>
      <ul>
        <li>Must have held the previous category for at least 2 years</li>
        <li>Fewer practice hours needed (4h for A1&rarr;A2; 4 or 9h for A2&rarr;A)</li>
      </ul>
      <p><strong>Important:</strong> all license applications must be submitted within 3 years of passing the practical exams.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/license-path-flowchart.svg" alt="Paths to a motorcycle license" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 2,
    category: "B",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/verschil-motorfiets-bromfiets",
    title: "Difference Between Motorcycle and Moped",
    html: `
      <h3>Moped class A</h3>
      <p>Two- or three-wheeled vehicle with a combustion engine (max. <strong>50cc</strong>) or electric motor, max. <strong>25 km/h</strong>.</p>
      <ul>
        <li>Yellow ID plate (8x8 cm) required on the rear fender, centered and firmly attached.</li>
        <li>Removing the rear fender to place the plate elsewhere is prohibited.</li>
      </ul>
      <h3>Moped class B</h3>
      <p>Three types:</p>
      <ul>
        <li>Two-wheelers (max. 50cc combustion or electric)</li>
        <li>Three-wheelers (max. 50cc, max. 270kg unladen weight)</li>
        <li>Four-wheelers (max. 50cc combustion or 4kW electric, max. 350kg unladen weight)</li>
      </ul>
      <p>Max. speed: <strong>45 km/h</strong>. Four-wheeled mopeds: seatbelt mandatory, no helmet needed, warning triangle mandatory, no license plate.</p>
      <h3>License plates</h3>
      <p>Mandatory since 1 October 2015 (21x14 cm):</p>
      <ul>
        <li>Class A: starts with "A" (max. 25 km/h)</li>
        <li>Class B: starts with "B" (max. 45 km/h)</li>
      </ul>
      <h3>Motorcycles</h3>
      <p>Two-wheeled motor vehicles (with or without sidecar) above 50cc or faster than 45 km/h.</p>
      <p><strong>Crash helmet mandatory for both driver and passenger.</strong></p>
      <table>
        <tr><th>Category</th><th>Power</th></tr>
        <tr><td>A1</td><td>max. 125cc, 11kW/15hp, 0.1kW/kg</td></tr>
        <tr><td>A2</td><td>max. 35kW/47hp, 0.2kW/kg</td></tr>
        <tr><td>A</td><td>unlimited (35kW+)</td></tr>
      </table>
      <h3>Required documents</h3>
      <ul>
        <li>Original ID card</li>
        <li>Valid original driving license</li>
        <li>Original insurance certificate</li>
        <li>Original certificate of conformity</li>
      </ul>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/moped-vs-motorcycle-comparison.svg" alt="Moped vs. motorcycle comparison" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 3,
    category: "B",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/de-helm-pak-laarzen",
    title: "Helmet, Suit, Boots",
    html: `
      <h3>General</h3>
      <p>A crash helmet with <strong>E</strong> approval mark is mandatory for both driver and passenger.</p>
      <p><strong>Features of a good helmet:</strong></p>
      <ul>
        <li>Correct fit and comfort</li>
        <li>Clear visor</li>
        <li>Good closure</li>
        <li>Not too loose</li>
        <li>Eye-catching color</li>
        <li>Chin strap play max. <strong>2 cm</strong></li>
      </ul>
      <p>Never reuse a helmet that has taken a heavy fall; don't buy a second-hand helmet without a certain history.</p>
      <h3>Types of helmets</h3>
      <table>
        <tr><th>Type</th><th>Advantages</th><th>Disadvantages</th></tr>
        <tr><td>Open-face (jet) helmet</td><td>Wide field of view, light, no visor drag</td><td>Only skull protected, chin unprotected, shifts at high speed</td></tr>
        <tr><td>Police-style helmet</td><td>Wide field of view, light</td><td>Limited protection, insects in eyes</td></tr>
        <tr><td>Full-face helmet</td><td>Most used, good protection, wind-resistant</td><td>Heavier, limited field of view, warm in summer</td></tr>
        <tr><td>Modular (flip-up) helmet</td><td>Full-face benefits plus flip-up chin bar</td><td>Heavier, limited field of view, warm in summer</td></tr>
      </table>
      <h3>Gear</h3>
      <ul>
        <li><strong>Riding suit:</strong> protects shoulders, elbows, hips, knees. Bright-colored (day) + retro-reflective (night).</li>
        <li><strong>Gloves:</strong> leather, protects hands/wrists in a fall.</li>
        <li><strong>Boots:</strong> flexible but sturdy leather, protects against burns/foot injury.</li>
      </ul>
      <p><strong>Mandatory clothing (driver &amp; passenger):</strong> gloves, long-sleeved jacket/vest, long trousers/overalls, boots/ankle boots.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/mandatory-gear-checklist.svg" alt="Mandatory riding gear" loading="lazy" />
      </figure>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/helmet-types-comparison.svg" alt="Helmet types comparison" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 4,
    category: "B",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/het-gebruik-van-de-lichten",
    title: "Use of Lights",
    html: `
      <ul><li><strong>Low beam + red tail light:</strong> always required (yes, even during the day).</li></ul>
      <h3>High beam</h3>
      <p><strong>Allowed:</strong> between sunset/sunrise; visibility below 200m.</p>
      <p><strong>Not allowed:</strong> with oncoming traffic at the necessary distance; when approaching rail vehicles or boats; when followed at less than 50m (except when overtaking); on sufficiently lit roads (visibility around 100m).</p>
      <h3>Fog lights</h3>
      <ul>
        <li><strong>Front fog light:</strong> may be used in fog, snow, or heavy rain, alone or with low/high beam.</li>
        <li><strong>Rear fog light:</strong> mandatory in heavy rain; mandatory in fog/snow when visibility is below 100m.</li>
      </ul>
      <h3>Turn signals</h3>
      <p>Signal your intention early enough before a lateral move or change of direction; turn the signal off as soon as the maneuver is complete.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/light-usage-scenarios.svg" alt="When to use which light" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 5,
    category: "B",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/het-gebruik-van-de-claxon",
    title: "Use of the Horn",
    html: `
      <p>No sirens allowed. Sound signals must be "as short as possible" and the sound must stay steady.</p>
      <p><strong>Allowed:</strong> always, to prevent accidents; during the day outside built-up areas, to warn other drivers when overtaking.</p>
      <p><strong>Not allowed:</strong> at night (except imminent danger) &mdash; use lights instead.</p>
      <table>
        <tr><th>Situation</th><th>Day</th><th>Night</th></tr>
        <tr><td>Built-up area &mdash; prevent accident</td><td>Horn</td><td>Horn</td></tr>
        <tr><td>Built-up area &mdash; overtaking</td><td>Lights</td><td>Lights</td></tr>
        <tr><td>Outside built-up area &mdash; prevent accident</td><td>Horn</td><td>Horn</td></tr>
        <tr><td>Outside built-up area &mdash; overtaking</td><td>Horn</td><td>Lights</td></tr>
      </table>
      <h3>Max. sound levels (&plusmn;1 dB)</h3>
      <p>Moped class A: 70dB &middot; Moped class B: 75dB &middot; Motorcycle &le;50cc: 80dB &middot; Motorcycle 50-125cc: 82dB &middot; Motorcycle 125-500cc: 84dB &middot; Motorcycle &gt;500cc: 86dB &middot; Three-wheeler: 84dB</p>
    `,
  },
  {
    id: 6,
    category: "B",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/de-lading",
    title: "Load",
    html: `
      <ul>
        <li>Must not obstruct the driver's visibility</li>
        <li>Must not be a danger to driver, passengers, or other road users</li>
        <li>Must not be able to fall onto the road or be dragged</li>
        <li>Must not compromise the vehicle's stability</li>
        <li>Must not damage the public road</li>
        <li>Lights, reflectors, yellow plate (class A), and registration number must remain visible</li>
      </ul>
      <h3>Load size</h3>
      <ul>
        <li><strong>Front:</strong> must not protrude beyond the bodywork</li>
        <li><strong>Rear:</strong> max. 50 cm beyond the vehicle/trailer</li>
        <li><strong>Height:</strong> max. 4 m</li>
        <li><strong>Width:</strong> without sidecar 1.25m; with sidecar max. 0.30m more than the unladen width</li>
      </ul>
      <h3>Practical tips</h3>
      <p>Distribute weight evenly left/right; place heavy items as low as possible; adjust tire pressure/suspension/headlight angle for heavy luggage.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/load-dimensions-limits.svg" alt="Maximum load dimensions" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 7,
    category: "C",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/de-openbare-weg-en-de-rijbaan",
    title: "The Public Road and the Roadway",
    html: `
      <h3>Three types of terrain</h3>
      <ul>
        <li><strong>Public road:</strong> streets, bridges, tunnels, squares, motorways &mdash; freely accessible.</li>
        <li><strong>Public terrain:</strong> e.g. a restaurant or gas station parking lot &mdash; only for a specific purpose.</li>
        <li><strong>Non-public terrain:</strong> e.g. a driving school's own terrain &mdash; special permission needed.</li>
      </ul>
      <p>The traffic code applies primarily on the public road. On public/non-public terrain, serious violations are still punishable.</p>
      <p><strong>Private road:</strong> a "private" sign means it is not a public road and falls outside the traffic code (unless freely accessible to everyone).</p>
      <p><strong>Tram drivers:</strong> do not follow the traffic code, but do follow the orders of authorized persons and traffic lights.</p>
      <h3>Parts of the public road</h3>
      <p>The paved part, cycle path, verge (soft or paved), and sidewalk &mdash; up to a ditch or private property.</p>
      <h3>The roadway</h3>
      <p>The paved part used by cars, buses, motorcycles, and tractors. Keep as far right as possible.</p>
      <p><strong>Normal speed:</strong> Flanders/Brussels 70 km/h &middot; Wallonia 90 km/h</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/road-parts-terminology.svg" alt="Parts of the public road" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 8,
    category: "C",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/de-rijstroken-busstrook-verdrijvingsvlak",
    title: "Lanes, Bus Lane, Chevron Markings",
    html: `
      <p>Lanes are marked with white broken or solid lines in the middle of the roadway. At intersections, arrows are painted on the road surface; a blue direction sign is also possible.</p>
      <p>Normally: stay in the right-hand lane as much as possible. Driving in the left lane without reason is a violation.</p>
      <p><strong>Speed:</strong> Flanders 70 &middot; Brussels 70 &middot; Wallonia 90 km/h (signs may override this)</p>
      <h3>Line markings</h3>
      <ul>
        <li><strong>Broken white line:</strong> overtaking allowed (unless otherwise prohibited)</li>
        <li><strong>Solid white line:</strong> overtaking not allowed</li>
        <li>Mixed markings, broken line on your side &rarr; you may overtake to the left, then return over the solid line</li>
      </ul>
      <h3>Lane reduction</h3>
      <p>F97l (reduction on the left) &middot; F97r (reduction on the right)</p>
      <h3>Zip merging &mdash; 3 conditions</h3>
      <ol>
        <li>Lanes must be present</li>
        <li>The number of usable lanes must decrease</li>
        <li>Traffic must be significantly slowed</li>
      </ol>
      <p>Zip merging is mandatory, it is not considered a "maneuver," and merging happens just before the lane reduction. One-sided reduction: alternate turns. Two-sided reduction: first the car from the right, then from the left, then you.</p>
      <h3>Bus lane</h3>
      <p>You may <strong>not</strong> drive, park, or stop on a bus lane. Exception: in the last meters before an intersection when you want to turn. Sub-signs indicate when other drivers are allowed to use the bus lane.</p>
      <h3>Chevron marking (verdrijvingsvlak)</h3>
      <p>Wide diagonal stripes on or beside lanes. You may <strong>not</strong> drive, stop, or park here.</p>
      <h3>Roadworks</h3>
      <p>Orange stripes (solid or broken) during roadworks have the same meaning as white markings; when both are present, follow only the orange ones. Orange markings may temporarily allow driving on the hard shoulder or a chevron area.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/lane-markings-meaning.svg" alt="Lane marking meanings" loading="lazy" />
      </figure>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/zip-merge-sequence.svg" alt="Zip merging" loading="lazy" />
      </figure>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/bus-lane-chevron-markings.svg" alt="Bus lane and chevron marking" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 9,
    category: "C",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/fietser-fietspad-oversteekplaats",
    title: "Cyclists, Cycle Paths, Crossings",
    html: `
      <h3>The cycle path</h3>
      <p>Part of the public road, mandatory for cyclists and class A moped riders. Tricycles/quadricycles/cargo bikes under 1m wide are treated as bicycles.</p>
      <p><strong>Marking:</strong> mandatory signs D9/D10, or two parallel broken lines. May be on the left or right of the roadway. Color is not fixed.</p>
      <p><strong>Important:</strong> not part of the roadway &mdash; cars may not drive or park on it.</p>
      <p><strong>Children on the sidewalk:</strong> under 10 always allowed. Adults: not within built-up areas; outside built-up areas it is allowed (keeping to the right).</p>
      <h3>Cyclist crossing</h3>
      <ul>
        <li>Red danger sign A25 (about 150m before it)</li>
        <li>Blue direction sign F50 (at the location)</li>
      </ul>
      <p><strong>Right of way:</strong> cyclists must yield before the crossing, but have priority once on it.</p>
      <p><strong>Prohibited:</strong> stopping on the crossing; parking less than 5m before it; overtaking a vehicle that is slowing/stopping for it (except at traffic lights).</p>
      <h3>Suggested cycle lane</h3>
      <p>Not a cycle path &mdash; a painted part of the roadway where cars may drive and park.</p>
      <h3>End of cycle path</h3>
      <p>Sign A25 has a double meaning: crossing indicator + end of cycle path. Cyclists/moped riders joining the roadway because the cycle path ends get priority. Parking is prohibited up to 5m past this point.</p>
      <h3>Cycle street / cycle zone</h3>
      <p>Cyclists are the main road users, cars are "guests," no overtaking, max. 30 km/h. Since August 2021, a cycle street ends at the next intersection.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/cyclist-crossing-priority.svg" alt="Cyclist crossing priority" loading="lazy" />
      </figure>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/cycle-path-positioning.svg" alt="Cycle path positioning" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 10,
    category: "C",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/bebouwde-kom-zone-residential home zone",
    title: "Built-Up Area, Zone, Residential Home Zone",
    html: `
      <h3>Built-up area</h3>
      <p>Indicated by signs at the entrance/exit. <strong>Max. 50 km/h</strong> (unless otherwise indicated; a 30 sign directly above the start sign applies to the whole built-up area).</p>
      <p><strong>Penalty:</strong> more than 30 km/h over the limit &rarr; driving ban of 8 days to 5 years.</p>
      <p>When leaving: Flanders/Brussels 70 km/h, Wallonia 90 km/h.</p>
      <h3>Residential Home Zone</h3>
      <p>Pedestrians may walk on the roadway; children may play. <strong>Max. 20 km/h.</strong> Parking only in designated spots. Penalty: more than 30 km/h over &rarr; driving ban of 8 days to 5 years.</p>
      <h3>Play street</h3>
      <p>Only residents, garage owners, priority vehicles. Walking pace mandatory.</p>
      <h3>Cycle street/cycle zone</h3>
      <p>Cyclists are the main road users, max. 30 km/h, no overtaking.</p>
      <h3>Zone 30</h3>
      <p>Applies day and night. Electronic signs: only when lit up.</p>
      <h3>School area / school street</h3>
      <p>School street: closed to motor vehicles twice a day. Only residents, priority vehicles, permit holders. Walking pace mandatory.</p>
      <h3>Reserved road</h3>
      <p>Max. 30 km/h for permitted vehicles.</p>
      <h3>Special track for trams/buses</h3>
      <p>Reserved for trams/buses. Other vehicles may cross it for parking, property, or intersections.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/speed-zone-comparison.svg" alt="Speed zone comparison" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 11,
    category: "D",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/de-voetgangers",
    title: "Pedestrians",
    html: `
      <p><strong>Road user:</strong> anyone who uses the public road (including pedestrians and drivers, not animals/objects).</p>
      <h3>Pedestrian</h3>
      <p>A person on foot; uses the sidewalk, verge; without these, the cycle path or roadway.</p>
      <p><strong>Counts as a pedestrian:</strong> walking, pushing a shopping cart/wheelbarrow, wheelchair/mobility aid (at walking speed), pushing a broken bicycle or motorcycle.</p>
      <p><strong>Not a pedestrian:</strong> riders or a person leading a horse (= considered a driver).</p>
      <h3>Pedestrian crossing</h3>
      <p><strong>Rule:</strong> if a crossing exists within 20m, pedestrians must use it.</p>
      <ol>
        <li><strong>Right of way:</strong> always yield to pedestrians on or approaching a zebra crossing</li>
        <li><strong>Overtaking:</strong> never overtake a vehicle slowing/stopping for a crossing</li>
        <li><strong>Parking/stopping:</strong> forbidden on the crossing and within 5m before it</li>
      </ol>
      <p>Winged zebra crossings: 8-9m wide, giving better visibility for tall vehicles.</p>
      <p><strong>Without a crossing:</strong> the pedestrian yields, but the driver must always remain cautious.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/pedestrian-crossing-20m-rule.svg" alt="The 20-meter rule" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 12,
    category: "D",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/de-bestuurders",
    title: "Drivers",
    html: `
      <h3>Definition</h3>
      <p>A person who: operates a vehicle (motorless or motorized), or leads/supervises draft, pack, or riding animals on the public road.</p>
      <ul>
        <li><strong>Motorless vehicles:</strong> cyclists and similar</li>
        <li><strong>Motor vehicles:</strong> mopeds, motorcycles, cars</li>
      </ul>
      <h3>Important distinctions</h3>
      <ul>
        <li><strong>Pushing a broken moped</strong> &rarr; counted as a pedestrian, no license or helmet needed.</li>
        <li><strong>Pushing a motorcycle</strong> &rarr; counted as a driver, license and helmet required.</li>
      </ul>
      <p><strong>Road users</strong> = pedestrians + drivers. "Drivers" does not automatically include pedestrians.</p>
      <p>Vehicles with a max. authorized mass up to 3.5 tons (cars, minibuses, light trucks) are category B material.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/driver-definition-diagram.svg" alt="Who counts as a "driver"" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 13,
    category: "D",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/de-passagiers",
    title: "Passengers",
    html: `
      <h3>General</h3>
      <ul>
        <li>Max. <strong>2 seats</strong> on a two-wheeled motorcycle</li>
        <li>Pillion seat must be at least 50 cm long, with a handgrip</li>
        <li>Per seat: two footrests or a floor, positioned so controls can't be operated by accident</li>
        <li>Seatbelts mandatory where fitted</li>
        <li><strong>Sidesaddle riding</strong> (feet up, sitting sideways) is not allowed, for either driver or passenger</li>
      </ul>
      <h3>Children</h3>
      <ul>
        <li>Under 3 years old: not allowed</li>
        <li>3 to under 8 years old: only with a suitable child restraint system</li>
        <li>Under 8 years old: not allowed on motorcycles above 125cc</li>
      </ul>
      <h3>Effect of passengers</h3>
      <p>More weight &rarr; longer stopping distance, less smooth cornering.</p>
      <p><strong>Tips for passengers:</strong> follow the motorcycle's and driver's movements, avoid sudden movements, sit close to the driver, look through the corner with the driver, don't lean against the turn.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/passenger-positioning.svg" alt="Passenger seat requirements" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 14,
    category: "E",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/kruisen-van-voertuigen-wegversmalling",
    title: "Crossing Vehicles, Road Narrowing",
    html: `
      <h3>Crossing (passing an oncoming vehicle) on the right</h3>
      <p>"Crossing" means passing an oncoming vehicle. Stay as far right as possible; use the right lane if lanes are present. On a narrow roadway, you may also use the level verge.</p>
      <p><strong>Not allowed to cross on:</strong> parking strips (outside the imaginary edge of the roadway), cycle paths. Allowed on a suggested cycle lane (it's part of the roadway).</p>
      <p>Maintain sufficient sideways distance; swerving right onto the verge is allowed.</p>
      <h3>Crossing trams</h3>
      <p>Normally pass on the right; passing on the left is allowed if: the passage is too narrow for the right, there are parked/stationary vehicles, or there are obstacles.</p>
      <h3>Crossing at intersections</h3>
      <p>Without arrows: pass on the right. With arrows: follow the arrow markings.</p>
      <h3>Road narrowing</h3>
      <p>Danger signs A7a/A7b/A7c.</p>
      <p><strong>Right of way:</strong></p>
      <ul>
        <li>Without signs: the driver on the side of the obstacle yields.</li>
        <li>With signs: B19 (red) = yield; B21 (blue) = you have priority.</li>
      </ul>
      <h3>One-way traffic</h3>
      <p>Sign F19. No oncoming traffic. Sub-signs may allow cyclists/moped riders to travel in both directions.</p>
      <p><strong>Parking:</strong> allowed on both left and right, with at least 3m of free space between vehicles.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/road-narrowing-priority.svg" alt="Road narrowing priority" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 15,
    category: "E",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/links-rechts-inhalen-voorbijrijden",
    title: "Overtaking Left/Right, Passing a Stationary Vehicle",
    html: `
      <h3>Overtaking vs. passing a stationary vehicle</h3>
      <p><strong>Overtaking:</strong> only applies when the vehicle ahead is moving and going slower than the maximum allowed speed.</p>
      <p><strong>Passing a stationary vehicle:</strong> when a vehicle is stopped, this is not "overtaking" under the traffic code.</p>
      <h3>6 checks before overtaking</h3>
      <ol>
        <li>Is the driver ahead going slower than the maximum allowed speed?</li>
        <li>Can you overtake quickly without speeding?</li>
        <li>Is an oncoming vehicle approaching?</li>
        <li>Are you being overtaken yourself?</li>
        <li>Is there enough space to merge back safely?</li>
        <li>Are there any signs prohibiting overtaking?</li>
      </ol>
      <h3>The overtaking maneuver</h3>
      <ol>
        <li>Left turn signal on</li>
        <li>Move to the left</li>
        <li>Signal off, overtake</li>
        <li>Right turn signal on</li>
        <li>Move back to the right</li>
      </ol>
      <h3>Safe sideways distance</h3>
      <ul>
        <li>Outside built-up areas: min. <strong>1.5m</strong> from pedestrians/cyclists/two-wheeled mopeds (also on a cycle path)</li>
        <li>Within built-up areas: min. <strong>1m</strong></li>
      </ul>
      <h3>Overtaking on the right &mdash; only 2 situations</h3>
      <ul>
        <li>The vehicle ahead is already turning left (indicating a left turn)</li>
        <li>Overtaking a tram</li>
      </ul>
      <h3>Not considered overtaking</h3>
      <ul>
        <li>Traffic jam where one lane moves faster than another</li>
        <li>Following lane-choice direction signs</li>
        <li>Within built-up areas: one-way streets, or two-way streets with 4 or more lanes</li>
      </ul>
      <h3>Motorcycles in a traffic jam</h3>
      <p>May travel between lanes at <strong>no more than 50 km/h</strong>, and no more than <strong>20 km/h faster</strong> than the vehicles being passed.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/overtaking-maneuver-sequence.svg" alt="Overtaking sequence" loading="lazy" />
      </figure>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/safe-overtaking-distance.svg" alt="Safe overtaking distance" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 16,
    category: "E",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/links-inhalen-verboden-tripleren",
    title: "Overtaking Prohibited, Triple Overtaking",
    html: `
      <h3>Road markings</h3>
      <ul>
        <li>Broken white/yellow line: overtaking to the left allowed</li>
        <li>Solid white/yellow line: overtaking not allowed</li>
        <li>Mixed marking: allowed if the broken line is on your side</li>
      </ul>
      <h3>Raised/table crossing (verhoogde inrichting)</h3>
      <p>Overtaking to the left is prohibited for everyone, <strong>except a cyclist</strong> (who may be overtaken from either side). Max. 30 km/h.</p>
      <h3>Traffic signs</h3>
      <ul>
        <li><strong>C35/C37:</strong> no overtaking of towed combinations or vehicles with more than two wheels until the next intersection.</li>
        <li><strong>C39/C41:</strong> trucks and combinations over 3500 kg may not overtake towed combinations or multi-wheeled vehicles.</li>
      </ul>
      <h3>Overtaking prohibited at/near</h3>
      <ul>
        <li>Level crossings (except with barriers or a moon-white flashing light)</li>
        <li>Intersections governed by priority-from-the-right</li>
        <li>Intersections where you must yield</li>
        <li>Blind hilltops with poor visibility</li>
        <li>Dangerous bends with insufficient sight distance</li>
        <li>Crossings (for cyclists, mopeds, or pedestrians)</li>
      </ul>
      <h3>Triple overtaking</h3>
      <p>"Overtaking a vehicle that is itself already overtaking another vehicle."</p>
      <ul>
        <li><strong>Two-way traffic:</strong> you may overtake a car that is overtaking a two-wheeled moped, but not a car that is overtaking another car.</li>
        <li><strong>One-way traffic (3+ lanes):</strong> overtaking chains are allowed.</li>
      </ul>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/overtaking-prohibited-zones.svg" alt="Where overtaking is prohibited" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 17,
    category: "F",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/de-bevelen-van-bevoegde-personen",
    title: "Orders From Authorized Persons",
    html: `
      <h3>Signals from police officers</h3>
      <table>
        <tr><th>Gesture</th><th>Meaning</th></tr>
        <tr><td>One arm raised</td><td>Everyone must stop; those already at the intersection clear it quickly</td></tr>
        <tr><td>Arm(s) stretched horizontally</td><td>Traffic facing the officer's front/back must stop. Traffic facing the fingertips/side may proceed/turn</td></tr>
        <tr><td>Waving a red lamp</td><td>Stop</td></tr>
        <tr><td>Arms moving up and down</td><td>Slow down</td></tr>
        <tr><td>Rotating arm movement</td><td>Speed up</td></tr>
        <tr><td>Whistle</td><td>Only used to draw attention to the arm signal</td></tr>
      </table>
      <h3>People giving directions who are NOT authorized persons</h3>
      <p>Certified wardens, road captains, signalers, group leaders. They cannot issue fines and may only stop traffic at intersections without traffic lights when holding up sign C3.</p>
      <h3>Priority vehicles</h3>
      <p>Blue flashing light + siren = priority (police, fire brigade, ambulance). Without both elements: proceed normally.</p>
      <h3>Hierarchy</h3>
      <ol>
        <li>Police officer (authorized person)</li>
        <li>Traffic lights</li>
        <li>Traffic signs (priority)</li>
        <li>Traffic rules</li>
      </ol>
      <p>Authorized persons outrank everything, even priority vehicles.</p>
      <p><strong>Emergency number: 112</strong></p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/police-hand-signals.svg" alt="Authorized person hand signals" loading="lazy" />
      </figure>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/priority-hierarchy-diagram.svg" alt="Priority hierarchy" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 18,
    category: "F",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/voorrang-kruispunten-verkeerslichten",
    title: "Priority, Intersections, Traffic Lights",
    html: `
      <h3>Round red light</h3>
      <p>A light to your right &rarr; the stop line marks where you must stop. The light must be positioned to your right (only on the left = it may be ignored).</p>
      <p>Cyclists/moped riders: they have their own stop line, positioned closer to the intersection.</p>
      <h3>Green light</h3>
      <p>You may enter the intersection if it's clear. Do not stop on a pedestrian crossing while waiting. Sub-signs are ignored while the light is working.</p>
      <h3>Orange/yellow light</h3>
      <p>Do not proceed past it unless stopping safely is impossible. Flashing orange: proceed carefully while respecting priority rules.</p>
      <h3>Arrow signals</h3>
      <p>Can replace red/orange/green, with the same meaning, but only apply to the indicated direction.</p>
      <p><strong>Green arrow with a red light:</strong> you may turn that way after yielding to all other traffic.</p>
      <p><strong>Evacuation arrow:</strong> oncoming traffic is halted, making it easier to clear the intersection.</p>
      <h3>Lane signals (above the lane)</h3>
      <ul>
        <li>Green arrow: use of the lane is allowed</li>
        <li>Orange/yellow arrow: leave the lane</li>
        <li>Red cross: entry forbidden</li>
      </ul>
      <h3>Level crossings</h3>
      <p>A flashing moon-white light means safe to cross. Alternating flashing red lights mean do not cross (a serious violation, possibly leading to immediate license confiscation).</p>
      <h3>Special signals</h3>
      <p>Trams have their own lights; pedestrians/cyclists have their own signals that drivers of motor vehicles must ignore.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/traffic-light-meanings.svg" alt="Traffic light meanings, including trams" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 19,
    category: "F",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/verkeersborden-betreffende-voorrang",
    title: "Traffic Signs Concerning Priority",
    html: `
      <h3>Priority road</h3>
      <p>The yellow sign means you are on a priority road and have right of way at the following intersections. You may overtake to the left even right before or at an intersection, if safe.</p>
      <p>Combination sign (B9 + B13) means the priority road ends in about 250m.</p>
      <h3>Priority at the next intersection only</h3>
      <p>Signs like B15A and its variants mean you only have priority at the next intersection. Left overtaking at or before the intersection is allowed. A thick white line on the sub-sign shows the direction the priority route bends.</p>
      <h3>Yielding right of way</h3>
      <p>An inverted (upside-down) triangle means you must yield to drivers on the crossing road, stopping if necessary.</p>
      <p>"Shark's teeth" (a line of inverted triangles on the road) shows where to stop if needed.</p>
      <h3>Stop</h3>
      <p>At a stop sign, you must <strong>always come to a complete stop</strong> before the stop line.</p>
      <h3>Roundabout</h3>
      <p>Blue sign D5. When entering: yield to drivers already on the roundabout.</p>
      <ul>
        <li>Entering: turn signal is optional</li>
        <li>Leaving: right turn signal is <strong>mandatory</strong>, watch for cyclists/pedestrians</li>
      </ul>
      <h3>Sign overview</h3>
      <table>
        <tr><th>Sign</th><th>Meaning</th></tr>
        <tr><td>B1</td><td>Yield, stop if necessary</td></tr>
        <tr><td>B5</td><td>Stop and yield</td></tr>
        <tr><td>B9</td><td>Priority road</td></tr>
        <tr><td>B15A and variants</td><td>Priority at the next intersection</td></tr>
        <tr><td>D5</td><td>Roundabout</td></tr>
      </table>
    `,
  },
  {
    id: 20,
    category: "F",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/voorrang-van-rechts-op-een-kruispunt",
    title: "Priority From the Right at an Intersection",
    html: `
      <h3>General rule</h3>
      <p>Without an authorized person, traffic lights, or priority signs, <strong>priority-from-the-right</strong> applies. Exceptions: roundabouts, or vehicles coming from a prohibited direction.</p>
      <p>The intended direction of the driver from the right (straight, left, or right) does not matter.</p>
      <ul>
        <li>Even if the driver from the right slows down or stops, they keep priority.</li>
        <li>Overtaking to the left is prohibited at such intersections.</li>
        <li>If blocked, the yielding driver may proceed without waiting indefinitely.</li>
      </ul>
      <h3>Exceptions to priority-from-the-right</h3>
      <ul>
        <li><strong>Continuous cycle path:</strong> cyclists/moped riders have priority</li>
        <li><strong>Continuous sidewalk/crossing:</strong> pedestrians have priority</li>
        <li><strong>Prohibited direction:</strong> no priority-from-the-right</li>
        <li><strong>Trams:</strong> always have priority</li>
      </ul>
      <h3>No priority-from-the-right on</h3>
      <ul>
        <li>Dirt roads / unpaved paths</li>
        <li>Private driveways</li>
        <li>Parking lot exits</li>
        <li>Roundabouts (whoever is already on the roundabout has priority)</li>
      </ul>
      <h3>Signs</h3>
      <p>B17: priority from the right &middot; B1: yield, stop if necessary &middot; B5: stop and yield</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/priority-from-right-scenario.svg" alt="Priority from the right" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 21,
    category: "F",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/de-voorrang-en-afslaan",
    title: "Priority and Turning",
    html: `
      <h3>Maneuvers</h3>
      <p>You must yield when performing: changing lanes, crossing the roadway, entering/leaving a parking spot, entering/leaving a property, making a U-turn, reversing.</p>
      <p><strong>Required:</strong> act carefully, don't endanger other road users, yield right of way.</p>
      <h3>Positioning before turning</h3>
      <p>On two-way traffic: when turning left, position yourself as far left as possible.</p>
      <p><strong>Sequence for turning left:</strong></p>
      <ol>
        <li>Check your mirror</li>
        <li>Turn signal on (watch your blind spot)</li>
        <li>Slow down sufficiently</li>
        <li>Turn</li>
      </ol>
      <h3>Signs</h3>
      <p>B17: priority from the right &middot; B1: yield, stop if necessary &middot; B5: stop and yield</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/yielding-when-maneuvering.svg" alt="Maneuvers that require yielding" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 22,
    category: "F",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/trein-tram-bus",
    title: "Train, Tram, Bus",
    html: `
      <h3>Train</h3>
      <p>A very long stopping distance, no ability to swerve out of the way. Take special care at level crossings.</p>
      <p><strong>Signs:</strong></p>
      <ul>
        <li>A45: level crossing, 1 track</li>
        <li>A47: level crossing, 2+ tracks</li>
        <li>A43: level crossing without barriers (150m before it)</li>
        <li>A41: level crossing with barriers (150m before it)</li>
      </ul>
      <p><strong>Lights:</strong> flashing moon-white = safe, overtaking allowed. Flashing red + sound signal = do not cross (a serious violation, possibly leading to license confiscation).</p>
      <h3>Tram / bus</h3>
      <p><strong>Special surfaced track for trams/buses (BOB):</strong></p>
      <p>Not allowed: driving, stopping, parking, or positioning to turn in the last few meters before an intersection.</p>
      <p>Allowed: crossing it to reach a property/parking lot/gas station; driving on the checkerboard marking at intersections.</p>
      <p><strong>Tram priority:</strong> a tram does not follow the traffic rules &mdash; it always has priority.</p>
      <p><strong>Bus lane:</strong> broken white line. Not allowed to drive or park there. Allowed to position for a turn, allowed to stop briefly.</p>
      <p><strong>Bus stop:</strong> you may drive on it and stop briefly. No parking within 15m before/after it. Within a built-up area, a bus gets priority when pulling away with its turn signal on.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/level-crossing-lights.svg" alt="Level crossing lights" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 23,
    category: "G",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/maximumsnelheid-op-de-openbare-weg",
    title: "Maximum Speed on the Public Road",
    html: `
      <h3>Motorway</h3>
      <p>Max. <strong>120 km/h</strong> (including on/off ramps), unless signs say otherwise. Normal minimum: <strong>70 km/h</strong>.</p>
      <p>Matrix signs may set different speeds per lane. Off-ramp: only start braking once you're on it. Towing prohibited on motorways (since 1 March 2014).</p>
      <p>Studded tires: 1 Nov &ndash; 31 Mar, vehicles up to 3.5 tons. Max. 90 km/h (motorway/2x2 lanes), 60 km/h (regular road).</p>
      <h3>Expressway (autoweg)</h3>
      <p>No mandatory minimum, but abnormally slow driving is a violation.</p>
      <p><strong>With central reservation</strong> (outside built-up area, 2+ lanes per direction): up to 120 km/h. Within built-up area: 50 km/h (Brussels 30).</p>
      <p><strong>Separated by markings:</strong> Flanders/Brussels 70, Wallonia 90. Within built-up area: 50 (Brussels 30).</p>
      <h3>Regular roads</h3>
      <p>Flanders 70 &middot; Wallonia 90 &middot; Exception (2x2 lanes with central reservation) 120 km/h.</p>
      <h3>Special locations</h3>
      <table>
        <tr><th>Location</th><th>Speed</th></tr>
        <tr><td>Residential Home Zone</td><td>20 km/h</td></tr>
        <tr><td>Built-up area</td><td>50 (Brussels 30), unless signs say otherwise</td></tr>
        <tr><td>Zone 30</td><td>30, day and night</td></tr>
        <tr><td>Cycle zone</td><td>30, no overtaking cyclists</td></tr>
        <tr><td>Play street</td><td>Walking pace</td></tr>
        <tr><td>Road reserved for farm vehicles/pedestrians/cyclists/riders</td><td>30</td></tr>
        <tr><td>Raised/table crossing</td><td>30, no overtaking (except cyclists) &mdash; sign A14, 150m before it</td></tr>
      </table>
      <h3>Violations &mdash; immediate confiscation (by police)</h3>
      <ul>
        <li>More than 30 km/h over: motorway/expressway/regular road</li>
        <li>More than 20 km/h over: built-up area/zone 30/residential home zone</li>
      </ul>
      <h3>Violations &mdash; loss of driving right (by a judge)</h3>
      <ul>
        <li>More than 40 km/h over: motorway/expressway/regular road</li>
        <li>More than 30 km/h over: built-up area/zone 30/residential home zone</li>
      </ul>
      <p><strong>Penalty:</strong> 8 days to 5 years driving ban for all motor vehicles.</p>
      <p><strong>Important:</strong> driving excessively slowly under normal conditions is also a violation. Adjust speed to weather, road surface, and traffic density.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/speed-limits-by-road-type.svg" alt="Speed limits by road type" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 24,
    category: "G",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/waar-moet-je-rijden",
    title: "Where You Should Ride",
    html: `
      <h3>General rule</h3>
      <p>Stay as close as possible to the right edge of the roadway.</p>
      <h3>Two-way traffic without lane markings</h3>
      <p>You may use the entire half of the road for your direction. Riding at the extreme right is dangerous &mdash; it invites cars to overtake despite oncoming traffic.</p>
      <h3>One-way traffic without lane markings</h3>
      <p>You may use the entire width of the roadway.</p>
      <h3>Roadways with lane markings</h3>
      <p>Best position: two-thirds toward the right side of your lane &mdash; better visibility, and overtaking vehicles must swerve out fully.</p>
      <p>Stay visible, optimize your own sightlines, don't ride close behind trucks.</p>
      <h3>Group riding with lanes present</h3>
      <p>Two parallel staggered rows (staggered/brick formation). Lead rider two-thirds right, second rider one-third right, and so on &mdash; giving more sightlines and reaction time.</p>
      <p><strong>Without lanes:</strong> the group may use at most half of the roadway.</p>
      <p><strong>Road captains:</strong> groups over 50 people need at least 2 road captains (at least 25 years old), wearing reflective vests.</p>
      <h3>Prohibited</h3>
      <p>Riding without holding the handlebars; feet off the pedals/footrests; towing someone or being towed; riding sidesaddle; taking an animal along on a leash.</p>
      <h3>Cobblestone roads</h3>
      <p>In dry weather: ride in the wheel tracks for better grip. In wet weather: the middle of the road is better (dirt gets washed off there). Avoid the sloped edges.</p>
      <h3>Stationary traffic</h3>
      <p>Riding between lanes is allowed, with a max. speed difference of 20 km/h from other traffic, and never faster than 50 km/h.</p>
      <h3>Bus lanes</h3>
      <p>Motorcycles may use them if the correct symbol appears on the sign.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/lane-position-two-thirds-right.svg" alt="Recommended lane position" loading="lazy" />
      </figure>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/group-riding-staggered-formation.svg" alt="Staggered group formation" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 25,
    category: "G",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/het-nemen-van-bochten",
    title: "Taking Corners",
    html: `
      <p>Requires: basic knowledge, technique, experience. "Read" the corner ahead, adjust speed, position yourself.</p>
      <p><strong>"You ride toward where you look."</strong></p>
      <h3>Preparation</h3>
      <p>Good road positioning to spot the corner early; relaxed posture, body aligned with the motorcycle; brake/downshift before the corner.</p>
      <h3>In the corner</h3>
      <p>Take it as wide as possible, look as far ahead as possible &mdash; this gives better visibility into the corner and quicker reaction. For a left-hand corner: position as far right as possible before entering it.</p>
      <h3>Right-hand corner</h3>
      <p>Start close to the center line (if present, without crossing it) for the best overview. Watch for oncoming traffic cutting the corner and for gravel/debris. Look ahead toward your exit point in the right lane.</p>
      <h3>Left-hand corner</h3>
      <p>Position as far right as possible before entering it.</p>
      <h3>Braking in a corner</h3>
      <p>Poor braking technique greatly increases accident risk. Look toward the horizon (never down), use the front brake first in an emergency, then apply firm, even braking. Take the motorcycle type, road surface, and conditions into account.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/cornering-position-right-bend.svg" alt="Right-hand bend cornering line" loading="lazy" />
      </figure>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/cornering-position-left-bend.svg" alt="Left-hand bend cornering line" loading="lazy" />
      </figure>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/braking-body-position.svg" alt="Emergency braking position" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 26,
    category: "G",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/waar-mag-je-parkeren",
    title: "Where You May (Not) Park",
    html: `
      <ul>
        <li><strong>Perpendicular parking:</strong> motorcycles without a sidecar/trailer may park at a right angle to the roadway, within the marked parking lines. Parallel parking is also allowed.</li>
        <li><strong>Outside the roadway/official zones:</strong> allowed, as long as you don't obstruct or endanger others.</li>
        <li><strong>Sidewalk/raised verge:</strong> allowed, as long as traffic isn't obstructed or made unsafe.</li>
        <li><strong>Multiple motorcycles in one space:</strong> when several motorcycles share a single car parking space, only <strong>one ticket</strong> needs to be paid.</li>
        <li><strong>Sign E9b:</strong> parking area for motorcycles together with cars, dual-purpose vehicles, and minibuses.</li>
        <li><strong>Sign E9i:</strong> since 1 March 2007, exclusively for motorcycles.</li>
      </ul>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/parking-types-diagram.svg" alt="Motorcycle parking flexibility" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 27,
    category: "G",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/hoe-voorsorteren",
    title: "How to Position for a Turn",
    html: `
      <h3>Two-way traffic</h3>
      <p><strong>With lane markings between lanes:</strong> when turning left, position yourself at the far left of your lane.</p>
      <p><strong>Without markings:</strong> position at the far left of your side of the road (against the center of the roadway).</p>
      <h3>One-way street</h3>
      <p><strong>Standard:</strong> position on the left side of the roadway.</p>
      <p><strong>Restricted traffic</strong> (e.g. cyclists/class A moped riders allowed in both directions): position left, <strong>but not at the far left</strong>, so other traffic has enough room.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/turn-positioning-diagram.svg" alt="Positioning before turning left" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 28,
    category: "H",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/techniek-banden-remmen-olie",
    title: "Technique: Tires, Brakes, Oil",
    html: `
      <h3>General</h3>
      <p>Lights, brakes, tires, and chain should be checked before every ride.</p>
      <h3>Tires</h3>
      <ul>
        <li>Min. tread depth: <strong>1.6 mm</strong></li>
        <li>New rear tire: 6-8 mm &middot; New front tire: 4-6 mm</li>
        <li>Correct tire pressure: better grip, lower fuel use. Too low: poor handling/braking response, higher fuel use, uneven wear.</li>
        <li>Max. lifespan <strong>5-6 years</strong>, rubber hardens over time. The DOT code shows the production date (e.g. 1923 = week 19 of 2023).</li>
      </ul>
      <h3>Brakes</h3>
      <p>The front brake provides <strong>70-80%</strong> of braking power. Two independent braking systems (front/rear) are mandatory.</p>
      <p><strong>Optimal braking technique:</strong> knees against the tank, head up/eyes forward, apply the front brake gently at first then firmly, don't release the rear brake until fully stopped, downshift to first gear while braking.</p>
      <p><strong>Distribution:</strong> roughly 2/3 front brake, 1/3 rear brake.</p>
      <p><strong>On cobblestones:</strong> rely mainly on the rear brake for control.</p>
      <h3>Oil level</h3>
      <p>Too little oil = engine seizure; too much = damage to the block. Check with the motorcycle level, following the manufacturer's specification (cold or warm engine).</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/tire-tread-depth.svg" alt="Tire tread depth" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 29,
    category: "H",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/ademtest-ademanalyse-bloedproef-drugs",
    title: "Breath Test, Breath Analysis, Blood Test, Drugs",
    html: `
      <h3>Alcohol and driving</h3>
      <p>Alcohol reduces attention, judgment, and reaction ability &rarr; longer reaction distance, higher risk. Drunk drivers get tired faster and behave more recklessly.</p>
      <p><strong>Who can be checked?</strong> Anyone about to drive a vehicle in a public place (including cyclists, riders), driving instructors, supervisors, and possible causes of an accident.</p>
      <h3>Breath test</h3>
      <p>Detects alcohol in exhaled air using a portable device. Indicative only, not legal proof by itself.</p>
      <ul>
        <li><strong>S (Safe):</strong> below the legal maximum, may continue driving</li>
        <li><strong>A (Alarm):</strong> 0.22-0.35 mg/l &rarr; breath analysis required</li>
        <li><strong>P (Positive):</strong> &ge;0.35 mg/l &rarr; breath analysis required</li>
      </ul>
      <p><strong>Note:</strong> the 15-minute waiting period has been abolished. Refusing the breath test = 12h driving ban + surrendering your license for 15 days.</p>
      <h3>Breath analysis</h3>
      <p>Gives an exact result, measuring alveolar air concentration.</p>
      <ul>
        <li><strong>Below 0.22 mg/l:</strong> may continue driving</li>
        <li><strong>0.22-0.35 mg/l:</strong> 12h driving ban (from July 2026), fine</li>
        <li><strong>0.35 mg/l or more:</strong> 12h driving ban, surrender license for 15 days, fine</li>
      </ul>
      <h3>Blood test</h3>
      <p>Taken when a breath test/analysis is not possible. Carried out by a doctor, not the police.</p>
      <h3>Drugs</h3>
      <p>A saliva test measures drug levels. If exceeded: 12h driving ban, possible license withdrawal, fines, up to 5 years loss of driving rights.</p>
      <h3>Repeat offenses</h3>
      <p>Since 2011-2015: loss of driving rights, mandatory theory/practical re-exam, and medical examination required for repeat offenses within 3 years.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/breath-test-thresholds.svg" alt="Breath test result zones" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 30,
    category: "H",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/ongeval-zonder-of-met-gewonden",
    title: "Accidents Without or With Injuries",
    html: `
      <h3>Accident without injuries</h3>
      <p><strong>Parking vehicles / clearing the road:</strong> park safely, clear intersections, remove any debris.</p>
      <p><strong>Preventing further accidents:</strong> place the warning triangle first, turn on hazard lights, switch off running engines (fire risk), do not smoke.</p>
      <p><strong>Placing the warning triangle:</strong></p>
      <ul>
        <li>Regular road: min. <strong>30m</strong> before the accident</li>
        <li>Motorway: min. <strong>100m</strong></li>
        <li>Must be visible from 50m away</li>
      </ul>
      <p><strong>European accident report form:</strong> for an accident without injuries, you don't need to call the police, but you do need to fill in and sign the form together with those involved. Include road conditions, directions of travel, position at impact, traffic signs, and street names in the sketch.</p>
      <p><strong>Mandatory vehicle equipment:</strong> warning triangle, fire extinguisher, safety vest, first-aid kit.</p>
      <p><strong>Material damage:</strong> leave your details, or call the police if the owner can't be found.</p>
      <p><strong>Defective vehicles:</strong> may not remain on the public road for more than 24h (promotional vehicles: max. 3h).</p>
      <h3>Accident with injuries</h3>
      <p>Same prevention measures (triangle, hazard lights, engine off, no smoking).</p>
      <p><strong>Safety vest:</strong> mandatory when getting out of a vehicle on a motorway, for passengers too.</p>
      <p><strong>Assessing the situation:</strong> location, number of injured, entrapment, fire/smoke risk &mdash; before calling emergency services.</p>
      <p><strong>Emergency call:</strong> preferably an emergency phone in tunnels, otherwise <strong>112</strong>. Police automatically respond to accidents with injuries.</p>
      <h3>Caring for victims</h3>
      <ul>
        <li>Do not move injured people unless life-threatening (risk of fractures/internal bleeding)</li>
        <li>Keep the helmet on unless there are breathing problems or vomiting</li>
        <li>Do not give drinks or medication</li>
        <li>Severe bleeding: clean cloth or pressure bandage</li>
      </ul>
      <h3>Medical unfitness to drive</h3>
      <p>A doctor can declare someone unfit to drive. Must be reported to the municipality within 4 days (excluding weekends/holidays). A fitness certificate from a doctor is required to drive again.</p>
      <h3>Tunnels</h3>
      <p><strong>Entering:</strong> remove sunglasses, turn on low beam well in advance to avoid braking suddenly.</p>
      <p><strong>Rules:</strong> no parking/stopping/turning, no reversing, follow speed limits (often reduced).</p>
      <p><strong>Accidents in a tunnel:</strong> preferably use the tunnel emergency phone, otherwise 112.</p>
      <p><strong>Fire/heavy smoke:</strong> park to the right, leave the key in the ignition, evacuate via emergency exits.</p>
      <h3>Smoking in the car</h3>
      <p>Flanders (since Feb 2019) and Wallonia: prohibited when children are present.</p>
      <h3>Hit and run</h3>
      <p>Deliberately fleeing an accident scene is a serious crime with heavy penalties. Police usually still find the offender.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/warning-triangle-placement.svg" alt="Warning triangle placement" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 31,
    category: "H",
    sourceUrl: "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/overige-verkeersregels",
    title: "Other Traffic Rules",
    html: `
      <p><strong>Tip:</strong> also practice with questions from the B-license theory chapters &mdash; many A-exam questions draw on the same material.</p>
      <h3>Other rules</h3>
      <ul>
        <li>Drivers must always be able to perform all necessary maneuvers and keep the vehicle under control.</li>
        <li><strong>Mobile phone:</strong> no handheld phone use while the vehicle is moving.</li>
        <li><strong>Handlebar control:</strong> mandatory &mdash; do not ride without holding the handlebars.</li>
        <li><strong>Feet:</strong> both driver and passenger must keep their feet on the pedals/footrests.</li>
      </ul>
      <p><strong>Prohibited:</strong></p>
      <ul>
        <li>Being towed, or towing someone else</li>
        <li>Holding an animal on a leash while riding</li>
      </ul>
      <p><strong>Warning triangle:</strong> motorcyclists are not required to carry one.</p>
      <h3>Consequences of violations</h3>
      <p>Immediate confiscation of the (provisional) license for 15 days (extendable to 30 days) for: serious violations, driving under the influence, hit and run, driving without a valid license, gross negligence in an accident, or obstructing an investigation.</p>
      <figure class="lesson-diagram">
        <img src="assets/diagrams/prohibited-actions-grid.svg" alt="Prohibited actions while riding" loading="lazy" />
      </figure>
    `,
  },
  {
    id: 32,
    category: "I",
    title: "Traffic Signs",
    signage: true,
    html: `
      <p>You don't need to memorize sign numbers. You do need to know: what a
      sign means, whether it applies to all road users or only certain
      drivers, whether it covers the whole road or just one lane, and which
      broad family (danger / priority / prohibition / mandatory / parking /
      indication) it belongs to. A number of these appear on every real
      exam.</p>
    `,
  },
  {
    id: 33,
    category: "I",
    title: "Hard Faults (3rd & 4th Degree Violations)",
    html: `
      <p>Belgian traffic law classifies violations by severity (1st through
      4th degree). The 3rd and 4th degree cover the most serious rule
      breaches — the ones most likely to cause real harm. This is a
      motorcycle-relevant summary of that official list, grouped by theme
      so it's easier to scan than one long numbered list.</p>

      <div class="fault-legend">
        <span class="fault-badge fault-badge-3">3rd degree</span> Serious — the 30 items below.
        <span class="fault-badge fault-badge-4">4th degree</span> Most serious — 7 items, higher risk.
      </div>

      <h3>3rd degree violations</h3>

      <h4 class="fault-group-title">Authorized persons &amp; priority vehicles</h4>
      <ul class="fault-list">
        <li class="fault-item fault-item-3">Not immediately obeying the orders of an authorized person (e.g. a police officer).</li>
        <li class="fault-item fault-item-3">Not moving a stationary/parked vehicle when an authorized person instructs you to.</li>
        <li class="fault-item fault-item-3">Not immediately clearing the way and yielding when you hear a priority vehicle's siren approaching.</li>
        <li class="fault-item fault-item-3">Not following the instructions of authorized military personnel, event signalers, road captains for cyclist/motorcyclist groups, group leaders for pedestrians/riders, or roadworks site supervisors.</li>
      </ul>

      <h4 class="fault-group-title">Crossing oncoming traffic &amp; tram tracks</h4>
      <ul class="fault-list">
        <li class="fault-item fault-item-3">Following the wrong carriageway on a road with two or three clearly separated carriageways, except where local signs allow otherwise.</li>
        <li class="fault-item fault-item-3">Not crossing an oncoming vehicle on the right (including at intersections, unless markings say otherwise).</li>
        <li class="fault-item fault-item-3">Not leaving enough sideways distance when crossing an oncoming vehicle, and not swerving right if needed.</li>
        <li class="fault-item fault-item-3">When crossing/overtaking is difficult due to road width, not using the level verge safely — or doing so on a cycle path or a parking-reserved strip, which is never allowed.</li>
        <li class="fault-item fault-item-3">Crossing a tram illegally on the left when the right side is actually passable.</li>
      </ul>

      <h4 class="fault-group-title">Overtaking</h4>
      <ul class="fault-list">
        <li class="fault-item fault-item-3">Not moving as far right as possible, or increasing speed, while being overtaken on the left.</li>
        <li class="fault-item fault-item-3">Overtaking to the left without being able to see oncoming traffic far enough ahead to do it safely.</li>
        <li class="fault-item fault-item-3">Overtaking to the left of a towed combination or a vehicle with more than two wheels: at an unbarriered, unlit level crossing; when the vehicle you're overtaking is itself overtaking another vehicle (except on 3+ lane roads); or when it's stopping for or approaching an uncontrolled pedestrian/cyclist crossing.</li>
      </ul>

      <h4 class="fault-group-title">Turning &amp; changing direction</h4>
      <ul class="fault-list">
        <li class="fault-item fault-item-3">Before turning left, not checking that a following vehicle hasn't already started to overtake you, and endangering drivers continuing normally on the road you're leaving.</li>
        <li class="fault-item fault-item-3">When turning left, not yielding to oncoming traffic on the road you're leaving.</li>
        <li class="fault-item fault-item-3">When changing direction, not yielding to drivers and pedestrians continuing on other parts of the same road.</li>
        <li class="fault-item fault-item-3">When changing direction, not yielding to pedestrians crossing the road you're entering.</li>
      </ul>

      <h4 class="fault-group-title">Special low-speed zones</h4>
      <ul class="fault-list">
        <li class="fault-item fault-item-3">In a residential home zone: endangering or obstructing pedestrians, not taking extra care around children, or exceeding 20 km/h.</li>
        <li class="fault-item fault-item-3">On roads reserved for pedestrians/cyclists/riders: endangering or obstructing other users, not taking extra care around children, or needlessly blocking traffic (max. 30 km/h).</li>
        <li class="fault-item fault-item-3">In a pedestrian zone: not driving at walking pace, not giving way to pedestrians, or endangering/obstructing them.</li>
        <li class="fault-item fault-item-3">In a play street: not driving at walking pace, not yielding to playing children, not dismounting when needed (cyclists), or endangering/obstructing them.</li>
      </ul>

      <h4 class="fault-group-title">Lights &amp; visibility</h4>
      <ul class="fault-list">
        <li class="fault-item fault-item-3">Not using low/high beam and rear lights between dusk and dawn, or whenever visibility drops below about 200m.</li>
      </ul>

      <h4 class="fault-group-title">Passengers</h4>
      <ul class="fault-list">
        <li class="fault-item fault-item-3"><strong>Motorcycle child passenger rules:</strong> children under 3 may never ride on a moped or motorcycle. Children 3&ndash;7 need a suitable child restraint system and may not ride on a motorcycle over 125cc. On a motorcycle with a sidecar, children under 8 must use a suitable restraint system fitted in the sidecar.</li>
      </ul>

      <h4 class="fault-group-title">Pedestrians &amp; vulnerable road users</h4>
      <ul class="fault-list">
        <li class="fault-item fault-item-3">Endangering pedestrians on a sidewalk, a pedestrian-reserved path (signs D9/D10), a verge, a traffic island, a play street, or a residential home zone.</li>
        <li class="fault-item fault-item-3">Not slowing down when passing a stopped bus/coach/trolleybus/minibus/tram that's letting passengers on or off.</li>
        <li class="fault-item fault-item-3">At a stop without a refuge island, not stopping to let passengers safely reach the vehicle/sidewalk/verge, and not pulling away except at moderate speed.</li>
        <li class="fault-item fault-item-3">Where traffic is controlled by an authorized person or lights: not letting pedestrians who lawfully stepped onto the roadway finish crossing at a normal pace — and always stopping before a pedestrian crossing when your direction has a red signal.</li>
        <li class="fault-item fault-item-3">At an uncontrolled pedestrian crossing: not approaching at moderate speed, and not yielding to pedestrians on it or about to step onto it.</li>
        <li class="fault-item fault-item-3">Breaking through a supervised group of children/school pupils/disabled or elderly people, or ignoring the instructions of the wardens protecting such a crossing.</li>
        <li class="fault-item fault-item-3">Endangering a cyclist or class-A moped rider: not doubling caution around children/elderly cyclists, not leaving at least 1 meter of sideways distance, or not approaching a cyclist crossing at moderate speed / stopping if needed.</li>
      </ul>

      <h4 class="fault-group-title">Groups, processions &amp; organized events</h4>
      <ul class="fault-list">
        <li class="fault-item fault-item-3">Breaking through a military column, a procession/parade/event, or a group of cycling-race participants — or not immediately swerving and stopping when approaching a group of cycling-race riders.</li>
      </ul>

      <h3>4th degree violations (most serious)</h3>
      <ul class="fault-list">
        <li class="fault-item fault-item-4">Ignoring an authorized person's stop signal — arms held horizontally (stop for traffic crossing that direction) or a red light waved across the road (stop for traffic facing it).</li>
        <li class="fault-item fault-item-4">Encouraging or challenging a driver to drive excessively fast.</li>
        <li class="fault-item fault-item-4">Overtaking to the left of a towed combination or a vehicle with more than two wheels near the top of a hill or in a bend with insufficient visibility, unless it's possible without crossing the solid centerline.</li>
        <li class="fault-item fault-item-4">Entering a level crossing while the barriers are moving or closed, the red lights are flashing, or the sound signal is active.</li>
        <li class="fault-item fault-item-4">On motorways and expressways: using central-reservation crossovers, making a U-turn, reversing, or driving against the flow of traffic.</li>
        <li class="fault-item fault-item-4">Stopping or parking on a level crossing.</li>
        <li class="fault-item fault-item-4">Taking part in a speed or sporting contest on the public road without special authorization from the competent authority.</li>
      </ul>
    `,
  },
];
