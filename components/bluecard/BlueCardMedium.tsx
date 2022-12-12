import styled from "styled-components";
import { BluecardWithProject } from "pages";

const BlueCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  cursor: pointer;
  margin-bottom: 30px;
`;

const BlueCardBackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 180px;
  overflow: hidden;
  background-image: url("https://cdn.pixabay.com/photo/2020/04/11/08/26/lake-5029360_960_720.jpg");
  background-size: cover;
  background-position: center center;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.4);
`;

const BlueCardImage = styled.div<{ url: string }>`
  width: 160px;
  height: 160px;
  border-radius: 5px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;

const BlueCardText = styled.div`
  width: 300px;
  height: auto;
  padding-top: 20px;
  padding-left: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ProjectLogo = styled.div<{ url: string }>`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background-color: black;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;

const ProjectTitle = styled.div`
  display: flex;
  width: auto;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
`;

const PostTitle = styled.div`
  display: -webkit-box;
  align-items: center;
  height: 40px;
  width: 230px;
  font-size: 2rem;
  font-weight: 600;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
`;

const PostBlueTags = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 1.5rem;
  opacity: 0.4;
  margin-bottom: 10px;
`;

const PostDate = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: auto;
  font-size: 1.2rem;
  opacity: 0.6;
  img {
    margin-left: 10px;
  }
`;

const PostContext = styled.div`
  display: -webkit-box;
  width: 280px;
  height: auto;
  max-height: 70px;
  margin-bottom: 10px;
  padding-top: 10px;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2rem;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 240px;
  height: 40px;
  bottom: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #272a2e;
  svg {
    margin-left: 10px;
    width: 20px;
    fill: white;
  }
`;

interface SliderProps {
  data: BluecardWithProject;
}

export default function BlueCardMedium({ data }: SliderProps) {
  return (
    <BlueCardContainer>
      <BlueCardBackGround>
        <BlueCardImage url={data.thumbnail} />
      </BlueCardBackGround>
      <BlueCardText>
        <TitleContainer>
          <ProjectLogo url={data.project.logoUrl} />
          <PostTitle>{data.title}</PostTitle>
        </TitleContainer>
        <ProjectTitle>{`${data.project.title} | ${new Date(
          data.createdAt
        ).toDateString()}`}</ProjectTitle>
        <PostBlueTags>
          {data.bluetags.map((word, index) =>
            index === 0
              ? word.startsWith("#")
                ? word
                : `#${word}`
              : word.startsWith("#")
              ? ` ${word}`
              : ` #${word}`
          )}
        </PostBlueTags>
      </BlueCardText>
      <PostContext>{data.description}</PostContext>
      <PostDate>
        22.10.08 (SAT) ~ 22.10.09 (SUN)
        {data.sns === "twitter" ? (
          <svg
            style={{ width: "25px", fill: "#1D9BF0", marginLeft: "10px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
        ) : (
          <svg
            style={{ width: "25px", fill: "#6E85D3", marginLeft: "10px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
          </svg>
        )}
      </PostDate>
      <Button>
        Add on calendar
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
        </svg>
      </Button>
    </BlueCardContainer>
  );
}
