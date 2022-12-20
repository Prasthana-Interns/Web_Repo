import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';


import { NgConfirmModule,NgConfirmService } from 'ng-confirm-box';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SignUpComponent,
    CardComponent,
    ProfileComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgConfirmModule,
  ],
  exports:[CardComponent,ProfileComponent,FooterComponent],
  providers:[NgConfirmService],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class CoreModule { }
