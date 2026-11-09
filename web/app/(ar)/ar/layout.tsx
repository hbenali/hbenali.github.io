import type { ReactNode } from "react";
import { RootShell } from "@/lib/shell";
export { viewport } from "@/lib/meta";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootShell lang="ar" dir="rtl">
      {children}
    </RootShell>
  );
}
