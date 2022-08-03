// declarations the vars
const navLink = document.querySelectorAll(".nav-link");
const navMenu = document.getElementById("nav-menu");
navLink.forEach((n) => n.addEventListener("click", linkAction));
const cardSection = document.querySelector(".card-countries");
const cardUniversity = document.querySelector(".card-university");
const form = document.querySelector(".search-box");
const unForm=document.querySelector('.search-box-un')
const querye = window.location.search;
const slic = querye.slice(3);
const inuDom = (data) => {
// let info=data
unForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const input=document.querySelector('.search-text-un')
    cardUniversity.textContent=''
    let info=searchUniversty(data,input.value)
    inuDom(info)
})
  data.forEach((ele) => {
    // console.log(ele);
    const cardContent = document.createElement("div");
    cardContent.className = "card-content";
    cardUniversity.appendChild(cardContent);
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    cardContent.appendChild(overlay);
    const details = document.createElement("div");
    details.className = "details";
    overlay.appendChild(details);
    const name = document.createElement("h1");
    name.className = "name-university";
    name.textContent = ele.name;
    details.appendChild(name);
    const countryName = document.createElement("p");
    countryName.className = "country-name";
    countryName.textContent = ele.country;
    details.appendChild(countryName);

    const alpha = document.createElement("span");
    alpha.className = "alpha-word";
    alpha.textContent = ele.alpha_two_code;
    countryName.appendChild(alpha);

    const webLink = document.createElement("a");
    webLink.className = "webLink button";
    webLink.href = `${ele.web_pages[0]}`;
    overlay.appendChild(webLink);

    const arrowIcon = document.createElement("i");
    arrowIcon.className = "ri-arrow-right-line";
    webLink.appendChild(arrowIcon);
  });
};
const createCard = (data) => {
  data.forEach((ele) => {
    // console.log(ele)
    const card = document.createElement("div");
    card.className = "card-content";
    cardSection?.appendChild(card);
    const imagDiv = document.createElement("div");
    imagDiv.className = "div-img";
    card.appendChild(imagDiv);
    const imag = document.createElement("img");
    imag.className = "card-img";
    imag.src = ele.coatOfArms.png;
    imagDiv.appendChild(imag);
    const cardFooter = document.createElement("div");
    cardFooter.className = "details";
    card.appendChild(cardFooter);
    const title = document.createElement("h2");
    title.className = "card-name";
    title.textContent = ele.name.common;
    cardFooter.appendChild(title);
    const anchor = document.createElement("a");
    anchor.className = "button card-button";
    anchor.href = "./university/index.html";
    cardFooter.appendChild(anchor);

    anchor.addEventListener("click", (e) => {
      // e.preventDefault()
      console.log("222");
      anchor.href += `?q=${title.textContent}`;
    });
    const i = document.createElement("i");
    i.className = "ri-arrow-right-line";
    anchor.appendChild(i);
  });
};
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector(".search-text");
  location.href = `./university/index.html?q=${input.value}`;
  const querye = window.location.search;
  const slic = querye.slice(3);
  fetch(
    `https://api.codetabs.com/v1/proxy/?quest=http://universities.hipolabs.com/search?country=${slic}`,
    inuDom
  );
  input.value=''
});
const getData = (q) => {
  fetch(
    `https://api.codetabs.com/v1/proxy/?quest=http://universities.hipolabs.com/search?country=${q}`,
    inuDom
  );
};

if (slic) {
  getData(slic);
} else {
  fetch("https://restcountries.com/v3.1/all", createCard);
}