import axios from 'axios'

const uri = "http://localhost:3000/beers/"

export default {
    deleteBeer,
    updateBeer,
    createBeer
}


// DELETE 

async function deleteBeer(id){
    try {
    const response = await axios.delete(uri + id, id)
    return response.data
    } catch (error){
    console.error(error)
    }
}

// EDIT 

async function updateBeer(id, values){
    try {
        const response = await axios.put(uri + id, values)
        return response.data
    } catch (error){
        console.error(error)
    }
}

// CREATE A BEER 

async function createBeer(values){
    try {
        const newBeer = await axios.post(uri, values)
        return newBeer.data

    } catch (error ){
        console.error(error)
    }
    
}


