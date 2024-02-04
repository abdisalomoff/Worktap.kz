import CurrentWorks from "@/components/CurrentWorks/CurrentWorks";
import Freelancers from "@/components/Freelancers/Freelancers";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <CurrentWorks/>
      <Freelancers/>
    </>
  );
}
