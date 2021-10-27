# Specialty Name Lookup

### Thought Question

> How might you extend your solution to process tens of millions of elements in the list of IDs? The list of specialities? Both?

When increasing the collection sizes for the IDs and/or the Specialities, we will run into collection/lookup-based performance issues. Outside of some extreme machine upgrades, we should be looking at how to refactor and redesign parts of the app to run the process in batches and parallel—no small task for an easily said sentence.

For a more concrete example: We could approach this by splitting the large set(s) in question into a group of smaller data collections. With smaller collections at our disposal, we would simultaneously search them in batches using asynchronous/distributed features of our language/platform. Afterward, we would need then to collect the individual matches into a final result set.

In the context of this Node/ES example, we will run into some problems as Node is a single-threaded environment. With this constraint in mind, we would have to change how this app runs on the machine itself. Here though, we could utilize Node's built-in cluster features to become a multi-threaded environment. Node's cluster feature allows us to spin up an instance of our application per CPU virtual thread. Once we add multiple instances of our application, it will need to be updated to allow a single entry point of ids to be passed in and then processed across the numerous instances in an asynchronous nature.

The trade-off here is that we increase the overall complexity of the application, which means that the barrier to entry for who can maintain the architectural elements of the application increases along with the overall complexity of how we would need to test it.

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
