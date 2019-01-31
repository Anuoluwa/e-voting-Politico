# e-voting-Politico    [![Build Status](https://travis-ci.org/Anuoluwa/e-voting-Politico.svg?branch=develop)](https://travis-ci.org/Anuoluwa/e-voting-Politico)  [![Coverage Status](https://coveralls.io/repos/github/Anuoluwa/e-voting-Politico/badge.svg?branch=develop)](https://coveralls.io/github/Anuoluwa/e-voting-Politico?branch=develop) 
[![Maintainability](https://api.codeclimate.com/v1/badges/b099512884c97c40dc3f/maintainability)](https://codeclimate.com/github/Anuoluwa/e-voting-Politico/maintainability)

Politico enables citizens give their mandate to politicians running for different government offices
while building trust in the process through transparency.

These are app links:

* [APP UI](https://anuoluwa.github.io/e-voting-Politico/UI/html/index.html)
* [Heroku Link]()
* [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2239270)


## Table of Contents

 * [Technologies](#technologies)
 * [Features](#features)
    * [Additional Feature](#additional-feature)
 * [API Endpoints](#api-endpoints)
 * [Getting Started](#getting-started)
    * [Installation](#installation)
    * [Testing](#testing)
    

### Pivotal Tracker
Project is currently being built with the Project Management Tool, Pivotal Tracker at [](https://www.pivotaltracker.com/n/projects/2239270)

### Template


### API Deployment


## Technologies

* [NodeJS](https://nodejs.org/) - Runtime Environment
* [ExpressJs](https://expressjs.com/) - Web Application Framework

### Supporting Packages

#### Linter(s)

* [ESLint](https://eslint.org/) - Linter Tool

#### Compiler

* [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

#### Test Tools

* [Mocha](https://mochajs.org/) - JavaScript Test Framework for API Tests
* [Supertest]() - 
* [Chai](http://chaijs.com/) - TDD/BDD Assertion Library for Node


## Required Features
* Users can sign up.
* Users can login
* Admin (electoral body) can create political parties.
* Admin (electoral body) can delete a political party.
* Admin (electoral body) can create different political offices.
* Users can vote for only one politician per political office.
* Users can see the results of election.
* Optional Features:
    * User can reset password.
* A politician can create a petition against a concluded political office election.


## API Endpoints For API v1

###

<table>

<tr><th>HTTP METHOD</th><th>ENDPOINT</th><th>ACTION</th></tr>

<tr><td>POST</td> <td>api/v1/parties</td> <td>Create a political party</td></tr>

<tr><td>GET</td> <td>api/v1/parties</td> <td>Get All political parties</td></tr>

<tr><td>GET</td> <td>api/v1/parties/:partyId</td> <td>Get a specific political party</td></tr>

<tr><td>PATCH</td> <td>api/v1/parties/:partyId</td> <td>Update a specific political party</td></tr>

<tr><td>DELETE</td> <td>api/v1/parties/:partyId</td> <td>Delete a particular political party</td></tr>

<tr><td>POST</td> <td>api/v1/offices</td> <td>Create a political offices</td></tr>

<tr><td>GET</td> <td>api/v1/offices</td> <td>Get All political offices</td></tr>

<tr><td>GET</td> <td>api/v1/offices/:officesId</td> <td>Get a specific political office</td></tr>


</table>


## Getting Started

### Installation

* git clone
  [e-voting-Politico](https://github.com/Anuoluwa/e-voting-Politico)
* Run `npm install` to install packages
* Run `npm start` to start the server
* Run `npm test` to run tests
* Navigate to [localhost:3000](http://localhost:3000/) in browser to access the
  application

### Testing

#### Prerequisites

* [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

* After installing as shown above
* Navigate to [localhost:3000](http://localhost:3000/) in
  [Postman](https://getpostman.com/) to access the application

MIT License

Copyright (c) 2019 Anuoluwapo APITI
