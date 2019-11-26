import React from 'react';
import FirstSection from '../../components/home/first-section'
import SecondSection from '../../components/home/second-section'
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