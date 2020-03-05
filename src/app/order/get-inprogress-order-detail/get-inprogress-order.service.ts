import { Injectable, Renderer2, ComponentFactoryResolver, ApplicationRef, Injector, RendererFactory2, EmbeddedViewRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewOrderDetail } from '../model/new-order-detail';
import { endpoints } from 'src/app/shared/endpoints';
import { Subject } from 'rxjs';
import { GetInprogressOrderDetailComponent } from './get-inprogress-order-detail.component';

@Injectable({
  providedIn: 'root'
})
export class inprogressOrderDetailService {

  public componentSubjects: { [name: string]: Subject<any> } = {};
  renderer: Renderer2;

  constructor(private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  getData() {
    return this.http.get<NewOrderDetail[]>(endpoints.ticket.getDetail.path);
  }

  //render in injectable service https://stackoverflow.com/questions/44989666/service-no-provider-for-renderer2
  appendComponent(component: any, data:any, selected:any) {

    // 1. Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
    
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);
    
    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    
    // 4. Append DOM element to the body
    var tr = document.createElement("tr");
    tr.appendChild(domElem);
    let selectedRow = selected;//.closest(".ng2-smart-row");
    if(selectedRow){
      let nextSib = this.renderer.nextSibling(selectedRow);
      this.renderer.insertBefore(selectedRow.parentNode, tr, nextSib);
    }
    return componentRef;
  }
  removeComponent(component: any){
    this.appRef.detachView(component.hostView);
    component.destroy();
  }
}