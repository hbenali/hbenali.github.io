import { Portfolio } from "@/components/Portfolio";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("fr");

export default function Page() {
  return <Portfolio lang="fr" />;
}
