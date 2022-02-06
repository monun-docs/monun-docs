import axios from 'axios'
import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';

const fetchLatestVersion = (artifact, callback) => {
    axios.get(`https://img.shields.io/maven-central/v/${artifact.replace(":", "/")}`)
        .then(response => {
            callback(response.data.match(/(?<="maven-central: v)(.*?)(?=")/g))
        })
}

const MavenVersion = ({children, artifact, language}) => {
    const [result, setResult] = useState("");

    useEffect(() => fetchLatestVersion(artifact, (data) => setResult(data)), [])

    return (
        <CodeBlock language={language}>
            {children.replace("{version}", result)}
        </CodeBlock>
    )
}

export {fetchLatestVersion, MavenVersion}