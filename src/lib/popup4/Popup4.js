import "./popup4.css"


export default function Popup4({button1Text, button1onClick,  button2onClick,  button2Text, headerText,  slotText}){

    function hideComponent(){
        document.querySelector(".popup4_main").setAttribute("id", "popup4_hide")
    }

    return(
        <div className={"popup4_main"}>
            <div className={"popup4_body"}>
                <p className={"popup4_close"} onClick={hideComponent}>x</p>
                <div className={"popup4_context"}>
                    <i className="fas fa-exclamation-circle" id={"popup4_icon"}></i>
                    <h2 className={"popup4_h2"} >{headerText}</h2>
                    <p className={"popup4_p"} >{slotText}</p>
                    <div className="popup4_minidiv">
                        <button className="popup4_btn" onClick={button1onClick} >{button1Text}</button>
                        <button className="popup4_btn1" onClick={button2onClick}>{button2Text}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}