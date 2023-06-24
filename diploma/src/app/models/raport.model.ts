import {IssueCategoryEnum} from "./enum/issue-category.enum";
import {StatusEnum} from "./enum/status.enum";

export class Raport {
  id?: number;
  user_id?: number;
  issueCategory?: IssueCategoryEnum;
  status?: StatusEnum;
  date?: Date;
  description?: string;
  image?: File;
  location?: { lat: number, lng: number }
}
