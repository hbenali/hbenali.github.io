"use client";

import { useState } from "react";

// The mailto link stays the primary action; copying is a convenience that confirms itself.
export function CopyEmail({ email, labels }: { email: string; labels: { copy: string; done: string } }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setDone(true);
          setTimeout(() => setDone(false), 2200);
        } catch {
          /* clipboard unavailable: the mailto link still works */
        }
      }}
      className="link text-base text-mist"
    >
      <span role="status" aria-live="polite">
        {done ? labels.done : labels.copy}
      </span>
    </button>
  );
}
