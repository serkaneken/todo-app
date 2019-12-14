# todoApp

> A simple todo app built with React, Redux & MongoDB for Assignment Challange


I've hosted it by Heroku: [todoApp](https://serkaneken-todoapp.herokuapp.com/). 🐒

## Development

After setting your MLab cluster(https://elements.heroku.com/addons/mongolab/), type following in your `/config/keys.js`:

```js
module.exports = {
  mongoURI: 'mongodb://<dbuser>:<dbpassword>@ds343217.mlab.com:43217/heroku_k5bdv510'
};
```

Run:

```bash
npm i && npm i --prefix client  # install dependencies
npm run dev                     # run the development environment
```
