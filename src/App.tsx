
/**
 * 
 * React Router V7 Api Reference: @link https://api.reactrouter.com/v7/modules.html
 * 
 * React Router Remix Team: @link https://github.com/remix-run
 * 
 * Scroll restoration in React Router (data routers): 
 * @link https://github.com/remix-run/react-router/blob/main/docs/api/components/ScrollRestoration.md
 * 
 * Data router setup (createBrowserRouter/RouterProvider): 
 * @link https://github.com/remix-run/react-router/blob/main/docs/api/data-routers/createBrowserRouter.md
 * 
 * RouterProvider: 
 * @link https://github.com/remix-run/react-router/blob/main/docs/api/data-routers/RouterProvider.md
 * 
 * 
 * 
 * */
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  // ScrollRestoration
  // useParams,
} from "react-router";
import { Home } from "@/pages/Home";
import { Benefits } from "@/pages/Benefits";
import { About } from "@/pages/About";
import { Privacy } from "@/pages/Privacy";
import { Careers } from "@/pages/Careers";
import { Internships } from "@/pages/Internships";
import { Layout } from "@/layouts/Layout";
import { WhyExperts } from "@/pages/WhyExperts";
import { Contact } from "@/pages/Contact";
import { SmallBusiness } from "@/pages/SmallBusiness";

export default function App() {

  return (
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/why-experts" element={<WhyExperts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/small-business" element={<SmallBusiness />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="*" element={<Navigate to="/" replace />} />{" "}
            {/* Redirect unknown routes to home */}
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
