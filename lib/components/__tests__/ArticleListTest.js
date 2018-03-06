import React from 'react';
import ArticlesList from '../ArticlesList';
import Article from '../Article';

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('ArticlesList', () => {

  const testProps = {
    articles: {
      a: {
        id: 'a'
      },
      b: {
        id: 'b'
      }
    }
  };

  Article.propTypes = {};

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticlesList
        {...testProps}
      />
    );

    expect(wrapper.find('Article').length).toBe(2);

    expect(wrapper).toMatchSnapshot();
  });

});
