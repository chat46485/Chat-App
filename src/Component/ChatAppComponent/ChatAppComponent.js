import './chat_style.css'
import React from 'react'
import UsersListComponent from '../UsersListComponent/UsersListComponent';
import SendMessageComponent from '../SendMessagesComponent/SendMessagesComponent';
import UserMessagesComponent from '../UserMessageComponent/UserMessageComponent.js';
import NavbarComponent from '../Navbar_User/NavbarComponent';
import NavbarChatComponent from '../Navbar_Chat/NavbarChatComponent';

function ChatAppComponent(props) {
    let message_from = props.userName;
    const [message_to, set_message_to] = React.useState(null);
    const [chat_visibility, setChatVisibility] = React.useState(false);
    return (
        <div className="ChatComponent">
            <div className="div_users">
                <NavbarComponent  UserName={message_from}/>
                <UsersListComponent
                    set_message_to={set_message_to}
                    setChatVisibility={setChatVisibility}
                />
            </div>
            {(chat_visibility == true) ? (
                <div className="div_chat">
                    <NavbarChatComponent  recieverName={message_to}/>
                    <div className="div_messages">
                        <UserMessagesComponent
                            message_to={message_to}
                            message_from={message_from}
                        />
                    </div>
                    <div className="div_send_message">
                        <SendMessageComponent
                            from={props.userName}
                            to={message_to}
                        />
                    </div>
                </div>
            ) : (
                <div className="div_chat">
                </div>

            )}
        </div>
    );
}
export default ChatAppComponent;
