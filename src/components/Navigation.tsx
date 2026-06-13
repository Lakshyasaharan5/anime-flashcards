import ForwardIcon from '@mui/icons-material/Forward';

type NavigationProps = {
    goForward: () => void,
    goBackward: () => void,
    isFirst: boolean,
    isLast: boolean
}

export default function Navigation(props: NavigationProps) {
    return (
        <div className="mt-10 flex gap-2">
            <button disabled={props.isFirst} className='hover:cursor-pointer disabled:text-gray-400' onClick={props.goBackward}>
                <ForwardIcon className="rotate-180" sx={{ fontSize: 60 }} />
            </button>
            <button disabled={props.isLast} className='hover:cursor-pointer disabled:text-gray-400' onClick={props.goForward}>
                <ForwardIcon sx={{ fontSize: 60 }} />
            </button>
        </div>
    );
}