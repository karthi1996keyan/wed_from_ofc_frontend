import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpErrorResponse,HttpClient} from '@angular/common/http';
import {HttpParams,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IssueService {

  public baseUrl='/api/v1.0.0/issue';

  constructor(public http:HttpClient) { }

  //api's

  /**
   * createIssue
   */
  public createIssue(data,authToken): Observable<any>{

    const params = new HttpParams()
      .set('reporter',data.reporter)
      .set('title',data.title)
      .set('description',data.description)
      .set('reporterId',data.reporterId)
      .set('status',data.status)
      .set('assignedToId',data.assignedToId)
      .set('assignedTo',data.assignedTo)
      .set('images', data.images)

    return this.http.post(`${this.baseUrl}/create?authToken=${authToken}`,params)
  } //end create Issue

  /**
   * editIssue
   */
  public editIssue(data,authToken): Observable<any>{

    const params = new HttpParams()
      .set('reporter',data.reporter)
      .set('title',data.title)
      .set('description',data.description)
      .set('reporterId',data.reporterId)
      .set('status',data.status)
      .set('assignedToId',data.assignedToId)
      .set('assignedTo',data.assignedTo)
      .set('images', data.images)

    return this.http.post(`${this.baseUrl}/edit/${data.issueId}/?authToken=${authToken}`,params)
  } //end edit Issue


  /**
   * get all issue
   */

   public getAllIssues(authToken):Observable<any>
   {
     return this.http.get(`${this.baseUrl}/view/all?authToken=${authToken}`);
   }

   /**
    * get single issue details
    */

    public getSingleIssue(issueId,authToken):Observable<any>
    {
      
     return this.http.get(`${this.baseUrl}/view/${issueId}?authToken=${authToken}`);
    }

    /**
     * 
     * delete issues
     */
    public deleteIssue(issueId,authToken):Observable<any>
    {
      const params=new HttpParams()
      .set('authToken',authToken)
      
     return this.http.post(`${this.baseUrl}/delete/${issueId}`,params);
    }

    /**
     * create watchlist
     */

    public createWatch = (data,authToken)=>{
      const params = new HttpParams()
        .set('issueId', data.issueId)
        .set('watcherId',data.watchlist)
  
        return this.http.post(`${this.baseUrl}/watch?authToken=${authToken}`, params)
    }

    /**
     * get watchlist 
     */

    public getWatch(authToken):Observable<any>
    {
     return this.http.get(`${this.baseUrl}/view/watch?authToken=${authToken}`);
    }

    /**
     * add comment
     */

    public addComment = (commentData,authToken)=>{
      const params = new HttpParams()
        .set('issueId',commentData.issueId)
        .set('description',commentData.description)
        .set('reporter',commentData.reporter)
        .set('reporterId',commentData.reporterId)
  
      return this.http.post(`${this.baseUrl}/add/comment?authToken=${authToken}`,params);
    }

    /**
     * get comment
     */

     
    public getComment(issueId,authToken):Observable<any>
    {
     return this.http.get(`${this.baseUrl}/view/comment/${issueId}?authToken=${authToken}`);
    }

    /**
     * get notification
     */

    public getNotifications(issueId,authToken):Observable<any>
    {
     return this.http.get(`${this.baseUrl}/notifications/${issueId}?authToken=${authToken}`);
    }

    /**
     * notify count
     */

    public countNotify(userId,authToken):Observable<any>
    {
      const params = new HttpParams()
      .set('userId', userId)
     return this.http.get(`${this.baseUrl}/notify/count?authToken=${authToken}`);
    }

}
