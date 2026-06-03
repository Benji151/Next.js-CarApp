import type { CarSearchResponse } from "./CarModel";

export const searchCar = async (q: string): Promise<CarSearchResponse> => {
    const res = await fetch(`https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=${q}`);
    const data = await res.json();
    console.log(data.Results);
    return { SearchResult: data.Results, totalResults: data.Count, response: data.Message };
};
