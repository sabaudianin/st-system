import { Hero } from "@/components/home/Hero/Hero";
import { Cta } from "@/components/home/Cta/Cta";
import { Brands } from "@/components/home/Brands/Brands";
import { OurServices } from "@/components/home/OurServices/OurServices";
import { Rating } from "@/components/home/Rating/Rating";

export default function Home() {
  return (
    <>
      <Hero />
      <Cta />
      <Brands />
      <OurServices />
      <Rating />
    </>
  );
}
