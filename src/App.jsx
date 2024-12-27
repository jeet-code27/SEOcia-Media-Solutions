import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from './layouts/MainLayout';
import { ScrollToTop } from './utils/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const WebDevelopment = lazy(() => import('./components/WebDevelopment'));
const Seo = lazy(() => import('./components/Seo'));
const GoogleAdsServices = lazy(() => import('./components/GoogleAds'));
const ContentWritingServices = lazy(() => import('./components/ContentWritingServices'));
const SocialMediaServices = lazy(() => import('./components/SocialMediaServices'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const CareerPage = lazy(() => import('./components/CareerPage'));
const NewYearOffer = lazy(() => import('./components/NewYearOffer'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Public routes */}
            <Route 
              path="/" 
              element={
                <>
                  <NewYearOffer imageUrl="images/offer-image.png" />
                  <Home />
                </>
              } 
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/google-ads" element={<GoogleAdsServices />} />
            <Route path="/content" element={<ContentWritingServices />} />
            <Route path="/social-media-marketing" element={<SocialMediaServices />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/career" element={<CareerPage />} />
            
            {/* Handle 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;