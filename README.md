# React Unit Test & Integration Test

Using [Jest](https://jestjs.io/) & [Enzyme](https://github.com/airbnb/enzyme).

## Main Components

This is a simple "Comments" app, user can post a comment or fetch mutiple comments from 3rd party API.

## Testing Scenarios

### Mock an API Call by Moxios

```js
beforeEach(() => {
  moxios.install();
  // Catch certain api call made by axios and response with custom data
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetch-comments' class button and simulate click event
  wrapped.find('.fetch-comments').simulate('click');

  // Wait for axios to hit moxios
  moxios.wait(() => {
    // Rerender the component with new prop
    wrapped.update();

    expect(wrapped.find('li')).toHaveLength(2);

    done();
    wrapped.unmount();
  });
});

afterEach(() => {
  moxios.uninstall();
});
```

## Test Cases

### App Component

- Shows the CommentBox inside of it
- Shows the CommentList inside of it
- When 'Fetch Comment' button is clicked, app should recieve new data from API call and update the UI

### CommentBox Component

- Shows a text area and a button
- Users can enter input into the text area and submit it
- When the input is submitted, textarea should get emptied

### CommentList Component

- Shows one **\<li>** element per comment
- Text from each comment is visible

### Comments Reducer

- Properly handle actions with a type of **'SAVE_COMMENT'**
- Doesn't throw an error if it gets an action with any other type

### SaveComment Action

- Has a type of **'SAVE_COMMENT'**
- Produces an action that has a payload of the new comments text
