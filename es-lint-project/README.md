# Readme

Goal: get experience using the eslint tool

## Steps

1. Create a new Node.js project with `npm init -y`
2. Create a `myFile.js` with content to lint
3. Install eslint and its stylistic plugin with `npm i -D eslint @stylistic/eslint-plugin`
4. Create file `eslint.config.mjs` 
5. Add content to the file, in particular rules for quotes and semicolons
6. Run eslint with command `npx eslint myFile.js`

## Issues

The main issue I faced was needing to identify the additional plugin in order to do this particular assignment. The main eslint teams decided to deprecate formatting and stylistic-related rules because of their maintenance cost. The community is choosing to maintain a plugin for the missed stylistic rules. [Here is their reasoning](https://eslint.style/guide/why).

## Observations

My observations about eslint are the same as my previous experiences with the tool - the setup is a lot of work, and handling strong style opinions is more for large teams where you want to avoid hashing out stylistic code preferences over and over, and just want to get to the main project issues. It seems incredibly useful at scale, but for my purposes I would love a more lightweight option that does basic checks for spelling and consistency. I wonder how these tools will develop as people become more accostumed to using AI coding agents and copilot-like assistants. 