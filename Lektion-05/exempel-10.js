 /**
  * Objektet String
  */
 let myName = "Mahmud Al Hakim        ";
 console.log(myName);
 console.log("Längd före trim: " + myName.length);
 myName = myName.trim();
 console.log("Längd efter trim: " + myName.length);
 console.log(myName.toUpperCase());
 console.log(myName.toLowerCase());
 console.log("Förnamn: " + myName.substring(0,6));
 let space = myName.indexOf(' ');
 console.log("Första space ligger på plats nr " + space);
 console.log("Efternamn: " + myName.substring(space+1))

 // Konvertera en sträng till en array
 console.log(myName.split(' '));


/*******************************************************
*                   Objektet Number
*******************************************************/

 let pi = 3.14159;
 console.log(pi);
 console.log(pi.toFixed(2));     // 3.14
 console.log(pi.toFixed(3));     // 3.142
 console.log(pi.toPrecision(3)); // 3.14


/*******************************************************
*                   Objektet Math
*******************************************************/

console.log(Math.PI);
console.log(Math.round(2.1)); // 2
console.log(Math.round(2.5)); // 3

console.log(Math.pow(2,5));
console.log(Math.pow(3,5));

console.log(Math.sqrt(16));

console.log(Math.min(5,3));
console.log(Math.max(5,3));

console.log(Math.random());
console.log(Math.random() * 10 + 1); // Slumptal mellan 1 och 10
console.log(Math.round( Math.random() * 10 + 1) );



/*******************************************************
*                   Objektet Date
*******************************************************/

let datum = new Date();
console.log(datum)
console.log(Date());
console.log(datum.getFullYear());
console.log(datum.getMonth()); // 11 (december) 0-11
console.log(datum.getDate());  // 9  (1-31)
console.log(datum.getDay());   // 3  (0-6)
console.log(datum.getHours());
console.log(datum.getMinutes());
console.log(datum.toLocaleDateString());
console.log(datum.toLocaleTimeString());