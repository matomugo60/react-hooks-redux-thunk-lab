import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCats } from './catsSlice'
import CatList from '../cats/CatList'

function Cats() {
  const catPics = useSelector((state) => state.entities)
  const isLoading = useSelector((state) => state.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCats())
  }, [dispatch])

  return (
    <div className='App'>
      <h1>CatBook</h1>
      {isLoading === 'loading' && <h1>Loading...</h1>}
      <CatList catPics={catPics} />
    </div>
  )
}

export default Cats