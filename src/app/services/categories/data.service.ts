import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Women',
      image: '../../assets/category-1.png'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Mens',
      image: '../../assets/category-2.png'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Kids',
      image: '../../assets/category-3.png'
    }
    let cat4: ICategory = {
      id: 4,
      name: 'Others',
      image: '../../assets/other.jpg'
    }

    categories.push(cat1, cat2, cat3,cat4);

    return categories;
  }
  getTrendycloths() {
    let trendycloths = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Women',
      image: '../../assets/depositphoto.jpg'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Mens',
      image: '../../assets/depositphotos_4.jpg'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Kids',
      image: '../../assets/category-3.png'
    }
    let cat4: ICategory = {
      id: 4,
      name: 'Others',
      image: '../../assets/light-colored-womens-summer-clothes-shoes-hanger_176873-11430.jpg'
    }

    trendycloths.push(cat1, cat2, cat3,cat4);

    return trendycloths;
  }
}
