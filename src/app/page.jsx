import HeroSlider from "@/components/HeroSliders/HeroSlider";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import LatestBooks from "@/components/LatestBooks/LatestBooks";
import Newsletter from "@/components/NewsLatter/NewsLatter";
import TopAuthor from "@/components/TopAuthor/TopAuthor";
// import LatestBooks from "@/components/LatestBooks/LatestBooks";
import Image from "next/image";

export default function Home() {
  
  return (
   
      <div>
         <title>Home | Book Crafters</title>
        <HeroSlider></HeroSlider>
        <LatestBooks></LatestBooks>
        <HowItWorks></HowItWorks>
        <TopAuthor></TopAuthor>
        <Newsletter></Newsletter>
      
      </div>
  );
}
