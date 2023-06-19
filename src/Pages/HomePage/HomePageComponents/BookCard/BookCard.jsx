import { useContext } from "react";
import { BookContext } from "../../../../context/BooksProvider";
export function BookCard({book}){
    const{bookdata,setBookdata}= useContext(BookContext);

    const changeHandler=(e,bookId)=>{
        const newBookData= bookdata.map((book)=>(
            book._id===bookId ?{...book, category:e.target.value} : book
        ))
        setBookdata(()=>[...newBookData]);
    }
    return(
        <div>
            <div>
                <img src={book.bookImg} alt="" height="300" width="200" />
            </div>
            <div>
                <strong>{book.title}</strong>
            </div>

            <div>
                {book.author}
            </div>

            <div>
                <select name="category" id="" value={book.category} onChange={(e)=>changeHandler(e,book._id)}>
                    <option value="currently-reading">Currently Reading</option>
                    <option value="want-to-read">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                   
                </select>
            </div>
        </div>
    )
}