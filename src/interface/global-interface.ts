

export type menu = 'home'|'about'|'portfolio'|'blog';


export interface IMyPortfolioWork{
    imageUrl : string,
    workTitle: string,
    workShortDesc: string,
    languageStack: string[],
    githubLink?: string,
    liveLink?: string
}

export interface Blog{
    id: string,
    link: string,
    title: string,
    author: string,
    createdAt: Date,
    description: string
}
