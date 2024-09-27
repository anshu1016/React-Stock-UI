import ChartNav from "./components/ChartNav";
import Graphs from "./components/Graphs";
import { Navigation } from "./components/Navigation";
import { Top } from "./components/top";

const App = () => {
  return (
    <div className="container mx-auto max-w-[1000px] h-[100vh]  bg-white border border-red-200">
      <Top />
      <Navigation />
      <ChartNav />
      <Graphs />
    </div>
  );
};

export default App;
