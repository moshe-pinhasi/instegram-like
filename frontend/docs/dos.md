# Specification

### Use cases
1.  Users should be able to upload their photos.
2.  Users should be able to like a post posted by other users.
3.  Users should be able to follow other users.
4.  Users should be able to view NewsFeed from other users they are following.
5.  Users can be either logged in or non logged in.
6.  Non logged in user can't follow other users

### Not in scope
1.  Photo Filters, Post Comments & Location-based tagging.
2.  User stories automatically expiring at 24 hours.
3.  User messaging to an individual user or a group.
4.  Push Notification to users for updates.
5.  Users are able to search other users or post across the platform.
6.  User can upload only images
7.  All accounts are public
8.  There are no options to report user, block or restrict


### Tech & Frameworks
1. Frontend - will be implemanted with Vue.js
2. Backend - Nodejs (with express)
3. Database - mongodb
4. Docker - ?

### Client Services
1. feed.service - responsible on the feed posts: load posts, load user posts (user details page)
2. post.service - responsible on the post actions: create, remove, add comment to post, like a post
3. user.service - responsile on the user actions
4. auth.service - responsible on the authentication: singup, login, logout

### Client Store
1. feed store
2. user store
3. auth store

### Server endpoints
1. feed
  1.1. GET /feed
  1.2  GET /feed/:userid/media
  1.3  GET /feed/:userid/media/:mediaid
2. post
  2.1 POST /post
  2.2 DELETE /post/:id
  2.3 POST /post/:id/comment
  2.4 GET /post/:id/comment
  2.5 POST /post/:id/like
  2.6 GET /post/:id/like
3. user
  3.1 GET /user/loggedin
4. auth
  4.1 POST /auth/signup
  4.2 POST /auth/login
  4.3 POST /auth/logout