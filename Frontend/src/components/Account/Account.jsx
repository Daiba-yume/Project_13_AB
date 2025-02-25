import CardAccount from "../../utils/CardAccount/CardAccount";

const Account = () => {
  return (
    <>
      <CardAccount
        accountTitle="Checking (x8349)"
        amount="2,082.79"
        amountDescription="Available Balance"
      />
      <CardAccount
        accountTitle="Argent Bank Savings (x6712)"
        amount="10,928.42"
        amountDescription="Available Balance"
      />
      <CardAccount
        accountTitle="Argent Bank Credit Card (x8349)"
        amount="184.30"
        amountDescription="Current Balance"
      />
    </>
  );
};

export default Account;
