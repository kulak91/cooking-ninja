import { useEffect, useState } from 'react'
import './Create.css'

export default function Create() {
const [ingredientInput, setIngredientInput] = useState(null)
const [ingredient, setIngredient] = useState([])
const [title, setTitle] = useState('')
const [cookingTime, setCookingTime] = useState('')
const [method, setMethod] = useState('')
 const handleChange = (e) => {
  setIngredientInput(e.value)

}

const addIngredient = () => {
  setIngredient(prevState => prevState.push(ingredientInput))
}
  return (
    <div className='create'>
      <h2 className='page-title'>Add a new Recipe</h2>
    <form>
      <label >
        <span>Recipe title:</span>
      <input type='text' onChange={(e)=> setTitle(e.target.value)} value={title} required/>        
      </label>
      
      <label >
        <span>Recipe method:</span>
      <textarea onChange={(e) => setMethod(e.target.value)} value={method} required /> 
      </label>
      <label>
        <span>Cooking time (minutes):</span>
      <input type='number' onChange={(e)=> setCookingTime(e.target.value)}/>
      </label>

      <div className='ingredient'>
      <button onClick={() => addIngredient()} > add</button> 
      </div>
      <p>Ingredients : {ingredient && ingredient.map(el => (<span>{el}</span>))} </p>
      <input type='text'></input>
      <button>Submit</button>
    </form>
    </div>
  )
}
