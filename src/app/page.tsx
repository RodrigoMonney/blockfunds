import MainSection from '@/components/sections/MainSection'
import InvestmentSection from '@/components/sections/InvestmentsSection'
import InvestmentTrustSection from '@/components/sections/InvestmentTrustSection'
import InvestmentFeaturesSection from '@/components/sections/InvestmentFeaturesSection'
import InvestmentOpportunitiesSection from '@/components/sections/InvestmentOpportunitiesSection'
import MarketsSection from '@/components/sections/MarketsSection'


export default function Home() {
  return (
    <div>
      <MainSection />
      <InvestmentSection />
      <InvestmentTrustSection />
      <InvestmentFeaturesSection />
      <InvestmentOpportunitiesSection />
      <MarketsSection />
    </div>
  )
}
