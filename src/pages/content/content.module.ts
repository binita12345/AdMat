import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentPage } from './content';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    ContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentPage),
    HeaderComponentModule
  ],
})
export class ContentPageModule {}
