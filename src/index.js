import React from "react"
import ReactDom from "react-dom"
import Button from "./lib/button"
export {Button}

ReactDom.render(
    <React.StrictMode>
        <div>
            <Button
                label={'Buttonchik'}
                iconStart={'https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg'}
                // iconEnd={'https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg'}
                color={'warning'}
                size={'large'}
                disabled={false}
                onClick={() => alert('asdf')}
            />
        </div>
    </React.StrictMode>,
    document.getElementById("root"))