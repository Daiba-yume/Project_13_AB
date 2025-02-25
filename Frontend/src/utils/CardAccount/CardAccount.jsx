import "./CardAccount.scss";

const CardAccount = ({ accountTitle, amount, amountDetail }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank {accountTitle}</h3>
        <p className="account-amount">${amount} </p>
        <p className="account-amount-description"> {amountDetail} </p>
      </div>

      <button className="transaction-button">View transactions</button>
    </section>
  );
};

export default CardAccount;
