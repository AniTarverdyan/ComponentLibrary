import "./popup3.css"

export default function Popup3({slot1Text, button1onClick,  button2onClick, button3onClick , button1Text,  button2Text, button3Text,  messageText,   slot2Text, slot3Text}){

    function closeComponent(){
        document.querySelector(".popup3_main").setAttribute("id", "popup3_closeComponent")
    }

    function stopProp(e){
        e.stopPropagation()
    }


    return(
        <div className="popup3_main" onClick={closeComponent}>
            <div className="popup3_body" onClick={stopProp}>
                <p className="popup3_close" onClick={closeComponent}>x</p>
                <div className="popup3_mainbody">
                    <div className="popup3_mainbody1">
                        <p className="popup3_txt" >{slot1Text}</p>
                        <p className="popup3_txt2" >{slot2Text}</p>
                        <p className="popup3_div1" >{slot3Text}</p>
                        <div className="popup3_div2">
                            <button className="popup3_btn1" onClick={button1onClick} >{button1Text} &#128520;</button>
                            <button className="popup3_btn1" onClick={button2onClick} >{button2Text} &#128512;</button>
                            <button className="popup3_btn1" onClick={button3onClick} >{button3Text} &#128557;</button>
                        </div>
                        <p  className="popup3_txt3" >{messageText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}