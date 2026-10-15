import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible label (also used as tooltip). Required. */
  label: string;
  /** Visual style. @default "soft" */
  variant?: "soft" | "solid" | "accent" | "outline" | "ghost";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Fully round instead of rounded-square. */
  circle?: boolean;
  /** The icon glyph (SVG or text node). */
  children?: React.ReactNode;
}

/** A compact control wrapping a single icon — toolbars, cards, nav. */
export function IconButton(props: IconButtonProps): JSX.Element;
