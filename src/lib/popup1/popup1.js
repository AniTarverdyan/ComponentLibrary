import "./popup1.css"

export default function Popup1({headerText, buttononClick, buttonText, input1onChange, input1Value, input1Placeholder, input2onChange, input2Placeholder, input2Value, input3onChange, input3Placeholder,  input3Value, label1Text, label2Text, label3Text,  message1Text, message2Text, message3Text}){

    function closePopup(){
        document.querySelector(".popup1_popup").setAttribute("id", "popup1_hide")
    }

    function stopProp(e){
        e.stopPropagation()
    }


    return(
        <div className="popup1_popup" onClick={closePopup}>
            <div className="popup1_body" onClick={stopProp}>
                <button className="popup1_close" onClick={closePopup}>x</button>
                <div className="popup1_content">
                    <h2 className="popup1_h2" >{headerText}</h2>
                    <label htmlFor="name" className="popup1_lbl">{label1Text}</label>
                    <input type="text" value={input1Value} onChange={input1onChange} className="popup1_inp" id="name" placeholder={input1Placeholder}/>
                    <p className={"popup1_warning"} >{message1Text}</p>

                    <label htmlFor="login"  className="popup1_lbl">{label2Text}</label>
                    <input type="mail" value={input2Value} onChange={input2onChange}  className="popup1_inp" id="login" placeholder={input2Placeholder}/>
                    <p className={"popup1_warning"} >{message2Text}</p>

                    <label htmlFor="pass" className="popup1_lbl" >{label3Text}</label>
                    <input type="password" value={input3Value} id="pass"  onChange={input3onChange} className="popup1_inp" placeholder={input3Placeholder}/>
                    <p className={"popup1_warning"} >{message3Text}</p>

                    <button className="popup1_btn" onClick={buttononClick} >{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

