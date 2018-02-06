# memory-game

* A memory game of catoon images that demonstrates a basic react application.
[Memory Game](https://github.com/deep-research/memory-game)

## Getting Started

* You can check out a working version of this project in the link above, or install it on your computer with the instructions below.

### Prerequisites

* Node.JS
* Yarn Package Manager
* Babel.JS

### Installing

1. `git clone` into your directory.
2. `yarn install` to prepare the necessary packages.
3. `yarn build` to optimize the application.
4. `npm install --save-dev babel-cli babel-preset-env` if you don't have Babel.JS working yet.
4. `yarn start` to get it running.
5. It will open in `localhost:3000`.

## Deployment

* If you would like to deploy this app to github pages, the instructions can be found here: [Instructions](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages)
* Start by creating an ordinary Github repository.
* The key commands are:
    1. `yarn add gh-pages`
    2. `yarn deploy`
* Run them every time you wish to update the page.

## Built With

* [React](https://reactjs.org/) - Frontend Framework by Facebook
* [Shuffle-array](https://www.npmjs.com/package/shuffle-array) - Randomize the order of the elements in an array.
* [README-Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - A template to make good README.md.

## Author

* [Deep Research](https://github.com/deep-research)

## Comments

* React is great, but it takes a bit of getting used to. The key thing here was to understand that data should be passed from parent to child.
* Topics for study:
    * ES6 syntax
    * Connecting components together to create an organized file structure
    * Sending data through the file structure with props
    * `setState()` to keep track of changing data in the state object
    * Lifecycle events such as `componentDidMount()`
