var fam = {
    Mother: "Louise",
    Father: "Rob",
    Siblings: 1,
    Brother: "Robbie",
    Grandparents: true,
    Grandfather: "Bob",
    Grandmother: ["Nancy", "Liz"]
};

delete fam.Grandmother[1];

function newDictionary() {
    document.getElementById("dictionary").innerHTML = fam.Grandmother[0];
}

function gMaDictionary() {
    document.getElementById("otherGma").innerHTML = fam.Grandmother[1];
}