import axios from "axios";

const basePath = "https://brapi.dev/api/quote";
const apiKey = "mXF7E3cgxuBv5AF6kSdC9X";

/**
 * Searches best stock matches based on a user's query
 * @param {string} query - The user's query, e.g. 'fb'
 * @returns {Promise<Object[]>} Response array of best stock matches
 */
export const searchSymbol = async (query) => {
  const url = `${basePath}/search?q=${query}&token=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

/**
 * Fetches the details of a given company
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @returns {Promise<Object>} Response object
 */
export const fetchStockDetails = async (stockSymbol) => {
  const url = `${basePath}/${stockSymbol}?range=1d&token=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

/**
 * Fetches the latest quote of a given stock
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @returns {Promise<Object>} Response object
 */
export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}/quote?symbol=${stockSymbol}&token=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

/**
 * Fetches historical data of a stock (to be displayed on a chart)
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @param {string} resolution - Resolution of timestamps. Supported resolution includes: 1, 5, 15, 30, 60, D, W, M
 * @param {number} from - UNIX timestamp (seconds elapsed since January 1st, 1970 at UTC). Interval initial value.
 * @param {number} to - UNIX timestamp (seconds elapsed since January 1st, 1970 at UTC). Interval end value.
 * @returns {Promise<Object>} Response object
 */
export const fetchHistoricalData = async (
  stockSymbol,
  range
) => {
  const url = `https://brapi.dev/api/quote/${stockSymbol}?range=1d&token=${apiKey}`;
  const response = await axios.get(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response;
};