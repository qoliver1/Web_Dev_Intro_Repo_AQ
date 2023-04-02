//TODO: Need to finish commenting the rest of the code, then can run command jsdoc index.js to create an out file
/**
 * Reference to a button element in the HTML file index.html
 * @global
 * @type {HTMLElement}
 */
const submitButton = document.querySelector("#submitButton");

/**
 * 
 * @global
 * @type {string}
 */
const form = document.querySelector("form");

/**
 * 
 * @global
 * @type {string}
 */
const firstInput = form.querySelector("input");

/**
 * 
 * @global
 * @type {string}
 */
const allStudents = [];

/**
 * Gets all instances of input and stores them in a node list
 */
const allInputs = document.querySelectorAll("input");

/**
 * Array of strings whose elements are chosen at random for 
 * use in a new <p> element, before an objects name
 */
const welcomeBeginning = [
    "A new student ",
    "Beware, ",
    "Uh-oh, ",
    "Oh boy, "
];

/**
 * Array of strings whose elements are chosen at random for 
 * use in a new <p> element, after an objects name
 */
const welcomeEnding = [
    " has just shown up!",
    " is here to party!",
    " is beginning their lifelong journey!",
    " is too cool for school!"
];

/**
 * 
 * @class
 */
class Student {
    /**
     * @constructor
     * @param {string} fname - users entered first name
     * @param {string} lname - users entered last name
     * @param {string} counter - a static count that is incremented whenever a new object of class student is created
     * 
     */
    static count = 0;
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
        this.counter = Student.count++;
    }

    //Can also use JSON.stringify(object) to turn it into a JSON object, might be better
    toJSON () {
        const obj = {
            "firstName" : this.fname,
            "lastName" : this.lname,
            "id" : this.counter
        }
        return obj;
    }

    addToDynamicList () {
        const data = this.toJSON();
        allStudents.push(data);
    }

    returnJSONObject() {
        const data = this.toJSON();
        return data;
    }
}

/**
 * 
 * @param {*} input 
 */
function clearInput (input) {
    if (input.type !== "button"){
        input.value = "";
    }
}

/**
 * 
 * @param {*} obj 
 */
function listElementsInJSON(obj) {
    console.log(`${obj.id} ${obj.firstName} ${obj.lastName}`);
}

/**
 * 
 * @param {*} myArray 
 * @returns 
 */
function returnRandomArrayElement(myArray) {
    const randomIndex = Math.floor(Math.random() * myArray.length);
    return myArray[randomIndex];
}

/**
 * 
 */
function doAction() {
    let fname = document.querySelector("#fname").value.trim();
    let lname = document.querySelector("#lname").value.trim();
    const nameRegex = /^[a-zA-Z ]+$/;
    allInputs.forEach(clearInput);
    firstInput.focus();
    if (fname === "" || lname === "" || !nameRegex.test(fname) || !nameRegex.test(lname)) {
        alert("Please enter a valid name");
        return;
    }
    const newStudent = new Student(fname, lname);
    newStudent.addToDynamicList();
    addStudentToPage(newStudent.returnJSONObject());
}

/**
 * 
 * @param {*} obj 
 */
function addStudentToPage(obj) {
    const name = obj.firstName + " " + obj.lastName;
    const pElem = document.createElement("p");
    const nameNode = document.createTextNode(name);
    const beginningNode = document.createTextNode(returnRandomArrayElement(welcomeBeginning));
    const endingNode = document.createTextNode(returnRandomArrayElement(welcomeEnding));
    const lineBreak = document.createElement("br");
    pElem.appendChild(beginningNode);
    pElem.appendChild(nameNode);
    pElem.appendChild(endingNode);
    pElem.appendChild(lineBreak);
    document.querySelector("#forAdding").appendChild(pElem);
}

/**
 * 
 */
document.querySelector("#lname").addEventListener("keydown", (e) => {
    //console.log(e.key);
    if (e.key === "Enter") {
        e.preventDefault();
        doAction();
    }
});

/**
 * 
 */
submitButton.addEventListener("click", () => {
    doAction();
});


/**
 * 
 */
document.querySelector("#checkButton").addEventListener("click", () => {
    allStudents.forEach(listElementsInJSON);
});



