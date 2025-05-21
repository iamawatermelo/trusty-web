export async function load() {
  const tokens = {
    "bg": "FFFCFC",
    "fg": "340909",
    "card-bg": "F8F0EA",
    "card-stroke": "EED4C0",
    "marker-headcode": "AD8128",
    "on-marker-headcode": "FAF6ED",
    "marker-schedule": "AD2878",
    "on-marker-schedule": "FDF5FA",
    "marker-type": "2847AD",
    "on-marker-type": "E5EBFE",
    "marker-load": "007620",
    "marker-load-alt": "004713",
    "on-marker-load": "F3F7F4",
    "marker-accomodation": "767D93",
    "marker-accomodation-alt": "5A627B",
    "on-marker-accomodation": "F2F4F9",
    "marker-reservations": "435283",
    "marker-reservations-alt": "2A3558",
    "on-marker-reservations": "F2F4F9",
    "marker-catering": "0B1E5A",
    "marker-catering-alt": "0E193A",
    "on-marker-catering": "F2F4F9",
    "marker-crs": "383E51",
    "marker-crs-alt": "6E7BA5",
    "on-marker-crs": "EFF0F2"
  };
  
  let cssVariables = '';
  (Object.keys(tokens) as Array<keyof typeof tokens>).forEach(key => {
    cssVariables += `--${key}: #${tokens[key]}; `
  });
  
  return {
    cssVariables
  }
}