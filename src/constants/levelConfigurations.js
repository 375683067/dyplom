import * as CONTENT_TYPES from './contentTypes';
import PC from '../levelAssets/pc.jpg';
import numberExample from '../levelAssets/numbers.png';
import Penguin from '../components/characters/penguin';
import Environment from '../components/enviroments/mountains';
import {PENGUIN_HALF} from '../constants/penguinActions'
import controller from '../components/../utils/controllers/penguinController';
import TextPopup from '../components/textPopup/textPopup';
import stringsUrl from '../levelAssets/strings.png';

export const level_1_1 = {
  topic: 'OBJECT',
  info: [
    {
      type: CONTENT_TYPES.TITLE,
      value: 'Hi, welcome to our programming course! If you’ve never learned to program before, you might be wondering what programming actually is. Well, when we write a program, we’re giving the computer a series of comands that kind of look like a weird form of English. You can think of a computer as a very obedient dog, listening to your every command, and doing  whatever you tell it to do. '

    },

    {
      type: CONTENT_TYPES.IMAGE,
      value: PC
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `layDown();
  while(sllepy) {
	sleep();
}`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Giving comands to objects',
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'JavaScript is an object-oriented language. That means that the language has objects that you can give commands to. It\'s just like in real-life.If you look on the right, you will see penguin. ou can give commands to him. To give them commands, you first need to move your mouse inside the box of the Program Area and click. Then, you type which command you want to give.And then, you type two round brackets and a semi-colon (a semi-colon is the symbol that looks like a comma with a dot over it).',
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'So, if you want penguine to walk, you would write, "penguin.walk();" . And lastly, you should click on the Run button. Now, try to jump. First, click on the Clear button to get rid of the old command.',
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Here are some of the things you can tell him to do: ',
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `penguin.blink();
penguin.slide();
penguin.lie();
penguin.jump();`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Try out these different commands.',
    }
  ],
  initSceneComponents() {
    this.character = new Penguin({x: 0, y: 0, width: 130, height: 150, centered: true});
    this.environment = new Environment({x: 0, y: 0, width: 0, height: 0});
    this.sceneComponents = [this.environment, this.character];
    controller(this.character, this.environment);
  },
  codeRunner() {
    let penguin = this.character;
    eval(this.code);
  }
};

export const level_2_1 = {
  topic: 'Variables. Number and Boolean',
  info: [
    {
      type: CONTENT_TYPES.TEXT,
      value: `Data is information that we store in our computer programs. For example, your name is a piece of data, and so is your age. The color of your hair, how many siblings you have, where you live, whether you’re male or female — these things are all data. `
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: `There are three basic types of data: numbers, strings, and Booleans. For example, your age can be represented as a number, and so can your height. Numbers in JavaScript look like this: `
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `5;
var x = 34.00;    
var y = 34;`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'There are two types of numeric data: integer and float.'
    },
    {
      type: CONTENT_TYPES.IMAGE,
      value: numberExample
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'Boolean'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Booleans are logical values, which can only be true or false. This is often represented in computer languages as 1 and 0 respectively. Booleans can be used like light switches to turn on and off conditions within a program.'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Play with example below to figure out how numbers are working.'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `var penguinCount = 2.5
drawPenguins(penguinCount);`
    }
  ],
  codeRunner() {
    let drawPenguins = (count) => {
      let PENGUIN_WIDTH = 130;

      this.sceneComponents.splice(1, this.sceneComponents.length - 1);

      if (count % 1 !== 0) {
        let penguin = new Penguin({x: parseInt(count) * PENGUIN_WIDTH, y: 0, width: PENGUIN_WIDTH, height: 150});
        penguin.changePenguinState(PENGUIN_HALF);
        count = parseInt(count);
        this.sceneComponents.push(penguin);
      }
      while (count-- > 0) {
        let penguin = new Penguin({x: Math.round(count) * PENGUIN_WIDTH, y: 0, width: PENGUIN_WIDTH, height: 150});
        this.sceneComponents.push(penguin);
      }
      this.sceneComponents[0].changed();
    };
    eval(this.code);
  },
  initSceneComponents() {
    this.environment = new Environment({x: 0, y: 0, width: 0, height: 0});
    this.sceneComponents = [this.environment];
  },
};

