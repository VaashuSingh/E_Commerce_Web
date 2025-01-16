import { productsCardCollection } from "../../constants";

const ProductCard = () => {
  return (
    <div className="flex flex-wrap -m-4">
      {productsCardCollection.map((item, index) => {
        return (
          <div className="p-4 lg:w-1/5 md:w-1/4 drop-shadow-lg" key={index}>
            <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden dark-mode-6">
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-60 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                  //   src="https://dummyimage.com/720x400"
                  src={item.image}
                  alt="blog"
                />
              </div>
              <div className="p-3 border-t-2">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 light-mode-1">
                  E-Bharat
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 light-mode-1">
                  {item.name}
                </h1>
                <p className="leading-relaxed mb-3 light-mode-1">
                  ₹{item.price}
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
