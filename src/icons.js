import {ReactComponent as ArrowDown} from './arrow-down.svg';
import {makeIcon} from './icon';

export const ArrowDownIcon = makeIcon(ArrowDown);
export const ArrowUpIcon = makeIcon(ArrowDown, {transform: 'rotate(180)'});
