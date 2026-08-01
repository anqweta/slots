import { RootState } from "../../store";

export const percentWinSelector = (state: RootState) => state.statisticLogic.percentWin;

export const moneyWinSelector = (state: RootState) => state.statisticLogic.moneyWin;

export const gameCountSelector = (state: RootState) => state.statisticLogic.gameCount;

export const iconSelector = (state: RootState) => state.statisticLogic.icon;

export const statisticSelector = (state: RootState) => state.statisticLogic.statistic;
//я думаю это можно переделать криетСелектором.......Я ДУМАЮ.......