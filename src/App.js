import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Tagbar from "./Components/Tagbar";
import VideoContainer from "./Components/VideoContainer";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen min-w-full">
      <Sidebar />
      <div className="md:ml-16">
        <Header />
        <Tagbar />
        <VideoContainer />
      </div>
    </div>
  );
}

export default App;
