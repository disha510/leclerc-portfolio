import { useState } from "react";
import { timelineData } from "../data/timeline";

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="timeline" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-red-600">
        Career Timeline
      </h2>
      <div className="relative max-w-4xl mx-auto border-l-4 border-red-600">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="text-red-600 font-bold">{item.year}</span>
            <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
            <p className="text-gray-700 mt-1">{item.description}</p>

            
            <button
              onClick={() =>
                setOpenIndex(index === openIndex ? null : index)
              }
              className="mt-2 text-red-600 font-medium hover:underline"
            >
              {openIndex === index ? "Hide Image" : "Show Image"}
            </button>

            {openIndex === index && (
              <img
                src={item.image}
                alt={item.title}
                className="mt-2 rounded shadow-md max-w-full"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