export const level_2_2 = {
  topic: 'Variables. String',
  info: [
    {
      type: CONTENT_TYPES.TEXT,
      value: `Strings are used to represent text. String –  a variable that can store a set of characters. Characters are basically the keys on your keyboard. Every letter, number, and special characters are considered all characters. They are usually written in single Quotation mark. Strings look like this:`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: `'string example'`
    },
    {
      type: CONTENT_TYPES.IMAGE,
      value: stringsUrl
    }

  ],
  codeRunner() {
    let penguin = this.penguin;
    eval(this.code);
  },
  initSceneComponents() {
    this.environment = new Environment({x: 0, y: 0, width: 0, height: 0});
    this.penguin = new Penguin({x: 0, y: 0, width: 130, height: 150, centered: true});
    let textPopup = new TextPopup({x: 0, y: 100, width: 400, height: 150, centered: true});
    textPopup.drawText('Hello World');
    this.penguin.say = (text) => {
      this.sceneComponents.splice(2, 1, textPopup);
      textPopup.drawText(text);
      this.sceneComponents[0].changed();
    };

    this.sceneComponents = [this.environment, this.penguin];
  },
};


export const level_3_1 = {
  topic: 'Operators',
  info: [
    {
      type: CONTENT_TYPES.TITLE,
      value: 'Arithmetic Operators'
    },
    {
      type: CONTENT_TYPES.TABLE,
      value: {
        headers: ['Operator', 'Description', 'Example'],
        body: [
          ['+', 'Adds two operands.', 'A+B=30'],
          ['-', 'Subtracts second operand from the first.', 'A−B = -10'],
          ['*', 'Multiplies both operands.', 'A*B = 200'],
          ['/', 'Divides numerator by de-numerator.', 'B / A = 2'],
          ['%', 'Modulus Operator and remainder of after an integer division.', 'B % A = 0'],
          ['++', 'Increment operator increases the integer value by one.', 'B % A = 0'],
          ['--', 'Increment operator increases the integer value by one.', 'A++ = 11'],
        ]
      }
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'Relational Operators'
    },
    {
      type: CONTENT_TYPES.TABLE,
      value: {
        headers: ['Operator', 'Description', 'Example'],
        body: [
          ['==', 'Checks if the values of two operands are equal or not. If yes, then the condition becomes true.', '(A == B) is not true.'],
          ['!=', 'Checks if the values of two operands are equal or not. If the values are not equal, then the condition becomes true.', '(A != B) is true.'],
          ['>', 'Checks if the value of left operand is greater than the value of right operand. If yes, then the condition becomes true.', '(A > B) is not true.'],
          ['<', 'Checks if the value of left operand is less than the value of right operand. If yes, then the condition becomes true.', '(A < B) is true.'],
          ['>=', 'Checks if the value of left operand is greater than or equal to the value of right operand. If yes, then the condition becomes true.', '(A >= B) is not true.'],
          ['<=', 'Checks if the value of left operand is less than or equal to the value of right operand. If yes, then the condition becomes true.', '(A <= B) is true.'],
        ]
      }
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'Logical operators'
    },
    {
      type: CONTENT_TYPES.TABLE,
      value: {
        headers: ['Operator', 'Description', 'Example'],
        body: [
          ['&&', 'Called Logical AND operator. If both the operands are non-zero, then the condition becomes true.','(A && B) is false.'],
          ['||', 'Called Logical OR Operator. If any of the two operands is non-zero, then the condition becomes true.', '(A || B) is true.'],
          ['!','Called Logical NOT Operator. It is used to reverse the logical state of its operand. If a condition is true, then Logical NOT operator will make it false.', '!(A && B) is true']
        ]
      }
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Tell to penguin what operation to execute and it tell you result. See example:'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `var a = 10;
var b = 11;
penguin.calculate(a+b);`
    }
  ],
  codeRunner() {
    let penguin = this.penguin;
    eval(this.code);
  },
  initSceneComponents() {
    this.environment = new Environment({x: 0, y: 0, width: 0, height: 0});
    this.penguin = new Penguin({x: 0, y: 0, width: 130, height: 150, centered: true});
    let textPopup = new TextPopup({x: 0, y: 100, width: 400, height: 150, centered: true});
    textPopup.drawText('Hello World');
    this.penguin.calculate = (text) => {
      this.sceneComponents.splice(2, 1, textPopup);
      textPopup.drawText(text);
      this.sceneComponents[0].changed();
    };

    this.sceneComponents = [this.environment, this.penguin];
  },
};


export const level_4_1 = {
  topic: 'Conditional statements',
  info: [
    {
      type: CONTENT_TYPES.TEXT,
      value: `Conditional statement is a set of rules performed if a certain condition is met. 
This is the ability to test a variable against a value and act in one way if the condition is met by the variable or another way if not. They are also commonly called by programmers if statements.
To know if a condition is True of False, we need a new type of data: the booleans. They allow logical operations. A logic statement or operation can be evaluated to be True or False. Our conditional statement can then be understood like this:
`
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `if (a condition evaluates to True):
then do these things only for ‘True’
else:
otherwise do these things only for ‘False’.`
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'if'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'An "if" statement is a programming conditional statement that, if proved true, performs a function or displays information.'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Example - make a "Good day" greeting if the hour is less than 18:00'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `if (hour < 18) {
	greeting = "Good day";
}`
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'else'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Else is a programming conditional statement that if previous conditions are not true displays alternate information or performs alternate commands.'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Example - if the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}`

    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `if (time < 10) {
	greeting = "Good morning";
} else if (time < 20) {
	greeting = "Good day";
} else {
	greeting = "Good evening";
}`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'You can play around with our penguin example, or try write your own:'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `var time = 10;
var greeting;
if (time < 10) {
	greeting = "Good morning";
} else if (time < 20) {
	greeting = "Good day";
} else {
	greeting = "Good evening";
};
penguin.greeting(greeting);`
    }
  ],
  codeRunner() {
    let penguin = this.penguin;
    eval(this.code);
  },
  initSceneComponents() {
    this.environment = new Environment({x: 0, y: 0, width: 0, height: 0});
    this.penguin = new Penguin({x: 0, y: 0, width: 130, height: 150, centered: true});
    let textPopup = new TextPopup({x: 0, y: 100, width: 400, height: 150, centered: true});
    textPopup.drawText('Hello World');
    this.penguin.greeting = (text) => {
      this.sceneComponents.splice(2, 1, textPopup);
      textPopup.drawText(text);
      this.sceneComponents[0].changed();
    };

    this.sceneComponents = [this.environment, this.penguin];
  }
};

