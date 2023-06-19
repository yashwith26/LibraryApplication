import { useContext } from "react";
import { BookContext } from "../../../../context/BooksProvider";
import { BookCard } from "../BookCard/BookCard";
import "./CurrentlyReading.css"
export function CurrentlyReading(){
    const {bookdata} =useContext(BookContext);

    const currentlyReading= bookdata.filter(({category})=>category==="currently-reading");
    console.log(currentlyReading);

    return(
        <div>
            <h2>Currently Reading</h2>
            <div className="currently-reading-list">
                {currentlyReading.map((book)=> <BookCard book={book}/>)}
            </div>
            <hr />
        </div>
    )
}





