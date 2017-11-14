# An Experiment with Serverless Applications
## Overview
This project sets out to explore a Serverless application stack for use as learning and reference in other projects.

## Project Objectives
* A full "backend" application of supporting both mobile and browser clients
* Interaction with application will be by HTTP requests
* GraphQL (in preference to REST) will be used to request and mutate data
* Interactions will be authorised
* The application will be automatically deployable to an AWS environment defined with SAM
* Versioning will be managed by tags and standard Lambda version numbers
* Engineers will be able to work on the application efficiently
* The application will present no obstacles to scaling to a large development team
* Costs to engineering infrastructure wil be zero or extremely low
* The application will create zero sysadmin / dev-ops requirements

## Technology Stack
* AWS Lambda
* MongoDB / DynamoDB
* Node.js
* Express.js
* Auth0

## Branching Strategy
**There is no branching strategy.**

## Contributing
This project is for the benefit of the author.  In the future contributions might be invited, should the repository prove to be a useful reference for others.
 
 
## Resources
* https://cloudacademy.com/blog/how-to-write-graphql-apps-using-aws-lambda/ 
* https://auth0.com/blog/building-serverless-apps-with-aws-lambda/ 