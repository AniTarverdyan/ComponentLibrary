import react, {useRef, useState, useMemo} from "react"
import "./checkbox1.css"
import img from "./check.png"

export default function Checkbox1({label, defaultChecked, defaultDisabled, size, color, type}){
        const [checkInput, setCheckInput]=useState(!!defaultChecked)

        function inputSize(){
            if (size==="small"){
                return "inpSmallSize"
            }
            else if(size==="middle"){
                return "inpMiddleSize"
            }
            else if(size==="big"){
                return "inpBigSize"
            }
        }

        function isChecked(){
            setCheckInput(!checkInput)
        }




        const iconSize=useMemo(()=>{
            if (size==="small"){
                return 10
            }
            else if(size==="middle"){
                return 17
            }
            else if(size==="big"){
                return 25
            }
        }, [size])


        function checkIcon(e){
                if(!defaultDisabled){
                        e.target.classList.toggle("checked")
                }
        }

        const checkType=useMemo(()=>{

            if (type==="shopBasket"){
                return "fas fa-shopping-basket"
            }
            else if(type==="heart"){
                return "fas fa-heart"
            }
            else if(type==="finger") {
                return "fas fa-thumbs-up"
            }
            else if(type==="bookMark"){
                return "fas fa-bookmark"
            }
        },[type])







    return (
        <div className={"div1"}>
                {!type && <label>
                        <input
                            style={{accentColor: color?color:null}}
                            type="checkbox"
                            checked={checkInput}
                            onChange={isChecked}
                            disabled={!!defaultDisabled}
                            className={inputSize()}
                        />
                        <span className={defaultDisabled?"spn1":null}>{label}</span>
                </label>}

            {type && <i
                        className={defaultChecked?checkType+" "+"checked":checkType}
                        onClick={checkIcon}
                        style={{fontSize: iconSize, color: defaultDisabled?"#D1D1D1":null}}>
                        <span className={defaultDisabled?"disableStyle":"ableStyle"}  onClick={checkIcon}>{label}</span>
                        </i>}
        </div>

)
}































