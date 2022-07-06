declare class BunClient {
  protected API_KEY: string;
  protected baseUrl: string;
  constructor(API_KEY: string);
  meme(): Promise<BunClient.APIResults>;
  girl(): Promise<BunClient.APIResults>;
  boy(): Promise<BunClient.APIResults>;
  cat(): Promise<BunClient.APIResults>;
  dog(): Promise<BunClient.APIResults>;
  hug(): Promise<BunClient.APIResults>;
  smile(): Promise<BunClient.APIResults>;
  baka(): Promise<BunClient.APIResults>;
  bite(): Promise<BunClient.APIResults>;
  clap(): Promise<BunClient.APIResults>;
  dance(): Promise<BunClient.APIResults>;
  die(): Promise<BunClient.APIResults>;
  kill(): Promise<BunClient.APIResults>;
  kiss(): Promise<BunClient.APIResults>;
  sgirl(): Promise<BunClient.APIResults>;
  wag(): Promise<BunClient.APIResults>;
  poke(): Promise<BunClient.APIResults>;
  punch(): Promise<BunClient.APIResults>;
  sad(): Promise<BunClient.APIResults>;
  run(): Promise<BunClient.APIResults>;
  shot(): Promise<BunClient.APIResults>;
  randomvid(): Promise<BunClient.APIResults>;
  animewallpaper(): Promise<BunClient.APIResults>;
}

export = BunClient;

declare namespace BunClient {
  export interface APIResults {
    author: string;
    url: string;
  }
}
