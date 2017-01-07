import * as CONTENT_TYPES from './contentTypes';
import PC from '../levelAssets/pc.jpg';
export const level_1_1 = {
  topic: 'BlaBla bla bla bla',
  info: [
    {
      type: CONTENT_TYPES.TITLE,
      value: 'Hi, welcome to our programming course! If you’ve never learned to program before, you might be wondering what programming actually is. Well, when we write a program, we’re giving the computer a series of comands that kind of look like a weird form of English. You can think of a computer as a very obedient dog, listening to your every command, and doing  whatever you tell it to do.'
    },
    {
      type: CONTENT_TYPES.IMAGE,
      value: PC
    },
    {
      type: CONTENT_TYPES.TEXT,
      value: 'asdf asd asd fasdf asdf asdf asdf asd;fjk asdlfjh aeujhf sdlvfbaelfhawe ldsjkfh asdlfj ahe fl',
    },
    {
      type: CONTENT_TYPES.CODE,
      value: `console.info("Hello world")
console.info("Hello world")`
    }
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
