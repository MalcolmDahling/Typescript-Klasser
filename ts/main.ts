import { Movie } from '../models/movie';
import { IDataService } from '../services/IDataService';
import { MovieService } from '../services/MovieService';
import { MockMovieService } from '../services/MockMovieService';


window.onload = function(){
    let main = new Main();
    let service = new MockMovieService();
    main.start(service);
}


class Main{
    start(service: IDataService){
        let movie = new Movie('namn', 'asdfasdfasdf');
        console.log(movie);
        
        console.log(service.GetData());
    }
}

