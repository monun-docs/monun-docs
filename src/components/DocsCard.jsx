import React from "react"
import styles from "./DocsCard.module.css"
import Link from "@docusaurus/Link"


export default function DocsCard({style,title,desc,url,noborder=false}) {
    return (
       <div className={styles.project}>
      <div className={styles.flex}>
        <span className={styles.projectGitHub}>
          {title}
        </span>
        <p>{desc}</p>
      </div>
      <div>
        <Link className="button button--primary" to={url}>
          Go
        </Link>
      </div>
    </div>
    )
}
