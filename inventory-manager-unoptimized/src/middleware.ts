export { default } from "next-auth/middleware";

// This line essentially disables the middleware by setting the matcher to an empty array.
// Authentication for the whole application can be enabled by removing the line below.
export const config = { matcher: [] };

// For custom authentication, you can add paths to the matcher above: "/api/*" for example.
