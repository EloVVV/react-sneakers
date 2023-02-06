import image from '../assets/Main-block.png';
import image_2 from '../assets/products/product-img-2.png';

const SLIDES = [
    {
        id: 0,
        background: "#f4efe9",
        url: image,
        headline: "New Shoes",
        button: {
            url: "/",
            text: "Приобрести",
        }
    },
    {
        id: 1,
        background: "#fff",
        url: image_2,
        headline: "Nike Air Force 1",
        button: {
            url: "/",
            text: "Забронировать",
        }
    }
];

export default SLIDES;