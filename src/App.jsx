import React from 'react'
import ArticleAdmin from './Components/ArticleAdmin'
import ProductAdmin from './Components/ProductAdmin'


const App = () => {
  return (
    <>
    <div data-cy="main-header">Spoko Administrator</div>      
    <ProductAdmin/>
    <ArticleAdmin/>
    </>
  )
}

export default App