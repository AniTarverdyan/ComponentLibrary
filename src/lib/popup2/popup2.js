import "./popup2.css"


export default function Popup2({headerText, inputPlaceholder, inputValue, inputonChange, buttonText,  buttononClick,  linkHref, linkText,  messageText}){

    function closePopup2(){
        document.querySelector(".popup2_main").setAttribute("id", "popup2_hide")
    }

    function stopProp2(e){
        e.stopPropagation()
    }


    return(
        <div className="popup2_main" onClick={closePopup2}>
            <div className="popup2_body" onClick={stopProp2}>
                <div className="popup2_body1">
                    <p className="popup2_close"  onClick={closePopup2}>x</p>
                    <div className="popup2_height">
                        <p className="popup2_p1" >{headerText}</p>
                    </div>
                    <input type="text" value={inputValue} onChange={inputonChange}  className="popup2_inp" placeholder={inputPlaceholder}/>
                        <button className="popup2_btn"  onClick={buttononClick} >{buttonText}</button>
                        <p className={"popup2_p2"} >{messageText}</p>
                        <a href={linkHref}  className="popup2_link"  target={"_blank"}>{linkText}</a>
                </div>
            </div>
        </div>
    )
}