import { Injectable } from '@angular/core';
import { BehaviorSubject ,Subject } from 'rxjs';
import { environment  } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private genre_subject = new BehaviorSubject<any>('');
  private recommendation_type = new BehaviorSubject<any>('');
  constructor(private http: HttpClient) { }
  books: Array<Object>;

  serviceWrapper (serviceURL, requestData, successHandler, post?){
    var responseSubject = new Subject<any>();
    if(!!post){
      this.http.post(serviceURL, requestData).subscribe(function (data) {
        var result = successHandler(data);
        if (!!result.error) {
            responseSubject.error(result.error);
        }
        else {
            responseSubject.next(result.data);
        }
      }, function (error) {
        responseSubject.error("serviceFailureMsg");
      });
    }
    else{
      this.http.get(serviceURL).subscribe(function (data) {
        var result = successHandler(data);
        if (!!result.error) {
            responseSubject.error(result.error);
        }
        else {
            responseSubject.next(result.data);
        }
      }, function (error) {
        responseSubject.error("serviceFailureMsg");
      });
    }
    return responseSubject;
  }

  setGenre(genre: string) {
    this.genre_subject.next({ genre: genre });
  }
  getGenre(){
    return this.genre_subject;
  }
  setReccomendationType(type: string) {
    this.recommendation_type.next({ rec_type: type });
  }
  getReccomendationType(){
    return this.recommendation_type;
  }

  setBooks(books){
         this.books=books;
  }

  getBooks(){
    return this.books;
  }
  fetchDataUsingGenre(genre?){
    let serviceData = {
      "genre": genre
    };
      // environment.API_URL
  return this.serviceWrapper(
    environment.API_URL+genre,
    serviceData,
    (successData) => {
      // console.log(successData);
      // if(successData.status.code!=200){
      //     let error = "serviceFailureMsg";
      //     return {
      //         'error': error
      //     };
      // } else {
          return {

              'data': successData.bookslist
          };
     //}
  });
  }
  fetchDataUsingUsername(username){
      let serviceData = {
        "username": username
      };
        // environment.API_URL
    return this.serviceWrapper(
      environment.API_URL,
      serviceData,
      (successData) => {
        console.log(successData);
        if(successData.status.code!=200){
            let error = "serviceFailureMsg";
            return {
                'error': error
            };
        } else {
            return {

                'data': successData.response.bookslist
            };
       }
    });
  }
  /*----funtions to be removed----*/
  setAllBook(){
    this.books=[
      {"name":"Wings of Fire",
      "author":"A P J Abdul Kalam, Arun Tiwari"
      },
      {"name":"Harry Potter and the Half-Blood Prince",
      "author":"J K Rowling"
      },
      {"name":"Harry Potter and the Half-Blood Prince",
      "author":"J K Rowling"
      },
      {"name":"Harry Potter and the Half-Blood Prince",
      "author":"J K Rowling"
      }
    ]
  }
  setAvdBook(){
    this.books=[{"name":"Adventures of Stainless Steel Rat","author":"Harry Harrison"},
        {"name":"Guardians of the Flame","author":"Joel Rosenberg"}];

  }

}
