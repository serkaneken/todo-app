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



## Feedback from the 2019 Assignment Review by @mcenkbatman. Thanks to this review, I learned about some shortcomings.

I've completed the review once more. The symbols -: negative, +: positive, and o: neutral are used to indicate the nature of the feedback.

## Demo & Others:

- **Deployment**: Positive feedback for successfully deploying the application.
- **Commits**: Negative feedback due to the presence of 25 commits, most of which are titled "make it better," indicating a need for more descriptive commit messages.
- **Empty Task Creation**: Negative feedback for allowing the creation of empty tasks, which also results in a 503 error. It's suggested that frontend validation should prevent the creation of empty tasks and display an error notification or message if attempted.
- **Design**: Positive feedback for the application's design.
- **Request Feedback**: Negative for the absence of user feedback mechanisms like overlays, spinners, or notification messages when communicating with the server.
- **Update Endpoint Parameters**: Negative feedback for the PUT endpoint performing a status update without requiring additional parameters, suggesting that what is being updated should be explicitly stated.
- **Responsiveness**: Positive feedback for the application's responsiveness.
- **Extra Feature**: Positive feedback for additional features, such as filter tabs based on status and the ability to remove completed tasks.
- **README**: Positive feedback for including a README file.

## Server:

- **Code Styling**: Neutral feedback regarding code styling.
- **Variable Naming**: Neutral feedback on variable naming conventions.
- **Layering**: Negative feedback for lack of proper layering, with routes in index.js accessing data directly. Ideally, routes should be separated, funnel through controllers, which then interact with services, and finally, data access. Operations between routes and data access should occur in distinct layers.
- **Update Method**: Neutral feedback questioning the necessity of performing a save operation after an update.
- **Remove Method**: Negative feedback for implementing a hard delete. The model could include an isDeleted flag, though for this project, retaining deleted records may not be necessary, but generally, records are not deleted from the database.
- **Parameter Validation**: Neutral feedback on the absence of parameter validation, though an attempt to encapsulate updates by name is noted. Endpoints for creating and updating should include checks to prevent data corruption and server crashes, such as type checks and preventing unauthorized combinations.
- **Model**: Positive feedback for including a creation timestamp in the model, though it's noted that this is not utilized on the frontend.
- **Config & Constants**: Positive feedback for the configuration and constants.

## Client:

- **Redux**: Positive feedback for using Redux.
- **Redux Usage**: Neutral feedback on how actions (thunk) make API requests directly, suggesting that these requests could be abstracted into a separate layer, like an API, and potentially using Saga for a more event-driven architecture.
- **Component Decomposition**: Negative feedback for the level of component decomposition, indicating that both the individual components and the overall app could be further broken down for better modularity.
- **UI Library**: Negative feedback for the absence of a UI library, highlighting that for the position sought, UX is more critical than UI, thus using pre-made UI libraries is preferred over inline styling.
- **Hooks**: Negative feedback for not utilizing React hooks.
- **Pending, Success, Fail Actions**: Negative feedback for the absence of these actions, which are crucial for providing user feedback.
- **View Styling**: Neutral feedback on styling, with a preference for using styling from UI library components, proceeding with classes if necessary, and resorting to theme-based styling as a last resort.
- **Code Styling**: Neutral feedback suggesting that the render method could be further broken down into sections or functions for better readability, to avoid confronting a block of code upon entering a component.
- **Config & Constants**: Neutral feedback, noting only the presence of a setupProxy and embedding a desired constant directly within actions.

## Extras:

- **General Appearance**: Positive feedback for the overall look of the demo.
- **Polling**: Negative feedback for fetching todos every 10 seconds, suggesting that sockets could be used instead.
