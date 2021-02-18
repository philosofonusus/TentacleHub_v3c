import React, {useEffect, useState} from 'preact/compat'
import ReactPlayer from "react-player";
import {useParams} from "react-router";
import useFavourites from "../../hooks/favorites.hook";
import {useHttp} from "../../hooks/http.hook";
import LayOut from "../../components/layout";

const ItemRoute = () => {
    const [itemData, setData] = useState(null)
    const {request} = useHttp()
    const { id } = useParams()

    const {addFavouriteHandler, removeFavouriteHandler, inFavourites, isUser} = useFavourites(id)
    useEffect(() => {
        (async () => {
            return await request('http://localhost:5000/api/hentai/item',"POST",{id})
        })().then(data => {
            setData(data)
        })
    }, [id])
    if(!itemData) return <div />
    return(
        <>
            <LayOut/>
            <div className="container">
                <div style={{color: "white"}}>
                    <img src={`/public/hentai/covers/${itemData?.cover}`} alt={itemData?.title}/>
                    <h1>{itemData?.title}</h1>
                    <p>{itemData?.description}</p>
                    {inFavourites && isUser
                        ? <button onClick={removeFavouriteHandler}>Remove from favourites</button>
                        : <button onClick={addFavouriteHandler}>Add to favourites</button>}
                    <ReactPlayer
                        config={{ file: {
                                attributes: {
                                    controlsList: 'nodownload'
                                }
                            }}} controls url={`/public/hentai/videos/${itemData?.episodes[0]}`}/>
                </div>
            </div>
        </>
    )
}
export default ItemRoute
