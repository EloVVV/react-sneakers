import {FavoriteIcon, PlusIcon, SearchIcon } from "../components/Icons/Icon";
import product_img_1 from "../assets/products/product-img-1.png";
import Slider from "../components/Slider/Slider";

const HomePage = () => {
    return (
         <>
            <Slider/>

            <section className="section catalog">
                <header className="section-header">
                    <h2 className="section_title">
                        Все кроссовки
                    </h2>

                    <div className="search-box">
                        <div>
                            <SearchIcon size={20}/>
                        </div>
                        <input type="text" placeholder="Поиск..." name="" id="" />
                    </div>
                </header>

                <div className="products">
                    <div className="product">
                        <div className="product_action">
                            <FavoriteIcon/>
                        </div>
                        <img src={product_img_1} alt="" />
                        <h3>Наименование продукта</h3>
                        
                        <div className="product_footer">
                            <div className="price">
                                <span className="title">
                                    Цена:
                                </span>
                                <span className="value">
                                    12 999 руб.
                                </span>
                            </div>
                            <button>
                                <PlusIcon size={14}/>
                            </button>
                        </div>
                    </div>

                    <div className="product">
                        <div className="product_action">
                            <FavoriteIcon/>
                        </div>
                        <img src={product_img_1} alt="" />
                        <h3>Наименование продукта</h3>
                        
                        <div className="product_footer">
                            <div className="price">
                                <span className="title">
                                    Цена:
                                </span>
                                <span className="value">
                                    12 999 руб.
                                </span>
                            </div>
                            <button>
                                <PlusIcon size={14}/>
                            </button>
                        </div>
                    </div>

                    <div className="product">
                        <div className="product_action">
                            <FavoriteIcon/>
                        </div>
                        <img src={product_img_1} alt="" />
                        <h3>Наименование продукта</h3>
                        
                        <div className="product_footer">
                            <div className="price">
                                <span className="title">
                                    Цена:
                                </span>
                                <span className="value">
                                    12 999 руб.
                                </span>
                            </div>
                            <button>
                                <PlusIcon size={14}/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
         </>
    );
}

export default HomePage;