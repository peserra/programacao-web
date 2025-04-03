function lavaALouca(){
    return new Promise((resolve, reject) => {
        const loucaSuja = true;
        if (loucaSuja) {
            resolve("Lavei a louca!!");
        } else {
            reject("Louca ja estava limpa!");
        } 
    });
}
function varreACasa(){
    return new Promise((resolve, reject) => {
        const casaComPoeira = false;
        if (casaComPoeira) {
            resolve("Varri a casa!");
        } else {
            reject("Vou varrer so amanha!");
        } 
    });
}


async function limpaACasa()
{
    const louca = await lavaALouca();
    console.log(louca);
    const varre = await varreACasa();
    console.log(varre);
    console.log("Terminado!!! ");
}

limpaACasa();





