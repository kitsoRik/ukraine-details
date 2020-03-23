export interface ICity {
    id: number;
    name: string;
    population: number;
}

export class City implements ICity {
    constructor(public id: number, 
        public name: string,
        public population: number) { }
}