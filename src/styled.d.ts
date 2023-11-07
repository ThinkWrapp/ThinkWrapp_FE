import 'styled-components';
import { ThemeType } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
    interface CSSProperties {
        '--i'?: number;
        '--clr'?: string;
    }
}
