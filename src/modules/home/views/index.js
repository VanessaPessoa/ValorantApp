import { useState, useEffect } from 'react'
import Menu from '../../../componets/menu';
import api from '../../../service/api'

import Card from '../components/cards'

function ModoJogo() {
    const [modoJogo, setModoJogo] = useState([]);
    const [carregando, setCarregando] = useState(true);

    function listModoJogo() {
        var config = {
            method: 'get',
            url: `gamemodes`
        };

        api(config)
            .then(function (response) {

                const respondeData = response.data.data
                const notNull = respondeData.filter(respondeData => (respondeData.displayIcon != null))
                setModoJogo(notNull);
                setCarregando(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        if (carregando) {
            listModoJogo();
        }
    }, [modoJogo, carregando]);

    return (
        <div>
            <Menu />
            <div className='container'>
                {
                    modoJogo && modoJogo.map((data, i) => {
                        return (
                            <Card key={i}
                                url={data.displayIcon}
                                displayName={data.displayName}
                                duration={data.duration}
                            />
                        )
                    })
                }
            </div>
        </div>
    );

}

export default ModoJogo;
