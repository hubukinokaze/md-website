import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class GithubService {
  private githubApi: any;

  public constructor(private http: Http){
    this.githubApi = 'https://api.github.com/users/hubukinokaze/repos';
  }

  public getYourRepos() {
    // create headers
    let headers = new Headers({'Content-Type': 'application/json'});

    // make api call
    return (this.http.get(this.githubApi, {headers: headers}));
  }

  public getLanguages(url){
    // create headers
    let headers = new Headers({'Content-Type': 'application/json'});

    // make api call
    return (this.http.get(url, {headers: headers}));
  }
}
