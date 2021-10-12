const countries = [
    {
      image: "https://flagpedia.net/data/flags/w580/de.png",
      country: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/au.png",
      country: "Australia",
      population: "91,657,312",
      region: "Aus",
      capital: "Canberra"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/in.png",
      country: "India",
      population: "1,3179,984,812",
      region: "Asia",
      capital: "New Delhi"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/kr.png",
      country: "South Korea",
      population: "40,400,000",
      region: "Asia",
      capital: "Seoul"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/us.png",
      country: "United States of America",
      population: "323,947,000",
      region: "North America",
      capital: "Washington,D.C"
    }
  ];
  
  let mainDiv = document.createElement("div");
  mainDiv.classList.add("container");


  countries.forEach(country => {

    const newCountry = document.createElement("div");
    newCountry.classList.add("col");

    const flag = document.createElement("img");
    flag.setAttribute("src",country.image);
    newCountry.append(flag);

    const name = document.createElement("h5");
    name.innerText = country.country;
    newCountry.append(name);

    const population = document.createElement("p");
    const region = document.createElement("p");
    const capital = document.createElement("p");

   
    population.innerText = "Population: " + country.population;
    region.innerText = "Region: " + country.region;
    capital.innerText = "Capital: " + country.capital;

    newCountry.append(population);
    newCountry.append(region);
    newCountry.append(capital);

    mainDiv.append(newCountry);
    

  });



  document.body.append(mainDiv);