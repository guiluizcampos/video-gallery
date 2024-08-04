import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { WatchVideo } from "./pages/WatchVideo";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/watch/:videoId" element={ <WatchVideo /> } />
    </Routes>
  );
}

export default App;
