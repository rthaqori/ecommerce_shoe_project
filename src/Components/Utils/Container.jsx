import React from "react";

const Container = ({ children }) => {
  return (
    <div className="m-0 flex max-w-7xl flex-col items-center p-0">
      {children}
    </div>
  );
};

export default Container;
