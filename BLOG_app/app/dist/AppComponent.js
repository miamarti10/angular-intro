"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NBA';
        this.nba = [
            {
                year: '2018',
                champion: 'Golden State Warriors',
                link: 'https://en.wikipedia.org/wiki/2017%E2%80%9318_Golden_State_Warriors_season',
                players: ["Kevin Duran", 'Klay Thompson', 'Stephen Curry', 'Jordan Poole']
            }, {
                year: '2019',
                champion: 'Toronto Raptors',
                link: 'https://en.wikipedia.org/wiki/2018%E2%80%9319_Toronto_Raptors_season',
                player: 'Kawhi Leonard'
            }, {
                year: '2020',
                champion: 'Lakers',
                link: 'https://en.wikipedia.org/wiki/2018%E2%80%9319_Toronto_Raptors_season',
                player: 'Lebron James'
            },
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
