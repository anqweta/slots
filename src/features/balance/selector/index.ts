import { RootState } from "../../store";

export const moneySelector = (state: RootState) => state.balance.money;