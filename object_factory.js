function dog(breedArg,colorArg,barking_soundArg){
return {
    breed:breedArg,
    color:colorArg,
    barking_sound:barking_soundArg,

    bark: function () {
        console.log(this.barking_sound);
    }


}
}

let dog1 = dog("Germany Shephered","black","whoof")
let dog2 = dog("French Bulldog","black","whoof whoof")
let dog3 = dog("Golden Retriever","black","whoof whoof whoof")


dog1.bark()
dog2.bark()
dog3.bark()