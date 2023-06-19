import { useContext } from "react";
import { BookContext } from "../../../../context/BooksProvider";
import { BookCard } from "../BookCard/BookCard";
export function Read(){
const {bookdata} =useContext(BookContext);

    const toRead= bookdata.filter(({category})=>category==="read")

    return(
        <div>
            <h2>To read</h2>
            <div>
            {toRead.map((book)=><BookCard book={book}/>)}
            </div>
            <hr />
        </div>
    )
}