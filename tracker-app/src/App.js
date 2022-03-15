import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import Feature from "./pages/Feature";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="welcome" element={<Welcome />} />
        <Route path="tasks" element={<Tasks />}>
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="feature" element={<Feature />} />
      </Route>
    </Routes>
  );
}

export default App;
