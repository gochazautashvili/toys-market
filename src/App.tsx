import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";
import Navbar from "./components/Navbar";
import Protection from "./pages/dashboard/Protection";
const Layout = lazy(() => import("@/pages/defoult/Layout"));
const DashboardLayout = lazy(() => import("@/pages/dashboard/Layout"));
const Home = lazy(() => import("@/pages/defoult/home/Home"));
const Delivery = lazy(() => import("@/pages/defoult/delivery/Delivery"));
const About = lazy(() => import("@/pages/defoult/about/About"));
const Catalog = lazy(() => import("@/pages/defoult/catalog/Catalog"));
const Contact = lazy(() => import("@/pages/defoult/contact/Contact"));
const Dashboard = lazy(() => import("@/pages/dashboard"));
const DashboardUpdateToy = lazy(
  () => import("@/pages/dashboard/update/UpdateToy"),
);
const SingleToy = lazy(() => import("@/pages/defoult/single-toy/SingleToy"));
const PaymentSuccess = lazy(
  () => import("@/pages/defoult/payment/PaymentSuccess"),
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="about" element={<About />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="single-toy/:slug" element={<SingleToy />} />
          </Route>
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route
            path="/dashboard"
            element={
              <Protection>
                <DashboardLayout />
              </Protection>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="update-toy/:slug" element={<DashboardUpdateToy />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

const Loading = () => {
  return (
    <div className="absolute inset-0 flex h-screen w-full items-center justify-center">
      <Loader2 className="size-7 animate-spin" />
    </div>
  );
};
