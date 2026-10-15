import * as React from "react";

export interface SpeakerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Speaker full name. */
  name: string;
  /** Job role / title. */
  role?: string;
  /** Company or org. */
  company?: string;
  /** Portrait image URL (falls back to initials). */
  photo?: string;
  /** Talk title. */
  talk?: string;
  /** Hover lift + pointer. */
  interactive?: boolean;
}

/** A speaker profile — portrait, name, role and talk title. Composes Avatar. */
export function SpeakerCard(props: SpeakerCardProps): JSX.Element;
