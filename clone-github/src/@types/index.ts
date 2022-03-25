export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  blog?: string;
  compony?: string;
  email?: string;
  location?: string;
}
export interface APIRepos {
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}
