"use client";

import React, { CSSProperties } from "react";

const WebsiteBy: React.FC = () => {
  const underlineAnimationStyles: CSSProperties = {
    position: "relative",
    color: "inherit",
    textDecoration: "none",
  };

  const underlineAfterStyles: CSSProperties = {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "1px",
    bottom: "0",
    left: "0",
    backgroundColor: "currentColor",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
    transition: "transform 0.25s ease-out",
  };

  const underlineHoverAfterStyles: CSSProperties = {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  };

  return (
    <div className="py-4">
      {/* WebsiteBy Text Section */}
      <div className="text-center">
        <p style={{ fontSize: "13px" }}>
          Website by{" "}
          <a
            href="https://carlosreinoso.co.uk/web-dev"
            style={underlineAnimationStyles}
            onMouseEnter={(e) => {
              const after = e.currentTarget.querySelector("span");
              if (after) Object.assign(after.style, underlineHoverAfterStyles);
            }}
            onMouseLeave={(e) => {
              const after = e.currentTarget.querySelector("span");
              if (after) after.style.transform = "scaleX(0)";
            }}
          >
            Carlos Reinoso
            <span
              style={{
                ...underlineAfterStyles,
                position: "absolute",
                bottom: "-2px",
                display: "block",
              }}
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default WebsiteBy;
