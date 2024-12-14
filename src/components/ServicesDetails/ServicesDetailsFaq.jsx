import React from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid

export const ServicesDetailsFaq = ({ accordion }) => {
  return (
    <div className="accordion-wrap-three">
      <div className="accordion" id="accordionExample">
        {accordion &&
          accordion.map((a, i) => {
            // Generate a unique ID using uuid
            const collapseId = `collapse-${uuidv4()}`;
            const isFirstItem = i === 0; // Open the first item by default

            return (
              <div className="accordion-item" key={a.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={isFirstItem ? "true" : "false"}
                    aria-controls={collapseId}
                  >
                    {a.name}
                  </button>
                </h2>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${isFirstItem ? "show" : ""}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>{a.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
