import axios from 'axios';

async function fetchData<T>(url: string) {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

console.log(fetchData("string"));