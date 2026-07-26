import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BASE_MONEY } from '../../constants';
import type { handleMoneyPayload } from '../../types/types';
import type { handlePercentWin } from '../../types/types';

interface MoneyLogicType {
    money: number;
    percentWin: number;
}

const initialState: MoneyLogicType = {
    money: BASE_MONEY,
    percentWin: 0
}

export const moneyLogic = createSlice({
    name: 'moneyLogic',
    initialState,
    reducers: {
        handleMoneyWin: (state, action: PayloadAction<handleMoneyPayload>) => {
            const { amount } = action.payload;
            console.log("РЕДАКС РАБОТАЕТ");
            if (state.money >= amount) {
                state.money = state.money - amount;
            }
        },
        handlePercentWin: (state, action: PayloadAction<handlePercentWin>) => {
            const { countWin, gameCount } = action.payload;
            state.percentWin = Math.round((countWin / (gameCount + 1)) * 100)
        },
    }
})

export const { handleMoneyWin } = moneyLogic.actions

export default moneyLogic.reducer