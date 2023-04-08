import axios from "axios";

const API_URL = '/api/packages/'

//Create new package
const createPackage = async (packageData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    // console.log('createPackage / packageService')
    const response = await axios.post(API_URL, packageData, config)

    // if(response.data) {
    //     localStorage.setItem('package', JSON.stringify(response.data))
    // }

    return response.data
}



// Get package list
const getPackages = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    // console.log('getPackages')
    const response = await axios.get(API_URL, config)

    return response.data
}

//Get one package data
const getPackage = async(packageId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(API_URL + packageId, config)
    // console.log('getPackage: ' + response.data.toString())
    return response.data
}

//Update package
const updatePackage = async (packageId, packageData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.put(API_URL + packageId, packageData, config)

    // if(response.data) {
    //     return {
    //         ...response.data,
    //         id: packageId
    //     }
    // }

    return response.data

}


// Delete package
const deletePackage = async (packageId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + packageId, config)

    return response.data
}


const packageService = {
    createPackage,
    getPackages,
    getPackage,
    updatePackage,
    deletePackage
}

export default packageService;