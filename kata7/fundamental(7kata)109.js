/*Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"*/


function nerdify(txt){
  
return txt.split('').map(item => item ==='a' || item ==='A'?'4':item ==='e' || item ==='E'?'3': item === 'l'?'1':item).join('');
   
}