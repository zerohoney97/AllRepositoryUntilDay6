// 우리가 window를 생략해서 작성하던 것과 같이
// window.console.log()
// console.log()
// global과 module을 생략해서 작성할 수 있다.

// console.log(module.exports===exports);
// true 생략을 해도 된다.

const objs = { a: 1 };
const add = () => {
  return 2;
};



// exports.objs = { a: 1 };

// exports.add = () => {
//   return 2;
// };

module.exports = {
  objs: objs,
  add: add,
};
