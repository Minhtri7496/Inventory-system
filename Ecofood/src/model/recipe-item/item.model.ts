import { Url } from "url";

export interface RecipeItem {
    $key?: string;
    title: string;
    description: string;
    preptime: string;
    cookingtime: string;
    totaltime: string;
    image: Url;
    stepinput: number;
    recipeNumber: Number;
    ingredientNumber:Number;

    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    step6: string;
    step7: string;
    step8: string;
    step9: string;
    step10: string;
    step11: string;
    step12: string;
    step13: string;
    step14: string;
    step15: string;


    ingredient1:string;
    keyingredient1:string;
    amountingredient1:string;

    ingredient2:string;
    keyingredient2:string;
    amountingredient2:string;

    ingredient3:string;
    keyingredient3:string;
    amountingredient3:string;

    ingredient4:string;
    keyingredient4:string;
    amountingredient4:string;

    ingredient5:string;
    keyingredient5:string;
    amountingredient5:string;

    ingredient6:string;
    keyingredient6:string;
    amountingredient6:string;

    ingredient7:string;
    keyingredient7:string;
    amountingredient7:string;

    ingredient8:string;
    keyingredient8:string;
    amountingredient8:string;

    ingredient9:string;
    keyingredient9:string;
    amountingredient9:string;

    ingredient10:string;
    keyingredient10:string;
    amountingredient10:string;


}