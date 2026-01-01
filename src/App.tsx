import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/public/LandingPage';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import ForgotPasswordPage from './components/auth/ForgotPasswordPage';
import SearchPage from './components/public/SearchPage';
import ServicesPage from './components/public/ServicesPage';
import AboutUsPage from './components/public/AboutUsPage';
import GigDetailsPage from './components/public/GigDetailsPage';
import ClientDashboardPage from './components/client/ClientDashboardPage';
import ActiveGigsSummary from './components/client/ActiveGigsSummary';
import PostGigForm from './components/client/PostGigForm';
import MyGigsList from './components/client/MyGigsList';
import Messages from './components/client/Messages';
import ApplicantReviewPage from './components/client/ApplicantReviewPage';
import FreelancerDashboardPage from './components/freelancer/FreelancerDashboardPage';
import FreelancerDashboard from './components/freelancer/FreelancerDashboard';
import FindWorkPage from './components/freelancer/FindWorkPage';
import MyApplicationsPage from './components/freelancer/MyApplicationsPage';
import ProfilePage from './components/freelancer/ProfilePage';
import IDVerificationPage from './components/freelancer/IDVerificationPage';
import FreelancerMessages from './components/freelancer/Messages';
import ApplyForGigPage from './components/freelancer/ApplyForGigPage';
import GigDetailsDashboardView from './components/freelancer/GigDetailsDashboardView';
import AdminDashboardPage from './components/admin/AdminDashboardPage';
import SystemDashboard from './components/admin/SystemDashboard';
import IDVerificationQueue from './components/admin/IDVerificationQueue';
import ModerationPanel from './components/admin/ModerationPanel';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/gig/:id" element={<GigDetailsPage />} />
        <Route path="/client/dashboard" element={<ClientDashboardPage />}>
          <Route index element={<ActiveGigsSummary />} />
          <Route path="post-gig" element={<PostGigForm />} />
          <Route path="my-gigs" element={<MyGigsList />} />
          <Route path="messages" element={<Messages />} />
          <Route path="applicant-review" element={<ApplicantReviewPage />} />
        </Route>
        <Route path="/freelancer/dashboard" element={<FreelancerDashboardPage />}>
          <Route index element={<FreelancerDashboard />} />
          <Route path="find-work" element={<FindWorkPage />} />
          <Route path="apply/:id" element={<ApplyForGigPage />} />
          <Route path="gig/:id" element={<GigDetailsDashboardView />} />
          <Route path="applications" element={<MyApplicationsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="messages" element={<FreelancerMessages />} />
          <Route path="id-verification" element={<IDVerificationPage />} />
        </Route>
        <Route path="/admin/dashboard" element={<AdminDashboardPage />}>
          <Route index element={<SystemDashboard />} />
          <Route path="id-verification" element={<IDVerificationQueue />} />
          <Route path="moderation" element={<ModerationPanel />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
