import React from "react";
import LayoutMobile from "../components/LayoutMobile";
import Button from "../components/Drivers/DriverButton";
import DriverContent from "../components/Drivers/DriverContent";
import TicketCarousel from "../components/Widgets/Carousel";

export default function DriverTrip() {
  const color = "blue-700";
  const bgColor = "bg-white";
  return (
    <LayoutMobile title="旅遊專車" bgColor={bgColor}>
      <DriverContent
        video="https://www.youtube.com/embed/X6gO_KDNzVs"
        title="輕鬆出遊、FUN心玩"
        content={{
          items: [
            {
              title: "服務介紹：",
              content:
                "想開心全家出遊，坐位不夠該如何是好？旅遊景點停車不便、大眾交通運輸不易到達、路況不熟，該怎麼辦？　公司旅遊專車，提供您各式車款的選擇，並提供優良駕駛，讓親朋好友輕鬆出遊，平安回家。　更特別提供預約旅遊專車送五星級飯店住宿的服務，讓你租車＋住宿一次搞定！",
            },
            {
              title: "實際故事案例：",
              content:
                "出遊玩最麻煩的就是行程規劃。尤其是帶家人又不喜歡到人擠人的觀光景點，實在很懊惱。這一次所幸不想自己開車，預約了公司旅遊專車服務，讓自己和家人輕鬆一下。司機不僅開車很穩外，也會推薦一些當地的美食、私密景點，讓這一趟家庭旅遊非常舒適愉快。",
            },
            {
              title: "策略夥伴：",
              content:
                "劍湖山王子大飯店、長榮文苑酒店(嘉義)…等14家菁鑽聯盟精選飯店。KKDAY旅遊平台。",
            },
          ],
        }}
        color={color}
      />
      <TicketCarousel />
      <div className="w-full h-24"></div>
      <Button color={color} href="/driverTravelForm">
        立即預約
      </Button>
      <span id="acctid" className="hidden"></span>
      <button className="hidden" id="flutterCall" onClick={() => {}}></button>
    </LayoutMobile>
  );
}
