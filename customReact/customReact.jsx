// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )




function customRender(reactElement, rootElement){
    const newElement = document.createElement(reactElement.type)
    newElement.textContent = reactElement.children
    for (const prop in reactElement.props) {
        // if (prop === 'children') continue; we used to do that when we children is inside props
       newElement.setAttribute(prop, reactElement.props[prop])
    }
    rootElement.appendChild(newElement)
}

const reactElement = {
    type: 'a',
    props: {href: "https://google.com",
        target: "_blank"
    },
    children: "click me"
}

const rootElement = document.querySelector('#root')

customRender(reactElement, rootElement)