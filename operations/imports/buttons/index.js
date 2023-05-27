import ActionButtonFields from './action';
import ExternalButtonFields from './external';
import InternalButtonFields from './internal';

const Buttons = `
buttons {
    ${ActionButtonFields}
    ${ExternalButtonFields}
    ${InternalButtonFields}
}
`;

export default Buttons;
