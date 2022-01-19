import { IDataService } from "./IDataService";

export class MovieService implements IDataService{
    GetData() {
        return 'data från MovieService';
    }

}