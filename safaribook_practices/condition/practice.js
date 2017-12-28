// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var passwordStrength = function (password) {
	var len = password.length < 7 ? console.log ("it's weak password") : console.log(" it's ok")
};


// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
var isLeapYear = function (year) {
	if (year % 4) && !(year % 100)
		return true
	else 
		return false
};


// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
var firstInDictionary = function (a , b , c) {
	if (a <= b && a <= c)
		return a
	else if (b <= a && b <= c)
		return b
	else if (c <= a && c <= b)
		return b
};


// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
var getTagName = function (tag) {
	if !(tag.slice (0 , 1) === "<" && tag.slice(tag.length - 2, tag.length - 1) === ">")
		throw ("this is not valid tag")
};


// Re-implement our improveTweet function so it can generate any of lol, omg,
// lmao, and rofl.
var improveTweet = function (tweet) {
	if (tweet.toLowerCase.indexOf(lol) == -1)
		tweet =  tweet + "lol"
	if (tweet.toLowerCase.indexOf(omg) != -1)
		tweet = tweet + "omg"
	if (tweet.indexOf(lmao) != -1)
		tweet = tweet + "lmao"
	if  (tweet.indexOf(rofl)!= -1)
		tweet = tweet + "rofl"
	return tweet

};


// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.
var isQuestion = function (input) {
	if (input.slice(input.length - 2, input.length - 1) === "?")
		return true
	else
		return false
};


// The Magic 8 Ball is a classic toy that allows you to ask a yes/no
// question and it responds with a random answer. Most of the time (at least half)
// it responds with a "positive" answer, about a quarter of the time it responds
// with a "neutral" answer, and about a quarter of the time it responds with a
// "negative" answer. You can read more about the Magic 8 Ball toy (and see it's
// actual responses) on Wikipedia.
//
// Write a function that simulates the Magic 8 Ball by generating a random
// number. Try to make it match the probabilities of the real toy.
//
//     magic8Ball("Will people like this problem?");
//     //=> Very doubtful
//
//     magic8Ball("Do people like these videos?");
//     //=> My reply is no
//
//     // throw an error if there's no question mark at the end
//     // use your isQuestion function from the previous question
//     magic8Ball("you suck");
//     //=> THAT DOESN'T SOUND LIKE A QUESTION!
//
//     magic8Ball("Is this a question?");
//     //=> Signs point to yes
var magic8Ball = function (question) {
	if (isQuestion){
		min = Math.ceil(min);
  		max = Math.floor(max);
  		rand = Math.floor(Math.random() * (max - min + 1)) + max;
  		if rand > 10
  			return console.log ("signs points to yes")
  		if rand < = 10 && random = > 5
  			return console.log ("my reply is No")
  		if rand < 5
  			return console.log ("very doubtful")
	}
	else
		return console.log ("THAT DOESN'T SOUND LIKE A QUESTION")
};


// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet
//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
//
// You just have to generalize this to an arbitrary index and wrap it in a function.
var interjectAt = function (string, interject, index) {

     var str = "hello world!";
     var beginning = str.slice(0,5);
     var end = str.slice(5,str.length);
     var strWithInterjection = beginning + "-lol-" + end;
     return strWithInterjection
};


// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
var randomInterject = function () {
	var min= 1
	var max = 26
	var length = Math.floor(Math.random()*10)
	alphabets = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
	while(length > 0){
		var string_rand = Math.floor(Math.random()*(max - min + 1) + min)
		string = random_strring + string.indexOf(string_rand)
		length --
	}

	var min= 1
	var max = 26
	var length = Math.floor(Math.random()*10)
	while(length > 0){
		var string_rand = Math.floor(Math.random()*(max - min + 1) + min)
		interject = random_strring + string.indexOf(string_rand)
		length --
	}

	var min= 1
	var max = 26
	var index = Math.floor(Math.random()*10) + min
	interjectAt (string, interject, index)
};
