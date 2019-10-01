import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgessBarComponent } from './progess-bar/progess-bar.component';
import { TodoComponent } from './todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFinalComponent } from './register-final/register-final.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgessBarComponent,
    TodoComponent,
    RegisterComponent,
    RegisterFinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
