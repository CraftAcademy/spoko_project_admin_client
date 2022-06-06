import { api } from "./Network";

const Articles = {
  async create(article) {
    const { data } = await api.post("/articles", {
      article: {
        title: article.title,
        body: article.body,
        category: article.category,
        image: article.image
      },
    });
    return data
  },
};

export default Articles;