export interface ITeam {
    id: number,
    ranking: number,
    logo: string,
    players: {
        fullname: string,
        image: string,
        nickname: string,
        country: {
            name: string,
            flag: string
        }
    }    
}

export interface IState {
    response: ITeam[]
}
