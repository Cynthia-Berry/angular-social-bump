export interface PhotosResponseObj<T> {
  stat: string,
  photos: T,
  message?: string,
  code?: string,
}

export interface PhotoResponseObj<T> {
  stat: string,
  photo: T,
  message?: string,
  code?: string,
}
