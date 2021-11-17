import type { NextPage } from 'next'
import { useEffect } from 'react'
import api from '../api'

const Home: NextPage = () => {
  useEffect(() => {
    api.fetchSummaryData()
  }, [])

  return (
    <div><p>HomePage</p></div>
  )
}

export default Home
