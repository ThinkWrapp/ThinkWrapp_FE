const theme = {
    fs: {
        sm: '1.2rem',
        md: '1.6rem',
        lg: '2rem',
    } as const,
    fc: {
        dark: '#212529',
        outDark: '#343a40',
        light: '#fff',
        outLight: '#f8f9fa',
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
    } as const,
    fw: {
        thin: 200,
        normal: 400,
        bold: 600,
    } as const,
    bg: {
        dark: '#343a40',
        light: '#f8f9fa',
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        out: 'transparent',
    } as const,
} as const;

export default theme;

export type ThemeType = typeof theme;
