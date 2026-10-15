import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. @default "neutral" */
  variant?: "neutral" | "solid" | "accent" | "purple" | "success" | "warning" | "danger" | "outline";
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

/** A small status / count / metadata pill. */
export function Badge(props: BadgeProps): JSX.Element;
