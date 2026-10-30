import { Routes, Route } from "react-router-dom";
import Layout from "./widgets/layout/Layout";
import HomePage from "./pages/HomePage";
import SewingPage from "./pages/SewingPage";
import SewingDetailPage from "./pages/SewingDetailPage";
import CatalogPage from "./pages/CatalogPage";
import ProductionPage from "./pages/ProductionPage";
import SetsPage from "./pages/SetsPage";
import InfoPage from "./pages/InfoPage";
import SimplePage from "./pages/SimplePage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sewing" element={<SewingPage />} />
        <Route path="/sewing/hoodie" element={<SewingDetailPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/production" element={<ProductionPage />} />
        <Route path="/sets" element={<SetsPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="*" element={<SimplePage title="Страница не найдена" />} />
      </Route>
    </Routes>
  );
}