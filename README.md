# Tahc

Tahc is a fully open-source chat application running on a MEAN stack. It is
inspired on the concept of omeagle, but focuses primarily on delivering a more
customizable, personalized and social experience by allowing users to join
random chat groups and obtain popularity throughout usage.

## Installation

In order to run Tahc on your computer, you must first install Node.js. This
varies depending on your platform, there we recommend checking out the official
guide [here](https://nodejs.org/en/download/).

### Pre-requisites

First, ensure you have all the tools you need by running the following
instructions.

1. Ensure you have npm installed by running `npm --version`.
  * If you don't have npm installed, refer to the _Installation_ section.
2. Install bower globally by running `npm install -g bower`.
3. Install grunt globally by running `npm install -g grunt`.

### Installation

After installing the required packages, setup your development environment by
following these instructions:

1. Fork the repository and clone it on your computer.
2. Navigate to the directory where you've cloned the repository.
3. Run `npm install` to obtain all required dependencies.
4. Run `bower install` to obtain all required libraries.

## Usage

After setting up your environment for running Tahc locally, just run `npm start`
to start the server. You may optionally pass in a custom port number for the
server to bind to if you do not wish to use port 8000, the default setting. You
can find more details on how to do this
[here](http://stackoverflow.com/questions/13333221/how-to-change-value-of-process-env-port-in-node-js).

You may run `grunt watch` to execute JSHint on your code automatically. We will
not accept PRs with JSHint warnings.

In order to run tests, run `npm test`. We will not accept PRs that are failing
tests, but we can help you with those if you need any help.

## Credits

[@mhackerx](https://github.com/mhackerx): Donating [tahc.pw](http://tahc.pw)
