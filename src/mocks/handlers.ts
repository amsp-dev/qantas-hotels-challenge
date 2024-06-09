import { http, delay, HttpResponse } from 'msw';
import data from './data.json';

const handlers =[
    http.get('/api/data', async ({ request }) => {
        // Get the sort parameter from the request url
        const url = new URL(request.url);
        const sort = url.searchParams.get('sort');

        // Simulate a delay when loading an API response...
        await delay(1000);
        return HttpResponse.json({
            ...data,
            // Apply sorting to data
            results: data.results.sort((a, b) => {
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
        })
    })
];

export default handlers
