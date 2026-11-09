import type { ReactNode } from "react";
import { RootShell } from "@/lib/shell";
import { LangRedirect } from "@/components/LangRedirect";
export { viewport } from "@/lib/meta";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootShell lang="en">
      <LangRedirect />
      {children}
    </RootShell>
  );
}
