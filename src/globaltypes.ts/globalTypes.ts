// interface Review {
//     rating: number;
//     comment: string;
//     reviewer: string;
//   }
export interface IBook {
    _id: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    reviews: [];
    image: string;
    addedBy: string;
  }