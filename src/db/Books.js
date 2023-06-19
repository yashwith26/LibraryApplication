import { v4 as uuid } from "uuid";

export const books=[
    {
        _id: uuid(),
        name: "Lessons in Chemistry",
        bookImg:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbHGQJujIUI_E0GEPABhk8-hL6xGqu7-H5izlpAHgVLSarHkag",
        author: "Bonnie Garmus",
        category: "read"
      },
    
      {
        _id: uuid(),
        name: "Demon Copperhead",
        bookImg:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9--iGK7wK2WdLlrkGkncsY6ikjbrfQ4KUvOLbdF7w7gJ76HJp",
        author: "Barbara Kingsolver",
        category: "want-to-read"
      },
      {
        _id: uuid(),
        name: "Anna Karenina",
        bookImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStFCCvaLI6NGiRy8BOY-61VK7abTi8Sbw5UtZPd3EHeDKyZZwY",
        author: "Leo Tolstoy",
        category: "read"
      },
    
      {
        _id: uuid(),
        name: "Atomic Habits",
        bookImg:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQodZj5Z1ogeLdcW6Ay1ppfIf9JPV2G-E1i24zD7LqL36XhAsJB",
        author: "James Clear",
        category: "currently-reading"
      },
    
      {
        _id: uuid(),
        name: "Playing It My Way",
        bookImg:
          "https://books.google.co.in/books/publisher/content?id=o4tmBAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U0L3cmxcYvZ4lr0UKxcJkijPZhijw&w=1280",
        author: "Sachin Tendulkar",
        category: "none"
      },
    
      {
        _id: uuid(),
        name: "The Adventures of Huckleberry Finn",
        bookImg:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQLFFtRQybT035PZLJUlFryBFiWZAjxGvjblf0tDwJbpBIY5Gau",
        author: "Mark Twain",
        category: "read"
      }
]