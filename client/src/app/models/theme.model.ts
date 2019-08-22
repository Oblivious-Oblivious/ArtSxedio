export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: "light",
    properties: {
        "--dark-bg": "''",
        "--body-bg-color": "#f0f0f0",
        "--text-color": "#4e4e4e",
        "--anchor-color": "#ffffff",
        "--border-color": "#181818",
        "--shadow-color": "rgba(24, 24, 24, 0.5)"
    }
};

export const dark: Theme = {
    name: "dark",
    properties: {
        "--dark-bg": "linear-gradient(to right bottom, #181818, #191919, #1b191a, #1d1a1a, #1e1b1a, #322720, #433624, #4f4729, #776a33, #a28e3d, #cfb446, #ffdc4f)",
        "--body-bg-color": "#363636",
        "--text-color": "#ffffff",
        "--anchor-color": "#181818",
        "--border-color": "#ffffff",
        "--shadow-color": "#ffffffbb"
    }
};
