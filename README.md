# nodejs-heroku-auto-deploy

Bare-bones REST API using [Express](http://expressjs.com/) and [PostgreSQL](https://www.postgresql.org/).

Testing automatic deploy of a Node.js app on Heroku.
Each push to the master branch of this repo triggers an automatic build and deploy of the app.

## Running locally

```
heroku local web
```

## Deploying to Heroku

```
git push origin master
```