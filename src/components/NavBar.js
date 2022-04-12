
const Navbar = () => {
    return (
        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
        <div class="container-fluid">
    <a class="navbar-brand" href="#">Pc Tecnica</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Tienda</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Contacto</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Nosotros</a>
        </li>
    </ul>
    </div>
</div>
</nav>
</header>
);
}

export default Navbar;
