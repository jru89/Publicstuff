"""Insert <img> tags for the reviewed original diagrams into each lesson's
html content in lessons.js, right before the closing backtick of that
lesson's template literal."""
import re

# lesson id -> list of (filename without .svg, human-readable alt text)
DIAGRAMS = {
    1: [("license-path-flowchart", "Paths to a motorcycle license")],
    2: [("moped-vs-motorcycle-comparison", "Moped vs. motorcycle comparison")],
    3: [
        ("mandatory-gear-checklist", "Mandatory riding gear"),
        ("helmet-types-comparison", "Helmet types comparison"),
    ],
    4: [("light-usage-scenarios", "When to use which light")],
    6: [("load-dimensions-limits", "Maximum load dimensions")],
    7: [("road-parts-terminology", "Parts of the public road")],
    8: [
        ("lane-markings-meaning", "Lane marking meanings"),
        ("zip-merge-sequence", "Zip merging"),
        ("bus-lane-chevron-markings", "Bus lane and chevron marking"),
    ],
    9: [
        ("cyclist-crossing-priority", "Cyclist crossing priority"),
        ("cycle-path-positioning", "Cycle path positioning"),
    ],
    10: [("speed-zone-comparison", "Speed zone comparison")],
    11: [("pedestrian-crossing-20m-rule", "The 20-meter rule")],
    12: [("driver-definition-diagram", 'Who counts as a "driver"')],
    13: [("passenger-positioning", "Passenger seat requirements")],
    14: [("road-narrowing-priority", "Road narrowing priority")],
    15: [
        ("overtaking-maneuver-sequence", "Overtaking sequence"),
        ("safe-overtaking-distance", "Safe overtaking distance"),
    ],
    16: [("overtaking-prohibited-zones", "Where overtaking is prohibited")],
    17: [
        ("police-hand-signals", "Authorized person hand signals"),
        ("priority-hierarchy-diagram", "Priority hierarchy"),
    ],
    18: [("traffic-light-meanings", "Traffic light meanings, including trams")],
    20: [("priority-from-right-scenario", "Priority from the right")],
    21: [("yielding-when-maneuvering", "Maneuvers that require yielding")],
    22: [("level-crossing-lights", "Level crossing lights")],
    23: [("speed-limits-by-road-type", "Speed limits by road type")],
    24: [
        ("lane-position-two-thirds-right", "Recommended lane position"),
        ("group-riding-staggered-formation", "Staggered group formation"),
    ],
    25: [
        ("cornering-position-right-bend", "Right-hand bend cornering line"),
        ("cornering-position-left-bend", "Left-hand bend cornering line"),
        ("braking-body-position", "Emergency braking position"),
    ],
    26: [("parking-types-diagram", "Motorcycle parking flexibility")],
    27: [("turn-positioning-diagram", "Positioning before turning left")],
    28: [("tire-tread-depth", "Tire tread depth")],
    29: [("breath-test-thresholds", "Breath test result zones")],
    30: [("warning-triangle-placement", "Warning triangle placement")],
    31: [("prohibited-actions-grid", "Prohibited actions while riding")],
}

path = r"A:\_code\rijbewijs-study-app\js\data\lessons.js"
with open(path, encoding="utf-8") as f:
    content = f.read()

# Split into per-lesson chunks, keeping the split point at each "  {\n    id: N,"
parts = re.split(r"(?=  \{\n    id: \d+,)", content)

inserted_count = 0
for i, part in enumerate(parts):
    m = re.match(r"  \{\n    id: (\d+),", part)
    if not m:
        continue
    lesson_id = int(m.group(1))
    if lesson_id not in DIAGRAMS:
        continue

    figures = "\n".join(
        f'      <figure class="lesson-diagram">\n'
        f'        <img src="assets/diagrams/{fname}.svg" alt="{alt}" loading="lazy" />\n'
        f"      </figure>"
        for fname, alt in DIAGRAMS[lesson_id]
    )

    # Insert right before the closing "    `," of this lesson's html field
    # (the last occurrence of that pattern in this chunk).
    closer = "\n    `,"
    idx = part.rfind(closer)
    if idx == -1:
        print(f"WARNING: could not find html closer for lesson {lesson_id}")
        continue
    new_part = part[:idx] + "\n" + figures + part[idx:]
    parts[i] = new_part
    inserted_count += 1

new_content = "".join(parts)
with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Inserted diagrams into {inserted_count} lessons.")
