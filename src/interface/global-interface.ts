

export type menu = 'home'|'about'|'portfolio'|'blog';


export interface IMyPortfolioWork{
    imageUrl : string,
    workTitle: string,
    workShortDesc: string,
    languageStack: string[],
    githubLink?: string,
    liveLink?: string
}