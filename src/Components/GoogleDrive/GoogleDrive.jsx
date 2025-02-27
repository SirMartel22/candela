import React from 'react'
import { useEffect } from 'react'
import { gapi } from 'gapi-script'


const CLIENT_ID = '636045868687-sdnljfhu5dohfhqir7t209m8k42sr1l5.apps.googleusercontent.com'
const API_KEY = 'AIzaSyDILglxIUfxsippGxbGFD0XOjLIeprMz5U'
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly'


const GoogleDrive = () =>{
    useEffect(() =>{
        const initClient = () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })
            .then(() => {
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
            });
        }
        gapi.load('client:auth2', initClient);
    }, []);

    const updateSigninStatus = (isSignedIn) =>{
        if (isSignedIn) {
            console.log('User signed in!');
            //Fetch images here after sign in
        } else {
            console.log("User not signed in!");
            gapi.auth2.getAuthInstance().sign();
        }
    };

    return <div>Loading...</div>;
}

export default GoogleDrive