const Navbar = (props) => {
    console.log(props)

    return(
        <header id="main-header" className="header">
            <h1>E-COMMERCE</h1>
            <nav>
               {props.links.map((elemento,indice)=>{
                   return <a key={elemento.id} href={elemento.href}>{elemento.name}</a>
               })
               }
               
            </nav>
        </header>
    )
}

export default Navbar