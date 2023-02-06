import formatMoney from "../../utils/formatMoney";
import { FavoriteIcon, PlusIcon } from "../Icons/Icon";

const Product = ({product}) => {
    return (
        <div className="product">
            <div className="product_action">
                <FavoriteIcon/>
            </div>
            <img src={product.preview} alt="" />
            <h3>{product.name}</h3>
            
            <div className="product_footer">
                <div className="price">
                    <span className="title">
                        Цена:
                    </span>
                    <span className="value">
                        {formatMoney(product.price)}
                    </span>
                </div>
                <button>
                    <PlusIcon size={14}/>
                </button>
            </div>
        </div>
    );
}

export default Product;