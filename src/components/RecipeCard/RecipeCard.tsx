import style from "./RecipeCard.module.css";
// import MacroFacts from "./MacroFacts";

type Macro = {
  label: string;
  total: number;
  id: string;
};

type Ingredient = {
  text: string;
};

type RecipeCardProps = {
  title: string;
  type?: string[];
  image: string;
  calories: number;
  macros: Macro[];
  ingredients: Ingredient[];
  servings: number;
};

const RecipeCard = ({
  title,
  image,
  calories,
  macros,
  ingredients,
  servings,
}: RecipeCardProps) => {
  return (
    <div className={style.recipeCard}>
      <div className={style.recipeContainer}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.recipeMedia}>
          <img className={style.img} src={image} alt={"Image of " + title} />
          <p className={style.serving}>
            <b>Serving size: </b>
            {servings}
          </p>
          <p>
            <b>Calories: </b>
            {Math.round(calories)}
          </p>
          {/* <ul className={style.macroList}>
            {macros.map((macro) =>
              macro.label === "Fat" ||
              macro.label === "Carbs" ||
              macro.label === "Protein" ? (
                <li>
                  <MacroFacts
                    calories={calories}
                    macro={macro.label}
                    total={macro.total}
                    key={macro.id}
                  />{" "}
                </li>
              ) : null,
            )}
          </ul> */}
        </div>
        <div className={style.recipeContent}>
          <p className={style.subheading}>Ingredients:</p>
          <ul className={style.ingredientList}>
            {ingredients.map((ingredient, index) => (
              <li key={index} className={style.ingredientItem}>
                {ingredient.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
