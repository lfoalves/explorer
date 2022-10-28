import { useEffect } from "react";
import { useState } from "react";

import { Container } from "./styles";

import imagePlay from '../../assets/sound.svg'
import imagePause from '../../assets/mute.svg'


export function Music() {

  console.log('RENDERIZOU')

 useEffect(() => {
   function Sound() {
    const lofi = new Audio('https://github.com/lfoalves/sounds/blob/master/Floating_City_Chill_Lofi_Beats_TubeRipper/audi06.mp3?raw=true');
    lofi.loop = true;

    const buttonPlay = document.querySelector('#play')
    const buttonPause = document.querySelector('#pause')

    buttonPlay.addEventListener('click', function() {
      lofi.play();
      buttonPlay.classList.toggle('hide')
      buttonPause.classList.toggle('hide')
    })
    buttonPause.addEventListener('click', function() {
      lofi.pause();
      buttonPlay.classList.toggle('hide')
      buttonPause.classList.toggle('hide')
    })
   }
   Sound()
 }, [])

  return (
    <Container>
        <button>
          <svg id="play" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.58579 8.58579C7.36683 7.80474 8.63317 7.80474 9.41421 8.58579L53.4142 52.5858C54.1953 53.3668 54.1953 54.6332 53.4142 55.4142C52.6332 56.1953 51.3668 56.1953 50.5858 55.4142L6.58579 11.4142C5.80474 10.6332 5.80474 9.36683 6.58579 8.58579Z" fill="white"/>
            <path d="M28 17.115V21.34C28.0002 21.4722 28.0528 21.599 28.1462 21.6925L31.1462 24.6925C31.2161 24.7624 31.3051 24.8101 31.402 24.8295C31.499 24.8488 31.5995 24.839 31.6908 24.8013C31.7822 24.7636 31.8603 24.6996 31.9153 24.6175C31.9704 24.5354 31.9998 24.4388 32 24.34V15.0713C32.0056 14.5179 31.8613 13.9734 31.5825 13.4954C31.3036 13.0174 30.9007 12.6238 30.4163 12.3562C29.917 12.0875 29.3517 11.9664 28.7862 12.0069C28.2207 12.0474 27.6783 12.2479 27.2225 12.585C27.1939 12.6048 27.1664 12.6261 27.14 12.6488L23.1475 15.9175C23.0936 15.9618 23.0495 16.0169 23.0181 16.0792C22.9868 16.1415 22.9688 16.2098 22.9654 16.2795C22.962 16.3492 22.9732 16.4188 22.9983 16.4839C23.0234 16.549 23.0619 16.6082 23.1112 16.6575L25.2425 18.79C25.3304 18.8778 25.4478 18.9298 25.5718 18.9358C25.6959 18.9418 25.8178 18.9014 25.9137 18.8225L28 17.115Z" fill="white"/>
            <path d="M28 46.885L18.2412 38.895C17.5248 38.3131 16.6292 37.9969 15.7063 38H8V26H14.34C14.4388 25.9998 14.5354 25.9704 14.6175 25.9153C14.6996 25.8603 14.7636 25.7822 14.8013 25.6908C14.839 25.5995 14.8488 25.499 14.8295 25.402C14.8101 25.3051 14.7624 25.2161 14.6925 25.1462L11.6925 22.1462C11.599 22.0528 11.4722 22.0002 11.34 22H7C6.20435 22 5.44129 22.3161 4.87868 22.8787C4.31607 23.4413 4 24.2044 4 25V39C4 39.7956 4.31607 40.5587 4.87868 41.1213C5.44129 41.6839 6.20435 42 7 42H15.72L27.14 51.35C27.1664 51.3726 27.1939 51.3939 27.2225 51.4137C27.684 51.7554 28.2341 51.957 28.8071 51.9944C29.38 52.0319 29.9517 51.9036 30.4538 51.625C30.9283 51.3547 31.322 50.9625 31.5939 50.4888C31.8658 50.0151 32.006 49.4774 32 48.9313V42.66C31.9998 42.5278 31.9472 42.401 31.8538 42.3075L28.8538 39.3075C28.7839 39.2376 28.6949 39.1899 28.598 39.1705C28.501 39.1512 28.4005 39.161 28.3092 39.1987C28.2178 39.2364 28.1397 39.3004 28.0847 39.3825C28.0296 39.4646 28.0002 39.5612 28 39.66V46.885Z" fill="white"/>
            <path d="M44 32C44 28.93 43.2738 26.015 41.7812 23.0912C41.5346 22.6288 41.1163 22.2816 40.6163 22.1244C40.1162 21.9673 39.5745 22.0126 39.1076 22.2508C38.6407 22.489 38.286 22.901 38.1198 23.3981C37.9535 23.8951 37.9891 24.4376 38.2188 24.9088C39.4175 27.2575 40 29.5775 40 32C40 32.3333 39.9871 32.6721 39.9613 33.0163C39.9506 33.1597 39.9709 33.3037 40.021 33.4385C40.071 33.5733 40.1496 33.6958 40.2513 33.7975L42.7088 36.2562C42.7724 36.3202 42.8521 36.3657 42.9395 36.388C43.0269 36.4103 43.1187 36.4086 43.2052 36.383C43.2917 36.3573 43.3696 36.3088 43.4308 36.2425C43.4919 36.1762 43.534 36.0945 43.5525 36.0062C43.8483 34.6913 43.9983 33.3478 44 32Z" fill="white"/>
            <path d="M52 32C52 25.6013 50.365 21.5137 47.7275 16.9925C47.4566 16.5417 47.0191 16.2158 46.5097 16.0852C46.0003 15.9547 45.4599 16.0301 45.0056 16.295C44.5513 16.5599 44.2197 16.9931 44.0825 17.5008C43.9453 18.0085 44.0135 18.5498 44.2725 19.0075C46.6337 23.055 48 26.4788 48 32C48 34.9787 47.5888 37.36 46.8288 39.5812C46.7677 39.7583 46.7575 39.949 46.7995 40.1315C46.8415 40.3141 46.9339 40.4812 47.0662 40.6138L49.1625 42.7088C49.2204 42.7669 49.2917 42.8099 49.3702 42.8339C49.4486 42.858 49.5318 42.8623 49.6123 42.8466C49.6929 42.831 49.7683 42.7957 49.832 42.744C49.8957 42.6922 49.9456 42.6256 49.9775 42.55C51.2613 39.485 52 36.2387 52 32Z" fill="white"/>
            <path d="M60 32C60 22.7175 57.4762 16.8613 53.6862 10.9238C53.4008 10.4762 52.9493 10.1604 52.431 10.0457C51.9127 9.9311 51.3701 10.0271 50.9225 10.3125C50.4749 10.5979 50.1591 11.0495 50.0445 11.5678C49.9299 12.0861 50.0258 12.6287 50.3112 13.0763C53.7275 18.4225 56 23.6875 56 32C56 37.9312 54.8875 42.265 53.0513 46.125C53.0066 46.2181 52.9919 46.3228 53.0091 46.4247C53.0263 46.5265 53.0747 46.6205 53.1475 46.6937L55.375 48.9238C55.4307 48.9798 55.4989 49.0219 55.5739 49.0465C55.649 49.0711 55.7288 49.0776 55.8069 49.0654C55.8849 49.0532 55.959 49.0226 56.023 48.9763C56.087 48.93 56.1391 48.8691 56.175 48.7988C58.86 43.5275 60 38.375 60 32Z" fill="white"/>
          </svg>
        </button>
        <button>
          <svg id="pause" className="hide" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.7502 12.0104C33.3025 11.9643 33.8569 12.072 34.3517 12.3218C34.8466 12.5715 35.2625 12.9535 35.5535 13.4253C35.8444 13.8971 35.999 14.4402 36 14.9945L36 14.9982V48.9982L36 49.0018C35.999 49.5561 35.8444 50.0993 35.5535 50.5711C35.2625 51.0429 34.8465 51.4248 34.3517 51.6746C33.8569 51.9243 33.3025 52.0321 32.7502 51.9859C32.1978 51.9398 31.669 51.7415 31.2225 51.4131C31.1946 51.3926 31.1673 51.3713 31.1405 51.3494L19.7189 41.9981C19.7172 41.9981 19.7154 41.9982 19.7137 41.9982C19.7112 41.9982 19.7087 41.9982 19.7063 41.9982H11C10.2044 41.9982 9.44129 41.6821 8.87868 41.1195C8.31607 40.5569 8 39.7938 8 38.9982V24.9982C8 24.2025 8.31607 23.4395 8.87868 22.8769C9.44129 22.3142 10.2044 21.9982 11 21.9982H19.719L31.1405 12.6469C31.1673 12.625 31.1946 12.6038 31.2225 12.5833C31.669 12.2549 32.1978 12.0566 32.7502 12.0104ZM32 17.1129L22.2504 25.0952C21.548 25.6829 20.66 26.0029 19.744 25.9982H12V37.9982H19.6996C20.6203 37.993 21.5147 38.3063 22.2309 38.8852C22.2342 38.8878 22.2375 38.8905 22.2407 38.8932L32 46.8835V17.1129Z" fill="#42D3FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0911 22.2185C44.075 21.7165 45.2795 22.1071 45.7815 23.0911C47.1523 25.7777 48 28.6985 48 32C48 35.2688 47.1159 38.2499 45.7876 40.897C45.2922 41.8842 44.0902 42.283 43.103 41.7876C42.1158 41.2922 41.717 40.0902 42.2124 39.103C43.3191 36.8976 44 34.5287 44 32C44 29.424 43.3477 27.1223 42.2185 24.9089C41.7165 23.925 42.1072 22.7205 43.0911 22.2185Z" fill="#42D3FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M48.9926 16.2723C49.9468 15.7159 51.1714 16.0384 51.7277 16.9926C54.3509 21.4912 56 25.5505 56 32C56 38.4594 54.279 42.5547 51.7354 46.9943C51.1862 47.9527 49.9642 48.2845 49.0057 47.7354C48.0473 47.1862 47.7155 45.9641 48.2646 45.0057C50.591 40.9453 52 37.5406 52 32C52 26.4495 50.6491 23.0838 48.2723 19.0074C47.7159 18.0532 48.0384 16.8286 48.9926 16.2723Z" fill="#42D3FF"/>
          </svg>
        </button>
    </Container>
  );
}