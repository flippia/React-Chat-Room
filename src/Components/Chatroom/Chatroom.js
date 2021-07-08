import "./Chatroom.css";
import { useState, useEffect } from "react";
import { projectFirestore } from '../../firebase/config';
import Chats from "./Chats/Chats";
import Header from "./Header/Header";

const Chatroom = () => {
    const [search, setSearch] = useState(null);
    const [message, setMessage] = useState('');
    const [ chats, setChats] = useState([]); 
    const [ filter, setFilter] = useState([]); 
    const [room, setRoom] = useState('general'); 
    const [user, setUser] = useState('Saber'); 
    const [withdrawId, setWithdrawId] = useState(null);

    const switchChatRoom = (name) => {
        setRoom(name);       
    }

    const handleSearch = () => {
        console.log(search);
        // chats.forEach(chat => {
        //     chat.content
        // })
    }

    const sendMessage = () => {
        const inputMessage = document.querySelector('.inputmessage');
        if(message !== ""){
            const post = {
                ID: user,
                content: message,
                time: new Date()
            }
            projectFirestore.collection(room).add(post);            
            inputMessage.value = '';
            setMessage('');
            setTimeout(() => {setWithdrawId(null)}, 60000);
        }else{
            alert("Please input first.");
            inputMessage.value = '';
        }        
    }

    const selectChat = (e) => {
        const current = new Date();
        if(e.target.classList.contains('currentId')){            
            const time = Array.from(e.target.children)[1].innerText
            // const MinSec = time.substr(time.length - 5);
            const thatTime = new Date(time);                        
            if(current - thatTime < 60000){                
                setWithdrawId(e.target.id);                
                // console.log((current - thatTime) / 1000);
                // console.log(withdrawId);
            }else{setWithdrawId(null)};           
        }
        else{ 
            // e.stopPropagation();
            if(e.target.parentElement.classList.contains('currentId')){                
                const time = Array.from(e.target.parentElement.children)[1].innerText                
                const thatTime = new Date(time)                
                if(current - thatTime < 60000){                    
                    setWithdrawId(e.target.parentElement.id);
                }else{setWithdrawId(null)};
            }
        }                
    }

    const handleWithdraw = () => {
        projectFirestore.collection(room).doc(withdrawId).delete();
        setWithdrawId(null); 
    }

    const deleteMessage = (ID) => {
        projectFirestore.collection(room).get().then(res => {
            return res.docs;
        }).then(docs => docs.map(doc => {
            return{...doc.data(),id: doc.id};
        })).then(data => setFilter(data.filter(x => x.ID === ID))).then(filter.forEach(a => {
            projectFirestore.collection(room).doc(a.id).delete();            
        }))       
    }

    const load = (chatroom) => {
        projectFirestore.collection(chatroom).orderBy('time').get().then(res => {
            return res.docs;
        }).then(docs => docs.map(doc => {
            return{...doc.data(),id: doc.id};
        })).then(data => {
            setChats(data);
            const chatsarea = document.querySelector('.chatsArea');
            chatsarea.scrollTop = chatsarea.scrollHeight;
        }) 
    }

    const realTimeListener = (chatroom) => {
        projectFirestore.collection(chatroom).orderBy('time')
            .onSnapshot(snap => {
                let docs = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                setChats(docs);
                const chatsarea = document.querySelector('.chatsArea');
                chatsarea.scrollTop = chatsarea.scrollHeight;
            })
    }

    useEffect(() => {
        // load(room);         
        realTimeListener(room);             
    },[]);

    useEffect(() => {
        if(localStorage.getItem('user')){
            setUser(localStorage.getItem('user'));
        }        
    });   
    

    return ( 
        <div className="chatRoom">
            <Header room = {room} user = {user} switchChatRoom={switchChatRoom} realTimeListener={realTimeListener} />
            <div className="chats">
                <div className="chatsArea">
                    {chats && <Chats chats={chats} user={user} selectChat={selectChat} withdrawId={withdrawId}/>} 
                </div> 
                <div className="search">
                    <textarea
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Please input here"></textarea>
                    <button onClick={()=>handleSearch()}>Search</button>
                </div> 
            </div>
            <div className="input">
                <textarea 
                onKeyUp={e => {if(e.code === 'Enter' || e.code === 'NumpadEnter'){sendMessage()}}}
                onChange={e => setMessage(e.target.value.trim())}
                placeholder="Please input here"
                className="inputmessage"></textarea>  
            </div>
            <div className="buttons">
                <button 
                onClick={() => handleWithdraw()}
                disabled={withdrawId === null ? true : false}
                className="withdraw">Withdraw</button>
                <button 
                onClick={() => sendMessage()}
                className="send">Send</button>
            </div>     
        </div>        
    );
}
 
export default Chatroom;
