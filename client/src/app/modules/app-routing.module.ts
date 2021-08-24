import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "../components/index/index.component";
import { GalleryComponent } from "../components/gallery/gallery.component";
import { ShopComponent } from "../components/shop/shop.component";
import { AboutComponent } from "../components/about/about.component";
// import { BasketComponent } from '../components/basket/basket.component';
import { UserInformationComponent } from "../components/basket/user-information/user-information.component";
import { PaymentComponent } from "../components/basket/payment/payment.component";
import { ConfirmationComponent } from "../components/basket/confirmation/confirmation.component";
import { ViewBasketComponent } from "../components/basket/view-basket/view-basket.component";
import { Error404Component } from "../components/error404/error404.component";

const routes: Routes = [
    { path: "", component: IndexComponent },
    { path: "gallery", component: GalleryComponent },
    { path: "shop", component: ShopComponent },
    { path: "about", component: AboutComponent },
    { path: "basket/view-basket", component: ViewBasketComponent },
    { path: "basket/user-information", component: UserInformationComponent },
    { path: "basket/payment", component: PaymentComponent },
    { path: "basket/confirmation", component: ConfirmationComponent },
    { path: "**", component: Error404Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
