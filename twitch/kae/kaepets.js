/*kaepets.js by Gabo2825. Code for Nightbot.*/
/*Used in kaestrain.*/
const introemote=[" kaestr1Hug ",
                  " kaestr1Cool ",
                  " kaestr1Eyes "];

const love=[' elizab34Uwu ',
            ' kaestr1Hug ',
            ' abibeaHug ',
            ' abbybaHug ',
            ' smolHug ',
            ' lycelHug ',
            ' pcrowHug ',
            ' archit3Hug ',
            ' bbytesLove ',
            ' archit3Love ',
            ' smolLove ',
            ' lycelLove ',
            ' pcrowLove ',
	    ' lycelGib ',
            ' matt38Love '];

const cry=[' kaestr1Cry    ',
           ' elizab34Hands ',
           ' lycelHands    ',
           ' smolHands     ',
           ' tomshi1Cry    ',
           ' abbybaCry     ',
           ' archit3Cry    ',
           ' linkusCry     ',
           ' pcrowCry      ',
           ' smolCry       ',];

const omg=[' smolWow     ',
           ' pcrowWow    ',
           ' smolD       ',
           ' bryce4Eyes  ',
           ' lycelW      ',
           ' lycelAAA    ',
           ' smolBrain   ',
           ' pcrowBrain  ',
           ' cjyaPog     ',
           ' kaestr1Eyes ',
           ' maizEyes    ',
           ' maizBlush   ',
           ' abibeaLurk  ',
           ' elizab34Pog '];

const sleep=[' pcrowCozy ',
             ' pcrowZ ',
             ' maizNap ',
             ' snazjdComfy ',
             ' cjyaComfy ',
             ' lycelComfy ',
             ' abbybaComfy ',
             ' hammer89Comfy ',
             ' smolNap '];

const nom=[' smolNom ',
           ' abbybaNom ',
           ' maizNom '];

const lul=[' elizab34LUL ',
           ' smolLUL ',
           ' pcrowGiggle '];

if (/^version$|^v$|^ver$/i.test(query)) {
    " This thing is working. - August 4 2021 at 18:40 UTC-5. ";
}
else if (/^code$/i.test(query)) {
    " Here, check it out! https://gabo2825.github.io/twitch/kae/kaepets.js ";
}

else {
    count=0;
    while (count<1) {
        if (/^Millie$|^m$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Millie is the ";
            }
            else {
                count++
            }
            facts=["{Insert Millie Fact}"];
            intro+" demon cat lycelChaos : "+facts[Math.floor(Math.random()*facts.length)];
        }
        
        else if (/^Fitz$|^f$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Fitz is the ";
            }
            else {
                count++
            }
            facts=["{Insert Fitz Fact}"];
            intro+" big cat widepeepoHappy : "+facts[Math.floor(Math.random()*facts.length)];
        }
        
        else if (/^Nym$|^n$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Nym is the ";
            }
            else {
                count++
            }
            facts=["{Insert Nym Fact}"];
            intro+" 3 legged cutie: "+facts[Math.floor(Math.random()*facts.length)];
        }
	    
	else if (/^Gwen$|^g$/i.test(query)) {
            count++;
            if (count>=1) {
                intro=" Gwen is the dog, an ";
            }
            else {
                count++
            }
            facts=["{Insert Gwen Fact}"];
            intro+" Australian Shepherd: "+facts[Math.floor(Math.random()*facts.length)];
        }
	    
        else {
            query=["Millie",
                   "Fitz",
                   "Nym",
		   "Gwen"];
            query=query[Math.floor(Math.random()*query.length)];
            intro=" Kae's got 4 cuties: Millie, Fitz, Nym, and Gwen!"+introemote[Math.floor(Math.random()*introemote.length)]+"Here's a fact about "+query+", the ";
            count--;
        }
    }   
}
