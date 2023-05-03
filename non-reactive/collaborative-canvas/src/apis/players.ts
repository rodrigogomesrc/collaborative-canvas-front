import { PLAYERS_BACKEND } from './config';

const PLAYERS_URL = `${PLAYERS_BACKEND}/player`;

export interface Player {
    id: number,
    name: string,
    paintedPixels: number
}

export interface RegisterPlayer {
    name: string
    password: string
}

export const savePlayer = async (player: RegisterPlayer) => {
    const response = await fetch(`${PLAYERS_BACKEND}/players`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(player)
    });
    return await response.json();
}