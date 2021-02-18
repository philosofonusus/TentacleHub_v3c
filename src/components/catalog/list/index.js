import React, {useState} from 'preact/compat'
import '../../../style/list.css'
import ListNav from "./ListNav";
import ListCard from "./ListCard";

const List = ({list}) => {
    const itemsInPage = 18
    const [listPage, setListPage] = useState(1)
    const pages = Math.ceil(list.length / itemsInPage)
    return(
        <>
            <div className="list">
                {list?.slice(listPage*itemsInPage-itemsInPage, listPage*itemsInPage).map(el => {
                    const item = (({rating, studio, title, releaseDate, description, cover, _id}) => ({rating, studio, title, releaseDate, description, img: cover, id: _id}))(el)
                    if(el) return <ListCard item={item} key={item.title} />
                })}
            </div>
            {/* list.length > 0 ? <ListNav listPage={listPage} setListPage={setListPage} pages={pages}/> : null */}
        </>
    )
}

export default List
