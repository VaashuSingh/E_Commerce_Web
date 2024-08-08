import React from "react";
import { testimonial } from "../../constants";

function Testimonial() {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1 className=" text-center text-3xl font-bold text-black text-light-mode-1">
            Testimonial
          </h1>
          <h2 className=" text-center text-2xl font-semibold mb-10 text-light-mode-1">
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            {testimonial.map((item, index) => {
              return (
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" key={index}>
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={item.image}
                    />
                    <p className="leading-relaxed text-light-mode-1">
                      {item.description}
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase text-light-mode-2">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-light-mode-1">
                      {item.position}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
