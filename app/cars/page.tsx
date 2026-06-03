
import { searchCar } from "../lib/carService";
import { SearchFrom } from "./SearchFrom";
import { SearchResult } from "./SearchResult";



type CarPageProps = {
    searchParams: Promise<{ q: string}>;
};

export default async function CarPage( { searchParams }: CarPageProps ) {
    const { q,  } = await searchParams;

    const result = q
    ? await searchCar(q,)
    : ({
        SearchResult: [],
        totalResults: "0",
        response: "True",
    })
    return (

        <>
            <SearchFrom />
            {q && (
                <>
                    <SearchResult CarSearchResult={result.SearchResult} />
                </>
            )}
        </>
    );
}

