import { Fragment } from "react";

type Ingredient = {
    name: string;
    amount: string;
};

const ingredients: Ingredient[] = [
    { name: "ひよこ豆", amount: "1缶" },
    { name: "アボカド", amount: "1個" },
    { name: "トルティーヤ", amount: "4枚" },
    { name: "サルサソース", amount: "適量" },
    { name: "レタス", amount: "適量" },
    { name: "チーズ", amount: "適量" },
];

export default function IngredientList() {
    return (
        <div>
            <h2 className="w-auto text-2xl font-bold mb-4 border-b-2 border-gray-300">
                材料
            </h2>
            <dl className="grid grid-cols-2 gap-4 mb-8 ">
                {ingredients.map((ingredient, index) => (
                    <Fragment key={index}>
                        <dt>{ingredient.name}</dt>
                        <dd className="text-right">{ingredient.amount}</dd>
                    </Fragment>
                ))}
            </dl>
        </div>
    );
}
