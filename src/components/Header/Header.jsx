import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ModalContext } from "../../pages/Root";
import { CartIcon, FavoriteIcon, OrderIcon } from "../Icons/Icon";

import Logo from "./Logo/Logo";

const CartButton = () => {

    const {toggleModal} = useContext(ModalContext);

    return (
        <button onClick={toggleModal}>
            <CartIcon size={24} /> <span>1205 руб.</span>
        </button>
    );
};

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">
                <Logo/>
            </NavLink>
            

            <nav>
                <CartButton/>

                <NavLink to="/favorites">
                   <FavoriteIcon size={24}/>
                </NavLink>

                <NavLink to="/orders">
                    <OrderIcon size={24}/>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;