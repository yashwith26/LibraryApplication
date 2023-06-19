import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { BookContext } from "../../context/BooksProvider";
import { BookCard } from "../HomePage/HomePageComponents/BookCard/BookCard";
export function SearchPage(){
    const {bookdata} =useContext(BookContext);

    const [displayData,setDisplaydata]=useState([...bookdata]);
    const inputChangeHandler=(e)=>{
        const result=bookdata.filter(({name})=>name.toLowerCase().includes(e.target.value.toLowerCase()))
            setDisplaydata(()=>[...result]);
    }
    return(
        <div>
            <NavLink to="/">Library</NavLink>

            <div>
                Search: <input className="search-box" type="text" onChange={inputChangeHandler}/>
            </div>
            <div>
                {displayData.map((book)=>(
                    <div>
                       <BookCard book={book}/>
                    </div>
                ))}
            </div>
        </div>

       
    )
}


