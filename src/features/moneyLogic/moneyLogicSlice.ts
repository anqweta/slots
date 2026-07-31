import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BASE_MONEY } from '../../constants';
import type { handleMoneyPayload } from '../../types/types';
import type { handlePercentWinPayload } from '../../types/types';
import type { handleMoneyWinPayload } from '../../types/types'; 
import type { handleIconPayload } from '../../types/types';
import { RootState } from "../../app/store"


interface MoneyLogicType {
    money: number;
    moneyWin: number,
    percentWin: number;
    icon: [string, string, string],
    gameCount: number
}

const initialState: MoneyLogicType = {
    money: BASE_MONEY,
    moneyWin: 0,
    percentWin: 0,
    icon: ["0", "0", "0"],
    gameCount: 0
}

export const moneyLogic = createSlice({
    name: 'moneyLogic',
    initialState,
    reducers: {
        money: (state) => {
            state.money
        },
        handleMoney: (state, action: PayloadAction<handleMoneyPayload>) => {
            const { amount } = action.payload;
            if (state.money >= amount) {
                state.money = state.money - amount;
            }
        },
        handleMoneyWin: (state, action: PayloadAction<handleMoneyWinPayload>) => {
            const { moneyWin } = action.payload;
            state.moneyWin = moneyWin;
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

export const moneySelector = (state: RootState) => state.moneyLogic.money;
export const { money, handleMoney, handleMoneyWin, handlePercentWin, handleIcon, onSpin } = moneyLogic.actions

export const moneyLogicReducer = moneyLogic.reducer;

export default moneyLogicReducer;