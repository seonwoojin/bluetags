import { NextPage } from "next";
import styled from "styled-components";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface DataType {
  title: string;
  startDate: Date;
  endDate: Date;
  bluetag: string;
  id: string;
}

interface Tile {
  date: Date;
  content: string[];
}

const datas: DataType[] = [
  {
    title:
      "debitis id. Everti aliquid te vix, sit no doming oportere theophrastus, eam ne libris delenit atomo",
    startDate: new Date("2022-12-27 00:00:00"),
    endDate: new Date("2022-12-27 23:59:59"),
    bluetag: "minting",
    id: "1",
  },
  {
    title:
      "debitis id. Everti aliquid te vix, sit no doming oportere theophrastus, eam ne libris delenit atomo",
    startDate: new Date("2022-12-27 00:00:00"),
    endDate: new Date("2023-01-12 23:59:59"),
    bluetag: "minting",
    id: "2",
  },
  {
    title:
      "ainst Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etia",
    startDate: new Date("2022-12-27 00:00:00"),
    endDate: new Date("2022-12-29 23:59:59"),
    bluetag: "event",
    id: "3",
  },
  {
    title:
      " architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur m",
    startDate: new Date("2022-12-27 00:00:00"),
    endDate: new Date("2022-12-28 23:59:59"),
    bluetag: "minting",
    id: "4",
  },
  {
    title:
      " nonumes ex mei, duo ut dicta vidisse mnesarchum, nec an saepe verear. Ea eripuit iracundia mel, an dolorum debitis ponderu",
    startDate: new Date("2022-12-23 00:00:00"),
    endDate: new Date("2022-12-23 23:59:59"),
    bluetag: "voting",
    id: "5",
  },
  {
    title:
      "debitis id. Everti aliquid te vix, sit no doming oportere theophrastus, eam ne libris delenit atomo",
    startDate: new Date("2022-12-25 00:00:00"),
    endDate: new Date("2022-12-27 23:59:59"),
    bluetag: "minting",
    id: "6",
  },
  {
    title:
      "debitis id. Everti aliquid te vix, sit no doming oportere theophrastus, eam ne libris delenit atomo",
    startDate: new Date("2022-12-25 00:00:00"),
    endDate: new Date("2022-12-26 23:59:59"),
    bluetag: "minting",
    id: "7",
  },
  {
    title:
      "pography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or fill",
    startDate: new Date("2022-12-12 00:00:00"),
    endDate: new Date("2022-12-14 23:59:59"),
    bluetag: "voting",
    id: "8",
  },
  {
    title:
      "gainst Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etia",
    startDate: new Date("2022-12-06 00:00:00"),
    endDate: new Date("2022-12-13 23:59:59"),
    bluetag: "event",
    id: "9",
  },
  {
    title:
      "th content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to foe",
    startDate: new Date("2022-12-08 00:00:00"),
    endDate: new Date("2022-12-08 23:59:59"),
    bluetag: "minting",
    id: "10",
  },
  {
    title:
      "th content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to foe",
    startDate: new Date("2022-12-29 00:00:00"),
    endDate: new Date("2022-12-29 23:59:59"),
    bluetag: "minting",
    id: "11",
  },
  {
    title:
      "th content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to foe",
    startDate: new Date("2022-12-29 00:00:00"),
    endDate: new Date("2022-12-31 23:59:59"),
    bluetag: "voting",
    id: "12",
  },
  {
    title:
      "th content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to foe",
    startDate: new Date("2022-12-29 00:00:00"),
    endDate: new Date("2022-12-30 23:59:59"),
    bluetag: "event",
    id: "13",
  },
  {
    title:
      "th content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to foe",
    startDate: new Date("2022-12-28 00:00:00"),
    endDate: new Date("2023-12-31 23:59:59"),
    bluetag: "event",
    id: "14",
  },
  {
    title:
      "th content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to foe",
    startDate: new Date("2022-12-28 00:00:00"),
    endDate: new Date("2023-12-30 23:59:59"),
    bluetag: "voting",
    id: "15",
  },
  {
    title:
      "th content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to foe",
    startDate: new Date("2022-12-31 00:00:00"),
    endDate: new Date("2023-01-02 23:59:59"),
    bluetag: "event",
    id: "16",
  },
];

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 1500px;
  height: auto;
  padding-top: 15rem;
  padding-left: 20rem;
  .react-calendar__tile--active,
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: none;
  }
  .react-calendar {
    width: 1000px;
    height: auto;
    border: none;
  }
  .react-calendar__navigation {
    height: 100px;
    position: relative;
  }
  .react-calendar__navigation button {
    :disabled {
      background-color: white;
      color: black;
    }
    :first-child {
      display: none;
    }
    :last-child {
      display: none;
    }
    :nth-child(2) {
      position: absolute;
      top: 15px;
      left: 350px;
    }
    :nth-child(3) {
      position: absolute;
      left: 0;
      .react-calendar__navigation__label__labelText {
        .month {
          font-size: 4rem;
          font-weight: 600;
          margin-right: 20px;
        }
        font-size: 4rem;
      }
    }
    :nth-child(4) {
      position: absolute;
      top: 15px;
      left: 400px;
    }
    :not(:nth-child(3)) {
    }
  }
  .react-calendar__month-view__weekdays {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid black;
    background: rgba(0, 0, 0, 0.1);
    abbr {
      font-weight: 600;
      font-size: 1.5rem;
      border-bottom: none;
      text-decoration: none;
    }
  }
  .react-calendar__tile {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0px;
    width: 142.84px;
    height: 100px;
    background: white;
    overflow: visible;
    border: 1px solid rgba(0, 0, 0, 0.4);
    :hover {
      color: black;
      background: white;
    }
    :enabled {
      :hover {
        color: black;
        background: white;
      }
      color: black;
      background: white;
    }
    abbr {
      margin-right: 5px;
    }
  }
  .react-calendar__month-view__days__day--weekend {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    height: 100px;
    background: rgba(0, 0, 0, 0.1);
    color: red;
    :hover {
      color: red;
      background: rgba(0, 0, 0, 0.1);
    }
    :enabled {
      :hover {
        color: red;
        background: rgba(0, 0, 0, 0.1);
      }
      color: red;
      background: rgba(0, 0, 0, 0.1);
    }
    :focus {
      color: red;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .react-calendar__tile--now {
    background: none;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: none;
  }
  .react-calendar button:enabled:hover {
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgba(0, 0, 0, 0.4);
    :hover {
      color: rgba(0, 0, 0, 0.4);
    }
    :enabled {
      color: rgba(0, 0, 0, 0.4);
      :hover {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;

const TileWrapper = styled.div`
  display: flex;
  width: 142.84px;
  .todo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    margin-top: 5px;
    border-radius: 5px;
    padding: 0px 5px;
    z-index: 50;
    cursor: pointer;
    abbr {
      text-decoration: none;
      color: whitesmoke;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .between {
    width: 102%;
    height: 20px;
    margin-top: 5px;
    padding: 0px 5px;
    cursor: pointer;
  }
  .start-todo {
    border-radius: 0px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .event {
    background-color: #a3d0f9;
  }
  .minting {
    background-color: #c3dec1;
  }
  .voting {
    background-color: #f9c4e1;
  }
  .react-calendar__month-view__days {
    button {
      overflow: visible;
    }
  }
`;

const EmptyDiv = styled.div`
  margin-left: 5px;
  margin-right: 2.5px;
`;

const TodoStartDiv = styled.div<{ leftDays: number; day: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 130px;
  min-width: ${(props) =>
    props.leftDays <= props.day
      ? props.leftDays > 1
        ? `${136 * 2 + 142.84 * (props.leftDays - 1)}px`
        : props.leftDays === 1
        ? `${136 * 2}px`
        : "0px"
      : `${136 * 2 + 142.84 * (props.day - 1)}px`};
`;

const BetweenDiv = styled.div`
  width: 140px;
  min-height: 25px;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  svg {
    width: 20px;
    fill: rgba(0, 0, 0, 0.4);
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0rem;
  left: 0rem;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.5);
`;

const DetailDate = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 70rem;
  border-radius: 30px;
  overflow: hidden;
  z-index: 99;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const DetailDateTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 0 5rem;
  font-size: 3rem;
  font-weight: 600;
  svg {
    width: 2rem;
    cursor: pointer;
  }
`;

const DetailDateToDos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 80%;
  height: auto;
`;

const DetailDateToDo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 6rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
  font-size: 1.5rem;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const week = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");

const CalendarPage: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState(new Date());
  const [click, setClick] = useState<Date>();
  const [clickTile, setClickTile] = useState(false);
  const [todayDate, setTodayDate] = useState(new Date());
  const [toDos, setToDos] = useState<DataType[]>([]);
  useEffect(() => {
    const tiles = document.getElementsByClassName(
      "react-calendar__tile"
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].style.overflow = "visible";
    }
  }, [click]);
  datas.sort(function (dataA, dataB) {
    if (dataA.startDate.getTime() === dataB.startDate.getTime()) {
      return dataB.endDate.getTime() - dataA.endDate.getTime();
    }
    return dataA.startDate.getTime() - dataB.startDate.getTime();
  });
  useEffect(() => {
    if (router.query.date) {
      setClickTile(true);
    } else {
      setClickTile(false);
    }
  }, [router]);
  return (
    <Container>
      <Calendar
        onClickDay={(date, event) => {
          const toDos = datas.filter(
            (data) => data.startDate <= date && data.endDate >= date
          );
          setTodayDate(date);
          setToDos(() => [...toDos]);
          router.push(`/calendar?date=${date.toDateString()}`);
        }}
        onActiveStartDateChange={(props) => setClick(props.activeStartDate)}
        nextLabel={
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M235.3 132.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L313.4 256l-100.7 100.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l112-112C350.4 264.2 352 260.1 352 256s-1.562-8.188-4.688-11.31L235.3 132.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z" />
            </svg>
          </div>
        }
        prevLabel={
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M299.3 132.7c-6.25-6.25-16.38-6.25-22.62 0l-112 112C161.6 247.8 160 251.9 160 256s1.562 8.188 4.688 11.31l112 112c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L198.6 256l100.7-100.7C305.6 149.1 305.6 138.9 299.3 132.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z" />
            </svg>
          </div>
        }
        navigationLabel={({ date, locale }) => {
          return (
            <div>
              <span className="month">
                {date.toLocaleString(locale, {
                  month: "long",
                })}
              </span>
              {date.toLocaleString(locale, { year: "numeric" })}
            </div>
          );
        }}
        minDetail="month"
        locale="en"
        onChange={setValue}
        value={value}
        tileContent={({ date }) => {
          const thisWeekMonday = new Date(date);
          thisWeekMonday.setDate(
            thisWeekMonday.getDate() -
              (thisWeekMonday.getDay() === 0 ? 6 : thisWeekMonday.getDay() - 1)
          );
          const tiles: Tile[] = [];
          let lastTiles: string[] = [];
          let today: Tile = { date: date, content: [] };
          for (let i = 0; i < 7; i++) {
            const day = new Date(thisWeekMonday);
            day.setDate(day.getDate() + i);
            tiles.push({
              date: day,
              content: [
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
                "possible",
              ],
            });
          }
          for (let i = 0; i < tiles.length; i++) {
            if (i === 0) {
              const mondayToDos = datas.filter(
                (data, index) =>
                  data.startDate <= tiles[0].date &&
                  data.endDate >= tiles[0].date
              );
              for (let j = 0; j < mondayToDos.length; j++) {
                let lastDays = Math.ceil(
                  (mondayToDos[j].endDate.getTime() - tiles[0].date.getTime()) /
                    (1000 * 60 * 60 * 24)
                );
                if (lastDays > 7) lastDays = 7;
                const indexOfPossible = tiles[i].content.findIndex(
                  (element) => element === "possible"
                );
                if (indexOfPossible >= 0) {
                  tiles[i].content[indexOfPossible] = mondayToDos[j].id;
                  for (let k = 0; k < lastDays - 1; k++) {
                    if (i + 1 + k < 7) {
                      tiles[i + 1 + k].content[
                        indexOfPossible
                      ] = `empty/${mondayToDos[j].id}`;
                    }
                  }
                  if (i + lastDays < 7) {
                    tiles[i + lastDays].content[indexOfPossible] = "possible";
                  }
                }
              }
            } else {
              const toDos = datas.filter(
                (data, index) =>
                  data.startDate.toDateString() === tiles[i].date.toDateString()
              );
              for (let j = 0; j < toDos.length; j++) {
                let lastDays = Math.ceil(
                  (toDos[j].endDate.getTime() - tiles[i].date.getTime()) /
                    (1000 * 60 * 60 * 24)
                );
                if (lastDays > 7) lastDays = 7;
                const indexOfPossible = tiles[i].content.findIndex(
                  (element) => element === "possible"
                );
                if (indexOfPossible >= 0) {
                  tiles[i].content[indexOfPossible] = toDos[j].id;
                  for (let k = 0; k < lastDays - 1; k++) {
                    if (i + 1 + k < 7) {
                      tiles[i + 1 + k].content[
                        indexOfPossible
                      ] = `empty/${toDos[j].id}`;
                    }
                  }
                  if (i + lastDays < 7) {
                    tiles[i + lastDays].content[indexOfPossible] = "possible";
                  }
                }
              }
            }
          }
          for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].date.toDateString() === date.toDateString()) {
              today = tiles[i];
            }
          }
          let count = 0;
          for (let i = 0; i < today.content.length; i++) {
            if (today.content[i] !== "possible") {
              count++;
            }
            if (count > 3) {
              for (let j = 2; j < today.content.length; j++) {
                if (
                  !today.content[j].includes("empty") &&
                  !today.content[j].includes("possible")
                ) {
                  lastTiles.push(today.content[j]);
                }
              }
              today.content = today.content.slice(0, 2);
            }
          }
          return (
            <>
              {today.content.map((id, index) =>
                !id.includes("empty") && !id.includes("possible") ? (
                  datas.map((data) =>
                    data.id === id ? (
                      <TileWrapper key={index}>
                        <EmptyDiv />
                        <TodoStartDiv
                          leftDays={
                            date.getDay() === 1
                              ? Math.floor(
                                  (data.endDate.getTime() - date.getTime()) /
                                    (1000 * 60 * 60 * 24)
                                )
                              : Math.floor(
                                  (data.endDate.getTime() -
                                    data.startDate.getTime()) /
                                    (1000 * 60 * 60 * 24)
                                )
                          }
                          day={date.getDay() === 0 ? 0 : 7 - date.getDay()}
                          className={
                            date.getDay() === 1
                              ? `todo ${
                                  data.bluetag
                                } ${`start-todo left__days__${Math.floor(
                                  (data.endDate.getTime() - date.getTime()) /
                                    (1000 * 60 * 60 * 24)
                                )} left__days__this__week__${
                                  date.getDay() === 0 ? 0 : 7 - date.getDay()
                                }`}`
                              : `todo ${
                                  data.bluetag
                                } ${`start-todo left__days__${Math.floor(
                                  (data.endDate.getTime() -
                                    data.startDate.getTime()) /
                                    (1000 * 60 * 60 * 24)
                                )} left__days__this__week__${
                                  date.getDay() === 0 ? 0 : 7 - date.getDay()
                                }`}`
                          }
                        >
                          <abbr title={data.title}>{data.title}</abbr>
                        </TodoStartDiv>
                      </TileWrapper>
                    ) : null
                  )
                ) : id.includes("empty") ? (
                  <BetweenDiv key={index} />
                ) : null
              )}
              {lastTiles.length > 0 ? (
                <DotContainer>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
                  </svg>
                </DotContainer>
              ) : null}
            </>
          );
        }}
      />
      {clickTile ? (
        <>
          <Overlay onClick={() => router.push("/calendar")} />
          <DetailDate>
            <DetailDateTitle>
              {`${
                week[todayDate.getDay()]
              } ${todayDate.getDate()}, ${todayDate.getFullYear()}`}
              <svg
                onClick={() => router.push("/calendar")}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 222.1L407 39.03C416.4 29.66 431.6 29.66 440.1 39.03C450.3 48.4 450.3 63.6 440.1 72.97L257.9 256L440.1 439C450.3 448.4 450.3 463.6 440.1 472.1C431.6 482.3 416.4 482.3 407 472.1L224 289.9L40.97 472.1C31.6 482.3 16.4 482.3 7.029 472.1C-2.343 463.6-2.343 448.4 7.029 439L190.1 256L7.029 72.97C-2.343 63.6-2.343 48.4 7.029 39.03C16.4 29.66 31.6 29.66 40.97 39.03L224 222.1z" />
              </svg>
            </DetailDateTitle>
            <DetailDateToDos>
              {toDos.map((toDo, index) => (
                <DetailDateToDo key={index}>
                  <h1>{toDo.title}</h1>
                </DetailDateToDo>
              ))}
            </DetailDateToDos>
          </DetailDate>
        </>
      ) : null}
    </Container>
  );
};

export default CalendarPage;
