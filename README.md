# Twisted Literature

Twisted Literature is a web application built with React that allows users to share and discover short stories. Users can create posts containing their stories, upvote or downvote posts, and interact with the community through comments.

## Features

### Create Post
- Users can create posts containing short stories.
- Posts must include a title, and users have the option to add additional textual content and/or an image via an external image URL.

### Home Feed
- The home feed displays previously created posts.
- By default, only the time created, title, and upvotes count for each post is shown on the posts feed.
- Users can sort posts by either their created time or upvotes count.
- Users can search for posts by title.
- Users can sort posts by most votes, allowing them to find popular posts quickly.

### Post Page
- Each post has its separate page where additional information is displayed, including content, image, and comments.
- Users can leave comments underneath a post on the post page.
- Each post has an upvote button on the post page. Clicking on it increases the post's upvotes count by one.
- Users can upvote any post for any number of times, but they cannot downvote.

### Editing and Deleting Posts
- Authors of the post can edit or delete their posts.
- A previously created post can be edited from its post page.
- A previously created post can be deleted from its post page.

## Getting Started
To get started with Twisted Literature, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the development server using `npm start`.
5. Access the application in your browser at `http://localhost:3000`.

## Technologies Used
- React
- Supabase
- HTML/CSS

## Contributors
- Isaiah C.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
