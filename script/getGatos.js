
const ObtenerGatos = async (url) =>
{
    const res = await fetch(url)
    const data2 = await res.json()
   // console.log(data2)

   return data2
}

export default ObtenerGatos
