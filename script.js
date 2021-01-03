const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Promt to select media screen, pass to video element, play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        
    }
}

button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled = false;
});

//On load
selectMediaStream();