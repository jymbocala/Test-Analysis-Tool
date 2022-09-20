# Evaluate News NLP Tool

![The Evaluate News NLP Tool App!](src/assets/screely-1663646119068.png "Evaluate News NLP Tool App")

## Table of Contents

* [Project Description](#project-description)
* [Instructions](#instructions)
* [Technologies Used](#technologies-used)

## Project Description

The motive of this project was to have me taste of the environment and tools I will most likely come across in a front end role.

This project required me to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. This tool will help users classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.


## Instructions

1. *Start by setting up your project environment.* It would be good to first get your basic project up and functioning. Fork the project Github repo, and then clone or download the zip file locally.

2. *Setting up the API.* If you started this project after July 7, 2020, you will be using the MeaningCloud Sentiment Analysis API for this project.
        - You can find the API here. Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK.
        - Next, in server/index.js, you need to declare your API credentials.
        - Install the dotenv package. dotenb will allow us to use environment variables we set in a new file.

3. *Project Enhancement.* At the current stage, make enhancement in your project code to ensure most of the requirements as mentioned in the project rubric are met. In addition, parse the response body to dynamically fill content on the page.

4. *Unit Testing using Jest Framework.* Jest is a framework for testing JavaScript projects. We are interested in the unit-testing of our project. The Jest framework provides us the ability to create, and run unit tests. In general, unit testing means to test the functionality of each unit/component of a project. But, in our case, we will write tests for desired functions defined in the src/client/js directory. The tests will check if the functions are behaving expectedly when provided an input.

5. *Service Workers.* Go to the webpack config file, and add the setup for service workers. Test that the site should be available even when you stop your local server.


## Technologies Used
- HTML
- SCSS
- JavaScript
- Node.js
- Express.js
- Web API (MeaningCloud Sentiment Analysis API)
- Webpack
- Jest (Testing)
- Service Worker (External script)


## Author
[Jym Bocala](https://github.com/jymbocala)