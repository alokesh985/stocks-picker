// This file is used to store the mock data of the API responses for testing
export const SYMBOL_SEARCH_MOCK = {
  data: {
    bestMatches: [
      {
        "1. symbol": "IBM",
        "2. name": "International Business Machines Corp",
        "3. type": "Equity",
        "4. region": "United States",
        "5. marketOpen": "09:30",
        "6. marketClose": "16:00",
        "7. timezone": "UTC-04",
        "8. currency": "USD",
        "9. matchScore": "1.0000",
      },
      {
        "1. symbol": "IBML",
        "2. name": "iShares iBonds Dec 2023 Term Muni Bond ETF",
        "3. type": "ETF",
        "4. region": "United States",
        "5. marketOpen": "09:30",
        "6. marketClose": "16:00",
        "7. timezone": "UTC-04",
        "8. currency": "USD",
        "9. matchScore": "0.8571",
      },
    ],
  },
};

export const STOCK_DATA = {
  stockOverview: {
    Symbol: "MSFT",
    AssetType: "Common Stock",
    Name: "Microsoft Corporation",
    Description:
      "Microsoft Corporation is an American multinational technology company which produces computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 21 in the 2020 Fortune 500 rankings of the largest United States corporations by total revenue; it was the world's largest software maker by revenue as of 2016. It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Amazon, and Facebook.",
    CIK: "789019",
    Exchange: "NASDAQ",
    Currency: "USD",
    Country: "USA",
    Sector: "TECHNOLOGY",
    Industry: "SERVICES-PREPACKAGED SOFTWARE",
    Address: "ONE MICROSOFT WAY, REDMOND, WA, US",
    FiscalYearEnd: "June",
    LatestQuarter: "2023-06-30",
    MarketCapitalization: "2391491215000",
    EBITDA: "102022996000",
    PERatio: "33.25",
    PEGRatio: "2.275",
    BookValue: "27.75",
    DividendPerShare: "2.72",
    DividendYield: "0.0086",
    EPS: "9.68",
    RevenuePerShareTTM: "28.46",
    ProfitMargin: "0.342",
    OperatingMarginTTM: "0.418",
    ReturnOnAssetsTTM: "0.142",
    ReturnOnEquityTTM: "0.388",
    RevenueTTM: "211914998000",
    GrossProfitTTM: "135620000000",
    DilutedEPSTTM: "9.68",
    QuarterlyEarningsGrowthYOY: "0.202",
    QuarterlyRevenueGrowthYOY: "0.083",
    AnalystTargetPrice: "355.54",
    TrailingPE: "33.25",
    ForwardPE: "27.03",
    PriceToSalesRatioTTM: "9.14",
    PriceToBookRatio: "11.05",
    EVToRevenue: "9.21",
    EVToEBITDA: "18.55",
    Beta: "0.904",
    "52WeekHigh": "366.01",
    "52WeekLow": "211.39",
    "50DayMovingAverage": "334.82",
    "200DayMovingAverage": "283.81",
    SharesOutstanding: "7429760000",
    DividendDate: "2023-09-14",
    ExDividendDate: "2023-08-16",
  },
  dailyTimeSeries: {
    "Meta Data": {
      "1. Information": "Daily Prices (open, high, low, close) and Volumes",
      "2. Symbol": "MSFT",
      "3. Last Refreshed": "2023-08-25",
      "4. Output Size": "Compact",
      "5. Time Zone": "US/Eastern",
    },
    "Time Series (Daily)": {
      "2023-08-25": {
        "1. open": "321.4700",
        "2. high": "325.3600",
        "3. low": "318.8001",
        "4. close": "322.9800",
        "5. volume": "20672967",
      },
      "2023-08-24": {
        "1. open": "332.8500",
        "2. high": "332.9800",
        "3. low": "319.9600",
        "4. close": "319.9700",
        "5. volume": "23281434",
      },
      "2023-08-23": {
        "1. open": "323.8200",
        "2. high": "329.2000",
        "3. low": "323.4600",
        "4. close": "327.0000",
        "5. volume": "21166382",
      },
      "2023-08-22": {
        "1. open": "325.5000",
        "2. high": "326.0750",
        "3. low": "321.4600",
        "4. close": "322.4600",
        "5. volume": "16102024",
      },
      "2023-08-21": {
        "1. open": "317.9300",
        "2. high": "322.7700",
        "3. low": "317.0400",
        "4. close": "321.8800",
        "5. volume": "24039956",
      },
      "2023-08-18": {
        "1. open": "314.4900",
        "2. high": "318.3800",
        "3. low": "311.5508",
        "4. close": "316.4800",
        "5. volume": "24755012",
      },
    },
  },
};

