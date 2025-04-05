import CustomersReviews from "@/components/HomePage/CustomersReviews";
import FeaturedProperty from "@/components/HomePage/FeaturedProperty";
import FindByLocation from "@/components/HomePage/FindByLocation";
import HeroPage from "@/components/HomePage/HeroPage";
import PropertiesSection from "@/components/HomePage/PropertiesSection";

export default function Home() {
  return (
    <div className="w-full">
        <HeroPage/>
        <PropertiesSection/>
        <FindByLocation/>
        <FeaturedProperty/>
        <CustomersReviews/>
    </div>
  );
}
