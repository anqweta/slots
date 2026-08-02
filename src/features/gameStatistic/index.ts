import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { addStatisticElementPayload } from "../../types/typesStatistic";
import type { handleIconPayload } from '../../types/typesStatistic';
import type { handlePercentWinPayload } from '../../types/typesStatistic';
interface StatisticItem {
    numberGame: number;
    result: string | number;
    icon: number | string[];
    bet: number;
    moneyWin: number;
    money: number;
}

interface statisticLogicType {
    gameCount: number,
    statistic: StatisticItem[],
    percentWin: number;
    moneyWin: number;
    icon: number[] | string[];
}

const initialState: statisticLogicType = {
    gameCount: 0,
    statistic: [],
    percentWin: 0,
    moneyWin: 0,
    icon: []
}

export const statisticLogic = createSlice({
    name: 'statisticLogic',
    initialState,
    reducers: {
        addStatisticElement: (state, action:PayloadAction<addStatisticElementPayload>) => {

            const { isWinStat, result, currentBet, moneyWinStat, balanceStat } = action.payload;

            const newElement: StatisticItem = {
                numberGame: state.gameCount + 1,
                result: isWinStat ? "win" : "lose",
                icon: result,
                bet: currentBet,
                moneyWin: moneyWinStat,
                money: balanceStat,
            };

            state.statistic = [...state.statistic, newElement];
        },

        handlePercentWin: (state, action: PayloadAction<handlePercentWinPayload>) => {
            const { countWin} = action.payload;
            state.percentWin = Math.round((countWin / (state.gameCount + 1)) * 100)
        },

        handleIcon: (state, action: PayloadAction<handleIconPayload> ) => {
            const { firstIcon, secondIcon, thirdIcon } = action.payload;
            state.icon = [firstIcon, secondIcon, thirdIcon];
        }, 

        onSpin: (state) => {
            state.gameCount += 1;
        }
    }
})

export const {addStatisticElement, handleIcon, handlePercentWin, onSpin} = statisticLogic.actions

export const moneyLogicReducer = statisticLogic.reducer;

export default moneyLogicReducer;