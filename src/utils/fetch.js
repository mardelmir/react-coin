const fetchTopCoins = async () => {
    try {
        const response = await fetch('https://api.coincap.io/v2/assets?limit=10')
        if (!response.ok) { throw new Error('Error al acceder a las criptomonedas') }
        const data = await response.json()
        console.log(data)
    }
    catch (error) { console.log(error) }
}


export default fetchTopCoins