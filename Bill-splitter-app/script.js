import React, { useState } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const splitWith = ["1", "2", "3"];
const imageBase = `https://assets.codepen.io/3685267/bill-splitter-app-`


function App() {
  return (
    <>
      <div className="h-[700px] flex space-x-12 items-center">
        <ScreenA />
        <ScreenB />
      </div>
    </>
  );
}


function Screen({ children, className }) {
  return (
    <>
      <div
        className={`bg-[#48426d] screen-shadow w-80 h-[640px]  p-7 rounded-3xl ${className}`}
      >
        {children}
      </div>
    </>
  );
}


function ScreenA() {
  return (
    <Screen className="-translate-y-5">
      <Header />
      <TotalBill />
      <PrvSplit />
      <NearbyFriends />
    </Screen>
  );
}


function Header() {
  return (
    <div className="flex justify-between mt-3">
      <div className="yellow-text text-lg">
        <div className=""> Orix </div>
        <div className="font-bold"> Bill Splitter </div>
      </div>
      <div className="w-16 h-16 relative">
        <div
          className="absolute inset-0 bg-[#342f52] overflow-hidden"
          style={{ border: "2px solid #544e75", borderRadius: "15px" }}
        >
          <div className="bg-[#48426c] text-center absolute inset-x-0 bottom-0 text-xs font-bold py-1">
            Sajon
          </div>
        </div>

        <img
          src={`${imageBase}8.png`}
          className="w-14 h-14 absolute"
          style={{
            left: "50%",
            top: "-19px",
            transform: "translate(-50%, 0)",
          }}
        />
      </div>
    </div>
  );
}


function TotalBill() {
  return (
    <div className="bg-[#edc08c]  custom-border mt-6 flex p-6 shadow-md">
      <div className="grow">
        <div className="text-[#48426d] font-semibold text-sm"> Total Bill </div>
        <div className="text-[#48426d] font-bold text-xl mt-1"> $750.86 </div>
        <button className="bg-[#48426d] yellow-text font-bold py-4 px-4 mt-3 text-sm custom-border ">
          Split Now
        </button>
      </div>
      <div className="shrink-0 inline-flex flex-col items-center">
        <div className="text-[#48426d] font-bold text-sm"> Split With </div>
        <div className="w-14 h-14 mt-2 relative">
          <div className="absolute inset-x-0 top-0 bg-white flex justify-center rounded-lg shadow-lg">
            <div className="w-9 pt-5 pb-2">
              {splitWith.map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full overflow-hidden bg-contain"
                  style={{
                    backgroundImage: `url("${imageBase}${i}.png")`,
                    marginTop: "-6px",
                    padding: "2px",
                    border: "2px solid #fff",
                  }}
                ></div>
              ))}
              <div
                className="w-9 h-9 rounded-full overflow-hidden grid place-items-center"
                style={{
                  background: "#f1aa9b",
                  marginTop: "-6px",
                  padding: "2px",
                  border: "2px solid #fff",
                }}
              >
                <PlusIcon className="size-4" strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function PrvSplit() {
  return (
    <div className="bg-[#373258] h-16 mt-6 custom-border flex items-center shadow-md">
      <div className="h-16 w-16 grid place-items-center">
        <div className="h-11 w-11 rounded-full bg-[#48426d] grid place-items-center yellow-text blue-shadow">
          <ExclamationCircleIcon className="size-6" />
        </div>
      </div>
      <div className="ml-1">
        <div className="text-sm font-semibold yellow-text">
          Your previous split
        </div>
        <div className="text-xs mt-1"> $678.56 </div>
      </div>
    </div>
  );
}


const nearbyItems = [
  { name: "Anna", image: "6" },
  { name: "Khalifa", image: "7" },
  { name: "Lisa", image: "9" },
];
const recentItems = [
  { name: "Sing", image: "7" },
  { name: "Alex", image: "3" },
  { name: "Bryan", image: "4" },
  { name: "Mike", image: "2" },
];


