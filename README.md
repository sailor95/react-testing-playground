## Main Components

This is a simple "Comments" app. While user can post a comment or fetch from API.

### App Component

- Shows the CommentBox inside of it
- Shows the CommentList inside of it

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