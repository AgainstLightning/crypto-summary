import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import api from '../api'

const defaultState = {
  isLoading: true,
  pairs: {}
}

const Home: NextPage = () => {
  const [{pairs, isLoading}, setState] = useState(defaultState)

  useEffect(() => {
    api.fetchSummaryData().then((data) => setState({
      isLoading: false,
      pairs: data
    }))
  }, [])

  return (
    <div>
      {
        isLoading 
          ? <p>LOADING</p>
          : <div className="flex">{Object.keys(pairs)}</div>
      }
    </div>
  )
}

export default Home
