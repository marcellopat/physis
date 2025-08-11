export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "PHÝSIS";
export const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "")
  .split(",")
  .map(e => e.trim().toLowerCase())
  .filter(Boolean);
