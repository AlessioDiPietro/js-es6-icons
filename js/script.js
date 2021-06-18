const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];


  
//   icons.forEach((element) => {
//     const {family,prefix,name} = element;
    
//     document.getElementById("icon_group").innerHTML +=
//     `<div class="col-2 m-2 box_icon border border-info d-flex align-items-center justify-content-center">
//         <i class="${family} ${prefix}${name}"></i>
//     </div>
//     `;
// });


const newIcon = icons.map((element) => {

    const name = element.name;
    const prefix = element.prefix;
    const type = element.type;
    const family = element.family;

    let color = "green";

    if (type === "user"){
        color = "blue";
    }else if ( type === "animal"){
        color = "red";
    }


    return {
        name,
        prefix,
        type,
        family,
        color

    }

});



newIcon.forEach((element) => {
    const {family,prefix,name,color} = element;
    
    document.getElementById("icon_group").innerHTML +=
    `<div class="col-2 m-2 box_icon border border-info d-flex align-items-center justify-content-center">
        <i class="${family} ${prefix}${name}"  style="color:${color}"></i>
    </div>
    `;
});


const type = [];

newIcon.forEach((element) => {

    if (!type.includes(element.type)){
        type.push(element.type);
        document.getElementById("type").innerHTML += 
        `<option value="${element.type}">${element.type}</option>
        `
    }
    console.log(type);

});


const selector = document.getElementById("type");

selector.addEventListener("change", ()=> {
    const valoreSelector = selector.value;
    console.log(valoreSelector);

    const iconFiltro = newIcon.filter ((element) =>{
        return  element.type == valoreSelector;
    });
    
    iconFiltro.forEach((element) => {
        const {family,prefix,name,color} = element;
        
        document.getElementById("icon_group").innerHTML +=
        `<div class="col-2 m-2 box_icon border border-info d-flex align-items-center justify-content-center">
            <i class="${family} ${prefix}${name}"  style="color:${color}"></i>
        </div>
        `;
});

});






