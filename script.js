const tabLinksBtn = document.querySelector(".tab-links");
const tabContent = document.querySelector(".tab-contents");
const inactiveBtn = document.querySelector(".inactive");
const tabContent2 =document.querySelector(".tab-contents2")
tabLinksBtn.addEventListener("click", () => {
    tabContent.classList.add("active-tab");
    tabContent2.classList.remove("active-tab2")
    // add in List class toggle is add the class
});

inactiveBtn.addEventListener("click",() =>{
    tabContent2.classList.add("active-tab2");
    tabContent.classList.remove("active-tab");
})

const sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right ="0"
}
function closemenu(){
    sidemenu.style.right ="-200px"
}

// contact form

const scriptURL = 'https://script.google.com/macros/s/AKfycbyCBH4IOip0ffTxzhtjkxAwfkwT_jxAj7a7P4Ib8DchKK1lh2-dH8Bb73T1BtBXWmZW/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Your Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      } )
      .catch(error => console.error('Error!', error.message))
  })

