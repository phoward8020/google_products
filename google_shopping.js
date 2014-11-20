var data = require("./products.json")

// Write your solutions below

var itemsLength = data.items.length;
var shoppingProductCount = 0;

for (var i = 0; i < itemsLength ; i++) {
    if (data.items[i].kind === "shopping#product") {
        shoppingProductCount += 1;
    };
}

console.log("There are " + shoppingProductCount + " items with the kind 'shopping#prodcut'");
console.log('');

// ###
var backorderCount = 0;
//console.log(data.items[0].product.inventories[0].availability);

for (var i = 0; i < itemsLength ; i++) {

    var inventoriesLength = data.items[i].product.inventories.length;

    for (var j = 0; j < inventoriesLength ; j++) {
        if (data.items[i].product.inventories[j].availability === "backorder") {
            backorderCount += 1;
            console.log(data.items[i].product.googleId);
        };
    
    };

};

console.log('There are ' + backorderCount + ' items with an inventory availability of "backorder"');
console.log('');

var imageCount = 0;

for (var i = 0; i < itemsLength ; i++) {
    if (data.items[i].product.images.length > 1) {
        imageCount += 1;
        console.log(data.items[i].product.googleId);
    };
};

console.log('There are ' + imageCount + ' items with more than one image.');
console.log('');

// 4. Find all `canon` products in the items (careful with case sensitivity).

var canonCount = 0;

for (var i = 0; i < itemsLength ; i++) {
    if (data.items[i].product.brand.toUpperCase() === "CANON") {
            canonCount += 1;
            console.log(data.items[i].product.googleId);
    };
};

console.log('There are ' + canonCount + ' Canon-brand items.');
console.log('');

// 5. Find all `items` that have **product** **author** **name** of "eBay" 
//    and are brand "Canon".

var ebayCanonCount = 0;

for (var i = 0; i < itemsLength ; i++) {
    if (data.items[i].product.brand.toUpperCase() === "CANON" && 
        data.items[i].product.author.name.toUpperCase().indexOf('EBAY')) {
            ebayCanonCount += 1;
            console.log(data.items[i].product.googleId);
    };
};

console.log('There are ' + ebayCanonCount + ' Canon-brand items from Ebay.');
console.log('');

// Print all the products with their **brand**, **price**, and an 
// **image link**

console.log('-----------------------------------------------------');
console.log('ALL ITEMS IN DATA:');
console.log('-----------------------------------------------------');

for (var i = 0; i < itemsLength ; i++) {

    console.log(data.items[i].product.googleId);
    console.log(data.items[i].product.brand);

    inventoriesLength = data.items[i].product.inventories.length;
    for (var j = 0; j < inventoriesLength; j++) {
        console.log('\tchannel: ' + data.items[i].product.inventories[j].channel);
        console.log('\tprice: ' + data.items[i].product.inventories[j].price);
    };

    imagesLength = data.items[i].product.images.length;
    for (var k = 0; k < imagesLength; k++) {
        console.log('\timage: ' + data.items[i].product.images[k].link);
    };

    console.log('-----------------------------------------------------');
};