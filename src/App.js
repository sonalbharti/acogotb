import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import { useHorizontalScroll } from "./useSideScroll";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal'
import HomeImagesCarousel from './HomeImagesCarousel';
import HomeCards from './HomeCards';
import AboutCards from './AboutCards';
import SiteNavigationBar from './SiteNavigationBar';
import TeleportImageCards from './TeleportImageCards';
import RockPaperScissorImageCards from './RockPaperScissorImageCards';
import HomeImageCards from './HomeImageCards';
import AlienationImageCards from './AlienationImageCards';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CitiesCards from './CitiesCards';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation()
  const scrollRef = useHorizontalScroll();

  useEffect(() => {
    document.title = 'A Castle of Glass on the Beach';
  });

  // const [showHomeCards, setShowHomeCards] = useState(true)
  // const [showTeleport, setShowTeleport] = useState(false);
  // const [showRockPaperScissor, setShowRockPaperScissor] = useState(false);
  // const [showHome, setShowHome] = useState(false);
  // const [showAlienation, setShowAlienation] = useState(false);
  // const [showCities, setShowCities] = useState(false);
  // const [showAbout, setShowAbout] = useState(false);
  const [show, setShow] = useState(false);

  // All images links stored here!
  const [teleportImages] = useState([
    {
      id: 1,
      title: "Teleport",
      src_web: "https://lh5.googleusercontent.com/CZuXtLVa-QXzZLchqUD7RMVdlYfjWPbtFWb6NAJk1vhjHhAtMjenU46_sZerJFY7uN8=w2400",
      src: "https://lh5.googleusercontent.com/CZuXtLVa-QXzZLchqUD7RMVdlYfjWPbtFWb6NAJk1vhjHhAtMjenU46_sZerJFY7uN8=w3193",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 2,
      src_web: "https://lh5.googleusercontent.com/BRSq-vGO3inKbta9w61CP1OUiLbpghsK3giYo1cBV9UXqPeDh6n6axaBbMlrIC4GF2s=w2400",
      src: "https://lh5.googleusercontent.com/BRSq-vGO3inKbta9w61CP1OUiLbpghsK3giYo1cBV9UXqPeDh6n6axaBbMlrIC4GF2s=w4000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 3,
      src_web: "https://lh4.googleusercontent.com/sHRxhAihcB66BoXEcmhO5iDIqdeGeMl8YDMewnYryfgC2HR11DmGuz3rvseGOYBWBhA=w2400",
      src: "https://lh4.googleusercontent.com/sHRxhAihcB66BoXEcmhO5iDIqdeGeMl8YDMewnYryfgC2HR11DmGuz3rvseGOYBWBhA=w4000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 4,
      src_web: "https://lh4.googleusercontent.com/EnKdtWzIl_gqGl9q0LILV5a-kAys52FLh0h8FLDlUEgHOzEBLnNdif1pMHzH-1MnZIg=w2400",
      src: "https://lh4.googleusercontent.com/EnKdtWzIl_gqGl9q0LILV5a-kAys52FLh0h8FLDlUEgHOzEBLnNdif1pMHzH-1MnZIg=w3877",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 5,
      src_web: "https://lh5.googleusercontent.com/ycGj3xTS9zW_-6Kg5AopiItnAGaGPZe2iNUJCTM8tp5ylR1d_8nHAbB6-o7pFVdeHaI=w2400",
      src: "https://lh5.googleusercontent.com/ycGj3xTS9zW_-6Kg5AopiItnAGaGPZe2iNUJCTM8tp5ylR1d_8nHAbB6-o7pFVdeHaI=w4000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 6,
      src_web: "https://lh3.googleusercontent.com/NRnj4OMu4QOC5cuXEj4N2jHFEHAAhbZfyvYnvAzZvw9awvEW48IHn8iyV_XUNHJybK4=w2400",
      src: "https://lh3.googleusercontent.com/NRnj4OMu4QOC5cuXEj4N2jHFEHAAhbZfyvYnvAzZvw9awvEW48IHn8iyV_XUNHJybK4=w3794",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 7,
      src_web: "https://lh6.googleusercontent.com/7S6-IrfjVkE5FtjcI2vQC7zZOIaWTbCBB9frMjxsgTc1OVDHHlBVF4Jl1OWGxXaERXE=w2400",
      src: "https://lh6.googleusercontent.com/7S6-IrfjVkE5FtjcI2vQC7zZOIaWTbCBB9frMjxsgTc1OVDHHlBVF4Jl1OWGxXaERXE=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 8,
      src_web: "https://lh4.googleusercontent.com/TLM5_lVblRGn0BLTkSRnnGz2-DFsMAwwF7z29HIFTN8pVXA70flnBzUGpiKPabMNd1Q=w2400",
      src: "https://lh4.googleusercontent.com/TLM5_lVblRGn0BLTkSRnnGz2-DFsMAwwF7z29HIFTN8pVXA70flnBzUGpiKPabMNd1Q=w3664",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 9,
      src_web: "https://lh6.googleusercontent.com/-Q3-7DaS8QhRP2Yi8mGBgtlLfTtWcbSjdAC9DjzbJhdgSZ40lNY0pv2pTgSJ6DAsZNg=w2400",
      src: "https://lh6.googleusercontent.com/-Q3-7DaS8QhRP2Yi8mGBgtlLfTtWcbSjdAC9DjzbJhdgSZ40lNY0pv2pTgSJ6DAsZNg=w2627",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 10,
      src_web: "https://lh3.googleusercontent.com/DJlGA-QRIyoT-bX_UynRHsOlDpOFlbwMvI8ikbr4r0cYrTBFdi21uIBesUScQgppuok=w2400",
      src: "https://lh3.googleusercontent.com/DJlGA-QRIyoT-bX_UynRHsOlDpOFlbwMvI8ikbr4r0cYrTBFdi21uIBesUScQgppuok=w6000",
      // aption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 11,
      src_web: "https://lh5.googleusercontent.com/4auOOOPcgmbhJBECybN9nFJ9d9HeyjyscVVLoUqszNjalqS9JyR_uuhMaAVKkApO0TU=w2400",
      src: "https://lh5.googleusercontent.com/4auOOOPcgmbhJBECybN9nFJ9d9HeyjyscVVLoUqszNjalqS9JyR_uuhMaAVKkApO0TU=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 12,
      src_web: "https://lh5.googleusercontent.com/Kf8DMlyD0qlL5cWP2npcvORvJfeEIFC3YNH-QgxFU9iuZyCBtLxffUr9YnHPmfHnk80=w2400",
      src: "https://lh5.googleusercontent.com/Kf8DMlyD0qlL5cWP2npcvORvJfeEIFC3YNH-QgxFU9iuZyCBtLxffUr9YnHPmfHnk80=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 13,
      src_web: "https://lh4.googleusercontent.com/QwNrTPOmZfDunLJuakF_Qp2gttHv8_MeG0U5E0xG4cKcrYRBHcwGqv_Ojp6LJWFjQaQ=w2400",
      src: "https://lh4.googleusercontent.com/QwNrTPOmZfDunLJuakF_Qp2gttHv8_MeG0U5E0xG4cKcrYRBHcwGqv_Ojp6LJWFjQaQ=w4000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 14,
      src_web: "https://lh6.googleusercontent.com/_RNfgQoJGh8liXHtIsyZ5E2fuKisHxqhDSuGdbpswG_D0z8eckoW8WbuppRzPePHt5k=w2400",
      src: "https://lh6.googleusercontent.com/_RNfgQoJGh8liXHtIsyZ5E2fuKisHxqhDSuGdbpswG_D0z8eckoW8WbuppRzPePHt5k=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 15,
      src_web: "https://lh3.googleusercontent.com/t6tiJ7WIQJvGHEhVO2TR6an64jk6GkEqY4yULdd1iX3g1Tc9oSQtViRbhrMi_m0qTOk=w2400",
      src: "https://lh3.googleusercontent.com/t6tiJ7WIQJvGHEhVO2TR6an64jk6GkEqY4yULdd1iX3g1Tc9oSQtViRbhrMi_m0qTOk=w5390",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 16,
      src_web: "https://lh4.googleusercontent.com/7fAaLixm-n6QsaljbFOwMoYmRihnbO86JYsputM0YJNmLiY7_HCpwSQhg50eaXTrqFU=w2400",
      src: "https://lh4.googleusercontent.com/7fAaLixm-n6QsaljbFOwMoYmRihnbO86JYsputM0YJNmLiY7_HCpwSQhg50eaXTrqFU=w3508",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 17,
      src_web: "https://lh3.googleusercontent.com/Y9EoRORQYXk1knpCOQyasM8mQ___v5RdxRzTnfKhHHDptD1hkQZ0FKVJzmgRxu93gUY=w2400",
      src: "https://lh3.googleusercontent.com/Y9EoRORQYXk1knpCOQyasM8mQ___v5RdxRzTnfKhHHDptD1hkQZ0FKVJzmgRxu93gUY=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 18,
      src_web: "https://lh3.googleusercontent.com/ZvdPBlMB6Gal7VaOEq6tRw24Jt0qO-GwvxXVpgkh_Dk924hPgWwaoksHPKsKOYtC0Bg=w2400",
      src: "https://lh3.googleusercontent.com/ZvdPBlMB6Gal7VaOEq6tRw24Jt0qO-GwvxXVpgkh_Dk924hPgWwaoksHPKsKOYtC0Bg=w3308",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 19,
      src_web: "https://lh3.googleusercontent.com/zGMOIygITFTBbdOjH5tC6E2zjI-HnHgX_WFXZIZkmg_DsBPymKj0jfwhRKTvXbJljnc=w2400",
      src: "https://lh3.googleusercontent.com/zGMOIygITFTBbdOjH5tC6E2zjI-HnHgX_WFXZIZkmg_DsBPymKj0jfwhRKTvXbJljnc=w2967",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 20,
      src_web: "https://lh4.googleusercontent.com/ZNd6zaZe_wDYVNh4LRq8e97QyPsu2sF8TwzSwdRtaoZYmftHGCOKSQu3oYLvZMn4w-s=w2400",
      src: "https://lh4.googleusercontent.com/ZNd6zaZe_wDYVNh4LRq8e97QyPsu2sF8TwzSwdRtaoZYmftHGCOKSQu3oYLvZMn4w-s=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    }
    // Placeholder for the Desert series GIF
    ,
    {
      id: 21,
      src_web: "https://lh3.googleusercontent.com/BGPjQa4IdxWKRFCafbI9MtXqqUSbL4Qagi5AMx6Td3uJRtw-sWFl_h0V8wJ29wF9TqI=w2400",
      src: "https://lh3.googleusercontent.com/BGPjQa4IdxWKRFCafbI9MtXqqUSbL4Qagi5AMx6Td3uJRtw-sWFl_h0V8wJ29wF9TqI=w720",
      // caption: "This is the caption for this gif",
      ref: useRef(null)
    }
  ])

  const [rockPaperScissorImages] = useState([
    {
      id: 1,
      title: "Rock-Paper-Scissors",
      src_web: "https://lh6.googleusercontent.com/_JvMzsGrn3JnCTKQTnMV43D6aSe_g_otT6AYz3firP_xsJKNLmunvjsbhS0nThDmCCw=w2400",
      src: "https://lh6.googleusercontent.com/_JvMzsGrn3JnCTKQTnMV43D6aSe_g_otT6AYz3firP_xsJKNLmunvjsbhS0nThDmCCw=w3508",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 2,
      src_web: "https://lh6.googleusercontent.com/mUuuJ0Bn9AcujbxorVlniWF4dx-LrrMd31Z4EInTuyz_hOJXl_XD-c7BkgA2vB_TnXs=w2400",
      src: "https://lh6.googleusercontent.com/mUuuJ0Bn9AcujbxorVlniWF4dx-LrrMd31Z4EInTuyz_hOJXl_XD-c7BkgA2vB_TnXs=w4961",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    }
    ,
    {
      id: 3,
      src_web: "https://lh4.googleusercontent.com/ztVmz5Ihd91sd1df0Civ-6mab0jnWZ2CVinyZQNrjoOe3PM2xxvVDsZBpKGfC_t-C4k=w2400",
      src: "https://lh4.googleusercontent.com/ztVmz5Ihd91sd1df0Civ-6mab0jnWZ2CVinyZQNrjoOe3PM2xxvVDsZBpKGfC_t-C4k=w4961",
      // caption: "This is a caption for Image-3",
      ref: useRef(null)
    },
    {
      id: 4,
      src_web: "https://lh6.googleusercontent.com/s8hwvjt-PVpA3JZ0eTOIQg2EqQQIFcPh40S0p3DsHeENjqD9iQrQz-rqJD3DMV0GbXM=w2400",
      src: "https://lh6.googleusercontent.com/s8hwvjt-PVpA3JZ0eTOIQg2EqQQIFcPh40S0p3DsHeENjqD9iQrQz-rqJD3DMV0GbXM=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    }
    ,
    {
      id: 5,
      src_web: "https://lh6.googleusercontent.com/N-wVpboCmMK7Exe9X5VznjtZ7XKdsy47qih_EkXH9cQFhaK09uwpzRZC1cn5RZf7QRg=w2400",
      src: "https://lh6.googleusercontent.com/N-wVpboCmMK7Exe9X5VznjtZ7XKdsy47qih_EkXH9cQFhaK09uwpzRZC1cn5RZf7QRg=w3508",
      // caption: "This is a caption for Image-3",
      ref: useRef(null)
    },
    {
      id: 6,
      src_web: "https://lh5.googleusercontent.com/pDn7ZLfCz-mSCheRFwcuHIFi3ntMi98t3yywWOG4ZMKTZP1yzfEx8Y-8a85z-UrlvSo=w2400",
      src: "https://lh5.googleusercontent.com/pDn7ZLfCz-mSCheRFwcuHIFi3ntMi98t3yywWOG4ZMKTZP1yzfEx8Y-8a85z-UrlvSo=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 7,
      src_web: "https://lh3.googleusercontent.com/sY_l7xd-m4IU3MxBZqsd-i-N77-P_R-BIDFu2BwRWk_-OU9RR63EOwIV36sFlr4An-8=w2400",
      src: "https://lh3.googleusercontent.com/sY_l7xd-m4IU3MxBZqsd-i-N77-P_R-BIDFu2BwRWk_-OU9RR63EOwIV36sFlr4An-8=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 8,
      src_web: "https://lh4.googleusercontent.com/JViXYdULGeEMTO8EHEdq-eMsAj91pXLYxSzlVcGDYfNLnRs9XBWy8jaoykSogdtMMhQ=w2400",
      src: "https://lh4.googleusercontent.com/JViXYdULGeEMTO8EHEdq-eMsAj91pXLYxSzlVcGDYfNLnRs9XBWy8jaoykSogdtMMhQ=w4961",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 9,
      src_web: "https://lh3.googleusercontent.com/4DmyodhgJ86Owp08iEZW3QPrR9gWdp0jLWE2x04oyBaFcPf-HwqdxFtNWJ7aw_wTzYg=w2400",
      src: "https://lh3.googleusercontent.com/4DmyodhgJ86Owp08iEZW3QPrR9gWdp0jLWE2x04oyBaFcPf-HwqdxFtNWJ7aw_wTzYg=w2480",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 10,
      src_web: "https://lh5.googleusercontent.com/tNfbJEC2-Kov9BR5Kno0HWT3Ao31HJaa1ztzTFvlV-tTTETCphcMN5uMWj5RrWGrwjU=w2400",
      src: "https://lh5.googleusercontent.com/tNfbJEC2-Kov9BR5Kno0HWT3Ao31HJaa1ztzTFvlV-tTTETCphcMN5uMWj5RrWGrwjU=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 11,
      src_web: "https://lh4.googleusercontent.com/H-Nz5xyN9F8GmwTcibNL1QEl26b5A4rgVfRbK2wA6LzLUtf_uTE7OdT0pgvN3SFV37U=w2400",
      src: "https://lh4.googleusercontent.com/H-Nz5xyN9F8GmwTcibNL1QEl26b5A4rgVfRbK2wA6LzLUtf_uTE7OdT0pgvN3SFV37U=w2480",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 12,
      src_web: "https://lh3.googleusercontent.com/3F0hIjAznwap237-aUlxMuhxIkpqpt9XCjR0aSzmKtcUME-H1D5gCr2c_GBTleIkzjk=w2400",
      src: "https://lh3.googleusercontent.com/3F0hIjAznwap237-aUlxMuhxIkpqpt9XCjR0aSzmKtcUME-H1D5gCr2c_GBTleIkzjk=w3271",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 13,
      src_web: "https://lh6.googleusercontent.com/bcS9AiV2jxE5HQtXhiWetqS7LiuVDOGrMPcmqE8s-d-i54TQtrES3GiROuGbxVV5MMs=w2400",
      src: "https://lh6.googleusercontent.com/bcS9AiV2jxE5HQtXhiWetqS7LiuVDOGrMPcmqE8s-d-i54TQtrES3GiROuGbxVV5MMs=w4961",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 14,
      src_web: "https://lh5.googleusercontent.com/SPEsIOB058fBzXZkSG62fs_94Tp19IuzzZ0Udi8G0JbsZ_1lwYBEGxBkGT0Ibn0BkJM=w2400",
      src: "https://lh5.googleusercontent.com/SPEsIOB058fBzXZkSG62fs_94Tp19IuzzZ0Udi8G0JbsZ_1lwYBEGxBkGT0Ibn0BkJM=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 15,
      src_web: "https://lh6.googleusercontent.com/teybqVnFjBjL_xm6cIRZkcuyR9Hqu6cWD-gAQlV--DfIUAQya5Yv4dPCSkD9N-QHvQs=w2400",
      src: "https://lh6.googleusercontent.com/teybqVnFjBjL_xm6cIRZkcuyR9Hqu6cWD-gAQlV--DfIUAQya5Yv4dPCSkD9N-QHvQs=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 16,
      src_web: "https://lh4.googleusercontent.com/6v4V7yzTBZfyPaR211e6xTEYvkgmGtQDNZJhlr-C5b3AlsUS9itXIV5nVDNvxb6gQO4=w2400",
      src: "https://lh4.googleusercontent.com/6v4V7yzTBZfyPaR211e6xTEYvkgmGtQDNZJhlr-C5b3AlsUS9itXIV5nVDNvxb6gQO4=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 17,
      src_web: "https://lh4.googleusercontent.com/kRdnbSLvM_cn3Duqrx29f-6MqkFwY9U39mcELr0URD-VBorW0EGkm7HA1E2KaQEcdoM=w2400",
      src: "https://lh4.googleusercontent.com/kRdnbSLvM_cn3Duqrx29f-6MqkFwY9U39mcELr0URD-VBorW0EGkm7HA1E2KaQEcdoM=w2480",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 18,
      src_web: "https://lh5.googleusercontent.com/2_pqQ3aTZs-8wxCJSIKn5lltbwkO9LdLjrfuOqrzO82xVvbzRb_O7iA4Mgqt3AV02aU=w2400",
      src: "https://lh5.googleusercontent.com/2_pqQ3aTZs-8wxCJSIKn5lltbwkO9LdLjrfuOqrzO82xVvbzRb_O7iA4Mgqt3AV02aU=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 19,
      src_web: "https://lh6.googleusercontent.com/bJ9aQqOlrKVLgHm50OVPkeeBDUMl_3sxrh4oLLM4ryXfABEMU0W3vYwOREZK4UFEcow=w2400",
      src: "https://lh6.googleusercontent.com/bJ9aQqOlrKVLgHm50OVPkeeBDUMl_3sxrh4oLLM4ryXfABEMU0W3vYwOREZK4UFEcow=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 20,
      src_web: "https://lh4.googleusercontent.com/c5O8DusVzQpUgLntFUW6xaE1-vsNpMAFujhusypkid-60ik4nouHm_cqjgcNthzJaR0=w2400",
      src: "https://lh4.googleusercontent.com/c5O8DusVzQpUgLntFUW6xaE1-vsNpMAFujhusypkid-60ik4nouHm_cqjgcNthzJaR0=w9921",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 21,
      src_web: "https://lh3.googleusercontent.com/IlqlMYurQG2YXDeTY0zkOkuK858EMXEdUzRU9wOk6XU8nCSq445L_ehr2844gUZQH3I=w2400",
      src: "https://lh3.googleusercontent.com/IlqlMYurQG2YXDeTY0zkOkuK858EMXEdUzRU9wOk6XU8nCSq445L_ehr2844gUZQH3I=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 22,
      src_web: "https://lh4.googleusercontent.com/NQAR0-JwjCyIk6qAH8BkrmEY8yG1e6gJcYjiQBVB_644lH9VOwLSycLPZEdHS9ovxyc=w2400",
      src: "https://lh4.googleusercontent.com/NQAR0-JwjCyIk6qAH8BkrmEY8yG1e6gJcYjiQBVB_644lH9VOwLSycLPZEdHS9ovxyc=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 23,
      src_web: "https://lh6.googleusercontent.com/YCU6_7WHiujtaXp7GZ7N0XxyhNpm8M0GC8LuGU20sZ4h_FdTDn6m4K8bwYKpMaPnhzk=w2400",
      src: "https://lh6.googleusercontent.com/YCU6_7WHiujtaXp7GZ7N0XxyhNpm8M0GC8LuGU20sZ4h_FdTDn6m4K8bwYKpMaPnhzk=w4961",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    },
    {
      id: 24,
      src_web: "https://lh5.googleusercontent.com/9fRTGpm_cTFYb1-SoYH-9Fif9tr3SVH0kNxQQKW-yiWzV5-N7hvAXzovqBqn5GqNfSw=w2400",
      src: "https://lh5.googleusercontent.com/9fRTGpm_cTFYb1-SoYH-9Fif9tr3SVH0kNxQQKW-yiWzV5-N7hvAXzovqBqn5GqNfSw=w3508",
      // caption: "This is a caption for Image-2",
      ref: useRef(null)
    }
  ])

  const [homeImages] = useState([
    {
      id: 1,
      title: "Home",
      src_web: "https://lh6.googleusercontent.com/Ahdb3uHvMQbtRJMLF9ocqCZUt0pDIEhKzWXFiSwxx9EarIYIPAz2kfJYtKz2uPCNlKE=w2400",
      src: "https://lh6.googleusercontent.com/Ahdb3uHvMQbtRJMLF9ocqCZUt0pDIEhKzWXFiSwxx9EarIYIPAz2kfJYtKz2uPCNlKE=w4961",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 2,
      src_web: "https://lh6.googleusercontent.com/SsUGk4GWpPtEr_i9SmZGdgl93K8vr0BqN8MkRNtDHIU5jAhe7fqPTbvLK7xXYKJKxUg=w2400",
      src: "https://lh6.googleusercontent.com/SsUGk4GWpPtEr_i9SmZGdgl93K8vr0BqN8MkRNtDHIU5jAhe7fqPTbvLK7xXYKJKxUg=w4961",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 3,
      src_web: "https://lh5.googleusercontent.com/g0Bgw0Q71mocCnjvlovgfpRVfDbwJLT3HhWzFQ96QQg3GG71GYdU6p1-kR9hj8kduY4=w2400",
      src: "https://lh5.googleusercontent.com/g0Bgw0Q71mocCnjvlovgfpRVfDbwJLT3HhWzFQ96QQg3GG71GYdU6p1-kR9hj8kduY4=w4961",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 4,
      src_web: "https://lh3.googleusercontent.com/TeQsc1OADNs3TwH6559O0CdBSlmz1isMEbLnMBO9E_fp7_Ybyq9jMwcUlIXRDSsr894=w2400",
      src: "https://lh3.googleusercontent.com/TeQsc1OADNs3TwH6559O0CdBSlmz1isMEbLnMBO9E_fp7_Ybyq9jMwcUlIXRDSsr894=w4961",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 5,
      src_web: "https://lh5.googleusercontent.com/TqS53BfAA33nzcvGOSY5HTN1t9Psr6fUvz-q8DxMgGZB4wHvPSbd74J9__BV0wqkx4g=w2400",
      src: "https://lh5.googleusercontent.com/TqS53BfAA33nzcvGOSY5HTN1t9Psr6fUvz-q8DxMgGZB4wHvPSbd74J9__BV0wqkx4g=w4961",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 6,
      src_web: "https://lh6.googleusercontent.com/8g7iBosb4j_ntb0Ei-8TeAyzJsV5SHBPrW2BbFuLx_NWGK2SiNTfrjydIEDRuMlxH94=w2400",
      src: "https://lh6.googleusercontent.com/8g7iBosb4j_ntb0Ei-8TeAyzJsV5SHBPrW2BbFuLx_NWGK2SiNTfrjydIEDRuMlxH94=w4961",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 7,
      src_web: "https://lh6.googleusercontent.com/Xf2ibpX9R73HvCf_Vcnp82vQbhgHKUu21Rwy7MWfaFLS8jLi1P-sdxmlL7UG05gYnf0=w2400",
      src: "https://lh6.googleusercontent.com/Xf2ibpX9R73HvCf_Vcnp82vQbhgHKUu21Rwy7MWfaFLS8jLi1P-sdxmlL7UG05gYnf0=w4961",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 8,
      src_web: "https://lh5.googleusercontent.com/i30BoqSNV4ANl05DbC3O4oaA7lvEz6asDz4QPDU319wvqg3dO7uxYldqNmynzOO599c=w2400",
      src: "https://lh5.googleusercontent.com/i30BoqSNV4ANl05DbC3O4oaA7lvEz6asDz4QPDU319wvqg3dO7uxYldqNmynzOO599c=w4961",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 9,
      src_web: "https://lh3.googleusercontent.com/kyJ4PqFlqByOdkn-HcvtAsFMaZosJXCKX_RunkRLzrQ33tn9ulrjUYtth2aMGWgQVPE=w2400",
      src: "https://lh3.googleusercontent.com/kyJ4PqFlqByOdkn-HcvtAsFMaZosJXCKX_RunkRLzrQ33tn9ulrjUYtth2aMGWgQVPE=w4961",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 10,
      src_web: "https://lh5.googleusercontent.com/mbdbMrtBxOqq6xPQcLnaiGcMi1AINseUpywwWaKGP8jpLIrR5ZYuG_XteaiR5rS9Vho=w2400",
      src: "https://lh5.googleusercontent.com/mbdbMrtBxOqq6xPQcLnaiGcMi1AINseUpywwWaKGP8jpLIrR5ZYuG_XteaiR5rS9Vho=w4961",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    }
  ])

  const [alienationImages] = useState([
    {
      id: 1,
      title: "Alienation",
      src_web: "https://lh4.googleusercontent.com/Dasde9jREqUpLK-W9dvJgn_5hbO4Yxhjo4NG7J-7V__txCEr-xwncALFo4JCxO8LOUo=w2400",
      src: "https://lh4.googleusercontent.com/Dasde9jREqUpLK-W9dvJgn_5hbO4Yxhjo4NG7J-7V__txCEr-xwncALFo4JCxO8LOUo=w5478",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 2,
      src_web: "https://lh4.googleusercontent.com/F8wtxnBoOuXmzL3k1EI8uGIC8WT0k0piKJZnErVECevmXSEI7xb8WHEx64_99MpsEbw=w2400",
      src: "https://lh4.googleusercontent.com/F8wtxnBoOuXmzL3k1EI8uGIC8WT0k0piKJZnErVECevmXSEI7xb8WHEx64_99MpsEbw=w6000",
      ref: useRef(null)
    },
    {
      id: 3,
      src_web: "https://lh4.googleusercontent.com/axURO9t4M8iV3Ro3SCMbi4wLW_MO5khrJGMz2VaWcsseYzmHHa1cABbMbrWdxaaOOl4=w2400",
      src: "https://lh4.googleusercontent.com/axURO9t4M8iV3Ro3SCMbi4wLW_MO5khrJGMz2VaWcsseYzmHHa1cABbMbrWdxaaOOl4=w5074",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 4,
      src_web: "https://lh4.googleusercontent.com/ms4JaVgeyeS0k6gxdNUvTAq_q_qQDuGm6cE17W1kM7IC07cdOgE_PZviRLVI2LWrz54=w2400",
      src: "https://lh4.googleusercontent.com/ms4JaVgeyeS0k6gxdNUvTAq_q_qQDuGm6cE17W1kM7IC07cdOgE_PZviRLVI2LWrz54=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    }
  ])

  const [citiesImages] = useState([
    {
      id: 1,
      city: "jaisalmer",
      src_web: "https://lh5.googleusercontent.com/Vd8pdKrdMnI3qP-d7b0crc0MqS85rwVMN0InPJBercmJXOIlxnuVX2zBSMsWtf3eceQ=w2400",
      src: "https://lh5.googleusercontent.com/Vd8pdKrdMnI3qP-d7b0crc0MqS85rwVMN0InPJBercmJXOIlxnuVX2zBSMsWtf3eceQ=w4000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 2,
      city: "jaisalmer",
      src_web: "https://lh3.googleusercontent.com/EQ2esyLF24tbN0kErqGaztB9XKH5hC4FsswhckehiyAXH4ICxy70PMhQIpQj59tg0ZI=w2400",
      src: "https://lh3.googleusercontent.com/EQ2esyLF24tbN0kErqGaztB9XKH5hC4FsswhckehiyAXH4ICxy70PMhQIpQj59tg0ZI=w6000",
      ref: useRef(null)
    },
    {
      id: 3,
      city: "jaisalmer",
      src_web: "https://lh4.googleusercontent.com/XbjetnubUYFrj6LDxXA6haj9JJ_cVcSnAJQ6cqq2_ZrnI4GDcpfAPpF1HE5uqVpHy1o=w2400",
      src: "https://lh4.googleusercontent.com/XbjetnubUYFrj6LDxXA6haj9JJ_cVcSnAJQ6cqq2_ZrnI4GDcpfAPpF1HE5uqVpHy1o=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 4,
      city: "jaisalmer",
      src_web: "https://lh4.googleusercontent.com/Xdydjn0nldHCxU3KwLIOYGoRpV1e-Ztxtzx4OV9FX3p3q3S_u_t52RjaLp5nGdlH0iE=w2400",
      src: "https://lh4.googleusercontent.com/Xdydjn0nldHCxU3KwLIOYGoRpV1e-Ztxtzx4OV9FX3p3q3S_u_t52RjaLp5nGdlH0iE=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 5,
      city: "jaisalmer",
      src_web: "https://lh4.googleusercontent.com/g7iuLcu3U5Si9VLwL23GHj4LQT2U8qM3gZZeaTkyHuuHsE6YlPXXaKvtZuJ5uKk3pK0=w2400",
      src: "https://lh4.googleusercontent.com/g7iuLcu3U5Si9VLwL23GHj4LQT2U8qM3gZZeaTkyHuuHsE6YlPXXaKvtZuJ5uKk3pK0=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 6,
      city: "naggar",
      src_web: "https://lh3.googleusercontent.com/ymXJVB6S809-c7_70-sS1xHr1w5wWjKFpyUbhnGPUFMF-IdvQDSoXMoSNc3Vyggzq3A=w2400",
      src: "https://lh3.googleusercontent.com/ymXJVB6S809-c7_70-sS1xHr1w5wWjKFpyUbhnGPUFMF-IdvQDSoXMoSNc3Vyggzq3A=w6000",
      ref: useRef(null)
    },
    {
      id: 7,
      city: "naggar",
      src_web: "https://lh6.googleusercontent.com/NWVYs4Qb7JWTB7quBgAePtOXj82HQC0yMx2uLEX5-5fJMIAc_ERs6kTpwsClWjglCss=w2400",
      src: "https://lh6.googleusercontent.com/NWVYs4Qb7JWTB7quBgAePtOXj82HQC0yMx2uLEX5-5fJMIAc_ERs6kTpwsClWjglCss=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 8,
      city: "naggar",
      src_web: "https://lh4.googleusercontent.com/TRixdMgXHs_hvpI0P0FWzdtR1s7BIl1SlJoGgpGaDMX3fCX95_oU7OJKUWnkzAfzJSk=w2400",
      src: "https://lh4.googleusercontent.com/TRixdMgXHs_hvpI0P0FWzdtR1s7BIl1SlJoGgpGaDMX3fCX95_oU7OJKUWnkzAfzJSk=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 9,
      city: "naggar",
      src_web: "https://lh6.googleusercontent.com/NKtBNvl84qicISZZBkrVOUxk3Npc4i7P5cDzbUVfyJdV0YQBRl5UsK-bKGoyoB2ClDA=w2400",
      src: "https://lh6.googleusercontent.com/NKtBNvl84qicISZZBkrVOUxk3Npc4i7P5cDzbUVfyJdV0YQBRl5UsK-bKGoyoB2ClDA=w4000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 10,
      city: "new-delhi",
      src_web: "https://lh5.googleusercontent.com/-X2ATgC2fkrHTo3DTAQYNOrycDrDQFtkYyiwUv7K2NO8bFUQZmwpJQNxOWuBd6MDVg0=w2400",
      src: "https://lh5.googleusercontent.com/-X2ATgC2fkrHTo3DTAQYNOrycDrDQFtkYyiwUv7K2NO8bFUQZmwpJQNxOWuBd6MDVg0=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 11,
      city: "new-delhi",
      src_web: "https://lh4.googleusercontent.com/7DMaEqhTJHxLHgtDq2hwzNgnN37Gm2YQYJyFHNX7kTgOadSjmtTzHZyY5tL4ulAatCs=w2400",
      src: "https://lh4.googleusercontent.com/7DMaEqhTJHxLHgtDq2hwzNgnN37Gm2YQYJyFHNX7kTgOadSjmtTzHZyY5tL4ulAatCs=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 12,
      city: "new-delhi",
      src_web: "https://lh3.googleusercontent.com/3PMKDlRkF5uxDERc6h097UgHO1J6MjyqvPJFz9I1j1DASjEZK-7x3C6qQw_LkPudJyQ=w2400",
      src: "https://lh3.googleusercontent.com/3PMKDlRkF5uxDERc6h097UgHO1J6MjyqvPJFz9I1j1DASjEZK-7x3C6qQw_LkPudJyQ=w6000",
      ref: useRef(null)
    },
    {
      id: 13,
      city: "new-delhi",
      src_web: "https://lh4.googleusercontent.com/Bsu2yzPdkpPdBpjTojQ40_vDHkqDGVMDvr3cHi1JFSTwmQFkqlVcNfI5hDiYpr1TVP8=w2400",
      src: "https://lh4.googleusercontent.com/Bsu2yzPdkpPdBpjTojQ40_vDHkqDGVMDvr3cHi1JFSTwmQFkqlVcNfI5hDiYpr1TVP8=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 14,
      city: "new-delhi",
      src_web: "https://lh4.googleusercontent.com/y9qxpYLlrGkpneZtpqhJFG0EyaHR3TyL7gU9NdzemCNa3hxsMvG4m0mycfe0iZD8ZwY=w2400",
      src: "https://lh4.googleusercontent.com/y9qxpYLlrGkpneZtpqhJFG0EyaHR3TyL7gU9NdzemCNa3hxsMvG4m0mycfe0iZD8ZwY=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 15,
      city: "bhopal",
      src_web: "https://lh5.googleusercontent.com/WRSPjtC8Fb3Mu0nHjXY_CNBfAS2Ey7FhFrHD9iq9ZJmb1f8KdfDTBZ4L2bkix7dCM7s=w2400",
      src: "https://lh5.googleusercontent.com/WRSPjtC8Fb3Mu0nHjXY_CNBfAS2Ey7FhFrHD9iq9ZJmb1f8KdfDTBZ4L2bkix7dCM7s=w2763",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 16,
      city: "bhopal",
      src_web: "https://lh3.googleusercontent.com/Jol3xkMJS5lwoZcV49dR_yiCJPkavUVw4Be8Lus2oacnZT0HHuVemAZApuvPiEGjqNk=w2400",
      src: "https://lh3.googleusercontent.com/Jol3xkMJS5lwoZcV49dR_yiCJPkavUVw4Be8Lus2oacnZT0HHuVemAZApuvPiEGjqNk=w4000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 17,
      city: "bhopal",
      src_web: "https://lh5.googleusercontent.com/ybI2nCoSlzBCUcvxe_ZFyzDQQhfW2O0fNpgfSb4EInwb8Y4Wt9NDfA38tOj3qF6YvCo=w2400",
      src: "https://lh5.googleusercontent.com/ybI2nCoSlzBCUcvxe_ZFyzDQQhfW2O0fNpgfSb4EInwb8Y4Wt9NDfA38tOj3qF6YvCo=w4000",
      ref: useRef(null)
    },
    {
      id: 18,
      city: "bhopal",
      src_web: "https://lh3.googleusercontent.com/rT8MCB6aEYZn_2MsHaGMDJ46-5cbzHW1GUmGKB9izl9sKPIndo7aWkzbZ1ppBTEomL8=w2400",
      src: "https://lh3.googleusercontent.com/rT8MCB6aEYZn_2MsHaGMDJ46-5cbzHW1GUmGKB9izl9sKPIndo7aWkzbZ1ppBTEomL8=w4000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 19,
      city: "bhopal",
      src_web: "https://lh5.googleusercontent.com/isBw9lzMwzOs5wP7XY4LdoSkiVbQMVh2mKSxBMLfb2fKILmEtADumaoBmI17NCR_V2o=w2400",
      src: "https://lh5.googleusercontent.com/isBw9lzMwzOs5wP7XY4LdoSkiVbQMVh2mKSxBMLfb2fKILmEtADumaoBmI17NCR_V2o=w4000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 20,
      city: "gangtok",
      src_web: "https://lh5.googleusercontent.com/lSL_KoLsIVzkm_Ckduzy0Dgiy33IHcMLOeq4uam7XUkxU9Z3f2xKLDTM4x1limeJjmw=w2400",
      src: "https://lh5.googleusercontent.com/lSL_KoLsIVzkm_Ckduzy0Dgiy33IHcMLOeq4uam7XUkxU9Z3f2xKLDTM4x1limeJjmw=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 21,
      city: "gangtok",
      src_web: "https://lh6.googleusercontent.com/Svg_KAGFwCIBunDSD_mmGZF3XqFT5uQFlMwb5zEuZCkfCUTSbtv-AA2zV0d6vCtl0Ik=w2400",
      src: "https://lh6.googleusercontent.com/Svg_KAGFwCIBunDSD_mmGZF3XqFT5uQFlMwb5zEuZCkfCUTSbtv-AA2zV0d6vCtl0Ik=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 22,
      city: "gangtok",
      src_web: "https://lh3.googleusercontent.com/QR2nuktxmz1borZiwGg0VUdz2WMmveH2nbNPCnpr9nKz_wyRcd8E5Qgd3QSoWCN07MQ=w2400",
      src: "https://lh3.googleusercontent.com/QR2nuktxmz1borZiwGg0VUdz2WMmveH2nbNPCnpr9nKz_wyRcd8E5Qgd3QSoWCN07MQ=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 23,
      city: "gangtok",
      src_web: "https://lh3.googleusercontent.com/8tmR9J0TAaWPqaVq-SgpXhwongmxKWCTnW0Id45VAD9LkNRYKpratVvYoUpKnIPUocE=w2400",
      src: "https://lh3.googleusercontent.com/8tmR9J0TAaWPqaVq-SgpXhwongmxKWCTnW0Id45VAD9LkNRYKpratVvYoUpKnIPUocE=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 24,
      city: "gangtok",
      src_web: "https://lh5.googleusercontent.com/H1lEBrdj5a9ILGmzuuCQwc3B7lJHVzw6K378cWoBeluZ0U0BYQMwTNVsyafI0M62Xno=w2400",
      src: "https://lh5.googleusercontent.com/H1lEBrdj5a9ILGmzuuCQwc3B7lJHVzw6K378cWoBeluZ0U0BYQMwTNVsyafI0M62Xno=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 25,
      city: "kochi",
      src_web: "https://lh6.googleusercontent.com/ndVucOv5qB6MStHjRhFm7ImbFTSG0vxHc5eCNVh6YgzbpJHSQ68NDROVitwO5Vwwyf4=w2400",
      src: "https://lh6.googleusercontent.com/ndVucOv5qB6MStHjRhFm7ImbFTSG0vxHc5eCNVh6YgzbpJHSQ68NDROVitwO5Vwwyf4=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 26,
      city: "kochi",
      src_web: "https://lh4.googleusercontent.com/bWaLxoxivtycj8FZ1GLAWzMMtArJquzVz8VxEW-gLMztObS_Vpkca623wA28GWfEiDw=w2400",
      src: "https://lh4.googleusercontent.com/bWaLxoxivtycj8FZ1GLAWzMMtArJquzVz8VxEW-gLMztObS_Vpkca623wA28GWfEiDw=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 27,
      city: "kochi",
      src_web: "https://lh5.googleusercontent.com/HNyjT5VCJQrPRzp7h-o-hikyFNH7g-qBJV8is7F8BQfNdPCVZMLpJb08AgtKxhTBB2w=w2400",
      src: "https://lh5.googleusercontent.com/HNyjT5VCJQrPRzp7h-o-hikyFNH7g-qBJV8is7F8BQfNdPCVZMLpJb08AgtKxhTBB2w=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 28,
      city: "kochi",
      src_web: "https://lh3.googleusercontent.com/xeIiVn7TXTFRrVD6NQUiniMbFFPYCbbwnAztGvWfCc5m4Ge9eQY9yNGb9gAbXMOIDQI=w2400",
      src: "https://lh3.googleusercontent.com/xeIiVn7TXTFRrVD6NQUiniMbFFPYCbbwnAztGvWfCc5m4Ge9eQY9yNGb9gAbXMOIDQI=w4000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    },
    {
      id: 29,
      city: "kochi",
      src_web: "https://lh4.googleusercontent.com/b-_wk4YL8HI4OvF2_rQ9ngalCKroDRZ3FF8IZ3Yrh4iktyB9bvqVA0blnrL4ZW6AZaE=w2400",
      src: "https://lh4.googleusercontent.com/b-_wk4YL8HI4OvF2_rQ9ngalCKroDRZ3FF8IZ3Yrh4iktyB9bvqVA0blnrL4ZW6AZaE=w6000",
      // caption: "This is a caption for Image-1",
      ref: useRef(null)
    }
  ])

  // const jaisalmerImages = citiesImages.filter(image => image.city === "jaisalmer")
  // const naggarImages = citiesImages.filter(image => image.city === "naggar")
  // const newDelhiImages = citiesImages.filter(image => image.city === "new-delhi")
  // const bhopalImages = citiesImages.filter(image => image.city === "bhopal")
  // const gangtokImages = citiesImages.filter(image => image.city === "gangtok")
  // const kochiImages = citiesImages.filter(image => image.city === "kochi")

  const [homePageImages] = useState([{
      title: "Teleport",
      imageDetails: teleportImages[3]
    },
    {
      title: "Rock-Paper-Scissors",
      imageDetails: rockPaperScissorImages[15]
    },
    {
      title: "Home",
      imageDetails:  homeImages[3]
    }, 
    {
      title: "Alienation",
      imageDetails: alienationImages[2]
    }
  ])

  const [aboutImages] = useState([
    {
      id: 1,
      src_web: "https://lh5.googleusercontent.com/WZ6HDt-vtPApQ3iksJ4taf58yXnHk-tJo6maFbB7LBnsak8KCfws14VUhbJbOOsli2I=w1017",
      src: "https://lh5.googleusercontent.com/WZ6HDt-vtPApQ3iksJ4taf58yXnHk-tJo6maFbB7LBnsak8KCfws14VUhbJbOOsli2I=w1017",
      ref: useRef(null)
    }
  ])

  const [carouselImages, setCarouselImages] = useState(teleportImages)
  const [selectedImage, setSelectedImage] = useState(0)

  const handleCarouselImageSelect = (selectedIndex, e) => {
    setSelectedImage(selectedIndex);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const homePageRef = useRef(null)
  // const titleImages = images.filter(image => image.title !== undefined && image.title !== null && image.title !== "");
  // const titleRefs = titleImages.map(images => images.ref)
  // const [titleRefsIndex, setTitleRefsIndex] = useState(null)
  // const [homePageNeedsUpdate, setHomePageNeedsUpdate] = useState(false)

  const [shouldReset, setShouldReset] = useState(false)

  // const goToRef = (ref) => () => {
  //   ref.current.scrollIntoView()
  // }

  // const showPages = (homeCardsPage, teleportPage, rockPaperScissorPage, homePage, alienationPage, citiesPage, aboutPage) => {
  //   setShowHomeCards(homeCardsPage)
  //   setShowTeleport(teleportPage);
  //   setShowRockPaperScissor(rockPaperScissorPage)
  //   setShowHome(homePage)
  //   setShowAlienation(alienationPage)
  //   setShowCities(citiesPage);
  //   setShowAbout(aboutPage);
  // }

  // const showHomeCardsPage = () => {
  //   showPages(true, false, false, false, false, false, false);
  //   setCarouselImages(teleportImages)
  //   setShouldReset(true)
  // }

  // const showTeleportPage = () => {
  //   showPages(false, true, false, false, false, false, false);
  //   // setTitleRefsIndex(null);
  //   setCarouselImages(teleportImages)
  //   setShouldReset(true)
  // }

  // const showRockPaperScissorPage = () => {
  //   showPages(false, false, true, false, false, false, false);
  //   // setTitleRefsIndex(null);
  //   setCarouselImages(rockPaperScissorImages)
  //   setShouldReset(true)
  // }

  // const showHomePage = () => {
  //   showPages(false, false, false, true, false, false, false);
  //   // setTitleRefsIndex(null);
  //   setCarouselImages(homeImages)
  //   setShouldReset(true)
  // }

  // const showAlienationPage = () => {
  //   showPages(false, false, false, false, true, false, false);
  //   // setTitleRefsIndex(null);
  //   setCarouselImages(alienationImages)
  //   setShouldReset(true)
  // }

  // const showCitiesPage = () => {
  //   showPages(false, false, false, false, false, true, false);
  //   setCarouselImages(citiesImages)
  //   setShouldReset(true)
  // }

  // const showAboutPage = () => {
  //   showPages(false, false, false, false, false, false, true);
  //   setShouldReset(true)
  // }

  // const nodeRef = useRef(null)

  return (
    <div className="App" ref={scrollRef} style={{ height: "100vh", overflow: "auto", }}>
      
      <Container fluid className="h-100">
        
        <Row className="align-items-center h-100">
          <Col className="h-100">
            <div className="d-flex flex-column h-100">
              {/* <Row> */}
              <SiteNavigationBar 
                // homePageNeedsUpdate={homePageNeedsUpdate} 
                // setHomePageNeedsUpdate={setHomePageNeedsUpdate} 
                // setTitleRefsIndex={setTitleRefsIndex}
                // showHomeCardsPage={showHomeCardsPage} 
                // showTeleportPage={showTeleportPage} 
                // showAboutPage={showAboutPage} 
                // showRockPaperScissorPage={showRockPaperScissorPage} 
                // showHomePage={showHomePage} 
                // showAlienationPage={showAlienationPage}
                // showCitiesPage={showCitiesPage}
                setShouldReset={setShouldReset}
                // goToRef={goToRef} titleRefs={titleRefs} 
                />
              {/* </Row> */}
              <Row className="flex-grow-1 scrollbar-visible">
                {/* <CSSTransition in={showHomeCards} classNames="test" timeout={1000} nodeRef={nodeRef} unmountOnExit onEnter={() => alert("Entered")}>
                  <HomeCards 
                    cssTransitionRef={nodeRef}
                    homePageImages={homePageImages}
                    shouldReset={shouldReset}
                    setShouldReset={setShouldReset}
                    showTeleportPage={showTeleportPage} 
                    showRockPaperScissorPage={showRockPaperScissorPage} 
                    showHomePage={showHomePage} 
                    showAlienationPage={showAlienationPage}
                  />
                </CSSTransition> */}
                {/* <TransitionGroup className="row flex-grow-1">
                  <CSSTransition timeout={1000} classNames="test" key={location.key} > */}
                <Routes location={location} >
                  <Route index element={
                    <HomeCards 
                      homePageImages={homePageImages}
                      shouldReset={shouldReset}
                      setShouldReset={setShouldReset}
                    />
                  } />
                  <Route path="the-series/teleport" element={
                    <TeleportImageCards 
                    // homePageNeedsUpdate={homePageNeedsUpdate} homePageRef={homePageRef} titleRefs={titleRefs} titleRefsIndex={titleRefsIndex} 
                      shouldReset={shouldReset} 
                      setShouldReset={setShouldReset} 
                      handleShow={handleShow} 
                      images={teleportImages} 
                      setSelectedImage={setSelectedImage}
                      setCarouselImages={setCarouselImages} />
                  } />
                  <Route path="the-series/rock-paper-scissors" element={
                    <RockPaperScissorImageCards 
                      shouldReset={shouldReset} 
                      setShouldReset={setShouldReset} 
                      handleShow={handleShow} 
                      images={rockPaperScissorImages} 
                      setSelectedImage={setSelectedImage} 
                      setCarouselImages={setCarouselImages}/>
                  } />
                  <Route path="the-series/home" element={
                    <HomeImageCards 
                      shouldReset={shouldReset} 
                      setShouldReset={setShouldReset} 
                      handleShow={handleShow} 
                      images={homeImages} 
                      setSelectedImage={setSelectedImage}
                      setCarouselImages={setCarouselImages} />
                  } />
                  <Route path="the-series/alienation" element={
                    <AlienationImageCards 
                      shouldReset={shouldReset} 
                      setShouldReset={setShouldReset} 
                      handleShow={handleShow} 
                      images={alienationImages} 
                      setSelectedImage={setSelectedImage}
                      setCarouselImages={setCarouselImages} />
                  } />
                  <Route path="the-cities" element={
                    <CitiesCards 
                      shouldReset={shouldReset} 
                      setShouldReset={setShouldReset} 
                      handleShow={handleShow} 
                      images={citiesImages}
                      setSelectedImage={setSelectedImage}
                      setCarouselImages={setCarouselImages} />
                  } />
                  <Route path="about" element={
                    <AboutCards 
                      shouldReset={shouldReset} 
                      setShouldReset={setShouldReset} 
                      handleShow={handleShow} 
                      images={aboutImages} 
                      setSelectedImage={setSelectedImage}/>
                  } />
                </Routes>
                {/* </CSSTransition>
                </TransitionGroup> */}
                {/* { showHomeCards ? 
                  <HomeCards 
                    homePageImages={homePageImages}
                    shouldReset={shouldReset}
                    setShouldReset={setShouldReset}
                    showTeleportPage={showTeleportPage} 
                    showRockPaperScissorPage={showRockPaperScissorPage} 
                    showHomePage={showHomePage} 
                    showAlienationPage={showAlienationPage}
                  /> : null }
                { showTeleport ? <TeleportImageCards 
                  // homePageNeedsUpdate={homePageNeedsUpdate} homePageRef={homePageRef} titleRefs={titleRefs} titleRefsIndex={titleRefsIndex} 
                  shouldReset={shouldReset} setShouldReset={setShouldReset} handleShow={handleShow} images={teleportImages} setSelectedImage={setSelectedImage} /> : null }
                { showRockPaperScissor ? <RockPaperScissorImageCards shouldReset={shouldReset} setShouldReset={setShouldReset} handleShow={handleShow} images={rockPaperScissorImages} setSelectedImage={setSelectedImage} /> : null }
                { showHome ? <HomeImageCards shouldReset={shouldReset} setShouldReset={setShouldReset} handleShow={handleShow} images={homeImages} setSelectedImage={setSelectedImage} /> : null }
                { showAlienation ? <AlienationImageCards shouldReset={shouldReset} setShouldReset={setShouldReset} handleShow={handleShow} images={alienationImages} setSelectedImage={setSelectedImage} /> : null }
                { showCities ? <CitiesCards 
                  shouldReset={shouldReset} 
                  setShouldReset={setShouldReset} 
                  handleShow={handleShow} 
                  jaisalmerImages={jaisalmerImages} 
                  naggarImages={naggarImages}
                  newDelhiImages={newDelhiImages}
                  bhopalImages={bhopalImages}
                  gangtokImages={gangtokImages}
                  kochiImages={kochiImages}
                  setSelectedImage={setSelectedImage} /> : null }
                { showAbout ? <AboutCards shouldReset={shouldReset} setShouldReset={setShouldReset} handleShow={handleShow} images={teleportImages} setSelectedImage={setSelectedImage} /> : null } */}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} fullscreen={true} dialogClassName='image-modal transparent-card' contentClassName='transparent-card' backdropClassName='image-viewer-modal-backdrop' centered>
        <Modal.Header closeButton className='no-border image-viewer-modal-header'>
        </Modal.Header>
        <Modal.Body className='no-border'>
          <HomeImagesCarousel images={carouselImages} selectedImage={selectedImage} handleCarouselImageSelect={handleCarouselImageSelect}/>
        </Modal.Body>
        <Modal.Footer className='no-border'>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
