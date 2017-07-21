import { Routes } from '@angular/router';

import { MyComponent } from 'app/app/my/my.component';
import { AppComponent } from 'app/app.component';
import { EditorComponent } from 'app/editor/editor/editor.component';
import { Step1Component } from 'app/editor/steps/step1/step1.component';
import { Step2Component } from 'app/editor/steps/step2/step2.component';

export const routes : Routes = [{
  path: 'home',
  component: MyComponent,
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'editor',
  component: EditorComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'step1'
    },
    {
      path: 'step1',
      component: Step1Component
    },
    {
      path: 'step2',
      component: Step2Component
    },
    {
      path: 'step3',
      component: EditorComponent
    },
    {
      path: 'step4',
      component: EditorComponent
    },
    {
      path: '**',
      redirectTo: 'step1'
    }
  ]
},
{
  path: '**',
  redirectTo: 'home'
}]
