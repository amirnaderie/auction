export const onlyLettersAndNumbers = (str: string) => {
  return /^[\u0600-\u06FFA-Za-z0-9._/,-\s\u200C]*$/.test(str);
};

export const IsLoggedIn = (): boolean => {
  return sessionStorage.getItem("authenticated") ? true : false;
};

export const Change_REACT_APP_URL = (inpUrl: string) => {
  let retUrl = "";
  const inpArr = inpUrl.split("/");
  const newUrl = inpArr.slice(0, 3);
  retUrl = newUrl.toString().replaceAll(",", "/");

  return retUrl;
};

export const onlyDigits = (e: any) => {
  const allowedKeys: string[] = [
    "Delete",
    "Backspace",
    "Enter",
    "Control",
    "v",
    "ArrowLeft",
    "ArrowRight",
  ];

  if (isNaN(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault();
    return false;
  } else return true;
};

export const maskUserId = (userId: string) => {
  return userId.startsWith("09") ? `+98${userId.substring(1, 11)}` : userId;
};

export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const uuid = (Math.random() * 16) | 0,
      v = c == "x" ? uuid : (uuid & 0x3) | 0x8;
    return uuid.toString(16);
  });
};

const addCommas = (num: string) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const removeNonNumeric = (num: string) => num.toString().replace(/[^0-9]/g, "");

export const thousandSeparator = (inp: string): string => {
  return inp.length === 0 ? "" : addCommas(removeNonNumeric(inp));
};

export const removeCommas = (inp: string): string => {
  return inp.replaceAll(",", "");
};

export const dateMask = (inp: string): string => {
  return inp && inp.length === 8
    ? inp.substring(0, 4) +
        "/" +
        inp.substring(4, 6) +
        "/" +
        inp.substring(6, 8)
    : inp;
};

export const packageDurationType = (inp: number): string => {
  switch (inp) {
    case 0:
      return "روز";
    case 1:
      return "هفته";
    case 2:
      return "ماه";
    default:
      return "سال";
  }
};

export const toShamsi = (dateInt: any) => {
  if (!dateInt) return "";
  const dateFormat = new Intl.DateTimeFormat("fa", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    numberingSystem: "latn",
  });

  return dateFormat.format(new Date(dateInt).getTime());
};

