import { NavLink } from "react-router-dom";

const SlideItem = ({item}) => {
    return (
        <div className="slide" style={{
            backgroundColor: item.background
        }}>
            <div className="slide_left">
                <h2>
                    {item.headline}
                </h2>
                <NavLink className="button xl" to={item.button.url}> 
                    {item.button.text}
                </NavLink>
            </div>
            <div className="slide_right">
                <img src={item.url} alt={item.text} />
            </div>
        </div>
    );
}

export default SlideItem;