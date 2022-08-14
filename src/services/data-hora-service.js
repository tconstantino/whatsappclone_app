export default class DataHoraService {
    static formatarDataHora(dataHora) {
        dataHora = new Date(dataHora);
        const hoje = new Date();
        
        const ontem = new Date(hoje);
        ontem.setDate(ontem.getDate() - 1);

        const anteontem = new Date(hoje);
        anteontem.setDate(anteontem.getDate() - 2);


        const hora = `0${dataHora.getHours()}`.slice(-2);
        const minutos = `0${dataHora.getMinutes()}`.slice(-2);
        const horario = `${hora}:${minutos}`;
        let dia = `${dataHora.getDate()}/${dataHora.getMonth()}/${dataHora.getFullYear()}`;

        if(hoje.toDateString() == dataHora.toDateString()) {
            dia = 'Hoje'
        }
        else if(ontem.toDateString() == dataHora.toDateString()) {
            dia = 'Ontem'
        }
        else if(anteontem.toDateString() == dataHora.toDateString()) {
            dia = 'Anteontem'
        }
        
        return { dia, horario };
    }
}