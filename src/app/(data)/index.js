import 'server-only';

export default async function getData() {
  /**
   * fetch data
   */
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/values/Sheet1!A1:Z?key=${process.env.API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    // Validate response structure
    if (!data.values || !Array.isArray(data.values) || data.values.length < 1) {
      throw new Error(
        `Unexpected API response format. Expected "data.values" to be an array. Received: ${JSON.stringify(
          data
        )}`
      );
    }

    // Extract headers and rows
    const [headers, ...rows] = data.values;

    // Ensure headers and rows exist
    if (!headers || !Array.isArray(headers) || headers.length === 0) {
      throw new Error(
        `Invalid API response: Missing headers in "data.values".`
      );
    }

    return {
      headers,
      rows,
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return { error: error.message, headers: [], rows: [] }; // Return an error state
  }
}
