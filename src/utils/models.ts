interface baseThumbNailsModel {
  height: number;
  url: string;
  width: number;
}
interface thumbNailModel {
  default: baseThumbNailsModel;
  high: baseThumbNailsModel;
  medium: baseThumbNailsModel;
}
interface snippetModel {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: Date;
  publishedAt: Date;
  thumbnails?: thumbNailModel;
  title?: string
}
interface basicIdModel {
  kind: string;
  videoId?: string;
  channelId?: string;
}
export interface videosModel {
  id: basicIdModel;
  kind: string;
  snippet: snippetModel;
  thumbnails?: thumbNailModel;
  title?: string;
}
