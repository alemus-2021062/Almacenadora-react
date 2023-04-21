import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {



    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary text-light">
                <div className="container-fluid text-light">
                    <Link className="navbar-brand fs-1 text-light" to="/">Menu Inicial</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active fs-1 text-light" aria-current="page" to="/agregar" >Agregar</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
