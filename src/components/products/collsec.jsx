import ProductCard from "./ProductCard";

const ProductCollectionSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-light-mode-1">
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductCollectionSection;
