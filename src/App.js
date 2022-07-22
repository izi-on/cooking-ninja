//styles
import './App.css'

//page
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Create from './pages/create/Create'
import Search from './pages/search/Search'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/recipes/:id">
          <Recipe />
        </Route>
        <Route path="*">
          <Redirect on="/"/>
        </Route>
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App
