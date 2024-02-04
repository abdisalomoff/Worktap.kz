import Business from "@/components/Business/Business";
import CurrentWorks from "@/components/CurrentWorks/CurrentWorks";
import Freelancers from "@/components/Freelancers/Freelancers";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import WorkTap from "@/components/WorkTap/WorkTap";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <CurrentWorks/>
      <Freelancers/>
      <WorkTap/>
      <Business/>
    </>
  );
}
