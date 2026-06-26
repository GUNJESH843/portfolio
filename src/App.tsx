import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CertificatesPage from "./pages/CertificatesPage";
import NotFound from "./pages/NotFound";
import { Cursor } from "./components/Cursor";
import { useSmoothScroll } from "./lib/anim";

const queryClient = new QueryClient();

const App = () => {
  useSmoothScroll();
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Cursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
