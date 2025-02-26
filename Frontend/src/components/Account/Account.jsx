import CardAccount from "../../utils/CardAccount/CardAccount";

const Account = () => {
  return (
    <>
      <CardAccount
        accountTitle="Checking (x8349)"
        amount="2,082.79"
        amountDetail="Available Balance"
      />
      <CardAccount
        accountTitle="Savings (x6712)"
        amount="10,928.42"
        amountDetail="Available Balance"
      />
      <CardAccount
        accountTitle="Credit Card (x8349)"
        amount="184.30"
        amountDetail="Current Balance"
      />
    </>
  );
};

export default Account;
