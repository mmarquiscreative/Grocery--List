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
    
    var recipeQueue = [];
    var holdingQueue = [];
    var groceryList = [];
    
    
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
    

    
    function updateGroceryList(recipe){
        var i = 0;
        var updateQuantity = 0;
        var addIngredient = 0;
        console.log('updateGroceryList running. Grocery list is currently: ' + groceryList);
        console.log('holdingqueue within updateGroceryList is ' + holdingQueue);
       
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
    };
    
    function combineRecipes(){
        
        recipeQueue.forEach(function(cur){
            cur.forEach(function(cur){
                holdingQueue.push(cur);
            });
            console.log('holding queue total is: ' + holdingQueue);
        });
        
    }
    
    function compileList(groceryArray){
        groceryArray.forEach(function(cur){
            var unitType;
            
            if(cur.quantity > 1){
                unitType = cur.unitPlural;    
            } else {
                unitType = cur.unit;
            };
            
            console.log(cur.quantity + ' ' + unitType + ' ' + cur.name)
        });
    };
    
    function clearHoldingQueue(){
        holdingQueue = [];
    }
    
    return {
        ingredients: ingredients,
        recipes: recipes,
        groceryList: groceryList,
        recipeQueue: recipeQueue,
        combineRecipes: combineRecipes,
        compileList: compileList,
        holdingQueue: holdingQueue,
        updateGroceryList: updateGroceryList,
        clearHoldingQueue: clearHoldingQueue
    }
})();

var UIController = (function(){
    var HTMLstrings = {
        HTMLelementIDs:{
            recipeChoices: '#recipeChoices',
            recipeList: '#recipeList',
            recipeBtns: '#recipeBtns',
            groceryList: '#groceryList'
        },
        recipeNames: {
            greenGorilla: 'Green Gorilla (smoothie)',
            
        },
        HTMLcode: {
            recipeList1: '<div class="" id=""><p>',
            recipeList2: '</p></div>'
        }
    };
    
function addListItem(listID, inputArray){
    inputArray.forEach(function(cur){
        var currentList = document.querySelector(listID).innerHTML;
        
        currentList += ('<li>' + cur.quantity + ' ' +cur.unit + ' ' + cur.name + '</li>');
        document.querySelector(listID).innerHTML = currentList;
        console.log(currentList);
        console.log(cur.name);
    });
};
    
function addNewRecipeBtn(name, object){
    document.querySelector(HTMLstrings.HTMLelementIDs.recipeChoices).child
};
    
    
function innerHTML(target, newHTML){
    var curHTML = document.querySelector(target).innerHTML
    document.querySelector(target).innerHTML = curHTML + newHTML;
};    
    return {
        HTMLstrings: HTMLstrings,
        addListItem: addListItem,
        innerHTML: innerHTML
    }
})();

var appController = (function(dataCtrl, UICtrl){
function updateGroceryListUI(){
        UICtrl.addListItem(UICtrl.HTMLstrings.HTMLelementIDs.groceryList, dataCtrl.groceryList);
    };

function clearGroceryListUI(){
    document.querySelector(UICtrl.HTMLstrings.HTMLelementIDs.groceryList).innerHTML = '';
}    
    
function updateRecipeList(whichRecipe){
    clearGroceryListUI();
    console.log('running updateRecipeList'); 
    console.log(whichRecipe);
    // 1. Update Recipe UI
   var recipeString = (UICtrl.HTMLstrings.HTMLcode.recipeList1 + whichRecipe + UICtrl.HTMLstrings.HTMLcode.recipeList2);
    UICtrl.innerHTML(UICtrl.HTMLstrings.HTMLelementIDs.recipeList, recipeString);
    
    // 2. Add recipe to recipe queue
    dataCtrl.recipeQueue.push(dataCtrl.recipes[whichRecipe]);
    
    
    // 3. Update groceryList
    dataCtrl.combineRecipes();
    
    // 4. Update Grocery List UI
    dataCtrl.updateGroceryList(dataCtrl.holdingQueue);
    updateGroceryListUI();
    dataCtrl.compileList(dataCtrl.groceryList);
        /* UICtrl.addListItem('#recipeList', dataCtrl.groceryList);*/
    console.log(dataCtrl.recipeQueue);
    console.log(dataCtrl.holdingQueue);
    dataCtrl.clearHoldingQueue();
    };
    
    function init(){
        document.querySelector(UICtrl.HTMLstrings.HTMLelementIDs.recipeBtns).addEventListener('click', function(){
            updateRecipeList(event.target.id);
        });
    };
    return{
        dataCtrl: dataCtrl,
        updateGroceryListUI: updateGroceryListUI,
        updateRecipeList: updateRecipeList,
        init: init
    }
})(dataController, UIController);


appController.init();


