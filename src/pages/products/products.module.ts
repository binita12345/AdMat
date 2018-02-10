import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsPage } from './products';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    ProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductsPage),
    HeaderComponentModule
  ],
})
export class ProductsPageModule {}
	