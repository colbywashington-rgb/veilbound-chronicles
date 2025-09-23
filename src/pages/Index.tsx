import VeilboundNavigation from '@/components/VeilboundNavigation';
import VeilboundHero from '@/components/VeilboundHero';
import GameplayFeatures from '@/components/GameplayFeatures';
import DeveloperSection from '@/components/DeveloperSection';
import CommunitySection from '@/components/CommunitySection';
import VeilboundFooter from '@/components/VeilboundFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <VeilboundNavigation />
      <main>
        <VeilboundHero />
        <GameplayFeatures />
        <DeveloperSection />
        <CommunitySection />
      </main>
      <VeilboundFooter />
    </div>
  );
};

export default Index;
