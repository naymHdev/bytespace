import Hero from "@/app/(main)/_components/Hero";
import FeaturedCourses from "@/app/(main)/_components/featured-courses";
import PartnerLogos from "./_components/home/PartnerLogos";
import LearningPaths from "@/app/(main)/_components/LearningPaths";
import GrowthSection from "@/app/(main)/_components/GrowthSection";
import CreatorCTA from "@/app/(main)/_components/CreatorCTA";
import Testimonials from "@/app/(main)/_components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnerLogos />
      <FeaturedCourses />
      <LearningPaths />
      <GrowthSection />
      <CreatorCTA />
      <Testimonials />
    </div>
  );
}
