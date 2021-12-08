const microApps = [
    {
        name: 'log',
        entry: '//localhost:33522/',
        activeRule: '/log',
        container: '#base-view',
        props: {
            routerBase: '/log'
        }
    },
    {
        name: 'bi',
        entry: '//localhost:33523/',
        activeRule: '/bi',
        container: '#base-view',
        props: {
            routerBase: '/bi'
        }
    },
    {
        name: 'dolphin',
        entry: '//localhost:33525/',
         activeRule: '/dolphin',
        container: '#base-view',
        props: {
            routerBase: '/dolphin'
        }
    }
]

export default microApps
