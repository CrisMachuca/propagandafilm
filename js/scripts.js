let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     title = document.querySelector(".text1"),
     link1 = document.querySelector(".link1"),
     link2 = document.querySelector(".link2"),
     link3 = document.querySelector(".link3"),
     dropbtn = document.querySelector(".dropbtn"),
     desplegable1 = document.querySelector(".desplegable1"),
     desplegable2 = document.querySelector(".desplegable2"),
     desplegable3 = document.querySelector(".desplegable3"),
     campo1 = document.querySelector(".campo1"),
     campo2 = document.querySelector(".campo2"),
     campo3 = document.querySelector(".campo3"),
     campo4 = document.querySelector(".campo4"),
     campo5 = document.querySelector(".campo5"),
     linka1 = document.querySelector(".linka1"),
     linka2 = document.querySelector(".linka2"),
     linka3 = document.querySelector(".linka3"),
     linka4 = document.querySelector(".linka4"),
     linka5 = document.querySelector(".linka5")
     

     ;

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")


          title.textContent = data[attr].text1
          link1.textContent = data[attr].link1
          link2.textContent = data[attr].link2
          link3.textContent = data[attr].link3
          dropbtn.textContent = data[attr].dropbtn
          desplegable1.textContent = data[attr].desplegable1
          desplegable2.textContent = data[attr].desplegable2
          desplegable3.textContent = data[attr].desplegable3
          campo1.textContent = data[attr].campo1
          campo2.textContent = data[attr].campo2
          campo3.textContent = data[attr].campo3
          campo4.textContent = data[attr].campo4
          campo5.textContent = data[attr].campo5
          linka1.textContent = data[attr].linka1
          linka2.textContent = data[attr].linka2
          linka3.textContent = data[attr].linka3
          linka4.textContent = data[attr].linka4
          linka5.textContent = data[attr].linka5
          

     })
})

let data = {
     english: {
          text1: "Please fill the form below and we´ll contact you right away",
          link1: "HOME",
          link2: "ABOUT",
          link3: "SERVICES",
          link4: "CONTACT",
          dropbtn: "LOCATIONS",
          desplegable1: "Land",
          desplegable2: "Sea",
          desplegable3: "Sky",
          campo1: "Your Name*",
          campo2: "Your Company",
          campo3: "Email*",
          campo4: "Phone number",
          campo5: "Message*",
          linka1: "Home",
          linka2: "About",
          linka3: "Services",
          linka4: "Locations",
          linka5: "Contact",
          titulo: "Film and Photo Production Services"
     },
     french: {
          text1: "Veuillez remplir le formulaire ci-dessous et nous vous contacterons promptement",
          link1: "ACCUEIL",
          link2: "À PROPOS",
          link3: "SERVICES",
          link4: "CONTACT",
          dropbtn: "REPÉRAGES",
          desplegable1: "Terre",
          desplegable2: "Mer",
          desplegable3: "Air",
          campo1: "Votre nom*",
          campo2: "Votre societé",
          campo3: "Email*",
          campo4: "Nº de téléphone",
          campo5: "Message*",
          linka1: "Accueil",
          linka2: "Á propos",
          linka3: "Services",
          linka4: "Repérages",
          linka5: "Contact",
          titulo: "Services de Production  Photo & Films",


     }
}