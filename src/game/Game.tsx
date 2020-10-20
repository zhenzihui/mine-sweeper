import React from "react";
// @ts-ignore
import _ from "lodash";
import GamePanelProps from "./GamePanelProps";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from "@material-ui/core";
function GamePanel(props: GamePanelProps) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();
    let gameMatrix = _.range(props.rows).map((r: number) => _.range(props.cols).map((c: number) => Math.round(1 / Math.random() * 1000)%2))

    let panel =
        <Grid spacing = {1}>
            {
                gameMatrix.map((row: number[]) => {
                return (
                    <Grid container item xs={9} spacing={1}>
                        {
                            row.map(column => {
                            return (<Grid item xs={1}><Paper className={classes.paper}>{column}</Paper></Grid>)
                        })
                        }
                    </Grid>
                )
                })
            }
        </Grid>

    return (

        <div className = {classes.root}><React.Fragment>
            {panel}
        </React.Fragment></div>
    )
}

export default GamePanel


