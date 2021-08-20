import './sendMessages_style.css'
import React from 'react'
import { PushMessageToFirebase } from '../../Firebase/Firebase_ref'

function PushMessage(msg, from, to) {
    PushMessageToFirebase(msg, from, to)
}

function SendMessageComponent(props) {
    let text = "Hii"
    return (
        <div className="SendMessageComponent">
            <input type="text" class="send_message" placeholder={"Send Hii to "+props.to} onChange={(e) => text = (e.target.value)}></input>
            <button class="button_send_message" onClick={() => PushMessage(text, props.from, props.to)}>Send Message</button>
        </div>
    )

}
export default SendMessageComponent;
