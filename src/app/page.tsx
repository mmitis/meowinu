import { Community } from "./components/Community";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { History } from "./components/History";
import { Info } from "./components/Info";
import { Menu } from "./components/Menu";
import { NFT } from "./components/NFT";
import { StatsCount } from "./components/StatsCount";
import { Timeline } from "./components/Timeline";


export const metadata = {
  title: 'MeowInu Memecoin - Put pounce on profits. Meow-nificent crypto revolution is coming !',
};

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <Timeline />
      <StatsCount />
      <Info />
      <History />
      <NFT />
      <Community />
      <Footer />
    </main>
  );
}
