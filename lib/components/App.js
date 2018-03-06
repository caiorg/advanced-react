import React from 'react';

import ArticlesList from './ArticlesList';

class App extends React.Component {
  state = this.props.store.getState();

  render() {
    return (
      <ArticlesList
        articles={this.state.articles}
        store={this.props.store}
      />
    );
  }
}

export default App;
