import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  // useParams,
} from "react-router";
import { Home } from "@/pages/Home";
import { Benefits } from "@/pages/Benefits";
import { Layout } from "@/layouts/Layout";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/resume" element={<Benefits />} />
            <Route path="*" element={<Navigate to="/" replace />} />{" "}
            {/* Redirect unknown routes to home */}
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
