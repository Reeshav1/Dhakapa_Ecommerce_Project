import React from "react";

const CategoryCard = ({ props }) => {
  return (
    <div>
      <div className="h-[104px] w-[104px] rounded bg-gray-400/30 ">
        <img
          src={props.image}
          alt={props.name}
          className="h-full w-full object-contain scale-100"
        />
      <p className=" text-center font-semibold mt-2">
        {props.name}
      </p>
      </div>  
    </div>
  );
};

export default CategoryCard;