import styled, { css } from 'styled-components';
import { ThemeType } from '@/theme';
import { Link } from 'react-router-dom';

export type CommonProps = {
    $fs?: keyof ThemeType['fs'];
    $fc?: keyof ThemeType['fc'];
    $fw?: keyof ThemeType['fw'];
    $bg?: keyof ThemeType['bg'];
    $bc?: Omit<keyof ThemeType['bg'], 'out'>;
};

type ComponentType = keyof JSX.IntrinsicElements;
type ComponentLinkType = typeof Link;

const commonAttributesStyle = css<CommonProps>`
    font-size: ${({ theme, $fs }) => {
        switch ($fs) {
            case 'sm':
                return theme.fs.sm;
            case 'md':
                return theme.fs.md;
            case 'lg':
                return theme.fs.lg;
            default:
                return theme.fs.md;
        }
    }};

    color: ${({ theme, $fc }) => {
        switch ($fc) {
            case 'dark':
                return theme.fc.dark;
            case 'outDark':
                return theme.fc.outDark;
            case 'light':
                return theme.fc.light;
            case 'outLight':
                return theme.fc.outLight;
            case 'primary':
                return theme.fc.primary;
            case 'secondary':
                return theme.fc.secondary;
            case 'success':
                return theme.fc.success;
            case 'danger':
                return theme.fc.danger;
            default:
                return theme.fc.dark;
        }
    }};

    font-weight: ${({ theme, $fw }) => {
        switch ($fw) {
            case 'thin':
                return theme.fw.thin;
            case 'normal':
                return theme.fw.normal;
            case 'bold':
                return theme.fw.bold;
            default:
                return theme.fw.normal;
        }
    }};

    background-color: ${({ theme, $bg }) => {
        switch ($bg) {
            case 'dark':
                return theme.bg.dark;
            case 'light':
                return theme.bg.light;
            case 'primary':
                return theme.bg.primary;
            case 'secondary':
                return theme.bg.secondary;
            case 'success':
                return theme.bg.success;
            case 'danger':
                return theme.bg.danger;
            case 'point':
                return theme.bg.point;
            case 'out':
                return theme.bg.out;
            default:
                return 'transparent';
        }
    }};

    border: 1px solid
        ${({ theme, $bc }) => {
            switch ($bc) {
                case 'dark':
                    return theme.bg.dark;
                case 'light':
                    return theme.bg.light;
                case 'primary':
                    return theme.bg.primary;
                case 'secondary':
                    return theme.bg.secondary;
                case 'success':
                    return theme.bg.success;
                case 'danger':
                    return theme.bg.danger;
                case 'point':
                    return theme.bg.point;
                default:
                    return 'transparent';
            }
        }};
`;

export const commonAttributes = (Component: ComponentType) => styled(Component)<CommonProps>`
    ${commonAttributesStyle}
`;

export const commonAttributesLink = (Component: ComponentLinkType) => styled(Component)<CommonProps>`
    ${commonAttributesStyle}
`;
