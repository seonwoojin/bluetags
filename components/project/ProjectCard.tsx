import styled from "styled-components";

const Project = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  width: 435px;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid rgba(25, 31, 40, 0.1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

const ProjectLogo = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 6px;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px;
  min-width: 146px;
  width: auto;
  height: 39px;
  border-radius: 20px;
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  min-width: 124px;
  width: auto;
  height: 17px;
  span {
    font-size: 12px;
    line-height: 17px;
    color: #191f28;
    :first-child {
      font-style: normal;
      font-weight: 700;
    }
    :last-child {
      margin-left: 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
    }
  }
  svg {
    margin-left: 10px;
  }
`;

const ProjectDescription = styled.div`
  min-width: 146px;
  width: auto;
  height: 12px;
  margin-top: 10px;
  font-weight: 300;
  font-size: 16px;
  line-height: 12px;
  color: #191f28;
  opacity: 0.5;
`;

const ProjectChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 43px;
  width: 43px;
  height: 14px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #191f28;
  border-radius: 5px;
`;

export default function ProjectCard() {
  return (
    <Project>
      <ProjectLogo />
      <ProjectContent>
        <ProjectTitle>
          <span>Bored Ape Yacht Club</span>
          <svg
            width="2"
            height="12"
            viewBox="0 0 2 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              opacity="0.5"
              x1="0.833984"
              y1="0.5"
              x2="0.833984"
              y2="11.5"
              stroke="#191F28"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.0625 8.99967C8.62508 8.99967 9.89583 7.72892 9.89583 6.16634C9.89583 4.60376 8.62508 3.33301 7.0625 3.33301C5.49992 3.33301 4.22917 4.60376 4.22917 6.16634C4.22917 7.72892 5.49992 8.99967 7.0625 8.99967ZM8.125 9.70801H6C3.65612 9.70801 1.75 11.6141 1.75 13.958V14.6663H12.375V13.958C12.375 11.6141 10.4689 9.70801 8.125 9.70801Z"
              fill="black"
            />
            <path
              d="M12.0946 8.32581C12.526 7.59062 12.7123 6.73723 12.6265 5.88914C12.4997 4.62547 11.7942 3.50843 10.6411 2.74414L9.85836 3.92422C10.651 4.44981 11.1334 5.19852 11.2169 6.03081C11.2555 6.41763 11.2073 6.80817 11.076 7.17404C10.9446 7.53992 10.7334 7.87191 10.4576 8.14589L9.61328 8.99022L10.7594 9.32668C13.757 10.205 13.7917 13.2197 13.7917 13.2501H15.2084C15.2084 11.9829 14.5312 9.5066 12.0946 8.32581Z"
              fill="black"
            />
          </svg>
          <span>
            {(24232).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </ProjectTitle>
        <ProjectDescription>Abc DEF : ASDF</ProjectDescription>
      </ProjectContent>
      <ProjectChart>
        <svg
          width="48"
          height="20"
          viewBox="0 0 48 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.66602 17L5.73744 12.7067H6.85433L9.50692 9.34667V12.7067L10.7634 17L13.416 12.7067V17L16.9063 14.76L18.7212 17L22.7699 9.34667L27.9355 3L29.0524 12.7067L31.0069 14.76L34.916 6.92L41.6173 14.76L45.666 12.7067"
            stroke="#F44242"
            strokeWidth="2"
          />
        </svg>
      </ProjectChart>
      <Button>
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25032 7.96087L2.50478 9.15654L6.47003 12.7981L8.17003 11.1753C8.24284 11.0719 8.27916 10.9472 8.27326 10.8209C8.26736 10.6945 8.21958 10.5738 8.13745 10.4776L6.57628 9.13033L6.58336 9.12679L4.90391 7.52171C4.80868 7.41633 4.75721 7.27862 4.75997 7.13662C4.76274 6.99462 4.81953 6.85901 4.91878 6.75742L9.44503 2.45358L7.39511 0.5L1.25316 6.33525C1.14182 6.43935 1.05307 6.56521 0.992384 6.70503C0.931702 6.84485 0.900391 6.99564 0.900391 7.14806C0.900391 7.30048 0.931702 7.45127 0.992384 7.59109C1.05307 7.73091 1.14182 7.85677 1.25316 7.96087H1.25032ZM14.7483 10.0413L13.4946 8.84346L9.53145 5.20121L7.82366 6.824C7.7469 6.92581 7.70808 7.05122 7.7139 7.1786C7.71972 7.30597 7.76981 7.42732 7.85553 7.52171L9.41741 8.86117H9.41315L11.0912 10.4655C11.1855 10.5696 11.2359 10.7061 11.2321 10.8465C11.2283 10.9869 11.1705 11.1204 11.0707 11.2192L6.5437 15.5223L8.60565 17.5L14.7469 11.6648C14.8583 11.5607 14.9472 11.4349 15.0079 11.295C15.0687 11.1552 15.1 11.0044 15.1 10.8519C15.1 10.6995 15.0687 10.5487 15.0079 10.4088C14.9472 10.269 14.8583 10.1432 14.7469 10.0391L14.7483 10.0413Z"
            fill="white"
          />
        </svg>
      </Button>
    </Project>
  );
}
