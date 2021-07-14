import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './component/articles/articles.component';
import { BodyHomeComponent } from './component/body-home/body-home.component';
import { CartComponent } from './component/cart/cart.component';
import { FicheArticleComponent } from './component/fiche-article/fiche-article.component';


const routes: Routes = [{ path: 'home', component: BodyHomeComponent},
{ path: 'articles', component: ArticlesComponent},
{ path: 'cart', component: CartComponent},
{ path: 'fiche', component: FicheArticleComponent},
{ path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
