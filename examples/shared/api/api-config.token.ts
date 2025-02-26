import { InjectionToken } from '@angular/core';

export type ApiConfig = {
  apiUrl: string;
};

export const API_CONFIG = new InjectionToken<ApiConfig>('API_CONFIG');
