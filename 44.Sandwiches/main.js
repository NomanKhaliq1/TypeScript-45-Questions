"use strict";
function make_sandwich(sandwichName, ...items) {
    console.log(`${sandwichName}:`);
    items.forEach((item) => console.log(`- ${item}`));
}
make_sandwich("Chicken Tikka Sandwich", "grilled chicken tikka", "mint chutney", "onions", "lettuce");
make_sandwich("Bun Kebab", "beef or chicken kebab patty", "egg", "onions", "ketchup", "cucumber", "chutney");
make_sandwich("Anda Shami Burger", "shami kebab", "fried egg", "onions", "tomato ketchup", "cucumber");
make_sandwich("Seekh Kebab Roll", "seekh kebab", "onions", "green chutney", "paratha");
make_sandwich("Chapli Kebab Sandwich", "chapli kebab", "tomatoes", "onions", "chutney", "lettuce");
make_sandwich("Aloo Keema Sandwich", "aloo keema", "coriander leaves", "green chilies");
