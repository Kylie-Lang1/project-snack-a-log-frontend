import About from "../Components/About";
import Chris from "../Components/Chris";
import Fadila from "../Components/Fadila";
import Kylie from "../Components/Kylie";
import Tony from "../Components/Tony";

function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center w-2/3 relative left-96 p-4">
        <h2 className="text-6xl">Welcome to Snack-A-Log App</h2>
        <h3 className="text-5xl text-orange-500">About App</h3>
        <About />
      </div>
      <div className="flex flex-col justify-center items-center gap-10 p-4">
        <h3 className="text-5xl text-orange-500">About Developers</h3>
        <div className="flex justify-center items-center gap-10 px-4">
          <Chris />
          <Kylie />
          <Tony />
          <Fadila />
        </div>
      </div>
    </div>
  );
}

export default Home;
