/*
Problem 81. Pro Categorization

Thumblack helps Professionals (Pros) grow their business by identifying new customers.
Upon registering on Thumblack, a Pro specifies which categories of services they provide. To help match
customer requests with qualified Pros, Thumblack, maintains a list of Pros grouped by service categories.
Given a list of pros and their category preferences, return the list of Pros for each category.
EXAMPLE:
For pros ["Jack", "Leon", "Maria"] and preferences = [["Computer Repair, Handyman, House cleaning"],["Computerlessons, Computer repair, Data Recovery"],["Computer Lessons, House Cleaning"]]
the output should be
proCategorization() = [[[Computer Lessons],[Leon, Maria], [[Computer Repair],[Jack, Leon], [[Data recovery service],[Leon]], [Handyman], [Jack], [[House cleaning],[Jack, Maria]]]]

*/

// ------ Original Way of Solving ------

// function proCategorization(names, preferences){
    
//     let listOfPreferences = [];
//     let personAndPreference = [];
//     let miniArray = [];
//     let master = [];

//     for(let i = 0; i < preferences.length; i++){

//         for (let j = 0; j < preferences[i].length; j++){
//             if (!listOfPreferences.includes(preferences[i][j])){
//                 listOfPreferences.push(preferences[i][j]);
//             }
//             personAndPreference.push([names[i], preferences[i][j]]);
//         }

//     }

//     for(let i = 0; i < listOfPreferences.length; i++){
        
//         for (let j = 0; j < personAndPreference.length; j++){
//             if (listOfPreferences[i] == personAndPreference[j][1]){
//                 miniArray.push(personAndPreference[j][0]);
//             }
//         }
//         master.push([[listOfPreferences[i]], miniArray]);
//         miniArray = [];


//     }


//     return master;

// }

// ------ Refactored --------

function proCategorization(names: string[], preferences: string[][]): string[][] {
    let services = {};
    let preferencesArray = preferences.toString().split(',');
    let uniqueServices: string[] = [], namesAndPreferencesArray: string[] = [], categorized: string[][] = [];
    let nameToBePushed = '';

    for (let i = 0; i < preferencesArray.length; i++) {
        if (!services.hasOwnProperty(preferencesArray[i])) {
            services[preferencesArray[i]] = [];
            uniqueServices.push(preferencesArray[i]);
        }
    }

    for (let i = 0; i < names.length; i++) {
        namesAndPreferencesArray.push(...[names[i], ...preferences[i]])
    }

    for (let i = 0; i < namesAndPreferencesArray.length -1; i++) {
        if (!services.hasOwnProperty(namesAndPreferencesArray[i])) {
            nameToBePushed = namesAndPreferencesArray[i];
        } else {
            services[namesAndPreferencesArray[i]].push(nameToBePushed);
        }
    }

    for (let i = 0; i < uniqueServices.length; i++) {
        categorized.push([[uniqueServices[i]], services[uniqueServices[i]]]);
    }

    return categorized;

}

console.log(
    proCategorization(["Jack", "Leon", "Maria"], [["Computer Repair", "Handyman", "House Cleaning"], ["Computer Lessons", "Computer Repair", "Data Recovery Service"], ["Computer Lessons", "House Cleaning"]])
);


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array of a names and an array of preferences,
         group the names according to the preferences.
    b. What are the inputs that go in the problem?
        -an array of strings, and multidimensional array of strings.
    c. What are the outputs that should come from the problem?
        -A multidimensional array of strings
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -names, preferences
2. Explore concrete examples.
    For pros ["Jack", "Leon", "Maria"] and preferences = [["Computer Repair, Handyman, House cleaning"],["Computerlessons, Computer repair, Data Recovery"],["Computer Lessons, House Cleaning"]]
    the output should be
    proCategorization() = [[[Computer Lessons],[Leon, Maria], [[Computer Repair],[Jack, Leon], [[Data recovery service],[Leon]], [Handyman], [Jack], [[House cleaning],[Jack, Maria]]]]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Improved from O(2n^2) quadratic time to O(4n) Linear Time!!!!!
    -There was a lot going on so here's how its done.
    1. First Loop, casts preferences unique values to an object, and also to an array.
    2. Second Loop, creates an array containing a pattern of the name followed by their preferences.
    3. Third loop, iterates through the nameAndPreferencesArray.
        -if the object does not contain the value, then it must be a name.
        -if it is a name, we change the nameToBePushed to that name.
        -else, we push the name to the object key being that matches the index being looked at.
        -our object will then look like this: {preference : [names of people], etc. }
    4. Fourth Loop, lastly, we iterate over each unique value. we output the [[preference], [names of people]] for each value.

    -Added TypeScript Syntax.
    -Only made use of .push and .hasOwnProperty Methods to avoid increase in Time Complexity.
*/

