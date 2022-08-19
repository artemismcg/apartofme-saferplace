# SAFER-PLACE
A Safer Place is being launched by Apart of Me (an award-winning charity that helps children cope with loss and trauma) in co-operation with World Jewish Relief, Amna, Dentsu, Compass Pathways and Beetroot. It’s a digital resource where parents and carers of Ukrainian children can find well designed, easy to use resources and tools to help them guide their children through this crisis and minimise any long-term psychological harm. From therapeutic games to advice on building resilience in children.

# Contributing

1. Fork the project.
2. Create a new branch.
3. Make changes to the project.
4. Commit the changes.
5. Push the changes to the remote repository.
6. Create a pull request.


## Prerequisites
For the correct run of the project, it is necessary to have at least the following dependencies installed:

### Global Dependencies

* Expo-cli version 6.0.1 [Expo-Cli Installation](https://docs.expo.dev/get-started/installation/)
* Node version 16.16.0 [NodeJs Installation](https://nodejs.org/en/)
* NPM version 8.11.0 

## Installation

To install the dependencies run the following command:

```bash
npm install
```

Then, to run expo and launch the application, the following command must be run:

```bash
npm start
```

## Configuration

For the correct run of the project, it is necessary that you have configured the following configuration file in the following path:

```
srs\firebase\config.js
```
This file have to contain the following configuration:

```js
const firebaseConfig = {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id"
};

export default firebaseConfig;
```
For security reasons, the configuration file is not included in the repository.

## Open source licensing info
1. [LICENSE](LICENSE)

