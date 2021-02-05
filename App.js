import React, { useState ,useEffect} from 'react';
import { Link, Route ,Switch,BrowserRouter} from 'react-router-dom';
import Filter from "./Filter"
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import './App.css';

/* Home component */
const Home = () => (
  <div>
     <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
      
           /* Link components are used for linking to other views */
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
         </nav>
    <h2>Home</h2>
  </div>
)

/* Category component */
const Category = () => (
  <div>
    <h2>Category</h2> 
    <MovieList
    />
  </div>
)

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

/* App component */
const App = () =>{
  const obj = [
    {id:1  ,title:"SuperMan",desc:"oeuaiofozefzo",posteUrl:"Film1",rate:"1"},
    {id:2  ,title:"Joker",desc:"sdfsdfsfs",posteUrl:"Film2",rate:"2"  },
    { id:3  ,title:"Death note",desc:"oqsdqdsq",posteUrl:"Film3",rate:"3" },
    { id:4  ,title:"Bird Box",desc:"iopppmm",posteUrl:"Film4",rate:"4"}]

    const [movies, SetMovies] = useState(obj);
    const [input, setInput] = useState("");
   const [newMovie,setNewMovie]=useState({});
    return (
      <div>
       
         <BrowserRouter>
          <Switch>
          /* Route components are rendered if the path prop matches the current URL */
           <Route exact path="/" component={Home}/>
           <Route path="/category" component={Category}/>
           <Route path="/products" component={Products}/>
           </Switch>
           </BrowserRouter>

      </div>
      
    )
  }
  
  export default App;
  
  