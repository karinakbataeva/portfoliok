import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import SiteFooter from "@/components/SiteFooter";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <SelectedWork />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}
