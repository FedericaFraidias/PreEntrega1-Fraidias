
const CartWidget = () => {
    return (
        <div>
            <button className="btn btn-outline-primary position-relative">
                <i className="bi bi-cart-fill"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        0 <span className="visually-hidden">productos en el carrito</span>
                    </span>
            </button>
        </div>
    )
};

export default CartWidget;

// El icono no se ve en el navegador