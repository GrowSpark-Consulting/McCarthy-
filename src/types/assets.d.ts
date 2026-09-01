/**
 * Ambient declarations for non-code imports.
 *
 * TypeScript 6 requires a declaration for side-effect imports, and Next only
 * ships types for CSS *modules* — this covers the global stylesheet import in
 * `app/layout.tsx`.
 */
declare module '*.css';
