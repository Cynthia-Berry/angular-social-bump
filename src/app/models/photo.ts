import {
  Content,
  Dates,
  Editability,
  Notes,
  Owner,
  People,
  Publiceditability,
  Tags,
  Urls,
  Usage,
  Visibility
} from "./helpers";

export interface Photo {
  comments: any,
  dates: Dates,
  dateuploaded: string,
  description: Content,
  editability: Editability,
  farm: number,
  id: string,
  isfavorite: number,
  license: string,
  media: string,
  notes: Notes,
  originalformat: string,
  originalsecret: string,
  owner: Owner,
  people: People,
  publiceditability: Publiceditability,
  rotation: number,
  safety_level: string,
  secret: string,
  server: string
  tags: Tags,
  title: Content
  urls: Urls,
  usage: Usage
  views: string
  visibility: Visibility
}


