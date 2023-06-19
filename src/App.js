
import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import {Routes,Route} from "react-router-dom";
import { SearchPage } from './Pages/SearchPage/SearchPage';
function App() {
  return (
    <div className="App">
     <h1>Book Shelf</h1>
     <Routes>
      <Route path ="/" element={<HomePage/>}/>
      <Route path="search" element={<SearchPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
