import { useState } from "react";
import SLIDES from "../../data/SLIDES";
import { ArrowNextIcon, ArrowPrevIcon} from "../Icons/Icon";
import SlideItem from "./SlideItem/SlideItem";

const Slider = () => {
    const [items, setItems] = useState(SLIDES);
    const [currentIndex, setCurrentIndex] = useState(0);

    // .bind ()

    const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1)   
    const prev = setCurrentIndex.bind(this, 0 ? currentIndex <=  items.length -1 : currentIndex - 1);

    return (
            <section className="slider">
                <div className="wrapper">
                    <div className="slides">
                        <SlideItem item={items[currentIndex]}/>
                    </div>

                    <div className="control">
                        {
                            currentIndex <= 0 || (
                                <button className="prev">
                                    <ArrowPrevIcon/>
                                </button>
                            )
                        }
                        {
                            currentIndex >= items.length -1 || (
                                <button className="next">
                                    <ArrowNextIcon/>
                                </button>
                            )
                        }
                    </div>
                </div>
            </section>
    );
}

export default Slider;