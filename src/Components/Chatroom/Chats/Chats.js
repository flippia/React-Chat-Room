import "./Chats.css";
import { useEffect } from "react";

const Chats = ({userId, chats, selectChat, withdrawId, search}) => {
    const timeConverter = (UNIX_timestamp) => {
        const Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May',' Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'];

        const date = new Date(UNIX_timestamp*1000);
        const year = date.getFullYear();
        const month = Month[date.getMonth()];
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = '0' + date.getMinutes();
        const seconds = '0' + date.getSeconds();

        return year + ' ' + month + ' ' + day + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }

    useEffect(() => {
        const Contents = Array.from(document.querySelectorAll('.content'));
        if(search !== ''){
            Contents.forEach(content => {
                content.innerHTML = content.textContent.replace(search, match => `<span style="color:crimson; font-weight: bold; text; text-decoration: underline">${match}</span>`);
                console.log(content.innerHTML);
            });
        };
    },[search]);    
    
    return ( 
        <div className="Chats">
            {chats.map(chat => (
                <div 
                id={chat.id}
                className={`${chat.ID === userId ? "currentId" : "oneChat"} ${chat.id === withdrawId ? "selected" : ""}`}
                onClick={(e) => selectChat(e)}
                key={chat.id}>
                    <p className="id">{chat.ID}</p><p className="time">{timeConverter(chat.time.seconds)}</p>
                    <p className="content">{chat.content}</p>                    
                </div>                
            ))}
        </div>
    );
}
 
export default Chats;
