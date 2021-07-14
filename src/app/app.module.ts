import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ArticlesComponent } from './component/articles/articles.component';
import { ArticleComponent } from './component/article/article.component';
import { BodyHomeComponent } from './component/body-home/body-home.component';
import { CartComponent } from './component/cart/cart.component';
import { FicheArticleComponent } from './component/fiche-article/fiche-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleComponent,
    BodyHomeComponent,
    CartComponent,
    FicheArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
