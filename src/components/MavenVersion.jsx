import axios from 'axios'
import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';

const fetchLatestVersion = (notation, callback) => {
    let split = notation.split(":")
    let group = split[0]
    let artifact = split[1]
    axios.get(`/maven/?group=${group.replaceAll(".", "/")}&artifact=${artifact}`)
        .then(response => {
            callback(response.data)
        })
}

const MavenVersion = ({children, notation, language}) => {
    const [result, setResult] = useState("Loading...");

    useEffect(() => fetchLatestVersion(notation, (data) => setResult(children.replace("{version}", data))), [])

    return (
        <CodeBlock language={language}>
            {result}
        </CodeBlock>
    )
}

export default MavenVersion