/*
54. Find Email Domain

-An email address such as "John.Smith@example.com" is made up of local part ("John.Smith"), an @ symbol then domain "example.com".

The domain name part of an email address may only consist of letters, digits, hypens, and dots. The local part, however, allows a lot of different special characters.
Here you can look at several examples of correct and incorrect email addresses.

Given a valid email address, find its domain part.

EXAMPLE:

address = "prettyandsimple@example.com", output should be example.com.
address = "<>[];;@*!$%+=/=?^_{}\\`~a""@example.org", the output should be example.org


*/


function findEmailDomain(email){
    return email.substring(email.lastIndexOf("@") + 1);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain("<>[];;@*!$%+=/=?^_{}\\`~a'@example.org"));