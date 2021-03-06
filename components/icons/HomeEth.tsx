import { darkColorList } from "@utils/colorList"
import { useAppContext } from "@components/ui/context"

const HomeEth = ({ ...props }) => {
  const { color1, color2 } = useAppContext()

  return (
    <div className="relative flex items-center justify-center w-72 h-72 group">
      <svg
        className="absolute transition-opacity duration-200 opacity-0 w-28 h-28 group-hover:opacity-75"
        viewBox="0 0 798 1299"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M398.409 0L389.701 29.5797V887.837L398.409 896.525L796.795 661.036L398.409 0Z"
          fill={color2[0]}
        />
        <path
          d="M398.396 0L0 661.036L398.396 896.525V479.951V0Z"
          fill={color2[0]}
        />
        <path
          d="M398.412 971.988L393.504 977.973V1283.7L398.412 1298.03L797.041 736.621L398.412 971.988Z"
          fill={color2[0]}
        />
        <path
          d="M398.396 1298.03V971.988L0 736.621L398.396 1298.03Z"
          fill={color2[0]}
        />
        <path
          d="M398.416 896.511L796.802 661.022L398.416 479.937V896.511Z"
          fill={color2[0]}
        />
        <path
          d="M0 661.022L398.396 896.511V479.937L0 661.022Z"
          fill={color2[0]}
        />
      </svg>
      <svg
        className="absolute w-24 h-24 opacity-80 drop-shadow-random-strong animate-ping-slow"
        viewBox="0 0 798 1299"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M398.409 0L389.701 29.5797V887.837L398.409 896.525L796.795 661.036L398.409 0Z"
          fill={color2[0]}
        />
        <path
          d="M398.396 0L0 661.036L398.396 896.525V479.951V0Z"
          fill={color2[0]}
        />
        <path
          d="M398.412 971.988L393.504 977.973V1283.7L398.412 1298.03L797.041 736.621L398.412 971.988Z"
          fill={color2[0]}
        />
        <path
          d="M398.396 1298.03V971.988L0 736.621L398.396 1298.03Z"
          fill={color2[0]}
        />
        <path
          d="M398.416 896.511L796.802 661.022L398.416 479.937V896.511Z"
          fill={color2[0]}
        />
        <path
          d="M0 661.022L398.396 896.511V479.937L0 661.022Z"
          fill={color2[0]}
        />
      </svg>
      <svg
        className="absolute w-24 h-24 drop-shadow-random-strong"
        viewBox="0 0 798 1299"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M398.914 0L390.206 29.5797V887.837L398.914 896.525L797.3 661.036L398.914 0Z"
          fill="#B8FAF6"
        />
        <path
          d="M398.901 0L0.505127 661.036L398.901 896.525V479.951V0Z"
          fill="#F0CDC2"
        />
        <path
          d="M398.917 971.989L394.009 977.974V1283.7L398.917 1298.03L797.546 736.621L398.917 971.989Z"
          fill="#C9B3F5"
        />
        <path
          d="M398.901 1298.03V971.989L0.505127 736.621L398.901 1298.03Z"
          fill="#F0CDC2"
        />
        <path
          d="M398.921 896.511L797.307 661.022L398.921 479.937V896.511Z"
          fill="#C9B3F5"
        />
        <path
          d="M0.505127 661.022L398.901 896.511V479.937L0.505127 661.022Z"
          fill="#88AAF1"
        />
      </svg>

      <svg
        viewBox="0 0 2650 2998"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute w-full h-full spin-el ${props.className}`}
      >
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="2050"
          y="597"
          width="600"
          height="600"
        >
          <rect x="2050" y="597" width="600" height="600" fill="#494949" />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M2174.45 961.562L2353.04 728.685C2354.37 726.954 2356.42 725.971 2358.6 726.09C2373.57 726.909 2435.18 731.338 2502.29 751.176C2569.41 771.018 2616.35 804.439 2627.47 812.832C2629.1 814.061 2630 815.974 2630 818.014V1015.77C2630 1018.69 2628.12 1021.28 2625.34 1022.19L2181.9 1166.39C2177.54 1167.8 2173.06 1164.55 2173.06 1159.97V965.67C2173.06 964.185 2173.55 962.741 2174.45 961.562Z"
            fill="url(#paint6_linear)"
            stroke="white"
            strokeWidth="35"
          />
          <path
            d="M2071.45 865.499L2250.18 632.435C2251.51 630.704 2253.56 629.721 2255.74 629.84C2270.72 630.66 2332.4 635.092 2399.59 654.954C2462.74 673.62 2508.04 704.293 2522.5 714.893C2525.67 717.215 2527.43 720.917 2527.43 724.845V929.564C2527.43 932.488 2525.55 935.08 2522.77 935.984L2078.84 1080.34C2074.48 1081.76 2070 1078.51 2070 1073.92V869.759C2070 868.219 2070.51 866.722 2071.45 865.499Z"
            fill="black"
          />
          <path
            d="M2525 719.5L2073 866.5M2399.59 654.954C2462.74 673.62 2508.04 704.293 2522.5 714.893C2525.67 717.215 2527.43 720.917 2527.43 724.845V929.564C2527.43 932.488 2525.55 935.08 2522.77 935.984L2078.84 1080.34C2074.48 1081.76 2070 1078.51 2070 1073.92V869.759C2070 868.219 2070.51 866.722 2071.45 865.499L2250.18 632.435C2251.51 630.704 2253.56 629.721 2255.74 629.84C2270.72 630.66 2332.4 635.092 2399.59 654.954Z"
            stroke="white"
            strokeWidth="35"
          />
        </g>
        <mask
          id="mask1"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="597"
          width="600"
          height="600"
        >
          <rect y="597" width="600" height="600" fill="#494949" />
        </mask>
        <g mask="url(#mask1)">
          <path
            d="M124.453 961.562L303.04 728.685C304.368 726.954 306.423 725.971 308.602 726.09C323.566 726.909 385.176 731.338 452.29 751.176C519.413 771.018 566.351 804.439 577.468 812.832C579.096 814.061 580 815.974 580 818.014V1015.77C580 1018.69 578.118 1021.28 575.337 1022.19L131.898 1166.39C127.536 1167.8 123.06 1164.55 123.06 1159.97V965.67C123.06 964.185 123.549 962.741 124.453 961.562Z"
            fill="url(#paint1_linear)"
            stroke="white"
            strokeWidth="35"
          />
          <path
            d="M21.4492 865.499L200.18 632.435C201.507 630.704 203.563 629.721 205.742 629.84C220.716 630.66 282.396 635.092 349.587 654.954C412.736 673.62 458.038 704.293 472.503 714.893C475.671 717.215 477.435 720.917 477.435 724.845V929.564C477.435 932.488 475.552 935.08 472.772 935.984L28.8423 1080.34C24.4802 1081.76 20.0039 1078.51 20.0039 1073.92V869.759C20.0039 868.219 20.5119 866.722 21.4492 865.499Z"
            fill="black"
          />
          <path
            d="M475 719.5L22.9999 866.5M349.587 654.954C412.736 673.62 458.038 704.293 472.503 714.893C475.671 717.215 477.435 720.917 477.435 724.845V929.564C477.435 932.488 475.552 935.08 472.772 935.984L28.8423 1080.34C24.4802 1081.76 20.0039 1078.51 20.0039 1073.92V869.759C20.0039 868.219 20.5119 866.722 21.4492 865.499L200.18 632.435C201.507 630.704 203.563 629.721 205.742 629.84C220.716 630.66 282.396 635.092 349.587 654.954Z"
            stroke="white"
            strokeWidth="35"
          />
        </g>
        <mask
          id="mask2"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="2050"
          y="1798"
          width="600"
          height="600"
        >
          <rect x="2050" y="1798" width="600" height="600" fill="#494949" />
        </mask>
        <g mask="url(#mask2)">
          <path
            d="M2174.45 2162.56L2353.04 1929.69C2354.37 1927.95 2356.42 1926.97 2358.6 1927.09C2373.57 1927.91 2435.18 1932.34 2502.29 1952.18C2569.41 1972.02 2616.35 2005.44 2627.47 2013.83C2629.1 2015.06 2630 2016.97 2630 2019.01V2216.77C2630 2219.69 2628.12 2222.28 2625.34 2223.19L2181.9 2367.39C2177.54 2368.8 2173.06 2365.55 2173.06 2360.97V2166.67C2173.06 2165.18 2173.55 2163.74 2174.45 2162.56Z"
            fill="url(#paint2_linear)"
            stroke="white"
            strokeWidth="35"
          />
          <path
            d="M2071.45 2066.5L2250.18 1833.44C2251.51 1831.7 2253.56 1830.72 2255.74 1830.84C2270.72 1831.66 2332.4 1836.09 2399.59 1855.95C2462.74 1874.62 2508.04 1905.29 2522.5 1915.89C2525.67 1918.21 2527.43 1921.92 2527.43 1925.84V2130.56C2527.43 2133.49 2525.55 2136.08 2522.77 2136.98L2078.84 2281.34C2074.48 2282.76 2070 2279.51 2070 2274.92V2070.76C2070 2069.22 2070.51 2067.72 2071.45 2066.5Z"
            fill="black"
          />
          <path
            d="M2525 1920.5L2073 2067.5M2399.59 1855.95C2462.74 1874.62 2508.04 1905.29 2522.5 1915.89C2525.67 1918.21 2527.43 1921.92 2527.43 1925.84V2130.56C2527.43 2133.49 2525.55 2136.08 2522.77 2136.98L2078.84 2281.34C2074.48 2282.76 2070 2279.51 2070 2274.92V2070.76C2070 2069.22 2070.51 2067.72 2071.45 2066.5L2250.18 1833.44C2251.51 1831.7 2253.56 1830.72 2255.74 1830.84C2270.72 1831.66 2332.4 1836.09 2399.59 1855.95Z"
            stroke="white"
            strokeWidth="35"
          />
        </g>
        <mask
          id="mask3"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="1798"
          width="600"
          height="600"
        >
          <rect y="1798" width="600" height="600" fill="#494949" />
        </mask>
        <g mask="url(#mask3)">
          <path
            d="M124.453 2162.56L303.04 1929.69C304.368 1927.95 306.423 1926.97 308.602 1927.09C323.566 1927.91 385.176 1932.34 452.29 1952.18C519.413 1972.02 566.351 2005.44 577.468 2013.83C579.096 2015.06 580 2016.97 580 2019.01V2216.77C580 2219.69 578.118 2222.28 575.337 2223.19L131.898 2367.39C127.536 2368.8 123.06 2365.55 123.06 2360.97V2166.67C123.06 2165.18 123.549 2163.74 124.453 2162.56Z"
            fill="url(#paint3_linear)"
            stroke="white"
            strokeWidth="35"
          />
          <path
            d="M21.4492 2066.5L200.18 1833.44C201.507 1831.7 203.563 1830.72 205.742 1830.84C220.716 1831.66 282.396 1836.09 349.587 1855.95C412.736 1874.62 458.038 1905.29 472.503 1915.89C475.671 1918.21 477.435 1921.92 477.435 1925.84V2130.56C477.435 2133.49 475.552 2136.08 472.772 2136.98L28.8423 2281.34C24.4802 2282.76 20.0039 2279.51 20.0039 2274.92V2070.76C20.0039 2069.22 20.5119 2067.72 21.4492 2066.5Z"
            fill="black"
          />
          <path
            d="M475 1920.5L22.9999 2067.5M349.587 1855.95C412.736 1874.62 458.038 1905.29 472.503 1915.89C475.671 1918.21 477.435 1921.92 477.435 1925.84V2130.56C477.435 2133.49 475.552 2136.08 472.772 2136.98L28.8423 2281.34C24.4802 2282.76 20.0039 2279.51 20.0039 2274.92V2070.76C20.0039 2069.22 20.5119 2067.72 21.4492 2066.5L200.18 1833.44C201.507 1831.7 203.563 1830.72 205.742 1830.84C220.716 1831.66 282.396 1836.09 349.587 1855.95Z"
            stroke="white"
            strokeWidth="35"
          />
        </g>
        <mask
          id="mask4"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="1025"
          y="2398"
          width="600"
          height="600"
        >
          <rect x="1025" y="2398" width="600" height="600" fill="#494949" />
        </mask>
        <g mask="url(#mask4)">
          <path
            d="M1149.45 2762.56L1328.04 2529.69C1329.37 2527.95 1331.42 2526.97 1333.6 2527.09C1348.57 2527.91 1410.18 2532.34 1477.29 2552.18C1544.41 2572.02 1591.35 2605.44 1602.47 2613.83C1604.1 2615.06 1605 2616.97 1605 2619.01V2816.77C1605 2819.69 1603.12 2822.28 1600.34 2823.19L1156.9 2967.39C1152.54 2968.8 1148.06 2965.55 1148.06 2960.97V2766.67C1148.06 2765.18 1148.55 2763.74 1149.45 2762.56Z"
            fill="url(#paint4_linear)"
            stroke="white"
            strokeWidth="35"
          />
          <path
            d="M1046.45 2666.5L1225.18 2433.44C1226.51 2431.7 1228.56 2430.72 1230.74 2430.84C1245.72 2431.66 1307.4 2436.09 1374.59 2455.95C1437.74 2474.62 1483.04 2505.29 1497.5 2515.89C1500.67 2518.21 1502.43 2521.92 1502.43 2525.84V2730.56C1502.43 2733.49 1500.55 2736.08 1497.77 2736.98L1053.84 2881.34C1049.48 2882.76 1045 2879.51 1045 2874.92V2670.76C1045 2669.22 1045.51 2667.72 1046.45 2666.5Z"
            fill="black"
          />
          <path
            d="M1500 2520.5L1048 2667.5M1374.59 2455.95C1437.74 2474.62 1483.04 2505.29 1497.5 2515.89C1500.67 2518.21 1502.43 2521.92 1502.43 2525.84V2730.56C1502.43 2733.49 1500.55 2736.08 1497.77 2736.98L1053.84 2881.34C1049.48 2882.76 1045 2879.51 1045 2874.92V2670.76C1045 2669.22 1045.51 2667.72 1046.45 2666.5L1225.18 2433.44C1226.51 2431.7 1228.56 2430.72 1230.74 2430.84C1245.72 2431.66 1307.4 2436.09 1374.59 2455.95Z"
            stroke="white"
            strokeWidth="35"
          />
        </g>
        <mask
          id="mask5"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="1025"
          y="0"
          width="600"
          height="600"
        >
          <rect x="1025" width="600" height="600" fill="#494949" />
        </mask>
        <g mask="url(#mask5)">
          <path
            d="M1149.45 364.562L1328.04 131.685C1329.37 129.954 1331.42 128.971 1333.6 129.09C1348.57 129.909 1410.18 134.338 1477.29 154.176C1544.41 174.018 1591.35 207.439 1602.47 215.832C1604.1 217.061 1605 218.974 1605 221.014V418.765C1605 421.689 1603.12 424.281 1600.34 425.185L1156.9 569.385C1152.54 570.804 1148.06 567.552 1148.06 562.965V368.67C1148.06 367.185 1148.55 365.741 1149.45 364.562Z"
            fill="url(#paint5_linear)"
            stroke="white"
            strokeWidth="35"
          />
          <path
            d="M1046.45 268.499L1225.18 35.4351C1226.51 33.7036 1228.56 32.7212 1230.74 32.8404C1245.72 33.6597 1307.4 38.0921 1374.59 57.9536C1437.74 76.6203 1483.04 107.293 1497.5 117.893C1500.67 120.215 1502.43 123.917 1502.43 127.845V332.564C1502.43 335.488 1500.55 338.08 1497.77 338.984L1053.84 483.343C1049.48 484.762 1045 481.511 1045 476.924V272.759C1045 271.219 1045.51 269.722 1046.45 268.499Z"
            fill="black"
          />
          <path
            d="M1500 122.5L1048 269.5M1374.59 57.9536C1437.74 76.6203 1483.04 107.293 1497.5 117.893C1500.67 120.215 1502.43 123.917 1502.43 127.845V332.564C1502.43 335.488 1500.55 338.08 1497.77 338.984L1053.84 483.343C1049.48 484.762 1045 481.511 1045 476.924V272.759C1045 271.219 1045.51 269.722 1046.45 268.499L1225.18 35.4351C1226.51 33.7036 1228.56 32.7212 1230.74 32.8404C1245.72 33.6597 1307.4 38.0921 1374.59 57.9536Z"
            stroke="white"
            strokeWidth="35"
          />
        </g>
        <defs>
          <linearGradient
            id="paint6_linear"
            x1="2189.18"
            y1="742.655"
            x2="2696.02"
            y2="859.721"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color1[0]} />
            <stop offset="1" stopColor={color2[0]} />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="139.179"
            y1="742.655"
            x2="646.02"
            y2="859.721"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color1[0]} />
            <stop offset="1" stopColor={color2[0]} />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="2189.18"
            y1="1943.66"
            x2="2696.02"
            y2="2060.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color1[0]} />
            <stop offset="1" stopColor={color2[0]} />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="139.179"
            y1="1943.66"
            x2="646.02"
            y2="2060.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color1[0]} />
            <stop offset="1" stopColor={color2[0]} />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="1164.18"
            y1="2543.66"
            x2="1671.02"
            y2="2660.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color1[0]} />
            <stop offset="1" stopColor={color2[0]} />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="1164.18"
            y1="145.655"
            x2="1671.02"
            y2="262.721"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color1[0]} />
            <stop offset="1" stopColor={color2[0]} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default HomeEth
