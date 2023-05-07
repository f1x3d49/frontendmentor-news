import React from "react";

const NewsComponent = () => {
  return (
    <div className="flex flex-col gap-8 p-5 mt-8 max-w-auto h-auto bg-[#00001a]">
      <h1 className="text-3xl text-[#e9ab53] font-bold">New</h1>
      <div className="border-b border-b-[#5d5f79]">
        <h1 className="text-lg text-[#fffdfa] font-bold">
          Hydrogen VS Electric Cars
        </h1>
        <p className="text-[15px] text-[#5d5f79] w-3/4 mt-2 mb-5">
          Will hydrogen-fueld cars ever catch up to EVs?
        </p>
      </div>
      <div className="border-b border-b-[#5d5f79]">
        <h1 className="text-lg text-[#fffdfa] font-bold">
          The Downsides of AI Artistry
        </h1>
        <p className="text-[15px] text-[#5d5f79] w-full mt-2 mb-5">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div>
        <h1 className="text-lg text-[#fffdfa] font-bold">
          Is VC Funding Drying Up?
        </h1>
        <p className="text-[15px] text-[#5d5f79] w-full mt-2">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};

export default NewsComponent;
