/**
 * CORS (Cross-Origin Resource Sharing) configuration
 * Last updated: 2025-05-19 08:39:50 UTC
 * @author sohaihub
 */

/**
 * Standard CORS headers for API endpoints
 * Allows cross-origin requests with specific constraints
 */
export const corsHeaders = {
  // Allow requests from any origin
  // In production, you might want to restrict this to specific domains
  "Access-Control-Allow-Origin": "*",

  // Allowed request headers
  "Access-Control-Allow-Headers": [
    "authorization",
    "x-client-info",
    "apikey",
    "content-type",
    "x-requested-with",
    "accept",
    "origin",
    "cache-control"
  ].join(", "),

  // Allowed HTTP methods
  "Access-Control-Allow-Methods": "POST, OPTIONS",

  // Allow credentials (cookies, authorization headers, etc.)
  "Access-Control-Allow-Credentials": "true",

  // Maximum age (in seconds) of preflight request cache
  "Access-Control-Max-Age": "3600",

  // Expose these headers to the client
  "Access-Control-Expose-Headers": [
    "content-length",
    "content-type",
    "authorization"
  ].join(", "),

  // Security headers
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
} as const;

/**
 * Helper function to add CORS headers to a Response
 * @param response - The Response object to add headers to
 * @returns Response with CORS headers
 */
export function addCorsHeaders(response: Response): Response {
  const newHeaders = new Headers(response.headers);
  Object.entries(corsHeaders).forEach(([key, value]) => {
    newHeaders.set(key, value);
  });
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}

/**
 * Create a preflight response for OPTIONS requests
 * @returns Response configured for OPTIONS preflight
 */
export function handleCorsPreflightRequest(): Response {
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
}

/**
 * Types for CORS configuration
 */
export type CorsHeaders = typeof corsHeaders;