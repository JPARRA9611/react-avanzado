import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Items } from './style'
import { ProgressBar } from '../ProgressBar'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-sebastian-q0guxjv7r.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = ({ categoryId }) => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {
          loading
            ? <ProgressBar time='10' />
            : categories.map(category => {
              const active = category.id === parseInt(categoryId)
              return (
                <Items key={category.id}><Category {...category} active={active} path={`/pet/${category.id}`} /> </Items>
              )
            })
        }
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
