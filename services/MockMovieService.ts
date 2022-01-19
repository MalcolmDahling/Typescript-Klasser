import { IDataService } from "./IDataService";

export class MockMovieService implements IDataService{
    GetData() {
        return 'Mockdata från MockService';
    }

}