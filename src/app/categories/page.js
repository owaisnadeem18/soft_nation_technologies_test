import ProductListing from '@/components/ProductListing'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4' style={{ minHeight: 'calc(100vh - 96px)' }} >
      <ProductListing />
    </div>
  )
}

export default page
