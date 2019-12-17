function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}
interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  return {
    swim:()=>{
      console.log('swin')
    },
    layEggs:()=>{
      console.log('layEggs')
    }
  }
}

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly();
}