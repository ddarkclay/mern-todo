import { useEffect, useState } from 'react';
import { Grow, Container, Grid } from "@material-ui/core";

import useStyles from '../../styles';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';

const Home = () => {
    const [currentId, setCurrentId] = useState(0)
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
