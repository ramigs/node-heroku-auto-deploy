# nodejs-heroku-auto-deploy

Bare-bones REST API using [Express](http://expressjs.com/) and [PostgreSQL](https://www.postgresql.org/).

Testing automatic deploy of a Node.js app on Heroku.
Each push to the master branch of this repo triggers an automatic build and deploy of the app.

## Running locally

Clone the repository:

```sh
git clone https://github.com/ramigs/node-heroku-auto-deploy
```

Install the dependencies:

```sh
npm install
```

Run a local server:

```sh
heroku local web
```

You'll need a Heroku account.

Your app should now be running on [localhost:5000/albums](http://localhost:5000/albums).

## Deploying to Heroku

```
git push origin master
```