const home = document.getElementById('home')
const nji = document.getElementById('nji')

const projects = document.getElementById('projects')
const dy = document.getElementById('dy')
const mywork = document.getElementById('mywork')

const about = document.getElementById('about')
const tre = document.getElementById('tre')

const contact = document.getElementById('contact')
const kater = document.getElementById('kater')

function br1() {
    nji.style.display = 'block'
    dy.style.display = 'none'
    mywork.style.display = 'none'
    tre.style.display = 'none'
    kater.style.display = 'none'
}

function br2() {
    dy.style.display = 'block'
    mywork.style.display = 'block'
    nji.style.display = 'none'
    tre.style.display = 'none'
    kater.style.display = 'none'
}

function br3() {
    tre.style.display = 'block'
     nji.style.display = 'none'
    dy.style.display = 'none'
    kater.style.display = 'none'
    mywork.style.display = 'none'
}

function br4() {
    kater.style.display = 'block'
     nji.style.display = 'none'
    dy.style.display = 'none'
    tre.style.display = 'none'
    mywork.style.display = 'none'
}





// Copyyyy
function clicku() {
    var textToCopy = "https://brendonnarta17.wixsite.com/my-site-1";

    var textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    try {
        document.execCommand("copy");
        alert("Text has been copied to the clipboard!");
    } catch (err) {
        console.error("Error copying text: ", err);
    } finally {
        document.body.removeChild(textArea);
    }
}
// Copyyyy




//  MODAL
const image = document.getElementById("imitim");

const modal = document.getElementById("imageModal");
const closeModal = document.getElementById("closeModal");

function openModal() {
    modal.style.display = "block";
}

function closeModalFunction() {
    modal.style.display = "none";
}

image.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalFunction);

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModalFunction();
    }
});

//  MODAL




// Navbarrrr
function closeNavbarOnItemClick() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    const navLinks = document.querySelectorAll(".nav-link");
  
    const maxWidth = 988;
  
    function isMobile() {
      return window.innerWidth <= maxWidth;
    }
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (isMobile()) {
          navbarToggler.click();
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", closeNavbarOnItemClick);
 // Navbarrrr






// ndrrim about me

const brr = document.getElementById('brendon')
const brr2 = document.getElementById('brendon2')

brr.addEventListener("click", function () {
        brr.style.display = 'none'
        brr2.style.display = 'block'
});

brr2.addEventListener("click", function () {
    brr.style.display = 'block'
    brr2.style.display = 'none'
});





// API EMAIL

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.init("C4qEclTy3TIu2orWn");

    const emailParams = {
        from_name: name,
        email: email,
        message: message,
    };

    emailjs.send("service_jyhlrto", "template_7i9fuap", emailParams)
        .then(function(response) {
       
            document.getElementById("confirmation-message").textContent = "Your message has been sent successfully!";
        }, function(error) {
       
            console.error("Error:", error);
            document.getElementById("confirmation-message").textContent = "Oops! Something went wrong. Please try again later.";
        });
});

// API EMAIL















