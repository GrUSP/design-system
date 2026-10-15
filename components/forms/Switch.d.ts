import * as React from "react";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /** Controlled checked state. */
  checked?: boolean;
  /** Uncontrolled initial state. */
  defaultChecked?: boolean;
  /** Change handler. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional inline label. */
  label?: React.ReactNode;
  disabled?: boolean;
}

/** An on/off toggle — track turns yellow when on. */
export function Switch(props: SwitchProps): JSX.Element;
