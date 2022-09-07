import { memo, SVGProps } from 'react';

const WavesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2362 735' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M505.409 248.716L505.409 248.717L505.409 248.717C519.337 272.058 533.109 295.138 547.241 317.328C563 295.497 577.329 270.618 583.876 244.477C591.323 214.744 589.3 184.636 569.834 155.886C564.24 154.049 556.882 155.046 548.768 160.515C539.72 166.614 530.951 177.519 526.788 190.146C524.621 196.456 515.253 198.6 510.606 193.847C492.946 175.989 488.321 158.521 488.321 137.665C488.321 91.5704 531.953 48.7658 586.009 48.7658C634.669 48.7658 672.15 84.6388 697.433 137.05C722.241 188.478 736.488 256.89 741.699 330.295C766.528 348.687 786.461 367.707 801.714 389.397C815.316 404.432 833.221 403.343 851.378 402.24C857.167 401.888 862.982 401.535 868.691 401.702C869.818 385.041 866.369 369.681 861.375 363.119C854.147 354.511 847.886 365.081 845.313 370.151C843.955 372.752 840.447 373.932 837.818 372.676C823.19 365.64 817.563 352.8 817.476 338.78C820.084 320.188 837.053 315.788 851.737 315.7C871.89 318.745 887.115 333.669 900.28 346.573C900.636 346.922 900.99 347.269 901.342 347.614C915.587 361.607 928.383 376.616 939.221 389.326L940.243 390.525C941.129 387.139 942.023 383.774 942.911 380.429C951.154 349.406 958.917 320.192 954.521 293.522C947.623 274.141 928.583 254.316 912.944 271.344C908.304 276.55 904.385 285.456 903.131 298.931C902.728 303.502 895.771 305.596 892.959 301.994C872.776 282.154 852.107 260.794 851.74 234.923C851.74 217.807 863.831 204.293 880.649 195.797C920.143 178.426 960.1 177.492 992.704 204.269L992.711 204.266C1030.99 239.142 1058.18 284.683 1084.42 328.632L1084.43 328.635L1084.43 328.641C1092.57 342.272 1100.62 355.75 1108.88 368.708C1118.09 355.957 1126.46 341.425 1130.29 326.156C1134.64 308.789 1133.46 291.203 1122.08 274.409C1118.81 273.336 1114.51 273.919 1109.77 277.114C1104.48 280.676 1099.35 287.046 1096.92 294.421C1095.65 298.106 1090.18 299.359 1087.46 296.583C1077.14 286.152 1074.43 275.949 1074.43 263.767C1074.43 236.843 1099.94 211.84 1131.54 211.84C1159.98 211.84 1181.89 232.794 1196.67 263.407C1211.17 293.447 1219.49 333.407 1222.54 376.283C1232.71 407.42 1247.66 435.805 1310.59 493.593C1342.91 502.066 1377.8 506.697 1412.89 507.724C1415.49 469.288 1407.53 433.851 1396.01 418.714C1379.33 398.856 1364.88 423.241 1358.95 434.937C1355.81 440.936 1347.72 443.66 1341.65 440.762C1307.9 424.529 1294.91 394.908 1294.71 362.564C1300.73 319.674 1339.89 309.523 1373.77 309.32C1420.27 316.345 1455.4 350.773 1485.78 380.544L1486.49 381.239C1487.07 381.81 1487.66 382.379 1488.23 382.946C1521.11 415.228 1550.63 449.853 1575.64 479.176L1575.64 479.177L1578 481.939C1580.04 474.128 1582.11 466.364 1584.16 458.648C1603.18 387.08 1621.09 319.683 1610.95 258.157C1595.03 213.446 1551.09 167.71 1515 206.993C1504.3 219.002 1495.26 239.549 1492.36 270.635C1491.43 281.181 1475.38 286.011 1468.89 277.702C1422.32 231.931 1374.62 182.654 1373.78 122.97C1373.78 83.4838 1401.67 52.3084 1440.48 32.7089C1531.62 -7.36633 1623.82 -9.51943 1699.05 52.254L1699.07 52.2462C1787.39 132.704 1850.14 237.766 1910.7 339.154L1910.7 339.157L1910.7 339.158C1929.49 370.61 1948.06 401.708 1967.12 431.609C1988.38 402.191 2007.71 368.667 2016.54 333.442C2026.58 293.376 2023.85 252.806 1997.6 214.064C1990.05 211.589 1980.13 212.932 1969.18 220.303C1956.98 228.52 1945.15 243.216 1939.54 260.23C1936.61 268.732 1923.98 271.622 1917.71 265.217C1893.89 241.154 1887.65 217.616 1887.65 189.512C1887.65 127.399 1946.5 69.7198 2019.41 69.7198C2085.05 69.7198 2135.6 118.059 2169.7 188.683C2203.17 257.983 2222.38 350.169 2229.41 449.082C2319.71 515.907 2362 588.889 2362 721.944C2361.92 732.434 2346.58 738.636 2339.36 731.09C2276.58 667.679 2185.25 639.218 2079.94 628.351C1980.86 618.127 1870.01 623.826 1761.85 629.387L1761.83 629.387L1761.82 629.388C1755.02 629.738 1748.24 630.086 1741.47 630.431C1626.92 636.256 1516.67 641.031 1425.66 624.606C1360.89 612.917 1305.05 589.458 1266.85 547.499L221 567.232V468.195C194.517 467.134 169.296 464.797 145.803 460.553C78.3242 448.364 23.9211 418.925 0.491389 358.38C-2.23391 351.032 6.95033 342.592 13.9203 346.033C48.5721 363.55 92.2518 372.522 136.334 373.814C138.263 345.29 132.363 318.992 123.819 307.758C111.453 293.022 100.743 311.118 96.3406 319.798C94.0174 324.25 88.0149 326.271 83.518 324.12C58.4923 312.074 48.8661 290.092 48.7161 266.089C53.1788 234.26 82.2098 226.727 107.33 226.576C141.807 231.789 167.854 257.339 190.377 279.432C190.986 280.029 191.592 280.623 192.195 281.214C216.566 305.172 238.459 330.868 257 352.629L257 352.629L258.746 354.679C260.261 348.882 261.791 343.12 263.311 337.394C277.413 284.282 290.693 234.267 283.172 188.607C271.372 155.426 238.798 121.485 212.042 150.638C204.105 159.55 197.401 174.798 195.254 197.867C194.566 205.693 182.663 209.278 177.853 203.112C143.324 169.145 107.964 132.576 107.336 88.2834C107.336 58.9802 128.02 35.8445 156.792 21.2995C224.359 -8.44082 292.717 -10.0387 348.496 35.8041L348.508 35.7983C413.988 95.507 460.512 173.475 505.409 248.716Z'
      fill='#6691C9'
    />
  </svg>
);

const Memo = memo(WavesIcon);
export { Memo as WavesIcon };
