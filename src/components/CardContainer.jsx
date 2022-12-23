import styles from './CardContainer.module.css'
import React from 'react'
import DocsCard from './DocsCard'

function FakeCard({num, style}) {
    let index = 0
    return Array(num).fill(0).map(i => <DocsCard style={style} title="" desc="" to="" noborder={true} key={index++} />)
}

export default function CardContainer({className, num, children, fakeClass}) {
    let numFake = num - (children.length % num)
    let mapped = React.Children.map(children, child => {
        if (React.isValidElement) {
            return React.cloneElement(child, { style: {width: `${70/num}%`, minWidth: "250px"} })
        }

        return child
    })
    return (
        <div className={styles.container + " " + className}>
            {mapped}
            
            { 
                numFake % num != 0 ? <FakeCard num={numFake} style={{ width: `${70/num}%` }}  fakeClass={fakeClass} /> : null
            }
        </div>
    )
}
