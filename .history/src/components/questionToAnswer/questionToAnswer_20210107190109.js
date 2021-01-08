const questionToAnswer = (answers) => {
    console.log(answers)
    const template = document.createElement('template');
  template.innerHTML = `
  <style>
  .hider {
   display: block;
   width: 100%;
   height: 20px;
   background-color: white;
   border-radius: 20px;
   box-shadow: 0px 0px 10px 10px #fa250e;
   animation: slider 60s linear;
   animation-play-state: running;
   animation-fill-mode: forwards;
}
@keyframes slider {
   0% {
      width: 100%
   }
   100% {
      width: 0;
   }
}
  </style>
  <div part="loader">
      <div part='lightsaber'>
         <img part='lighstaberHandler' class = 'lighstaberHandler' src="../../../static/assets/ui/LightsaberHandle.png">
         <div part='lightsaberColor' class = 'lightsaberColor'>
            <span part='hider' class = 'hider'></span>
         </div>
      </div>
      <div part='counter'>
         <p part='countdown-text' class = 'countdown-text'></p>
         <p part= 'timer' class = 'timer'></p>
      </div>
  `;
}

export default questionToAnswer;