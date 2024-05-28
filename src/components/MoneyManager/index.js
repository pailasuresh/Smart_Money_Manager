import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    list: [],
    title: '',
    amount: '',
    selectOptionId: transactionTypeOptions[0].optionId,
  }

  inputTitle = event => {
    this.setState({title: event.target.value})
  }

  inputAmount = event => {
    this.setState({amount: event.target.value})
  }

  selectType = event => {
    this.setState({selectOptionId: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()

    const {selectOptionId, title, amount} = this.state

    const getDisplayType = transactionTypeOptions.find(
      eachT => eachT.optionId === selectOptionId,
    )
    const {displayText} = getDisplayType

    const newUserInputDetails = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }

    this.setState(prevState => ({
      list: [...prevState.list, newUserInputDetails],
      title: '',
      amount: '',
      selectOptionId: transactionTypeOptions[0].optionId,
    }))
  }

  incomeMoney = () => {
    let incomeBlc = 0

    const {list} = this.state

    list.forEach(eachIncome => {
      if (eachIncome.type === transactionTypeOptions[0].displayText) {
        incomeBlc += eachIncome.amount
      }
    })
    return incomeBlc
  }

  expenseMoney = () => {
    const {list} = this.state

    let expenseBlc = 0

    list.forEach(eachExpense => {
      if (eachExpense.type === transactionTypeOptions[1].displayText) {
        expenseBlc += eachExpense.amount
      }
    })
    return expenseBlc
  }

  balanceMoney = () => {
    const {list} = this.state
    let incomeA = 0
    let balanceBlc = 0
    let expenseA = 0

    list.forEach(eachBalance => {
      if (eachBalance.type === transactionTypeOptions[0].displayText) {
        incomeA += eachBalance.amount
      } else {
        expenseA += eachBalance.amount
      }
    })

    balanceBlc = incomeA - expenseA
    return balanceBlc
  }

  undoTransaction = id => {
    const {list} = this.state
    const updateDeletedList = list.filter(eachList => eachList.id !== id)
    this.setState({list: updateDeletedList})
  }

  render() {
    const {list, title, amount, selectOptionId} = this.state

    const incomeAmount = this.incomeMoney()

    const expenseAmount = this.expenseMoney()

    const balanceAmount = this.balanceMoney()

    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="heading-container">
            <h1 className="heading">
              Hi{' '}
              <span role="img" aria-label="smiling face">
                😊
              </span>
              , Suresh Paila
            </h1>
            <p className="paragraph">
              Welcome back to your
              <span className="span-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            income={incomeAmount}
            expense={expenseAmount}
            balance={balanceAmount}
          />
          <div className="transaction-container">
            <form className="form" onSubmit={this.submitForm}>
              <h1 className="head">Add Transaction</h1>
              <label className="input-label" htmlFor="Title">
                Title
              </label>
              <input
                className="input"
                id="Title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={this.inputTitle}
              />
              <label className="input-label" htmlFor="Amount">
                Amount
              </label>
              <input
                className="input"
                id="Amount"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={this.inputAmount}
              />
              <label className="input-label" htmlFor="selectType">
                Type
              </label>
              <select
                className="input"
                id="selectType"
                value={selectOptionId}
                onChange={this.selectType}
              >
                {transactionTypeOptions.map(forEachOption => (
                  <option
                    key={forEachOption.optionId}
                    value={forEachOption.optionId}
                  >
                    {forEachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="head">History</h1>
              <div className="transactions-table-container">
                <ul className="table">
                  <li className="li-elements">
                    <p className="p">Title</p>
                    <p className="p">Amount</p>
                    <p className="p">Type</p>
                  </li>
                  {list.map(forEachTransaction => (
                    <TransactionItem
                      eachTransaction={forEachTransaction}
                      key={forEachTransaction.id}
                      deleteTransaction={this.undoTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
