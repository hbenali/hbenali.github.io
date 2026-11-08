"use client";

import { useEffect, useState } from "react";

// Shows the address that failed, as the old 404 did. Empty during static render.
export function CurrentPath() {
  const [path, setPath] = useState("");
  useEffect(() => setPath(window.location.pathname), []);
  return <>{path}</>;
}
