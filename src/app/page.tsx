import InvestmentOpportunities from '@/components/sections/InvestmentOpportunitiesSection'
import InvestmentPlatformFeatures from '@/components/sections/InvestmentPlatformFeatures'
import InvestmentTrustSection from '@/components/sections/InvestmentTrustSection'
import InvestmentSection from '@/components/sections/InvestmentsSection'
import MainSection from '@/components/sections/MainSection'

export default function Home() {
  return (
    <div>
      <MainSection />
      <InvestmentSection />
      <InvestmentTrustSection />
      <InvestmentPlatformFeatures />
      <InvestmentOpportunities />
    </div>
  )
}