import React from 'react';
import axios from 'axios';

import DataApi from 'state-api';

import ArticlesList from './ArticlesList';

class App extends React.Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  }

  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState({
      articles: api.getArticles(),
      authors: api.getAuthors()
    });
  }

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  }

  render() {
    return (
      <ArticlesList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
