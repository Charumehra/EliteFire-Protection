import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileStickyContactBar } from './components/PhoneCTA';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FireAlarmSystemsPage } from './pages/services/FireAlarmSystemsPage';
import { FireFightingSystemsPage } from './pages/services/FireFightingSystemsPage';
import { FireExtinguisherPage } from './pages/services/FireExtinguisherPage';
import { ElectricalSystemsPage } from './pages/services/ElectricalSystemsPage';
import { CctvSystemsPage } from './pages/services/CctvSystemsPage';
import { AmcMaintenancePage } from './pages/services/AmcMaintenancePage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { FaridabadLocationPage } from './pages/locations/FaridabadLocationPage';
import { DelhiNcrLocationPage } from './pages/locations/DelhiNcrLocationPage';
import { AdminLeadsPage } from './pages/AdminLeadsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Fire Alarm Systems');
  const [modalLocation, setModalLocation] = useState('');

  const handleOpenQuote = (serviceName?: string, locationName?: string) => {
    if (serviceName) setModalService(serviceName);
    setModalLocation(locationName || '');
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen text-slate-800 antialiased font-sans bg-white pb-14 sm:pb-0">
      <ScrollToTop />

      {/* Global Header */}
      <Header onRequestQuote={() => handleOpenQuote()} />

      {/* Main Content Viewport */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onRequestQuote={() => handleOpenQuote()} />} />
          <Route path="/about" element={<AboutPage onRequestQuote={() => handleOpenQuote()} />} />
          <Route path="/services" element={<ServicesPage onRequestQuote={() => handleOpenQuote()} />} />

          {/* Dedicated Service Pages */}
          <Route
            path="/services/fire-alarm-systems"
            element={<FireAlarmSystemsPage onRequestQuote={() => handleOpenQuote('Fire Alarm Systems')} />}
          />
          <Route
            path="/services/fire-fighting-systems"
            element={<FireFightingSystemsPage onRequestQuote={() => handleOpenQuote('Fire Fighting Systems')} />}
          />
          <Route
            path="/services/fire-extinguisher-supply-refilling"
            element={
              <FireExtinguisherPage
                onRequestQuote={() => handleOpenQuote('Fire Extinguisher Supply and Refilling')}
              />
            }
          />
          <Route
            path="/services/electrical-systems"
            element={<ElectricalSystemsPage onRequestQuote={() => handleOpenQuote('Electrical Systems')} />}
          />
          <Route
            path="/services/cctv-systems"
            element={<CctvSystemsPage onRequestQuote={() => handleOpenQuote('CCTV Systems')} />}
          />
          <Route
            path="/services/amc-maintenance"
            element={<AmcMaintenancePage onRequestQuote={() => handleOpenQuote('AMC and Maintenance Services')} />}
          />
          {/* AMC direct route alias */}
          <Route
            path="/amc-maintenance"
            element={<AmcMaintenancePage onRequestQuote={() => handleOpenQuote('AMC and Maintenance Services')} />}
          />

          {/* Supporting Public Pages */}
          <Route path="/industries" element={<IndustriesPage onRequestQuote={() => handleOpenQuote()} />} />
          <Route path="/projects" element={<ProjectsPage onRequestQuote={() => handleOpenQuote()} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage onRequestQuote={() => handleOpenQuote()} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage onRequestQuote={() => handleOpenQuote()} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Local Area Service Pages */}
          <Route
            path="/locations/faridabad"
            element={<FaridabadLocationPage onRequestQuote={() => handleOpenQuote('Fire Fighting Systems', 'Faridabad')} />}
          />
          <Route
            path="/locations/delhi-ncr"
            element={<DelhiNcrLocationPage onRequestQuote={() => handleOpenQuote('AMC and Maintenance Services', 'Delhi NCR')} />}
          />

          {/* Local Admin Leads Dashboard */}
          <Route path="/admin/leads" element={<AdminLeadsPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Global Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        serviceTitle={modalService}
        initialLocation={modalLocation}
      />

      {/* Sticky Widgets */}
      <WhatsAppFloatingButton />
      <MobileStickyContactBar />
    </div>
  );
}

export default App;
