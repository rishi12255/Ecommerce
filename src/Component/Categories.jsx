import React from 'react';

function Categories() {
  return (
    <div className="px-4 max-w-screen-xl mx-auto">
    
      <div className="text-3xl sm:text-4xl font-bold flex justify-center items-center drop-shadow-lg my-8 text-center">
        Categories.
      </div>

     
      <div className="flex flex-wrap justify-center gap-10 sm:gap-16 md:gap-20 lg:gap-24 mt-10">
        <div className="flex flex-col items-center">
          <img src="burger.png" className="h-20 sm:h-24" alt="Fast Food" />
          <p className="font-bold mt-2 text-base sm:text-lg">Fast Food</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="food.png" className="h-20 sm:h-24" alt="Veg" />
          <p className="font-bold mt-2 text-base sm:text-lg">Veg</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="no-chicken.png" className="h-20 sm:h-24" alt="Non-Veg" />
          <p className="font-bold mt-2 text-base sm:text-lg">Non-Veg</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="soft-drink.png" className="h-20 sm:h-24" alt="Drinks" />
          <p className="font-bold mt-2 text-base sm:text-lg">Drinks</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="gelato.png" className="h-20 sm:h-24" alt="Desserts" />
          <p className="font-bold mt-2 text-base sm:text-lg">Desserts</p>
        </div>
      </div>

      
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4">
  <div className="bg-yellow-300 rounded-xl shadow-md flex flex-col items-center p-5 transition-shadow hover:shadow-xl cursor-pointer">
    <p className="mb-3 font-semibold text-lg">Burger</p>
    <img
      src="burger.jpg"
      alt="Burger"
      className="h-36 w-44 object-cover rounded-md"
    />
    <button className="mt-4 bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
      Order Now
    </button>
  </div>

  <div className="bg-yellow-300 rounded-xl shadow-md flex flex-col items-center p-5 transition-shadow hover:shadow-xl cursor-pointer">
    <p className="mb-3 font-semibold text-lg">Burger</p>
    <img
      src="burger.jpg"
      alt="Burger"
      className="h-36 w-44 object-cover rounded-md"
    />
    <button className="mt-4 bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
      Order Now
    </button>
  </div>

  <div className="bg-yellow-300 rounded-xl shadow-md flex flex-col items-center p-5 transition-shadow hover:shadow-xl cursor-pointer">
    <p className="mb-3 font-semibold text-lg">Burger</p>
    <img
      src="burger.jpg"
      alt="Burger"
      className="h-36 w-44 object-cover rounded-md"
    />
    <button className="mt-4 bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
      Order Now
    </button>
  </div>

  <div className="bg-yellow-300 rounded-xl shadow-md flex flex-col items-center p-5 transition-shadow hover:shadow-xl cursor-pointer">
    <p className="mb-3 font-semibold text-lg">Burger</p>
    <img
      src="burger.jpg"
      alt="Burger"
      className="h-36 w-44 object-cover rounded-md"
    />
    <button className="mt-4 bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
      Order Now
    </button>
  </div>
</div> */}

{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4">
  <div className="bg-yellow-300 rounded-xl shadow-md flex flex-col items-center p-5 transition-shadow hover:shadow-xl cursor-pointer">
    <p className="mb-3 font-semibold text-lg">Burger</p>
    <img
      src="burger.jpg"
      alt="Burger"
      className="h-36 w-44 object-cover rounded-md"
    />
    <button className="mt-4 bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
      Order Now
    </button>
  </div>

  <div className="bg-yellow-300 rounded-xl shadow-md flex flex-col items-center p-5 transition-shadow hover:shadow-xl cursor-pointer">
    <p className="mb-3 font-semibold text-lg">Burger</p>
    <img
      src="burger.jpg"
      alt="Burger"
      className="h-36 w-44 object-cover rounded-md"
    />
    <button className="mt-4 bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
      Order Now
    </button>
  </div>

  <div className="bg-yellow-300 rounded-xl shadow-md flex flex-col items-center p-5 transition-shadow hover:shadow-xl cursor-pointer">
    <p className="mb-3 font-semibold text-lg">Burger</p>
    <img
      src="burger.jpg"
      alt="Burger"
      className="h-36 w-44 object-cover rounded-md"
    />
    <button className="mt-4 bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
      Order Now
    </button>
  </div>

  <div className="bg-yellow-300 rounded-xl shadow-md flex flex-col items-center p-5 transition-shadow hover:shadow-xl cursor-pointer">
    <p className="mb-3 font-semibold text-lg">Burger</p>
    <img
      src="burger.jpg"
      alt="Burger"
      className="h-36 w-44 object-cover rounded-md"
    />
    <button className="mt-4 bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
      Order Now
    </button>
  </div>
</div> */}


    </div>
  );
}

export default Categories;
