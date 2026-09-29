import FeaturedCourses from "@/app/(main)/_components/featured-courses";
import PartnerLogos from "./_components/home/PartnerLogos";
import LearningPaths from "@/app/(main)/_components/LearningPaths";
import Testimonials from "@/app/(main)/_components/Testimonials";

export default function Home() {
  return (
    <div>
      <PartnerLogos />
      <FeaturedCourses />
      <LearningPaths />
      <Testimonials />
    </div>
  );
}
