import React from "react";

export default function FilterButton() {
  return (
    <div>
          <button type="button" className="filter-btn">
            <span className="flex items-center px-6">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation"
                style={{
                  display: "block",
                  width: 14,
                }}
              >
                <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
              <span className="t1o11edy dir dir-ltr">Filters</span>
            </span>
          </button>
    </div>
  );
}
