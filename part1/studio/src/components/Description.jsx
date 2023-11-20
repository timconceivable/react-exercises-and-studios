import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor () {
   let authorLink = "https://www.leannebrown.com/";
   let authorPhoto = "https://www.leannebrown.com/wp-content/themes/openkitchen/images/leanne-1x.jpg";
   let authorName = "Leanne Brown";

   return (
      <div className = {styles.recipeAuthorBlock}>
         <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
         <figcaption>Recipe by: <a href={authorLink}>{authorName}</a></figcaption> 
      </div>
   );
}

let recipeTitle = "Curried Sweet Potato Soup";
let recipeDescription = `January makes me want to eat soup. Actually even more than eating soup it makes me want to make soup. This curried sweet potato soup is from my first cookbook, From Scratch. It’s super hearty and satisfying, and the thick texture makes it feel like it’s really sticking to your ribs! But since January is, for so many, a time to focus on eating more vegetables and generally taking care of our health, this soup also fits the health bill. It’s basically a pot of puréed vegetables, but you will feel a lot more full (and warm!) than if you just drank a bunch of green juice. 
\n
I highly recommend adding the peanut butter (or you could use other nut butters) for extra creaminess. Then it almost has an West African peanut stew quality to it. So yummy.`;

class RecipeDescription extends React.Component {
   render() {
      return (
         <div> 
            <h1>{recipeTitle}</h1>
            <RecipeAuthor />
            <div className="description">
               <p>{recipeDescription}</p>
               
            </div>
         </div>
      );
   }
}

export default RecipeDescription;