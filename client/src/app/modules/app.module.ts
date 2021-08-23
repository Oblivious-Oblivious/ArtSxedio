import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from "@angular/service-worker";

import { CookieService } from "ngx-cookie-service";
// import { PaginationService } from "../services/pagination.service";

import { environment } from "../../environments/environment";
import { AppComponent } from "../components/main/app.component";
import { BasketComponent } from "../components/basket/basket.component";
import { UserInformationComponent } from "../components/basket/user-information/user-information.component";
import { PaymentComponent } from "../components/basket/payment/payment.component";
import { ConfirmationComponent } from "../components/basket/confirmation/confirmation.component";
import { ViewBasketComponent } from "../components/basket/view-basket/view-basket.component";
import { Error404Component } from "../components/error404/error404.component";
import { LazyLoadComponent } from "../components/lazy-load/lazy-load.component";

import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";
import { IndexComponent } from "../components/index/index.component";
import { GalleryComponent } from "../components/gallery/gallery.component";
import { AboutComponent } from "../components/about/about.component";
import { ShopComponent } from "../components/shop/shop.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        IndexComponent,
        GalleryComponent,
        AboutComponent,
        ShopComponent,
        BasketComponent,
        UserInformationComponent,
        PaymentComponent,
        ConfirmationComponent,
        ViewBasketComponent,
        Error404Component,
        LazyLoadComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: environment.production,
        }),
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
    ],
    providers: [CookieService],
    bootstrap: [AppComponent],
})
export class AppModule {}
