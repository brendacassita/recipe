import Pages from "./pages/Pages"
import Home from "./pages/Home"
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom"
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search />
        <h1>Recipes</h1>
        <Category />
        <Home />
     </BrowserRouter>

    </div>
  );
}

export default App;
