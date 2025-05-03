// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

async function fetchData(url){
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

async function getChefBirthday(id){
    const recipe = await fetchData(`https://dummyjson.com/recipes/${id}`)
    const chef = await fetchData(`https://dummyjson.com/users/${recipe.userId}`)
    return chef.birthDate
}

//BONUS 1
// async function getChefBirthday(id) {

//     let recipe
//     try{
//         const responseRecipe = await fetch(`https://dummyjsonfalso.com/recipes/${id}`)
//         recipe = await responseRecipe.json()
//     }catch(error){
//         console.error(error)
//         throw new Error(`Non recupero la ricetta id ${id}`)
//     }
//     if(!recipe){
//         throw new Error(`Ricetta con id ${id} non trovata`)
//     }

//     let chef
//     try{
//         const responseBirthday = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
//         chef = await responseBirthday.json()
//     }catch(error){
//         console.error(error)
//         throw new Error(`Non trovo lo chef con id ${id}`)
//     }
//     if(!chef){
//         throw new Error(`Lo chef con id ${id} non trovato`)
//     }
//     const dataFormattata = dayjs(chef.birthDate).format('DD/MM/YYYY')
//     return dataFormattata
// }

// (async () => {
//     try {
//         const birthday = await getChefBirthday(1)
//         console.log('Data di nascita dello chef:', birthday)
//     }catch(error){
//         console.error('Errore:', error.message)
//     }finally{
//         console.log('Codice eseguito')
//     }
    
// })()

//BONUS 2
async function getChefBirthday(id) {
    const responseRecipe = await fetch(`https://dummyjson.com/recipes/${id}`)
    const recipe = await responseRecipe.json()
    const responseBirthday = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
    const chef = await responseBirthday.json()
    const dataFormattata = dayjs(chef.birthDate).format('DD/MM/YYYY')
    return dataFormattata
}

(async () => {
    try {
        const birthday = await getChefBirthday(1)
        console.log('Data di nascita dello chef:', birthday)
    }catch(error){
        console.error('Errore:', error.messagge)
    }finally{
        console.log('Codice eseguito')
    }
    
})()

// getChefBirthday(1)
// .then(birthday => console.log('Data di nascita dello chef:', birthday))
// .catch(error => console.error('Errore:', error.message))