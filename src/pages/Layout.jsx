import { Outlet, Link } from "react-router-dom";

function Layout() {


    return (
        <main className="bg-dark min-vh-100">
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/">React Routing</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className=" nav-link fw-medium" to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link fw-medium" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link fw-medium" to="contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link fw-medium" to="services">Services</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet/>
            </div>
            <div className="fixed-bottom text-center fw-medium p-3 bg-info">
                <footer>©️ All Rights Reserved | Johnsen Ultra</footer>
            </div>
        </main>
    )
}

export default Layout;