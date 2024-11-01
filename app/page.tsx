import ArtGallarryPage from "@/components/ArtGallary/ArtGallarryPage";
import Footer from "@/components/Footer/Footer";
import HeroPage from "@/components/HeroPage/HeroPage";


export default function Home() {
  return (
    <div className="bg-PrimaryColor scrollable-div h-screen">
      <HeroPage />
      <ArtGallarryPage />
      <Footer />
    </div>
  );
}
