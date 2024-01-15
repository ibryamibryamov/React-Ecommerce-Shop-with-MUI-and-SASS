import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PromoBanner from "../components/PromoBanner";
import TrendingNow from "../components/TrendingNow";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <PromoBanner />
      <TrendingNow />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
