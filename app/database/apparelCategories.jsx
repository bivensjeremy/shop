import smallShirtIMG from '../../public/stock/tshirt.svg'
import smallPantsIMG from '../../public/stock/pants.svg'
import smallHatIMG from '../../public/stock/hat.png'
import smallGameIMG from '../../public/stock/game.png'
import shirtImg from '../../public/stock/ShirtImage.jpeg'
import pantsImg from '../../public/stock/PantsImage.jpeg'
import hatImg from '../../public/stock/HatImage.jpeg'
import gameImg from '../../public/stock/VideoGame.jpeg'


export const apparelCategories = [
    {
        id: 1,
        image: shirtImg,
        title: 'Shirts',
        slug: 'shirts',
        icon: smallShirtIMG
    },
    {
        id: 2,
        image: pantsImg,
        title: 'Bottoms',
        slug: 'pants',
        icon: smallPantsIMG
    },
    {
        id: 3,
        image: hatImg,
        title: 'Hats',
        slug: 'hats',
        icon: smallHatIMG
    },
    {
        id: 4,
        image: gameImg,
        title: 'Games',
        slug: 'video-games',
        icon: smallGameIMG
    },
]