//styles
import './App.css'

//page
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Create from './pages/create/Create'
import Search from './pages/search/Search'

//component
import Navbar from './components/NavBar'
import ThemeSelector from './components/ThemeSelector'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <ThemeSelector />
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