export const level_5_1 = {
  topic: 'loop',
  info: [
    {
      type: CONTENT_TYPES.TEXT,
      value: 'A loop statement allows us to execute a statement or group of statements multiple times and following is the general from of a loop statement in most of the programming languages',
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'while'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'while - Repeats a statement or group of statements while a given condition is true. It tests the condition before executing the loop body.'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Syntax:'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `while (condition) {
	code block to be executed
}`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Example:'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `while (i < 10) {
  text += "The number is " + i;
  i++;
}`
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'for'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'for - Execute a sequence of statements multiple times and abbreviates the code that manages the loop variable.'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Syntax:'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `for (statement 1; statement 2; statement 3) {
    code block to be executed
}`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Statement 1 sets a variable before the loop starts (var i = 0).'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Statement 2 defines the condition for the loop to run (i must be less than 5).'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Statement 3 increases a value (i++) each time the code block in the loop has been executed.'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Example:'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `for (i = 0; i < 5; i++) {
	text += "The number is " + i + "<br>";
}`
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'do/while',
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'do/while - Like a while statement, except that it tests the condition at the end of the loop body. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Syntax'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `do {
	code block to be executed
} while (condition);`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Example'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'The example below uses a do/while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:',
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `do {
    text += "The number is " + i;
	i++;
} while (i < 10);`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Loops is the main concept of programming. So you have to understand it well. Play around with our penguin. Teach him to count to 10 via the next example. Try to do it with different types of loops.'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `var count = 10;
var i;
var countStr = '';
for(i = 0; i < count; i++) {
	countStr += i + 1 + ' ';
}
penguin.count(countStr);`
    }
  ],
  codeRunner() {
    let penguin = this.penguin;
    eval(this.code);
  },
  initSceneComponents() {
    this.environment = new Environment({x: 0, y: 0, width: 0, height: 0});
    this.penguin = new Penguin({x: 0, y: 0, width: 130, height: 150, centered: true});
    let textPopup = new TextPopup({x: 0, y: 100, width: 400, height: 150, centered: true});
    textPopup.drawText('Hello World');
    this.penguin.count = (text) => {
      this.sceneComponents.splice(2, 1, textPopup);
      textPopup.drawText(text);
      this.sceneComponents[0].changed();
    };
    this.sceneComponents = [this.environment, this.penguin];
  },
};


export const level_6_1 = {
  topic: 'Arrays',
  info: [
    {
      type: CONTENT_TYPES.TEXT,
      value: 'An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of fruits names, for example), storing the fruits in single variables could look like this:'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `var fruit1 = "Apple";
var fruit2 = "Banana";
var fruit3 = “Orange”;`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'However, what if you want to loop through the fruits and find a specific one? And what if you had not 3 fruits, but 300? The solution is an array!'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'An array can hold many values under a single name, and you can access the values by referring to an index number.'
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'Creating an Array'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Using an array literal is the easiest way to create Array.'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Syntax:'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `var array_name = [item1, item2, ...];`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Example'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `var fruits = ["Apple", "Banana", “Orange”];`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Using the Keyword new also creates an Array, and assigns values to it:'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: 'var fruit = new Array("Apple", "Banana", "Orange");'
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'Accessing array elements'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Arrays are zero-indexed: the first element of an array is at index 0, and the last element is at the index equal to the value of the array\'s length property minus 1.'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `var arr = ['this is the first element', 'this is the second element'];
penguin.say(arr[0]);              // logs 'this is the first element'
penguin.say(arr[1]);              // logs 'this is the second element'
penguin.say(arr[arr.length - 1]); // logs 'this is the second element'`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: `Use your knowledge to create list of purchase for our penguin using Array, and provide it to penguin:`
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `var arr=[];
penguin.readList(arr);`
    }

  ],
  codeRunner() {
    let penguin = this.penguin;
    eval(this.code);
  },
  initSceneComponents() {
    this.environment = new Environment({x: 0, y: 0, width: 0, height: 0});
    this.penguin = new Penguin({x: 0, y: 0, width: 130, height: 150, centered: true});
    let textPopup = new TextPopup({x: 0, y: 100, width: 400, height: 150, centered: true});
    textPopup.drawText('Hello World');
    this.penguin.say = (text) => {
      this.sceneComponents.splice(2, 1, textPopup);
      textPopup.drawText(text);
      this.sceneComponents[0].changed();
    };
    this.penguin.readList = (text) => {
      text = text.join(' ');
      this.sceneComponents.splice(2, 1, textPopup);
      textPopup.drawText(text);
      this.sceneComponents[0].changed();
    };
    this.sceneComponents = [this.environment, this.penguin];
  },
};

