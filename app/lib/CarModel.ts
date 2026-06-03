export type CarModel = {
     model_make_id: string;
       model_name: string;
};

export type CarMake = {
      make_id: string;   
       make_display: string; 
};



export type CarSearchResponse = {
  SearchResult: CarModel[];
  totalResults: string;
  response: string;
};
