import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdpJhipsterAngularSharedModule } from 'app/shared/shared.module';

import { ConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [CdpJhipsterAngularSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [ConfigurationComponent],
})
export class ConfigurationModule {}
