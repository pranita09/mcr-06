import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Home } from "./pages/Home";
import { SingleRestaurent } from "./pages/SingleRestaurent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/restaurent/:restaurentId"
          element={<SingleRestaurent />}
        />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "5rem",
        }}
      />
    </div>
  );
}

export default App;
