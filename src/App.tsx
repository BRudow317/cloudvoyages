import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  // useParams,
} from "react-router";
import { Home } from "@/pages/Home";
import { Benefits } from "@/pages/Benefits";
import { About } from "@/pages/About";
import { Privacy } from "@/pages/Privacy";
import { Careers } from "@/pages/Careers";
import { Layout } from "@/layouts/Layout";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/resume" element={<Benefits />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<Navigate to="/" replace />} />{" "}
            {/* Redirect unknown routes to home */}
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
