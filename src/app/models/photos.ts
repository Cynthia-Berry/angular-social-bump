export interface Photos {
  page: number,
  pages: number,
  perpage: number,
  total: number,
  photo: PhotoContent,
}

export interface PhotoContent {
  id: string,
  farm: string,
  owner: string,
  secret: string,
  server: string,
  title: string,
  isfamily: number,
  isfriend: number,
  ispublic: number
}

export interface PhotoResult {
  id: string,
  title: string,
  imgUrl: string,
  secret: string,
}


