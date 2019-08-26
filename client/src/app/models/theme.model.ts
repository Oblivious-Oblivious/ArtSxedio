export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: "light",
    properties: {
        "--dark-bg": "''",
        "--body-bg-color": "#f4f4f4",
        "--nav-bg-color": "#f4f4f4",
        "--text-color": "#4e4e4e",
        "--anchor-color": "#ffffff",
        "--border-color": "#181818",
        "--shadow-color": "rgba(24, 24, 24, 0.5)",
        "--nav-shadow-color": "rgba(24, 24, 24, 0.12)",
        "--toggle-color": "var(--yellow)",
        "--toggle-bg-color": "#f4f4f4"
    }
};

export const dark: Theme = {
    name: "dark",
    properties: {
        // "--dark-bg": "linear-gradient(to right, #e55d87, #5fc3e4)",
        // "--dark-bg": "linear-gradient(315deg, #ffa69e 0%, #5d4954 74%)",
        // "--dark-bg": "linear-gradient(315deg, #756213 0%, #181818 74%)",
        // "--dark-bg": "linear-gradient(315deg, #ffeaa7 0%, #181818 74%)",
        // "--dark-bg": "linear-gradient(to right bottom, #181818, #191919, #1b191a, #1d1a1a, #1e1b1a, #322720, #433624, #4f4729, #776a33, #a28e3d, #cfb446, #ffdc4f)",
        "--body-bg-color": "#363636",
        "--nav-bg-color": "#363636",
        "--text-color": "#ffffff",
        "--anchor-color": "#181818",
        // "--border-color": "#ffffff",
        "--border-color": "#181818",
        "--shadow-color": "rgba(24, 24, 24, 1)",
        // "--nav-shadow-color": "rgba(255, 255, 255, 0.12)",
        "--nav-shadow-color": "rgba(0, 0, 0, 0.24)",
        "--toggle-color": "#181818",
        "--toggle-bg-color": "var(--yellow)"
    }
};
