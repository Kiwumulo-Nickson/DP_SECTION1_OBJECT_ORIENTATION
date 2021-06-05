function  Dog (breedArg,colorArg,barking_soundArg){
    this.breed=breedArg;
    this.color=colorArg;
    this.barking_sound=barking_soundArg;

    this.bark = function () {
        console.log(this.barking_sound);
    }

}

let dog1 = new dog("Germany Shephered","black","whoof")
let dog2 = new dog("French Bulldog","black","whoof whoof")
let dog3 = new dog("Golden Retriever","black","whoof whoof whoof")


dog1.bark()
dog2.bark()
dog3.bark()