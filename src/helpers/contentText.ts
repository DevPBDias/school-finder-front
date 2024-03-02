const whoText = 'Somos um grupo de pessoas preocupadas com o ensino dos  jovens no Brasil.\nApartir dessa vontade, nós criamos um espaço para disponibilizar aos pais e/ou responsáveis um melhor meio para encontrar a escola que desejam.\nSeja bem vindo ao nosso site!'

const howText = 'A busca pode ser por nome, cidade, bairro e tipo de ensino.\nBasta clicar na nossa barra de pesquisa no cabeçalho ou no botão encontrar escola na imagem acima.\nSerá direcionado para uma página com os resultados e filtros para refinar ainda  mais sua busca.'

const advText = '✔️ Cadastar uma nova escola\n✔️ Rapidez em encontrar o que deseja\n✔️ Diversos filtros de busca\n✔️ Pode compartilhar a escola que gostou'

export const arrayCardTexts = [
    {
        title:'Quem somos?',
        text: whoText.split('\n'),
        btnText: 'Saiba mais',
        routeBtn: 'who',
    },
    {
        title:'Como funciona?',
        text: howText.split('\n'),
        btnText: 'Saiba mais',
        routeBtn: 'how',
    },
    {
        title:'Vantagens?',
        text: advText.split('\n'),
        btnText: 'Saiba mais',
        routeBtn: 'advantages',
    },
]
