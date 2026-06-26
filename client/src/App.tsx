import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landing/LandingPage";
import FeedPage from "@/pages/feed/FeedPage";
import PassageDetailPage from "@/pages/passage/PassageDetailPage";
import ProfilePage from "@/pages/profile/ProfilePage";
import SettingsPage from "@/pages/settings/SettingsPage";

/**
 * Route skeleton only. Each page currently renders a placeholder.
 * Auth-gating of protected routes (feed, profile, settings) will be
 * added once the auth module is implemented — see
 * client/src/context/AuthContext.tsx (stubbed, not implemented).
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/passages/:passageId" element={<PassageDetailPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
