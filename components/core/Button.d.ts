import * as React from "react";

/**
 * The primary GrUSP action control — rounded, bold Grota label.
 * Use `primary` for the main action, `accent` (yellow) for high-energy CTAs,
 * `secondary` for the poster-style outline, `ghost` for low-emphasis.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "accent" | "secondary" | "ghost";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to full width of the container. */
  block?: boolean;
  /** Icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Render as a different element/component (e.g. "a"). @default "button" */
  as?: React.ElementType;
  children?: React.ReactNode;
}

/**
 * The primary GrUSP action control — rounded, bold Grota label.
 */
export function Button(props: ButtonProps): JSX.Element;
