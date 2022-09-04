import vodnoDrone from "../assets/VodnoDrone.mov";
import SearchBar from "./SearchBar";
import searchData from "./data"

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={vodnoDrone}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>
          The Capital of <span className="text-red-600">Macedonia</span>
        </h1>
        <h2 className="py-4">The City of history, solidarity & diversity</h2>
        <SearchBar placeholder="Type a location in Skopje" data={searchData} />
      </div>
    </div>
  );
};

export default Hero;
