import React from "react";
import Avatar from "../avatar";
import "./avatarGroup.css"

const AvatarGroup = ({ children, max, total }) => {

    if (max !== undefined && max > 0) {
        return <span className="avatar-group">
            {children.slice(0, max - 1)}
            <Avatar text={`+${children.length - max + 1}`} />
        </span>
    } else if(total !== undefined && total > children.length) {
        return <span className="avatar-group">
            {children}
            <Avatar text={`+${total-children.length}`} />
        </span>
    }



    return <span className="avatar-group">
        {children}
       
    </span>
}
export default AvatarGroup