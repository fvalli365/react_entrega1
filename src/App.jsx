import NavBar from "./Components/navbar.jsx"
import ItemListContainer from "./Components/ItemListContainer.jsx"

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
      <p>
        <ItemListContainer msg="Aca iría la lista de productos" />
      </p>
      </body>
    </>
  )
}

export default App
