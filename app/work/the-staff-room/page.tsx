import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StaffRoom from "@/components/case/StaffRoom";

export const metadata: Metadata = {
  title: "The Staff Room — Karina Bataeva",
  description:
    "Fixing a trust problem hidden inside an access flow, then redesigning how readers, contributors, and ambassadors participate.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="pt-20">
        <StaffRoom />
      </main>
      <SiteFooter />
    </>
  );
}
