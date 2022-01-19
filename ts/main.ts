import { Movie } from '../models/movie';


window.onload = function(){
    let main = new Main();
    main.start();
}


class Main{
    start(){
        let movie = new Movie('namn', 'asdfasdfasdf');
        console.log(movie);
        
    }
}

