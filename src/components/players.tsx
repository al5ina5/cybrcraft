'use client'

import React, { useEffect, useState } from 'react';

import axios from 'axios';

interface Player {
    name_clean: string;
    uuid: string;
    name: string;
}

const PlayerList: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get('https://api.mcstatus.io/v2/status/java/play.cybrcraft.xyz');
                const playerList = response.data?.players?.list || [];
                setPlayers(playerList);
            } catch (err) {
                console.log(err)
                setError('Failed to fetch player data');
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='flex gap-2'>
            {players.map(player => (
                <div key={player.name_clean} className='flex items-center gap-2 emboss bg-gray-300 p-1 px-2'>
                    <img className='w-6' src={`https://api.mineatar.io/head/${player.uuid}`} alt={`${player.name}'s skin`} />
                    <p>{player.name_clean}</p>
                </div>
            ))}

            {players.length === 0 && <>
                <p className='opacity-50'>There are no players online.</p>
            </>}
        </div>
    );
};

export default PlayerList;
