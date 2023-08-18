import React from "react";
let renderCount = 0;

export default () => {
    renderCount++;

    return (
        <div style={{ marginBottom: 10 }}>
        <h1 className="h1">
          Character Stats
        </h1>
        <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
          Changes are stored on the server when you save your character
        </p>
      </div> 
    );
};