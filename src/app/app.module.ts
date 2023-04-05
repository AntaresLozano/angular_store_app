import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ImgComponent } from './components';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductListComponent,
    NavComponent,
    TimeAgoPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
