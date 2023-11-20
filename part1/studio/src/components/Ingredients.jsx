import styles from './Ingredients.module.css';

function RecipeIngredients() {
   let ingredients = [
   '1 Tbsp butter or olive oil',
   '1 small onion diced',
   '2 to 3 cloves garlic diced',
   '1 Tbsp curry powder',
   '1/2 jalapeno finely diced',
   '1/4 inch fresh ginger grated',
   '1 large sweet potato peeled and diced',
   '2 cups vegetable broth',
   '1 can coconut milk',
   '2 Tbsp peanut butter',
   'cilantro chopped',
   'scallions chopped',
   '1/2 cup sour cream',
   'Salt and pepper to taste'
   ];
   
   return (
      <div>
         <h2>Ingredients</h2>
         <ul className = {styles.ingredientList}>
            {ingredients.map(item => <li>{item}</li>)}
         </ul>
      </div>
   );
}

export default RecipeIngredients;