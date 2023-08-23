const fsp = require("fs/promises");

const file = "./assets/readme.txt";

const handleErr = (err) => {
  if (err) {
    console.log(err);
  }
};

const readFile = async (file) => {
  try {
    let data = await fsp.readFile(file, "utf8");
    return data;
  } catch (err) {
    handleErr(err);
  }
};

const basicWrite = async (content) => {
  await fsp.writeFile(file, content, (err) => {
    handleErr(err);
    console.log("updated text");
  });
};

const basicWriteWithFlag = async (content) => {
  await fsp.writeFile(file, content, { flag: "a+" }, (err) => {
    handleErr(err);
    console.log("updated text one more time");
  });
};

const writeUsingAppend = async (content) => {
  await fsp.appendFile(file, content, (err) => {
    handleErr(err);
    console.log("complete");
  });
};

const writeAndRead = async () => {
  const content = "This goes on and on";
  const evenMoreContent = " and again and again";
  const moreContent = content + " and on";
  const lastContent = ".\nBut now it has finished!";

  await basicWrite(content);

  let data = await readFile(file);
  console.log(data);

  await basicWrite(moreContent);
  console.log(await readFile(file));

  await basicWriteWithFlag(evenMoreContent);
  console.log(await readFile(file));

  await writeUsingAppend(lastContent);
  console.log(await readFile(file));
};

writeAndRead();
