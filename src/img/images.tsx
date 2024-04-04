export function Dots(){
  return(
    <>
      <svg width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3" cy="3" r="3" fill="#C4C4C4"/>
        <circle cx="13" cy="3" r="3" fill="#C4C4C4"/>
        <circle cx="23" cy="3" r="3" fill="#C4C4C4"/>
      </svg>
    </>
  );
}


export function LupaP(){
  return(
    <>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_35_100)">
      <path d="M9.75 5.25H8.25V8.25H5.25V9.75H8.25V12.75H9.75V9.75H12.75V8.25H9.75V5.25ZM9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z" fill="#A8B64F"/>
      </g>
      <defs>
      <clipPath id="clip0_35_100">
      <rect width="18" height="18" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    </>
  );
}


export function LupaM(){
  return(
    <>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_35_103)">
      <path d="M9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z" fill="#A8B64F"/>
      <path d="M5.25 8.25H8.25H9.75H12.75V9.75H9.75H8.25H5.25V8.25Z" fill="#A8B64F"/>
      </g>
      <defs>
      <clipPath id="clip0_35_103">
      <rect width="18" height="18" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    </>
  );
}


export function Pen(){
  return(
    <>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_35_109)">
      <path d="M10.545 6.765L11.235 7.455L4.44 14.25H3.75V13.56L10.545 6.765ZM13.245 2.25C13.0575 2.25 12.8625 2.325 12.72 2.4675L11.3475 3.84L14.16 6.6525L15.5325 5.28C15.825 4.9875 15.825 4.515 15.5325 4.2225L13.7775 2.4675C13.6275 2.3175 13.44 2.25 13.245 2.25ZM10.545 4.6425L2.25 12.9375V15.75H5.0625L13.3575 7.455L10.545 4.6425Z" fill="#A8B64F"/>
      </g>
      <defs>
      <clipPath id="clip0_35_109">
      <rect width="18" height="18" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    </>
  );
}

export function Trash(){
  return(
    <>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_35_114)">
      <path d="M12 6.75V14.25H6V6.75H12ZM10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3H11.625L10.875 2.25ZM13.5 5.25H4.5V14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V5.25Z" fill="#A8B64F"/>
      </g>
      <defs>
      <clipPath id="clip0_35_114">
      <rect width="18" height="18" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    </>
  );
}


export function Kontur({color}:{color:boolean}){
  const fill = !color ? '#333' : 'white'
  return(
    <>
      <svg width="165" height="153" viewBox="0 0 165 153" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="kontur" d="M89 6.5H164.5V152.5H0.5V6.5H76H76.1955L76.3391 6.3674L82.5 0.680456L88.6609 6.3674L88.8045 6.5H89Z" fill={fill} stroke="#C4C4C4"/>
      </svg>
    </>
  );
}


export function Close(){
  return(
    <>
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.9115 8.80583L2.84406 13.9567L0.961665 12.0433L6.02911 6.89245L1.0675 1.84914L2.85992 0.0272091L7.82153 5.07052L12.7673 0.0433371L14.6497 1.95672L9.70392 6.9839L14.6655 12.0272L12.8731 13.8491L7.9115 8.80583Z" fill="#C4C4C4"/>
      </svg>
    </>
  );
}


export function Plus({color}:{color:boolean}){
  const defColorP = !color ? `var(--plus)` : `#C4C4C4`
  return(
    <>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="25" fill={defColorP}/>
      <path d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z" fill="white"/>
      </svg>
    </>
  );
}

export function Minus({color}:{color:boolean}){
  const defColorM = !color ? `var(--minus)` : `#C4C4C4`

  return(
    <>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill={defColorM}/>
        <rect x="17" y="23.7029" width="16" height="3.3939" fill="white"/>
      </svg>
    </>
  );
}


export function ArrowDown({size}:{size:number}){
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size} height={size} x="0" y="0" viewBox="0 0 254000 254000"  fillRule="evenodd" ><g><path fill="#a8b64f" d="M127000 254000C56871 254000 0 197129 0 127000S56871 0 127000 0s127000 56871 127000 127000-56871 127000-127000 127000zm42056-128068-29172 29172V60140c0-3692-3081-6773-6773-6773h-12222c-3692 0-6773 3043-6773 6773v94964l-29171-29172c-2638-2637-6941-2637-9579 0l-8642 8642c-2637 2638-2606 6973 0 9579l54525 54525c1543 1543 3704 2172 5751 1887 2047 285 4209-344 5752-1887l54525-54525c2606-2606 2637-6941 0-9579l-8642-8642c-2638-2637-6941-2637-9579 0z" opacity="1" data-original="#ff4141"></path></g></svg>
    </>
  );
}

