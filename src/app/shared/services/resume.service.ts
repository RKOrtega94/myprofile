import { Injectable } from '@angular/core';

import {
  AuthChangeEvent,
  createClient,
  Session,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }
}
