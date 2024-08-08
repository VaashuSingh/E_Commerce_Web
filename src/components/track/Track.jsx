import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import { track } from "../../constants";

function Track() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-5  mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {track.map((item, index) => {
              return (
                <div className="p-4 md:w-1/3 sm:w-1/2 w-full" key={index}>
                  <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg dark-mode-6 text-light-mode-1">
                    <svg
                      className="text-pink-600 w-12 h-12 mb-3 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>

                    <h2 className="title-font font-medium text-lg text-gray-900 text-light-mode-1">
                      {item.name}
                    </h2>
                    <p className="leading-relaxed">{item.description}</p>
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

export default Track;
