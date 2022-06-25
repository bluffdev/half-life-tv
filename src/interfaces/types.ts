export interface IState<T> {
    response: T
}

export interface ITeamPlayer {
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
    players: ITeamPlayer[]       
}

export interface IMatch {
    id: number,
    date: string,
    time: string,
    event: {
        name: string,
        logo: string,
    },
    stars: number,
    maps: string,
    teams: {
        name: string,
        logo: string
    }[]
}

export interface IPlayer {
    id: number,
    nickname: string,
    playerFlag: string,
    team: {
        id: number,
        name: string,
        logo: string
    },
    slug: string,
    mapsPlayed: string,
    kd: string,
    rating: string
}

export interface IResult {
    event: {
        name: string,
        logo: string
    },
    maps: string,
    date: string,
    teams: {
        name: string,
        logo: string,
        score: number
    }[],
    matchId: number
}