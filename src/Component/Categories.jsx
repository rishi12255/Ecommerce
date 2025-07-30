import React, { useState } from "react";

const icons = [
  { name: "All", src: "./Icons/pizza1.png" },
  { name: "Breakfast", src: "./Icons/breakfast.png" },
  { name: "Snack", src: "./Icons/snack.png" },
  { name: "Lunch", src: "./Icons/hamburger.png" },
  { name: "Dessert", src: "./Icons/ice-cream.png" },
  { name: "Dinner", src: "./Icons/noodle.png" },
  { name: "Beverage", src: "./Icons/drink.png" },
];

const Categories = ({ mainData, setProductData, scrollToMenuRef }) => {
  const [pick, setPick] = useState("");

  const setCategories = (category) => {
    setPick(category);

    if (category === "All") {
      setProductData(mainData);
    } else {
      // FILTER: only items whose FIRST mealType matches category exactly
      const filtered = mainData.filter(
        (item) =>
          item.mealType?.[0]?.toLowerCase() === category.toLowerCase()
      );
      setProductData(filtered);
    }

    // Optional: Scroll to product section after click
    if (scrollToMenuRef?.current) {
      scrollToMenuRef.current.scrollIntoView({ behavior: "smooth" });
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
              className={`p-3 rounded-full border-2 shadow-md transition-transform duration-300
                ${
                  pick === item.name
                    ? "border-green-600 bg-green-100"
                    : "border-gray-300 bg-white hover:bg-red-100 hover:border-red-500"
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
                ${
                  pick === item.name
                    ? "text-green-600"
                    : "text-gray-700 group-hover:text-red-500"
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
