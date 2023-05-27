import { useState } from "react";
import { Link } from "react-router-dom";

const CatagoryCard = ({title, image, id}) => {
    const [isHover, setHover] = useState(false);
    const handleEnter = () => { setHover(true); }
    const handleLeave = () => { setHover(false); }
    const catagoryStyle = {
        transform: isHover ? 'scale(1.05)' : 'scale(1)',
        filter: isHover ? 'brightness(55%)' : 'brightness(75%)',
        transition: 'all 150ms ease-in',
    };
    
    return (
        <Link to={'/products/'+id} className="catagory-card" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img 
                src={image} 
                alt={id} 
                className="catagory-image" 
                id={id}
                style={catagoryStyle}
            />
            <h2 className="catagory-title">{title}</h2>
        </Link>
    );
}

export default CatagoryCard;