export function Moon({size,color}:{size:number,color:boolean}){
  const fill = color ? 'var(--app-green)' : 'white';
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size} height={size} x="0" y="0" viewBox="0 0 640 640.001"><g><path d="M299.215 599.984c125.691 1.305 238.152-77.851 279.336-196.601a9.995 9.995 0 0 0-3.227-11.18 10.003 10.003 0 0 0-11.62-.558 184.66 184.66 0 0 1-104.544 28.402c-110.363-.125-199.805-89.567-199.93-199.93 1.274-84.847 54.141-160.344 133.434-190.554 4.012-1.481 6.633-5.352 6.524-9.63s-2.922-8.003-7-9.285A319.733 319.733 0 0 0 299.215.195C133.59.195-.68 134.461-.68 300.09c0 165.625 134.27 299.894 299.895 299.894zm0-579.797a417.76 417.76 0 0 1 58.625 3.305c-72.074 39.387-117.383 114.5-118.602 196.625.14 121.403 98.52 219.781 219.922 219.926a213.8 213.8 0 0 0 90.121-17.79c-45.12 97.15-142.953 158.86-250.066 157.74-154.582 0-279.903-125.317-279.903-279.903 0-154.59 125.32-279.903 279.903-279.903zm0 0" fill={fill} opacity="1" data-original="#000000"></path></g></svg>
    </>
  );
}

export function Sun({size,color}:{size:number,color:boolean}){
  const fill = color ? 'var(--app-green)' : 'white';
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size} height={size} x="0" y="0" viewBox="0 0 501.335 501.335" ><g><path d="M250.667 412.801c-91.165 0-165.333-74.169-165.333-165.334 0-91.166 74.168-165.334 165.333-165.334S416 156.302 416 247.467s-74.168 165.334-165.333 165.334zm0-309.334c-79.402 0-144 64.598-144 144s64.598 144 144 144 144-64.598 144-144-64.598-144-144-144zM250.667 62.934c-5.891 0-10.667-4.775-10.667-10.667v-41.6C240 4.776 244.776 0 250.667 0s10.667 4.776 10.667 10.667v41.6c-.001 5.891-4.776 10.667-10.667 10.667zM250.667 501.335c-5.891 0-10.667-4.776-10.667-10.667v-41.601c0-5.891 4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667v41.601c-.001 5.891-4.776 10.667-10.667 10.667zM109.867 120.534c-2.73 0-5.459-1.042-7.542-3.125l-28.8-28.8c-4.166-4.166-4.166-10.919 0-15.085s10.919-4.166 15.085 0l28.8 28.8c4.166 4.166 4.166 10.919 0 15.085a10.63 10.63 0 0 1-7.543 3.125zM420.267 430.934c-2.729 0-5.46-1.042-7.542-3.124l-28.8-28.801c-4.166-4.165-4.166-10.919 0-15.084 4.164-4.166 10.92-4.166 15.084 0l28.801 28.8c4.165 4.165 4.165 10.919 0 15.085a10.638 10.638 0 0 1-7.543 3.124zM52.267 261.333h-41.6C4.776 261.333 0 256.559 0 250.667S4.776 240 10.667 240h41.6c5.891 0 10.667 4.776 10.667 10.667s-4.776 10.666-10.667 10.666zM490.667 261.333h-41.601c-5.891 0-10.667-4.775-10.667-10.667S443.176 240 449.067 240h41.601c5.891 0 10.667 4.776 10.667 10.667s-4.777 10.666-10.668 10.666zM81.067 430.934c-2.73 0-5.459-1.042-7.542-3.124-4.166-4.166-4.166-10.92 0-15.085l28.8-28.8c4.166-4.166 10.919-4.166 15.085 0 4.166 4.165 4.166 10.919 0 15.084l-28.8 28.801a10.638 10.638 0 0 1-7.543 3.124zM391.467 120.534c-2.729 0-5.46-1.042-7.542-3.125-4.166-4.166-4.166-10.919 0-15.085l28.8-28.8c4.164-4.166 10.919-4.166 15.085 0 4.165 4.166 4.165 10.919 0 15.085l-28.801 28.8a10.626 10.626 0 0 1-7.542 3.125z" fill={fill} opacity="1" data-original="#000000"></path></g></svg>
    </>
  );
}


