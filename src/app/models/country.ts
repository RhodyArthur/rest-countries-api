export interface Country {
    name: Name;
    flags: Flags;
    population: number;
    region: string;
    subregion: string;
    languages: Language;
    tld: string[];
    borders: string[];
    currencies: Currency;
    capital: string[];
    cca3: string;
}

export interface Currency {
    [code: string]: {
      symbol: string;
      name: string;
    };
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName
}

export interface Language {
    [code: string]: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string
}

export interface NativeName {
  [key: string]: {
        official: string;
        common: string;
  };
}