import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbProgressbar} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient,HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { TodoComponent } from './family/todo/todo.component';
import { TemplateFormsComponent } from './forms/template/template-forms/template-forms.component';
import { ModelFormComponent } from './forms/template/model-form/model-form.component';
import { AutoSearchComponent } from './search/auto-search/auto-search.component';
import { SortPipeComponent } from './MyPipes/sort-pipe/sort-pipe.component';
import { PipeComponent } from './pipe/pipe.component';
import { SearchFiltersPipe } from './MyPipes/search-filters.pipe';
import { ConsumeLocalServiceComponent } from './consume/consume-local-service/consume-local-service.component';
import { localserviceService } from './myservices/localservice.service';
import { ConsumeLocalService2Component } from './consume/consume-local-service2/consume-local-service2.component';
import { ConsumeRemoteServiceComponent } from './consume/consume-remote-service/consume-remote-service.component';
import { RemoteserviceService } from './myservices/remoteservice.service';
import { BasicAnimationComponent } from './animation/basic-animation/basic-animation.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { FruitsComponent } from './fruits/fruits/fruits.component';
import { MangoComponent } from './fruits/mango/mango.component';
import { AppleComponent } from './fruits/apple/apple.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { NuclearComponent } from './family/nuclear/nuclear.component';
import { InbuiltdirectiveComponent } from './directive/inbuiltdirective/inbuiltdirective.component';
import { SetbgDirective } from './customDirective/setbg.directive';
import { UseDirectiveComponent } from './customDirective/use-directive/use-directive.component';
import { myRoutes } from './myroutes/myroutes.module';
import { CrudDemoComponent } from './crud/crud-demo/crud-demo.component';
import { ProductComponent } from './crud/product/product.component';
import { UpdateProductComponent } from './crud/update-product/update-product.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//import { Mypipes\searchFilterPipe } from './mypipes/search-filter.pipe';
const myParentRoutes:Routes=[{
  path:'fruits',
  component: FruitsComponent,
  children:[
    {
        path:'mango',
        component: MangoComponent,
    },
    {
      path:'apple',
      component: AppleComponent,
  },
  ]
}]

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    MotherComponent,
    SonComponent,
    DaughterComponent,
    TodoComponent,
    //SortPipePipe,
    TemplateFormsComponent,
    ModelFormComponent,
    AutoSearchComponent,
    SortPipeComponent,
    PipeComponent,
    SearchFiltersPipe,
    ConsumeLocalServiceComponent,
    ConsumeLocalService2Component,
    ConsumeRemoteServiceComponent,
    BasicAnimationComponent,
    ParentComponent,
    ChildComponent,
    FruitsComponent,
    MangoComponent,
    AppleComponent,
    NotfoundComponent,
    NuclearComponent,
    InbuiltdirectiveComponent,
    SetbgDirective,
    UseDirectiveComponent,
    CrudDemoComponent,
    ProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    RouterModule.forRoot(myParentRoutes),
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [localserviceService,RemoteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
