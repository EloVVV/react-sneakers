import { NavLink } from "react-router-dom";
import { CartIcon, FavoriteIcon, OrderIcon } from "../Icons/Icon";

const CartButton = () => {
    return (
        <button>
            <CartIcon size={24} /> <span>1205 руб.</span>
        </button>
    );
};

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="" alt="" />

                <div>
                    <h1>React Sneakers</h1>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>

            <nav>
                <CartButton/>

                <NavLink to="/favorites">
                   <FavoriteIcon/>
                </NavLink>

                <NavLink to="/orders">
                    <OrderIcon/>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;