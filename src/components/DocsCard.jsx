import React from "react"
import styles from "./DocsCard.module.css"
import Link from "@docusaurus/Link"


export default function DocsCard({style,title,desc,url,noborder=false}) {
    let noborderclass = " " + (noborder ? styles.noborder : "");
    return (
        <Link style={style} className={styles.cardmain + noborderclass} to={url}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </Link>
    )
}