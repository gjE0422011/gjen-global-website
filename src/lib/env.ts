const e = import.meta.env;
export const SITE_URL: string = e.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
export const ZOHO_URL: string = e.VITE_ZOHO_CAREERS_URL || "";
export const ZOHO_EMBED: boolean = e.VITE_ZOHO_EMBED === "true";
export const EMAIL: string = e.VITE_CONTACT_EMAIL || "";
export const LINKEDIN: string = e.VITE_LINKEDIN_URL || "";
export const ZOHO_FORM_URL: string = e.VITE_ZOHO_APPLY_FORM_URL || "";
