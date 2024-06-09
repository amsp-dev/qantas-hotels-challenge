import { http, delay, HttpResponse } from 'msw';
import data from './data.json';

const handlers =[
    http.get('/api/data', async () => {
        // Simulate a delay
        await delay(1000);
        return HttpResponse.json({
            ...data
        })
    })
];

export default handlers
