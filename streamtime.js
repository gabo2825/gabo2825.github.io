plussecs=presecs+secs;

totmin=(starthour*60)+startminute+Math.floor(plussecs/60);
totsecs=(starthour*60*60)+(startminute*60)+plussecs;

realhours=Math.floor(totmin/60);
realmins=totmin-(realhours*60);
realsecs=Math.round(totsecs-(totmin*60));

if(realmins<10){
  realmins="0"+realmins;
}

if(realsecs<10){
  realsecs="0"+realsecs;
}

emote="";
if(realhours>=24){
  realhours=realhours-24;
  emote="bryce4Eyes";
}


if(secs<6*60*60){
  "Kae started stream at 10:30:00 and is streaming until "+realhours+":"+realmins+":"+realsecs+" CDT! kaestr1Hug "+emote;
}else{
"We've reached the time cap! Kae is streaming until 4:30 CDT. smolYay bryce4Eyes";
}
