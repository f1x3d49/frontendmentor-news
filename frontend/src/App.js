import ArticleComponent from "./components/ArticleComponent";
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import retropc from "./images/image-retro-pcs.jpg";
import gaminggrowth from "./images/image-gaming-growth.jpg";
import toplaptops from "./images/image-top-laptops.jpg";

function App() {
  return (
    <div className="overflow-x-hidden md:grid md:grid-cols-3 md:gap-8 md:overlfow-hidden w-screen h-screen font-inter px-5 py-8 md:px-36 md:py-12">
      <Navbar />
      <div className="w-full h-96 bg-mobile-image bg-cover md:bg-desktop-image md:col-span-2 md:row-start-2 md:row-span-1"></div>

      <div className="w-full h-auto mt-8 md:col-start-1 md:col-span-1">
        <h1 className="text-6xl font-bold text-[#00001a] whitespace-pre-wrap">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <div className="flex flex-col justify-start">
        <div className="mt-8 w-full text-[15px] text-[#5d5f79] md:col-start-2 md:col-span-1">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
        </div>
        {/* READ MORE Button*/}
        <button className="w-1/2 h-10 bg-[#f15e50] hover:bg-[#00001a] mt-8 md:mt-16 text-sm font-bold text-[#fffdfa] tracking-[.25rem]">
          READ MORE
        </button>
      </div>
      <NewsComponent />
      <div className="md:flex md:col-span-3">
        <ArticleComponent
          image={retropc}
          number="01"
          title="Reviving Retro PCs"
          content="What happens when old PCs are given modern upgrades?"
        />
        <ArticleComponent
          image={gaminggrowth}
          number="02"
          title="Top 10 Laptops of 2022"
          content="Our best picks for various needs and budgets."
        />
        <ArticleComponent
          image={toplaptops}
          number="03"
          title="The Growth of Gaming"
          content="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </div>
  );
}

export default App;
