/**
 * Navigation domain types.
 *
 * Every link rendered by the header, the mobile menu and the search overlay is
 * described by these shapes, so a route only ever has to be declared once
 * (see `lib/navigation.ts`).
 */

/** A single destination in the site's information architecture. */
export interface NavLink {
  /** Visible label. */
  readonly label: string;
  /** Application route. Relative paths only. */
  readonly href: string;
  /** Short supporting line, shown in the search overlay and mobile menu. */
  readonly description?: string;
}

/** A call-to-action rendered as a button rather than a plain link. */
export interface NavCta extends NavLink {
  /** Accessible label when the visible text needs more context. */
  readonly ariaLabel?: string;
}
