/**
 * Datos compartidos por las páginas /terms y /privacy.
 * Edita aquí y se actualizan las dos páginas a la vez.
 */
export const legal = {
  brand: "Iberian Web",

  // ⚠️ PENDIENTE DE RELLENAR antes de publicar (identificación del titular, art. 10 LSSI-CE)
  owner: "[NOMBRE COMPLETO O RAZÓN SOCIAL DEL TITULAR]",
  taxId: "[NIF / CIF]",
  address: "[DIRECCIÓN POSTAL], Granada, España",
  hosting: "[PROVEEDOR DE ALOJAMIENTO]",

  // Datos ya conocidos del sitio
  email: "hola@iberianweb.com",
  url: "https://iberianweb.com",
  city: "Granada",

  // Meses que conservamos los datos de una consulta que no llega a convertirse en proyecto
  contactRetentionMonths: 12,

  lastUpdated: "18 de septiembre de 2026",
} as const;
