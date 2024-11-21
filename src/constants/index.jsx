import { ArrowUpRight } from 'lucide-react'
import print from '../assets/images/print.jpg'
import zorro from '../assets/images/zorro.jpg'
import garden from '../assets/images/garden.jpg'
import drone from '../assets/images/drone.jpg'

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
            title: 'Drone',
            path: '/drone',
            icon: <ArrowUpRight/>
        },
    ]
}

export default K