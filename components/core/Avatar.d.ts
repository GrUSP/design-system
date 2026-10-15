import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when omitted. */
  src?: string;
  /** Full name — used for alt text and initials fallback. */
  name?: string;
  /** Size. @default "md" */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Shape. @default "circle" */
  shape?: "circle" | "square";
  /** Heavy black keyline ring. */
  ring?: boolean;
}

/** A speaker / team-member portrait with an initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
