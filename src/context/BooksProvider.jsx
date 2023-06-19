import { createContext, useEffect, useState } from "react"
import {books} from "../db/Books";
export const BookContext= createContext();




export function BooksProviders({children}){

        const [bookdata,setBookdata]=useState([]);

        useEffect(()=>{
            setBookdata([...books])
        },[]);
           
    

    return(
        <>
        <BookContext.Provider value={{bookdata,setBookdata}}>
            {children}
        </BookContext.Provider>
        </>
    )
}

