// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'Rishi Prasad',
    lastName: 'Maurya',
    incomes: '50k',
    expenses: {
        totalIncome: '20000',
        totalExpense: '10000',
        accountInfo: 'sbi -Bank',
        addIncome: '3000',
        addExpense: '1000',
        accountBalance: '13000',
    }
}
let namee = personAccount.firstName;
let lastName = personAccount.expenses.accountInfo;
console.log(namee+" "+lastName);