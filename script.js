const videoElement=document.getElementById('video')        
const button=document.getElementById('button')        
const vUrl=`https://youtu.be/pigh5IgA7qQ`;
 
async function getVedio(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata=()=>{
            videoElement.play();
        }
    }
    catch (error){

    }
}

getVedio();
   button.addEventListener('click', () => {
      videoElement.requestPictureInPicture();
    });
  