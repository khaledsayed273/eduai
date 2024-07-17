import About from "./components/Home/About";
import Aside from "./components/Home/Aside";
import Contact from "./components/Home/Contact";
import Header from "./components/Home/Header";
import OverView from "./components/Home/OverView";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-2 md:px-5">
        <Header />
        <About />
        <OverView />
        <Aside />
        <Contact />
      </div>
    </main>
  );
}
