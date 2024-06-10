import { http, delay, HttpResponse } from 'msw';
import data from './data.json';

const handlers =[
    http.get('/api/data', async ({ request }) => {
        // Get the sort parameter from the request url
        const url = new URL(request.url);
        const sort = url.searchParams.get('sort');

        // Simulate a delay when loading an API response...
        await delay(500);
        // Apply sorting to data
        const sortedData = {
            ...data,
            // Apply sorting to copy of array data
            results: [...data.results].sort((a, b) => {
                const displayPriceA = a.offer.displayPrice.amount;
                const displayPriceB = b.offer.displayPrice.amount;
                if(sort === 'desc') {
                    return displayPriceA < displayPriceB ? 1 : -1;
                } else if(sort === 'asc') {
                    return displayPriceA > displayPriceB ? 1 : -1;
                }
                return 0
              }),
            total: data.results.length,
            // Simulate query param coming back with API response
            locationQueryParam: 'Sydney'
        }
        
        return HttpResponse.json({
            ...sortedData
        })
    })
];

export default handlers
