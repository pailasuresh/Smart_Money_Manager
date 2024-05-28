// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteTransaction} = props
  const {id, title, amount, type} = eachTransaction

  const undoTrans = () => {
    deleteTransaction(id)
  }

  return (
    <li className="li-ele">
      <p className="text">{title}</p>
      <p className="text">Rs {amount}</p>
      <p className="text">{type}</p>
      <div className="delete-container">
        <button
          type="button"
          className="delete-but"
          onClick={undoTrans}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
