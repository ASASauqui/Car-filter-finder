// -------------------Variables-------------------
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
// Contenedor resultados.
const result = document.querySelector("#resultado");
// Rango de años para elegir.
const maxYear = new Date().getFullYear();
const minYear = maxYear-10;
// Generar un objeto.
const searchData = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
}





// -------------------Eventos-------------------
// Al cargar la página.
document.addEventListener("DOMContentLoaded", () => {
    // Mostrar automóviles al cargar.
    showCars(cars);

    // Llenar las opciones de años.
    fillSelect();

    // Iniciar los listeners.
    selectListeners();
});

// Event listener para los select de búsqueda.
function selectListeners(){
    marca.addEventListener("change", (e) => {
        // Poner valor en el objeto de búsqueda.
        searchData.marca = e.target.value;

        // Llamar al filtro.
        carFilter();
    });
    
    year.addEventListener("change", (e) => {
        // Poner valor en el objeto de búsqueda.
        searchData.year = parseInt(e.target.value);

        // Llamar al filtro.
        carFilter();
    });
    
    minimo.addEventListener("change", (e) => {
        // Poner valor en el objeto de búsqueda.
        searchData.minimo = e.target.value;

        // Llamar al filtro.
        carFilter();
    });
    
    maximo.addEventListener("change", (e) => {
        // Poner valor en el objeto de búsqueda.
        searchData.maximo = e.target.value;

        // Llamar al filtro.
        carFilter();
    });
    
    puertas.addEventListener("change", (e) => {
        // Poner valor en el objeto de búsqueda.
        searchData.puertas = parseInt(e.target.value);

        // Llamar al filtro.
        carFilter();
    });
    
    transmision.addEventListener("change", (e) => {
        // Poner valor en el objeto de búsqueda.
        searchData.transmision = e.target.value;

        // Llamar al filtro.
        carFilter();
    });
    
    color.addEventListener("change", (e) => {
        // Poner valor en el objeto de búsqueda.
        searchData.color = e.target.value;

        // Llamar al filtro.
        carFilter();
    });
}





// -------------------Funciones-------------------
// Mostrar automóviles.
function showCars(_cars){
    // Eliminar elementos del HTML.
    clearHTML();

    // Iterar por cada automóvil.
    _cars.forEach((car) => {
        // Obtener variables.
        const {marca, modelo, year, puertas, transmision, precio, color} = car;

        // Crear elemento HTML.-
        const HTML_car = document.createElement("p"); 
        HTML_car.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        // Insertar en el HTML.
        result.appendChild(HTML_car);
    });
}

// Mostrar mensaje de no hay resultado.
function showNoResult(){
    // Limpiar HTML de automóviles.
    clearHTML();

    // Crear elemento HTML.
    const noResultMessage = document.createElement("div");
    noResultMessage.classList.add("alerta", "error");
    noResultMessage.textContent = "No hay resultados. Prueba con otra búsqueda.";
    
    // Añadir elemento HTML.
    result.appendChild(noResultMessage)
}

// Limpiar HTML de los automóviles.
function clearHTML(){
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
}

// Generar los años del select de años.
function fillSelect(){
    for(let i=maxYear;i>=minYear;i--){
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

// Filtro de automóviles en base a la búsqueda.
function carFilter(){
    // Filtros en cadena.
    const filterResult = cars.filter(brandFilter).filter(yearFilter).filter(minPriceFilter).filter(maxPriceFilter).filter(doorFilter).filter(transmissionFilter).filter(colorFilter);

    // Validar si hay autómoviles en el resultado.
    if(filterResult.length){
        // Mostrar automóviles.
        showCars(filterResult);
    }
    else{
        // Mostrar mensaje de no hay resultado.
        showNoResult();
    }
}

// Filtrar la marca del automóvil.
function brandFilter(car){
    // Si sí hay marca.
    if(searchData.marca){
        return car.marca === searchData.marca;
    }
    return car;
}

// Filtrar el año del automóvil.
function yearFilter(car){
    // Si sí hay año.
    if(searchData.year){
        return car.year === searchData.year;
    }
    return car;
}

// Filtrar por el precio mínimo.
function minPriceFilter(car){
    // Si sí hay precio mínimo.
    if(searchData.minimo){
        return car.precio >= searchData.minimo;
    }
    return car;
}

// Filtrar por el precio máximo.
function maxPriceFilter(car){
    // Si sí hay precio máximo.
    if(searchData.maximo){
        return car.precio <= searchData.maximo;
    }
    return car;
}

// Filtrar por puertas.
function doorFilter(car){
    // Si sí hay puertas.
    if(searchData.puertas){
        return car.puertas === searchData.puertas;
    }
    return car;
}

// Filtrar por transmisión.
function transmissionFilter(car){
    // Si sí hay transmisión.
    if(searchData.transmision){
        return car.transmision === searchData.transmision;
    }
    return car;
}

// Filtrar por color.
function colorFilter(car){
    // Si sí hay color.
    if(searchData.color){
        return car.color === searchData.color;
    }
    return car;
}