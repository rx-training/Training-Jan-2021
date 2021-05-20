import { InjectionToken } from "@angular/core";
import { AppConfig } from "./app-config";

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const HERO_DI_CONFIG: AppConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'DIPracticeApp'
};
