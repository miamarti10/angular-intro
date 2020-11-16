"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommentsComponent = void 0;
var core_1 = require("@angular/core");
var CommentsComponent = /** @class */ (function () {
    function CommentsComponent() {
        this.entradas = [{
                autor: 'Pepe',
                date: '01/01/2020',
                comment: 'Lorem ipsum dolor sit ametNon pariatur iste nulla illo tenetur laborum placeat?'
            },
            {
                autor: 'Valerie',
                date: '03/06/2020',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eius deserunt. Non pariatur iste nulla illo tenetur laborum placeat? Quas non ab ut doloremque distinctio. Minus modi at id nulla'
            }, {
                autor: 'Jazellee',
                date: '1/04/2020',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eius deserunt. Non pariatur iste nulla illo tenetur laborum placeat'
            }];
    }
    CommentsComponent.prototype.ngOnInit = function () {
    };
    CommentsComponent = __decorate([
        core_1.Component({
            selector: 'app-comments',
            templateUrl: './comments.component.html',
            styleUrls: ['./comments.component.scss']
        })
    ], CommentsComponent);
    return CommentsComponent;
}());
exports.CommentsComponent = CommentsComponent;
