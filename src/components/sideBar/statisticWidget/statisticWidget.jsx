import InfoItem from "./infoItem/infoItem"



export default function StatisticWidget({ gameCount }) {
    
    let statisticInfo = [
    { title: "Counf of game", number: gameCount},
    { title: "Last win", number: "змінна" },
    { title: "Total win", number: "змінна"}
]

    return (
        <div className="statistic">
            <h2>
                STATISTIC
            </h2>
            <div className="statistic__info">
                {statisticInfo.map((item, index) => (
                    <InfoItem key={index} props={item} />
                ))}
            </div>
        </div>
    )
}