export const MULTIPLE_STOCK_DATA = [
  {
    stockOverview: {
      Symbol: "MSFT",
      AssetType: "Common Stock",
      Name: "Microsoft Corporation",
      Description:
        "Microsoft Corporation is an American multinational technology company which produces computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 21 in the 2020 Fortune 500 rankings of the largest United States corporations by total revenue; it was the world's largest software maker by revenue as of 2016. It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Amazon, and Facebook.",
      CIK: "789019",
      Exchange: "NASDAQ",
      Currency: "USD",
      Country: "USA",
      Sector: "TECHNOLOGY",
      Industry: "SERVICES-PREPACKAGED SOFTWARE",
      Address: "ONE MICROSOFT WAY, REDMOND, WA, US",
      FiscalYearEnd: "June",
      LatestQuarter: "2023-06-30",
      MarketCapitalization: "2391491215000",
      EBITDA: "102022996000",
      PERatio: "33.25",
      PEGRatio: "2.275",
      BookValue: "27.75",
      DividendPerShare: "2.72",
      DividendYield: "0.0086",
      EPS: "9.68",
      RevenuePerShareTTM: "28.46",
      ProfitMargin: "0.342",
      OperatingMarginTTM: "0.418",
      ReturnOnAssetsTTM: "0.142",
      ReturnOnEquityTTM: "0.388",
      RevenueTTM: "211914998000",
      GrossProfitTTM: "135620000000",
      DilutedEPSTTM: "9.68",
      QuarterlyEarningsGrowthYOY: "0.202",
      QuarterlyRevenueGrowthYOY: "0.083",
      AnalystTargetPrice: "355.54",
      TrailingPE: "33.25",
      ForwardPE: "27.03",
      PriceToSalesRatioTTM: "9.14",
      PriceToBookRatio: "11.05",
      EVToRevenue: "9.21",
      EVToEBITDA: "18.55",
      Beta: "0.904",
      "52WeekHigh": "366.01",
      "52WeekLow": "211.39",
      "50DayMovingAverage": "334.82",
      "200DayMovingAverage": "283.81",
      SharesOutstanding: "7429760000",
      DividendDate: "2023-09-14",
      ExDividendDate: "2023-08-16",
    },
    dailyTimeSeries: {
      "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "MSFT",
        "3. Last Refreshed": "2023-08-25",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern",
      },
      "Time Series (Daily)": {
        "2023-08-25": {
          "1. open": "321.4700",
          "2. high": "325.3600",
          "3. low": "318.8001",
          "4. close": "322.9800",
          "5. volume": "20672967",
        },
        "2023-08-24": {
          "1. open": "332.8500",
          "2. high": "332.9800",
          "3. low": "319.9600",
          "4. close": "319.9700",
          "5. volume": "23281434",
        },
        "2023-08-23": {
          "1. open": "323.8200",
          "2. high": "329.2000",
          "3. low": "323.4600",
          "4. close": "327.0000",
          "5. volume": "21166382",
        },
        "2023-08-22": {
          "1. open": "325.5000",
          "2. high": "326.0750",
          "3. low": "321.4600",
          "4. close": "322.4600",
          "5. volume": "16102024",
        },
        "2023-08-21": {
          "1. open": "317.9300",
          "2. high": "322.7700",
          "3. low": "317.0400",
          "4. close": "321.8800",
          "5. volume": "24039956",
        },
        "2023-08-18": {
          "1. open": "314.4900",
          "2. high": "318.3800",
          "3. low": "311.5508",
          "4. close": "316.4800",
          "5. volume": "24755012",
        },
        "2023-08-17": {
          "1. open": "320.5400",
          "2. high": "321.8700",
          "3. low": "316.2100",
          "4. close": "316.8800",
          "5. volume": "21257161",
        },
        "2023-08-16": {
          "1. open": "320.8000",
          "2. high": "324.4200",
          "3. low": "319.8035",
          "4. close": "320.4000",
          "5. volume": "20698864",
        },
      },
    },
  },
  {
    stockOverview: {
      Symbol: "IBM",
      AssetType: "Common Stock",
      Name: "International Business Machines",
      Description:
        "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York. IBM produces and sells computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most annual U.S. patents generated by a business (as of 2020) for 28 consecutive years. Inventions by IBM include the automated teller machine (ATM), the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.",
      CIK: "51143",
      Exchange: "NYSE",
      Currency: "USD",
      Country: "USA",
      Sector: "TECHNOLOGY",
      Industry: "COMPUTER & OFFICE EQUIPMENT",
      Address: "1 NEW ORCHARD ROAD, ARMONK, NY, US",
      FiscalYearEnd: "December",
      LatestQuarter: "2023-06-30",
      MarketCapitalization: "130774917000",
      EBITDA: "12985000000",
      PERatio: "61.09",
      PEGRatio: "1.276",
      BookValue: "24.37",
      DividendPerShare: "6.61",
      DividendYield: "0.0463",
      EPS: "2.35",
      RevenuePerShareTTM: "66.75",
      ProfitMargin: "0.0335",
      OperatingMarginTTM: "0.141",
      ReturnOnAssetsTTM: "0.0411",
      ReturnOnEquityTTM: "0.104",
      RevenueTTM: "60524999000",
      GrossProfitTTM: "32688000000",
      DilutedEPSTTM: "2.35",
      QuarterlyEarningsGrowthYOY: "0.126",
      QuarterlyRevenueGrowthYOY: "-0.004",
      AnalystTargetPrice: "143.75",
      TrailingPE: "61.09",
      ForwardPE: "15.55",
      PriceToSalesRatioTTM: "2.108",
      PriceToBookRatio: "6.75",
      EVToRevenue: "2.969",
      EVToEBITDA: "25.81",
      Beta: "0.855",
      "52WeekHigh": "147.62",
      "52WeekLow": "110.02",
      "50DayMovingAverage": "138.29",
      "200DayMovingAverage": "135.51",
      SharesOutstanding: "911006000",
      DividendDate: "2023-09-09",
      ExDividendDate: "2023-08-09",
    },
    dailyTimeSeries: {
      "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2023-08-24",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern",
      },
      "Time Series (Daily)": {
        "2023-08-24": {
          "1. open": "143.5050",
          "2. high": "144.4700",
          "3. low": "143.2200",
          "4. close": "143.5500",
          "5. volume": "2900244",
        },
        "2023-08-23": {
          "1. open": "141.7200",
          "2. high": "143.4750",
          "3. low": "141.5800",
          "4. close": "143.4100",
          "5. volume": "2559083",
        },
        "2023-08-22": {
          "1. open": "142.6600",
          "2. high": "143.2250",
          "3. low": "141.3000",
          "4. close": "141.4900",
          "5. volume": "3557734",
        },
        "2023-08-21": {
          "1. open": "141.4200",
          "2. high": "142.3900",
          "3. low": "141.1100",
          "4. close": "142.2800",
          "5. volume": "2937781",
        },
        "2023-08-18": {
          "1. open": "140.0000",
          "2. high": "141.8300",
          "3. low": "139.7600",
          "4. close": "141.4100",
          "5. volume": "3915480",
        },
        "2023-08-17": {
          "1. open": "141.0100",
          "2. high": "142.6600",
          "3. low": "140.6000",
          "4. close": "140.6600",
          "5. volume": "3742058",
        },
      },
    },
  },
];

export const SUGGESTIONS = ["IBM", "MSFT", "INTU"];
