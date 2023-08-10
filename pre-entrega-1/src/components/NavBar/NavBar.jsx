import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Brand */}
                <a className="navbar-brand">Dietética Fraidias</a>

                {/* Links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cereales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Legumbres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Congelados</a>
                    </li>
                </ul>
            </div>

            {/* CartWidget */}
            <CartWidget />
        </nav>
    )
};

export default NavBar;

// Cuando inicié git, se añadieron muchos archivos de bootstrap
// esta bien?

// No pude cambiar el color de la barra de navegacion