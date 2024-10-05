import AskForQuote from "@/components/home/AskForQuote";
import OurProducts from "@/components/home/OurProducts";
import PreviousProjects from "@/components/home/PreviousProjects";
import PriceQuote from "@/components/home/PriceQuote";
import ProductCategories from "@/components/home/ProductCategories";
import Slider from "@/components/shared/slider/Slider";


export default function Home() {
  return (
    <>
      <Slider />
      <OurProducts />
      <ProductCategories />
      <PreviousProjects />
      <PriceQuote />
      <AskForQuote />
    </>
  );
}
