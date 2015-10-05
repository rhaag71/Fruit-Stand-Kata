'use strict';

/**
 * @ngdoc function
 * @name fruitStandKataRobApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fruitStandKataRobApp
 */
angular.module('fruitStandKataRobApp')
	.controller('MainCtrl', function () {
		var main = this,
				price = 0;

		// init the objects
		main.items = [];
		main.cartItems = [];
		main.totalCost = [];
		main.cartBuffer = [];

		// assign our number vars with 0 value (init)
		main.cartTotal = 0;
		main.totalCost.limes = 0;
		main.totalCost.apples = 0;
		main.totalCost.bananas = 0;
		main.message = '';

		// setup our fruitTotals and give it a number assignment of 0
		main.fruitTotals = 
		{
			limes: 0,
			apples: 0,
			bananas: 0
		};

		// Form values
		main.items.quantity = 1; // default value
		main.items.fruit = "limes"; // default value

		main.fruitChoices = [ // dropdown items
			{name: 'limes'},
			{name: 'apples'},
			{name: 'bananas'}
		];

		main.fruitNames = [ // setup name mathching for priceCalc
			{limes: 'limes'},
			{apples: 'apples'},
			{banannas: 'bananas'}
		];

		/*
		 * price our products (limes based on quantity for price break calc)
		 */
		 main.priceCalc = function (fruitType, quantity) {
				switch (fruitType) {
					case "limes":
						if (quantity % 2 === 0) {
							price = (0.50).toFixed(2);
							main.message = '';
						} else {
							price = (0.60).toFixed(2);
							main.message = 'You can get a price break!! Limes bought in pairs will save $.10 each!';  
						}
						break;

					case "apples":
						price = (0.90).toFixed(2);
						break;

					case "bananas":
						price = (0.39).toFixed(2);
						break;

					default:
						price = (0).toFixed(2);
						break;
				}

				return parseFloat(price);
		};

		/*
		 * add to cart function
		 */
		main.addToCart = function (items) {
				// keep track of the total amount of item added to cart
				main.fruitTotals[items.fruit] = itemTotalCount(main.fruitTotals[items.fruit], items.quantity);
				// get price for the item
				price = main.priceCalc(items.fruit, main.fruitTotals[items.fruit]);
				// assign price to the view (use 'fruitNames' to pass the type of fruit to the priceCalc)
				main.fruitNames[items.fruit] = parseFloat(price);
				// get a total cost for the amount of items on line in cart
				main.totalCost[items.fruit] = (main.fruitTotals[items.fruit]) * price;
				// update the cart total
				totalUpCart(items.fruit);
		};

		/*
		 * function to add the line item totals
		 */
		var itemTotalCount = function (currentTotal, addedQuantity) {
			var current = parseFloat(currentTotal),
			    added = parseFloat(addedQuantity),
			    totaled = 0;

			    totaled = parseFloat(current + added);
			    return totaled;
		};

		/*
		 * keep running total of all items in cart
		 */
		var totalUpCart = function (itemName) {
			var summed = 0;

			// if the main.cartBuffer property is not defined yet then define it
			if (typeof main.cartBuffer[itemName] === 'undefined') {
					main.cartBuffer[itemName] = 0;
			}

			// assign the fruit's line total to the cartBuffer for summing the cart total
			main.cartBuffer[itemName] = parseFloat(main.totalCost[itemName]);

			// loop over the totals in the cartBuffer to get a cart total
			for (var key in main.cartBuffer) {
				summed += parseFloat(main.cartBuffer[key]);
			}

			// give the total to the view for cart display
			main.cartTotal = summed;
		};

	});






















