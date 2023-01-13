
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage";
import RouteList from "./pages/RouteList/RouteList";
import Addresses from "./pages/Address/Addresses";
import Storage from "./pages/Storage/Storage";
import Drivers from "./pages/Drivers/Drivers";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="route_list" element={<RouteList />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="storage" element={<Storage />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  )
}

export default App;
