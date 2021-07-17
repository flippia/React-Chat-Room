import "./Profile.css";
import { useState } from "react";
import { projectStorage, projectFirestore, projectAuth } from '../../firebase/config';

const Profile = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    const handleChange = e => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const upLoad = projectStorage.ref(`images/${projectAuth.currentUser.uid}/${image.name}`).put(image);
        upLoad.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                projectStorage
                    .ref(`images/${projectAuth.currentUser.uid}`)
                    .child(image.name)
                    .getDownloadURL()
                    .then( url => setUrl(url))
            }
        )
    }

    return (  
        <div className="profile">
            <h1>Profile</h1>
            <div className="upload">
                <input type="file" className="" onChange={handleChange}/>
                <button onClick={handleUpload}>Upload</button>
                {url && <a href={url}>Image uploaded</a>}
            </div> 
        </div>
    );
}
 
export default Profile;