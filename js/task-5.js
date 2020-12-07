const checkForSpam = function (message) {
  const checkMessage = message.toLowerCase().split(" ");
  for (let i = 0; i < checkMessage.length; i++) {
    if (checkMessage[i].includes("spam") || checkMessage[i].includes("sale")) {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
