import { Route, Routes } from "react-router";

import FunnelPage from "@/pages/Funnel";

function App() {
  return (
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/useFunnel" element={<FunnelPage />} />
    </Routes>
  );
}

export default App;
