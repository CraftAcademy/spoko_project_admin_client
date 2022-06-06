import React, { useState } from 'react'
import Articles from '../Modules/Articles'

const ArticleAdmin = ({ onCreateMessage }) => {
  const [article, setArticle] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await Articles.create(article)
    onCreateMessage(response.message)
  }

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div data-cy="articles-header">Articles</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label data-cy="title-label">
              Title<br></br>
              <input
                name="title"
                type="text"
                data-cy="title-input"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label data-cy="body-label">
              Article body<br></br>
              <textarea
                name="body"
                data-cy="body-input"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <select
              data-cy="category-select"
              name="category"
              onChange={handleChange}
            >
              <option value="">--select category--</option>
              <option value="Football">Football</option>
              <option value="Tennis">Tennis</option>
              <option value="Golf">Golf</option>
              <option value="Cricket">Cricket</option>
            </select>
          </div>
          <button data-cy="submit-button">Submit</button>
        </form>
      </div>
    </>
  )
}

export default ArticleAdmin
