interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  // ...
  return {
    swim: () => { },
  layEggs:()=>{ }
}
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors