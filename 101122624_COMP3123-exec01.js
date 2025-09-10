//Steven Nguyen
//101122624

//Exercise 1
function capitalize_Sentence(sentence){
    array = sentence.split(" ");
    result ="";
    word = "";
    for(i=0;i<array.length;i++){
        first=array[i][0].toUpperCase();
        word = first.concat(array[i].slice(1))
        result=result.concat(word," ");
    }
    return result;
}

console.log("\n"+"Exercise 1");
console.log("---------------------");
console.log(capitalize_Sentence("the quick brown fox") + "\n");

//Exercise 2
console.log("Exercise 2");
console.log("---------------------");
console.log(Math.max(1,0,1));
console.log(Math.max(0,-10,-20));
console.log(Math.max(1000,510,440)+"\n");

//Exercise 3
function right(word){
    replaced="";
    if(word.length>=3){
        part1=word.substr(-3);
        part2=word.slice(0,word.length-3);
        replaced = part1.concat(part2);
        return replaced
    } else{
        return word
    }
}

console.log("Exercise 3");
console.log("---------------------");
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi")+"\n");


//Exercise 4
function angle_Type(angle){
    result ="";
    if (angle==0 || angle<90){
        result="Acute angle";
    } else if(angle==90){
        result="Right angle";
    } else if(angle>90 && angle<180){
        result="Obtuse angle";
    } else if(angle==180){
        result="Straight angle";
    }
    return result;
}

console.log("Exercise 4");
console.log("---------------------");
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180) + "\n");
