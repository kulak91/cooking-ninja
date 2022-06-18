import { useFetch } from '../../usefetch/useFetch'
import { useLocation } from 'react-router-dom'
import './Search.css'
import RecipeList from '../../components/RecipeList'

export default function Search() {
  const querySelect = useLocation().search
  const query = new URLSearchParams(querySelect)
  const que = query.get("q")
const {data, error, isPending} = useFetch("http://localhost:3000/recipes?q=" + que)

  return (
    <div>

      {error && <div>Cannot find "{que}"</div>}
      {isPending && <div> Searching ... </div>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
