export const BRAND_LOCATION = "Kemeragzi, Aksu";

export const PHONE_DISPLAY = "0532 589 46 43";
export const PHONE_E164 = "+905325894643";
export const WHATSAPP_NUMBER = "905325894643";

export const ADDRESS_LINE_1 = "Kemeragzi 3 Nolu Halk Plaji";
export const ADDRESS_LINE_2 =
  "Kemeragzi Mahallesi, Aska Lara Royal Seginus Hotel plaji ortasi, Aksu Antalya";

const mapsQuery = encodeURIComponent(`${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_URL = `tel:${PHONE_E164}`;
export const MAPS_QUERY_URL = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`;
