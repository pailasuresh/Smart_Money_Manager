// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expense, balance} = props
  return (
    <div className="money-details-container ">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="logo-img"
        />

        <div>
          <p className="your-blc">
            <span role="img" aria-label="balance">
              💼{' '}
            </span>
            Your Balance
          </p>
          <p className="money" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="logo-img"
        />
        <div>
          <p className="your-blc">
            <span role="img" aria-label="income">
              💵{' '}
            </span>
            Your Income
          </p>
          <p className="money" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="logo-img"
        />
        <div>
          <p className="your-blc">
            <span role="img" aria-label="expenses">
              🧾{' '}
            </span>
            Your Expenses
          </p>
          <p className="money" data-testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
