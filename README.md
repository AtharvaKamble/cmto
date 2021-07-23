# cmto

A cli to create an ease of collaboration among developers

## What is this?
This is a command-line application which aims at making new huge codebases familiar to move around for new developers joining in.

## How to use it?
You can create new `cmto-keys` and leave them in code in the form of comments. When other developers need to move around the code-base, they can use `cmto` from the command line itself to see what piece of code lies where.

## How would I set this up for development?

Install build dependencies
```sh
npm install
```
Build the project
```sh
npm run build
```
Create a sym link for the project locally (equivalent of installing globally)
```sh
npm link
```
Run Typescript compiler with `--watch`
```sh
npm run dev
```
Test by running CLI
```sh
cmto
```
