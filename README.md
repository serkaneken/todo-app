# todoApp

> A simple todo app built with React, Redux & MongoDB for Assignment Challange


I've hosted it by Netlify: [todoApp](https://serkaneken-todoapp.herokuapp.com/).

## Development

After setting your MongoDB Atlas cluster(https://docs.atlas.mongodb.com/getting-started/), type following in your `/config/keys.js`:

```js
module.exports = {
  mongoURI: 'mongodb+srv://{username}:{password}@{database_name}.mongodb.net/test?retryWrites=true'
};
```

Run:

```bash
npm i && npm i --prefix client  # install dependencies
npm run dev                     # run the development environment
```
