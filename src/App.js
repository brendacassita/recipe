import Pages from "./pages/Pages"
import Home from "./pages/Home"
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
     <h1>Recipes</h1>
     <Category />
     <Home />

    </div>
  );
}

export default App;
