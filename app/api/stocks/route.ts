const token = "mXF7E3cgxuBv5AF6kSdC9X"

const GET = async (stockName: any) => {
    const response = await fetch('https://brapi.dev/api/quote/'+stockName+'?token='+token) 
    const parsedData = await response.json();
    return Response.json(parsedData);
}

export {GET};