import React from 'react';

import DataApi from '../DataApi';
import {data} from '../testData';

import ArticlesList from './ArticlesList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  render() {
    return (
      <ArticlesList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}

export default App;
