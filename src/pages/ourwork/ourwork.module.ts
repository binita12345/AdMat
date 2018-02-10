import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurworkPage } from './ourwork';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    OurworkPage,
  ],
  imports: [
    IonicPageModule.forChild(OurworkPage),
    HeaderComponentModule
  ],
})
export class OurworkPageModule {}
