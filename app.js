var dataController = (function(){
    var ingredients = {
        apple: new Ingredient('Apple', '', '', 1.29),
        avocado: new Ingredient('Avocado', '', '', 0),
        banana: new Ingredient('Banana', '', '', 0),
        romaine: new Ingredient('Romaine Lettuce', 'Cup', 'Cups', 0),
        babySpinach: new Ingredient('Baby Spinach', 'Cup', 'Cups', 0),
        garlic: new Ingredient('Garlic', 'Clove', 'Cloves', 0),
        kale: new Ingredient('Kale', 'Cup', 'Cups', 0),
        oregano: new Ingredient('Oregano', 'tsp', 'tsp', 0),
        dryMustard: new Ingredient('Dry Mustard', 'tsp', 'tsp', 0),
        nutritionalYeast: new Ingredient('Nutritional Yeast', 'Tbsp', 'Tbsp', 0),
        cornmeal: new Ingredient('Cornmeal', 'Cup', 'Cups', 0),
        blackBeans: new Ingredient('Black Beans', 'Cup', 'Cups', 0),
        oats: new Ingredient('Oats', 'Cup', 'Cups', 0),
        blueberries: new Ingredient('Blueberries', 'Cup', 'Cups', 0),
        raisins: new Ingredient('Raisins', 'Cup', 'Cups', 0),
        dates: new Ingredient('Date\(s\)', '', '', 0),
        walnuts: new Ingredient('Walnuts', 'Tbsp', 'Tbsp', 0),
        sunflowerSeeds: new Ingredient('Sunflower Seeds', 'Tbsp', 'Tbsp', 0),
        flaxSeeds: new Ingredient('Flaxseeds', 'Tbsp', 'Tbsp', 0)
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
    
    
    
    
    
    var recipes = {
        greenGorilla: [
            (new recipeItem(ingredients.apple, 1)), 
            (new recipeItem(ingredients.banana, 1)), 
            (new recipeItem(ingredients.avocado, .5)), 
            (new recipeItem(ingredients.romaine, 5)), 
            (new recipeItem(ingredients.babySpinach, 5))],
    
        polentaFrittata: [
            (new recipeItem(ingredients.garlic, 6)), 
            (new recipeItem(ingredients.kale, 4)), 
            (new recipeItem(ingredients.oregano, 1)), 
            (new recipeItem(ingredients.dryMustard, 1)), 
            (new recipeItem(ingredients.nutritionalYeast, 3)),
            (new recipeItem(ingredients.cornmeal, 1))],
        
        breakfastBars: [
            (new recipeItem(ingredients.blackBeans, 1)), 
            (new recipeItem(ingredients.banana, 1)), 
            (new recipeItem(ingredients.oats, 1)), 
            (new recipeItem(ingredients.blueberries, 1)), 
            (new recipeItem(ingredients.raisins, .25)),
            (new recipeItem(ingredients.dates, 2)),
            (new recipeItem(ingredients.walnuts, 1)),
            (new recipeItem(ingredients.sunflowerSeeds, 2)),
            (new recipeItem(ingredients.flaxSeeds, 2))],
        
        
    };
    
    console.log(recipes.greenGorilla);
    
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
    
    
    updateGroceryList(recipes.greenGorilla);
    updateGroceryList(recipes.polentaFrittata);
     updateGroceryList(recipes.breakfastBars);
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



