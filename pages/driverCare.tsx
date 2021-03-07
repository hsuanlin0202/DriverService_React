import React from "react";
import LayoutMobile from "../components/LayoutMobile";
import Button from "../components/Drivers/DriverButton";
import DriverContent from "../components/Drivers/DriverContent";

export default function DriverCare() {
  const color = "blue-700";
  const bgColor = "bg-white";

  // console.log(process.env.MEMBER_OLD);
  return (
    <LayoutMobile title="長照專車" bgColor={bgColor}>
      <DriverContent
        video="https://www.youtube.com/embed/OPcAuRgWHFI"
        title="身障復健、無礙出遊"
        content={{
          items: [
            {
              title: "服務介紹：",
              content:
                "有鑑於台灣社會漸趨高齡化，以及身障人士在外交通上的不便利，公司專車因此投入長照專車及無障礙接送服務。期望以自身在交通運輸上的投入，滿足所有人事在行動出遊的需求。提供專業駕駛及合格福祉車輛，並做好車內完整清潔消毒，讓消費者輕鬆上車、外出更安全。",
            },
            {
              title: "實際故事案例：",
              content:
                "有別於復康巴士，自從公司專車提供偏鄉地區的長照接送服務後，大大提升我們這些居住在偏鄉地區的居民，前往市區復健的意願。不僅縮短到市區的路程時間外，也解決路途的不便性。重點是司機都受過專業訓練，很細心耐心，也讓人很放心～",
            },
            {
              title: "策略夥伴：",
              content: "新北長照平台。坪林、平溪、雙溪、貢寮…等衛生所。",
            },
          ],
        }}
        color={color}
      />
      <div className="w-full h-32"></div>
      <Button color={color} href="/driverCareForm">
        立即預約
      </Button>
      <span id="acctid" className="hidden"></span>
      <button className="hidden" id="flutterCall" onClick={() => {}}></button>
    </LayoutMobile>
  );
}
