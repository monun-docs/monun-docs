import axios from 'axios'
import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';

const fetchLatestVersion = (notation, callback) => {
    let split = notation.split(":")
    let group = split[0]
    let artifact = split[1]
    axios.get(`/maven/?group=${group}&artifact=${artifact}`)
        .then(response => {
            callback(response.data)
        })
}

const MavenVersion = ({children, notation, language}) => {
    const [result, setResult] = useState("");

    useEffect(() => fetchLatestVersion(notation, (data) => setResult(data)), [])

    return (
        <CodeBlock language={language}>
            {children.replace("{version}", result)}
        </CodeBlock>
    )
}

export {fetchLatestVersion, MavenVersion}