function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    return {
        swim: function () {
            console.log('swin');
        },
        layEggs: function () {
            console.log('layEggs');
        }
    };
}
var pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
