async function convertToTitle(threadId) {
    const response = await fetch(`/story/posts/${threadId}.json`);
    const post = await response.json();
    document.getElementById(`threadLink${threadId}`).innerHTML += ` - ${post.subject}`;
}

async function listStories() {
    const response = await fetch('/story/threads/index.json');
    const index = await response.json();
    const storyList = document.getElementById('storyList');
    for (const storyType of Object.keys(index)) {
        let typeHtml = `<h3>${storyType}</h3>`;
        for (const { threadId } of index[storyType]) {
            typeHtml += `<a href="/story/threads/${threadId}.html" id="threadLink${threadId}">${threadId}</a><br>`;
        }
        storyList.innerHTML += typeHtml;
    }
}

listStories().catch(console.error);
