import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  );
}

export default App;
