import { useContext } from "react";
import { BookContext } from "../../../../context/BooksProvider";
import { BookCard } from "../BookCard/BookCard";

export function CurrentlyReading(){
    const {bookdata} =useContext(BookContext);

    const currentlyReading= bookdata.filter(({category})=>category==="currently-reading");
    console.log(currentlyReading);

    return(
        <div>
            <h2>Currenlty Reading</h2>
            <div>
                {currentlyReading.map((book)=> <BookCard book={book}/>)}
            </div>
            <hr />
        </div>
    )
}





