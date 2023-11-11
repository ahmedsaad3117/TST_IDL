// !- 1.2 Promises , write the orders which logs show us

var log = console.log;

const newPromise = new Promise((resolve, reject) => {
  log("First message");

  setTimeout(() => {
    // ? genertate randodm number to test each caess
    const randomNumber = Math.ceil(Math.random() * 100);

    if (randomNumber % 2 == 0) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  }, 0);
});

newPromise
  .then((result) => {
    log("If promise sucess " + result);
  })
  .catch((error) => {
    log("If promise fail " + error);
  })
  .finally(() => {
    log("will always run");
  });
