# Serverless Custom Template

![alt text](assets/serverless-logo.png)

Base for create a project in serverless framework

## What's included

- Folder structure used consistently across our projects.
- [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
- [serverless-plugin-optimize](https://www.npmjs.com/package/serverless-plugin-optimize): Bundle with Browserify, transpile and minify with Babel automatically to your NodeJS runtime compatible JavaScript.

## Getting started

```shell
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/ivanojgarcia/serverless-ecma-base
cd YOUR_PROJECT_NAME
npm install
```

## Execute the serverless local CLI

To avoid issues by version, the serverless package you can install the serverless framework package locally with `npm install serverless`.
After that, the Serverless Framework CLI was added as Dev Dependency.
You can use the serverless commands using `npm run sls [-- <args>]`, where the `--` delimits options for the `npm run` command and you must pass the arguments to the `sls` script, you must to create the script into the `package.js` file.

Examples:

```shell

  npm run sls -- deploy -s dev
  npm run sls -- offline -s dev

```

## Update the dependence

To update the dependence, is recommended install the *npm-check*, you can install with `npm install -g npm-check` after that execute the command to update the dependecies `npm-check -u`
the reference [here](https://www.npmjs.com/package/npm-check)
