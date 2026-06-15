import HeroScene from "./components/HeroScene";
import Cards from "./components/cards";
import Certificates from "./components/certificates";
import About from "./components/HomeAbout"
import Contacts from "./components/contacts"
import TechCarousel from "./components/tools";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <HeroScene />
      <About/>
      <Cards />
      <TechCarousel/>
      <Certificates />
      <Contacts/>
    </main>
  );
}
