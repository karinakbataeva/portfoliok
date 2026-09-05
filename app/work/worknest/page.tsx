import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WorkNest from "@/components/case/WorkNest";

export const metadata: Metadata = {
  title: "WorkNest — Karina Bataeva",
  description:
    "A productivity system that helps users organize workspaces, tabs, notes, and focus sessions inside the browser.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="pt-20">
        <WorkNest />
      </main>
      <SiteFooter />
    </>
  );
}
