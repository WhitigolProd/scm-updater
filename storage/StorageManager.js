// Store Download Links to System Requirements
let links = {
    node: ``,
};

let app = {
    versions: {
        current: '1.0.0', // Must be set before releasing each update.
        latest: null, // Sets Dynamically
        skipUpdate: false, // Whether to skip updating the latest version (Updates Dynamically).
    },
    links: {
        manager: {
            docs: `https://cad-manager.cossys.tk/`,
            download: `https://github.com/WhitigolProd/SnailyCAD-Manager/releases/latest`,
            report: `https://github.com/WhitigolProd/SnailyCAD-Manager/issues/new/choose`,
        },
        cad: {
            github: 'https://github.com/SnailyCAD/snaily-cadv4',
            docs: 'https://cad-docs.caspertheghost.me/',
        }
    }
};

//? Status of CAD (Set Dynamically)
let st = {
    cad: localStorage.getItem('cadStatus'),
};

const setStatus = {
    cad: function (status) {
        localStorage.setItem('cadStatus', `${status}`);
        st.cad = `${status}`;
    },
};

// Get Initial Configuration
let config = {
    //? User Storage
    cadDir: localStorage.getItem('cadDir'),
    cadPort: localStorage.getItem('cadPort'),
    cadAPI: localStorage.getItem('cadAPI'),
    nodeEnv: 'production',
    color: localStorage.getItem('color'),
    autoStart: localStorage.getItem('autoStart'),
    openOnStartup: localStorage.getItem('openOnStartup'),
    firstRun: localStorage.getItem('firstRun'),
};

const setConfig = {
    cadDir: function (cadDir) {
        localStorage.setItem('cadDir', cadDir);
        config.cadDir = cadDir;
    },
    cadPort: function (cadPort) {
        localStorage.setItem('cadPort', cadPort);
        config.cadPort = cadPort;
    },
    cadAPI: function (cadAPI) {
        localStorage.setItem('cadAPI', cadAPI);
        config.cadAPI = cadAPI;
    },
    color: function (color) {
        localStorage.setItem('color', color);
        config.color = color;
    },
    openOnStartup: function (openOnStartup) {
        localStorage.setItem('openOnStartup', openOnStartup);
        config.openOnStartup = openOnStartup;
    },
    autoRun: function (autoStart) {
        localStorage.setItem('autoStart', autoStart);
        config.autoStart = autoStart;
    },
    firstRun: function (firstRun) {
        localStorage.setItem('firstRun', firstRun);
        config.firstRun = firstRun;
    },
};