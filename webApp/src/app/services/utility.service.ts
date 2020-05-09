import { Injectable } from '@angular/core';
import { BehaviorSubject ,Subject,Observable } from 'rxjs';
import {
  tap
} from "rxjs/operators";
import { environment  } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {Book} from "../models/Book"; 
//https://ng-bootstrap.github.io/#/components/rating/api

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private genre_subject = new BehaviorSubject<any>('');
  display_loading = new Subject<any>();
  private recommendation_type = new BehaviorSubject<any>('');
  private books:Book[];
  private booktitles;
  constructor(private http: HttpClient) { }
  
  serviceWrapper (serviceURL, requestData, successHandler, post?){
    var responseSubject = new Subject<any>();
    this.display_loading.next(true);
    if(!!post){
      this.http.post(serviceURL, requestData).pipe(  
        tap(_ => (
          this.display_loading.next(false)
          ))     
      ).subscribe(function (data) {
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
      this.http.get(serviceURL).pipe(  
        tap(_ => (
          this.display_loading.next(false)
          ))     
      ).subscribe(function (data) {
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
  setBooktitles(titles){
      this.booktitles=titles;
  }
  getBooktitles(){
    return this.booktitles;
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

  setBooks(booklist){
    this.books=booklist.map((book: Book) => new Book().deserialize(book));
  }

  getBooks():Book[]{
    return this.books;
  }
  sendContactData(form : FormGroup){
    var serviceData={
        'name':form.controls['name'].value,
        'email':form.controls['email'].value,
        'message':form.controls['message'].value
    };
    return this.serviceWrapper(
      environment.API_URL+'contact',
      serviceData,
      (successData) => {
            return {
                'data': successData
            };
       //}
    },true);
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
      
    return this.serviceWrapper(
      environment.API_URL+"/goodreads_id/"+username,
      serviceData,
      (successData) => {
        if(successData.status){
          return {
            'error': successData.error_message}
        }  
        else {
          return {
            'data': successData.response.bookslist
          };
        }
    });
  }
  fetchDataUsingBook(title){
    let serviceData = {
      "title": title
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
fetchAll(){
   
      // environment.API_URL
  return this.serviceWrapper(
    environment.API_URL+'title',
    "",
    (successData) => {      
          return {

              'data': successData.titles
          };
     
  });
}
fetchPopular(){
   
  // environment.API_URL
    return this.serviceWrapper(
    environment.API_URL+'popular',
    "",
    (successData) => {      
          return {

              'data': successData
          };
    
    });
    }
}
