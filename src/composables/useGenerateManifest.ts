export default (directories: string[]) => {
  const assets: any = [];

  directories.forEach((directory) => {
    assets.push(...generateAssets(directory));
  });

  for (let i = 0; i < directories.length; i++) {
    assets.push(...generateAssets(directories[i]));
  }

  return {
    bundles: [
      {
        name: "manifest",
        assets,
      },
    ],
  };
};

function generateAssets(directory: string) {
  let assets: { [key: string]: any };

  switch (directory) {
    case "images":
      assets = import.meta.glob("@/assets/images/*", { eager: true });
      break;
    case "fonts":
      assets = import.meta.glob("@/assets/fonts/*", { eager: true });
      break;
    case "sounds":
      assets = import.meta.glob("@/assets/sounds/*", { eager: true });
      break;
    case "mainview":
      assets = import.meta.glob("@/assets/mainview/*", { eager: true });
      break;
    case "matchingpair":
      assets = import.meta.glob("@/assets/matchingpair/*", { eager: true });
      break;
    default:
      assets = [];
      break;
  }
  return Object.keys(assets).map((value) => {
    const [fileName]: any = assets[value].default
      ?.split("/")
      ?.pop()
      ?.split(".");

    return {
      name: fileName,
      srcs: assets[value].default,
    };
  });
}
