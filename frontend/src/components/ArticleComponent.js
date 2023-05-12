import React from "react";

const ArticleComponent = ({ image, number, title, content }) => {
  return (
    <div className="flex gap-4 mt-8 hover:cursor-pointer w-full h-1/6 ">
      <img
        src={image}
        alt={`img ${number}`}
        className="w-28 h-36 object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 ">
        <h1 className="text-2xl font-bold text-[#c5c6ce]">{number}</h1>
        <h2 className="text-lg font-bold text-[#00001a] hover:cursor-pointer hover:text-[#f15e50]">
          {title}
        </h2>
        <p className="text-sm text-[#5d5f79]">{content}</p>
      </div>
    </div>
  );
};

export default ArticleComponent;
