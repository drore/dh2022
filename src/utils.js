async function loadText(url) {
    // Fetch this url
    const textUrl = `${process.env.PUBLIC_URL}/resources/texts/${url}`
    const response = await fetch(textUrl);
    // Return the response as text
   return await response.text();
}

async function loadJson(url) {
    // Fetch this url
    const textUrl = `${process.env.PUBLIC_URL}/resources/texts/${url}`
    const response = await fetch(textUrl);
    // Return the response as json
   return await response.json();
}

export { loadText, loadJson };