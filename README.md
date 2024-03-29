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



## Feedback from the 2019 Assignment Review by @mcenkbatman

### General Notes

- **Deployment**: Positive feedback on successful app deployment.
- **Commit Messages**: Negative remark for non-descriptive commit messages, suggesting the need for clarity.
- **Empty Task Creation**: Highlighted as a downside. Tasks without content can be created, leading to error responses. Suggested improvements include frontend validation and error notifications.
- **Design**: Praised for the app's design.
- **User Feedback on Requests**: Lack of user feedback mechanisms (like overlays or spinners) during server communication was noted as a missing feature.
- **Update Endpoint Parameters**: Criticism for the update endpoint's lack of specificity on what it updates.
- **Responsiveness**: The app's responsiveness was commended.
- **Extra Features**: Positive note on additional features like filtering tasks by status and the option to remove completed tasks.
- **README**: Positive feedback for including a README.

### Server-Side

- **Code Styling & Variable Naming**: Neutral observation on code styling and naming conventions.
- **Layering**: Negative feedback on the lack of separation between routes, controllers, services, and data access layers, suggesting a more structured approach.
- **Update Method**: Questioned the necessity of saving after an update operation.
- **Remove Method**: Criticism for hard deleting tasks rather than marking them as deleted, although it was noted this might not be critical for this project.
- **Parameter Validation**: Lack of parameter validation was pointed out, though encapsulation for updates was seen as a positive step.
- **Model**: Positive for including creation timestamps, though it's noted this isn't utilized on the frontend.
- **Configuration & Constants**: Commended for proper use.

### Client-Side

- **Redux**: Positive feedback on using Redux.
- **Redux Usage**: Mixed feelings about the direct API calls within actions, suggesting separation and the potential use of Saga for an event-driven architecture.
- **Component Decomposition**: Advised for more granular component breakdown to enhance modularity.
- **UI Library**: Noted absence and emphasized the importance of using UI libraries for UX-focused positions rather than inline styling.
- **Hooks**: Negative for not utilizing React hooks.
- **Action States (Pending, Success, Fail)**: Pointed out as missing, which is important for user feedback.
- **View Styling**: Neutral on styling approaches, expressing a preference for UI library styles over inline.
- **Code Styling**: Suggested improvements in rendering methods for readability and modularization.
- **Config & Constants**: Mixed feedback on the use of setup proxy and constants within actions.

### Extras

- **General Appearance**: Liked the overall look of the demo.
- **Polling**: Critiqued the method of fetching todos every 10 seconds, suggesting sockets as an alternative.
