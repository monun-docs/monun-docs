import styles from './CardContainer.module.css'
import React from 'react'

export default function CardContainer({style, col, row, children}) {
    let container_style = {
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridTemplateRows: `repeat(${row}, 1fr)`,
        ...style
    }

    return (
        <div className={styles.container} style={container_style}>
            {children}
        </div>
    )
}
