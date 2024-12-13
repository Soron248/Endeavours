import React from "react";

export const ServicesDetailsFaq = ({ accordion }) => {
  return (
    <div className="accordion-wrap-three">
      <div className="accordion" id="accordionExample">
        {accordion &&
          accordion.map((a, i) => {
            // Ensure `a.id` is a valid selector by prefixing it with 'collapse'
            const collapseId = `collapse${a.id}`;
            // Set the first item to be open by default
            const isFirstItem = i === 0;
            
            return (
              <div className="accordion-item" key={a.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`} // Updated to use the prefixed id
                    aria-expanded={isFirstItem ? "true" : "false"} // Open the first item
                    aria-controls={collapseId} // Updated here as well
                  >
                    {a.name}
                  </button>
                </h2>
                <div
                  id={collapseId} // Ensure the ID is correctly assigned
                  className={`accordion-collapse collapse ${isFirstItem ? "show" : ""}`} // Open the first item
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
