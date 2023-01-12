
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import RouteList from "./pages/RouteList";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="route_list" element={<RouteList />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  )
}

export default App;
