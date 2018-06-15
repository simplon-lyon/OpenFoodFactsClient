import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { LikeService } from "../services/like.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class LikeGuard implements CanActivate {
    constructor(private likeService:LikeService) {}

    // canActivate():boolean {
    //     if(this.likeService.getLikedProducts().length > 0 ) {
    //         return true;
    //     }
    //     return false;
    // }

    canActivate():Observable<boolean> {
        return this.likeService.likedProducts$.pipe(
            map(likes => likes.length > 0)
        );
    }
}