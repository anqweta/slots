import { RootState } from "../../store";

export const percentWinSelector = (state: RootState) => state.gameStatistic.percentWin;

export const moneyWinSelector = (state: RootState) => state.gameStatistic.moneyWin;

export const gameCountSelector = (state: RootState) => state.gameStatistic.gameCount;

export const iconSelector = (state: RootState) => state.gameStatistic.icon;

export const statisticSelector = (state: RootState) => state.gameStatistic.statistic;