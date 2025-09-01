import { Routes, Route } from "react-router";
import Sidebar from "./components/layout/Sidebar";
import Overview from "./components/layout/Overview";
import Proprietes from "./components/layout/Proprietes";
import Clients from "./components/layout/Clients";
import Rents from "./components/layout/Rents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Overview />} />
        <Route path="proprietes" element={<Proprietes />} />
        <Route path="clients" element={<Clients />} />
        <Route path="rents" element={<Rents />} />
      </Route>
    </Routes>
  )
}

export default App