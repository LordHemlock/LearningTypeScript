function buildName(firstName: string, lastName?: string): string {
    if (lastName)
        return `${firstName} ${lastName}`;
    else
        return firstName;
}

let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams");
// let result3 = buildName("Bob", "Adams", "Sr.");  // Would cause an error due to too many arguments

/*
By default in JS, all parameters are optional.  Adding the question mark to
the end of the parameter name gives TS the same functionality
 */

function buildName2(firstName: string, lastName = "Smith"): string {
    return `${firstName} ${lastName}`
}

/*
Using default parameters works the same as other languages.  Passing undefined will also cause the default to be used
 */

function buildName3(firstName = "Will", lastName: string): string {
    return `${firstName} ${lastName}`;
}

/*
Unlike in Python, default parameters can come before required ones.  You would still need to use 2 arguments
in this case, however the following would work fine and also use the default:
let result4 = buildName3(undefined, "Adams");
 */

function buildName4(firstName: string, ...restOfName: string[]) {
    return `${firstName} ${restOfName.join(" ")}`
}

let employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);

/*
ellipses (...) take the place of the asterisk (*) for the purpose of the *args equivalent
 */