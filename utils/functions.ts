export const getNameFromPath = (path: string,setRouter:Function) => {
    const parts = path.split("/");
    const name = parts[parts.length - 1];
    console.log(name)
    return name;
  };