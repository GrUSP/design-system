import * as React from "react";

/**
 * Promotes a single GrUSP event — sub-brand accent header, date, location and CTA.
 * The flagship domain component for listing the conference line-up.
 */
export interface ConferenceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Event name, e.g. "reactjsday". */
  name: string;
  /** Edition / eyebrow line, e.g. "13th edition". */
  edition?: string;
  /** Human date string, e.g. "23–24 Oct 2026". */
  date?: string;
  /** Location, e.g. "Verona, IT". */
  location?: string;
  /** Short blurb. */
  description?: string;
  /** Sub-brand accent color (a CSS color or token). @default brand purple */
  accent?: string;
  /** Status pill text, e.g. "CFP open" / "Sold out". */
  status?: string;
  /** Call-to-action label. @default "Discover more" */
  cta?: string;
  /** Hover lift + pointer. @default true */
  interactive?: boolean;
}

export function ConferenceCard(props: ConferenceCardProps): JSX.Element;
