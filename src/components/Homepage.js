import React from 'react';
import styles from './Homepage.module.css'

{/* <div>
<section>
개발자를 위한 라이브러리 사용법 및 개발 환경 팁
<button id="go_button">GO</button>
</section>

<section>
각별님의 플러그인을 사용하고 싶은 분들
</section>
</div> */}

function handleClick(url) {
    window.location.href = url
}

function Feature({title, desc, url}) {
    return (
        <div className={styles.redirectPane} onClick={() => handleClick(url)}>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{desc}</p>
        </div>
    )
}

export default function Homepage() {
    return (
        <div className='container'>
            <div className='row'>
                <Feature title={"라이브러리"} desc={"개발자들을 위한 라이브러리 사용법"} url={"dev"} />
                <Feature title={"플러그인"} desc={"각별님의 플러그인 사용법"} url={"usage"} />
            </div>
        </div>
    );
  }
  