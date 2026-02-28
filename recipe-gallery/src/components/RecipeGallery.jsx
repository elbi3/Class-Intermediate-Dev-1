import recipes from "../data/recipeData.js";
import Recipe from "./Recipe.jsx";
export default function RecipeGallery(){

    let recipeList = recipes;

    console.log("recipeList: ", recipeList);

    return(
        <section className="gallery">
            {recipeList.map((recipe)=>
                <Recipe 
                    key={recipe.id}
                    title={recipe.title} 
                    ingredients={recipe.ingredients} 
                    image={recipe.image}
                />
            )}
        </section>
    );
};

