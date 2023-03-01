import 'reflect-metadata';
import {Constructor, LitElement} from 'lit-element';
import {ReflectiveInjector, Provider} from 'injection-js'
import {LogService} from '../services/log.service';
import {HttpService} from '../services/http.service';
import {MainService} from '../services/main.service';
import {ChildService} from "../services/child.service";

export function Injecting<T extends Constructor<LitElement>>(superClass: T) {
    const providers: Provider[] = [
      LogService,
      MainService,
      HttpService,
      ChildService,
      //...
    ]
    const container: ReflectiveInjector = ReflectiveInjector.resolveAndCreate(providers, null);
   return class extends superClass {
    forRoot(): ReflectiveInjector {
      return container;
    }
  };
}