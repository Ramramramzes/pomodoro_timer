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


export function Kontur(){
  return(
    <>
      <svg width="165" height="153" viewBox="0 0 165 153" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="kontur" d="M89 6.5H164.5V152.5H0.5V6.5H76H76.1955L76.3391 6.3674L82.5 0.680456L88.6609 6.3674L88.8045 6.5H89Z" fill="white" stroke="#C4C4C4"/>
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
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size} height={size} x="0" y="0" viewBox="0 0 254000 254000"  fill-rule="evenodd" ><g><path fill="#a8b64f" d="M127000 254000C56871 254000 0 197129 0 127000S56871 0 127000 0s127000 56871 127000 127000-56871 127000-127000 127000zm42056-128068-29172 29172V60140c0-3692-3081-6773-6773-6773h-12222c-3692 0-6773 3043-6773 6773v94964l-29171-29172c-2638-2637-6941-2637-9579 0l-8642 8642c-2637 2638-2606 6973 0 9579l54525 54525c1543 1543 3704 2172 5751 1887 2047 285 4209-344 5752-1887l54525-54525c2606-2606 2637-6941 0-9579l-8642-8642c-2638-2637-6941-2637-9579 0z" opacity="1" data-original="#ff4141"></path></g></svg>
    </>
  );
}


export function Hide_btn(){
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" x="0" y="0" viewBox="0 0 32 32"><g><path d="m26.67 7.26-5.56-5a1 1 0 0 0-.67-.26H8.22A3.13 3.13 0 0 0 5 5v22a3.13 3.13 0 0 0 3.22 3h15.56A3.13 3.13 0 0 0 27 27V8a1 1 0 0 0-.33-.74zM24.51 8H21a1 1 0 0 1-1-1V4h.06zM25 27a1.13 1.13 0 0 1-1.22 1H8.22A1.13 1.13 0 0 1 7 27V5a1.13 1.13 0 0 1 1.22-1H18v3a3 3 0 0 0 3 3h4zm-5-12.17a3.84 3.84 0 0 1-1.12 2.71l-1.34 1.34a1.78 1.78 0 0 0-.54 1.29 1 1 0 0 1-2 0 3.84 3.84 0 0 1 1.12-2.71l1.34-1.34a1.78 1.78 0 0 0 .54-1.29A1.83 1.83 0 0 0 16.17 13h-.34A1.83 1.83 0 0 0 14 14.83a1 1 0 0 1-2 0A3.84 3.84 0 0 1 15.83 11h.34A3.84 3.84 0 0 1 20 14.83zm-3 8a1.23 1.23 0 0 1 0 .17 1.05 1.05 0 0 1-.29.71l-.15.12a.76.76 0 0 1-.18.09l-.18.08H16a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21A1.05 1.05 0 0 1 15 23a1.23 1.23 0 0 1 0-.19.6.6 0 0 1 .06-.19.76.76 0 0 1 .09-.18 1.58 1.58 0 0 1 .12-.15 1 1 0 0 1 .33-.21 1 1 0 0 1 1.09.21 1.58 1.58 0 0 1 .12.15.76.76 0 0 1 .09.18.6.6 0 0 1 .1.19z" data-name="Layer 14" fill="#A8B64F" opacity="1" data-original="#A8B64F"></path></g></svg>
    </>
  );
}