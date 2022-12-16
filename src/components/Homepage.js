import React from 'react';
import styles from './Homepage.module.css'
import Link from '@docusaurus/Link'

function Feature({title, desc, url}) {
    return (
        <Link className={`padding--md card ${styles.color_reverse}`} to={url}>
            <h3 className="card__title">{title}</h3>
            <div className='card__body'>
                <p>{desc}</p>
            </div>
        </Link>
    )
}

export default function Homepage() {
    return (
        <div className={`container ${styles.homepage_container}`}>
            <div className={styles.homepage_row}>
                <Feature title={"라이브러리"} desc={"개발자들을 위한 라이브러리 사용법"} url={"libraries"} />
                <Feature title={"플러그인"} desc={"각별님의 플러그인 사용법"} url={"plugins"} />
            </div>
        </div>
    );
}