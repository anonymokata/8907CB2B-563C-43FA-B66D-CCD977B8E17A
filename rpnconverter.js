function infixToPostfix(infixString) {
  let operators = [];
  let postfixString = '';

  for (let char of infixString) {
    if (char === '+') {
      operators.push(char);
    }
    else {
      postfixString += char;
    }
  };

  while (operators.length) {
    postfixString += operators.pop();
  }

  return postfixString;
};

module.exports = {
  infixToPostfix: infixToPostfix
};