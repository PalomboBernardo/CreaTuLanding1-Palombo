import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
    return (
        <div className="app">
            <NavBar />
            <ItemListContainer greeting="¡Bienvenido a Mi Tienda! 🚀" />
        </div>
    );
}

export default App;
