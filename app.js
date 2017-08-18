var dataController = (function(){
    var ingredients = {
    };
    
    
    
    function Ingredient(name, unit, unitPlural, price){
        this.name = name;
        this.unit = unit;
        this.unitPlural = unitPlural;
        this.price = price;
    }
    
    function recipeItem(ingredientObj, quantity){
        this.ingredientObj = ingredientObj;
        this.ingredientObj.quantity = quantity;
    }
    
    
    ingredients.apple = new Ingredient('Apple', '', '', 1.29);
    ingredients.avocado = new Ingredient('Avocado', '', '', 0);
    ingredients.banana = new Ingredient('Banana', '', '', 0);
    ingredients.romaine = new Ingredient('Romaine Lettuce', 'Cup', 'Cups', 0);
    ingredients.babySpinach = new Ingredient('Baby Spinach', 'Cup', 'Cups', 0);
    
    var recipes = {
    };
    
    recipes.GreenGorrilla = [(new recipeItem(ingredients.apple, 1)), (new recipeItem(ingredients.apple, 1)), (new recipeItem(ingredients.avocado, .5)), (new recipeItem(ingredients.banana, 1))];
    
    console.log(recipes.GreenGorrilla);
    
    var groceryList = [];
    
    function updateGroceryList(recipe){
var i = 0;
        console.log(recipe[0].name)
            recipe.forEach(function(cur){
                
                        if (!groceryList[0]){
            groceryList.push(recipe[0].ingredientObj);
                            console.log(recipe[0].ingredientObj.name);
                            i++;
        } else if (groceryList.indexOf(cur.ingredientObj) >= 0) {
            
            var groceryIndex = groceryList.indexOf(cur.ingredientObj);
            
                groceryList[groceryIndex].quantity += cur.ingredientObj.quantity;
                console.log(groceryList[groceryIndex].quantity);
            i++;
            
            
        } else {
            groceryList.push(cur.ingredientObj);
        }
    })
    }
    
    updateGroceryList(recipes.GreenGorrilla);
    return {
        ingredients: ingredients,
        recipes: recipes
    }
})();

var UIController = (function(){
    
})();

var appController = (function(dataCtrl, UICtrl){
    return{
        dataCtrl: dataCtrl
    }
})(dataController, UIController);



console.log(appController.dataCtrl.ingredients.apple.name);