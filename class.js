class Dog{

    constructor (breedArg,colorArg,barking_soundArg){
        this.breed=breedArg;
        this.color=colorArg;
        this.barking_sound=barking_soundArg;
    
    
    }

    bark () {
        // console.log(this.barking_sound);
        return  this.barking_sound
    }


};

let dog = new Dog("Germany Shephered","black","whoof")
         console.log(dog.barking_sound);
// let dog2 = new dog("French Bulldog","black","whoof whoof")
// let dog3 = new dog("Golden Retriever","black","whoof whoof whoof")


// dog.bark()
// dog2.bark()
// dog3.bark()