import React from 'react'
import Blogs from '../../components/Blogs/Blogs'
import Categories from '../../components/Categories/Categories'
import FeaturePorducts from '../../components/FeatureProducts/FeaturePorducts'
import Slider from '../../components/Slider/Slider'
import Testionials from '../../components/Testimonials/Testionials'


const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Categories/>
      {/* <Products/> */}
      <FeaturePorducts type='Popular'/>
      <FeaturePorducts type='Custom Design'/>
      <Blogs/>
      <Testionials/>
    </div>
  )
}

export default Home