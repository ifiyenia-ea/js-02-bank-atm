// BANK ACCOUNT

// Start by creating the object and the properties. You can leave the functions empty for now if you want.
// You'll find all the information about what properties the object should have in the readme file.

// In the deposit and withdrawal function use this code to show the prompt
//                                                        parseFloat(prompt("Put some proper message here"));
// You need to change the message of course. You should also do some research why parseFloat() is used here
// answer by making a comment in the code.
// Be aware of that you need to add some code to this so you can display the actual input.

// In the deposit and withdrawal function you also need to handle som potential errors.
// To handle one of the potential error you can use this piece of code
//                                                                          okejisNaN(variableName);
// you need to change the variableName to your actual variable.
// you also need to check some other conditions here and use a logical operator.
// try to say the sentece out loud or think it:
// "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// Do you know what operator you should use?

// In the accountError and accountExit function you can use this to show a message to the user:
//                                                          alert("your code here and maybe properties");
// of course you need to put a proper message and you might need to display some of the properties.

//prompt user for choice.

// you can use the variable choice for your switch or if/else statement
// so choice will hold the value of the user input.

// ----------------------------

// Assignment 2, Bank account / ATM

// 1: Create the object - account - and its properties.
// 2: else / if - why?
// 3: figure out how to get the menu back
// 4: "calculations" for deposit/withdrawal

// Why parseInt / parseFloat: Otherwise, what is entered in a prompt is automatically a string. The
// parseInt / parseFloat instead converts it to numbers (when needed?)

// Have chosen the if / else statement since I feel more comfortable with it

const account = {
  accountName: "Ifiyenia Hyde",
  balance: 100,
  getBalance: function () {
    alert(`Your current balance is ${this.balance} SEK`);
    atm();
  },
  deposit: function () {
    let moneyIn = parseFloat(
      prompt("How much (SEK) would you like to deposit?")
    );
    if (isNaN(moneyIn) || moneyIn <= 0) {
      this.accountError();
      this.deposit();
    } else if (moneyIn) {
      this.balance += moneyIn;
      this.getBalance();
      atm();
    }
  },
  withdrawal: function () {
    let moneyOut = parseFloat(
      prompt("How much (SEK) would you want to withdraw?")
    );
    if (moneyOut > this.balance) {
      alert(
        `Sorry, your current balance is ${this.balance} SEK, please try another amount to withdraw.`
      );
      this.withdrawal();
    } else if (isNaN(moneyOut) || moneyOut <= 0) {
      this.accountError();
      this.deposit();
    } else {
      this.balance -= moneyOut;
      this.getBalance();
    }
    atm();
  },
  getAccountName: function () {
    alert(`Name of account: ${account.accountName}`);
    atm();
  },
  accountError: function () {
    alert("Sorry, invalid answer.");
  },
  exitAccount: function () {
    alert("Thanks for today, bye!");
    self.close();
  },
};

function atm() {
  let choice = parseInt(
    prompt(
      "Hello and welcome to YourBank! Please choose one of the following numbers: 1. See balance 2. Make a deposit 3. Make a withdrawal 4. Get account name 5. Exit"
    )
  );
  if (choice === 1) {
    account.getBalance();
  } else if (choice === 2) {
    account.deposit();
  } else if (choice === 3) {
    account.withdrawal();
  } else if (choice === 4) {
    account.getAccountName();
  } else if (choice === 5) {
    account.exitAccount();
  } else {
    alert("Not a valid answer, please choose by writing number 1-5.");
    atm();
  }
}

atm();
