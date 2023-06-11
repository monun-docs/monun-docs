import React from 'react';
import CardContainer from './CardContainer';
import DocsCard from './DocsCard';
import styles from './HomeCard.module.css'

export default function HomeCard({children}) {
    let home_style = {
        marginBottom: '100px',
    }
    return (
        <div className={styles.wrapper}>
            {children}
            <CardContainer col={1} row={3} style={home_style}>
                <DocsCard title={"라이브러리"} desc={"개발자들을 위한 라이브러리 사용법"} url={"libraries/"} />
                <DocsCard title={"개발"} desc={"자바 설치 등 개발 환경 설정법"} url={"usage/"} />
                <DocsCard title={"플러그인"} desc={"각별님의 플러그인 사용법"} url={"plugins/"} />
            </CardContainer>
        </div>
    );
}