export interface Sitecontents {
  success: boolean;
  statusCode: number;
  message: string;
  data: Data;
}

export interface Data {
  pageContents: PageContents;
}

export interface PageContents {
  happy_clients: string;
  fb_link: any;
  insta_link: any;
  twitter_link: any;
  linkedin_link: any;
  call_now: any;
}
