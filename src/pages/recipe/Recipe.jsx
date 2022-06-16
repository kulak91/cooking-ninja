import './Recipe.css'

import { useParams } from "react-router-dom"
import { useFetch } from "../../usefetch/useFetch"


export default function Recipe() {
    const {id} = useParams()
    let url = "http://localhost:3000/recipes/" + id
    const {data: recipe, isPending, error} = useFetch(url)

  return (
    <div>
        {error && <div>{error}</div>}
        {recipe && (<>
        <h2>{recipe.title}</h2>
        <p>{recipe.method}</p>
        </>)}
    </div>
  )
}
