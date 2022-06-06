import React, { useState } from 'react'
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Dropdown,
} from 'semantic-ui-react'
import Articles from '../Modules/Articles'

const ArticleAdmin = ({ onCreateMessage }) => {
  const [article, setArticle] = useState({})

  const categoryOptions = [
    { key: 'f', text: 'Football', value: 'football' },
    { key: 't', text: 'Tennis', value: 'tennis' },
    { key: 'g', text: 'Golf', value: 'golf' },
    { key: 'c', text: 'Cricket', value: 'cricket' },
  ]

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
    <Form onSubmit={handleSubmit}>
      <Form.Input
        data-cy="title-input"
        label="Title"
        placeholder="Your Title"
        onChange={handleChange}
      />
      <Form.TextArea
        data-cy="body-label"
        label="Article Body"
        placeholder="Put your article body here"
        onChange={handleChange}
      />
      <Dropdown
        data-cy="category-select"
        placeholder="Select Category"
        fluid
        select
        options={categoryOptions}
        onChange={handleChange}
      />
      <Form.Checkbox label="I agree to the Terms and Conditions" />
      <Form.Button>Submit</Form.Button>
    </Form>
  )
}

export default ArticleAdmin
