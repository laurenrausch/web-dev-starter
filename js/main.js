/**
 * This file should only contain functions that don't interact with the DOM.
 * That means no document.querySelector, no document.getElementById, etc.
 * This file should only contain functions that do things like calculations,
 * data manipulation, etc. This is so that we can test these functions
 * without having to worry about the DOM or the browser environment.
 */

/**
 * This function dislays an alert with the string 'Hello World' on the webpage
 */
export function helloWorldPopup() {
    alert('Hello World!!');
}

/**
 * This function dislays an alert with the name string on the webpage
 */
export function myName() {
    alert('Lauren Rausch but I go by Ren.')
}
/**
 * This function dislays an alert with the a graduation information string on the webpage
 */
export function myGraduation() {
    alert('I am hoping to graduate Decemeber 2025, but it may be May 2026.')
}
/**
 * This function dislays an alert with the job information string on the webpage
 */
export function myJob() {
    alert('I do not have a job in web development currenlty, but I hope to get one eventually!')
}
/**
 * This function dislays an alert with the experience information string on the webpage
 */
export function myExperience() {
    alert('I have not had an internship in web development but I am hoping to get one for this summer!')
}
/**
 * This function adds two numbers together and returns the sum. This demonstrates
 * how to pass parameters to a function and return a value from a function
 * from HTML.
 * @param {number} a The first number to add
 * @param {number} b The second number to add
 * @returns {number} The sum of the two numbers
 */
export function add(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        throw new Error('You must provide two numbers to add');
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('You must provide two numbers to add');
    }
    return num1 + num2;
}

/**
 * This function fetches a random joke from the "Official Joke API" and returns it.
 * @returns {string} A joke in the format "setup - punchline"
 */
export async function fetchRandomJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) {
            throw new Error('Failed to fetch a joke');
        }
        const joke = await response.json();
        return `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        throw new Error(error.message);
    }
}
