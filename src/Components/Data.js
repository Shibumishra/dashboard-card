import { MdOutlineContentCopy } from 'react-icons/md';
import { MdOutlineHomeWork } from 'react-icons/md';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';

export default [
    {
        id: '1',
        title: 'Used Space',
        number: 5043535,
        color: 'red',
        icon: <MdOutlineContentCopy />,
    },
    {
        id: '2',
        title: 'Revenue',
        number: 34254,
        color: 'blue',
        icon: <MdOutlineHomeWork />,
    },
    {
        id: '3',
        title: 'Fixed Issues',
        number: 75,
        color: 'orange',
        icon: <BiErrorCircle />,
    },
    {
        id: '4',
        title: 'Follows',
        number: 346575,
        color: 'pink',
        icon: <AiOutlineTwitter />,
    },
]