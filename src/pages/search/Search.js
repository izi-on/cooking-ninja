//hooks
import { useLocation, useEffect } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

//style
import './Search.css'

export default function Search() {

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = "http://localhost:3000/recipes?q=" + query
  const {data : recipes, isPending, error} = useFetch(url)  

  return (
    <div>
        {error && <p className="error">Error loading recipes</p>}
        {isPending && <p className="loading">Loading recipes</p>}
        {recipes && <RecipeList recipes={recipes}/>}

    </div>
  )
}
