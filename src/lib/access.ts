/* Shared constants for the site password gate. Server-only — never import
   from client components. The password itself stays out of the client
   bundle: the unlock form posts it to /api/unlock for comparison. */

export const ACCESS_COOKIE = "sl-access";

/* Opaque token stored in the cookie; deliberately unrelated to the
   password so the cookie never leaks it. Bump the suffix to revoke
   everyone's existing access. */
export const ACCESS_TOKEN = "granted-v1";

export const SITE_PASSWORD = process.env.SITE_PASSWORD ?? "designlove";
