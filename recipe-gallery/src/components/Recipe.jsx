export default function Recipe({ title, ingredients, image }){
    return (
        <div data-testid="recipe-card" className="recipe-wrapper">
            <h2 className="recipe-title">{title}</h2>
            <ul className="ingredients-list">
                {ingredients.map((ingredient) => (
                    <li className="ingredient-item">
                        {ingredient}
                    </li>
                ))}
            </ul>
            <img src={image} alt={title} className="ingredient-pic"/>
        </div>
    );
};