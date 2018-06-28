import { Routes } from '@angular/router';

import { FatherComponent } from '../family/father/father.component';
import { MotherComponent } from '../family/mother/mother.component';
import { SonComponent } from '../family/son/son.component';
import { DaughterComponent } from '../family/daughter/daughter.component';
import { TodoComponent } from '../family/todo/todo.component';
import { TemplateFormsComponent } from '../forms/template/template-forms/template-forms.component';
import { ModelFormComponent } from '../forms/template/model-form/model-form.component';
import { AutoSearchComponent } from '../search/auto-search/auto-search.component';
import { SortPipeComponent } from '../MyPipes/sort-pipe/sort-pipe.component';
import { PipeComponent } from '../pipe/pipe.component';
import { SearchFiltersPipe } from '../MyPipes/search-filters.pipe';
import { ConsumeLocalServiceComponent } from '../consume/consume-local-service/consume-local-service.component';
import { localserviceService } from '../myservices/localservice.service';
import { ConsumeLocalService2Component } from '../consume/consume-local-service2/consume-local-service2.component';
import { ConsumeRemoteServiceComponent } from '../consume/consume-remote-service/consume-remote-service.component';
import { RemoteserviceService } from '../myservices/remoteservice.service';
import { BasicAnimationComponent } from '../animation/basic-animation/basic-animation.component';
import { ParentComponent } from '../parent-child/parent/parent.component';
import { ChildComponent } from '../parent-child/child/child.component';
import { FruitsComponent } from '../fruits/fruits/fruits.component';
import { MangoComponent } from '../fruits/mango/mango.component';
import { AppleComponent } from '../fruits/apple/apple.component';
import { NotfoundComponent } from '../notfound/notfound/notfound.component';
import { NuclearComponent } from '../family/nuclear/nuclear.component';
import { InbuiltdirectiveComponent } from '../directive/inbuiltdirective/inbuiltdirective.component';
import { SetbgDirective } from '../customDirective/setbg.directive';
import { UseDirectiveComponent } from '../customDirective/use-directive/use-directive.component';
import { CrudDemoComponent} from '../crud/crud-demo/crud-demo.component';
import { Component } from '@angular/core';
import { ProductComponent } from '../crud/product/product.component';
import { UpdateProductComponent } from '../crud/update-product/update-product.component'
export const myRoutes:Routes=[
  //   {
  //   path:'',
  //   redirectTo:'todo',
  //   pathMatch:'full'
  // },
  {
    path:'nuclear',
    component:NuclearComponent,
    children:[
      {
        path:'father',
        component:FatherComponent
      },
      {
        path:'mother',
        component:MotherComponent
      },
      {
        path:'son',
        component:SonComponent
      },
      {
        path:'daughter',
        component:DaughterComponent
      },
    ]
  },
{
  path:'todo',
  component:TodoComponent
},
{
  path:'template',
  component:TemplateFormsComponent
},
{
  path:'model',
  component:ModelFormComponent
},
{
  path:'search',
  component:AutoSearchComponent
},
{
  path:'consume',
  component:ConsumeLocalServiceComponent
},
{
  path:'consume2',
  component:ConsumeLocalService2Component
},
{
  path:'remoteservice',
  component:ConsumeRemoteServiceComponent
},
{
  path:'animation',
  component:BasicAnimationComponent
},
{
  path:'eventbinding',
  component:ParentComponent
},
{
  path:'fruits',
  component:FruitsComponent
},
{
  path:'nuclear',
  component:NuclearComponent
},
{
  path:'inbuilt',
  component:InbuiltdirectiveComponent
},
{
  path:'customerdirective',
  component: UseDirectiveComponent
},
{
  path:'crud',
  component:CrudDemoComponent
},
{
  path:'product',
  component:ProductComponent
},
{
  path:'updateProduct/:id',
  component:UpdateProductComponent
}
// {
//   path:'**',
//   component:NotfoundComponent
// },
]