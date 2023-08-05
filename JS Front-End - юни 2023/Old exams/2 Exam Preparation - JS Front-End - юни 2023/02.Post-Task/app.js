window.addEventListener("load", solve);

function solve() {
    const title = document.getElementById('task-title');
    const category = document.getElementById('task-category');
    const content = document.getElementById('task-content');

    const review = document.getElementById('review-list');
    const uploaded = document.getElementById('published-list');

    
        document.getElementById('publish-btn').addEventListener('click', () => {
            if (title.value == '' || category.value == '' || content.value == '') {
                return;
            }
            let li = document.createElement('li');
            li.classList = 'rpost';

            let article = document.createElement('article');

            let h4 = document.createElement('h4');
            h4.textContent = title.value;
            let p1 = document.createElement('p');
            p1.textContent = `Category: ${category.value}`;
            let p2 = document.createElement('p');
            p2.textContent = `Content: ${content.value}`;
            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.classList = 'action-btn edit';
            editBtn.addEventListener('click', () => {
                const parent = editBtn.parentElement;

                const h4Parent = parent.querySelector('h4');
                const pParent = parent.querySelectorAll('p');

                title.value = h4Parent.textContent;
                category.value = (pParent[0].textContent).slice(10, pParent[0].textContent.length);
                content.value = (pParent[1].textContent).slice(9, pParent[1].textContent.length);

                parent.remove();

            });
            let postBtn = document.createElement('button');
            postBtn.addEventListener('click', () => {
                const parent = postBtn.parentElement;

                let articleParent = parent.querySelector('article');

                uploaded.appendChild(articleParent);

                parent.remove();
            });
            postBtn.textContent = 'Post';
            postBtn.classList = 'action-btn post';

            article.appendChild(h4);
            article.appendChild(p1);
            article.appendChild(p2);
            li.appendChild(article);
            li.appendChild(editBtn);
            li.appendChild(postBtn);

            review.appendChild(li)

            title.value = '';
            category.value = '';
            content.value = '';
        });
    
}