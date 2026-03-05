import Sidebar from "../shared/components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "20px", flex: 1 }}>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/my-ads" element={<h1>My Ads Page</h1>} />
          <Route path="/about" element={<h1>About Us Page</h1>} />
          <Route path="/settings" element={<h1>Settings Page</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
