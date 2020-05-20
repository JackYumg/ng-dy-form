import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { iconProviders } from './core/icon.provider';
// 引入外部模块
const modules = [
  PagesModule,
  AppRoutingModule,
  BrowserAnimationsModule
];

// 引入翻译
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ...modules],
  providers: [
    iconProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
