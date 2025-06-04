export interface Country {
    name: string;
    nativeName: string;
    flag: string;
    population: number;
    region: string;
    subregion: string;
    languages: string[];
    topLevelDomain: string[];
    alpha3Code: string;
    borders: string[];
    currencies: Currency[];
}

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}