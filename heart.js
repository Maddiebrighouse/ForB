var love = true;
var counter = 0;
function statement(){
    const names = ["Darling", "Love", "Boo", "Cute Stuff", "B" ];
    const message = ["love", "adore", "worship you (just a little)."];
    const love = ["the world", "more than chocolate", "more than all the cutest cats in the world", "more than coca cola", "so god damn much"];

    var randomLove = love[Math.floor(Math.random()*names.length)];
    var randomName = names[Math.floor(Math.random()*names.length)];
    var randomMessage = message[Math.floor(Math.random()*message.length)];

    if(randomMessage === "worship you (just a little)."){
        console.log(randomName + " I " + randomMessage);
    } else {
        console.log(randomName + " I " + randomMessage + " you.");
    }
    console.log("You mean " + randomLove + " to me.");
    console.log("<3 <3 <3 <3 <3 <3")
};

while(love && counter < 50){
    counter++;
    statement();

}