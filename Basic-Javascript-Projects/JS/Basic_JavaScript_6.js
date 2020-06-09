function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."
}

//two version of the same idea using a ternary operator
function votingAge() {
    var age, canVote;
    age = document.getElementById("voting_age").value;
    canVote = (age >= 18) ? "You're eligible!":"Not quite!";
    document.getElementById("ageCheck").innerHTML = canVote;
}

function canIVote() {
    var birthYear, voter, today;
    birthYear = document.getElementById("birth_year").value;
    today = new Date();
    voter = ((today.getFullYear() - birthYear) >= 18) ? "You can vote!":"Not Quite!";
    document.getElementById("voteCheck").innerHTML = voter;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

function music(Title, Artist, Genre) {
    this.music_title = Title;
    this.music_artist = Artist;
    this.music_genre = Genre;
}
var party = new music("Party", "Beyonce", "Pop");
var breakup = new music("Slow Dancing In A Burning Room", "John Mayer", "Blues/Pop");
var simple = new music("Evening Morning Day", "David Lang", "Classical Contemporary");
function musicFunction() {
    document.getElementById("New_and_This").innerHTML = 
        "A good song to party to is " + party.music_title + " by " + party.music_artist +
        "." + " It's in the " + party.music_genre + " genre."
}

// Two new constructor functions 

function Friend(first, last, email, phone) {
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.phoneNumber = phone;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

function Address(number, street, unit, city, state, zip) {
    this.dwellingNumber = number;
    this.streetName = street;
    this.unitNumber = unit;
    this.cityName = city;
    this.stateName = state;
    this.zipCode = zip;
}

//Nested function

function unicornWings() {
    document.getElementById("Nested_Function").innerHTML = newWings();
    function newWings() {
        var startWings = 0;
            function addWings() {
                startWings += 1;
            }
        addWings();
        return startWings;
    }
}
