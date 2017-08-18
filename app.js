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
    ingredients.garlic = new Ingredient('Garlic', 'Clove', 'Cloves', 0);
    ingredients.kale = new Ingredient('Kale', 'Cup', 'Cups', 0);
    ingredients.oregano = new Ingredient('Oregano', 'tsp', 'tsp', 0);
    ingredients.dryMustard = new Ingredient('Dry Mustard', 'tsp', 'tsp', 0);
    ingredients.nutritionalYeast = new Ingredient('Nutritional Yeast', 'Tbsp', 'Tbsp', 0);
    ingredients.cornmeal = new Ingredient('Cornmeal', 'Cup', 'Cups', 0);
    
    
    var recipes = {
    };
    
    recipes.GreenGorrilla = [(new recipeItem(ingredients.apple, 1)), (new recipeItem(ingredients.banana, 1)), (new recipeItem(ingredients.avocado, .5)), (new recipeItem(ingredients.romaine, 5)), (new recipeItem(ingredients.babySpinach, 5))];
    
    recipes.PolentaFrittata = [
        (new recipeItem(ingredients.garlic, 6)), 
        (new recipeItem(ingredients.kale, 4)), 
        (new recipeItem(ingredients.oregano, 1)), 
        (new recipeItem(ingredients.dryMustard, 1)), 
        (new recipeItem(ingredients.nutritionalYeast, 3)),
        (new recipeItem(ingredients.cornmeal, 1))];
    
    console.log(recipes.GreenGorrilla);
    
    var groceryList = [];
    
    function updateGroceryList(recipe){
        var i = 0;
        var updateQuantity = 0;
        var addIngredient = 0;
        
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
                updateQuantity++;
                
            } else {
                addIngredient++;
                groceryList.push(cur.ingredientObj);
            };
            
        });
        console.log('Update quantity run ' + updateQuantity + ' times.');
            console.log('Add ingredient run ' + addIngredient + ' times.');
        console.log(groceryList);
    };
    
    
    
    function compileList(groceryArray){
        groceryArray.forEach(function(cur){
            var unitType;
            
            if(cur.quantity > 1){
            unitType = cur.unitPlural;    
            } else {
                unitType = cur.unit;
            };
            
            console.log(cur.quantity + ' ' + unitType + ' ' + cur.name)
        })
    };
    
    
    updateGroceryList(recipes.GreenGorrilla);
    updateGroceryList(recipes.PolentaFrittata);
     updateGroceryList(recipes.PolentaFrittata);
    compileList(groceryList);
    
    
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



