'use strict';

const GraphQL = require('graphql');
const {
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
} = GraphQL;

// import the Post type we created
const RedditPostType = require('../types/RedditPost');

// import the Post resolver we created
const RedditPostResolver = require('../resolvers/RedditPost');


module.exports = {

    index() {
        return {
            type: new GraphQLList(RedditPostType),
            description: 'This will return all the posts we find in the given subreddit.',
            args: {
                subreddit: {
                    type: GraphQLString,
                    description: 'Please enter subreddit name',
                }
            },
            resolve(parent, args, context, info) {
                return RedditPostResolver.index(args);
            }
        }
    },

};