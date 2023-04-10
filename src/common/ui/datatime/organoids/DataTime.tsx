import '../styles/DataTime.css'
interface IDataTime {
    datetime: string;
    setting: ISettingDataTime
};
export interface ISettingDataTime {
    generalWidth: string
    generalHeight: string
    generalBorderRadius: string
    generalDotColor: string

    arrowMinuteWidth: string
    arrowMinuteHeight: string

    arrowHourWidth: string
    arrowHourHeight: string

    arrowSecondWidth: string
    arrowSecondHeight: string
};
export const DataTime = (params: IDataTime) => {
    const [date, timeString] = params.datetime.split(" ");
    const [year, month, day] = date.split("-");
    const [hour, minute, second] = timeString.split(":");
    const hourAngle = ((parseInt(hour) % 12) + parseInt(minute) / 60) * 30;
    const minuteAngle = (parseInt(minute) + parseInt(second) / 60) * 6;
    const secondAngle = parseInt(second) * 6;
    const style: any = {
        general: {
            width: `${params.setting.generalWidth}px`,
            height: `${params.setting.generalHeight}px`,
            borderRadius: `${params.setting.generalBorderRadius}px`,
            border: "2px solid black",
            position: "relative",
        },
        arrowMinute: {
            width: `${params.setting.arrowMinuteWidth}px`,
            height: `${params.setting.arrowMinuteHeight}px`,
            position: "absolute",
            transform: `rotate(${minuteAngle}deg)`,
        },
        arrowHour: {
            width: `${params.setting.arrowHourWidth}px`,
            height: `${params.setting.arrowHourHeight}px`,
            position: "absolute",
            transform: `rotate(${hourAngle}deg)`,
        },
        arrowSecond: {
            width: `${params.setting.arrowSecondWidth}px`,
            height: `${params.setting.arrowSecondHeight}px`,
            position: "absolute",
            transform: `rotate(${secondAngle}deg)`,
        },
        dot: {
            width: "20px",
            height: "20px",
            borderRadius: "10px",
            position: "absolute",
            backgroundColor: `${params.setting.generalDotColor}`
        }
    };
    return (
        <div className='DataTime'>
            <div
                style={style.general}
                className='DataTime__General'
            >
                <div
                    style={style.arrowHour}
                    className='DataTime__General__Arrow__Big'
                />
                <div
                    style={style.arrowMinute}
                    className='DataTime__General__Arrow__Big'
                />
                <div
                    style={style.arrowSecond}
                    className='DataTime__General__Arrow__Min'
                />
                <div
                    style={style.dot}
                />
            </div>
            <div className='DataTime__Text'>
                {year}-{month}-{day}
            </div>
        </div>
    );
};

export default DataTime;