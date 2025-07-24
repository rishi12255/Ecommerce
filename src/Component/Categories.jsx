import React, { useState } from "react";

const icons = [
  { name: "All", src: "./Icons/pizza1.png" },
  { name: "Lunch", src: "./Icons/hamburger.png" },
  { name: "Dessert", src: "./Icons/ice-cream.png" },
  { name: "Dinner", src: "./Icons/noodle.png" },
  { name: "Beverage", src: "./Icons/drink.png" },
];

const Categories = ({ mainData, setProductData }) => {
  const [pick, setPick] = useState("All");

  const setCategories = (category) => {
    setPick(category);
    if (category === "All") {
      setProductData(mainData);
    } else {
      const filtered = mainData.filter((item) => item.mealType[0] === category);
      setProductData(filtered);
    }
  };

  return (
    <div className="my-10 px-4 sm:px-6 md:px-10">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        🍽️ Choose Your Category
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 lg:gap-20">
        {icons.map((item) => (
          <div
            key={item.name}
            onClick={() => setCategories(item.name)}
            className="flex flex-col items-center cursor-pointer group transition-all duration-300"
          >
            <div
              className={`p-3 rounded-full border-2 bg-white shadow-md transition-transform duration-300
          text-gray-600 group-hover:text-orange-500 ${
  pick === item.name ? "text-gray-500" : ""
}
`}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              />
            </div>
            <p
              className={`mt-3 text-sm sm:text-base font-semibold transition-colors
          text-gray-600 group-hover:text-orange-500 ${
  pick === item.name ? "text-gray-500" : ""
}
`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
