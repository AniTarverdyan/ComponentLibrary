import React from "react";
import Popup from "../../lib/popup1/popup1";

export default {
  title: "Library/Popup1",
  component: Popup,
};

const Template = (args) => <Popup {...args} />;

export const example1 = Template.bind({});
  example1.args = {
    type: "login",
    headerText: "Գրանցում",
    label1Text:"անուն/ազգանուն",
    input1Placeholder: "Գրեք Ձեր անունը/ազգանունը",
    label2Text:"էլեկտրոնային հասցե",
    input2Placeholder:"Գրեք Ձեր էլեկտրոնային հասցեն",
    label3Text:"գաղտնաբառ",
    input3Placeholder: "*******",
    buttonText:"Հաստատել",
};





