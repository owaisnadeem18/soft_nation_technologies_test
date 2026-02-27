import React from 'react'
import SolutionsSection from './SolutionsSection'
import HeroHomeSection from './HeroHomeSection'
import PortfolioGrid from './Portfolio'

const HomePage = () => {
  return (
  <>
<div className="max-w-7xl mx-auto" style={{ minHeight: 'calc(100vh - 96px)' }}>
      <HeroHomeSection />
      <SolutionsSection/>
      <PortfolioGrid/>
    </div>
  </>
  )
}

export default HomePage
