import React from 'react';
import FirstSection from '../../components/home/main-image'
import SecondSection from '../../components/home/commerce-list'
import NewCoupons from '../../components/home/new-coupons-section'

const Home = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <NewCoupons />
    </div>
  )
}

export default Home