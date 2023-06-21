import { useContext } from "react"
import { BookContext } from "../../../../context/BooksProvider"
import { BookCard } from "../BookCard/BookCard";
export function WantToRead(){
    const {bookdata} = useContext(BookContext);

    const wantstoRead= bookdata.filter(({category})=>category==="want-to-read");


    return(
        <div>
            <h3>Wants to read</h3>
            {wantstoRead.map((book)=><BookCard book={book}/>)}
            <hr />
        </div>
    )
}