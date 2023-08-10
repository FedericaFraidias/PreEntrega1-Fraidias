import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";


function App() {
  return (
    <div>
      {/* Navbar */}
      <NavBar />

      {/* ItemListContainer */}
      <ItemListContainer greeting="Almacén natural" />
    </div>
  )
}

export default App