export function Statistic({size,color}:{size:number,color:boolean}){
  const fill = !color ? 'var(--back-red)' : 'var(--app-red)';
  return(
    <>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_28270_322)">
      <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill={fill}/>
      </g>
      <defs>
      <clipPath id="clip0_28270_322">
      <rect width={size} height={size} fill="white"/>
      </clipPath>
      </defs>
      </svg>
    </>
  );
}

export function Logo({width}:{width:number}){
  const defWidth = 205
  const defHeight = 40
  return(
    <>
      <svg width={!width ? defWidth : width} height={!width ? (width / defWidth) * defHeight : defHeight} viewBox="0 0 205 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M59.5234 16.2383C61.1172 16.2383 62.4102 16.832 63.4023 18.0195C64.4023 19.207 64.9023 20.7617 64.9023 22.6836C64.9023 24.6055 64.4062 26.1641 63.4141 27.3594C62.4297 28.5469 61.1406 29.1406 59.5469 29.1406C58.5547 29.1406 57.6758 28.8945 56.9102 28.4023C56.1523 27.9023 55.5938 27.2344 55.2344 26.3984H55.1992V33.1367H53.6523V16.3789H55.1172V18.9922H55.1523C55.4883 18.1797 56.0547 17.5195 56.8516 17.0117C57.6484 16.4961 58.5391 16.2383 59.5234 16.2383ZM59.2539 27.7461C60.4727 27.7461 61.4531 27.2852 62.1953 26.3633C62.9453 25.4336 63.3203 24.2109 63.3203 22.6953C63.3203 21.1797 62.9453 19.957 62.1953 19.0273C61.4531 18.0898 60.4727 17.6211 59.2539 17.6211C58.0508 17.6211 57.0703 18.0938 56.3125 19.0391C55.5625 19.9766 55.1875 21.1914 55.1875 22.6836C55.1875 24.1836 55.5625 25.4023 56.3125 26.3398C57.0703 27.2773 58.0508 27.7461 59.2539 27.7461ZM72.1562 29.1406C70.4219 29.1406 69.0312 28.5586 67.9844 27.3945C66.9453 26.2227 66.4258 24.6523 66.4258 22.6836C66.4258 20.7227 66.9453 19.1602 67.9844 17.9961C69.0312 16.8242 70.4219 16.2383 72.1562 16.2383C73.8984 16.2383 75.2891 16.8242 76.3281 17.9961C77.375 19.1602 77.8984 20.7227 77.8984 22.6836C77.8984 24.6445 77.375 26.2109 76.3281 27.3828C75.2891 28.5547 73.8984 29.1406 72.1562 29.1406ZM72.1562 27.7461C73.4453 27.7461 74.4609 27.2969 75.2031 26.3984C75.9453 25.4922 76.3164 24.2539 76.3164 22.6836C76.3164 21.1133 75.9453 19.8789 75.2031 18.9805C74.4609 18.0742 73.4453 17.6211 72.1562 17.6211C70.875 17.6211 69.8633 18.0742 69.1211 18.9805C68.3789 19.8789 68.0078 21.1133 68.0078 22.6836C68.0078 24.2539 68.3789 25.4922 69.1211 26.3984C69.8633 27.2969 70.875 27.7461 72.1562 27.7461ZM80.0664 29V16.3789H81.5195V18.7344H81.5664C81.8398 17.9766 82.3008 17.3711 82.9492 16.918C83.5977 16.4648 84.3633 16.2383 85.2461 16.2383C86.1445 16.2383 86.9141 16.4766 87.5547 16.9531C88.2031 17.4297 88.6484 18.0742 88.8906 18.8867H88.9258C89.2305 18.0898 89.7383 17.4492 90.4492 16.9648C91.168 16.4805 91.9922 16.2383 92.9219 16.2383C94.1562 16.2383 95.1445 16.6211 95.8867 17.3867C96.6289 18.1445 97 19.1602 97 20.4336V29H95.4414V20.7852C95.4414 19.8008 95.1797 19.0273 94.6562 18.4648C94.1406 17.9023 93.4219 17.6211 92.5 17.6211C91.5625 17.6211 90.793 17.9492 90.1914 18.6055C89.5977 19.2539 89.3008 20.0898 89.3008 21.1133V29H87.7539V20.6328C87.7539 19.7344 87.4844 19.0078 86.9453 18.4531C86.4062 17.8984 85.7031 17.6211 84.8359 17.6211C83.8984 17.6211 83.125 17.9648 82.5156 18.6523C81.9141 19.3398 81.6133 20.2227 81.6133 21.3008V29H80.0664ZM104.828 29.1406C103.094 29.1406 101.703 28.5586 100.656 27.3945C99.6172 26.2227 99.0977 24.6523 99.0977 22.6836C99.0977 20.7227 99.6172 19.1602 100.656 17.9961C101.703 16.8242 103.094 16.2383 104.828 16.2383C106.57 16.2383 107.961 16.8242 109 17.9961C110.047 19.1602 110.57 20.7227 110.57 22.6836C110.57 24.6445 110.047 26.2109 109 27.3828C107.961 28.5547 106.57 29.1406 104.828 29.1406ZM104.828 27.7461C106.117 27.7461 107.133 27.2969 107.875 26.3984C108.617 25.4922 108.988 24.2539 108.988 22.6836C108.988 21.1133 108.617 19.8789 107.875 18.9805C107.133 18.0742 106.117 17.6211 104.828 17.6211C103.547 17.6211 102.535 18.0742 101.793 18.9805C101.051 19.8789 100.68 21.1133 100.68 22.6836C100.68 24.2539 101.051 25.4922 101.793 26.3984C102.535 27.2969 103.547 27.7461 104.828 27.7461ZM117.508 29.1406C115.922 29.1406 114.625 28.5469 113.617 27.3594C112.609 26.1641 112.105 24.6055 112.105 22.6836C112.105 20.7695 112.605 19.2188 113.605 18.0312C114.605 16.8359 115.895 16.2383 117.473 16.2383C118.473 16.2383 119.359 16.4883 120.133 16.9883C120.906 17.4805 121.465 18.1406 121.809 18.9688H121.844V11.3516H123.402V29H121.926V26.3164H121.891C121.523 27.1836 120.953 27.8711 120.18 28.3789C119.406 28.8867 118.516 29.1406 117.508 29.1406ZM120.707 19.0391C119.949 18.0938 118.965 17.6211 117.754 17.6211C116.543 17.6211 115.562 18.0859 114.812 19.0156C114.062 19.9453 113.688 21.168 113.688 22.6836C113.688 24.1992 114.062 25.4219 114.812 26.3516C115.562 27.2812 116.543 27.7461 117.754 27.7461C118.965 27.7461 119.949 27.2773 120.707 26.3398C121.473 25.4023 121.855 24.1836 121.855 22.6836C121.855 21.1914 121.473 19.9766 120.707 19.0391ZM131.406 29.1406C129.672 29.1406 128.281 28.5586 127.234 27.3945C126.195 26.2227 125.676 24.6523 125.676 22.6836C125.676 20.7227 126.195 19.1602 127.234 17.9961C128.281 16.8242 129.672 16.2383 131.406 16.2383C133.148 16.2383 134.539 16.8242 135.578 17.9961C136.625 19.1602 137.148 20.7227 137.148 22.6836C137.148 24.6445 136.625 26.2109 135.578 27.3828C134.539 28.5547 133.148 29.1406 131.406 29.1406ZM131.406 27.7461C132.695 27.7461 133.711 27.2969 134.453 26.3984C135.195 25.4922 135.566 24.2539 135.566 22.6836C135.566 21.1133 135.195 19.8789 134.453 18.9805C133.711 18.0742 132.695 17.6211 131.406 17.6211C130.125 17.6211 129.113 18.0742 128.371 18.9805C127.629 19.8789 127.258 21.1133 127.258 22.6836C127.258 24.2539 127.629 25.4922 128.371 26.3984C129.113 27.2969 130.125 27.7461 131.406 27.7461ZM139.316 29V16.3789H140.77V18.6172H140.816C141.035 17.8672 141.426 17.2852 141.988 16.8711C142.551 16.4492 143.227 16.2383 144.016 16.2383C144.352 16.2383 144.664 16.2812 144.953 16.3672V17.9141C144.688 17.7891 144.305 17.7266 143.805 17.7266C142.914 17.7266 142.199 18.0469 141.66 18.6875C141.129 19.3203 140.863 20.1484 140.863 21.1719V29H139.316ZM151.117 29.1406C149.383 29.1406 147.992 28.5586 146.945 27.3945C145.906 26.2227 145.387 24.6523 145.387 22.6836C145.387 20.7227 145.906 19.1602 146.945 17.9961C147.992 16.8242 149.383 16.2383 151.117 16.2383C152.859 16.2383 154.25 16.8242 155.289 17.9961C156.336 19.1602 156.859 20.7227 156.859 22.6836C156.859 24.6445 156.336 26.2109 155.289 27.3828C154.25 28.5547 152.859 29.1406 151.117 29.1406ZM151.117 27.7461C152.406 27.7461 153.422 27.2969 154.164 26.3984C154.906 25.4922 155.277 24.2539 155.277 22.6836C155.277 21.1133 154.906 19.8789 154.164 18.9805C153.422 18.0742 152.406 17.6211 151.117 17.6211C149.836 17.6211 148.824 18.0742 148.082 18.9805C147.34 19.8789 146.969 21.1133 146.969 22.6836C146.969 24.2539 147.34 25.4922 148.082 26.3984C148.824 27.2969 149.836 27.7461 151.117 27.7461ZM167.91 31.6016H156.953V30.4297H167.91V31.6016ZM174.648 29.1406C173.641 29.1406 172.75 28.8945 171.977 28.4023C171.211 27.9023 170.641 27.2109 170.266 26.3281H170.23V29H168.754V11.3516H170.301V18.9688H170.336C170.703 18.1172 171.27 17.4492 172.035 16.9648C172.801 16.4805 173.68 16.2383 174.672 16.2383C176.258 16.2383 177.543 16.832 178.527 18.0195C179.512 19.207 180.004 20.7617 180.004 22.6836C180.004 24.6133 179.508 26.1719 178.516 27.3594C177.531 28.5469 176.242 29.1406 174.648 29.1406ZM177.309 19.0156C176.574 18.0859 175.602 17.6211 174.391 17.6211C173.18 17.6211 172.191 18.0938 171.426 19.0391C170.668 19.9844 170.289 21.2031 170.289 22.6953C170.289 24.1875 170.668 25.4023 171.426 26.3398C172.191 27.2773 173.176 27.7461 174.379 27.7461C175.59 27.7461 176.566 27.2852 177.309 26.3633C178.051 25.4336 178.422 24.207 178.422 22.6836C178.422 21.168 178.051 19.9453 177.309 19.0156ZM187.258 29.1406C185.523 29.1406 184.133 28.5586 183.086 27.3945C182.047 26.2227 181.527 24.6523 181.527 22.6836C181.527 20.7227 182.047 19.1602 183.086 17.9961C184.133 16.8242 185.523 16.2383 187.258 16.2383C189 16.2383 190.391 16.8242 191.43 17.9961C192.477 19.1602 193 20.7227 193 22.6836C193 24.6445 192.477 26.2109 191.43 27.3828C190.391 28.5547 189 29.1406 187.258 29.1406ZM187.258 27.7461C188.547 27.7461 189.562 27.2969 190.305 26.3984C191.047 25.4922 191.418 24.2539 191.418 22.6836C191.418 21.1133 191.047 19.8789 190.305 18.9805C189.562 18.0742 188.547 17.6211 187.258 17.6211C185.977 17.6211 184.965 18.0742 184.223 18.9805C183.48 19.8789 183.109 21.1133 183.109 22.6836C183.109 24.2539 183.48 25.4922 184.223 26.3984C184.965 27.2969 185.977 27.7461 187.258 27.7461ZM199.188 23.7969H199.141L195.648 29H193.891L198.344 22.6484L193.938 16.3789H195.695L199.199 21.4648H199.234L202.703 16.3789H204.461L200.043 22.5898L204.426 29H202.668L199.188 23.7969Z" fill="#DC3E22"/>
      <g clipPath="url(#clip0_28270_278)">
      <path d="M38.9151 23.2834C38.9151 33.7058 30.466 40 20.0437 40C9.62098 40 1.17188 31.5509 1.17188 21.1282C1.17188 10.7059 9.88496 4.2981 20.3073 4.2981C30.73 4.2981 38.9151 12.8607 38.9151 23.2834Z" fill="#DC3E22"/>
      <path d="M28.238 12.6066C27.3211 11.673 25.8377 10.8048 24.733 10.551C25.3401 10.0127 25.4623 9.99494 26.2227 9.61816C28.1713 8.65365 31.0576 8.56485 31.0576 8.56485C31.0576 8.56485 27.6509 6.8042 25.1601 6.91468C24.5259 6.94257 23.8571 7.16658 23.2118 7.48403C23.5757 6.97054 23.9205 6.45998 24.1409 6.07643C24.8152 4.90368 25.524 3.42627 25.524 3.42627C25.524 3.42627 22.9122 3.56573 21.7008 5.01565C21.2407 5.56645 20.8934 6.26625 20.6392 6.92275C20.1878 6.40419 19.6896 5.94242 19.1913 5.58195C16.6999 3.77896 12.7192 4.16903 12.7192 4.16903C12.7192 4.16903 15.7263 5.87486 17.0793 7.57656C17.6076 8.2411 18.1437 8.54842 18.4642 9.29352C17.3564 9.05367 14.8569 9.13565 13.63 9.59057C10.4771 10.7599 9.11852 15.4649 9.11852 15.4649C9.11852 15.4649 12.1952 13.3443 16.3813 11.8565C17.3017 11.5295 18.2748 11.4429 19.1229 11.4578C18.7379 12.0575 18.3173 12.8363 17.999 13.7546C17.2247 15.9904 18.2479 21.3113 18.2479 21.3113C18.2479 21.3113 20.4896 18.1647 21.403 15.6157C21.8718 14.3073 21.9879 12.9936 21.9904 12.0242C22.8217 12.3931 23.8009 12.9319 24.5326 13.398C28.2794 15.7852 30.072 20.1435 30.072 20.1435C30.072 20.1435 30.5941 15.006 28.238 12.6066Z" fill="#899441"/>
      <path d="M20.5008 10.3094C20.4889 10.3094 20.477 10.3091 20.4651 10.3088C19.7242 10.2896 19.1391 9.67376 19.1572 8.9334C19.1587 8.86931 19.2234 4.36125 16.7191 2.40111C16.135 1.94395 16.0318 1.09984 16.489 0.515424C16.9465 -0.0686834 17.7906 -0.171833 18.3747 0.285626C21.9559 3.08806 21.8491 8.76128 21.843 9.00145C21.8238 9.73083 21.2262 10.3094 20.5008 10.3094Z" fill="#A8B64F"/>
      </g>
      <defs>
      <clipPath id="clip0_28270_278">
      <rect width="40" height="40" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    </>
  );
}

