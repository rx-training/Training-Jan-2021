export interface IMovies{
    // movieId?: number;
    // name: string;
    // image: string;
    // about: string;
    // dateOfRelease: Date;
    // time: string;
    // isRecommended: boolean;
    // isPremiere: boolean;
    // certificationId: number;
    // certification: string;
    // languageId: number;
    // language: string;
    // genreId: number;
    // genre: string;
    // filmCategoryId: number;
    // filmCategory: string;

    movieId?: number;
    name: string;
    image: string;
    about: string;
    dateOfRelease: Date;
    time: string;
    isRecommended: boolean;
    isPremiere: boolean;
    certificationId: number;
    certification: any;
    movieFilmCategories: Array<any>;
    movieGenres: Array<any>;
    movieLanguages: Array<any>;
    screensMovies: Array<any>;
}

/*
{
    "movieId": 31,
    "name": "Monster Hunter",
    "time": "1h 40m",
    "image": "images/recommendedmovie-1.jpg",
    "dateOfRelease": "2021-02-05T00:00:00",
    "about": "Based on a video game, the story follows Lt. Artemis and her loyal soldiers as they get accidentally",
    "certificationId": 1,
    "isRecommended": true,
    "isPremiere": true,
    "certification": {
      "certificationId": 1,
      "certification1": "UA",
      "movies": []
    },
    "movieFilmCategories": [
      {
        "movieFilmcategory1": 1,
        "movieId": 31,
        "filmCategoryId": 1,
        "filmCategory": null,
        "movie": null
      },
      {
        "movieFilmcategory1": 2,
        "movieId": 31,
        "filmCategoryId": 2,
        "filmCategory": null,
        "movie": null
      },
      {
        "movieFilmcategory1": 3,
        "movieId": 31,
        "filmCategoryId": 3,
        "filmCategory": null,
        "movie": null
      }
    ],
    "movieGenres": [
      {
        "movieGenre1": 1,
        "movieId": 31,
        "genreId": 1,
        "genre": null,
        "movie": null
      },
      {
        "movieGenre1": 2,
        "movieId": 31,
        "genreId": 2,
        "genre": null,
        "movie": null
      },
      {
        "movieGenre1": 3,
        "movieId": 31,
        "genreId": 3,
        "genre": null,
        "movie": null
      }
    ],
    "movieLanguages": [
      {
        "movieLanguage1": 1,
        "movieId": 31,
        "languageId": 1,
        "language": null,
        "movie": null
      },
      {
        "movieLanguage1": 2,
        "movieId": 31,
        "languageId": 2,
        "language": null,
        "movie": null
      },
      {
        "movieLanguage1": 3,
        "movieId": 31,
        "languageId": 4,
        "language": null,
        "movie": null
      }
    ],
    "screensMovies": [
      {
        "screenMovieId": 2,
        "screenId": 1,
        "movieId": 31,
        "movie": null,
        "screen": null
      }
    ]
  }
 */