import CartWidget from "./CartWisget"

function NavBar() {

    return (
      <>
      <div className="contenedor" style={{display: "flex", justifyContent: "center"}}>
        <div>
            <h1 style={{color: "red"}}>Venta de Libros</h1>
            <h2 style={{color: "crimson"}}>Inicio Python Javascript SQL C++ C#</h2>
        </div>  
        <div>
            <CartWidget />
        </div>    
      </div>
      </>
    )
  }
  
  export default NavBar