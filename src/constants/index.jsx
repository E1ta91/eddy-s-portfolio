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
            path: '/printer',
            icon: <ArrowUpRight/>
        },
        {
            image: zorro,
            title: 'Zorro the wire cutter',
            path: '/cutter',
            icon: <ArrowUpRight/>
        },
        {
            image: garden,
            title: 'Smart balcony garden (SBG)',
            path: '/garden',
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