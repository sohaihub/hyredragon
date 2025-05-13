
import React from 'react';
import Header from '@/components/Header';
import PricingHero from '@/components/PricingHero';
import PricingTiers from '@/components/PricingTiers';
import PricingCTA from '@/components/PricingCTA';
import PricingFAQs from '@/components/PricingFAQs';
import FeatureComparison from '@/components/FeatureComparison';
import Footer from '@/components/Footer';


      <Header />
      <main className="flex-grow">
        <PricingHero />
        <PricingTiers />
        <FeatureComparison />
        <PricingFAQs />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
