import { LOAD_ALL_COUNTRIES } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react'
import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'


const Home = () => {
    const globalStyles = useGlobalStyles();

    const { data } = useQuery(LOAD_ALL_COUNTRIES);
    useEffect(() => {
        console.log(data)
    }, [ data ]);

    return (
        <main 
            className={classNames('py-8', globalStyles.main)}>
            Hello
        </main>
    )
};

export default Home;