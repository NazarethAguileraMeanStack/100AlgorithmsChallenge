/*

81. Pro Categorization

-Thumblack helps Professionals (Pros) grow their business by identifying new customers.
Upon registering on Thumblack, a Pro specifies which categories of services they provide. To help match
customer requests with qualified Pros, Thumblack, maintains a list of Pros grouped by service categories.

Given a list of pros and their category preferences, return the list of Pros for each category.

EXAMPLE:

For pros ["Jack", "Leon", "Maria"] and preferences = [["Computer Repair, Handyman, House cleaning"],["Computerlessons, Computer repair, Data Recovery"],["Computer Lessons, House Cleaning"]]

the output should be

proCategorization() = [[[Computer Lessons],[Leon, Maria], [[Computer Repair],[Jack, Leon], [[Data recovery service],[Leon]], [Handyman], [Jack], [[House cleaning],[Jack, Maria]]]]

*/


function proCategorization(names, preferences){
    
    let listOfPreferences = [];
    let personAndPreference = [];
    let miniArray = [];
    let master = [];

    for(let i = 0; i < preferences.length; i++){

        for (let j = 0; j < preferences[i].length; j++){
            if (!listOfPreferences.includes(preferences[i][j])){
                listOfPreferences.push(preferences[i][j]);
            }
            personAndPreference.push([names[i], preferences[i][j]]);
        }

    }

    for(let i = 0; i < listOfPreferences.length; i++){
        
        for (let j = 0; j < personAndPreference.length; j++){
            if (listOfPreferences[i] == personAndPreference[j][1]){
                miniArray.push(personAndPreference[j][0]);
            }
        }
        master.push([[listOfPreferences[i]], miniArray]);
        miniArray = [];


    }


    return master;

}

console.log(
    proCategorization(["Jack", "Leon", "Maria"], [["Computer Repair", "Handyman", "House Cleaning"],["Computer Lessons", "Computer Repair", "Data Recovery Service"],["Computer Lessons", "House Cleaning"]])
);