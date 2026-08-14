"""Insert a sourceUrl field into each of lessons 1-31 in lessons.js,
pointing back to the original Dutch lesson page. Lessons 32/33 (signs page,
which came from the B-license URL, not A-H) are intentionally left alone."""
import re

SLUGS = {
    1: "een-rijbewijs-a-bekomen",
    2: "verschil-motorfiets-bromfiets",
    3: "de-helm-pak-laarzen",
    4: "het-gebruik-van-de-lichten",
    5: "het-gebruik-van-de-claxon",
    6: "de-lading",
    7: "de-openbare-weg-en-de-rijbaan",
    8: "de-rijstroken-busstrook-verdrijvingsvlak",
    9: "fietser-fietspad-oversteekplaats",
    10: "bebouwde-kom-zone-woonerf",
    11: "de-voetgangers",
    12: "de-bestuurders",
    13: "de-passagiers",
    14: "kruisen-van-voertuigen-wegversmalling",
    15: "links-rechts-inhalen-voorbijrijden",
    16: "links-inhalen-verboden-tripleren",
    17: "de-bevelen-van-bevoegde-personen",
    18: "voorrang-kruispunten-verkeerslichten",
    19: "verkeersborden-betreffende-voorrang",
    20: "voorrang-van-rechts-op-een-kruispunt",
    21: "de-voorrang-en-afslaan",
    22: "trein-tram-bus",
    23: "maximumsnelheid-op-de-openbare-weg",
    24: "waar-moet-je-rijden",
    25: "het-nemen-van-bochten",
    26: "waar-mag-je-parkeren",
    27: "hoe-voorsorteren",
    28: "techniek-banden-remmen-olie",
    29: "ademtest-ademanalyse-bloedproef-drugs",
    30: "ongeval-zonder-of-met-gewonden",
    31: "overige-verkeersregels",
}
BASE = "https://www.gratisrijbewijsonline.be/theorie/leerstof-rijbewijs-a/"

path = r"A:\_code\rijbewijs-study-app\js\data\lessons.js"
with open(path, encoding="utf-8") as f:
    content = f.read()

def insert_source_url(match):
    id_num = int(match.group(1))
    category_line = match.group(0)
    if id_num not in SLUGS:
        return category_line
    url = BASE + SLUGS[id_num]
    return category_line + f'\n    sourceUrl: "{url}",'

# Match each lesson's "id: N,\n    category: "X"," block
pattern = re.compile(r'id: (\d+),\n    category: "[A-Z]",')
new_content, count = pattern.subn(insert_source_url, content)

with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Processed {count} lesson blocks; added sourceUrl to {sum(1 for m in pattern.finditer(content) if int(m.group(1)) in SLUGS)} of them.")
