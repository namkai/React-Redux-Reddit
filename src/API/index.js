


export async function setFrontPage(subReddit) {
    try {
        let fetched = await fetch(subReddit);
        let data = await fetched.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);t

    }
}

export async function getComments(commentThread) {
    try {
        console.log(commentThread, `i'm the comment thread.`);
        let fetched = await fetch(commentThread);
        let data = await fetched.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
