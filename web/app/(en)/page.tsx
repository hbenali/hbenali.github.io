import { Portfolio } from "@/components/Portfolio";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("en");

export default function Page() {
  return <Portfolio lang="en" />;
}
