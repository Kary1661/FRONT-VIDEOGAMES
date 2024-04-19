import React from 'react'
import Cards from '../../components/Cards/Cards'
import Filters from '../../components/Filters/Filters'
import { HomeSection } from './Home.styles'

export default function Home() {
  return (
    <HomeSection>
      <Filters />
      <Cards />
    </HomeSection>
  )
}
