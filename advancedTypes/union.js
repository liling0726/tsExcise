function getSmallPet() {
    // ...
    return {
        swim: function () { },
        layEggs: function () { }
    };
}
var pet = getSmallPet();
pet.layEggs(); // okay
pet.swim(); // errors
