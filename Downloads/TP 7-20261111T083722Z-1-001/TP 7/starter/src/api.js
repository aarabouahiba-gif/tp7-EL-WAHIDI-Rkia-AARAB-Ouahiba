export const API_URL = 'https://countries.dev/countries'

export function adapterPays(p) {
  return {
    cca3: p.alpha3Code,
    name: { common: p.name, official: p.nativeName || p.name },
    capital: p.capital ? [p.capital] : null,
    region: p.region,
    population: p.population ?? 0,
    flags: { svg: p.flags?.svg }
  }
}