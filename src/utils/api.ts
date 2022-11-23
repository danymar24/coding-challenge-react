const apiKey: string = 'ZWQtNhsIJMEKJnsoGivLfhFMRf8DY2oMs3TvmrZ3';
const apiUrl: string = 'https://api.nal.usda.gov/fdc/v1';

//foods/search?query=apple&pageSize=2&api_key=ZWQtNhsIJMEKJnsoGivLfhFMRf8DY2oMs3TvmrZ3

const getFoodData = (query: string) => {
    return fetch(`${apiUrl}/foods/search?query=${query}&api_key=${apiKey}`);
}

export { getFoodData };