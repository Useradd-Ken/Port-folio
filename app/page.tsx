import HeroScene from "./components/HeroScene";
import Cards from "./components/cards";
import Certificates from "./components/certificates";
import About from "./components/HomeAbout"
import Contacts from "./components/contacts"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <HeroScene />
      <About/>
      <Cards />
      <Certificates />
      <Contacts/>
    </main>
  );
}
