import Navbar from "./Header/Navbar"

function App (){

  const links=[
    {href:"#", name:"Inicio", id:1},
    {href:"#", name:"Productos", id:2},
    {href:"#", name:"Carrito", id:3}
  ]
  return <>
   <Navbar links={links}/>
  <main>Soy el main</main>
  </>
};

export default App;
