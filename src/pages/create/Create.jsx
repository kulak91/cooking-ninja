import { useRef, useState } from 'react'
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [method, setMethod] = useState('')
 const [ingredients, setIngredients] = useState([])
 const [newIngredient, setNewIngredient] = useState('')
const ingredientInput = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, cookingTime, method, newIngredient, ingredients)
  }

  const addIngredient = (e) => {
    e.preventDefault()
    let ing = newIngredient.trim()
    
    if(ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
}
  return (
    <div className='create'>
      <h2 className='page-title'>Add a new Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label >
          <span>Recipe title:</span>
          <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} required />
        </label>


        <label>
          <span>Ingredients:</span>
          <div className='ingredients'>
            <input type='text' onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} ref={ingredientInput}/>
            <button className='btn' onClick={(e) => addIngredient(e)}>add</button>
          </div>
        </label>
          <p className="ing">Current ingredients: {ingredients.map(el => <em key={el}>{el},      </em>)}</p>


        <label >
          <span>Recipe method:</span>
          <textarea onChange={(e) => setMethod(e.target.value)} value={method} required />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input type='number' onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} required />
        </label>

        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
