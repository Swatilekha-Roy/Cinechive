export class MovieServiceClient {
    findBatmanMovies() {
        return fetch('http://www.omdbapi.com/?s=batman&apikey=ff4b29e2').then(response => response.json());
    }
}