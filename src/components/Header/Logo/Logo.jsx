import logoImg from "../../../assets/logo.png";

const Logo = () => {
    return (
        <div className="logo">
            <img src={logoImg} alt="" />

            <div>
                <h1>React Sneakers</h1>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
    );
}

export default Logo