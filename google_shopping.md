# Google Shopping Lab
## Conditionals and Loops

## Instructions:

Use the product search result in your file to check the following:

### 1.) The `kind` of results you're are dealing  are `shopping#products`. Go through the `items` and find all results that have `kind` of `shopping#product`. How many are there? 

$ grep "shopping#product\"," products.json -c
25

### 1b.) Where else is this count information stored in the search results?

data.currentItemCount


### 2.) Find all items with a `backorder` availability in `inventories`.

$ grep "backorder\"," products.json -c
2


### 3.) Find all items with more than one image link.




### 4.) Find all `canon` products in the items (careful with case sensitivity).

5.) Find all `items` that have **product** **author** **name** of "eBay" and are brand "Canon".

6.) Print all the products with their **brand**, **price**, and a **image link**