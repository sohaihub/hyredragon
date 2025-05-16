
import React from 'react';
import PricingTier from './pricing/PricingTier';
import EnterpriseTier from './pricing/EnterpriseTier';
import FeatureComparisonTable from './FeatureComparisonTable';
import { pricingTiers } from '../data/pricingData';

const PricingTiers: React.FC = () => {
  return (
    <div className="space-y-14 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Choose the plan that's right for your recruitment needs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {pricingTiers.map((tier, i) => (
          <PricingTier key={i} {...tier} />
        ))}
      </div>

      <EnterpriseTier />

      <div id="feature-comparison" className="glass-effect rounded-xl p-6 mt-12">
        <FeatureComparisonTable />
      </div>
    </div>
  );
};

export default PricingTiers;
