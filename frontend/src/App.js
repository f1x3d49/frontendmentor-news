import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col gap-8 justify-center w-screen h-screen font-inter px-5 py-8 md:px-36 md:py-12">
      <Navbar />
      <div className="w-full h-96 bg-mobile-image bg-cover md:bg-desktop-image"></div>

      <div className="w-full h-64 bg-red-500">
        <h1 className="text-6xl font-bold text-[#00001a] whitespace-pre-wrap">
          The Bright Future of Web 3.0?
        </h1>
      </div>
    </div>
  );
}

export default App;
