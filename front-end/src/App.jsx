import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Navigation/>
      <main>
        <HeroSection/>
        <button>Click me</button>
      </main>
    </>
  );

}
export default App;