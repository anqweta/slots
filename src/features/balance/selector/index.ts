import { RootState } from "../../store";

export const moneySelector = (state: RootState) => state.moneyLogic.money;