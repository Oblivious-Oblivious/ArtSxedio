export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: "light",
    properties: {
        "--bg-color": "''",
        "--text-color": "#181818",
        "--anchor-color": "#ffffff",
        "--border-color": "#181818"
    }
};

export const dark: Theme = {
    name: "dark",
    properties: {
        "--bg-color": "linear-gradient(to right bottom, #181818, #191919, #1b191a, #1d1a1a, #1e1b1a, #322720, #433624, #4f4729, #776a33, #a28e3d, #cfb446, #ffdc4f)",
        "--text-color": "#ffffff",
        "--anchor-color": "#181818",
        "--border-color": "#ffffff"
    }
};