"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  return (
    <main className="py-32 max-h-screen overflow-y-hidden flex flex-col justify-center items-center before:absolute before:h-[200px] before:w-[300px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[100px] after:w-[200px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40">
      <Image
        className=" w-auto h-auto "
        src="/progie.png"
        alt="Progie Logo"
        width={300}
        height={37}
        priority
      />

      <Audio audioSrc="/ambient-audio.mp3" />

      <button className="text-sm font-mono border-[0.2px] border-slate-700 border-opacity-30 px-10 py-2 rounded-3xl text-[rgb(227,226,224)]">
        Manifesto
      </button>
    </main>
  );
}

const Audio = ({ audioSrc }: any) => {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    const audio: any = audioRef.current;
    if (play) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlay(!play);
  };

  return (
    <div className="fixed right-0 mr-28 z-10">
      <audio ref={audioRef} loop>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
      <button className="" onClick={handleClick}>
        <svg
          width="34"
          height="34"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1"
            width="43"
            height="43"
            rx="14.5"
            stroke="white"
            className=" border-slate-700"
            strokeOpacity="0.2"
          ></rect>

          <path
            className="js-manifesto:soundSpeaker"
            d="M23.2677 13.5198C23.1803 13.4781 23.0828 13.4622 22.9867 13.474C22.8906 13.4857 22.7998 13.5246 22.725 13.586L17.153 18.172H14.3709C13.851 18.1727 13.3527 18.3797 12.9853 18.7475C12.618 19.1153 12.4116 19.6139 12.4116 20.1338V23.8765C12.4123 24.3961 12.6188 24.8943 12.9861 25.262C13.3533 25.6297 13.8512 25.8369 14.3709 25.8383H17.153L22.7326 30.4242C22.8075 30.4857 22.8982 30.5246 22.9943 30.5363C23.0905 30.548 23.1879 30.5321 23.2753 30.4905C23.3624 30.449 23.436 30.3836 23.4874 30.302C23.5388 30.2204 23.566 30.1258 23.5658 30.0293V13.9809C23.5653 13.8836 23.537 13.7885 23.4841 13.7068C23.4313 13.6251 23.3562 13.5602 23.2677 13.5198ZM22.5416 28.9414L17.6626 24.9338C17.5719 24.8599 17.4586 24.8194 17.3416 24.8191H14.3709C14.1213 24.8185 13.8822 24.7189 13.7059 24.5421C13.5297 24.3654 13.4307 24.126 13.4307 23.8765V20.1236C13.4334 19.8758 13.5336 19.639 13.7095 19.4645C13.8855 19.29 14.123 19.1918 14.3709 19.1911H17.3314C17.4531 19.1904 17.5706 19.1461 17.6626 19.0663L22.5416 15.0561V28.9414Z"
            fill="#5B5A55"
            style={{ fill: "rgb(227, 226, 224)" }}
          ></path>

          <g
            className="js-manifesto:soundCross"
            style={{ opacity: play ? 1 : 0 }}
          >
            <path
              d="M31.4663 21.9935L33.4408 20.019C33.5285 19.9219 33.5754 19.7948 33.572 19.6641C33.5685 19.5333 33.5149 19.4089 33.4223 19.3166C33.3296 19.2242 33.205 19.1711 33.0742 19.1681C32.9435 19.1651 32.8166 19.2125 32.7198 19.3005L30.7453 21.2802L28.7707 19.3056C28.674 19.2176 28.5471 19.1702 28.4163 19.1732C28.2855 19.1762 28.1609 19.2293 28.0682 19.3217C27.9756 19.414 27.922 19.5384 27.9185 19.6692C27.9151 19.7999 27.9621 19.927 28.0497 20.0241L30.0242 21.9935L28.0497 23.9681C28.0024 24.0154 27.9648 24.0716 27.9392 24.1335C27.9136 24.1953 27.9004 24.2616 27.9004 24.3286C27.9004 24.3955 27.9136 24.4618 27.9392 24.5237C27.9648 24.5855 28.0024 24.6417 28.0497 24.6891C28.0971 24.7364 28.1533 24.774 28.2151 24.7996C28.277 24.8252 28.3433 24.8384 28.4102 24.8384C28.4772 24.8384 28.5435 24.8252 28.6053 24.7996C28.6672 24.774 28.7234 24.7364 28.7707 24.6891L30.7453 22.7145L32.7198 24.6891C32.8149 24.7848 32.9441 24.8388 33.079 24.8394C33.1463 24.8394 33.2128 24.8262 33.2749 24.8004C33.337 24.7746 33.3934 24.7368 33.4408 24.6891C33.4882 24.6417 33.5258 24.5855 33.5514 24.5237C33.577 24.4618 33.5902 24.3955 33.5902 24.3286C33.5902 24.2616 33.577 24.1953 33.5514 24.1334C33.5258 24.0716 33.4882 24.0154 33.4408 23.9681L31.4663 21.9935Z"
              fill="#E9E8E3"
            ></path>
          </g>

          <g
            className="manifesto__audio-btn__wave | js-manifesto:soundWave"
            style={{ opacity: play ? 0 : 1 }}
          >
            <path
              d="M26.5565 27.7032C26.4445 27.703 26.3357 27.6659 26.2469 27.5977C26.1581 27.5294 26.0942 27.4338 26.0652 27.3256C26.0362 27.2175 26.0437 27.1027 26.0864 26.9992C26.1292 26.8957 26.2048 26.8091 26.3017 26.7529C27.1361 26.2713 27.829 25.5785 28.3107 24.7442C28.7924 23.9099 29.046 22.9635 29.046 22.0001C29.046 21.0367 28.7924 20.0902 28.3107 19.2559C27.829 18.4216 27.1361 17.7288 26.3017 17.2472C26.1908 17.1767 26.1114 17.0661 26.0802 16.9384C26.0489 16.8107 26.0682 16.676 26.1339 16.5622C26.1997 16.4484 26.3069 16.3644 26.4331 16.3278C26.5593 16.2912 26.6948 16.3047 26.8113 16.3657C27.8007 16.9364 28.6224 17.7576 29.1938 18.7466C29.7651 19.7357 30.0659 20.8578 30.0659 22.0001C30.0659 23.1423 29.7651 24.2644 29.1938 25.2535C28.6224 26.2426 27.8007 27.0638 26.8113 27.6345C26.7339 27.6794 26.646 27.7031 26.5565 27.7032Z"
              fill="#E3E2E0"
            ></path>
            <path
              d="M25.3769 25.1835C25.2871 25.1839 25.1988 25.1605 25.121 25.1157C25.0431 25.071 24.9785 25.0065 24.9336 24.9287C24.8998 24.8707 24.8778 24.8066 24.8688 24.7401C24.8599 24.6735 24.8642 24.6059 24.8815 24.541C24.8987 24.4762 24.9287 24.4153 24.9695 24.3621C25.0104 24.3088 25.0614 24.2641 25.1196 24.2306C25.5122 24.0045 25.8383 23.679 26.0651 23.2867C26.2919 22.8944 26.4113 22.4493 26.4113 21.9962C26.4113 21.5431 26.2919 21.098 26.0651 20.7058C25.8383 20.3135 25.5122 19.9879 25.1196 19.7618C25.0587 19.73 25.0048 19.6861 24.9613 19.633C24.9178 19.5798 24.8855 19.5183 24.8664 19.4523C24.8472 19.3863 24.8416 19.3171 24.8499 19.2489C24.8582 19.1807 24.8802 19.1148 24.9146 19.0553C24.949 18.9958 24.9951 18.9439 25.05 18.9027C25.105 18.8614 25.1678 18.8318 25.2345 18.8154C25.3013 18.7991 25.3706 18.7964 25.4384 18.8075C25.5063 18.8187 25.5711 18.8434 25.6291 18.8803C26.1768 19.1958 26.6317 19.6501 26.948 20.1973C27.2643 20.7445 27.4308 21.3654 27.4308 21.9975C27.4308 22.6296 27.2643 23.2505 26.948 23.7977C26.6317 24.345 26.1768 24.7992 25.6291 25.1147C25.5524 25.1592 25.4655 25.1829 25.3769 25.1835Z"
              fill="#E3E2E0"
            ></path>
            <path
              d="M27.5986 30.5058C27.4866 30.5056 27.3778 30.4685 27.289 30.4003C27.2002 30.332 27.1363 30.2364 27.1073 30.1282C27.0783 30.02 27.0858 29.9053 27.1285 29.8018C27.1713 29.6983 27.2469 29.6117 27.3438 29.5555C28.6702 28.7899 29.7717 27.6886 30.5376 26.3624C31.3034 25.0361 31.7066 23.5316 31.7066 22.0001C31.7066 20.4686 31.3034 18.9641 30.5376 17.6378C29.7717 16.3115 28.6702 15.2102 27.3438 14.4447C27.2858 14.4112 27.2349 14.3667 27.194 14.3135C27.1532 14.2604 27.1232 14.1998 27.1059 14.1351C27.0885 14.0703 27.084 14.0028 27.0927 13.9364C27.1014 13.87 27.1231 13.8059 27.1565 13.7479C27.19 13.6898 27.2346 13.6389 27.2877 13.5981C27.3408 13.5573 27.4015 13.5273 27.4662 13.5099C27.5309 13.4925 27.5984 13.4881 27.6648 13.4967C27.7312 13.5054 27.7953 13.5271 27.8534 13.5606C29.3342 14.4161 30.5638 15.6462 31.4186 17.1274C32.2735 18.6086 32.7236 20.2886 32.7236 21.9988C32.7236 23.709 32.2735 25.389 31.4186 26.8702C30.5638 28.3514 29.3342 29.5815 27.8534 30.437C27.7759 30.4819 27.6881 30.5057 27.5986 30.5058Z"
              fill="#E3E2E0"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Docs{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Learn{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Learn about Next.js in an interactive course with&nbsp;quizzes!
        </p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Templates{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Explore the Next.js 13 playground.
        </p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Deploy{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </a>
    </div>
  );
};
