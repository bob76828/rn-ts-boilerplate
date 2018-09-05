# File contents
|       |usage|description|
|-------|-----|-----------|
|.vscode|vs code| vscode related settings |
|env|react-native environment variable|Module to expose config variables to your javascript code in React Native|
|src|source codes||
|storybook|storybook config|Storybook is a development environment for UI components.|
|.gitignore|ignore file for git|Specifies intentionally untracked files that Git should ignore|
|.watchmanconfig|watchman config|A file watching service for react-native|
|app.json|app config||
|App.ts|root element||
|.babelrc.js|babel||
|index.js|entry point||
|tsconfig.json|babel-reset-typescript/typescript||
|.dockerignore/Dockerfile|docker||
|docker-compose.yml|docker-compose|local develop|
|jest.config.js|jest|test framework|
|tslint.json|tslint|linter|

# Getting Started
## Installation
Install it once:
```bash
brew install watchman
```
## setup
Run eject command and the "Building Projects with Native Code" instructions will be required to continue working on your project.
```bash
yarn install; yarn eject
```