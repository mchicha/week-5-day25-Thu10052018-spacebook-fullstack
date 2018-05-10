/*
 *  The main file simply initializes the classes we've just discussed,
 *  and calls the event subscription methods found in events-handler
 */

import PostsRepository from './posts-repository.js';
import PostsRenderer from './posts-renderer.js';
import EventsHandler from './events-handler.js'; 

let postsRepository = new PostsRepository();
let postsRenderer = new PostsRenderer();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);

eventsHandler.registerAddPost();
eventsHandler.registerRemovePost();
eventsHandler.registerToggleComments();
eventsHandler.registerAddComment();
eventsHandler.registerRemoveComment();