import styles from "./menuServiceDropdown.module.css";

import DropdownItem from "../dropdownItem/DropdownItem";

import bank from "../../../../assets/img/nav/service/bank.svg";
import bill from "../../../../assets/img/nav/service/bill.svg";
import card from "../../../../assets/img/nav/service/card.svg";
import gadget from "../../../../assets/img/nav/service/gadget.svg";

const MenuServiceDropdown =() =>{
    const dropdownItem =[
        {
            title: "Just Gadgets",
            caption: " Buy affordable gadgets from the comfort of your favourite app.",
            icon: gadget,
        },
        {
            title: "Virtual Dollar Card",
            caption: "Shop online, pay for services, or make international purchases.",
            icon: card,
        },
        {
            title: "Bill Payment",
            caption: "Organise and pay all your bills easily and seamlessly.",
            icon: bill,
        },
        {
            title: "Virtual Bank Account",
            caption: "Open a Naira bank account for easy transactions.",
            icon: bank,
        },
    ]

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {dropdownItem.map((item) =>(
                    <DropdownItem {...item}/>
                ))}
            </div>
        </div>
    )
}

export default MenuServiceDropdown;