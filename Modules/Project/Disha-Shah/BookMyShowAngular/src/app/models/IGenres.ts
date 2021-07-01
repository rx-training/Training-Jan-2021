export interface IGenres{
  genreId: number;
  genre1: string;
  movieGenres: Array<any>;
}

/*
{
    "genreId": 1,
    "genre1": "Action",
    "movieGenres": [
      {
        "movieGenre1": 1,
        "movieId": 31,
        "genreId": 1,
        "genre": null,
        "movie": null
      },
      {
        "movieGenre1": 10,
        "movieId": 35,
        "genreId": 1,
        "genre": null,
        "movie": null
      },
      {
        "movieGenre1": 14,
        "movieId": 37,
        "genreId": 1,
        "genre": null,
        "movie": null
      },
      {
        "movieGenre1": 19,
        "movieId": 39,
        "genreId": 1,
        "genre": null,
        "movie": null
      }
    ]
  }
 */