import CardFeatures from "../../utils/CardFeatures/CardFeatures";
import IconChat from "../../assets/icon-chat.png";
import IconMoney from "../../assets/icon-money.png";
import IconSecurity from "../../assets/icon-security.png";
import "./Features.scss";

const Features = () => {
  return (
    <div className="features">
      <CardFeatures
        icon={IconChat}
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
      />
      <CardFeatures
        icon={IconMoney}
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!
       "
      />
      <CardFeatures
        icon={IconSecurity}
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money
            is always safe."
      />
    </div>
  );
};

export default Features;
