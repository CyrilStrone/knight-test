import { useEffect, useState } from 'react';
import DataTime, { ISettingDataTime } from './DataTime';
import { IGetTimeFromAPI, getTimeFromAPI } from '../logics/getTimeFromAPI';

function DateTimeGeneral() {
  const [time, setTime] = useState<any>({})
  const [userValue, ] = useState<IGetTimeFromAPI>({ key: "NO5ILCRVCL70", zone: "Asia/Krasnoyarsk" })  //Api authorization data
  const [setting, ] = useState<ISettingDataTime>({  //Clock settings
    generalWidth: "200",
    generalHeight: "200",
    generalBorderRadius: "100",
    generalBorderColor: "000",
    generalBorderWidth: "2",

    generalDotColor: "black",
    generalDotWidth: "20",
    generalDotHeight: "20",
    generalDotBorderRadius: "10",

    arrowMinuteWidth: "4",
    arrowMinuteHeight: "100",

    arrowHourWidth: "4",
    arrowHourHeight: "80",

    arrowSecondWidth: "2",
    arrowSecondHeight: "120",
  })

  const requestTimeFromAPI = async (userValue: IGetTimeFromAPI) => {  //Api call
    setTime(await getTimeFromAPI(userValue));
  }

  useEffect(() => {
    requestTimeFromAPI(userValue);
  }, [userValue])

  return (
    <>
      {time && time.formatted && <DataTime datetime={time.formatted} setting={setting} />}
    </>
  );
}

export default DateTimeGeneral;
