import Banner from "@/components/BannerSection/Banner";
import HealthInsurance from "@/components/HealthInsurance/HealthInsurance";
import HelpYouSection from "@/components/HelpYouSection/HelpYouSection";
import RequestCallback from "@/components/RequestCallback/RequestCallback";
import TakeCareSection from "@/components/TakeCareSection/TakeCareSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <HelpYouSection />
      <TakeCareSection />
      <HealthInsurance />
      <RequestCallback />
      <TestimonialSection />
    </Wrapper>
  );
}
