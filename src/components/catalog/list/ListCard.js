import React from 'preact/compat'
import ProgressiveImage from 'react-progressive-image'
import {Link} from "react-router-dom";

const placeholder = (
    <div
        style={{ backgroundColor: "#191c1f", height: 394, width: 298 }}
    />
);


const ListCard = ({item}) => {
    return(
        <div className="list__card">
            <Link to={`/item/${item.id}`} className="card__cover">
                <ProgressiveImage src={`/public/hentai/covers/${item.img}`} placeholder="">
                    {(src, loading) => loading ? placeholder : <img src={src} alt={item.title} />}
                </ProgressiveImage>
            </Link>
            <h3 class="card__title">
                <Link to={`/item/${item.id}`}>
                    {item.title}
                </Link>
            </h3>
        </div>
    )
}
export default React.memo(ListCard)
