console.log("......")

const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item
    document.body.append(div)
}
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 500);
    }
    )
}
async function main() {
    let t = setInterval(() => {
        let last = document.body.lastElementChild;
        if (last.innerHTML.endsWith("........")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }

    }, 50)
    let text = ["Initialized Hacking now reading your data",
        " Reading Your Files",
        "Password Files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up",
        "Now you've lost your all data"]
    for (const item of text) {
        await addItem(item)
    }

}
main()