function NearbyFriends() {
  return (
    <div className=" mt-6 rounded-3xl relative">
      <svg
        width="264"
        height="224"
        viewBox="0 0 264 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 84V206C0 216.493 8.50659 225 19 225H245C255.493 225 264 216.493 264 206V19C264 8.50659 255.493 0 245 0H83.1214C72.628 0 64.1214 8.50659 64.1214 19V46C64.1214 56.4934 55.6149 65 45.1214 65H19C8.50659 65 0 73.5066 0 84Z"
          fill="#373258"
        />
      </svg>
      <div className="w-14 h-14 bg-[#edc08c] absolute top-0 left-0 grid place-items-center text-[#48426d] custom-border ">
        <MagnifyingGlassIcon className="w-6 h-6" />
      </div>
      <div className="absolute inset-0 p-4">
        <div className="" style={{ paddingLeft: "64px" }}>
          <div className="flex items-center justify-between text-xs pb-2">
            <div className="yellow-text"> Nearby Friends </div>
            <div className=""> See all </div>
          </div>
          <div className="flex  justify-between ">
            {nearbyItems.map(({ name, image }) => (
              <div
                className="w-12 bg-[#48426d] rounded-full pb-2.5 relative"
                key={name}
              >
                <div className="w-12 h-11 grid place-items-center">
                  <div
                    className="w-8 h-8 rounded-full bg-contain"
                    style={{
                      backgroundImage: `url("${imageBase}${image}.png")`,

                      padding: "2px",
                      border: "2px solid #fff",
                    }}
                  ></div>
                </div>
                <div
                  className="text-center mt-1 font-semibold"
                  style={{ fontSize: "10px" }}
                >
                  {name}
                </div>

                <div
                  className="absolute w-4 h-4 bg-[#cea87d] rounded-full grid place-items-center"
                  style={{
                    left: "50%",
                    bottom: "-12px",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  <PlusIcon className="w-2 h-2" strokeWidth={5} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs mt-4 mb-2 yellow-text"> Recently Split </div>

        <div className="flex  justify-between ">
          {recentItems.map(({ name, image }) => (
            <div className="w-10" key={name}>
              <div
                className="w-10 h-10 rounded-full bg-contain"
                style={{
                  backgroundImage: `url("${imageBase}${image}.png")`,

                  padding: "2px",
                  border: "2px solid #fff",
                }}
              ></div>
              <div className="text-xs text-center mt-1"> {name} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function ScreenB() {
  return (
    <Screen className="translate-y-5">
      <SplitNow />
      <Receipt />
      <SliderSet />
      <ConfirmButton />
    </Screen>
  );
}


function SplitNow() {
  return (
    <div className="h-20 rounded-xl flex justify-between items-center ">
      <button className="h-14 w-14 bg-[#373258] rounded-xl yellow-text grid place-items-center shadow-md">
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <div className="yellow-text inline-flex items-center">
        <div className="text-lg "> Split Now </div>
        <div className="h-10 w-10 yellow-text grid place-items-center">
          <EllipsisVerticalIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}


function Receipt() {
  return (
    <div className=" mt-6 relative">
      <div className="">
        <svg
          width="264"
          height="196"
          viewBox="0 0 264 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_30_2)">
            <rect width="264" height="196" rx="19" fill="#EDC08C" />
            <line
              x1="0"
              y1="47"
              x2="264"
              y2="47"
              stroke="#48426D"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="8 8"
            />
            <circle cx="264.5" cy="47.5" r="12.5" fill="#48426D" />
            <circle cx="0.5" cy="47.5" r="12.5" fill="#48426D" />
          </g>
          <defs>
            <clipPath id="clip0_30_2">
              <rect width="264" height="196" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0  px-4 pt-2 pb-2 ">
        <div className="flex justify-center">
          <button className="bg-[#363156] py-1 px-6 rounded-md text-sm font-bold">
            Receipt
          </button>
        </div>
        <div className="flex text-[#48426d] mt-6">
          <div className="w-1/2">
            <div className="text-sm"> Title </div>
            <div className="font-semibold"> Team Dinner </div>
          </div>
          <div className="w-1/2 pl-3 text-right">
            <div className="text-sm"> Total bill </div>
            <div className="font-semibold "> $750.86 </div>
          </div>
        </div>
        <div className="bg-[#48426d] rounded-xl mt-2 py-2">
          <div className="flex justify-center">
            <div className="inline-flex">
              {splitWith.map((i) => (
                <div
                  className="w-9 h-9 rounded-full bg-contain"
                  key={i}
                  style={{
                    border: "3px solid #48426d",
                    backgroundImage: `url("${imageBase}${i}.png")`,
                    marginLeft: "-5px",
                    zIndex: i === 1 ? 10 : 5,
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="text-center font-semibold text-sm mt-1">
            Splitting With
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

const sliderData = [
  ["Me", "450", 3, "#9ac3ef", 46],
  ["Cody", "200.86", 2, "#b79bf1", 72],
  ["Khalifa", "100", 7, "#eba596", 32],
];

function SliderSet() {
  return (
    <div className="">
      {sliderData.map(([name, price, key, color, value]) => (
        <div className="mt-3 text-sm font-semibold" key={key}>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center">
              <div
                className="w-7 h-7 rounded-full bg-contain"
                style={{
                  border: "3px solid #fff",
                  backgroundImage: `url("${imageBase}${key}.png")`,
                }}
              ></div>
              <div className="ml-2"> {name} </div>
            </div>

            <div className=""> ${price} </div>
          </div>
          <div className="mt-2">
            <Slider color={color} value={value} />
          </div>
        </div>
      ))}
    </div>
  );
}

const ticks = Array(16)
  .fill(0)
  .map((i, j) => j);

function Slider({ color, value: initValue }) {
  const [value, setValue] = useState(initValue);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value, 10));
  };
  return (
    <div className="relative w-full" style={{ height: "24px" }}>
      <div
        className="absolute inset-x-0 rounded-full blue-shadow-inner"
        style={{
          height: "16px",
          top: "50%",
          transform: "translate(0,-50%)",
          background: "#373258",
        }}
      ></div>

      <div
        className="absolute left-0 rounded-l-full"
        style={{
          height: "16px",
          top: "50%",
          transform: "translate(0,-50%)",
          background: color,
          width: `12px`,
        }}
      ></div>
      <div
        className="absolute rounded-r-full"
        style={{
          height: "16px",
          top: "50%",
          transform: "translate(0,-50%)",
          left: `12px`,
          right: "12px",
        }}
      >
        <div
          className=""
          style={{ height: "16px", width: `${value}%`, background: color }}
        ></div>
      </div>

      <div
        className="absolute inset-x-0 rounded-full flex items-center justify-around"
        style={{
          height: "16px",
          top: "50%",
          transform: "translate(0,-50%)",
        }}
      >
        {ticks.map((i) => (
          <div
            className="rounded-full"
            style={
              i % 3 === 0
                ? {
                    opacity: "80%",
                    width: "5px",
                    height: "5px",
                    background: "#fcd3bc",
                    border: "1px solid white",
                  }
                : {
                    opacity: "80%",
                    width: "2px",
                    height: "2px",
                    background: "#fff",
                  }
            }
            key={i}
          >
            {" "}
          </div>
        ))}
      </div>
      <div
        className="absolute"
        style={{
          left: "12px",
          right: "12px",
          height: "24px",
          top: "50%",
          transform: "translate(0,-50%)",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            left: `${value}%`,
            top: 0,
            height: "24px",
            width: "24px",
            background: "#edc08c",
            transform: "translate(-50%, 0)",
            border: "2px solid #fff",
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(100, 100)">
              <circle cx="0" cy="0" r="90" fill="#edc08c" />
              <circle cx="64" cy="0" r="8" fill="#FFF" />
              <circle cx="45" cy="45" r="8" fill="#FFF" />
              <circle cx="0" cy="64" r="8" fill="#FFF" />
              <circle cx="-46" cy="45" r="8" fill="#FFF" />
              <circle cx="-64" cy="0" r="8" fill="#FFF" />
              <circle cx="-46" cy="-46" r="8" fill="#FFF" />
              <circle cx="-1" cy="-64" r="8" fill="#FFF" />
              <circle cx="45" cy="-46" r="8" fill="#FFF" />
            </g>
          </svg>
        </div>
      </div>

      <input
        type="range"
        id="demoAInput"
        name="demoAInput"
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}


function ConfirmButton() {
  return (
    <div className="bg-[#373258] mt-6 rounded-full p-2 flex items-center blue-shadow-inner">
      <button className="bg-[#48426d] py-2.5 px-4 rounded-full text-sm font-bold yellow-text blue-shadow">
        Confirm Split
      </button>
      <div className="inline-flex ml-5">
        <Arrow />
        <Arrow />
        <Arrow />
        <Arrow />
        <Arrow />
      </div>
    </div>
  );
}


function Arrow() {
  return (
    <div
      className="h-6 w-6 grid place-items-center arrow"
      style={{ marginLeft: "-8px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}


function PlusIcon({ className, strokeWidth }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}


function ExclamationCircleIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
      />
    </svg>
  );
}


function MagnifyingGlassIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}


function ChevronLeftIcon({ className }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </>
  );
}


function EllipsisVerticalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
}


ReactDOM.render(<App />,
document.getElementById("root"))