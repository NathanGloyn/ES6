function logThing(thing){
    console.log(thing);
}

export default function visibleThing(theThing){
    let thing = `I have a ${theThing}`;
    
    logThing(thing);
}