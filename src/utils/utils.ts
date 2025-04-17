const capitalizeFrstLetter = (str: string) => {
  if (!str) {
    console.error("capitalizeFrstLetter: empty string");
    return "error";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

type LocalStorageItemKey =
  | "login"
  | "loginItems"
  | "credits"
  | "history"
  | "websites";

export const LOCALSTORAGE_ITEM_DICT: any = {
  login: { defaultVal: undefined },
  loginItems: { defaultVal: {}, isJson: true },
  credits: { defaultVal: 0 },
  websites: { defaultVal: [], isJson: true },
  history: { defaultVal: {}, isJson: true },
};

function getLocalStorageItem(key: LocalStorageItemKey): any {
  const storedValue = localStorage.getItem(key);

  if (storedValue !== null) {
    return LOCALSTORAGE_ITEM_DICT[key].isJson
      ? JSON.parse(storedValue)
      : storedValue;
  } else {
    const { defaultVal, isJson } = LOCALSTORAGE_ITEM_DICT[key];

    if (isJson) {
      localStorage.setItem(key, JSON.stringify(defaultVal));
    } else {
      localStorage.setItem(key, defaultVal);
    }
    return defaultVal;
  }
}
const updateLocalStorageItem = (key: LocalStorageItemKey, value: any) => {
  localStorage.setItem(key, value);
};

export { getLocalStorageItem, updateLocalStorageItem, capitalizeFrstLetter };
