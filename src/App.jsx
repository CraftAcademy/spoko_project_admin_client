import React, { useState } from 'react'
import ArticleAdmin from './Components/ArticleAdmin'
// import ProductAdmin from './Components/ProductAdmin'

const App = () => {
  const [message, setMessage] = useState()

  return (
    <>
      <div data-cy="main-header">Spoko Administrator</div>
      {/* <ProductAdmin /> */}
      <ArticleAdmin onCreateMessage={setMessage} />
      <div data-cy="message-box">{message}</div>
    </>
  )
}

export default App
