// declarations the vars
const cardSection = document.querySelector(".card-countries");
const cardUniversity = document.querySelector(".card-university");
const searchBar = document.querySelector('#searchBar');

let dataResult = [];
const query = window.location.search;
const keyword = query.slice(3);

// fetch on data country in rest api 
const getCountries = () => {
  let url = `https://restcountries.com/v3.1/all`;
  fetch(url, (error, result)=> {
    if(error) {
      error
      return;
    }
    dataResult = result
    handleCountryData(dataResult)
    return;
  })
}

// ! handle University data using innerHTML
const handleCountryData = (handle) => {
  const htmlString = handle
      .map((ele) => {
          return `
          <div class="card-content">
            <div class="div-img">
              <img class="card-img" src=${ele.flags.png} alt="logo"></img>
            </div>
            <div class="details">
              <h2 class="card-name">${ele.name.common}</h2>
              <a href='./university/index.html?q=${ele.name.common}' class="button card-button">
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>

          </div>
      `;
      })
      .join('');
      cardSection.innerHTML = htmlString;
};

// fetch on data Universities related the country in rest api 
const getUniversities = () => {
  let url = `https://api.codetabs.com/v1/proxy/?quest=http://universities.hipolabs.com/search?country=${keyword}`;
  fetch(url, (error, result)=> {
    if(error) {
      error
      return;
    }
    handleUniversityData(result)
    return;
  })
}

// ! handle University data using DOM
const handleUniversityData = (handle) => {
    handle.forEach((ele) => {
      const cardContent = document.createElement("div");
      const overlay = document.createElement("div");
    const details = document.createElement("div");
    const name = document.createElement("h2");
    const countryName = document.createElement("p");
    const alpha = document.createElement("span");
    const webLink = document.createElement("a");
    const arrowIcon = document.createElement("i");
    
    cardContent.className = "card-content";
    overlay.className = "overlay";
    details.className = "details";
    name.className = "name-university";
    countryName.className = "country-name";
    alpha.className = "alpha-word";
    webLink.className = "webLink button";
    arrowIcon.className = "ri-arrow-right-line";
    
    name.textContent = ele.name;
    countryName.textContent = ele.country;
    alpha.textContent = ele.alpha_two_code;
    webLink.href = `${ele.web_pages[0]}`;

    cardUniversity.appendChild(cardContent);
    cardContent.appendChild(overlay);
    overlay.appendChild(details);
    details.appendChild(name);
    details.appendChild(countryName);
    countryName.appendChild(alpha);
    overlay.appendChild(webLink);
    webLink.appendChild(arrowIcon);
  });
}

// ! search Country
searchBar.addEventListener('keyup', (e)=> {
  const searchString = e.target.value;
  const filterCharacter = dataResult.filter(character => {
      return character.name.common.includes(searchString);
  })
  handleCountryData(filterCharacter)
})

getCountries();
getUniversities();


// ! Using DOM
// const handleCountryData = (handle) => {
//   handle.map((ele) => {
//     const card = document.createElement("div");
//     const imagDiv = document.createElement("div");
//     const imag = document.createElement("img");
//     const cardFooter = document.createElement("div");
//     const title = document.createElement("h2");
//     const anchor = document.createElement("a");
//     const i = document.createElement("i");
    
//     card.className = "card-content";
//     imagDiv.className = "div-img";
//     imag.className = "card-img";
//     cardFooter.className = "details";
//     title.className = "card-name";
//     anchor.className = "button card-button";
//     i.className = "ri-arrow-right-line";
    
//     imag.src = ele.flags.png;
//     imag.alt = 'logo';
//     title.textContent = ele.name.common;

//     cardSection?.appendChild(card);
//     card?.appendChild(imagDiv);
//     imagDiv?.appendChild(imag);
//     card?.appendChild(cardFooter);
//     cardFooter?.appendChild(title);
//     cardFooter?.appendChild(anchor);
//     anchor?.appendChild(i);

//     anchor.addEventListener("click", (e) => {
//       anchor.href = `./university/index.html`;
//       anchor.href += `?q=${title.textContent}`;
//     });
//   })
// }