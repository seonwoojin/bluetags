import { NextPage } from "next";
import styled from "styled-components";
import Calendar from "react-calendar";
import { useState } from "react";

interface Type {
  title: string;
  startDate: Date;
  endDate: Date;
  bluetag: string;
}

const datas: Type[] = [
  // {
  //   title:
  //     "ainst Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etia",
  //   startDate: new Date("2022-11-27"),
  //   endDate: new Date("2022-11-29"),
  //   bluetag: "event",
  // },
  // {
  //   title:
  //     " architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur m",
  //   startDate: new Date("2022-11-27"),
  //   endDate: new Date("2022-11-27"),
  //   bluetag: "minting",
  // },
  // {
  //   title:
  //     " nonumes ex mei, duo ut dicta vidisse mnesarchum, nec an saepe verear. Ea eripuit iracundia mel, an dolorum debitis ponderu",
  //   startDate: new Date("2022-11-23"),
  //   endDate: new Date("2022-11-23"),
  //   bluetag: "voting",
  // },
  // {
  //   title:
  //     "debitis id. Everti aliquid te vix, sit no doming oportere theophrastus, eam ne libris delenit atomo",
  //   startDate: new Date("2022-11-25"),
  //   endDate: new Date("2022-11-27"),
  //   bluetag: "minting",
  // },
  // {
  //   title:
  //     "pography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or fill",
  //   startDate: new Date("2022-11-12"),
  //   endDate: new Date("2022-11-14"),
  //   bluetag: "voting",
  // },
  // {
  //   title:
  //     "th content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to foe",
  //   startDate: new Date("2022-11-08"),
  //   endDate: new Date("2022-11-08"),
  //   bluetag: "minting",
  // },
  {
    title:
      "gainst Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etia",
    startDate: new Date("2022-11-03 00:00:00"),
    endDate: new Date("2022-11-15 00:00:00"),
    bluetag: "event",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 1500px;
  height: 500vh;
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
    cursor: default;
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
  .wrapper {
    display: flex;
    width: 142.84px;
  }
  .todo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: 20px;
    margin-top: 5px;
    border-radius: 5px;
    padding: 0px 5px;
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
    height: 20px;
    margin-top: 5px;
    padding: 0px 5px;
    cursor: pointer;
  }
  .start-period {
    border-radius: 0px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 137.84px;
  }
  .end-period {
    border-radius: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 137.84px;
  }
  .empty {
    margin-left: 5px;
    margin-right: 5px;
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

const CalendarPage: NextPage = () => {
  const [value, setValue] = useState(new Date());

  return (
    <Container>
      <Calendar
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
          const exists = datas.filter(
            (data, index) =>
              data.startDate.toDateString() === date.toDateString() ||
              data.endDate.toDateString() === date.toDateString()
          );
          const betweenExists = datas.filter(
            (data, index) =>
              data.startDate.getTime() < date.getTime() &&
              data.endDate.getTime() > date.getTime()
          );
          console.log(exists, betweenExists);
          if (exists.length > 0) {
            return (
              <>
                {exists.map((exist) => (
                  <div className="wrapper">
                    {exist.startDate.toDateString() === date.toDateString() ? (
                      <div className="empty"></div>
                    ) : null}
                    {
                      /* <div
                      className={`todo ${exist.bluetag} ${
                        exist.endDate === exist.startDate
                          ? ""
                          : exist.startDate.toDateString() ===
                            date.toDateString()
                          ? "start-period"
                          : "end-period"
                      }`}
                    >
                      <abbr title={exist.title}>{exist.title}</abbr>
                    </div> */ null
                    }
                    {exist.endDate.toDateString() === date.toDateString() ? (
                      <div className="empty"></div>
                    ) : null}
                  </div>
                ))}
              </>
            );
          } else if (betweenExists.length > 0) {
            return (
              <>
                {betweenExists.map((exist) => (
                  <div className={`between ${exist.bluetag}`}></div>
                ))}
              </>
            );
          } else {
            return null;
          }
        }}
      />
    </Container>
  );
};

export default CalendarPage;
