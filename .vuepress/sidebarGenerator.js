const fs = require('fs')

module.exports.sidebar = (defaultVar) => {
    const dir = fs.readdirSync('../')
    console.log(dir)
    let sidebar = []

    sidebar.push(defaultVar)

    dir.forEach((elem) => {
        if(!elem.includes('.')) {
            const componentName = elem.split('/')[elem.split('/').length - 1]
            const dir2 = fs.readdirSync('../' + elem)
            let children = []
            dir2.forEach((elem2) => {
                if(elem.includes('.md')) {
                    children.push(`/${componentName}/${elem2.split('/')[elem2.split('/').length - 1].replace('.md', '')}`)
                }
            })
            sidebar.push(
                {
                  title: componentName,   // required
                  collapsable: true, // optional, defaults to true
                  sidebarDepth: 1,    // optional, defaults to 1
                  children: children
                }
            )
        }
    })
    return sidebar
}