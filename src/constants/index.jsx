import { ArrowUpRight } from 'lucide-react'
import print from '../assets/images/print.jpg'
import zorro from '../assets/images/zorro.jpg'
import garden from '../assets/images/garden.jpg'
import drone from '../assets/images/drone.jpg'
import plasticr1 from '../assets/images/plasticr1.jpg'
import shreder from '../assets/images/shreder.png'
import Cariso from '../assets/images/Cariso.png'

const K = {
    PROJECTS: [
        {
            image: print,
            title: ' 3D Belt Printer',
            path: 'https://fabacademy.org/2023/labs/energylab/machines/belty-v2/',
            icon: <ArrowUpRight/>
        },
        {
            image: zorro,
            title: 'Zorro the wire cutter',
            path: 'https://fabacademy.org/2023/labs/energylab/machines/zorro/',
            icon: <ArrowUpRight/>
        },
        {
            image: garden,
            title: 'Smart balcony garden (SBG)',
            path: 'https://fabacademy.org/2022/labs/energylab/students/edward-faako/projects/final-project/',
            icon: <ArrowUpRight/>
        },
        {
            image: drone,
            title: 'Payload Transport Drone for Construction Sites and Farms',
            path: '/drone',
            icon: <ArrowUpRight/>
        },
        {
            image: plasticr1,
            title: 'Plastic shredding and pelletizer production line',
            path: '/recycling',
            icon: <ArrowUpRight/>
        },

        {
            image: shreder,
            title: 'SHREDDER',
            path: '/shredder',
            icon: <ArrowUpRight/>
        },
        {
            image: Cariso,
            title: 'Electric Multi-Purpose Vehicle',
            path: '/ecar',
            icon: <ArrowUpRight/>
        },
    ]
}

export default K