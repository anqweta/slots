import { RootState } from "@/features/store";

export const moneySelector = (state: RootState) => state.balance.money;