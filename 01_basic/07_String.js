 const FirstNAme="Manish"
 const MiddleNAme="Kumar"
 const LastName="Pandey"

 const Age=23

//  console.log(FirstNAme+MiddleNAme+LastName+" AGe:"+Age);

//Using Backtics For string placeholder

// console.log(`${FirstNAme} ${MiddleNAme} ${LastName} Age:${Age}`);

const GameName=new String('Snake')
// console.log(typeof GameName);
// console.log(GameName.length);
// console.log(GameName.toUpperCase());
// console.log(GameName.charAt(3));
// console.log(GameName.indexOf('a'));

const OtherString=GameName.substring(0,2)

const anotherString=GameName.slice(-5,3)
console.log(anotherString);

const username="     MAnish kumar pandey   "
// console.log(username);
// console.log(username.trim()); // trim() use for removing starting and back extra space remove.

const userUrl="unknnown%person@1235@.com"
console.log(userUrl.replace('%','-'));
console.log(userUrl.split('@'));

// String Methods
//static methods- fromcharcode(),fromcodepoint(),raw()

//Fromcharcode()
String.fromCharCode(65, 66, 67); // returns "ABC"
String.fromCharCode(0x2014); // returns "—"
String.fromCharCode(0x12014); // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212); // also returns "—"; 8212 is the decimal form of 0x2014


// console.log(`${String.fromCharCode(65, 66, 67)} ${String.fromCharCode(0x2014)} ${String.fromCharCode(0x12014)}`);

