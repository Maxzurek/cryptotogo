// Coingecko Trending
export interface CoinDTO {
    id: string;
    name: string;
    symbol: string;
    market_data: any;
    market_cap_rank: number
    thumb: string
    small: string
    large: string
    current_price: any
}

export interface PriceAction {
    name: string
    price: number
}

export interface Currencies {
    usd: string;
    ars: string;
    aud: string;
    bch: string;
    bdt: string;
    bhd: string;
    bmd: string;
    bnb: string;
    brl: string;
    btc: string;
    cad: string,
    chf: string,
    clp: string,
    cny: string,
    czk: string,
    dkk: string,
    dot: string,
    eos: string,
    eth: string,
    eur: string,
    gbp: string,
    hkd: string,
    huf: string,
    idr: string,
    ils: string,
    inr: string,
    jpy: string,
    krw: string,
    kwd: string,
    lkr: string,
    ltc: string,
    mmk: string,
    mxn: string,
    myr: string,
    ngn: string,
    nok: string,
    nzd: string,
    php: string,
    pkr: string,
    pln: string,
    rub: string,
    sar: string,
    sek: string,
    sgd: string,
    thb: string,
    try: string,
    twd: string,
    uah: string,
    usd: string,
    vef: string,
    vnd: string,
    xag: string,
    xau: string,
    xdr: string,
    xlm: string,
    xrp: string,
    yfi: string,
    zar: string,
    bits: string,
    link: string,
    sats: string
}
