import './Recipe.css'

import { useParams } from "react-router-dom"
import { useFetch } from "../../usefetch/useFetch"


export default function Recipe() {
    const {id} = useParams()
    let url = "http://localhost:3000/recipes/" + id
    const {data: recipe, isPending, error} = useFetch(url)

  return (
    <div className='recipe'>
        {error && <div className='error'>{error}</div>}
        {isPending && <p className='loading'> Loading ..</p>}
        {recipe && (<><h2 className='page-title'>{recipe.title}</h2>
        <p>Take {recipe.cookingTime} to cook.</p>
        <ul>
        {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
        <p className='method'>{recipe.method}</p>
        </>)}
    </div>
  )
}
