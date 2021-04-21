import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
    createStyles({
        layout: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
        },

        // Класс, который добавляется к элементу при прокрутке
        onScroll: {
            '&::-webkit-scrollbar-thumb': {
                '&:vertical': {
                    background: '#dedede',
                },
            },
        },

        // Scrollbar customization
        '@global': {
            '*::-webkit-scrollbar': {
                width: '0.4em',
                height: '0.4em',
            },
            '*::-webkit-scrollbar-thumb': {
                borderRadius: '10px',

                '&:horizontal': {
                    background: 'transparent',
                },

                '&:vertical': {
                    background: '#dedede',
                },
            },
        },
    }),
);
