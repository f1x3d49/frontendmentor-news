import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";

function App() {
  return (
    <div className="overflow-x-hidden md:overlfow-hidden w-screen h-screen font-inter px-5 py-8 md:px-36 md:py-12">
      <Navbar />
      <div className="w-full h-96 bg-mobile-image bg-cover md:bg-desktop-image"></div>

      <div className="w-full h-auto mt-8">
        <h1 className="text-6xl font-bold text-[#00001a] whitespace-pre-wrap">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <div className="mt-8 text-[15px] text-[#5d5f79]">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
      </div>
      {/* READ MORE Button*/}
      <button className="w-1/2 h-10 bg-[#f15e50] mt-8 text-sm font-bold text-[#fffdfa] tracking-[.25rem]">
        READ MORE
      </button>
      <NewsComponent />
    </div>
  );
}

export default App;
