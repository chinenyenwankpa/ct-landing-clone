import styles from "./menuExploreDropdown.module.css";

import DropdownItem from "../dropdownItem/DropdownItem";

import blog from "../../../../assets/img/nav/explore/blog.svg";
import developer from "../../../../assets/img/nav/explore/developer.svg";
import giveback from "../../../../assets/img/nav/explore/giveback.svg";
import intouch from "../../../../assets/img/nav/explore/intouch.svg";
import partner from "../../../../assets/img/nav/explore/partner.svg";
import upskill from "../../../../assets/img/nav/explore/upskill.svg";

const MenuExploreDropdown =() =>{
    const dropdownItems =[
        {
            title: "Developer API",
            caption: "Integrate gift card services into you platform.",
            icon: developer,
        },
        {
            title: "Blog",
            caption: "Get the latest news, articles, and updates from Cardtonic.",
            icon: blog,
        },
        {
            title: "Become A Partner",
            caption: "Launch a gifting program for your customers. ",
            icon: partner,
        },
        {
            title: "Upskill",
            caption: "We give away MacBooks to 15 tech enthusiasts.",
            icon: upskill,
        },
        {
            title: "#CTGivesBack",
            caption: "We support initiatives that deliver relief to communities. ",
            icon: giveback,
        },
        {
            title: "Get In Touch",
            caption: "Reach out to us or follow us on social media.",
            icon: intouch,
        },
    ]

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {dropdownItems.map((item) =>(
                    <DropdownItem {...item}/>
                ))}
            </div>
        </div>
    )
}

export default MenuExploreDropdown;