import styled from 'styled-components';
import theme from '@/theme';

type ThemeType = typeof theme;
type CommonProps = {
    fs?: keyof ThemeType['fs'];
    fc?: keyof ThemeType['fc'];
    fw?: keyof ThemeType['fw'];
};

type ComponentType = keyof JSX.IntrinsicElements | React.ComponentType<CommonProps>;

export const commonAttributes = (Component: ComponentType) => styled(Component)<CommonProps>`
    font-size: ${({ theme, fs }) => {
        switch (fs) {
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

    color: ${({ theme, fc }) => {
        switch (fc) {
            case 'black':
                return theme.fc.black;
            case 'white':
                return theme.fc.white;
            default:
                return theme.fc.black;
        }
    }};

    font-weight: ${({ theme, fw }) => {
        switch (fw) {
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
`;
