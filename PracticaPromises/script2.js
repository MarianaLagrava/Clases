const getEdad =(edad)=>{
    return new Promise ((resolve,reject)=>{
        edad>19 ? resolve("Bienvenido"):reject("Lo siento");

    });
}

// getEdad(11)
// .then(response=>console.log(response))
// .catch(error=> console.log(error));//aca toma el reject o la 
// //promesa no se cumple

//async y await
async function movie(){
    //esta variable debe ir dentro ya que no se cambiara por "let"
    let edad = document.querySelector("#edad-input").value; 
    try{
        let results = await getEdad(edad);
        console.log(results);
    }catch(error){
        console.log(error);
    }
}


//FETCH

fetch(`texto.txt`) //DEVUELVE UNA PROMESA
.then(response=>response.text())//SE OBTIENE EL CONTENIDO DEL ARCHIVO
.then(data=>console.log(data))//DEVUELVE LO QUE TIENE 
.catch(error=>console.log(error));

//async y await
async function getData(){
    try{
        let texto = await fetch('texto.txt');
        let data = await texto.text();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}



// //obtener contenido de users.json
// fetch(`users.json`) //DEVUELVE UNA PROMESA
// .then(response=>response.json())//SE OBTIENE EL CONTENIDO DEL ARCHIVO
// .then(data=>console.log(data))//DEVUELVE LO QUE TIENE 
// .catch(error=>console.log(error));

async function getData(){
    try{
        let data = await fetch(`users.json`);
        let results = await data.json();
        console.log(results);
        console.log(results[0]);
        const info = results.map((i)=>console.log(i));
    }catch(error){
        console.log(error);
    }
}

getData();