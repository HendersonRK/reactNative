import { Feather } from '@expo/vector-icons';
import { colors } from '../themes/theme';

type TIcon= {
    name: string | any;
    size?: number;
    color?: string;
}

export function Icon({name, size = 40, color = colors.black} : TIcon) {
    return(
        <Feather name={name} size={size} color={color} />
    )
}