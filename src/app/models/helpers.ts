export interface Dates {
  lastupdate: string
  posted: string
  taken: Date
  takengranularity: number
  takenunknown: string
}

export interface Content {
  _content: string
}

export interface Location {
  accuracy: string,
  context: string,
  country: Content,
  county: Content,
  latitude: string,
  longitude: string,
  locality: Content,
  neighbourhood: Content,
  region: Content
}

export interface Urls {
  url: UrlContent[]
}

export interface Editability {
  cancomment: number,
  canaddmeta: number
}

export interface Notes {
  note: NoteContent[]
}

export interface Owner {
  gift: Gift,
  iconfarm: number,
  iconserver: string,
  location: string,
  nsid: string,
  path_alias: string,
  realname: string,
  username: string
}

export interface People {
  haspeople: number,
}

export interface Publiceditability {
  cancomment: number,
  canaddmeta: number
}

export interface Tags {
  tag: TagContent[],
}


export interface Usage {
  canblog: number,
  candownload: number,
  canprint: number,
  canshare: number
}

export interface Visibility {
  isfamily: number,
  isfriend: number,
  ispublic: number
}

interface NoteContent {
  id: string
}

interface Gift {
  eligible_durations: string[],
  gift_eligible: boolean,
  new_flow: boolean,
}

interface TagContent {
  author: string,
  authorname: string,
  id: string,
  machine_tag: boolean,
  raw: string,
  _content: string
}


interface UrlContent {
  type: string
  _content: string
}
