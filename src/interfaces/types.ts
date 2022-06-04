export interface IPlayer {
    fullname: string,
    image: string,
    nickname: string,
    country: {
        name: string,
        flag: string
    }
}

export interface ITeam {
    id: number,
    ranking: number,
    name: string,
    logo: string,
    players: IPlayer[]       
}

export interface IState {
    response: ITeam[]
}