export const level_7_1 = {
  topic: 'loop',
  info: [
    {
      type: CONTENT_TYPES.TEXT,
      value: 'A	function	is	a	way	to	bundle	code	so	that	it	can	be	reused.	Functions	allow	us	to	run	the	same	piece	of code	from	multiple	places	in	a	program	without	having	to	copy	and	paste	the	code	repeatedly.	Also,	by hiding	long	bits	of	code	in	a	function	and	giving	it	an	easy-to-understand	name,	you’ll	be	better	able	to plan	out	your	code	because	you	can	focus	on	organizing	your	functions	rather	than	all	of	the	little	code details	that	make	them	up.	Splitting	up	your	code	into	smaller,	more	manageable	pieces	allows	you	to see	the	bigger	picture	and	think	about	how	your	programs	are	structured	at	a	higher	level.'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'The next example shows	how	a	function	is	built.	The	code	between	the	curly	brackets	is	called	the	function body,	just	as	the	code	between	the	curly	brackets	in	a	loop	is	called	the	loop	body.'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `function makePenguinSay(whatToSay) {
  penguin.say(whatToSay);// <- the function body goes between curly brackets
}`
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'Calling	a	Function'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'To	run	the	code	inside	a	function	(the	function	body),	we	need	to	call	the	function.	To	call	a	function, you	enter	its	name	followed	by	a	pair	of	opening	and	closing	parentheses,	as	shown	here.'
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `makePenguinSay('Hello World!!!!')`
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Calling	ourFirstFunction	executes	the	body	of	the	function,	which	is	makePenguinSay("Hello world!");,	and	the	text	we	asked	to	be	printed	is	displayed	on	the	next	line:	Hello	world!.'
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'return value'
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'A	return	value	is	the	value	that	a	function	outputs,	which	can	then	be	used	elsewhere	in	your	code.	In this	case,	the	return	value	is	undefined	because	we	didn’t	tell	the	function	to	return	any	particular	value in	the	body	of	the	function.	All	we	did	was	ask	it	to	print	a	message	to	the	console,	which	is	not	the same	as	returning	a	value.	A	function	always	returns	undefined	unless	there	is	something	in	the function	body	that	tells	it	to	return	a	different	value.'
    },
    {
      type: CONTENT_TYPES.TITLE,
      value: 'Passing	Arguments	into	Functions '
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'ourFirstFunction	just	prints	the	same	line	of	text	every	time	you	call	it,	but	you’ll	probably	want your	functions	to	be	more	flexible	than	that.	Function	arguments	allow	us	to	pass	values	into	a	function in	order	to	change	the	function’s	behavior	when	it’s	called.	Arguments	always	go	between	the	function parentheses,	both	when	you	create	the	function	and	when	you	call	it. The	following	sayHelloTo	function	uses	an	argument	(name)	to	say	hello	to	someone	you	specify.',
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `var	sayHelloTo	=	function	(name)	{
  penguin.say("Hello	"	+	name	+	"!"); 
}; `
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'We	create	the	function	in	the	first	line	and	assign	it	to	the	variable	sayHelloTo.	When	the	function	is called,	it	logs	the	string	"Hello	"	+	name	+	"!",	replacing	name	with	whatever	value	you	pass	to	the function	as	an	argument. To	call	a	function	that	takes	an	argument,	place	the	value	you’d	like	to	use	for	the	argument	between	the parentheses	following	the	function	name.	For	example,	to	say	hello	to	Nick,	you	would	write: '
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `sayHelloTo("Nick"); `
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'Play around with examples blow. Figure out how functions works because it\'s very important feature of programming'
    }
  ],
  codeRunner() {
    let penguin = this.penguin;
    eval(this.code);
  },
  initSceneComponents() {
    this.environment = new Environment({x: 0, y: 0, width: 0, height: 0});
    this.penguin = new Penguin({x: 0, y: 0, width: 130, height: 150, centered: true});
    let textPopup = new TextPopup({x: 0, y: 100, width: 400, height: 150, centered: true});
    textPopup.drawText('Hello World');
    this.penguin.say = (text) => {
      this.sceneComponents.splice(2, 1, textPopup);
      textPopup.drawText(text);
      this.sceneComponents[0].changed();
    };

    this.sceneComponents = [this.environment, this.penguin];
  },
};
