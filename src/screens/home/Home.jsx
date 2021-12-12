import Information from "components/Information/Information";
import NewsLetter from "components/NewsLetter/NewsLetter";
import Picture from "components/Picture/Picture";
import useSessionStorage from "hooks/useSessioStorage";
import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import "./Home.css";

function Home() {
  const [text, setText] = useSessionStorage("homeText");
  useEffect(() => {
    text ??
      fetch("/api/text/Home")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setText(() => data.content);
        })
        .catch((err) => {
          console.log(err);
        });
  });
  return text ? (
    <div>
      <Banner lines={text.banner.lines} buttons={text.banner.buttons} />
      <div style={{ paddingBottom: "5%", paddingTop: "7%" }}>
        {text.showNewsLetter ? (
          <div style={{ paddingBottom: "4% " }}>
            <NewsLetter />
          </div>
        ) : null}
        <Information info={text.information} />
      </div>
      <div className="base-links">
        {text.callToAction.map((action) => {
          return (
            <div className="flex-inline">
              <Picture s3ImgKey={action.pic.s3ImgKey} alt={action.pic.alt} />
              <a href={action.url}>
                <button>{action.text}</button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div style={{ height: "100vh" }}></div>
  );
}

export default Home;
