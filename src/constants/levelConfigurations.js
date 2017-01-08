import * as CONTENT_TYPES from './contentTypes';
import PC from '../levelAssets/pc.jpg';
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
    },
  ]
};

export const level_1_2 = {
  topic: 'second part of first level',
  info: [
    {
      type: CONTENT_TYPES.TITLE,
      value: 'Title of second part'
    },
    {
      type: CONTENT_TYPES.IMAGE,
      value: PC
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'New info that very useful ',
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `console.info("Hello world of second part");
console.info("Hello world of second part");
console.info("Hello world of second part");`
    }
  ]
};
