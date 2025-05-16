
import React from 'react';
import {
  Table,
  TableBody,
} from '@/components/ui/table';
import TableHeader from './table/TableHeader';
import CategoryHeader from './table/CategoryHeader';
import TableFeatureRow from './table/TableFeatureRow';
import {
  packageDuration,
  basicFeatures,
  aiFeatures,
  analyticsFeatures,
  supportFeatures
} from './table/featureData';

const FeatureComparisonTable: React.FC = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Feature <span className="text-[#E2FF55]">Comparison</span>
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-800 bg-[#080822]/90 backdrop-blur-sm shadow-2xl">
          <Table className="w-full border-collapse">
            <TableHeader />
            <TableBody>
              {/* Package Duration */}
              <TableFeatureRow 
                title={packageDuration.title} 
                values={packageDuration.values} 
              />

              {/* Basic Section */}
              <CategoryHeader title={basicFeatures.title} />
              {basicFeatures.features.map((feature, index) => (
                <TableFeatureRow 
                  key={`basic-${index}`} 
                  title={feature.title} 
                  values={feature.values} 
                />
              ))}

              {/* AI Features Section */}
              <CategoryHeader title={aiFeatures.title} />
              {aiFeatures.features.map((feature, index) => (
                <TableFeatureRow 
                  key={`ai-${index}`} 
                  title={feature.title} 
                  values={feature.values} 
                />
              ))}

              {/* Analytics & Report Section */}
              <CategoryHeader title={analyticsFeatures.title} />
              {analyticsFeatures.features.map((feature, index) => (
                <TableFeatureRow 
                  key={`analytics-${index}`} 
                  title={feature.title} 
                  values={feature.values} 
                />
              ))}

              {/* Support & Training Section */}
              <CategoryHeader title={supportFeatures.title} />
              {supportFeatures.features.map((feature, index) => (
                <TableFeatureRow 
                  key={`support-${index}`} 
                  title={feature.title} 
                  values={feature.values} 
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