export function TomatoSmile({width}:{width:number}){
  const defWidth = 115
  const defHeight = 115
  return(
    <>
      <svg width={!width ? defWidth : width} height={!width ? (width / defWidth) * defHeight : defHeight} viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_16_527)">
      <path d="M111.881 66.9398C111.881 96.9041 87.5898 115 57.6255 115C27.6603 115 3.36914 90.7089 3.36914 60.7437C3.36914 30.7794 28.4192 12.3571 58.3836 12.3571C88.3488 12.3571 111.881 36.9746 111.881 66.9398Z" fill="#DC3E22"/>
      <path d="M81.185 36.2439C78.5489 33.5598 74.284 31.0639 71.1081 30.3341C72.8534 28.7865 73.2046 28.7355 75.391 27.6522C80.9932 24.8793 89.2913 24.624 89.2913 24.624C89.2913 24.624 79.497 19.5621 72.3358 19.8797C70.5127 19.9599 68.5898 20.604 66.7346 21.5166C67.7807 20.0403 68.7719 18.5725 69.4056 17.4698C71.3442 14.0981 73.3822 9.85057 73.3822 9.85057C73.3822 9.85057 65.8733 10.2515 62.3903 14.42C61.0676 16.0036 60.0691 18.0155 59.3384 19.9029C58.0406 18.4121 56.6082 17.0845 55.1756 16.0481C48.0129 10.8645 36.5683 11.986 36.5683 11.986C36.5683 11.986 45.2138 16.8902 49.1036 21.7826C50.6224 23.6932 52.1638 24.5767 53.0852 26.7189C49.9003 26.0293 42.7142 26.265 39.1867 27.5729C30.1222 30.9348 26.2164 44.4617 26.2164 44.4617C26.2164 44.4617 35.0618 38.3648 47.0968 34.0876C49.743 33.1475 52.5406 32.8983 54.9789 32.9411C53.872 34.6654 52.6628 36.9045 51.7478 39.5446C49.5215 45.9724 52.4634 61.2701 52.4634 61.2701C52.4634 61.2701 58.9082 52.2234 61.5343 44.8951C62.8821 41.1335 63.2157 37.3568 63.2231 34.5698C65.6131 35.6302 68.4281 37.1793 70.5319 38.5193C81.3038 45.3826 86.4576 57.9127 86.4576 57.9127C86.4576 57.9127 87.9585 43.1422 81.185 36.2439Z" fill="#899441"/>
      <path d="M58.9395 29.6396C58.9053 29.6396 58.8711 29.6388 58.8368 29.6379C56.7066 29.5826 55.0246 27.8121 55.0764 25.6835C55.0808 25.4993 55.2668 12.5386 48.067 6.90318C46.3877 5.58886 46.0911 3.16203 47.4054 1.48184C48.7206 -0.197465 51.1475 -0.49402 52.8268 0.821175C63.1229 8.87817 62.8158 25.1887 62.7982 25.8792C62.7429 27.9761 61.025 29.6396 58.9395 29.6396Z" fill="#A8B64F"/>
      <circle cx="41.5" cy="64.5" r="2.5" fill="black"/>
      <g filter="url(#filter0_f_16_527)">
      <circle cx="29.5" cy="75.5" r="5.5" fill="#EA8979"/>
      </g>
      <g filter="url(#filter1_f_16_527)">
      <circle cx="85.5" cy="75.5" r="5.5" fill="#EA8979"/>
      </g>
      <circle cx="73.5" cy="64.5" r="2.5" fill="black"/>
      <path d="M46 78C50 82 64.5 83 68.5 78" stroke="black"/>
      </g>
      <defs>
      <filter id="filter0_f_16_527" x="20" y="66" width="19" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_16_527"/>
      </filter>
      <filter id="filter1_f_16_527" x="76" y="66" width="19" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_16_527"/>
      </filter>
      <clipPath id="clip0_16_527">
      <rect width="115" height="115" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    </>
  );
}



