import React from 'react'
import Categories from '../../components/Categories/Categories'
import FeaturePorducts from '../../components/FeatureProducts/FeaturePorducts'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Categories/>
      <FeaturePorducts type='Featured'/>
      <FeaturePorducts type='Custom Design'/>
    </div>
  )
}

export default Home