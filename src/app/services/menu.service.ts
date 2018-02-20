import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Menu } from '../classes/menu';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MenuService {

  private menusUrl = 'api/menus';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET menus from the server */
  getMenus (): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menusUrl)
      .pipe(
        tap(menus => this.log(`fetched menus`)),
        catchError(this.handleError('getMenus', []))
      );
  }

  /** GET menu by id. Return `undefined` when id not found */
  getMenuNo404<Data>(id: number): Observable<Menu> {
    const url = `${this.menusUrl}/?id=${id}`;
    return this.http.get<Menu[]>(url)
      .pipe(
        map(menus => menus[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} menu id=${id}`);
        }),
        catchError(this.handleError<Menu>(`getMenu id=${id}`))
      );
  }

  /** GET menu by id. Will 404 if id not found */
  getMenu(id: number): Observable<Menu> {
    const url = `${this.menusUrl}/${id}`;
    return this.http.get<Menu>(url).pipe(
      tap(_ => this.log(`fetched menu id=${id}`)),
      catchError(this.handleError<Menu>(`getMenu id=${id}`))
    );
  }

  /* GET menus whose name contains search term */
  searchMenus(term: string): Observable<Menu[]> {
    if (!term.trim()) {
      // if not search term, return empty menu array.
      return of([]);
    }
    return this.http.get<Menu[]>(`api/menus/?name=${term}`).pipe(
      tap(_ => this.log(`found menus matching "${term}"`)),
      catchError(this.handleError<Menu[]>('searchMenus', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new menu to the server */
  addMenu (menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.menusUrl, menu, httpOptions).pipe(
      tap((menu: Menu) => this.log(`added menu w/ id=${menu.id}`)),
      catchError(this.handleError<Menu>('addMenu'))
    );
  }

  /** DELETE: delete the menu from the server */
  deleteMenu (menu: Menu | number): Observable<Menu> {
    const id = typeof menu === 'number' ? menu : menu.id;
    const url = `${this.menusUrl}/${id}`;

    return this.http.delete<Menu>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted menu id=${id}`)),
      catchError(this.handleError<Menu>('deleteMenu'))
    );
  }

  /** PUT: update the menu on the server */
  updateMenu (menu: Menu): Observable<any> {
    return this.http.put(this.menusUrl, menu, httpOptions).pipe(
      tap(_ => this.log(`updated menu id=${menu.id}`)),
      catchError(this.handleError<any>('updateMenu'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

  /** Log a MenuService message with the MessageService */
  private log(message: string) {
    this.messageService.add('MenuService: ' + message);
  }
}