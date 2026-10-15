import * as React from "react";

/**
 * A flexible content container. Compose with `Card.Body`, `Card.Title`,
 * `Card.Footer`. Use `poster` for the signature black-keyline + offset look.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface treatment. @default "plain" */
  variant?: "plain" | "poster" | "brand" | "dark";
  /** Adds hover lift + pointer (for clickable cards). */
  interactive?: boolean;
  children?: React.ReactNode;
}

export interface CardSlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
export namespace Card {
  function Body(props: CardSlotProps): JSX.Element;
  function Title(props: CardSlotProps): JSX.Element;
  function Footer(props: CardSlotProps): JSX.Element;
}
