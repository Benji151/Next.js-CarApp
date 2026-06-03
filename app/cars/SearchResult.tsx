import { CarModel } from "../lib/CarModel";

type searchResultProps = {
        CarSearchResult: CarModel[];
    };

export const SearchResult = ( { CarSearchResult }: searchResultProps ) => {
    return (
        <div>
            {CarSearchResult.map((car) => (
                <div key={car.model_make_id}>
                    <h3>{car.model_make_id} {car.model_name}</h3>
                </div>
            ))}
        </div>
    );
};
