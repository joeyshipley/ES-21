# ES Kata Boiler

### Setup
- Node 16.x installed (consider nvm if you have not used it before)
- ``` terminal > npm install ```
- *(optional)* ``` terminal > npm install --global mocha ```

### Running Stuff

#### One Line Bash Command
- ``` terminal > bash bashRunner.sh ```

#### Node Runner: Kata
- ``` terminal > npm start ```

#### Node Runner: Test Suite
- ``` terminal > npm test ```

#### Node Runner: Individual Specs/Tests
If not already installed, you will need to have mocha installed globally to your node version.
- ``` terminal > npm install --global mocha ```

##### Specific spec file
- ``` terminal > mocha tests/kata.specs.js```

##### Specific test
- ``` terminal > mocha -g 'allows tests to control dependency output' ```

*Replace the string value with the message in your test declaration.*

### Resources
- [nvm](https://github.com/nvm-sh/nvm)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
