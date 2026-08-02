import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BASE_MONEY } from '../../constants';
import type { handleMoneyPayload } from '../../types/typesBalance';
import type { handleMoneyWinPayload } from '../../types/typesBalance'; 



interface MoneyLogicType {
    money: number;
    moneyWin: number,
}

const initialState: MoneyLogicType = {
    money: BASE_MONEY,
    moneyWin: 0,
}

export const moneyLogic = createSlice({
    name: 'moneyLogic',
    initialState,
    reducers: {
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

    }
})

export const {handleMoney, handleMoneyWin } = moneyLogic.actions

export const moneyLogicReducer = moneyLogic.reducer;

export default moneyLogicReducer;