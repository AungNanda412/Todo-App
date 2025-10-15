import React from "react";

const IsList = () => {
  return (
    <div className="hidden last:flex flex-col items-center py-10">
      <img width={150} className="mb-5" src="/empty.svg" />
      <p className="text-sm">There is no list.</p>
    </div>
  );
};

export default IsList;
