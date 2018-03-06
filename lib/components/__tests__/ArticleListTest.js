import React from 'react';
import ArticlesList from '../ArticlesList';

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

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticlesList
        {...testProps}
      />
    );

    expect(wrapper.find('ArticleContainer').length).toBe(2);

    expect(wrapper).toMatchSnapshot();
  });

});
