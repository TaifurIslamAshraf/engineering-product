
import AskForQuote from '@/components/home/AskForQuote'
import OurProducts from '@/components/ourProducts/OurProducts'
import OurProductsBanner from '@/components/ourProducts/OurProductsBanner'
import ProductCategories from '@/components/ourProducts/ProductCategories'
import React from 'react'

const OurProductsPage = () => {
  return (
      <>
          <OurProductsBanner />
          <OurProducts />
          <ProductCategories />
          <AskForQuote />
      </>
  )
}

export default OurProductsPage