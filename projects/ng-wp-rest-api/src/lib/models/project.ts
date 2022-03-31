import {BasePost} from './base-post';

export interface Project extends BasePost {
  project_category?: any[];
  project_tag?: any[];
}
