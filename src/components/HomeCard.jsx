import React from 'react';
import styles from './HomeCard.module.css'
import CardContainer from './CardContainer';
import DocsCard from './DocsCard';

export default function HomeCard() {
    return (
        <CardContainer num={2} className={styles.card_container}>
            <DocsCard title={"라이브러리"} desc={"개발자들을 위한 라이브러리 사용법"} url={"libraries"} />
            <DocsCard title={"개발"} desc={"자바 설치 등 개발 환경 설정법"} url={"usage"} />
            <DocsCard title={"플러그인"} desc={"각별님의 플러그인 사용법"} url={"plugins"} />
        </CardContainer>
    );
}