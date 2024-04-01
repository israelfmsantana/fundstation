const token = "mXF7E3cgxuBv5AF6kSdC9X"

const GET = async () => {
    const response = await fetch('https://brapi.dev/api/quote/MGLU3?token='+token) 
    const parsedData = await response.json();
    return Response.json(parsedData);
}

export {GET};