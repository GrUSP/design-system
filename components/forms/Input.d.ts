import * as React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  /** Field label rendered above the control. */
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — switches the field into the error state. */
  error?: React.ReactNode;
  /** Marks the field required (adds a red asterisk). */
  required?: boolean;
  /** Leading icon node. */
  icon?: React.ReactNode;
  id?: string;
}

/** A labelled text field with hint and error states and the brand keyline. */
export function Input(props: InputProps): JSX.Element;
