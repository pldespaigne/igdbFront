import { environment } from "src/environments/environment";

export interface Game {
    id: number;
    url: string;
    name: string;
    summary: string;
    cover: string;
    platforms: string[];
}

export function log(message: string, indent = 0, type = 'log') {
    if(environment.verbose){
        let msg = '🤖 : ';
        for(let i = 0 ; i < indent ; i++) msg += '\t';
        msg += message;
        switch(type) {
            case 'log':
                console.log(msg);
                break;
            case 'warn':
                console.warn(msg);
                break;
            case 'err':
                console.error(msg);
                break;
        }
    }
}

export function resolvePlatforms(platforms: number[]): string[]{
    let res: string[]
    res = [];
    for(let id of platforms) {
        switch(id) {
            case 4:
            res.push('Nintendo 64');
            break;
            case 5:
            res.push('Wii');
            break;
            case 6:
            res.push('PC');
            break;
            case 7:
            res.push('Play Station');
            break;
            case 8:
            res.push('PS 2');
            break;
            case 9:
            res.push('PS 3');
            break;
            case 11:
            res.push('XBox');
            break;
            case 12:
            res.push('XBox 360');
            break;
            case 18:
            res.push('NES');
            break;
            case 19:
            res.push('Super NES');
            break;
            case 20:
            res.push('Nintendo DS');
            break;
            case 21:
            res.push('Game Cube');
            break;
            case 22:
            res.push('Game Boy Color');
            break;
            case 24:
            res.push('Game Boy Advance');
            break;
            case 33:
            res.push('Game Boy');
            break;
            case 34:
            res.push('Android');
            break;
            case 37:
            res.push('Nintendo 3DS');
            break;
            case 38:
            res.push('PSP');
            break;
            case 39:
            res.push('iOS');
            break;
            case 41:
            res.push('Wii U');
            break;
            case 46:
            res.push('PS Vita');
            break;
            case 48:
            res.push('PS 4');
            break;
            case 49:
            res.push('XBox One');
            break;
            case 130:
            res.push('Nintendo Switch');
            break;
        }
    }
    return res;
}