export function Tomato({width}:{width:number}){
  const defWidth = 81
  const defHeight = 81
  return(
    <>
      <svg width={!width ? defWidth : width} height={!width ? (width / defWidth) * defHeight : defHeight} viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_16_566)">
      <path d="M78.8031 47.4453C78.8031 68.5505 61.6937 81.2964 40.5884 81.2964C19.4825 81.2964 2.37305 64.187 2.37305 43.0811C2.37305 21.9758 20.017 9.00003 41.1223 9.00003C62.2283 9.00003 78.8031 26.3393 78.8031 47.4453Z" fill="#DC3E22"/>
      <path d="M57.1821 25.5283C55.3254 23.6378 52.3214 21.8798 50.0845 21.3658C51.3138 20.2757 51.5612 20.2398 53.1011 19.4768C57.0471 17.5237 62.8917 17.3438 62.8917 17.3438C62.8917 17.3438 55.9932 13.7785 50.9492 14.0022C49.6651 14.0587 48.3107 14.5124 47.004 15.1552C47.7408 14.1154 48.439 13.0815 48.8853 12.3048C50.2508 9.92997 51.6862 6.93822 51.6862 6.93822C51.6862 6.93822 46.3974 7.22062 43.9441 10.1567C43.0125 11.2721 42.3092 12.6892 41.7945 14.0186C40.8804 12.9685 39.8715 12.0334 38.8625 11.3035C33.8174 7.65241 25.7565 8.4423 25.7565 8.4423C25.7565 8.4423 31.8459 11.8966 34.5857 15.3425C35.6554 16.6882 36.7411 17.3106 37.3901 18.8194C35.1468 18.3337 30.0853 18.4997 27.6007 19.4209C21.2162 21.7888 18.4651 31.3165 18.4651 31.3165C18.4651 31.3165 24.6953 27.0221 33.1722 24.0095C35.036 23.3473 37.0065 23.1718 38.7239 23.202C37.9443 24.4165 37.0926 25.9936 36.4481 27.8531C34.88 32.3805 36.9521 43.1555 36.9521 43.1555C36.9521 43.1555 41.4915 36.7834 43.3412 31.6218C44.2905 28.9723 44.5255 26.3121 44.5307 24.3491C46.2141 25.0961 48.1968 26.1872 49.6786 27.131C57.2658 31.9651 60.8959 40.7907 60.8959 40.7907C60.8959 40.7907 61.9531 30.3871 57.1821 25.5283Z" fill="#899441"/>
      <path d="M41.5144 20.8766C41.4903 20.8766 41.4662 20.876 41.4421 20.8754C39.9416 20.8365 38.757 19.5894 38.7934 18.0902C38.7965 17.9604 38.9275 8.83157 33.8564 4.86227C32.6735 3.93653 32.4647 2.2272 33.3904 1.04376C34.3168 -0.139053 36.0261 -0.347931 37.2089 0.578423C44.4609 6.25335 44.2446 17.7416 44.2323 18.228C44.1933 19.705 42.9833 20.8766 41.5144 20.8766Z" fill="#A8B64F"/>
      </g>
      <defs>
      <clipPath id="clip0_16_566">
      <rect width="81" height="81" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    </>
  );
}

