const addCountModal=document.getElementById("modal"),startCountButton=document.getElementById("countBtn"),backdrop=document.getElementById("backdrop"),cancelCountModalButton=addCountModal.querySelector("#modalCloseBtn"),toggleBackdrop=()=>{backdrop.classList.toggle("active")},closeCountModal=()=>{addCountModal.classList.remove("active")},showCountModal=()=>{addCountModal.classList.toggle("active"),toggleBackdrop()},cancelCountModalHandler=()=>{closeCountModal(),toggleBackdrop()},backdropClickHandler=()=>{closeCountModal(),toggleBackdrop()};startCountButton.addEventListener("click",showCountModal),backdrop.addEventListener("click",backdropClickHandler),cancelCountModalButton.addEventListener("click",cancelCountModalHandler);