import HeroCarousel from "@/components/layout/HeroCarousel";
import ItemCardCarousel from "@/components/layout/ItemCardCarousel";

const image = [
  "https://placehold.co/300x200/png",
  "https://placehold.co/300x200/png",
  "https://placehold.co/300x200/png",
];
const titles = ["title1", "title2", "title3"];
const prices = ["100", "200", "300"];
const slide_count = 3
const slides = Array.from(Array(slide_count).keys())
export default function Home() {
  return (
    <main>
      <div className="py-4">
        <HeroCarousel />
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <h3 className="pb-4 text-2xl font-semibold">List Of Items</h3>
        <ItemCardCarousel images={image} price={prices} title={titles} slides={slides} />
      </div>
    </main>
  );
}