export function Focus({color}: {color:string}){
  return(
    <>
      <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z" stroke={color} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M57.5 95C78.2107 95 95 78.2107 95 57.5C95 36.7893 78.2107 20 57.5 20C36.7893 20 20 36.7893 20 57.5C20 78.2107 36.7893 95 57.5 95Z" stroke={color} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M57.5 78C68.8218 78 78 68.8218 78 57.5C78 46.1782 68.8218 37 57.5 37C46.1782 37 37 46.1782 37 57.5C37 68.8218 46.1782 78 57.5 78Z" stroke={color} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </>
  )
}

export function Clock({color}: {color:string}){
  return(
    <>
      <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z" stroke={color} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M57.3154 30.158V57.3159L70.8944 70.8948" stroke={color} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </>
  )
}

export function Stop({color}: {color:string}){
  return(
    <>
      <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z" stroke={color} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 20L95 94" stroke={color} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </>
  )
}


export function Alert({color}: {color:string}){
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" x="0" y="0" viewBox="0 0 512 512"><g><path fill={color} fillRule="evenodd" d="M256.249.25c141.384 0 256 114.623 256 256s-114.615 256-256 256-256-114.622-256-256 114.623-256 256-256zm57.583 95.073a6.515 6.515 0 1 0-5.372 11.87 127.841 127.841 0 0 1 75.168 116.14 6.513 6.513 0 0 0 13.025 0 140.9 140.9 0 0 0-82.821-128.01zM122.363 229.84a6.5 6.5 0 0 0 6.5-6.507 127.845 127.845 0 0 1 75.168-116.14 6.51 6.51 0 0 0-5.368-11.861 140.875 140.875 0 0 0-82.82 128 6.509 6.509 0 0 0 6.517 6.507zm120.208-114.607a13.676 13.676 0 1 0 13.678-13.669 13.707 13.707 0 0 0-13.678 13.669zm-104.412 252.05h236.167A9.124 9.124 0 0 0 381.7 352.8l-37.52-51.6a6.51 6.51 0 0 1-1.243-3.831v-74.036a86.688 86.688 0 1 0-173.375 0v74.036a6.535 6.535 0 0 1-1.248 3.831l-37.524 51.6a9.121 9.121 0 0 0 7.369 14.485zm118.09-216.311a6.515 6.515 0 0 0 0 13.029 59.4 59.4 0 0 1 59.332 59.332 6.515 6.515 0 0 0 13.029 0 72.629 72.629 0 0 0-72.361-72.361zM292.461 380.3h-72.428c-.014.4-.027.807-.027 1.213a36.243 36.243 0 0 0 72.486 0c0-.404-.013-.813-.031-1.213z" opacity="1" data-original="#4caf50"></path></g></svg>
    </>
  )
}
