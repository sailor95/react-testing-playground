import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

// For creating the Redux environment
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

// Create a test code block
describe('the text area', () => {
  beforeEach(() => {
    // Mock a 'onChange' result in textarea
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    // NOTE: Since React component update is async, we need to force an update
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});

