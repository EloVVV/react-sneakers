import {FavoriteIcon, PlusIcon, SearchIcon } from "../components/Icons/Icon";

import Slider from "../components/Slider/Slider";
import PRODUCTS from "../data/PRODUCTS";
import Product from "../components/Product/Product";
import { useState } from "react";

const HomePage = () => {

    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState("");

    const filteredProducts = products.filter((item) => item.name.toLowerCase().includes(query));


    const onChangeQuery = (event) => {
        setQuery(event.target.value.toLowerCase());

    }

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
                        <input 
                        value={query}
                        onChange={(e) => onChangeQuery(e)}
                        type="text" 
                        placeholder="Поиск..." 
                        name="" 
                        id="" />
                    </div>
                </header>

                <div className="products">
                    {/* <div className="product">
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
                    </div> */}

                    {
                        filteredProducts.length ?
                        (
                            filteredProducts.map((product) => {
                                return <Product key={product.id} product={product}/>
                            })
                        )
                        :
                        <h2>По вашему запросу "{query}" ничего не найдено!</h2>
                    }
                </div>
            </section>
         </>
    );
}

export default HomePage;