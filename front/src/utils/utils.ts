const capitalizeFrstLetter = (str: string) => {
  if (!str) {
    console.error("capitalizeFrstLetter: empty string");
    return "error";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export { capitalizeFrstLetter };
