import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Works from "./Components/Works";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Features/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
