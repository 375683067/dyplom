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
  topic: 'Variables. Number',
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
