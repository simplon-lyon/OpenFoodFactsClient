import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { LikeService } from "../services/like.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

/**
 * Une classe Guard permettra de protéger l'accès à une route en la fournissant au routeur dans la définition de
 * celle ci.
 * La classe doit implémenter l'interface CanActivate qui possède une méthode canActivate qui devra return soit un
 * boolean, soit un Observable ou une Promise de boolean dans le cas où les informations requises pour autoriser ou
 * non l'accès proviennent d'une source asynchrone.
 * Si le canActivate renvoie true, la route est accessible, sinon, elle ne l'est pas
 */
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