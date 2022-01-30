import React from "react";
import Popup from "../lib/popup3/popup3";

export default {
  title: "Library/Popup3",
  component: Popup,
};

function foo(){
  alert("check")
}

const Template = (args) => <Popup {...args} />;

export const example1 = Template.bind({});
  example1.args = {
    type:"advertising",
    slot1Text:"Այս պատուհանը չունի ոչ մի կոմերցիոն նպատակ Մենք պարզապես ցանկանում ենք",
    slot2Text:"ԿԱՏԱՂԵՑՆԵԼ ՔԵԶ",
    slot3Text:"Ստացվե՞ց դա մեզ մոտ",
    button1Text:"Այո",
    button1onClick: foo,
    button2Text:"Ոչ",
    button2onClick:foo,
    button3Text: "Օգնեցեեեք!",
    button3onClick:foo,
    messageText:"",
};





