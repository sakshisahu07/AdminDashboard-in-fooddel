import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import InsertItem from "./admin/InsertItem";
import AdminDashboard from "./admin/AdminDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>

        <Routes>
           <Route path="/admin" element={<AdminDashboard/>} >
             <Route path="insertitem" element={<InsertItem/>}/>
           
           </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;
