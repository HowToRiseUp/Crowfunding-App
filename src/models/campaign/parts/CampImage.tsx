import React from "react";

const CampImage = ({ className = "h-[158px]", image = 'https://i.pinimg.com/564x/fa/89/c6/fa89c65a15f925dfc18adda3ddae1607.jpg' }) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
