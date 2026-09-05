import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BharatLens from "@/components/case/BharatLens";

export const metadata: Metadata = {
  title: "BharatLens — Karina Bataeva",
  description:
    "An AI evaluation dashboard that turns complex model evaluation data into clear, explorable insights.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="pt-20">
        <BharatLens />
      </main>
      <SiteFooter />
    </>
  );
}
