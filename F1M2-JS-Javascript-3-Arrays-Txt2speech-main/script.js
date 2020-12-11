    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index];
        let woord3 = restwoord[index];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["sem", "daniel", "damian"];
    const werkwoord = ["klapt", "zuipt", "zuigt"];
    const restwoord = ["hard", "jonko", "een lamp"];
        
    let plaatjes = ["https://photos1.blogger.com/blogger/8083/1932/1600/image060.jpg", "https://pbs.twimg.com/media/EQfIUSXWkAAqoqJ.jpg","https://api.omroepbrabant.nl/img/f/768/432/0.5/0.5/bWVkaWEvcHJvZC84NTA5NjcuanBnP3N2PTIwMTktMDctMDcmc3Q9MjAyMC0wNS0wMlQxMCUzQTM0JTNBMzFaJnNlPTIwNDAtMDUtMDJUMTAlM0EzNCUzQTMxWiZzcj1iJnNwPXImc2lnPTJtSktFQ1JDTHRxbmVmelFlNnVwakZGNm4zeE1xRWF6a3AlMkJVZEJHQzBMZyUzRA=="]
    let arrayLength = onderwerp.length;
