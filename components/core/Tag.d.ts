import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Optional leading color dot (e.g. a conference accent). */
  color?: string;
  /** Selected / active state (filled). */
  selected?: boolean;
  /** Makes the tag interactive (filterable). */
  onClick?: (e: React.MouseEvent) => void;
  /** Renders a remove "×" affordance. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

/** A topic / filter chip — interest areas, tracks, removable selections. */
export function Tag(props: TagProps): JSX.Element;
