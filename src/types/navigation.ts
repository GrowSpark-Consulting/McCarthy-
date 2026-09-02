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

/** One labelled group of links inside a mega menu, e.g. "Consulting services". */
export interface MegaMenuColumn {
  readonly heading: string;
  readonly links: readonly NavLink[];
}

/** The featured card on the right edge of a mega menu. */
export interface MegaMenuSpotlight {
  readonly eyebrow: string;
  readonly title: string;
  readonly body: string;
  readonly link: NavLink;
}

/** The full panel a "What we do" / "Who we are" style trigger opens. */
export interface MegaMenu {
  readonly columns: readonly MegaMenuColumn[];
  readonly spotlight: MegaMenuSpotlight;
}

/**
 * A top-level primary navigation entry.
 *
 * `href` is present on plain links (Insights, News, Careers) so they route
 * directly. A trigger that opens a mega menu (What we do, Who we are) omits
 * it — it is a button, not a link.
 */
export interface PrimaryNavItem {
  readonly label: string;
  readonly href?: string;
  readonly megaMenu?: MegaMenu;
}
