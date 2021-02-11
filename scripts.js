const URL = "https://rickandmortyapi.com/api/character/?page=";
for(var j = 1; j<34; j++)
{
fetch(URL+j)
.then(response=>response.json())
.then((data)=>{
    let Items = [];
     for(var i = 0; i<20; i++)
        {
            let characterItem = document.createElement("div");
            let characterImage = document.createElement("img");
            let characterName = document.createElement("p");
            let characterOrigin = document.createElement("p");
            let characterSpecie = document.createElement("p");
            characterImage.src = data.results[i].image;
            characterName.append(data.results[i].name);
            characterOrigin.append(data.results[i].origin.name);
            characterSpecie.append(data.results[i].species);
            characterItem.className = "character__item";
            characterImage.className = "character__img";
            characterName.className = "character__text";
            characterOrigin.className = "character__text";
            characterSpecie.className = "character__text";
            characterItem.append(characterImage, characterName, characterOrigin, characterSpecie)
            Items.push(characterItem);
        }
        let ElementoHTML = document.querySelector("#app");
        ElementoHTML.append(...Items);
}
);
}