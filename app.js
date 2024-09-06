
const audio1 = document.querySelectorAll('.fa-play');

let currentAudio=null;
for(let i=0;i<audio1.length;i++){
    audio1[i].addEventListener("click",()=>{
        if (currentAudio && currentAudio === audio1[i].audioEl) {
            if (currentAudio.paused) {
                currentAudio.play();  // If paused, play the audio
            } else {
                currentAudio.pause();  // If playing, pause the audio
            }
        }
        else{
            if(currentAudio){
                currentAudio.pause();
            }
        let audio=document.createElement('audio');
        console.log(audio);
       
           
       audio.src="What's Up - KR$NA, Lisa Mishra (pagalall.com).mp3";
       audio.classList.add("music");
    
      
      
       audio1[i].audioEl = audio;

       
       audio.play();
       currentAudio = audio;
       
        }
    });

}
console.log(audio1);


